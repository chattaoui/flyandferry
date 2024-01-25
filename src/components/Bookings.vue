<template>
  <div class="booking-container">
    <aside class="more-right-side slide-in-from-left">
      <h4><i class="fas fa-ticket-alt"></i> Pick your ticket:</h4>

      <div v-for="(booking, index) in Bookings" :key="`booking_${index}`" class="more-card ticket-card">
        <div v-if="isObject(booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing)" style="display: flex;flex-direction: row;width: 100%;justify-content: space-between;align-items: center;">
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
          <button v-if="type === 'current'" @click="selectedBooking = booking">
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
          <button v-if="type === 'current'" @click="selectedBooking = booking">
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
    <aside class="more-left-side slide-in-from-right" v-if="Object.keys(selectedBooking).length">
      <div style="height: 7rem"></div>

      <div class="more-card">
        <div class="filter-title">Airlines Filter</div>

        <div class="checkbox hasMargin mini">
          <input id="AirTour" type="checkbox" />
          <label for="AirTour">
            <div class="checkbox__check">
              <i class="fas fa-check"></i>
            </div>
            <div class="checkbox__title">
              <img src="https://cdn.alibaba.ir/static/img/airlines/Domestic/B9.png" />
              AirTour
            </div>
          </label>
        </div>
        <div class="checkbox hasMargin mini">
          <input id="Ata" type="checkbox" />
          <label for="Ata">
            <div class="checkbox__check">
              <i class="fas fa-check"></i>
            </div>
            <div class="checkbox__title">
              <img src="https://cdn.alibaba.ir/static/img/airlines/Domestic/I3.png" />
              Ata
            </div>
          </label>
        </div>
      </div>

      <div class="more-card">
        <div class="filter-title">Ticket Class</div>
        <div class="checkbox hasMargin mini">
          <input id="All" name="ticketclass" type="radio" value="All" checked />
          <label for="All">
            <div class="checkbox__check"></div>
            <div class="checkbox__title">All</div>
          </label>
        </div>
        <div class="checkbox hasMargin mini">
          <input id="Economy" name="ticketclass" type="radio" value="Economy" />
          <label for="Economy">
            <div class="checkbox__check"></div>
            <div class="checkbox__title">Economy</div>
          </label>
        </div>
        <div class="checkbox hasMargin mini">
          <input id="Business" name="ticketclass" type="radio" value="Business" />
          <label for="Business">
            <div class="checkbox__check"></div>
            <div class="checkbox__title">Business</div>
          </label>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios"

export default defineComponent({

  name: '',

  props: {
    Bookings: Object,
    type: String,
  },

  data() {

    return {
      selectedBooking: {},

    }

  },

  methods: {
    isObject(value) {
      return !(typeof value === 'object' && value !== null && !Array.isArray(value));
    },
  },
  watch: {
    selectedBooking(value) {
      console.log(value.RecallBookingResponse)
    }
  },

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
  height: 65px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  outline: none;
  -moz-appearance: none;
  /* Firefox */
  -webkit-appearance: none;
  /* Safari and Chrome */
  appearance: none;
  font-family: inherit;
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
  font-family: inherit;
  font-weight: 100;
  font-size: 17px;
  color: #adb5bd;
  opacity: 1;
}

:-ms-input-placeholder {
  font-family: inherit;
  font-weight: 100;
  font-size: 17px;
  color: #adb5bd;
}

::-ms-input-placeholder {
  font-family: inherit;
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
  background: #fabe23;
  box-shadow: -2px 19px 67px 0 rgba(250, 190, 35, 0.4);
  border-radius: 16px;
  height: 65px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  font-family: inherit;
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

/* more page */
.more-left-side {
  width: 19%;
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

.checkbox__check {
  border: 1px solid #e9ecef;
  width: 40px;
  height: 40px;
  border-radius: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease all 0.2s;
}

.checkbox.mini .checkbox__check {
  width: 25px;
  height: 25px;
  border-radius: 7px;
}

.checkbox.mini input[type="radio"]~label .checkbox__check {
  border-radius: 30px;
}

.checkbox__check i {
  display: none;
}

input[type="checkbox"]:checked~label .checkbox__check {
  background: #19093b;
}

input[type="checkbox"]:checked~label .checkbox__check i {
  display: block;
  color: #fabe23;
}

input[type="radio"]:checked~label .checkbox__check {
  background: #fabe23;
  box-shadow: inset 0 0 0px 7px #19093b;
}

input[type="radio"]:checked~label .checkbox__check i {
  display: block;
  color: #fabe23;
}

.checkbox__title {
  font-family: inherit;
  margin-left: 15px;
  font-size: 16px;
  color: #1b0445;
}

.checkbox.hasMargin {
  margin-top: 15px;
}

.checkbox__title img {
  width: 20px;
  height: 20px;
  object-fit: contain;
  margin-bottom: -4px;
  margin-right: 4px;
}

.sorting-line {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
}

.sorting-line__item {
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: -2px 39px 67px 0 rgba(25, 9, 59, 0.08);
  border-radius: 14px;
  padding: 20px;
  font-family: inherit;
  font-size: 18px;
  color: #1b0445;
  text-align: center;
  margin-right: 10px;
  cursor: pointer;
  transform: scale(1);
  transition: ease all 0.2s;
}

.sorting-line__item:last-child {
  margin-right: 0;
}

.sorting-line__item.active {
  background: #1b0445;
  color: #fabe23;
}

.sorting-line__item:hover {
  transform: scale(1.1);
  box-shadow: -2px 39px 67px 0 rgba(25, 9, 59, 0.08);
}

.sorting-line__item:active {
  transform: scale(0.95);
}

.sorting-line__item i {
  margin-right: 5px;
}

.more-right-side h4 {
  font-family: inherit;
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
  font-family: inherit;
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
  font-family: inherit;
  font-size: 0.7em;
  color: #6c757d;
}

.ticket-card__info-line__title i {
  margin-right: 0.7em;
}

.ticket-card__info-line__value {
  font-family: inherit;
  font-size: 1.5em;
  color: #1b0445;
  margin-top: 0.4rem;
}

.ticket-card button {
  cursor: pointer;
  border: 1px solid #e9ecef;
  border-radius: 22px;
  font-family: inherit;
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
  font-family: inherit;
  font-weight: 100;
  font-size: 1.4em;
  padding-left: 0px;
  color: #1b0445;
}

input[type="checkbox"],
input[type="radio"] {
  display: none;
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
</style>
