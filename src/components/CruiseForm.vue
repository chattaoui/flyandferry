<template>
  <div class="formbold-main-wrapper" style="margin: 100px">
    <div class="formbold-form-wrapper">
      <form class="search-form" @submit="preventDefault" method="POST">
        <div class="toggle" v-if="pickingCar">
          <input type="radio" name="sizeBy" v-model="tripType" value="roundTrip" id="sizeWeight" checked="checked" />
          <label for="sizeWeight">Voyage aller-retour</label>
          <input type="radio" name="sizeBy" v-model="tripType" value="oneWay" id="sizeDimensions" />
          <label for="sizeDimensions">Aller simple</label>
        </div>
        <div class="formbold-form-step-1 test-center" style="flex-direction: column; gap: 30px; padding: 0.7rem;">
          <div class="group" v-if="pickingCar">
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
                    <span class="port">{{ route["$"]["DepartPortName"] }}</span>
                    <span class="country">{{ route["$"]["DepartPortCountry"] }}</span>
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
                    <span class="port">{{ route["$"]["DestinationPortName"] }}</span>
                    <span class="country">{{ route["$"]["DestinationPortCountry"] }}</span>
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
              <div class="list-item" v-for="(trip, index) in Routes" :key="index" @click="handleRouteClick(trip)">
                <div class="departure">
                  <span class="port">{{ trip["$"]["DepartPortName"] }}</span>
                  <span class="country">{{ trip["$"]["DepartPortCountry"] }}</span>
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
                  <span class="port">{{ trip["$"]["DestinationPortName"] }}</span>
                  <span class="country">{{ trip["$"]["DestinationPortCountry"] }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="step_2" v-if="step_2">
            <div style="flex-grow: 1">
              <h5 style="color: azure; font-size: 16px; margin-bottom: 20px; text-align: left;">
                Select dates
              </h5>
              <div style="display: inline-flex; flex-wrap: wrap; gap: 10px; width: 90%;">
                <VueCtkDateTimePicker v-model="departDate" format='YYYY-MM-DD' :overlay="true" :no-label="true"
                  :no-header="true" :only-date="true" :position="'bottom'" :min-date="getCurrentDate()"
                  class="date-picker" :noButtonNow="true" :label="`Select departure date`" :formatted="'YYYY-MM-DD'">
                </VueCtkDateTimePicker>

                <VueCtkDateTimePicker v-if="tripType === `roundTrip`" v-model="arrivalDate" format='YYYY-MM-DD'
                  :overlay="true" :only-date="true" :no-label="true" :no-header="true" :position="'bottom'"
                  :min-date="minArrivalDate()" class="date-picker" :noButtonNow="true" :label="`Select arrival date`"
                  :formatted="'YYYY-MM-DD'">
                </VueCtkDateTimePicker>
              </div>
              <h5 style="color: azure; font-size: 16px; margin: 20px 0px; text-align: left;">
                Trip Details
              </h5>
              <div style="display: inline-flex; gap: 10px;justify-content: center;">

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
                  <span>Adults</span>
                  <div class="number-input">
                    <button type="button" @click="$refs.adult.value > 0 ? $refs.adult.value-- : null">-</button>
                    <input type="number" ref="adult" id="adult" name="adult" min="0" value="0">
                    <button type="button" @click="$refs.adult.value++">+</button>
                  </div>
                </div>


                <div class="category-container" v-if="categoryExists('Child')">
                  <svg class="categ-icon" viewBox="0 0 74.88 56.41" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path stroke="null" id="svg_1"
                        d="m68.96737,33.04218l-3.04314,-2.76988l2.37282,13.32958a0.18389,0.22074 0 0 1 -0.18389,0.22074l-5.43969,0l0,8.35947a2.67535,3.21135 0 0 1 -4.56175,2.28568l0,0a2.67535,3.21135 0 0 1 -0.78896,-2.27856l0,-8.38083l-1.95164,0l0,8.37371a2.68129,3.21847 0 0 1 -5.33884,0l0,-8.37371l-5.51681,0a0.18389,0.22074 0 0 1 -0.14237,-0.25634l2.37282,-13.30822l-3.08467,2.8482c-1.4059,1.28881 -2.64569,1.4241 -3.55923,0.89718a2.37282,2.8482 0 0 1 -0.87201,-0.85446a2.63383,3.1615 0 0 1 -0.46863,-1.22473a2.80586,3.368 0 0 1 1.11523,-3.4036l7.24303,-6.63631c1.94571,-1.78725 5.46935,-2.58474 9.02858,-2.57762c3.79058,0 7.58709,0.93991 9.39043,2.58474l7.20744,6.55798a2.71095,3.25407 0 0 1 1.0915,3.3324a2.46773,2.96213 0 0 1 -1.33471,2.07207c-0.88981,0.5198 -2.12961,0.44147 -3.50584,-0.81174l-0.02966,0.01424zm-50.03091,-32.04226a6.97609,8.37371 0 0 1 7.01168,8.33099a7.01761,8.42355 0 0 1 -14.0293,0a6.98202,8.38083 0 0 1 7.01761,-8.33099zm16.57415,32.98929c-0.88388,0.49131 -2.12961,0.35603 -3.55923,-0.96127l-4.82869,-4.2723l0,13.03052a0.18389,0.22074 0 0 1 -0.18389,0.22074l-1.69063,0l0,10.18232a2.68129,3.21847 0 0 1 -5.33884,0l0,-10.18232l-1.93978,0l0,10.18232a2.68129,3.21847 0 0 1 -5.33884,0l0,-10.18232l-1.69657,0a0.18389,0.22074 0 0 1 -0.18389,-0.22074l0,-13.08036l-4.86428,4.33639c-1.34658,1.27457 -2.60417,1.36714 -3.48805,0.85446l0,0a2.43214,2.91941 0 0 1 -0.88388,-0.85446a2.62197,3.14726 0 0 1 -0.46863,-1.21049a2.71095,3.25407 0 0 1 1.08557,-3.34664l7.29049,-6.67903c1.84487,-1.80861 5.81341,-2.67731 9.70483,-2.66307s7.83624,0.95415 9.37264,2.75563l7.18964,6.55086a2.88891,3.46768 0 0 1 1.15082,3.46056a2.58637,3.10454 0 0 1 -0.45677,1.23185a2.37282,2.8482 0 0 1 -0.87201,0.85446l0,-0.00712zm20.81556,-32.98929a7.01168,8.41643 0 0 1 6.7922,6.24468c2.49739,0.9043 5.30325,3.46768 4.44904,5.96698c-1.15082,3.368 -3.55923,1.81573 -3.79651,-1.70892a10.04296,12.05501 0 0 0 -0.45677,-2.89804c0,0.2421 0,0.48419 0,0.71205a7.01168,8.41643 0 0 1 -14.02337,0c0,-0.12817 0,-0.24922 0,-0.37739a9.90652,11.89124 0 0 0 -0.43897,2.8482c-0.24321,3.52465 -2.64569,5.07692 -3.79651,1.71604c-0.84828,-2.48506 1.91012,-5.02707 4.38972,-5.95274a7.00575,8.40931 0 0 1 6.88118,-6.55086z" />
                    </g>
                  </svg>
                  <span v-if="categoryExists('Baby')">children 3-14 years</span>
                  <span v-if="!categoryExists('Baby')">children 0-14 years</span>
                  <div class="number-input">
                    <button type="button" @click="$refs.children.value > 0 ? $refs.children.value-- : null">-</button>
                    <input type="number" ref="children" id="children" name="children" min="0" value="0">
                    <button type="button" @click="$refs.children.value++">+</button>
                  </div>
                </div>


                <div class="category-container" v-if="categoryExists('Baby')">
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
              <div class="pick_car" @click="step_2 = false; pickingCar = false"
                v-if="Object.keys(selectedVehicule).length === 0">
                <!-- Left Icon (You can replace this with your own icon code) -->
                <div class="car-left-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#212121" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                  </svg>
                </div>

                <!-- Text -->
                <div style="color: gray;">
                  How are you traveling?
                </div>
                <!-- Right Icon (You can replace this with your own icon code) -->
                <div class="car-right-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#212121" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                  </svg>
                </div>
              </div>
              <div class="pick_car" v-else>

                <div style="margin-right: 5px;">
                  <i style="display: inherit!important;" v-html="getCarIcon(getVehicleName(selectedVehicule))">
                  </i>
                </div>


                <div style="color: black;">
                  {{ `${getVehicleName(selectedVehicule)}
                                    (${selectedVehicule["MinHeight"]}~${selectedVehicule["MaxHeight"]})${Object.keys(selectedTrailer).length
                      ? ` with ${selectedTrailer["Description"]}` : ''}` }}
                </div>

                <div class="car-right-icon" @click="resetCarPick">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                    id="Layer_1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 122.881 122.88"
                    enable-background="new 0 0 122.881 122.88" xml:space="preserve">
                    <g>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M61.44,0c33.933,0,61.441,27.507,61.441,61.439 c0,33.933-27.508,61.44-61.441,61.44C27.508,122.88,0,95.372,0,61.439C0,27.507,27.508,0,61.44,0L61.44,0z M81.719,36.226 c1.363-1.363,3.572-1.363,4.936,0c1.363,1.363,1.363,3.573,0,4.936L66.375,61.439l20.279,20.278c1.363,1.363,1.363,3.573,0,4.937 c-1.363,1.362-3.572,1.362-4.936,0L61.44,66.376L41.162,86.654c-1.362,1.362-3.573,1.362-4.936,0c-1.363-1.363-1.363-3.573,0-4.937 l20.278-20.278L36.226,41.162c-1.363-1.363-1.363-3.573,0-4.936c1.363-1.363,3.573-1.363,4.936,0L61.44,56.504L81.719,36.226 L81.719,36.226z" />
                    </g>
                  </svg>
                </div>

              </div>
            </div>
            <div>
              <a class="currency_euro" tabindex="0" data-popup="currency_popup">Currency: € (Euros)</a>
            </div>
            <div style="
              width: 100%">
              <a class="formbold-btn" style="
              width: 100%; margin-bottom: 10px;" @click="$parent.displayLoader=true,getTimeTable(departDate, arrivalDate)">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Rechercher
              </a>
            </div>
          </div>
          <div class="step_2" v-if="!pickingCar">

            <div style="flex-grow: 1">
              <div class="title-car" @click="step_2 = !step_2; pickingCar = !pickingCar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="white" viewBox="0 -960 960 960">
                  <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                </svg>
                <h3>Vehicle details</h3>
              </div>
              <div class="car-custom-list">
                <div v-for="(category, index) in VehiculesPassengers.LeadVehicleCategories" :key="`carItem_` + index"
                  class="car-list-item"
                  :class="{ 'selected': selectedIndex === index, 'highlighted': highlightedIndex === index }"
                  @click="selectCarItem(index, category)" @mouseover="highlightCarItem(index)"
                  @mouseout="resetCarItem(index)">
                  <i class="car-category-icon" v-html="getCarIcon(getVehicleName(category))">
                  </i>
                  <span class="car-text">{{ getVehicleName(category) + ` << height between ${category["MinHeight"]} and
                                        ${category["MaxHeight"]}>>` }}</span>
                </div>
              </div>


              <div v-if="showTrailer(selectedVehicule)">
                <h3>Do you need a trailer?</h3>

                <div v-for="option in TrailerOptions" :key="option.value">
                  <label @click="selectTrailerOption(option.value)" class="trailer-option"
                    :class="{ highlighted: selectedTrailerOption === option.value }">
                    <input type="radio" v-model="withTrailer" :value="option.value" style="position: absolute; /* Hide the radio button */
            opacity: 0;">
                    {{ option.label }}
                  </label>
                </div>

              </div>

              <div v-if="withTrailer === 'with' && showTrailer(selectedVehicule)"
                style="display:flex;flex-direction:column;align-items:center;">

                <div v-for="(trailer, index) in VehiculesPassengers.TrailerVehicleCategories"
                  :key="`trailerItem_` + index" class="car-list-item" style="width: 70%;"
                  :class="{ 'selected': selectedTrailerIndex === index, 'highlighted': highlightedTrailerIndex === index }"
                  @click="selectTrailerItem(index, trailer)" @mouseover="highlightTrailerItem(index)"
                  @mouseout="resetTrailerItem(index)">
                  <span class="car-text">
                    {{ trailer["Description"] }}
                  </span>
                </div>


              </div>

            </div>

            <div>
              <button class="confirm-vehicule" @click="vehiculeInsert()" role="button">Confirm</button>
            </div>

          </div>
        </div>
      </form>
    </div>
  </div>
  <MapView :place="Object.keys(selectedRoute).length !== 0? `${selectedRoute['$'].DepartPortName.toString()}` : null " :destination="Object.keys(selectedRoute).length !== 0 ? `${selectedRoute['$'].DestinationPortName.toString()}` : null " />
  <!-- <MapView :place="`venezia`" :destination="`zarzis`" /> -->
</template>

<script>
import { languageStore } from "../LanguageStore";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import MapView from '@/components/mapRoute.vue';

export default {
  data() {
    return {
      selectedTrailerOption: null,
      TrailerOptions: [
        { label: 'without trailer', value: 'without' },
        { label: 'with trailer', value: 'with' },
      ],
      withTrailer: null,
      highlightedIndex: -1,
      selectedIndex: -1,
      selectedTrailerIndex: -1,
      highlightedTrailerIndex: -1,
      departDate: null,
      arrivalDate: null,
      tripType: "roundTrip",
      step_1: true,
      step_2: false,
      pickingCar: true,
      searchedRoutes: {},
      searchInp: "",
      previousSearch: "",
      showRoutes: false,
      showPopular: true,
      searchFocused: false,
      Routes: [],
      VehiculesPassengers: {},
      selectedVehicule: {},
      selectedTrailer: {},
      timeTable: {},
      svgVehicules: {
        Car: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M241-223v49q0 8.925-6.325 14.962Q228.35-153 219-153h-44q-9.35 0-15.675-6.038Q153-165.075 153-174v-305.143L230-669q6.571-19.65 24.064-30.825Q271.557-711 293-711h374q21.443 0 38.936 11.175T730-669l77 189.857V-174q0 8.925-6.325 14.962Q794.35-153 785-153h-44q-9.35 0-15.675-6.038Q719-165.075 719-174v-49H241Zm2-299h474l-49-122H292l-49 122Zm70.882 195Q333-327 346.5-340.382q13.5-13.383 13.5-32.5Q360-392 346.618-405.5q-13.383-13.5-32.5-13.5Q295-419 281.5-405.618q-13.5 13.383-13.5 32.5Q268-354 281.382-340.5q13.383 13.5 32.5 13.5Zm332 0Q665-327 678.5-340.382q13.5-13.383 13.5-32.5Q692-392 678.618-405.5q-13.383-13.5-32.5-13.5Q627-419 613.5-405.618q-13.5 13.383-13.5 32.5Q600-354 613.382-340.5q13.383 13.5 32.5 13.5Z"/></svg>`,
        BUS: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.9 120.5" width="20px" height="20px" style="enable-background:new 0 0 122.9 120.5" xml:space="preserve"><style xmlns="http://www.w3.org/2000/svg" type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M110.8,103.6h-7.6V114c0,3.6-2.9,6.5-6.5,6.5h-9c-3.6,0-6.5-2.9-6.5-6.5v-10.3H41.5V114c0,3.6-2.9,6.5-6.5,6.5 h-9c-3.6,0-6.5-2.9-6.5-6.5v-10.3H12v-82c0-7.6,4.4-13.1,13.3-16.5c17.6-6.9,54.6-6.9,72.3,0c8.9,3.4,13.3,8.9,13.3,16.5V103.6 L110.8,103.6L110.8,103.6z M118.6,40.4h-3.8V62h3.8c2.4,0,4.3-1.9,4.3-4.3V44.7C122.9,42.3,121,40.4,118.6,40.4L118.6,40.4z M4.3,40.4h3.8V62H4.3C1.9,62,0,60.1,0,57.7V44.7C0,42.3,1.9,40.4,4.3,40.4L4.3,40.4z M46.4,8.6h30.1c0.9,0,1.6,0.7,1.6,1.6v5.2 c0,0.9-0.7,1.6-1.6,1.6H46.4c-0.9,0-1.6-0.7-1.6-1.6v-5.2C44.8,9.3,45.5,8.6,46.4,8.6L46.4,8.6z M22.9,23.2h76.7 c1,0,1.9,0.9,1.9,1.9v42.8c0,1-0.9,1.9-1.9,1.9H22.9c-1,0-1.9-0.9-1.9-1.9V25.1C21,24.1,21.8,23.2,22.9,23.2L22.9,23.2L22.9,23.2 L22.9,23.2z M98.6,84.9c0-1.9-0.7-3.6-2-4.9c-1.3-1.3-3-2-4.9-2c-1.9,0-3.5,0.7-4.9,2c-1.4,1.3-2,3-2,4.9c0,1.9,0.7,3.5,2,4.8 c1.4,1.3,3,2,4.9,2c1.9,0,3.6-0.7,4.9-2C98,88.4,98.6,86.8,98.6,84.9L98.6,84.9L98.6,84.9L98.6,84.9z M38.1,84.9 c0-1.9-0.7-3.6-2-4.9c-1.3-1.3-3-2-4.9-2c-1.9,0-3.6,0.7-4.9,2c-1.3,1.3-2,3-2,4.9c0,1.9,0.6,3.5,2,4.8c1.3,1.3,3,2,4.9,2 c2,0,3.6-0.7,4.9-2C37.4,88.4,38.1,86.8,38.1,84.9L38.1,84.9L38.1,84.9L38.1,84.9z"/></g></svg>`,
        Van: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M242.5-200q-48.75 0-82.875-34.125T125.5-317h-68v-399q0-27.638 19.681-47.319T124.5-783h543v140h115l120 168v158h-69q0 48.75-34.125 82.875T716.5-200q-48.75 0-82.875-34.125T599.5-317h-240q0 49-34.125 83T242.5-200Zm0-67q20.9 0 35.45-14.55Q292.5-296.1 292.5-317q0-20.9-14.55-35.45Q263.4-367 242.5-367q-20.9 0-35.45 14.55Q192.5-337.9 192.5-317q0 20.9 14.55 35.45Q221.6-267 242.5-267Zm474 0q20.9 0 35.45-14.55Q766.5-296.1 766.5-317q0-20.9-14.55-35.45Q737.4-367 716.5-367q-20.9 0-35.45 14.55Q666.5-337.9 666.5-317q0 20.9 14.55 35.45Q695.6-267 716.5-267Zm-49-187 167-1L748-576h-80.5v122Z"/></svg>`,
        Motorcycle: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M173-198q-68.35 0-116.175-47.825T9-362q0-64 42.25-110.75T156.5-524.5L104-577H10v-45h149l132 106 142-57h157l-97-122H388v-67h137l107 134 129-86v138h-88l51 63q16-5 31.5-9t32.476-4q68.374 0 116.199 47.856T952-361.894q0 68.394-47.856 116.144T787.894-198q-68.394 0-116.144-47.825T624-362q0-32 12-61t33-52l-19-24-123 206H386l-51-52q-5.5 63-52.25 105T173-198Zm.062-67q40.038 0 68.488-28.512Q270-322.024 270-362.062t-28.512-68.488Q212.976-459 172.938-459t-68.488 28.512Q76-401.976 76-361.938t28.512 68.488Q133.024-265 173.062-265Zm615 0q40.038 0 68.488-28.512Q885-322.024 885-362.062t-28.512-68.488Q827.976-459 787.938-459t-68.488 28.512Q691-401.976 691-361.938t28.512 68.488Q748.024-265 788.062-265Z"/></svg>`
      },
      selectedRoute: {},
    };
  },
  components: {
    VueCtkDateTimePicker,
    MapView
  },
  methods: {
    resetCarPick() {
      this.selectedVehicule = {}
      this.selectedTrailer = {}
      this.selectedTrailerIndex = -1
      this.selectedIndex = -1
      this.selectedTrailerOption = -1
      this.withTrailer = null
    },
    //     adjustDateRange(fromDate, toDate) {
    //   // Parse the input dates in "YYYY-MM-DD" format
    //   const fromDateObj = new Date(fromDate);
    //   const toDateObj = new Date(toDate);

    //   // Calculate the adjusted dates
    //   const adjustedFromDate = new Date(fromDateObj);
    //   adjustedFromDate.setDate(fromDateObj.getDate() - 3);

    //   const adjustedToDate = new Date(toDateObj);
    //   adjustedToDate.setDate(toDateObj.getDate() + 3);

    //   // Format the results in "YYYY-MM-DD" format
    //   const formatDate = date => {
    //     const year = date.getFullYear();
    //     const month = String(date.getMonth() + 1).padStart(2, '0');
    //     const day = String(date.getDate()).padStart(2, '0');
    //     return `${year}-${month}-${day}`;
    //   };

    //   const adjustedFromDateString = formatDate(adjustedFromDate);
    //   const adjustedToDateString = formatDate(adjustedToDate);

    //   return [adjustedFromDateString, adjustedToDateString];
    // },
    getDatesOneWay(inputDate) {
      // return (inputDate + 7 days, inputDate - 3 days)
      // Parse the input date in "YYYY-MM-DD" format
      const inputDateObj = new Date(inputDate);

      // Calculate the date 3 days prior
      const priorDate = new Date(inputDateObj);
      priorDate.setDate(inputDateObj.getDate() - 3);

      // Calculate the date 3 days after
      const afterDate = new Date(inputDateObj);
      afterDate.setDate(inputDateObj.getDate() + 7);

      // Format the results in "YYYY-MM-DD" format
      const formatDate = date => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };

      const priorDateString = formatDate(priorDate);
      const afterDateString = formatDate(afterDate);
      return [priorDateString, afterDateString];
    },
    vehiculeInsert() {
      this.step_2 = !this.step_2
      this.pickingCar = !this.pickingCar
      console.log(this.selectedVehicule)
    },
    async getTimeTable(fromDate, toDate) {
    console.log(fromDate, toDate)
      if (this.tripType !== "roundTrip") {
        [fromDate, toDate] = this.getDatesOneWay(fromDate)
        const OUT = await this.useTimeTableAPI(fromDate, toDate, this.selectedRoute["$"].DepartPort, this.selectedRoute["$"].DestinationPort)
        localStorage.setItem('trips', JSON.stringify([OUT]))
        var tripOptions = {passengers:[],vehicles: []}

        for (let i = 1; i <= this.$refs.adult.value; i++) {
          tripOptions.passengers.push({
            "Age": "35",
            "Category": "Adult"
          })
        }

        for (let i = 1; i <= this.$refs.children.value; i++) {
          tripOptions.passengers.push({
            "Age": "6",
            "Category": "Child"
          })
        }
          if (Object.keys(this.selectedVehicule).length) tripOptions.vehicles.push({
            "OperatorCode": this.selectedVehicule.OperatorCode,
            "Height": this.selectedVehicule.MaxHeight,
            "Length": this.selectedVehicule.MinHeight
          })
        localStorage.setItem('tripOptions', JSON.stringify(tripOptions))
        if (OUT) this.$router.push({ name: 'triplist' })
      }
      else {
        const fromDates = this.getDatesOneWay(fromDate)
        const toDates = this.getDatesOneWay(toDate)
        const OUT = await this.useTimeTableAPI(fromDates[0], fromDates[1], this.selectedRoute["$"].DepartPort, this.selectedRoute["$"].DestinationPort)
        const RTN = await this.useTimeTableAPI(toDates[0], toDates[1], this.selectedRoute["$"].DestinationPort, this.selectedRoute["$"].DepartPort)
        localStorage.setItem('trips', JSON.stringify([OUT, RTN]))
        
        var tripOptions = {passengers:[],vehicles: []}

        for (let i = 1; i <= this.$refs.adult.value; i++) {
          tripOptions.passengers.push({
            "Age": "35",
            "Category": "Adult"
          })
        }

        for (let i = 1; i <= this.$refs.children.value; i++) {
          tripOptions.passengers.push({
            "Age": "6",
            "Category": "Child"
          })
        }

        if (Object.keys(this.selectedVehicule).length) tripOptions.vehicles.push({
            "OperatorCode": this.selectedVehicule.OperatorCode,
            "Height": this.selectedVehicule.MaxHeight,
            "Length": this.selectedVehicule.MaxLength
          })
        localStorage.setItem('tripOptions', JSON.stringify(tripOptions))

        if (OUT && RTN) this.$router.push({ name: 'triplist' })
      }
      this.$parent.displayLoader = false
      
    },
    async useTimeTableAPI(fromDate, toDate, fromPort, toPort) {
      const data = JSON.stringify({
        "TransactionId": "488445e3-13aa-41e3-ace1-9a022a74e974",
        "User": "",
        "LanguagePrefCode": "en",
        "Currency": "EUR",
        "CountryCode": "TUN",
        "OriginatingSystem": "",
        "FromSailingDate": fromDate,
        "ToSailingDate": toDate,
        "DepartPort": fromPort,
        "DestinationPort": toPort
      });

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://cms.4help.tn/api/getTimeTables_API/getTimeTables',
        headers: {
          'Content-Type': 'application/json'
        },
        maxRedirects: 0,
        data: data
      };
      return await this.$axios.request(config).then(res => {
        if (res.data !== "Pas de data à afficher avec les données entrées") {
          return res.data
        }
        else {
          if (this.tripType === "roundTrip") window.alert('There are no available ferries in the selected dates')
          else window.alert('there are no ferries sailing on the date you selected')
        }
      })
    },
    resetTrailerItem(index) {
      if (this.selectedTrailerIndex !== index) {
        this.VehiculesPassengers.TrailerVehicleCategories[index].highlighted = false;
      }
    },
    highlightTrailerItem(index) {
      if (this.selectedTrailerIndex !== index) {
        this.VehiculesPassengers.TrailerVehicleCategories[index].highlighted = true;
      }
    },
    selectTrailerItem(index, category) {
      // Deselect the previously selected item, if any
      if (this.selectedTrailerIndex !== -1) {
        this.VehiculesPassengers.TrailerVehicleCategories[this.selectedTrailerIndex].selected = false;
      }

      // Select the clicked item
      this.VehiculesPassengers.TrailerVehicleCategories[index].selected = true;
      this.selectedTrailerIndex = index;
      this.selectedTrailer = category
    },
    selectTrailerOption(option) {
      this.selectedTrailerOption = option;
    },
    showTrailer(category) {
      let Name = this.getVehicleName(category)
      if (Name === "Van" || Name === "Car") return true
      return false
    },
    getCarIcon(carCateg) {
      return this.svgVehicules[carCateg]
    },
    getVehicleName(category) {
      if (category["Code"]) return category["Code"]
      else return category["OperatorCode"]
    },
    highlightCarItem(index) {
      if (this.selectedIndex !== index) {
        this.VehiculesPassengers.LeadVehicleCategories[index].highlighted = true;
      }
    },
    resetCarItem(index) {
      if (this.selectedIndex !== index) {
        this.VehiculesPassengers.LeadVehicleCategories[index].highlighted = false;
      }
    },
    selectCarItem(index, category) {
      // Deselect the previously selected item, if any
      if (this.selectedIndex !== -1) {
        this.VehiculesPassengers.LeadVehicleCategories[this.selectedIndex].selected = false;
      }

      // Select the clicked item
      this.VehiculesPassengers.LeadVehicleCategories[index].selected = true;
      this.selectedIndex = index;
      this.selectedVehicule = category
    },
    categoryExists(category) {
      let exists = false
      this.VehiculesPassengers.PassengerCategories.map(el => {
        if (category === el["Category"]) exists = true
      })
      return exists
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
        return `${parts[0]}-${parts[1]}-${Number(parts2[0]) + 1} ${parts2[1]}`
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
      this.selectedRoute = route
      console.log("select Route >>>>>", this.selectedRoute)
      this.searchInp = `${route["$"]["DepartPortName"]} - ${route["$"]["DestinationPortName"]}`
      this.step_1 = false
      this.step_2 = true
    },
    filterRoutes() {
      this.searchedRoutes = this.Routes
        .map((trip) => {
          if (
            Object.values(trip["$"]).some((value) =>
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
      this.selectedRoute = {}
    },
    async getVehiculesPassengers() {
      let data = JSON.stringify({
        "TransactionId": "488445e3-13aa-41e3-ace1-9a022a74e974",
        "User": "",
        "LanguagePrefCode": "en",
        "Currency": "EUR",
        "CountryCode": "TUN",
        "OriginatingSystem": ""
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://cms.4help.tn/api/getPassengerAndVehicleTypes_API/getPassengerAndVehicleTypes',
        headers: {
          'Content-Type': 'application/json'
        },
        maxRedirects: 0,
        data: data
      };

      this.VehiculesPassengers = await this.$axios.request(config)
        .then(res => { return res.data })
      console.log(this.VehiculesPassengers)
    }
  },
  computed: {
    language() {
      return languageStore.getLanguage();
    },
  },
  async mounted() {
    this.$parent.displayLoader = true
    let data = JSON.stringify({
      "AgentAccountNumber": "FGW0006",
      "TimeStamp": "2023-09-19T11:10:00",
      "TransactionId": "488445e3-13aa-41e3-ace1-9a022a74e974",
      "User": "",
      "LanguagePrefCode": "en",
      "Currency": "EUR",
      "CountryCode": "TUN",
      "OriginatingSystem": ""
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://cms.4help.tn/api/getRoutes_API/getRoutes',
      headers: {
        'Content-Type': 'application/json'
      },
      maxRedirects: 0,
      data: data
    };
    this.Routes = await this.$axios.request(config).then(res => { return res.data.GetRoutesResponse.Routes[0].Route })
    await this.getVehiculesPassengers()
    this.$parent.displayLoader = false
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

<style scoped>

.trailer-option {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  cursor: pointer;

  margin: 10px 0px;
  padding: 7px;
  background-color: white;
  transition: background-color 0.2s;
  border-radius: 20px;
}

.trailer-option:hover {
  background-color: #ccc;
  color: white;
}

.highlighted {
  background-color: #7d7d7d;
  /* Highlight selected item */
}

h3 {
  flex-grow: 1;
  text-align: center;
  margin-top: 20px;
  color: white
}

.confirm-vehicule {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(25, 51, 84, .2) 0 -25px 18px -14px inset, rgba(25, 51, 84, .15) 0 1px 2px, rgba(25, 51, 84, .15) 0 2px 4px, rgba(25, 51, 84, .15) 0 4px 8px, rgba(25, 51, 84, .15) 0 8px 16px, rgba(25, 51, 84, .15) 0 16px 32px;
  color: #193354;
  cursor: pointer;
  display: inline-block;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 85%;
}

.confirm-vehicule:hover {
  box-shadow: rgba(25, 51, 84, .35) 0 -25px 18px -14px inset, rgba(25, 51, 84, .25) 0 1px 2px, rgba(25, 51, 84, .25) 0 2px 4px, rgba(25, 51, 84, .25) 0 4px 8px, rgba(25, 51, 84, .25) 0 8px 16px, rgba(25, 51, 84, .25) 0 16px 32px;
  transform: scale(1.01);
}

.car-custom-list {
  overflow-y: auto;
  border-radius: 5px;
  scrollbar-width: none;
  -webkit-scrollbar-width: none;
}

.car-custom-list::-webkit-scrollbar {
  width: 0.5rem;
  /* Adjust the width as needed */
}

.car-custom-list::-webkit-scrollbar-thumb {
  background-color: transparent;
  /* Hide the scrollbar thumb */
}

.car-custom-list::-webkit-scrollbar-track {
  background-color: transparent;
  /* Hide the scrollbar track */
}

.car-list-item {
  margin: 8px 0px;
  display: flex;
  align-items: center;
  padding: 7px;
  background-color: white;
  transition: background-color 0.2s;
  border-radius: 20px;
}

.car-list-item.selected,
.car-list-item.selected:hover {
  background-color: #7d7d7d;
  /* Change to your desired selected item color */
  color: white;
  /* Change text color for selected item */
}

.car-list-item:hover {
  background-color: #ccc;
}

.car-list-item:hover span {
  color: white !important;
}

.car-category-icon {
  margin-right: 10px;
  fill: #193354
}

.display-category-icon {
  margin-right: 10px;
  fill: #000000
}

.car-list-item:hover .car-category-icon {
  margin-right: 10px;
  fill: white
}

.car-text {
  flex-grow: 1;
  color: #193354 !important;
  font-size: 14px;
  font-weight: 600;
}


.title-car {
  display: flex;
  align-items: center;
  height: 48px;
  padding: 10px;
  align-items: center;
  cursor: pointer;
}

.pick_car {
  cursor: pointer;
  margin: 20px 0px;
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 5px;
}

.car-left-icon {
  margin-right: 15px;
}

/* Style for the right icon */
.car-right-icon {
  margin-left: auto;
  /* Pushes the right icon to the right */
  cursor: pointer;
  /* Add a pointer cursor to indicate it's clickable */
}

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
  appearance: none;
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
  margin-bottom: 15px !important;
  width: 100%;
  cursor: default !important;
}

.step_2 {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-x: visible !important;
  overflow-y: scroll !important;
  scrollbar-width: none;
  -webkit-scrollbar-width: none;
}

.step_2::-webkit-scrollbar {
  width: 0.5rem;
  /* Adjust the width as needed */
}

.step_2::-webkit-scrollbar-thumb {
  background-color: transparent;
  /* Hide the scrollbar thumb */
}

.step_2::-webkit-scrollbar-track {
  background-color: transparent;
  /* Hide the scrollbar track */
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
  height: 100%;
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

.popular-ferry-list {
  height: 100%;
}

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
  height: 100%;
}
</style>
<style scoped>
.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 15px;
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
