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
        <div class="formbold-form-step-1 test-center" style="flex-direction: column; gap: 30px; padding: 0.7rem;">
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path
                  d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                </path>
              </g>
            </svg>
            <input @input="filterRoutes" style="font-size: 13px" placeholder="Entrez un port, un pays ou un opérateur"
              id="searchRef" ref="searchRef" v-model="searchInp" type="search" @focus="focusedInp" class="input" />
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
          <div class="step_2" v-if="step_2">
            <h5 style="color: azure; font-size: 16px; margin-bottom: 20px; text-align: left;">
              Select dates
            </h5>
            <div style="display: inline-flex; gap: 10px">
              <VueCtkDateTimePicker v-model="departDate" format='YYYY-MM-DD hh:mm' :overlay="true" :no-label="true"
                :no-header="true" :position="'bottom'" :min-date="getCurrentDate()" class="date-picker"
                :noButtonNow="true" :label="`Select departure date`" :formatted="'YYYY-MM-DD, hh:mm'">
              </VueCtkDateTimePicker>

              <VueCtkDateTimePicker v-if="tripType === `roundTrip`" v-model="arrivalDate" format='YYYY-MM-DD hh:mm'
                :overlay="true" :no-label="true" :no-header="true" :position="'bottom'" :min-date="minArrivalDate()"
                class="date-picker" :noButtonNow="true" :label="`Select arrival date`" :formatted="'YYYY-MM-DD, hh:mm'">
              </VueCtkDateTimePicker>
            </div>
            <h5 style="color: azure; font-size: 16px; margin: 20px 0px; text-align: left;">
              Trip Details
            </h5>
            <div style="display: inline-flex; gap: 10px;justify-content: space-evenly;">
              <div class="category-container">
                <svg class="categ-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1" id="Layer_1" shape-rendering="geometricPrecision" image-rendering="optimizeQuality"
                  text-rendering="geometricPrecision" x="0px" y="0px" viewBox="0 0 512 335.1" xml:space="preserve">
                  <path
                    d="M512,331.1c0,2.2-1.8,4-4,4H340.8c0.3-1.4,0.4-2.8,0.4-4.3v-14c0-12.2-3.1-24.1-8.5-35c-8-18.1-32.2-36.7-32.2-36.7  c-11.1-7.8-23.7-13.3-36.6-15.8c-4.1-0.8-8.2-1.6-12.2-2.5c-0.2-0.5-0.4-0.9-0.6-1.4c-0.2-0.5,0.1-1.2,0.6-1.3l0.3-0.1  c12-1,20.2-7.8,25.8-17.5l0-0.1c5.7-9.9,8.7-22.9,10.2-36.1c0.8-7,1.3-14.3,1.7-21.7c2.3-36.6,4.9-76,46.4-92.8  c6.3-2.5,12.9-4.1,19.7-4.8c14.3-1.4,29,1.6,41.6,8.8c12.7,7.2,23.3,18.8,29.7,34.5c2.9,7.2,4.9,15.3,5.8,24.3v0.2  c-0.1,22.1,3.4,53,13,75.7c6.9,16.3,16.9,28.4,30.9,29.5c0.6,0,1,0.6,1,1.1l-0.1,0.3c-2.6,7.3-14.6,13-29,15.7  c21.3,5.2,36.2,11.5,46.2,22.5C507.4,277.2,512,297.4,512,331.1z" />
                  <path
                    d="M324.1,316.8v14c0,2.4-1.9,4.3-4.3,4.3H4.3c-2.4,0-4.3-1.9-4.3-4.3v-12.6c0-41.2,33.3-65.6,67-70.1  c24.6-3.3,49.4-6.6,58.2-36.5l-0.5-0.4l-4.3-3.7c-11.1-9.6-20.4-17.6-22.2-37l-1,0c-2.3,0-4.5-0.5-6.5-1.7c-3.3-1.9-5.6-5.1-7.2-8.7  c-1.9-4.3-2.7-9.3-2.9-13.1v-0.1c-0.1-1.4-0.1-4,0-6.6v0c0.1-2.2,0.2-4.4,0.4-5.6c0-0.4,0.1-0.7,0.3-1c2.3-6.5,5.9-8.6,10.6-8.4  l-3.1-2.1c-1.7-21,3.2-57.3-19.5-64.2c43.1-53.2,92.7-82.2,130-34.8c44.9,2.4,62.9,73.7,27.1,103.8l-0.2,1.8  c1.4-0.4,2.8-0.7,4.2-0.8c2.7-0.2,5.2,0.2,7.3,1.4l0.4,0.2c2.2,1.3,3.8,3.2,4.7,6c0.9,2.8,0.9,6.3-0.2,10.7l-5.6,15.9  c-0.9,2.6-1.7,4.4-3.5,5.8l-0.3,0.2c-1.8,1.3-4,1.8-7.2,1.6l-1.6-0.2c-0.4,17.7-9,25.8-20.3,36.5c9,30,33.1,34.7,56.7,39.2  C292.7,252.2,324.1,282.5,324.1,316.8z" />
                  <path class="st0" d="M332.7,281.9l-32.2-36.7C300.5,245.1,324.1,256.3,332.7,281.9z" />
                </svg>
                <span>Adults:</span>
                <div class="number-input">
                  <button type="button" @click="$refs.adult.value > 0 ? $refs.adult.value-- : null">-</button>
                  <input type="number" ref="adult" id="adult" name="adult" min="0" value="0">
                  <button type="button" @click="$refs.adult.value++">+</button>
                </div>
              </div>


              <div class="category-container">
                <svg class="categ-icon" viewBox="0 0 74.88 56.41" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path stroke="null" id="svg_1"
                      d="m68.96737,33.04218l-3.04314,-2.76988l2.37282,13.32958a0.18389,0.22074 0 0 1 -0.18389,0.22074l-5.43969,0l0,8.35947a2.67535,3.21135 0 0 1 -4.56175,2.28568l0,0a2.67535,3.21135 0 0 1 -0.78896,-2.27856l0,-8.38083l-1.95164,0l0,8.37371a2.68129,3.21847 0 0 1 -5.33884,0l0,-8.37371l-5.51681,0a0.18389,0.22074 0 0 1 -0.14237,-0.25634l2.37282,-13.30822l-3.08467,2.8482c-1.4059,1.28881 -2.64569,1.4241 -3.55923,0.89718a2.37282,2.8482 0 0 1 -0.87201,-0.85446a2.63383,3.1615 0 0 1 -0.46863,-1.22473a2.80586,3.368 0 0 1 1.11523,-3.4036l7.24303,-6.63631c1.94571,-1.78725 5.46935,-2.58474 9.02858,-2.57762c3.79058,0 7.58709,0.93991 9.39043,2.58474l7.20744,6.55798a2.71095,3.25407 0 0 1 1.0915,3.3324a2.46773,2.96213 0 0 1 -1.33471,2.07207c-0.88981,0.5198 -2.12961,0.44147 -3.50584,-0.81174l-0.02966,0.01424zm-50.03091,-32.04226a6.97609,8.37371 0 0 1 7.01168,8.33099a7.01761,8.42355 0 0 1 -14.0293,0a6.98202,8.38083 0 0 1 7.01761,-8.33099zm16.57415,32.98929c-0.88388,0.49131 -2.12961,0.35603 -3.55923,-0.96127l-4.82869,-4.2723l0,13.03052a0.18389,0.22074 0 0 1 -0.18389,0.22074l-1.69063,0l0,10.18232a2.68129,3.21847 0 0 1 -5.33884,0l0,-10.18232l-1.93978,0l0,10.18232a2.68129,3.21847 0 0 1 -5.33884,0l0,-10.18232l-1.69657,0a0.18389,0.22074 0 0 1 -0.18389,-0.22074l0,-13.08036l-4.86428,4.33639c-1.34658,1.27457 -2.60417,1.36714 -3.48805,0.85446l0,0a2.43214,2.91941 0 0 1 -0.88388,-0.85446a2.62197,3.14726 0 0 1 -0.46863,-1.21049a2.71095,3.25407 0 0 1 1.08557,-3.34664l7.29049,-6.67903c1.84487,-1.80861 5.81341,-2.67731 9.70483,-2.66307s7.83624,0.95415 9.37264,2.75563l7.18964,6.55086a2.88891,3.46768 0 0 1 1.15082,3.46056a2.58637,3.10454 0 0 1 -0.45677,1.23185a2.37282,2.8482 0 0 1 -0.87201,0.85446l0,-0.00712zm20.81556,-32.98929a7.01168,8.41643 0 0 1 6.7922,6.24468c2.49739,0.9043 5.30325,3.46768 4.44904,5.96698c-1.15082,3.368 -3.55923,1.81573 -3.79651,-1.70892a10.04296,12.05501 0 0 0 -0.45677,-2.89804c0,0.2421 0,0.48419 0,0.71205a7.01168,8.41643 0 0 1 -14.02337,0c0,-0.12817 0,-0.24922 0,-0.37739a9.90652,11.89124 0 0 0 -0.43897,2.8482c-0.24321,3.52465 -2.64569,5.07692 -3.79651,1.71604c-0.84828,-2.48506 1.91012,-5.02707 4.38972,-5.95274a7.00575,8.40931 0 0 1 6.88118,-6.55086z" />
                  </g>
                </svg>
                <span>children 2-11 years</span>
                <div class="number-input">
                  <button type="button" @click="$refs.children.value > 0 ? $refs.children.value-- : null">-</button>
                  <input type="number" ref="children" id="children" name="children" min="0" value="0">
                  <button type="button" @click="$refs.children.value++">+</button>
                </div>
              </div>


              <div class="category-container">
                <svg class="categ-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 1024 1024"
                  style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
                  <path
                    d="M972.8,565.8c0,56.3-46.1,102.4-102.4,102.4c-7.7,0-15.4,0-23-2.6c-51.2,135.7-181.8,233-335.4,233s-284.2-97.3-335.4-233  c-7.7,2.6-15.4,2.6-23,2.6c-56.3,0-102.4-46.1-102.4-102.4s46.1-102.4,102.4-102.4h7.7C197.1,302.1,340.5,181.8,512,181.8  c46.1,0,89.6,10.2,130.6,25.6h10.2c20.5,0,38.4-17.9,38.4-38.4s-17.9-38.4-38.4-38.4c-7.7,0-15.4,2.6-23,7.7  c-10.2,10.2-28.2,7.7-35.8-2.6c-10.2-10.2-7.7-28.2,2.6-35.8c15.4-12.8,35.8-20.5,56.3-20.5c48.6,0,89.6,41,89.6,89.6  c0,28.1-13.7,53.6-34.6,70.2c80.7,48.1,139.4,127.9,158,221.7h4.5C926.7,460.8,972.8,509.4,972.8,565.8z" />
                </svg>
                <span>Babies 0-2 years</span>
                <div class="number-input">
                  <button type="button" @click="$refs.baby.value > 0 ? $refs.baby.value-- : null">-</button>
                  <input type="number" ref="baby" id="baby" name="baby" min="0" value="0">
                  <button type="button" @click="$refs.baby.value++">+</button>
                </div>
              </div>


            </div>
            <div>
              <a class="currency_euro" tabindex="0" data-popup="currency_popup">Currency: € (Euros)</a>
            </div>
            <div style="bottom: 4vh; position: fixed;
              left: 50%;
              translate: -50%; 
              width: 70%"> 
            <a class="formbold-btn" style="
              width: 100%;"
            >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Rechercher
          </a>
              </div>
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
      departDate: null,
      arrivalDate: null,
      datE: "ex-ampel-date",
      tripType: "roundTrip",
      step_1: true,
      step_2: false,
      searchedRoutes: {},
      searchInp: "",
      previousSearch: "",
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
    async getToken(){
      let data = new URLSearchParams();
data.append('grant_type', 'password');
data.append('username', 'FGW0009');
data.append('password', '123456');

let config = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
  body: data
};

async function makeRequest() {
  try {
    const response = await fetch('https://bookitfgwtestctn.hogiacloud.com/fgw/token', config);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log(JSON.stringify(responseData));
  } catch (error) {
    console.error(error);
  }
}

makeRequest();
    },
    getCurrentDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0"); // Month is zero-based
      const day = String(now.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    minArrivalDate() {
      if (this.departDate) {
        const parts = this.departDate.split('-')
        const parts2 = parts[2].split(' ')
        return `${parts[0]}-${parts[1]}-${Number(parts2[0])+1} ${parts2[1]}`
      }
      else {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0"); // Month is zero-based
        const day = String(now.getDate() + 1).padStart(2, "0");
        return `${year}-${month}-${day}`;
      }
    },
    datePick() {
      console.log("Selected Date:", this.departDate);
    },
    focusedInp() {
      this.searchFocused = true;
      this.showPopular = true;
      this.step_1 = true
      this.step_2 = false
      this.filterRoutes()
    },
    preventDefault(event) {
      event.preventDefault()
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
            ) ||
            `${trip.departurePort} - ${trip.arrivalPort}`.toUpperCase().includes(this.searchInp.toUpperCase())
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
    this.getToken()
    // this.$axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => console.log(res.data))
  },
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
</style>

<style>
/* Add some basic CSS for styling */
.category-container {
  background-color: white;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between
}

/* Style for the SVG icons */
.categ-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  fill: #333;
  /* Adjust the fill color to match your design */
}

/* Style for the number input and buttons */
.number-input {
  display: flex;
  align-items: center;
}

.number-input input[type="number"] {
  width: 40px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.number-input button {
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
  padding: 0px 5px;
  border-radius: 3px;
}
</style>

<style>
.currency_euro {
  background-color: #ffffff !important;
    color: #475c77 !important;
    padding: 8px !important;
    margin: 0 !important;
    width: 100%;
    cursor: default!important;
}

.step_2 {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.custom-input {
  width: 100%;
  padding-left: 14px;
  text-align: left;
  font-size: 14px;
  border-radius: 4px;
  position: relative;
  color: rgba(0, 0, 0, .54);
  background-color: white;
}

.search-form {
  width: 90%;
  position: relative;
}

.search-menu {
  overflow-y: scroll;
  height: 50vh;
  line-height: 2.5vh;
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
  padding: 0.8rem;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 0.8rem;
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

  border-radius: 8px;
  padding: 20px;
  margin: 0 auto;
  width: 26.38vw;
  height: 75vh;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.6),
    0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
  background: linear-gradient(to top right,
      rgba(0, 0, 0, 0.46),
      rgba(99, 99, 99, 0.46));
  /* Adjust colors and opacity */
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
}

.formbold-form-step-1 {
  display: flex;
  position: relative;
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
