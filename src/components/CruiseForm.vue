<template>
  <div class="formbold-main-wrapper" style="margin: 100px">
    <div class="formbold-form-wrapper">
      <form class="search-form" @submit="preventDefault" method="POST">
        <div class="toggle">
          <input type="radio" name="sizeBy" v-model="tripType" value="roundTrip" id="sizeWeight" checked="checked" />
          <label for="sizeWeight">Voyage aller-retour</label>
          <input type="radio" name="sizeBy" v-model="tripType" value="oneWay" id="sizeDimensions" />
          <label for="sizeDimensions">Aller simple</label>
        </div>
        <div class="formbold-form-step-1 test-center" style="flex-direction: column; gap: 30px; margin-top: 35px">
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path
                  d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                </path>
              </g>
            </svg>
            <input @input="filterRoutes" style="font-size: 13px" placeholder="Entrez un port, un pays ou un opérateur"
              id="searchRef" ref="searchRef" v-model="searchInp" type="search" @focus="
                searchFocused = true;
              showPopular = true;
              " class="input" />
            <svg v-if="searchFocused" @click="clearSearch" fill="blue"
              style="height: 24px; width: 24px; position: absolute; right: 4px" stroke="currentColor" stroke-width="1.5"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <a class="formbold-btn" v-if="!searchFocused && step_1" @click="handleFormClick">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Rechercher
          </a>

          <div class="search-menu" v-if="showPopular && step_1">
            <div v-if="showRoutes">
              <div>
                <h5 style="color: azure; font-size: 16px">
                  {{ language.form.Routes }}
                </h5>
              </div>
              <div class="popular-ferry-list">
                <div class="list-item" v-for="(route, index) in searchedRoutes" :key="`Routes-${index}`"
                  @click="handleRouteClick(route)">
                  <div class="departure">
                    <span class="port">{{ route.departurePort }}</span>
                    <span class="country">{{ route.departureCountry }}</span>
                  </div>
                  <div class="arrow-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24"
                      viewBox="0 0 24 24" width="24">
                      <g>
                        <rect fill="none" height="24" width="24" x="0" />
                      </g>
                      <g>
                        <g>
                          <g>
                            <path d="M9.01,14H2v2h7.01v3L13,15l-3.99-4V14z M14.99,13v-3H22V8h-7.01V5L11,9L14.99,13z" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="arrival">
                    <span class="port">{{ route.arrivalPort }}</span>
                    <span class="country">{{ route.arrivalCountry }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h5 style="color: azure; font-size: 16px">
                {{ language.form.popRoutes }}
              </h5>
            </div>
            <div class="popular-ferry-list">
              <div class="list-item" v-for="(trip, index) in popularTrips" :key="index" @click="handleRouteClick(trip)">
                <div class="departure">
                  <span class="port">{{ trip.departurePort }}</span>
                  <span class="country">{{ trip.departureCountry }}</span>
                </div>
                <div class="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24"
                    viewBox="0 0 24 24" width="24">
                    <g>
                      <rect fill="none" height="24" width="24" x="0" />
                    </g>
                    <g>
                      <g>
                        <g>
                          <path d="M9.01,14H2v2h7.01v3L13,15l-3.99-4V14z M14.99,13v-3H22V8h-7.01V5L11,9L14.99,13z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="arrival">
                  <span class="port">{{ trip.arrivalPort }}</span>
                  <span class="country">{{ trip.arrivalCountry }}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-if="step_2">
            <div style="display: inline-flex; gap: 10px">
                <VueCtkDateTimePicker />
                <VueCtkDateTimePicker @click="selectedAgenda" v-if="!datePicked && tripType===`roundTrip`" />
                <input v-if="datePicked && tripType===`roundTrip`" class="date-input" v-model="datE">
            </div>
            <button  @click="datePick">testing button</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { languageStore } from "../LanguageStore";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

export default {
  data() {
    return {
      datE: "ex-ampel-date",
      tripType: "roundTrip",
      datePicked: false,
      step_1: true,
      step_2: false,
      searchedRoutes: {},
      searchInp: "",
      showRoutes: false,
      showPopular: true,
      searchFocused: false,
      popularTrips: [
        {
          departurePort: "Port A",
          departureCountry: "Country X",
          arrivalPort: "Port B",
          arrivalCountry: "Country Y",
        },
        {
          departurePort: "Port C",
          departureCountry: "Country X",
          arrivalPort: "Port D",
          arrivalCountry: "Country Y",
        },
        {
          departurePort: "Port A",
          departureCountry: "Country X",
          arrivalPort: "Port B",
          arrivalCountry: "Country Y",
        },
        {
          departurePort: "Port A",
          departureCountry: "Country X",
          arrivalPort: "Port B",
          arrivalCountry: "Country Y",
        },
        {
          departurePort: "Port A",
          departureCountry: "Country X",
          arrivalPort: "Port B",
          arrivalCountry: "Country Y",
        },
        {
          departurePort: "Port A",
          departureCountry: "Country X",
          arrivalPort: "Port B",
          arrivalCountry: "Country Y",
        },
        {
          departurePort: "Port A",
          departureCountry: "Country X",
          arrivalPort: "Port B",
          arrivalCountry: "Country Y",
        },
        {
          departurePort: "Port A",
          departureCountry: "Country X",
          arrivalPort: "Port B",
          arrivalCountry: "Country Y",
        },
        {
          departurePort: "Port A",
          departureCountry: "Country X",
          arrivalPort: "Port B",
          arrivalCountry: "Country Y",
        },
        {
          departurePort: "Port A",
          departureCountry: "Country X",
          arrivalPort: "Port B",
          arrivalCountry: "Country Y",
        },
        {
          departurePort: "Port A",
          departureCountry: "Country X",
          arrivalPort: "Port E",
          arrivalCountry: "Country U",
        },
      ],
    };
  },
  components: {
    VueCtkDateTimePicker,
  },
  methods: {
    preventDefault(event){
      event.preventDefault()
    },
    selectedAgenda(){
      this.datePicked = true
    },
    handleRouteClick(route) {
      this.searchInp = `${route.departurePort} - ${route.arrivalPort}`
      this.step_1 = false
      this.step_2 = true
    },
    filterRoutes() {
      this.searchedRoutes = this.popularTrips
        .map((trip) => {
          if (
            Object.values(trip).some((value) =>
              value.toUpperCase().includes(this.searchInp.toUpperCase())
            )
          ) {
            return trip;
          }
          return null;
        })
        .filter(Boolean);
      this.searchInp !== "" && this.searchedRoutes.length > 0
        ? (this.showRoutes = true)
        : (this.showRoutes = false);
    },
    handleFormClick() {
      console.log(this.searchInp);
      if (this.searchInp === "") {
        this.$refs.searchRef.focus();
      }
    },
    clearSearch() {
      this.searchFocused = false;
      this.searchInp = "";
      this.showRoutes = false;
      this.showPopular = true;
      this.step_1 = true
    },
  },
  computed: {
    language() {
      return languageStore.getLanguage();
    },
  },
  mounted() {

  },
};
</script>

<style>
.date-input {
  width: 100%;
  padding-left: 14px;
    text-align: left;
    font-size: 14px;
    border-radius: 4px;
    position: relative;
    color: rgba(0,0,0,.54);
    background-color: white;
}

.search-form {
  width: 90%;
}

.search-menu {
  overflow-y: scroll;
  max-height: 55vh;
  /* Hide the scrollbar */
  scrollbar-width: none;
  /* Firefox */
  -webkit-scrollbar-width: none;
  /* WebKit-based browsers */
}

/* Define custom scrollbar styles */
.search-menu::-webkit-scrollbar {
  width: 0.5rem;
  /* Adjust the width as needed */
}

.search-menu::-webkit-scrollbar-thumb {
  background-color: transparent;
  /* Hide the scrollbar thumb */
}

.search-menu::-webkit-scrollbar-track {
  background-color: transparent;
  /* Hide the scrollbar track */
}

/* .popular-ferry-list {
    
}  */

.list-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 10px;
  cursor: pointer;
}

.departure,
.arrival {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.port {
  font-weight: bold;
}

.country {
  color: #888;
}

.arrow-icon {
  padding: 0 10px;
  font-size: 20px;
  fill: rgb(53, 90, 138);
}

.test-center {
  margin: 0;
  top: 20%;
}

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
}

.formbold-main-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
}

.formbold-form-wrapper {
  overflow: hidden;

  border-radius: 8px;
  padding: 20px;
  margin: 0 auto;
  width: 26.38vw;
  height: 75vh;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.6),
    0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
  background: linear-gradient(to top right,
      rgba(228, 85, 41, 0.7),
      rgba(26, 142, 153, 0.9));
  /* Adjust colors and opacity */
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
}

.formbold-form-step-1 {
  display: flex;
}
</style>
<style scoped>
.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  width: 100%;
}

.input {
  min-width: 100%;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: 0.3s ease;
}

.input::placeholder {
  color: #9e9ea7;
}

.input:focus,
input:hover {
  outline: none;
  border-color: rgba(53, 90, 138, 0.514);
  background-color: #fff;
  box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
}
</style>
<style lang="scss">
.toggle {
  margin: 5px 0 1.5rem;
  box-sizing: border-box;
  font-size: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: stretch;
}

.toggle input {
  width: 0;
  height: 0;
  position: absolute;
  left: -9999px;
}

.toggle input+label {
  margin: 0;
  padding: 0.75rem 2rem;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  border: solid 1px rgb(65, 111, 172);
  background-color: rgba(53, 90, 138, 0.514);
  font-size: 1rem;
  line-height: 140%;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  transition: border-color 0.15s ease-out, color 0.25s ease-out,
    background-color 0.15s ease-out, box-shadow 0.15s ease-out;
  /* ADD THESE PROPERTIES TO SWITCH FROM AUTO WIDTH TO FULL WIDTH */
  /*flex: 0 0 50%; display: flex; justify-content: center; align-items: center;*/
  /* ----- */
}

.toggle input+label:first-of-type {
  border-radius: 6px 0 0 6px;
  border-right: none;
  color: white;
}

.toggle input+label:last-of-type {
  border-radius: 0 6px 6px 0;
  border-left: none;
  color: white;
}

.toggle input:hover+label {
  border-color: rgb(85, 134, 197);
}

.toggle input:checked+label {
  background-color: rgb(53, 90, 138);
  color: #fff;
  box-shadow: 0 0 10px rgba(102, 179, 251, 0.5);
  border-color: rgba(53, 90, 138, 0.514);
  z-index: 1;
}

.toggle input:focus+label {
  outline: dotted 1px #ccc;
  outline-offset: 0.45rem;
}

@media (max-width: 800px) {
  .toggle input+label {
    padding: 0.75rem 0.25rem;
    flex: 0 0 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

/* STYLING FOR THE STATUS HELPER TEXT FOR THE DEMO */
.status {
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
}

.status span {
  font-weight: 600;
  color: #b6985a;
}

.status span:first-of-type {
  display: inline;
}

.status span:last-of-type {
  display: none;
}

@media (max-width: 800px) {
  .status span:first-of-type {
    display: none;
  }

  .status span:last-of-type {
    display: inline;
  }
}
</style>

<style>
.formbold-form-step-1 a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  font-weight: 600;
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s;
  background-color: rgb(53, 90, 138);
  border-radius: 5px;
  cursor: pointer;
}

.formbold-form-step-1 a:hover {
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  color: white;
  border-radius: 5px;
}

.formbold-form-step-1 a span {
  position: absolute;
  display: block;
}

.formbold-form-step-1 a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgb(90, 136, 196));
  animation: btn-anim1 1.5s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

.formbold-form-step-1 a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, rgb(90, 136, 196));
  animation: btn-anim2 1.5s linear infinite;
  animation-delay: 0.375s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }

  50%,
  100% {
    top: 100%;
  }
}

.formbold-form-step-1 a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, rgb(90, 136, 196));
  animation: btn-anim3 1.5s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }

  50%,
  100% {
    right: 100%;
  }
}

.formbold-form-step-1 a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, rgb(90, 136, 196));
  animation: btn-anim4 1.5s linear infinite;
  animation-delay: 1.125s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }

  50%,
  100% {
    bottom: 100%;
  }
}

.formbold-form-step-1 p:last-child {
  color: #aaa;
  font-size: 14px;
}

.formbold-form-step-1 a.a2 {
  color: #fff;
  text-decoration: none;
}

.formbold-form-step-1 a.a2:hover {
  background: transparent;
  border-radius: 5px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
}
</style>
