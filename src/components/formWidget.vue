<template>
    <div class="travel-booking">
        <svg style="position: absolute; top: 1.3rem; right: 2rem; cursor: pointer;" @click="currentMenu = null"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px"
            y="0px" width="16px" height="10px" viewBox="0 0 122.875 28.489" enable-background="new 0 0 122.875 28.489"
            xml:space="preserve">
            <g>
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M108.993,0c7.683-0.059,13.898,6.12,13.882,13.805 c-0.018,7.682-6.26,13.958-13.942,14.018c-31.683,0.222-63.368,0.444-95.051,0.666C6.2,28.549-0.016,22.369,0,14.685 C0.018,7.002,6.261,0.726,13.943,0.667C45.626,0.445,77.311,0.223,108.993,0L108.993,0z" />
            </g>
        </svg>
        <div class="options-container">
            <label v-for="option in tripTypes" :key="option.value" class="radio-button">
                <input type="radio" v-model="tripType" :value="option.value" />
                <span :class="{ selected: tripType === option.value }">{{
                    option.label
                }}</span>
            </label>
        </div>

        <div class="options-container flexContainer">
            <div style="white-space: nowrap">
                <button class="menuButton" :class="{ 'background-focus': currentMenu === 'trip' }"
                    @click="showMenu('trip', $event)">
                    Select Your Trip
                </button>
                <button class="menuButton" :class="{ 'background-focus': currentMenu === 'date' }"
                    @click="showMenu('date')">
                    Select Date
                </button>
                <button class="menuButton" :class="{ 'background-focus': currentMenu === 'passengers' }"
                    @click="showMenu('passengers')">
                    Passengers
                </button>
                <button class="menuButton" :class="{ 'background-focus': currentMenu === 'vehicles' }"
                    @click="showMenu('vehicles')">
                    Vehicles
                </button>
            </div>
            <!-- <searchButton @click="handleSearch()" style="margin-right: 3rem" /> -->
            <button @click="handleSearch()"
                style="display: inline-block; padding: 12px 24px; font-size: 1.5rem; font-weight: bold; color: #ffffff; background-color: #007bff; border: none; border-radius: 6px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); cursor: pointer; transition: background-color 0.3s ease;">
                Search
            </button>

        </div>

        <div v-if="currentMenu === 'trip'" class="menu">
            <div class="menu-column">
                <h2 style="color: white;">Departure</h2>
                <ul v-for="(port, index) in Object.keys(filteredRouteList)" :key="`DepartPort_` + index">
                    <li @click="selectPortItem(index, port)" class="port-name"
                        :class="{ selectedPort: selectedPortIndex === index }">
                        {{ port }}
                    </li>
                </ul>
            </div>
            <div class="trip-Vertical-line"></div>
            <div class="menu-column">
                <h2 style="color: white;">Destination</h2>
                <ul style="align-items: start" v-if="depPort.length > 0"
                    v-for="(country, indexx) in Object.keys(filteredRouteList[depPort])" :key="`depPort_` + indexx">
                    <h3 style="text-align: start">{{ countryCodes[country] }}</h3>
                    <li @click="handleRouteClick(port, index, indexx)"
                        v-for="(port, index) in filteredRouteList[depPort][country]" :key="port + index" class="port-name"
                        :class="{
                            selectedPort: selectedPortIndex2 === `${index}${indexx}`,
                        }">
                        {{ port }}
                    </li>
                </ul>
            </div>
            <div class="menu-column">
                <h3></h3>
                <MapView style="border-radius: 2rem;" :place="depPort.length !== ``
                    ? `${depPort.toString()}`
                    : null
                    " :destination="destPort !== ``
        ? destPort
        : null
        " />
            </div>
        </div>
        <div v-if="currentMenu === 'date'" class="menu">
            <VueCtkDateTimePicker style="width: 4px" v-model="departDate" format="YYYY-MM-DD"
                :enabledDates="datestoHighlight" ref="dateTimePicker" @change-month="() => {console.log('helooooo')}"
                :range="tripType === `oneway` ? false : true" :noShortcuts="true" :no-header="true" :inline="true"
                :only-date="true" :position="'bottom'" :no-button="true" :min-date="getCurrentDate()" class="date-picker"
                :noButtonNow="true" :label="`Select departure date`" :formatted="'YYYY-MM-DD'" />
        </div>
        <div v-if="currentMenu === 'passengers'" class="menu" style="
          flex-direction: column;
          align-items: stretch;
          margin-top: 4vh;
          gap: 3rem;
        ">
            <div class="category-container" v-if="categoryExists('Adult')">
                <svg class="categ-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1" id="Layer_1" shape-rendering="geometricPrecision" image-rendering="optimizeQuality"
                    text-rendering="geometricPrecision" x="0px" y="0px" viewBox="0 0 512 335.1" xml:space="preserve">
                    <path
                        d="M512,331.1c0,2.2-1.8,4-4,4H340.8c0.3-1.4,0.4-2.8,0.4-4.3v-14c0-12.2-3.1-24.1-8.5-35c-8-18.1-32.2-36.7-32.2-36.7  c-11.1-7.8-23.7-13.3-36.6-15.8c-4.1-0.8-8.2-1.6-12.2-2.5c-0.2-0.5-0.4-0.9-0.6-1.4c-0.2-0.5,0.1-1.2,0.6-1.3l0.3-0.1  c12-1,20.2-7.8,25.8-17.5l0-0.1c5.7-9.9,8.7-22.9,10.2-36.1c0.8-7,1.3-14.3,1.7-21.7c2.3-36.6,4.9-76,46.4-92.8  c6.3-2.5,12.9-4.1,19.7-4.8c14.3-1.4,29,1.6,41.6,8.8c12.7,7.2,23.3,18.8,29.7,34.5c2.9,7.2,4.9,15.3,5.8,24.3v0.2  c-0.1,22.1,3.4,53,13,75.7c6.9,16.3,16.9,28.4,30.9,29.5c0.6,0,1,0.6,1,1.1l-0.1,0.3c-2.6,7.3-14.6,13-29,15.7  c21.3,5.2,36.2,11.5,46.2,22.5C507.4,277.2,512,297.4,512,331.1z" />
                    <path
                        d="M324.1,316.8v14c0,2.4-1.9,4.3-4.3,4.3H4.3c-2.4,0-4.3-1.9-4.3-4.3v-12.6c0-41.2,33.3-65.6,67-70.1  c24.6-3.3,49.4-6.6,58.2-36.5l-0.5-0.4l-4.3-3.7c-11.1-9.6-20.4-17.6-22.2-37l-1,0c-2.3,0-4.5-0.5-6.5-1.7c-3.3-1.9-5.6-5.1-7.2-8.7  c-1.9-4.3-2.7-9.3-2.9-13.1v-0.1c-0.1-1.4-0.1-4,0-6.6v0c0.1-2.2,0.2-4.4,0.4-5.6c0-0.4,0.1-0.7,0.3-1c2.3-6.5,5.9-8.6,10.6-8.4  l-3.1-2.1c-1.7-21,3.2-57.3-19.5-64.2c43.1-53.2,92.7-82.2,130-34.8c44.9,2.4,62.9,73.7,27.1,103.8l-0.2,1.8  c1.4-0.4,2.8-0.7,4.2-0.8c2.7-0.2,5.2,0.2,7.3,1.4l0.4,0.2c2.2,1.3,3.8,3.2,4.7,6c0.9,2.8,0.9,6.3-0.2,10.7l-5.6,15.9  c-0.9,2.6-1.7,4.4-3.5,5.8l-0.3,0.2c-1.8,1.3-4,1.8-7.2,1.6l-1.6-0.2c-0.4,17.7-9,25.8-20.3,36.5c9,30,33.1,34.7,56.7,39.2  C292.7,252.2,324.1,282.5,324.1,316.8z" />
                    <path class="st0" d="M332.7,281.9l-32.2-36.7C300.5,245.1,324.1,256.3,332.7,281.9z" />
                </svg>
                <span style="color:black!important;">Adults</span>
                <div class="number-input">
                    <button type="button" @click="adults > 1 ? adults-- : null">
                        -
                    </button>
                    <input type="number" ref="adult" v-model="adults" id="adult" name="adult" min="1" />
                    <button type="button" @click="adults++">+</button>
                </div>
            </div>

            <div class="category-container" v-if="categoryExists('Child')">
                <svg class="categ-icon" viewBox="0 0 74.88 56.41" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path stroke="null" id="svg_1"
                            d="m68.96737,33.04218l-3.04314,-2.76988l2.37282,13.32958a0.18389,0.22074 0 0 1 -0.18389,0.22074l-5.43969,0l0,8.35947a2.67535,3.21135 0 0 1 -4.56175,2.28568l0,0a2.67535,3.21135 0 0 1 -0.78896,-2.27856l0,-8.38083l-1.95164,0l0,8.37371a2.68129,3.21847 0 0 1 -5.33884,0l0,-8.37371l-5.51681,0a0.18389,0.22074 0 0 1 -0.14237,-0.25634l2.37282,-13.30822l-3.08467,2.8482c-1.4059,1.28881 -2.64569,1.4241 -3.55923,0.89718a2.37282,2.8482 0 0 1 -0.87201,-0.85446a2.63383,3.1615 0 0 1 -0.46863,-1.22473a2.80586,3.368 0 0 1 1.11523,-3.4036l7.24303,-6.63631c1.94571,-1.78725 5.46935,-2.58474 9.02858,-2.57762c3.79058,0 7.58709,0.93991 9.39043,2.58474l7.20744,6.55798a2.71095,3.25407 0 0 1 1.0915,3.3324a2.46773,2.96213 0 0 1 -1.33471,2.07207c-0.88981,0.5198 -2.12961,0.44147 -3.50584,-0.81174l-0.02966,0.01424zm-50.03091,-32.04226a6.97609,8.37371 0 0 1 7.01168,8.33099a7.01761,8.42355 0 0 1 -14.0293,0a6.98202,8.38083 0 0 1 7.01761,-8.33099zm16.57415,32.98929c-0.88388,0.49131 -2.12961,0.35603 -3.55923,-0.96127l-4.82869,-4.2723l0,13.03052a0.18389,0.22074 0 0 1 -0.18389,0.22074l-1.69063,0l0,10.18232a2.68129,3.21847 0 0 1 -5.33884,0l0,-10.18232l-1.93978,0l0,10.18232a2.68129,3.21847 0 0 1 -5.33884,0l0,-10.18232l-1.69657,0a0.18389,0.22074 0 0 1 -0.18389,-0.22074l0,-13.08036l-4.86428,4.33639c-1.34658,1.27457 -2.60417,1.36714 -3.48805,0.85446l0,0a2.43214,2.91941 0 0 1 -0.88388,-0.85446a2.62197,3.14726 0 0 1 -0.46863,-1.21049a2.71095,3.25407 0 0 1 1.08557,-3.34664l7.29049,-6.67903c1.84487,-1.80861 5.81341,-2.67731 9.70483,-2.66307s7.83624,0.95415 9.37264,2.75563l7.18964,6.55086a2.88891,3.46768 0 0 1 1.15082,3.46056a2.58637,3.10454 0 0 1 -0.45677,1.23185a2.37282,2.8482 0 0 1 -0.87201,0.85446l0,-0.00712zm20.81556,-32.98929a7.01168,8.41643 0 0 1 6.7922,6.24468c2.49739,0.9043 5.30325,3.46768 4.44904,5.96698c-1.15082,3.368 -3.55923,1.81573 -3.79651,-1.70892a10.04296,12.05501 0 0 0 -0.45677,-2.89804c0,0.2421 0,0.48419 0,0.71205a7.01168,8.41643 0 0 1 -14.02337,0c0,-0.12817 0,-0.24922 0,-0.37739a9.90652,11.89124 0 0 0 -0.43897,2.8482c-0.24321,3.52465 -2.64569,5.07692 -3.79651,1.71604c-0.84828,-2.48506 1.91012,-5.02707 4.38972,-5.95274a7.00575,8.40931 0 0 1 6.88118,-6.55086z" />
                    </g>
                </svg>
                <span v-if="categoryExists('Baby')">children ( 3-14 years )</span>
                <span style="color:black!important;" v-else>children ( 0-14 years )</span>
                <div class="number-input">
                    <button type="button" @click="children > 0 ? children-- : null">
                        -
                    </button>
                    <input type="number" ref="children" v-model="children" id="children" name="children" min="0" />
                    <button type="button" @click="children++">+</button>
                </div>
            </div>

            <div class="category-container" v-if="categoryExists('Baby')">
                <svg class="categ-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 1024 1024"
                    style="enable-background: new 0 0 1024 1024" xml:space="preserve">
                    <path
                        d="M972.8,565.8c0,56.3-46.1,102.4-102.4,102.4c-7.7,0-15.4,0-23-2.6c-51.2,135.7-181.8,233-335.4,233s-284.2-97.3-335.4-233  c-7.7,2.6-15.4,2.6-23,2.6c-56.3,0-102.4-46.1-102.4-102.4s46.1-102.4,102.4-102.4h7.7C197.1,302.1,340.5,181.8,512,181.8  c46.1,0,89.6,10.2,130.6,25.6h10.2c20.5,0,38.4-17.9,38.4-38.4s-17.9-38.4-38.4-38.4c-7.7,0-15.4,2.6-23,7.7  c-10.2,10.2-28.2,7.7-35.8-2.6c-10.2-10.2-7.7-28.2,2.6-35.8c15.4-12.8,35.8-20.5,56.3-20.5c48.6,0,89.6,41,89.6,89.6  c0,28.1-13.7,53.6-34.6,70.2c80.7,48.1,139.4,127.9,158,221.7h4.5C926.7,460.8,972.8,509.4,972.8,565.8z" />
                </svg>
                <span>Babies 0-2 years</span>
                <div class="number-input">
                    <button type="button" @click="$refs.baby.value > 0 ? $refs.baby.value-- : null">
                        -
                    </button>
                    <input type="number" ref="baby" id="baby" name="baby" min="0" />
                    <button type="button" @click="$refs.baby.value++">+</button>
                </div>
            </div>
        </div>
        <div v-if="currentMenu === 'vehicles'" class="menu" style="flex-direction: column; gap: 3rem">
            <div v-if="!selectingTrailer">
                <div class="searchbar">
                    <div class="searchbar-wrapper">
                        <div class="searchbar-left">
                            <div class="search-icon-wrapper">
                                <span class="search-icon searchbar-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div class="searchbar-center">
                            <div class="searchbar-input-spacer"></div>

                            <input type="text" v-model="searchedCar" class="searchbar-input" maxlength="2048" name="q"
                                autocapitalize="off" autocomplete="off" title="Search" role="combobox"
                                placeholder="Search your car brand" />
                        </div>
                    </div>
                </div>

                <div style="display: flex;justify-content: flex-start; margin-top: 1em;">
                    <p style="color: #ffffff;">besoin d'une remorque ?</p>
                    <label class="custom-checkbox">
                        <input v-model="TrailerIsSelected" @change="showTrailerOptions()" type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div>
                    <div class="radio-section">
                        <div class="radio-list">
                            <div class="radio-item car-brands" :style="{ width: brandListWidth }"
                                v-for="(vehicleBrand, index) in searchCar()" :key="vehicleBrand + `_item`">
                                <input name="car-brand" type="radio" :id="vehicleBrand + `_item`" v-model="selectedcarBrand"
                                    :value="vehicleBrand" />
                                <label :for="vehicleBrand + `_item`">{{ vehicleBrand }}</label>
                            </div>
                        </div>
                        <div v-if="selectedcarBrand !== ``" class="radio-list" style="transform: scale(0.8);">
                            <div class="radio-item car-models" v-for="(vehicleModel, index) in getCarModel()"
                                :key="vehicleModel['Model'] + `_item`">
                                <input name="car-model" type="radio" :id="vehicleModel['Model'] + `_item`"
                                    v-model="selectedcarModel" :value="vehicleModel" />
                                <label style="white-space: nowrap;" :for="vehicleModel['Model'] + `_item`">{{
                                    vehicleModel["Model"]
                                }}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="title-car" @click="selectingTrailer = false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="white"
                        viewBox="0 -960 960 960">
                        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                    </svg>
                    <h3 style="color: white;">Retourner</h3>
                </div>
                <div class="radio-section">
                    <div class="radio-list">
                        <div class="radio-item car-brands" style="width: 40dvw" v-for="(trailer, index) in Trailers"
                            :key="trailer.Description">
                            <input name="trailer" type="radio" @change="testingtrailer(trailer)" :id="trailer.Description"
                                v-model="selectedTrailer" :value="trailer" />
                            <label :for="trailer.Description">{{ TrailerLabelEdit(trailer.Description) }}</label>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="vehicle-container">
                  <label v-for="(vehicleBrand, index) in carMODELS" :key="vehicleBrand + `_item`">
                      <input type="radio" v-model="selectedcarModel" :value="vehicleBrand">{{ vehicleBrand }}</label>
              </div> -->
        </div>
        <!-- Other menus go here -->
    </div>
</template>
  
<script>
import { languageStore } from "../LanguageStore";
import MapView from "@/components/mapRoute.vue";
import searchButton from "@/components/searchButton.vue";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
import carModels from "../../vehicle-models.json";

export default {
    data() {
        return {
            currentSelectedMonth: null,
            datestoHighlight: [],
            TrailerIsSelected: false,
            selectedTrailer: {},
            selectingTrailer: false,
            adults: 1,
            children: 0,
            searchedCar: "",
            brandListWidth: "40vw",
            carMODELS: {},
            selectedcarBrand: "",
            selectedcarModel: "",
            selectedPortIndex2: "",
            selectedPortIndex: -1,
            depPort: "",
            destPort: "",
            filteredRouteList: {},
            departDate: "",
            tripType: "roundTrip",
            currentMenu: null,
            tripTypes: [
                { value: "roundTrip", label: "Roundtrip" },
                { value: "oneway", label: "One way" },
                { value: "differentreturn", label: "Different Return" },
            ],
            Routes: [],
            searchedRoutes: {},
            selectedRoute: {},
            svgVehicules: {
                Car: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M241-223v49q0 8.925-6.325 14.962Q228.35-153 219-153h-44q-9.35 0-15.675-6.038Q153-165.075 153-174v-305.143L230-669q6.571-19.65 24.064-30.825Q271.557-711 293-711h374q21.443 0 38.936 11.175T730-669l77 189.857V-174q0 8.925-6.325 14.962Q794.35-153 785-153h-44q-9.35 0-15.675-6.038Q719-165.075 719-174v-49H241Zm2-299h474l-49-122H292l-49 122Zm70.882 195Q333-327 346.5-340.382q13.5-13.383 13.5-32.5Q360-392 346.618-405.5q-13.383-13.5-32.5-13.5Q295-419 281.5-405.618q-13.5 13.383-13.5 32.5Q268-354 281.382-340.5q13.383 13.5 32.5 13.5Zm332 0Q665-327 678.5-340.382q13.5-13.383 13.5-32.5Q692-392 678.618-405.5q-13.383-13.5-32.5-13.5Q627-419 613.5-405.618q-13.5 13.383-13.5 32.5Q600-354 613.382-340.5q13.383 13.5 32.5 13.5Z"/></svg>`,
                BUS: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.9 120.5" width="20px" height="20px" style="enable-background:new 0 0 122.9 120.5" xml:space="preserve"><style xmlns="http://www.w3.org/2000/svg" type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M110.8,103.6h-7.6V114c0,3.6-2.9,6.5-6.5,6.5h-9c-3.6,0-6.5-2.9-6.5-6.5v-10.3H41.5V114c0,3.6-2.9,6.5-6.5,6.5 h-9c-3.6,0-6.5-2.9-6.5-6.5v-10.3H12v-82c0-7.6,4.4-13.1,13.3-16.5c17.6-6.9,54.6-6.9,72.3,0c8.9,3.4,13.3,8.9,13.3,16.5V103.6 L110.8,103.6L110.8,103.6z M118.6,40.4h-3.8V62h3.8c2.4,0,4.3-1.9,4.3-4.3V44.7C122.9,42.3,121,40.4,118.6,40.4L118.6,40.4z M4.3,40.4h3.8V62H4.3C1.9,62,0,60.1,0,57.7V44.7C0,42.3,1.9,40.4,4.3,40.4L4.3,40.4z M46.4,8.6h30.1c0.9,0,1.6,0.7,1.6,1.6v5.2 c0,0.9-0.7,1.6-1.6,1.6H46.4c-0.9,0-1.6-0.7-1.6-1.6v-5.2C44.8,9.3,45.5,8.6,46.4,8.6L46.4,8.6z M22.9,23.2h76.7 c1,0,1.9,0.9,1.9,1.9v42.8c0,1-0.9,1.9-1.9,1.9H22.9c-1,0-1.9-0.9-1.9-1.9V25.1C21,24.1,21.8,23.2,22.9,23.2L22.9,23.2L22.9,23.2 L22.9,23.2z M98.6,84.9c0-1.9-0.7-3.6-2-4.9c-1.3-1.3-3-2-4.9-2c-1.9,0-3.5,0.7-4.9,2c-1.4,1.3-2,3-2,4.9c0,1.9,0.7,3.5,2,4.8 c1.4,1.3,3,2,4.9,2c1.9,0,3.6-0.7,4.9-2C98,88.4,98.6,86.8,98.6,84.9L98.6,84.9L98.6,84.9L98.6,84.9z M38.1,84.9 c0-1.9-0.7-3.6-2-4.9c-1.3-1.3-3-2-4.9-2c-1.9,0-3.6,0.7-4.9,2c-1.3,1.3-2,3-2,4.9c0,1.9,0.6,3.5,2,4.8c1.3,1.3,3,2,4.9,2 c2,0,3.6-0.7,4.9-2C37.4,88.4,38.1,86.8,38.1,84.9L38.1,84.9L38.1,84.9L38.1,84.9z"/></g></svg>`,
                Van: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M242.5-200q-48.75 0-82.875-34.125T125.5-317h-68v-399q0-27.638 19.681-47.319T124.5-783h543v140h115l120 168v158h-69q0 48.75-34.125 82.875T716.5-200q-48.75 0-82.875-34.125T599.5-317h-240q0 49-34.125 83T242.5-200Zm0-67q20.9 0 35.45-14.55Q292.5-296.1 292.5-317q0-20.9-14.55-35.45Q263.4-367 242.5-367q-20.9 0-35.45 14.55Q192.5-337.9 192.5-317q0 20.9 14.55 35.45Q221.6-267 242.5-267Zm474 0q20.9 0 35.45-14.55Q766.5-296.1 766.5-317q0-20.9-14.55-35.45Q737.4-367 716.5-367q-20.9 0-35.45 14.55Q666.5-337.9 666.5-317q0 20.9 14.55 35.45Q695.6-267 716.5-267Zm-49-187 167-1L748-576h-80.5v122Z"/></svg>`,
                Motorcycle: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M173-198q-68.35 0-116.175-47.825T9-362q0-64 42.25-110.75T156.5-524.5L104-577H10v-45h149l132 106 142-57h157l-97-122H388v-67h137l107 134 129-86v138h-88l51 63q16-5 31.5-9t32.476-4q68.374 0 116.199 47.856T952-361.894q0 68.394-47.856 116.144T787.894-198q-68.394 0-116.144-47.825T624-362q0-32 12-61t33-52l-19-24-123 206H386l-51-52q-5.5 63-52.25 105T173-198Zm.062-67q40.038 0 68.488-28.512Q270-322.024 270-362.062t-28.512-68.488Q212.976-459 172.938-459t-68.488 28.512Q76-401.976 76-361.938t28.512 68.488Q133.024-265 173.062-265Zm615 0q40.038 0 68.488-28.512Q885-322.024 885-362.062t-28.512-68.488Q827.976-459 787.938-459t-68.488 28.512Q691-401.976 691-361.938t28.512 68.488Q748.024-265 788.062-265Z"/></svg>`,
            },
            Trailers: {},
            selectedVehicule: {},
            portNameCode: {},
            VehiclePassengers: {},
            countryCodes: {
                TUN: "Tunisie",
                FRA: "France",
                ITA: "Italie",
            },
        };
    },
    components: {
        MapView,
        searchButton,
        VueCtkDateTimePicker,
    },
    methods: {
        showTrailerOptions() {
            if (!this.TrailerIsSelected) {
                this.selectedTrailer = {}
                this.TrailerIsSelected = false
            }
            else {
                this.selectingTrailer = true
            }
        },
        TrailerLabelEdit(originalSentence) {
            // Regular expression to match the height range pattern with <
            const lessThanRegex = /<\s*(\d+,\d+)m/

            // Regular expression to match the height range pattern with > and <
            const rangeRegex = /(\d+,\d+)m\s*<\s*H\s*<\s*(\d+,\d+)m/

            // Check if the sentence matches the < pattern
            const lessThanMatch = originalSentence.match(lessThanRegex)

            // Check if the sentence matches the > pattern
            const rangeMatch = originalSentence.match(rangeRegex)

            if (lessThanMatch && !rangeMatch) {
                // Extract the upper bound from the match
                const upperBound = lessThanMatch[1]

                // Modify the sentence accordingly
                const modifiedSentence = `Remorque Hauteur Inférieur à ${upperBound}m`

                return modifiedSentence
            } else if (rangeMatch) {
                // Extract the lower and upper bounds from the match
                const lowerBound = rangeMatch[1]
                const upperBound = rangeMatch[2]

                // Modify the sentence accordingly
                const modifiedSentence = `Remorque Hauteur entre ${lowerBound}m et ${upperBound}m`

                return modifiedSentence
            } else {
                // If the sentence doesn't match either pattern, return the original sentence
                return originalSentence
            }
        },
        testingtrailer(trailer) {
            console.log(trailer)
        },
        searchCar() {
            let tmpBrand = Object.keys(carModels).filter((el) => {
                if (el.includes(this.searchedCar.toUpperCase())) return el
            })
            if (tmpBrand.length == 0) return Object.keys(carModels)
            return tmpBrand
        },
        handleSearch() {
            console.log(
                this.departDate
            );
            this.getTimeTable(this.departDate.start, this.departDate.end)
        },
        getCarModel() {
            return carModels[this.selectedcarBrand]
        },
        categoryExists(category) {
            let exists = false
            this.VehiclePassengers.PassengerCategories.map((el) => {
                if (category === el["Category"]) exists = true
            });
            return exists
        },
        selectPortItem(index, port) {
            if (port !== this.depPort) {
                this.selectedPortIndex2 = ""
                this.destPort = ""
            }
            this.depPort = port
            this.selectedPortIndex = index
        },
        getDatesOneWay(inputDate) {
            // return (inputDate + 7 days, inputDate - 3 days)
            // Parse the input date in "YYYY-MM-DD" format
            const inputDateObj = new Date(inputDate)

            // Calculate the date 3 days prior
            const priorDate = new Date(inputDateObj)
            priorDate.setDate(inputDateObj.getDate() - 3)

            // Calculate the date 3 days after
            const afterDate = new Date(inputDateObj)
            afterDate.setDate(inputDateObj.getDate() + 7)

            // Format the results in "YYYY-MM-DD" format
            const formatDate = (date) => {
                const year = date.getFullYear()
                const month = String(date.getMonth() + 1).padStart(2, "0")
                const day = String(date.getDate()).padStart(2, "0")
                return `${year}-${month}-${day}`
            };

            const priorDateString = formatDate(priorDate)
            const afterDateString = formatDate(afterDate)
            return [priorDateString, afterDateString]
        },
        async getTimeTable(fromDate, toDate) {

            let tripOptions = { passengers: [], vehicles: [] }

            if (Object.keys(this.selectedcarModel).length)
                tripOptions.vehicles.push({
                    OperatorCode: this.selectedcarModel["Code"],
                    Height: this.selectedcarModel["Height"].toString().replace(".", ""),
                    Length: this.selectedcarModel["Length"].toString().replace(".", ""),
                })
            if (this.selectedTrailer.length) tripOptions.vehicles[0]["Trailer"] = {
                OperatorCode: this.selectedTrailer["OperatorCode"],
                Height: this.selectedTrailer["MaxHeight"].toString(),
                Length: this.selectedTrailer["MaxLength"].toString(),
            }
            console.log(tripOptions)

            for (let i = 1; i <= this.adults; i++) {
                tripOptions.passengers.push({
                    Age: "35",
                    Category: "Adult",
                });
            }

            for (let i = 1; i <= this.children; i++) {
                tripOptions.passengers.push({
                    Age: "6",
                    Category: "Child",
                });
            }


            if (this.tripType !== "roundTrip") {
                [fromDate, toDate] = this.getDatesOneWay(fromDate)
                const OUT = await this.useTimeTableAPI(
                    fromDate,
                    toDate,
                    this.selectedRoute["$"].DepartPort,
                    this.selectedRoute["$"].DestinationPort
                );
                localStorage.setItem("trips", JSON.stringify([OUT]))

                localStorage.setItem("tripOptions", JSON.stringify(tripOptions))
                if (OUT) this.$router.push({ name: "triplist" })
            } else {
                const fromDates = this.getDatesOneWay(fromDate)
                const toDates = this.getDatesOneWay(toDate)
                const OUT = await this.useTimeTableAPI(
                    fromDates[0],
                    fromDates[1],
                    this.portNameCode[this.depPort],
                    this.portNameCode[this.destPort]
                );
                const RTN = await this.useTimeTableAPI(
                    toDates[0],
                    toDates[1],
                    this.portNameCode[this.destPort],
                    this.portNameCode[this.depPort]
                );
                localStorage.setItem("trips", JSON.stringify([OUT, RTN]))


                localStorage.setItem("tripOptions", JSON.stringify(tripOptions))

                if (OUT && RTN) this.$router.push({ name: "triplist" })
            }
            this.$parent.displayLoader = false
        },
        async useTimeTableAPI(fromDate, toDate, fromPort, toPort) {
            const data = JSON.stringify({
                TransactionId: "488445e3-13aa-41e3-ace1-9a022a74e974",
                User: "",
                LanguagePrefCode: "en",
                Currency: "EUR",
                CountryCode: "TUN",
                OriginatingSystem: "",
                FromSailingDate: fromDate,
                ToSailingDate: toDate,
                DepartPort: fromPort,
                DestinationPort: toPort,
            })

            const config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "https://cms.4help.tn/api/getTimeTables_API/getTimeTables",
                headers: {
                    "Content-Type": "application/json",
                },
                maxRedirects: 0,
                data: data,
            };
            return await this.$axios.request(config).then((res) => {
                console.log(res.data)
                if (res.data !== "Pas de data à afficher avec les données entrées") {
                    return res.data}
                // } else {
                //     if (this.tripType === "roundTrip")
                //         window.alert(
                //             "There are no available ferries in the selected dates"
                //         )
                //     else
                //         window.alert(
                //             "there are no ferries sailing on the date you selected"
                //         )
                // }
            });
        },
        getCurrentDate() {
            const now = new Date()
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, "0") // Month is zero-based
            const day = String(now.getDate()).padStart(2, "0")
            return `${year}-${month}-${day}`
        },
        preventDefault(event) {
            event.preventDefault();
        },
        handleRouteClick(port, index, indexx) {
            this.selectedPortIndex2 = `${index}${indexx}`;
            this.destPort = port
            //this.selectedRoute =
        },
        filterRoutes() {
            this.searchedRoutes = this.Routes.map((trip) => {
                if (
                    Object.values(trip["$"]).some((value) =>
                        value.toUpperCase().includes(this.searchInp.toUpperCase())
                    ) ||
                    `${trip.departurePort} - ${trip.arrivalPort}`
                        .toUpperCase()
                        .includes(this.searchInp.toUpperCase())
                ) {
                    return trip
                }
                return null;
            }).filter(Boolean)
        },
        async getVehiculesPassengers() {
            let data = JSON.stringify({
                TransactionId: "488445e3-13aa-41e3-ace1-9a022a74e974",
                User: "",
                LanguagePrefCode: "en",
                Currency: "EUR",
                CountryCode: "TUN",
                OriginatingSystem: "",
            });

            let config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "https://cms.4help.tn/api/getPassengerAndVehicleTypes_API/getPassengerAndVehicleTypes",
                headers: {
                    "Content-Type": "application/json",
                },
                maxRedirects: 0,
                data: data,
            };

            this.VehiclePassengers = await this.$axios
                .request(config)
                .then((res) => {
                    return res.data
                });
            this.Trailers = this.VehiclePassengers.TrailerVehicleCategories
            console.log(this.Trailers)
        },
        async getRoutes() {
            let data = JSON.stringify({
                AgentAccountNumber: "FGW0006",
                TimeStamp: "2023-09-19T11:10:00",
                TransactionId: "488445e3-13aa-41e3-ace1-9a022a74e974",
                User: "",
                LanguagePrefCode: "en",
                Currency: "EUR",
                CountryCode: "TUN",
                OriginatingSystem: "",
            });
            let config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "https://cms.4help.tn/api/getRoutes_API/getRoutes",
                headers: {
                    "Content-Type": "application/json",
                },
                maxRedirects: 0,
                data: data,
            };
            this.Routes = await this.$axios.request(config).then((res) => {
                return res.data.GetRoutesResponse.Routes[0].Route;
            });
            console.log(this.Routes);
        },
        showMenu(menu) {
            this.currentMenu = menu;
        },
        getDepartDest() {
            this.Routes.map((route) => {
                console.log(route)
                if (!Object.keys(this.portNameCode).includes(route["$"].DepartPortName)) this.portNameCode[route["$"].DepartPortName] = route["$"].DepartPort
                if (!Object.keys(this.portNameCode).includes(route["$"].DestinationPortName)) this.portNameCode[route["$"].DestinationPortName] = route["$"].DestinationPort
                if (
                    !Object.keys(this.filteredRouteList).includes(
                        route["$"].DepartPortName
                    )
                )
                    this.filteredRouteList[route["$"].DepartPortName] = [];
                if (
                    !Object.keys(
                        this.filteredRouteList[route["$"].DepartPortName]
                    ).includes(route["$"].DestinationPortCountry)
                )
                    this.filteredRouteList[route["$"].DepartPortName][
                        route["$"].DestinationPortCountry
                    ] = [];
                //this.filteredRouteList[route["$"].DepartPortName].push(route["$"].DestinationPortName)
                this.filteredRouteList[route["$"].DepartPortName][
                    route["$"].DestinationPortCountry
                ].push(route["$"].DestinationPortName);
            });
        },
        getCurrentDateAndLastDayOfMonth() {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth();
            const lastDayOfMonth = new Date(currentYear, currentMonth + 2, 0).getDate();

            const formattedCurrentDate = currentDate.toISOString().split("T")[0];
            const formattedLastDayOfMonth = `${currentYear + Math.floor((currentMonth + 2) / 12)}-${String((currentMonth + 2) % 12 + 1).padStart(2, "0")}-${String(lastDayOfMonth).padStart(2, "0")}`;

            return {
                currentDate: formattedCurrentDate,
                lastDayOfMonth: formattedLastDayOfMonth
            };
        },
    },
    computed: {
        language() {
            return languageStore.getLanguage();
        },
    },
    watch: {
        selectedcarBrand() {
            // Adjust brand list width when a brand is selected
            this.brandListWidth = this.selectedcarBrand ? "25vw" : "40vw";
        },
        selectedTrailer(value) {
            if (value.length) this.TrailerIsSelected = true
        },
        async depPort(value) {
            const monthDates = this.getCurrentDateAndLastDayOfMonth()
            const code = this.portNameCode[value]
            const destPorts = this.Routes.filter(obj => obj['$'].DepartPort === code).map(obj => obj['$'].DestinationPort)
            let dates = await Promise.all(destPorts.map(async (destPort) => {
                const res = await this.useTimeTableAPI(monthDates.currentDate, monthDates.lastDayOfMonth, code, destPort)
                console.log(res)
                return res
            }))
            console.log(dates)
            this.datestoHighlight = dates.filter(date => !!date).flatMap(date => date.map(obj => obj.DepartDateTime.split('T')[0]))

            console.log(this.datestoHighlight)
        }
    },
    async mounted() {
        this.$parent.displayLoader = true
        await this.getRoutes()
        await this.getVehiculesPassengers()
        this.getDepartDest()
        console.log(this.filteredRouteList)
        this.$parent.displayLoader = false
        this.carMODELS = Object.keys(carModels)
    },
};
</script>
  
<style>
.radio-list::-webkit-scrollbar {
    width: 0.5rem;
    /* Adjust the width as needed */
}

.radio-list::-webkit-scrollbar-thumb {
    background-color: transparent;
    /* Hide the scrollbar thumb */
}

.radio-list::-webkit-scrollbar-track {
    background-color: transparent;
    /* Hide the scrollbar track */
}


.datetimepicker {
    width: 70vh !important;
    margin-bottom: 4rem;
}

.date-time-picker * {
    /* Change the border radius for the date picker */
    border-radius: 2rem !important;
}
</style>
  
<style scoped>
.datepicker-day.enable {
    /* Add your desired CSS styles for the enabled buttons */
    background-color: yellow !important;
    /* Example: setting the background color to yellow */
}

.flexContainer {
    display: flex;
    align-items: center;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
}

.number-input input[type="number"] {
    width: 1.5vw;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.number-input button {
    background-color: #333 !important;
    color: white !important;
    border: none !important;
    padding: 0px 5px !important;
    border-radius: 3px;
}

.number-input {
    display: flex;
    align-items: center;
}

.categ-icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    fill: #333;
    /* Adjust the fill color to match your design */
}

.category-container {
    width: 30vw;
    height: 6vh;
    background-color: white;
    padding: 3.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.port-name {
    margin: 2rem 0;
    cursor: pointer;
    border-radius: 0.5rem;
    text-align: start;
    padding: 1rem;
}

.port-name:not(.selectedPort):hover {
    background-color: #ffffff;
}

.travel-booking {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    background-color: #7988cede;
    border-radius: 3rem;
    padding: 2rem;
    position: absolute;
}

.options-container {
    margin: 1.2rem;
}

.radio-button {
    display: inline-block;
    margin-right: 1.2rem;
    cursor: pointer;
    position: relative;
}

.radio-button input {
    display: none;
}

.radio-button span {
    padding: 10px 20px;
    background-color: #eee;
    border: 2px solid #ccc;
    border-radius: 1.8rem;
    transition: all 0.3s;
}

.radio-button input:checked+span {
    background-color: #174ea688;
    border-color: #174ea688;
    color: white;
    animation: highlight 0.3s ease;
}

@keyframes highlight {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}

.selected {
    color: white;
}

.selectedPort {
    background-color: #7d7d7d;
    color: white;
}

.menu {
    display: flex;
    margin-top: 20px;
    column-gap: 2rem;
}

.menu-column {
    flex: 1;
    padding: 10px;
}

.menu button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
}

.menu button:hover {
    background-color: #45a049;
}

.background-focus {
    /* box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
        0 8px 12px 6px rgb(60 64 67 / 15%);
    outline: none; */
    background-color: #7d7d7d !important;
    color: white !important;
}

.menuButton {
    margin: 0px 20px;
    align-items: center;
    appearance: none;
    background-color: #fff;
    border-radius: 10px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
        rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #3c4043;
    cursor: pointer;
    display: inline-flex;
    fill: currentcolor;
    font-size: 14px;
    font-weight: 500;
    height: 48px;
    justify-content: center;
    letter-spacing: 0.25px;
    line-height: normal;
    max-width: 100%;
    overflow: visible;
    padding: 2px 24px;
    position: relative;
    text-align: center;
    text-transform: none;
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: auto;
    will-change: transform, opacity;
    z-index: 0;
}

.menuButton:hover {
    background: #f6f9fe;
    color: #174ea6;
}


.menuButton:focus {
    outline: none;
    border: 2px solid #b6d2ff;
    color: #00358a;
}

.menuButton:not(:disabled) {
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
        rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.menuButton:not(:disabled):hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0 2px 3px 0,
        rgba(60, 64, 67, 0.15) 0 6px 10px 4px;
}

.menuButton:not(:disabled):focus {
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
        rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.menuButton:not(:disabled):active {
    box-shadow: rgba(60, 64, 67, 0.3) 0 4px 4px 0,
        rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
}

.menuButton:disabled {
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
        rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.trip-Vertical-line {
    width: 0.06rem;
    background: #3a5a99;
}
</style>
<style scoped>
.radio-item input[type="radio"] {
    display: none;
}

.radio-item label {
    color: #ffffff;
    display: block;
    padding: 1rem 3rem;
    background: #174ea688;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 400;
    min-width: 90% !important;
    white-space: nowrap;
    position: relative;
    transition: 0.4s ease-in-out;
}

.radio-item input[type="radio"]:checked+label {
    background: #062b6888;
    border-color: #062b6888;
}

.radio-item label:after,
.radio-item label:before {
    content: "";
    position: absolute;
    border-radius: 50%;
}

.radio-item label:after {
    height: 19px;
    width: 19px;
    border: 2px solid #1b59be;
    left: 19px;
    top: calc(50% - 12px);
    opacity: 0;
    visibility: hidden;
    transition: 0.4s ease-in-out;
}

.radio-item label:before {
    background: #1b59be;
    height: 20px;
    width: 20px;
    left: 21px;
    top: calc(50% - 10px);
    transform: scale(5);
    opacity: 0;
    visibility: hidden;
    transition: 0.4s ease-in-out;
}

.radio-item:checked+label:after {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
}

.radio-item:checked+label:before {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
}

.radio-section {
    display: flex;
    height: 50vh;
}

.radio-list {
    overflow-y: scroll;
    scrollbar-width: none;
    -webkit-scrollbar-width: none;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.7s;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}

.car-models {
    width: 0;
    overflow: hidden;
    transition: width 0.7s ease-in-out;
    width: 20vw;
}

.car-brands {
    transition: width 0.5s ease-in-out;
}

.searchbar {
    font-size: 5rem;
    font-family: arial, sans-serif;
    color: #202124;
    display: flex;
    z-index: 3;
    height: 4rem;
    background: white;
    border: 1px solid #dfe1e5;
    box-shadow: none;
    border-radius: 3rem;
    margin: 0 auto;
    width: 50%;
}

.searchbar:hover {
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223, 225, 229, 0);
}

.searchbar-wrapper {
    flex: 1;
    display: flex;
    padding: 5px 8px 0 14px;
}

.searchbar-left {
    font-size: 14px;
    font-family: arial, sans-serif;
    color: #202124;
    display: flex;
    align-items: center;
    padding-right: 13px;
    margin-top: -5px;
}

.search-icon-wrapper {
    margin: auto;
}

.search-icon {
    margin-top: 3px;
    color: #9aa0a6;
    height: 20px;
    line-height: 20px;
    width: 20px;
}

.searchbar-icon {
    display: inline-block;
    fill: currentColor;
    height: 24px;
    line-height: 24px;
    position: relative;
    width: 24px;
}

.searchbar-center {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
}

.searchbar-input-spacer {
    color: transparent;
    flex: 100%;
    white-space: pre;
    height: 34px;
    font-size: 16px;
}

.searchbar-input {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, .87);
    word-wrap: break-word;
    outline: none;
    display: flex;
    flex: 100%;
    margin-top: -37px;
    height: 34px;
    font-size: 16px;
    max-width: 100%;
    width: 100%;
}


.searchbar-clear-icon {
    margin-right: 12px
}

.voice-search {
    flex: 1 0 auto;
    display: flex;
    cursor: pointer;
    align-items: center;
    border: 0;
    background: transparent;
    outline: none;
    padding: 0 8px;
    width: 2.8em;
}
</style>
<style scoped>
/* Style for the checkbox */
.custom-checkbox {
    display: inline-block;
    position: relative;
    margin-left: 1rem;
    cursor: pointer;
}

.custom-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.custom-checkbox input:checked~.checkmark {
    background-color: #2196F3;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.custom-checkbox input:checked~.checkmark:after {
    display: block;
}

.custom-checkbox .checkmark:after {
    left: 7px;
    top: 3px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}

.title-car {
    display: flex;
    align-items: stretch;
    cursor: pointer;
    margin-bottom: 3rem;
}
</style>