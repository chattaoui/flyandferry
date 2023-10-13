<template>
  <div id="map"></div>
</template>
  
<script>
import { ref, onMounted, watch } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'MapView',
  props: {
    place: {
      type: String,
      default: 'La Goulette, Tunisia', // Default value is La Goulette
    },
    destination: {
      type: String,
      default: '', // Default value is an empty string
    },
  },
  setup(props) {
    const map = ref(null);
    const mapInstance = ref(null);

    const getCoordinates = async (location) => {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`);
        const data = await response.json();
        if (data && data.length > 0) {
          return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    onMounted(async () => {
      let centerCoordinates;
      const staticPlace = "Tunis";

      // Fetch coordinates for the default place
      if (!props.destination && !props.place) {
        centerCoordinates = [36.818970, 10.304107];
      } else {
        centerCoordinates = await getCoordinates(staticPlace);
      }

      // Initialize the map
      mapInstance.value = L.map('map').setView(centerCoordinates, 4);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapInstance.value);

      // Add markers and polylines after mapInstance.value is initialized
      if (props.destination) {
        const placeCoordinates = await getCoordinates(props.place);
        const destinationCoordinates = await getCoordinates(props.destination);

        if (placeCoordinates && destinationCoordinates) {
          const routeCoordinates = [placeCoordinates, destinationCoordinates];
          const route = L.polyline(routeCoordinates, { color: 'blue', dashArray: '1, 10' }).addTo(mapInstance.value);

          // Automatically fit the map to the bounds of the route
          mapInstance.value.fitBounds(route.getBounds());
          mapInstance.value.setZoom(5)

          L.marker(placeCoordinates).addTo(mapInstance.value).bindPopup(props.place);
          L.marker(destinationCoordinates).addTo(mapInstance.value).bindPopup(props.destination);
        }
      }
      else if (props.place) {
        // Center the map at the new place if no destination is provided
        const placeCoordinates = await getCoordinates(props.place);
        if (placeCoordinates) {
          mapInstance.value.setView(placeCoordinates, 5);
          L.marker(placeCoordinates).addTo(mapInstance.value).bindPopup(props.place);
        }
        console.log("we're here")
      }

      // Set map dimensions and invalidate size
      mapInstance.value.getContainer().style.height = `50vh`; // Set the height in vh
      mapInstance.value.getContainer().style.width = `30vw`;   // Set the width in vw
      mapInstance.value.invalidateSize();
    });


    // Watch for changes in props and update the map accordingly
    watch(() => [props.place, props.destination], async ([newPlace, newDestination]) => {

      mapInstance.value.eachLayer(layer => {
        if (layer instanceof L.Polyline || layer instanceof L.Marker) {
          mapInstance.value.removeLayer(layer);
        }
      });
      mapInstance.value.setView([36.818970, 10.304107], 5);

      //   if (!newPlace && !newDestination){
      //   mapInstance.value.eachLayer(layer => {
      //     if (layer instanceof L.Polyline || layer instanceof L.Marker) {
      //       mapInstance.value.removeLayer(layer);
      //     }
      //   });
      //   mapInstance.value.setView([36.818970, 10.304107], 5);
      // }


      if (!newDestination && mapInstance.value) {
        // Center the map at the new place if no destination is provided
        const centerCoordinates = await getCoordinates(newPlace);
        if (centerCoordinates) {
          mapInstance.value.setView(centerCoordinates, 5);
          L.marker(centerCoordinates).addTo(mapInstance.value).bindPopup(centerCoordinates);
        }
      } else {
        const placeCoordinates = await getCoordinates(newPlace);
        const destinationCoordinates = await getCoordinates(newDestination);
        if (newPlace && newDestination && mapInstance.value) {
          const routeCoordinates = [placeCoordinates, destinationCoordinates];
          const route = L.polyline(routeCoordinates, { color: 'blue', dashArray: '1, 10' }).addTo(mapInstance.value);
          mapInstance.value.fitBounds(route.getBounds());
          L.marker(placeCoordinates).addTo(mapInstance.value).bindPopup(newPlace);
          L.marker(destinationCoordinates).addTo(mapInstance.value).bindPopup(newDestination);
          mapInstance.value.setView([(placeCoordinates[0]+destinationCoordinates[0])/2, (placeCoordinates[1]+destinationCoordinates[1])/2], 5);
        }
      }
    });

    return { map };
  },
};
</script>
  
<style>
.leaflet-control-attribution {
  display: none;
}
</style>
  