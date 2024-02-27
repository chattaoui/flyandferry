<template>
  <div class="overlayLoader" v-if="displayLoader" id="overlay">
    <jellyLoader />
  </div>
  <div class="trip-container" v-if="trips.length == 1 && showList">
    <div class="grid">
      <div class="grid-one">
        <div class="current-travel">
          <p class="current-travel-location">{{ getTripTitle() }}</p>
          <p class="current-travel-class">1 adult - Economy</p>
        </div>
        <div class="calendars">
          <button class="calendar">
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path
                d="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z" />
            </svg>
            <span>Tuesday, Apr 21</span>
          </button>
          <button class="calendar blank">
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path
                d="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z" />
            </svg>
            <span>One way</span>
          </button>
        </div>
      </div>
      <div class="grid-two rate-cards">
        <div class="rate">Cheapest price</div>
      </div>
      <div class="grid-two rate-cards active">
        <div class="rate">recommended</div>
      </div>
      <div class="grid-two rate-cards">
        <div class="rate">Fastest</div>
      </div>
      <div class="grid-two rate-cards">
        <div class="rate">Best time</div>
      </div>
      <div class="fade-in-left grid-four" v-if="showTripList">
        <div v-for="(trip, index) in trips[0]" :key="`trip_item_${index}`" class="travel-card">
          <div class="travel-image">
            <div v-html="getFerryCompany('CTN')"></div>
          </div>
          <div class="travel-arrival-info">
            <p class="travel-time">{{ trip.DepartDateTime.split("T")[1] }}</p>
            <p></p>
            <p class="travel-arrival-date">
              {{ trip.DepartDateTime.split("T")[0] }}
            </p>
          </div>
          <div class="travel-range">
            <p class="range-time">
              {{
                calculateHourDifference(
                  trip.DepartDateTime,
                  trip.ArriveDateTime
                )
              }}
            </p>
            <div class="range">
              <div class="range-pos range-start"></div>
              <div class="range-pos range-end"></div>
              <div class="ranger"></div>
            </div>
            <p class="range-stops">
              <span>Non-stop</span>
            </p>
          </div>
          <div class="travel-departure-info">
            <p class="travel-time">{{ trip.ArriveDateTime.split("T")[1] }}</p>
            <p></p>
            <p class="travel-arrival-date">
              {{ trip.ArriveDateTime.split("T")[0] }}
            </p>
          </div>
          <div class="travel-rate-final">
            <div v-if="showSummary" class="travel-rate"><sup>€</sup> {{ totalCost() }} </div>
            <button v-if="!showSummary" class="select-rate" @click="getSailings(trip)">
              Select
            </button>
          </div>
        </div>

        <div v-if="showSummary" style="text-align: -webkit-center">
          <div class="card-container">
            <h3 class="heading">Summary</h3>
            <div class="card" id="price-card">
              <table class="price-table">
                <thead>
                  <tr>
                    <th class="font-bold">Option</th>
                    <th class="text-center font-bold">Quantity</th>
                    <th class="text-right font-bold">Unit price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="service in getServiceNames()" :key="service.serviceName">
                    <td>{{ service["serviceName"] }}</td>
                    <td class="text-center font-bold">
                      {{ service["Quantity"] }}
                    </td>
                    <td class="text-right font-bold">
                      {{ service["unitCost"] }} &nbsp;€
                    </td>
                  </tr>
                  <!-- More rows go here -->
                </tbody>
              </table>
            </div>
            <div class="grid-container">
              <div class="grid-item font-bold">Total</div>
              <div class="spacer"></div>
              <div class="grid-item font-size-large font-bold">
                <span class="price">{{ totalCost() }}</span>
              </div>
            </div>
            <div class="spacer"></div>
            <p class="caption">
              *The price may change depending on the accomodations.
            </p>
          </div>
          <div style="display: inline-flex; gap: 4rem">
            <button class="next-button" @click="resetTripList()">Select another trip</button>
            <button class="next-button" @click="$router.push({ name: 'login' })">Continue ?</button>
          </div>
        </div>
      </div>
      <div class="grid-four fade-in-left" v-else>
        <div v-if="Object.keys(services).length">
          <div class="services-container fade-in-left">
            <h2>Accommodation Services</h2>
            <div class="service-category">
              <div class="service-cards">
                <div v-for="(service, index) in services[0].Sailing.ServicesOptions
                  .OnBoardAccommodationServices.OnBoardAccommodationService" :key="index" class="service-card">
                  <div style="flex: 1; padding: 3rem;align-self: center;">
                    <h3>{{ service["@Description"] }}</h3>
                    <p>
                      Available Quantity: {{ service["@QuantityAvailable"] }}
                    </p>
                  </div>
                  <div style="flex: 1; align-self: center; text-align: -webkit-center;">
                    <img style="width: 20%;height: 8rem;" :src="getServicePicture(service['@Code'])">
                  </div>
                  <div style="
                      flex: 1;
                      display: flex;
                      flex-direction: column;
                      justify-content: space-evenly;
                    ">
                    <div class="quantity-selector">
                      <label for="quantity">Quantity:</label>
                      <input type="number" v-model="selectedQuantities[service['@Code']]" min="0" :max="service['@Code'] === 'FAUT' ? getAdultCount() : null
                        " />
                    </div>
                    <div class="travel-rate">
                      Cost: <sup>€</sup>{{ parseFloat(service["@UnitCost"]).toFixed(2) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 style="margin: 6rem !important">Other Services</h2>
            <div class="service-category">
              <div class="service-cards">
                <div v-for="(service, index) in Array.isArray(services[0].Sailing.ServicesOptions.OnBoardServices
                  .OnBoardService) ? services[0].Sailing.ServicesOptions.OnBoardServices
                  .OnBoardService : [services[0].Sailing.ServicesOptions.OnBoardServices
                    .OnBoardService]" :key="index" class="service-card">
                  <div style="flex: 1; padding: 3rem;align-self: center;">
                    <h3>{{ service["@Description"] }}</h3>
                    <p>
                      Available Quantity: {{ service["@QuantityAvailable"] }}
                    </p>
                  </div>
                  <div style="flex: 1; align-self: center;text-align: -webkit-center;">
                    <img style="width: 20%;height: 8rem;" :src="getServicePicture(service['@Code'])">                  
                  </div>
                  <div style="
                      flex: 1;
                      display: flex;
                      flex-direction: column;
                      justify-content: space-evenly;
                    ">
                    <div class="quantity-selector">
                      <label for="quantity">Quantity:</label>
                      <input type="number" v-model="selectedQuantities[service['@Code']]" min="0" />
                    </div>
                    <div class="travel-rate">
                      Cost: <sup>€</sup>
                      {{ parseFloat(service["@UnitCost"]).toFixed(2) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="next-button" @click="test()">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="trip-container" v-if="trips.length == 2 && showList">
    <div class="grid">
      <div class="grid-one">
        <div class="current-travel">
          <p class="current-travel-location">{{ getTripTitle() }}</p>
          <p class="current-travel-class">1 adult - Economy</p>
        </div>
        <div class="calendars">
          <button class="calendar">
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path
                d="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z" />
            </svg>
            <span>Tuesday, Apr 21</span>
          </button>
          <button class="calendar blank">
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path
                d="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z" />
            </svg>
            <span>One way</span>
          </button>
        </div>
      </div>
      <div class="grid-two rate-cards">
        <div class="rate">Cheapest price</div>
      </div>
      <div class="grid-two rate-cards active">
        <div class="rate">recommended</div>
      </div>
      <div class="grid-two rate-cards">
        <div class="rate">Fastest</div>
      </div>
      <div class="grid-two rate-cards">
        <div class="rate">Best time</div>
      </div>
      <div class="grid-four fade-in-left" v-if="showTripList">
        <div v-for="(trip, index) in listedTrips" :key="`trip_item_${index}`"
          style="display: flex; flex-direction: column">
          <div class="travel-card">
            <div class="travel-image">
              <div v-html="getFerryCompany('CTN')"></div>
            </div>
            <div class="trip-details-container">
              <div class="trip-details">
                <div class="travel-arrival-info">
                  <p class="travel-time">
                    {{ trip.Out.DepartDateTime.split("T")[1] }}
                  </p>
                  <p></p>
                  <p class="travel-arrival-date">
                    {{ trip.Out.DepartDateTime.split("T")[0] }}
                  </p>
                </div>
                <div class="travel-range">
                  <p class="range-time">
                    {{
                      calculateHourDifference(
                        trip.Out.DepartDateTime,
                        trip.Out.ArriveDateTime
                      )
                    }}
                  </p>
                  <div class="range">
                    <div class="range-pos range-start"></div>
                    <div class="range-pos range-end"></div>
                    <div class="ranger"></div>
                  </div>
                  <p class="range-stops">
                    <span>Non-stop</span>
                  </p>
                </div>
                <div class="travel-departure-info">
                  <p class="travel-time">
                    {{ trip.Out.ArriveDateTime.split("T")[1] }}
                  </p>
                  <p></p>
                  <p class="travel-arrival-date">
                    {{ trip.Out.ArriveDateTime.split("T")[0] }}
                  </p>
                </div>
              </div>

              <div class="trip-Vertical-line"></div>

              <div class="trip-details">
                <div class="travel-arrival-info">
                  <p class="travel-time">
                    {{ trip.Rtn.DepartDateTime.split("T")[1] }}
                  </p>
                  <p></p>
                  <p class="travel-arrival-date">
                    {{ trip.Rtn.DepartDateTime.split("T")[0] }}
                  </p>
                </div>
                <div class="travel-range">
                  <p class="range-time">
                    {{
                      calculateHourDifference(
                        trip.Rtn.DepartDateTime,
                        trip.Rtn.ArriveDateTime
                      )
                    }}
                  </p>
                  <div class="range">
                    <div class="range-pos range-start"></div>
                    <div class="range-pos range-end"></div>
                    <div class="ranger"></div>
                  </div>
                  <p class="range-stops">
                    <span>Non-stop</span>
                  </p>
                </div>
                <div class="travel-departure-info">
                  <p class="travel-time">
                    {{ trip.Rtn.ArriveDateTime.split("T")[1] }}
                  </p>
                  <p></p>
                  <p class="travel-arrival-date">
                    {{ trip.Rtn.ArriveDateTime.split("T")[0] }}
                  </p>
                </div>
              </div>
            </div>
            <div class="travel-rate-final">
              <div v-if="showSummary" class="travel-rate"><sup>€ </sup>{{ totalCost() }}</div>
              <button v-if="!showSummary" class="select-rate" @click="getSailings(trip)">
                Select
              </button>
            </div>
          </div>
        </div>

        <div v-if="showSummary" style="text-align: -webkit-center">
          <div class="card-container">
            <h3 class="heading">Summary</h3>
            <div class="card" id="price-card">
              <table class="price-table">
                <thead>
                  <tr>
                    <th class="font-bold">Option</th>
                    <th class="text-center font-bold">Quantity</th>
                    <th class="text-right font-bold">Unit price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="service in getServiceNames()" :key="service.serviceName">
                    <td>{{ service["serviceName"] }}</td>
                    <td class="text-center font-bold">
                      {{ service["Quantity"] }}
                    </td>
                    <td class="text-right font-bold">
                      {{ service["unitCost"] }} &nbsp;€
                    </td>
                  </tr>
                  <!-- More rows go here -->
                </tbody>
              </table>
            </div>
            <div class="grid-container">
              <div class="grid-item font-bold">Total</div>
              <div class="spacer"></div>
              <div class="grid-item font-size-large font-bold">
                <span class="price">{{ totalCost() }}</span>
              </div>
            </div>
            <div class="spacer"></div>
            <p class="caption">
              *The price may change depending on the accomodations.
            </p>
          </div>
          <div style="display: inline-flex; gap: 4rem">
            <button class="next-button" @click="resetTripList()">Select another trip</button>
            <button class="next-button" @click="$router.push({ name: 'login' })">Continue ?</button>
          </div>
        </div>
      </div>
      <div class="grid-four fade-in-left" v-else>
        <div v-if="Object.keys(services).length">
          <div class="services-container fade-in-left">
            <h2>Accommodation Services</h2>
            <div class="service-category">
              <div class="service-cards">
                <div v-for="(service, index) in services[0].Sailing[0].ServicesOptions
                  .OnBoardAccommodationServices.OnBoardAccommodationService" :key="index" class="service-card">
                  <div style="flex: 1; padding: 3rem;align-self: center;">
                    <h3>{{ service["@Description"] }}</h3>
                    <p>
                      Available Quantity: {{ service["@QuantityAvailable"] }}
                    </p>
                  </div>
                  <div style="flex: 1; align-self: center;text-align: -webkit-center;">
                    <img style="width: 20%;height: 8rem;" :src="getServicePicture(service['@Code'])">                  
                  </div>
                  <div style="
                      flex: 1;
                      display: flex;
                      flex-direction: column;
                      justify-content: space-evenly;
                    ">
                    <div class="quantity-selector">
                      <label for="quantity">Quantity:</label>
                      <input type="number" v-model="selectedQuantities[service['@Code']]" min="0" :max="service['@Code'] === 'FAUT' ? getAdultCount() : null
                        " />
                    </div>
                    <div class="travel-rate">
                      Cost: <sup>€</sup>{{ parseFloat(service["@UnitCost"]).toFixed(2) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 style="margin: 6rem !important">Other Services</h2>
            <div class="service-category">
              <div class="service-cards">
                <div v-for="(service, index) in Array.isArray(services[0].Sailing[0].ServicesOptions.OnBoardServices
                  .OnBoardService) ? services[0].Sailing[0].ServicesOptions.OnBoardServices
                  .OnBoardService : [services[0].Sailing[0].ServicesOptions.OnBoardServices
                  .OnBoardService]" :key="index" class="service-card">
                  <div style="flex: 1; padding: 3rem;align-self: center;">
                    <h3>{{ service["@Description"] }}</h3>
                    <p>
                      Available Quantity: {{ service["@QuantityAvailable"] }}
                    </p>
                  </div>
                  <div style="flex: 1; align-self: center;text-align: -webkit-center;">
                    <img style="width: 20%;height: 8rem;" :src="getServicePicture(service['@Code'])">
                  </div>
                  <div style="
                      flex: 1;
                      display: flex;
                      flex-direction: column;
                      justify-content: space-evenly;
                    ">
                    <div class="quantity-selector">
                      <label for="quantity">Quantity:</label>
                      <input type="number" v-model="selectedQuantities[service['@Code']]" min="0" />
                    </div>
                    <div class="travel-rate">
                      Cost: <sup>€</sup>
                      {{ parseFloat(service["@UnitCost"]).toFixed(2) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="next-button" @click="test()">Next</button>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import jellyLoader from "@/components/jellyLoader.vue";

export default {
  data() {
    return {
      selectedTrip: {},
      showSummary: false,
      selectedQuantities: {},
      services: {},
      showTripList: true,
      displayLoader: false,
      showList: true,
      Sailings: {},
      tripOptions: {},
      trips: [],
      ferryCompanies: {
        CTN: '<img src="img/CTNlogo.png" class="company-image" alt="">',
      },
      listedTrips: [],
      codSVG: {
        PC: 'img/PC_DP.png',
        DP: 'img/PC_DP.png',
        FAUT: 'img/Faut.png',
        A4IF: 'img/4_sans_hublot.png',
        A4IM: 'img/4_sans_hublot.png',
        A4I: 'img/4_sans_hublot.png',
        A4E: 'img/4_avec_hublot.png',
        L4E: 'img/Suite_Bureau_2+2_lits.png',
        A4EF: 'img/4_avec_hublot.png',
        A4EM: 'img/4_avec_hublot.png',
      },
    };
  },
  components: {
    jellyLoader,
  },
  methods: {
    resetTripList() {
      this.services = [],
        this.selectedQuantities = []
      this.showSummary = !this.showSummary
      this.trips = JSON.parse(localStorage.getItem("trips"));
      if (this.trips.length == 2)
        this.listedTrips = this.transformTripsData(
          this.getTripsMatrix(this.trips[0], this.trips[1])
        );
      this.addFadeOutLeft()
      setTimeout(() => {
        this.addFadeInLeft();
      }, 700); // 700 milliseconds equals 0.7 seconds
    },
    totalCost() {
      let total = 0;
      if (this.trips.length == 1) {
        console.log("this.trips[0]", this.trips[0]);
        this.trips[0]["Accomodations"].forEach((accomod) => {
          total += accomod.unitCost * accomod.Quantity;
        });
      }
      else {
        this.selectedTrip["Accomodations"].forEach((accomod) => {
          total += accomod.unitCost * accomod.Quantity;
        });
      }
      return total;
    },
    getServiceNames() {
      let serviceNames = [];
      let rawServices = [[], []];
      Object.keys(this.selectedQuantities).map((code) => {
        this.services[0].Sailing.ServicesOptions.OnBoardAccommodationServices.OnBoardAccommodationService.map(
          (service, index) => {
            if (code === service["@Code"]) {
              serviceNames.push({
                serviceName: service["@Description"],
                Quantity: this.selectedQuantities[code],
                unitCost: service["@UnitCost"],
              });
              rawServices[0].push({
                Quantity: this.selectedQuantities[code],
                Code: code,
              });
            }
          }
        );
        this.services[0].Sailing.ServicesOptions.OnBoardServices.OnBoardService.map((service, index) => {
          if (code === service["@Code"]) {
            serviceNames.push({
              serviceName: service["@Description"],
              Quantity: this.selectedQuantities[code],
              unitCost: service["@UnitCost"],
            });
            rawServices[1].push({
              Quantity: this.selectedQuantities[code],
              Code: code,
            });
          }
        });
      });
      console.log(rawServices);
      localStorage.setItem("rawServices", JSON.stringify(rawServices));
      return serviceNames;
    },
    getAdultCount() {
      let count = 0;
      this.tripOptions.passengers.map((passenger) => {
        if (passenger.Category === "Adult") count++;
      });
      return count;
    },
    test() {
      this.showTripList = true;
      this.showSummary = true;
      this.trips.length == 1 ? this.trips[0]["Accomodations"] = this.getServiceNames() : this.selectedTrip["Accomodations"] = this.getServiceNames();
      this.trips.length == 1 ? localStorage.setItem("selectedTrip", JSON.stringify(this.trips[0])) : localStorage.setItem("selectedTrip", JSON.stringify(this.selectedTrip));
    },
    getServicePicture(code) {
      return this.codSVG[code];
    },
    addFadeOutLeft() {
      var elements = document.getElementsByClassName("fade-in-left");

      // Loop through the elements and add a new class
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.replace("fade-in-left", "fade-out-left");
      }
    },
    addFadeInLeft() {
      var elements = document.getElementsByClassName("fade-out-left");
      console.log("elements", elements)
      // Loop through the elements and add a new class
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.replace("fade-out-left", "fade-in-left");
      }
    },
    async getSailings(trip) {
      function getCurrentFormattedDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0");
        const day = String(currentDate.getDate()).padStart(2, "0");
        const hours = String(currentDate.getHours()).padStart(2, "0");
        const minutes = String(currentDate.getMinutes()).padStart(2, "0");
        const seconds = String(currentDate.getSeconds()).padStart(2, "0");

        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
      }
      console.log(trip);
      this.selectedTrip["trip"] = trip;
      console.log(this.selectedTrip.trip)
      this.displayLoader = true;
      this.addFadeOutLeft();
      let data = {};
      if (this.trips.length == 1) {
        const departDateTimeOut = trip.DepartDateTime;
        const departPlaceOut = trip.DepartPort;
        const destinationPlaceOut = trip.DestinationPort;

        data = {
          TransactionId: "488445e3-13aa-41e3-ace1-9a022a74e974",
          TimeStamp: `${getCurrentFormattedDate()}`,
          User: "",
          LanguagePrefCode: "en",
          Currency: "EUR",
          CountryCode: "TUN",
          OriginatingSystem: "",
          departDateTimeOut: `${departDateTimeOut}`,
          departPlaceOut: `${departPlaceOut}`,
          destinationPlaceOut: `${destinationPlaceOut}`,
        };
      } else {
        const departDateTimeOut = trip.Out.DepartDateTime;
        const departPlaceOut = trip.Out.DepartPort;
        const destinationPlaceOut = trip.Out.DestinationPort;

        const departDateTimeRtn = trip.Rtn.DepartDateTime;
        const departPlaceRtn = trip.Rtn.DepartPort;
        const destinationPlaceRtn = trip.Rtn.DestinationPort;

        data = {
          TransactionId: "488445e3-13aa-41e3-ace1-9a022a74e974",
          TimeStamp: `${getCurrentFormattedDate()}`,
          User: "",
          LanguagePrefCode: "en",
          Currency: "EUR",
          CountryCode: "TUN",
          OriginatingSystem: "",
          departDateTimeOut: `${departDateTimeOut}`,
          departPlaceOut: `${departPlaceOut}`,
          destinationPlaceOut: `${destinationPlaceOut}`,
          departDateTimeRtn: `${departDateTimeRtn}`,
          departPlaceRtn: `${departPlaceRtn}`,
          destinationPlaceRtn: `${destinationPlaceRtn}`,
        };
      }

      data.passengers = this.tripOptions.passengers;

      if (this.tripOptions.passengers.length)
        data.vehicles = this.tripOptions.vehicles;

      let configg = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://cms.4help.tn/api/getSailings_API/getSailings",
        headers: {
          "Content-Type": "application/json",
        },
        maxRedirects: 0,
        data: JSON.stringify(data),
      };

      try {
        console.log(configg);
        const response = await this.$axios.request(configg);

        console.log(response.data);
        this.Sailings =
          response.data.GetSailingsResponse.FerryComponents.FerryComponent;
          
      this.Sailings.Sailings.Sailing.map((e) => {
        console.log(
          e.Services.OnBoardAccommodationServices.OnBoardAccommodationService
        );
      });
      this.showTripList = false;

      this.getServices();
      this.trips.length == 2 ? this.listedTrips = [trip] : this.trips[0] = [trip];
      this.displayLoader = false;
      } catch (error) {
        console.log("error");
      }

    },

    // let data = JSON.stringify({
    //         "TransactionId": "488445e3-13aa-41e3-ace1-9a022a74e974",
    //         "User": "",
    //         "LanguagePrefCode": "en",
    //         "Currency": "EUR",
    //         "CountryCode": "TUN",
    //         "OriginatingSystem": "",
    //         "passengers": [
    //             {
    //                 "Age": "35",
    //                 "Category": "Adult"
    //             },
    //             {
    //                 "Age": "6",
    //                 "Category": "Child"
    //             }
    //         ],
    //         "vehicles": [
    //             {
    //                 "OperatorCode": "A1",
    //                 "Height": "190",
    //                 "Length": "900"
    //             }
    //         ],
    //         "sailings": [
    //             {
    //                 "id": "Out",
    //                 "DepartDateTime": "2023-10-20T08:00",
    //                 "DepartPort": "TNTUN",
    //                 "DestinationPort": "ITGOA",
    //                 "FareType": "FGW",
    //                 "AccommodationCode": "A4E",
    //                 "AccommodationQuantity": "1"
    //             }
    //         ]
    //     });

    //response.data.GetServicesResponse.FerryComponents.FerryComponent.Sailings.Sailing.ServicesOptions

    async getServices() {
      try {
        let data = {
        TransactionId: "488445e3-13aa-41e3-ace1-9a022a74e974",
        User: "",
        LanguagePrefCode: "en",
        Currency: "EUR",
        CountryCode: "TUN",
        OriginatingSystem: "",
        passengers: [
          {
            Age: "35",
            Category: "Adult",
          },
          {
            Age: "6",
            Category: "Child",
          },
        ],
        vehicles: [
          {
            OperatorCode: "A1",
            Height: "190",
            Length: "900",
          },
        ],
        sailings: [

        ],
      };
      console.log()
      if (this.selectedTrip.trip.Out && this.selectedTrip.trip.Rtn) {
        Object.keys(this.selectedTrip.trip).forEach((way) => {
          let trip = this.selectedTrip.trip[way]
          trip.DepartDateTime = trip.DepartDateTime.replace(/:00$/, '')
          trip.ArriveDateTime = trip.ArriveDateTime.replace(/:00$/, '')
          data.sailings.push({
            id: way,
            ...trip,
            AccommodationCode: "A4E",
            AccommodationQuantity: "1",
            FareType: "FGW",
          })
        })
      } else {
        let trip = this.selectedTrip.trip
        console.log(trip)
        trip.DepartDateTime = trip.DepartDateTime.replace(/:00$/, '')
        trip.ArriveDateTime = trip.ArriveDateTime.replace(/:00$/, '')
        data.sailings.push({
          id: "Out",
          ...trip,
          AccommodationCode: "A4E",
          AccommodationQuantity: "1",
          FareType: "FGW",

        })
      }

      data.passengers = this.tripOptions.passengers;
      if (this.tripOptions.passengers.length)
        data.vehicles = this.tripOptions.vehicles;

      console.log(data)
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://cms.4help.tn/api/getServices_API/getServicesAPI",
        headers: {
          "Content-Type": "application/json",
        },
        maxRedirects: 0,
        data: data,
      };
      const response = await this.$axios.request(config);
      console.log(
        ">>>>>>SERVICES<<<<<<<",
        response.data.GetServicesResponse.FerryComponents.FerryComponent
          .Sailings
      );
      console.log(
        ">>>>>>SERVICES<<<<<<<",
        response.data.GetServicesResponse.FerryComponents.FerryComponent
          .Sailings.Sailing.ServicesOptions
      );
      this.services = Array.isArray(response.data.GetServicesResponse.FerryComponents.FerryComponent.Sailings) ? response.data.GetServicesResponse.FerryComponents.FerryComponent.Sailings : [response.data.GetServicesResponse.FerryComponents.FerryComponent.Sailings]

      } catch (e) {
        console.log(e)
      }
    },
    calculateHourDifference(fromDate, toDate) {
      const startDate = new Date(fromDate);
      const endDate = new Date(toDate);

      const timeDifference = endDate - startDate;
      const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutesDifference = Math.floor((timeDifference / (1000 * 60)) % 60);

      return `${hoursDifference ? `${hoursDifference}h` : ``} ${minutesDifference ? `${minutesDifference}m` : ``
        }`;
    },
    transformTripsData(inputData) {
      const outputData = [];

      inputData.map((data) => {
        for (let i = 0; i < Object.keys(data).length; i++) {
          outputData.push(data[Object.keys(data)[i]]);
        }
      });
      return outputData;
    },
    getTripsMatrix(fromDates, toDates) {
      // function addOneDay(inputDate){
      //     const date = new Date(inputDate);
      //     date.setDate(date.getDate() + 1); // Add one day
      //     const year = date.getFullYear();
      //     const month = String(date.getMonth() + 1).padStart(2, '0');
      //     const day = String(date.getDate()).padStart(2, '0');
      //     const hours = String(date.getHours()).padStart(2, '0');
      //     const minutes = String(date.getMinutes()).padStart(2, '0');
      //     const seconds = String(date.getSeconds()).padStart(2, '0');
      //     return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
      // }
      const allDates = fromDates
        .map((fromDate) => {
          return toDates.map((toDate) => {
            let date1 = new Date(fromDate.ArriveDateTime);
            let date2 = new Date(toDate.DepartDateTime);
            if (date2 > date1) return { Out: fromDate, Rtn: toDate };
          });
        })
        .map((e) => {
          return Object.keys(e).reduce((result, key) => {
            if (e[key] !== undefined) {
              result[key] = e[key];
            }
            return result;
          }, {});
        });
      return allDates;
    },
    getTripTitle() {
      return `${this.trips[0][0].DepartPortName} -- ${this.trips[0][0].DestinationPortName}`;
    },
    getFerryCompany(company) {
      return this.ferryCompanies[company];
    },
    clickHoverInit() {
      let rate_cards = document.querySelectorAll(".rate-cards");
      rate_cards.forEach((rate_card) => {
        rate_card.addEventListener("click", () => {
          rate_cards.forEach((rate_card) =>
            rate_card.classList.remove("active")
          );
          rate_card.classList.add("active");
        });
      });
    },
  },
  async mounted() {
    this.clickHoverInit();
  },
  beforeMount() {
    this.tripOptions = JSON.parse(localStorage.getItem("tripOptions"));
    console.log(localStorage.getItem("tripOptions"));
    this.trips = JSON.parse(localStorage.getItem("trips"));
    console.log("this.trips", this.trips);
    if (this.trips.length == 2)
      this.listedTrips = this.transformTripsData(
        this.getTripsMatrix(this.trips[0], this.trips[1])
      );
  }
};
</script>

<style scoped>
.total-cost {
  width: 100%;
  text-align: center;
  margin-top: 20px !important;
  color: #555;
  font-size: 1.2em;
}

.next-button {
  margin-top: 3rem !important;
  background-color: #3498db;
  color: white;
  border: none;
  padding: 15px 30px !important;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.3s;
  align-self: center;
}

.next-button:hover {
  background-color: #2980b9;
}

.company-image {
  max-width: 60%;
  max-height: 60%;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    margin-left: -100%;
  }

  to {
    opacity: 1;
    margin-left: 0;
  }
}

@keyframes fadeOutLeft {
  from {
    opacity: 1;
    margin-left: 0;
  }

  to {
    opacity: 0;
    margin-left: -100%;
  }
}

.fade-out-left {
  animation: fadeOutLeft 0.7s ease forwards;
}

.fade-in-left {
  animation: fadeInLeft 0.7s ease forwards;
}
</style>

<style lang="scss" scoped>
$background: rgb(53, 90, 138);
$grey: #f5f5f8;
$white: #fff;
$purple: #3a5a99; // A slightly darker shade of blue
$light-purple: #7da0d6; // A lighter shade of blue
$big-text-color: #ffffff; // White text for contrast
$small-text-color: #aebfd6; // Lighter text color for contrast
$orange: #f08700; // A contrasting complementary color
$faded-gray: #c9cbda;

/*--------------------------------------*/
*,
*::after,
*::before {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

body {
  background: $background;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

/*--------------------------------------*/

.overlayLoader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.562);
  /* Semi-transparent background */
  z-index: 99999999999999999999;
  /* Ensure it appears above other content */
}

.trip-details-container {
  display: flex;
  height: 100%;
  /* Ensure the container takes the full height of its parent */
  width: 100%;
}

.trip-details {
  flex: 1;
  width: 100%;
  display: flex;
  padding: 1rem;
  // justify-content: space-between;
  align-items: center;
  justify-content: space-evenly;
}

.trip-container {
  width: 100vw;
  padding: 12.5rem;
  background: $grey;
  min-height: 100%;
  height: 100%;
}

.trip-Vertical-line {
  width: 0.2rem;
  height: 10.7vh;
  background: #3a5a99;
}

.grid {
  display: grid;
  grid-template-rows: 11rem;
  grid-gap: 1rem;
}

.grid>div {
  background: #fff;
  border-radius: 15px;
}

.grid>.grid-one {
  grid-column: span 4;
  background: $purple;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.grid .grid-four {
  grid-column: span 4;
  grid-row: span 4;
  background: $grey;
  overflow-y: auto;
  scrollbar-width: none;
  border-radius: 0;
  min-height: 50vh;

  &::-webkit-scrollbar {
    width: 0px;
    /* Remove scrollbar space */
    background: transparent;
    /* Optional: just make scrollbar invisible */
  }
}

.current-travel {
  color: #fff;
  line-height: 20px;
}

.current-travel-class {
  font-size: 0.625em;
}

.calendars {
  display: flex;
  align-items: center;
}

.calendar {
  background: $grey;
  color: $purple;
  width: 190px;
  margin-left: 20px;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  font-size: 0.625em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border: none;

  svg {
    fill: $purple;
    margin-right: 10px;
  }

  &.blank {
    color: $faded-gray;
  }
}

.rate-cards {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $purple;
  cursor: pointer;
  transition: all 300ms ease;

  &.active {
    background: $purple;
    color: $white;
  }
}

.rate {
  font-size: 2em;
  font-weight: bold;
  padding: 5px;
  white-space: nowrap;

  sup {
    font-size: 1rem;
  }
}

.travel-card {
  height: 15vh;
  width: 100%;
  background: $white;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding: 1.0417% 2.6042%;
  border-radius: 1.5625em;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.travel-card:hover {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  animation-name: example;
  animation-duration: 0.25s;
  border-left: 8px solid $purple;
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
}

@keyframes example {
  0% {
    border-left: 2px solid #ffffff;
  }

  25% {
    border-left: 3px solid #858ea0;
  }

  50% {
    border-left: 4px solid #5e729a;
  }

  100% {
    border-left: 5px solid #3a5a99;
  }
}

.travel-card+.travel-card {
  margin: 1.5rem 0px;
}

.travel-card:last-child {
  margin-bottom: 2rem;
}

.travel-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
}

.travel-arrival-info,
.travel-departure-info {
  color: $purple;
  margin-right: 30px;

  .travel-time {
    text-wrap: nowrap;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 4px;
  }

  .travel-arrival,
  .travel-departure {
    font-size: 1.5rem;
    margin-bottom: 2px;
  }

  .travel-arrival-date,
  .travel-departure-date {
    font-size: 1.3rem;
    text-wrap: nowrap;
  }
}

.travel-range {
  width: calc(100% - 1.5625% - 12.6042% - 7.2917% - 6.25%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 1.5625%;

  .range-stops,
  .range-time {
    color: $purple;
    margin: 0.1042% 0;
    font-size: 0.825em;
  }

  .range-stops {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;

    .range-stop {
      position: relative;
    }

    .range-stop::before {
      content: "";
      height: 0.3646vh;
      width: 0.3646vh;
      background: $purple;
      border-radius: 50%;
      position: absolute;
      top: -0.6771vh;
    }
  }
}

.range {
  align-self: stretch;
  display: flex;
  align-items: center;
  position: relative;

  .range-pos {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    position: relative;
    z-index: 1;

    &.range-start {
      background: $white;
      margin-right: auto;
      border: 5px solid $purple;
    }

    &.range-end {
      background: $purple;
      border: 5px solid $light-purple;
    }
  }

  .ranger {
    position: absolute;
    width: 100%;
    border-top: 2px dotted $purple;
  }
}

.travel-rate-final {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  .travel-rate {
    color: $purple;
    font-size: 3rem;
    font-weight: bold;
    text-wrap: nowrap;

    sup {
      font-size: 1.1rem;
    }
  }

  .select-rate {
    border: 0;
    padding: 1.1vh 2.604vw;
    border-radius: 7px;
    background: $orange;
    color: $white;
    font-weight: bold;
    cursor: pointer;
    outline: none;
  }
}
</style>

<style scoped>
.services-container {
  display: flex;
  padding: 30px;
  align-items: flex-start;
  flex-direction: column;
}

.service-category {
  width: 100%;
}

.service-cards {
  display: flex;
  gap: 20px;
  margin-top: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: stretch;
}

.service-card {
  background-color: #f9f9f9;
  border-radius: 1.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) !important;
  transition: 0.3s;
  display: flex;
  flex-direction: row;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2) !important;
}

.quantity-selector {
  margin-bottom: 2rem;
}

.quantity-selector label {
  font-weight: bold;
}

input[type="number"] {
  width: 50px;
  padding: 5px;
  margin-left: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 4rem;
}

h2 {
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
}

h3 {
  font-size: 1.2em;
  color: #555;
  margin-bottom: 5px;
}

.service-card p {
  color: #777 !important;
  margin: 5px 0;
}
</style>
<style scoped name="duet-css">
.card-container {
  padding: 3rem;
  width: 70%;
}

.card {
  border: 1px solid #ccc;
  border-radius: 1rem;
  margin-bottom: 2rem;
  border-bottom: none;
}

.heading {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.price-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
}

.price-table th,
.price-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.font-bold {
  font-weight: bold;
}

.font-size-x-large {
  font-size: 1.2em;
}

.grid-container {
  display: flex;
  align-items: center;
}

.grid-item {
  flex: 1;
}

.spacer {
  flex: 0 0 4rem;
}

.caption {
  font-style: italic;
}
</style>
