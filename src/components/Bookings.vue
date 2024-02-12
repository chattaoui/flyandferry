<template>
  <div class="booking-container">
    <aside class="more-right-side slide-in-from-left">
      <h4><i class="fas fa-ticket-alt"></i> Pick your ticket:</h4>

      <div v-for="(booking, index) in Object.keys(selectedBooking).length ? { selectedBooking } : Bookings"
        :key="`booking_${index}`" class="more-card ticket-card">
        <div v-if="isObject(booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing)"
          style="display: flex;flex-direction: row;width: 100%;justify-content: space-between;align-items: center;">
          <div class="airline">
            <img src="https://cdn.alibaba.ir/static/img/airlines/Domestic/B9.png" />
            <div class="airline__name">AirTour</div>
          </div>
          <div>
            <div class="ticket-card__info-line">
              <div class="ticket-card__info-line__title">
                <i class="fas fa-plane-departure"></i>
                Take Off
              </div>
              <div class="ticket-card__info-line__value">{{
                `${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing[0].SailingInfo["@DepartPortName"]}
                              -
                              ${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing[0].SailingInfo["@DepartDateTime"].replaceAll('-',
                  '/').replaceAll('T', ' ')}` }}</div>
            </div>
            <div
              :class="booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing.length > 1 ? 'dots2ways' : 'dots'">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="ticket-card__info-line">
              <div class="ticket-card__info-line__title">
                <i class="fas fa-plane-arrival"></i>
                Landing
              </div>
              <div class="ticket-card__info-line__value">{{
                `${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing[0].SailingInfo["@DestinationPortName"]}
                              -
                              ${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing[0].SailingInfo["@ArriveDateTime"].replaceAll('-',
                  '/').replaceAll('T', ' ')}` }}</div>
            </div>
          </div>

          <div class="trip-Vertical-line"></div>

          <div>
            <div class="ticket-card__info-line">
              <div class="ticket-card__info-line__title">
                <i class="fas fa-plane-departure"></i>
                Take Off
              </div>
              <div class="ticket-card__info-line__value">{{
                `${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing[1].SailingInfo["@DepartPortName"]}
                              -
                              ${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing[1].SailingInfo["@DepartDateTime"].replaceAll('-',
                  '/').replaceAll('T', ' ')}` }}</div>
            </div>
            <div class="dots2ways">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="ticket-card__info-line">
              <div class="ticket-card__info-line__title">
                <i class="fas fa-plane-arrival"></i>
                Landing
              </div>
              <div class="ticket-card__info-line__value">{{
                `${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing[1].SailingInfo["@DestinationPortName"]}
                              -
                              ${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing[1].SailingInfo["@ArriveDateTime"].replaceAll('-',
                  '/').replaceAll('T', ' ')}` }}</div>
            </div>
          </div>
          <button v-if="type === 'current'" @click="initiateEdit(booking)">
            <svg style="margin-right: .4rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18"
              height="18" fill="currentColor">
              <path
                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
            Edit
          </button>
        </div>


        <div v-else style="display: inline-flex;align-items: center;width: 100%;justify-content: space-between;">
          <div class="airline">
            <img src="https://cdn.alibaba.ir/static/img/airlines/Domestic/B9.png" />
            <div class="airline__name">AirTour</div>
          </div>
          <div style="display: inline-flex;">
            <div class="ticket-card__info-line">
              <div class="ticket-card__info-line__title">
                <i class="fas fa-plane-departure"></i>
                Take Off
              </div>
              <div class="ticket-card__info-line__value">{{
                `${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing.SailingInfo["@DepartPortName"]}
                              -
                              ${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing.SailingInfo["@DepartDateTime"].replaceAll('-',
                  '/').replaceAll('T', ' ')}` }}</div>
            </div>
            <div class="dots">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="ticket-card__info-line">
              <div class="ticket-card__info-line__title">
                <i class="fas fa-plane-arrival"></i>
                Landing
              </div>
              <div class="ticket-card__info-line__value">{{
                `${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing.SailingInfo["@DestinationPortName"]}
                              -
                              ${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing.SailingInfo["@ArriveDateTime"].replaceAll('-',
                  '/').replaceAll('T', ' ')}` }}</div>
            </div>
          </div>
          <button v-if="type === 'current'" @click="initiateEdit(booking)">
            <svg style="margin-right: .4rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18"
              height="18" fill="currentColor">
              <path
                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
            Edit
          </button>
        </div>

      </div>

      <br />
    </aside>
    <aside class="change-booking-form-container" v-if="Object.keys(selectedBooking).length">
      <div class="change-booking-form">
        <h2>Modify Reservation</h2>
        <form @submit="preventDefault">
          <!-- Reservation dates -->
          <label for="departureDate">Departure Date</label>
          <input type="date" id="departureDate" :min="new Date().toISOString().split('T')[0]" name="departureDate" v-model="bookingModifications.dates.from">

          <div v-if="bookingModifications.dates.to">
            <label for="returnDate">Return Date</label>
            <input type="date" id="returnDate" name="returnDate" :min="bookingModifications.dates.from" v-model="bookingModifications.dates.to">
          </div>

          <label for="route">Departure ~ Destination</label>
          <input disabled style="text-align: center;" name="route" :value="selectedBooking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing.length > 1
            ? `${bookingModifications.route.from} - ${bookingModifications.route.to} ~ ${bookingModifications.route.to} - ${bookingModifications.route.from}`
            : `${bookingModifications.route.from} ~ ${bookingModifications.route.to}`">

          <!-- Number of passengers with indication for type -->
          <label for="numAdults">Adults</label>
          <input type="number" id="numAdults" name="numAdults" min="1" v-model="bookingModifications.passengers.Adults">

          <label for="numChildren">Children</label>
          <input type="number" id="numChildren" name="numChildren" min="0"
            v-model="bookingModifications.passengers.Childs">

          <!-- Accommodation room type -->
          <label for="roomType">Accommodation - Room Type</label>
          <select id="roomType" name="roomType">
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
            <!-- Add other room types as needed -->
          </select>

          <!-- Onboard services -->
          <fieldset>
            <legend>Onboard Services</legend>

          </fieldset>

          <!-- Vehicle details -->
          <div id="vehicleDetails">
            <!-- Button to add vehicle details -->
            <label class="custom-checkbox" style="display: inline-flex;align-items: center;gap: 3rem;width: 100%; margin-top: 2rem;">
          <input type="checkbox" name="foodService" v-model="showVehicleForm">
          Include car
        </label>

            <!-- Hidden fields for vehicle information to be displayed when Add Car is clicked -->
            <fieldset v-if="showVehicleForm" id="vehicleInfo">
              <label for="vehicleOwnership">Vehicle Ownership</label>
              <select id="vehicleOwnership" name="vehicleOwnership">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <label for="vehiclePlateNumber">Vehicle Plate Number</label>
              <input type="text" id="vehiclePlateNumber" name="vehiclePlateNumber" placeholder="Plate number">
            </fieldset>
          </div>
          <!-- Submit button -->
          <div style="display:inline-flex;gap:0.9rem;">
            <button>Submit Changes</button>
            <button id="cancel-submit" @click="selectedBooking = {}">Cancel</button>
          </div>
        </form>
      </div>
    </aside>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({

  name: '',

  props: {
    Bookings: Object,
    type: String,
  },

  data() {

    return {
      selectedBooking: {},
      bookingModifications: {},
      showVehicleForm: false
    }

  },

  methods: {
    isObject(value) {
      return !(typeof value === 'object' && value !== null && !Array.isArray(value));
    },
    preventDefault(event) {
      event.preventDefault()
    },
    initiateEdit(booking) {
      this.selectedBooking = booking;

      console.log(booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing)
      const sailings = booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing;
      const sailingArray = Array.isArray(sailings) ? sailings : [sailings];
      console.log(booking)
      this.bookingModifications.route = {
        from: sailingArray[0].SailingInfo["@DepartPortName"],
        to: sailingArray[0].SailingInfo["@DestinationPortName"]
      }

      this.bookingModifications.dates = {
        from: sailingArray[0].SailingInfo["@DepartDateTime"].split('T')[0],
        ...(Array.isArray(sailings) && {
          to: sailingArray[1].SailingInfo["@DepartDateTime"].split('T')[0]
        })
      };

      this.bookingModifications.passengers = {
        Adults: 0,
        Childs: 0
      };

      const passengers = booking.RecallBookingResponse.Passengers.Passenger;
      const passengerArray = Array.isArray(passengers) ? passengers : [passengers];

      passengerArray.forEach((passenger) => {
        if (passenger['@Category'] === "Adult") {
          this.bookingModifications.passengers.Adults++;
        } else if (passenger['@Category'] === "Child") {
          this.bookingModifications.passengers.Childs++;
        }
      });

      console.log(this.selectedBooking);
    }
  },
  watch: {
    selectedBooking(value) {
      console.log(value)
    },
    showVehicleForm(value) {
      console.log(value)
    },
  },
  mounted() {
  }

});

</script>

<style>
form {
  width: 100%;
  padding-top: 30px;
  box-sizing: border-box;
}

input,
select {
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #e9ecef;
  border-radius: 16px;
  height: 3.5rem;
  box-sizing: border-box;
  outline: none;
  -moz-appearance: none;
  /* Firefox */
  -webkit-appearance: none;
  /* Safari and Chrome */
  appearance: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 17px;
  color: #2d0079;
  margin-top: 15px;
  position: relative;
  transition: ease border-color 0.2s;
}

select {
  cursor: pointer;
}

input:focus,
select:focus {
  border-color: #fabe23;
}

input:focus~i,
select:focus~i {
  color: #fabe23;
}

input~i,
select~i {
  position: absolute;
  right: 25px;
  top: 37px;
  font-size: 20px;
  color: #adb5bd;
}

.form-cntr {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
}

::placeholder {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 17px;
  color: #adb5bd;
  opacity: 1;
}

:-ms-input-placeholder {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 17px;
  color: #adb5bd;
}

::-ms-input-placeholder {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 17px;
  color: #adb5bd;
}

.form-cntr__sub {
  flex: 1;
  margin-left: 10px;
  position: relative;
}

.form-cntr__sub:first-child {
  margin-left: 0px;
}

form button {
  border-radius: 16px;
  height: 3.5rem;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 17px;
  margin-top: 15px;
  color: #19093b;
  outline: none;
  border: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: ease all 0.2s;
}

form button:hover {
  background: #19093b;
  color: #fabe23;
}

form button:active {
  transform: scale(0.95);
}


.more-right-side {
  width: 70%;
}

.more-card {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: -2px 39px 67px 0 rgba(25, 9, 59, 0.08);
  border-radius: 0.4rem;
  border: 1px solid #e9ecef;
  padding: 1.5rem;
  box-sizing: border-box;
  margin-bottom: 30px;
}

.checkbox {
  width: 100%;
}

.checkbox label {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
  cursor: pointer;
}

.more-right-side h4 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 1.5em;
  color: #1b0445;
  letter-spacing: 0;
  margin-left: 34px;
  margin-bottom: 0;
}

.more-right-side h4 i {
  margin-right: 6px;
}

.ticket-card {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  transform: scale(1);
  transition: ease transform 0.2s;
}

.airline {
  width: 6rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  border-right: 1px solid #e9ecef;
  padding-right: 1rem;
}

.airline img {
  width: 4rem;
}

.airline__name {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 17px;
  color: #2d0079;
  margin-top: 10px;
}

.ticket-card__info-line {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
}

.ticket-card__info-line__title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 0.7em;
  color: #6c757d;
}

.ticket-card__info-line__title i {
  margin-right: 0.7em;
}

.ticket-card__info-line__value {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  color: #1b0445;
  margin-top: 0.4rem;
}

.ticket-card button {
  cursor: pointer;
  border: 1px solid #e9ecef;
  border-radius: 22px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 0.75em;
  color: #19093b;
  background: transparent;
  transition: ease all 0.15s;
  box-shadow: -2px 9px 37px 0 rgba(25, 9, 59, 0);
  outline: none;
  transform: scale(1);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
}

.ticket-card button i {
  font-size: 20px;
  margin-right: 13px;
  color: #19093b;
}

.ticket-card button:hover {
  background: #19093b;
  transform: scale(1.1);
  box-shadow: -2px 39px 67px 0 rgba(25, 9, 59, 0.08);
  color: #fabe23;
}

.ticket-card button:hover i {
  color: #fabe23;
}

.ticket-card button:active {
  transform: scale(0.95);
}

.dots {
  margin: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
}

.dots div {
  width: 0.7rem;
  height: 0.3rem;
  border-radius: 5px;
  background: #084C61;
  margin-left: 0.3rem;
}

.dots2ways {
  margin: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.dots2ways div {
  width: 0.3rem;
  height: 0.7rem;
  border-radius: 5px;
  background: #084C61;
  margin-top: 0.4rem;
}

.booking-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: -webkit-fill-available;
  margin-top: 4rem;
}

.ticket-card:hover {
  transform: scale(1.05);
  box-shadow: -2px 39px 75px 0 rgba(25, 9, 59, 0.1);
}

.filter-title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 1.4em;
  padding-left: 0px;
  color: #1b0445;
}

input[type="checkbox"],
input[type="radio"] {
  display: block;
  width: 3rem;
  height: 3rem;
  border-radius: 16px;
  margin-top: 0px
}

@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}

.slide-in-from-right {
  animation: slideInFromRight .5s ease-out forwards;
}

@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1
  }
}

.slide-in-from-left {
  animation: slideInFromLeft .8s ease-out forwards;
}

.trip-Vertical-line {
  width: 0.2rem;
  height: 19.7vh;
  background: #3a5a99;
}

.change-booking-form {
  padding: 2rem;
}

.change-booking-form-container {
  width: 23%;
}

.change-booking-form h2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 1.2em;
  color: #1b0445;
  letter-spacing: 0;
  margin-bottom: 0;
}

.change-booking-form form {
  padding: 2rem !important;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: -2px 39px 67px 0 rgba(25, 9, 59, 0.08);
  border-radius: 0.4rem;
  border: 1px solid #e9ecef;
}

.change-booking-form label {
  margin-top: .7rem;
  color: #084c61;
}

.change-booking-form input[type="number"],
.change-booking-form input[type="text"],
.change-booking-form input[type="date"],
.change-booking-form select {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.change-booking-form fieldset {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  margin-top: 1rem;
}

.change-booking-form legend {
  padding: 0 0.5rem;
  border-bottom: none
}

.change-booking-form button {
  border: none;
  outline: none;
  background-color: rgb(255, 193, 69);
  border-radius: 10px;
  color: #fff;
  font-size: 1em;
  transform: 0.3s ease;
  align-self: center;
  text-wrap: nowrap;
}

.change-booking-form button:hover {
  background-color: rgba(255, 193, 69, 0.78);
  color: #fff;
}

#cancel-submit {
  background-color: rgb(255, 100, 100);
}

#cancel-submit:hover {
  background-color: rgba(255, 100, 100, 0.78);
  color: #fff;
}

#addVehicleButton {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#addVehicleButton .icon {
  margin-right: 0.5rem;
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox-indicator {
  background-color: #2196F3;
  border-color: #2196F3;
}

/* Style to add a checkmark when checked */
.custom-checkbox input[type="checkbox"]:checked + .checkbox-indicator:after {
  content: "";
  position: absolute;
  left: 7px;
  top: 3px;
  width: 6px;
  height: 11px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
</style>
