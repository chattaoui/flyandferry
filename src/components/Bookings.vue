<template>
  <div class="booking-container">
    <aside class="more-right-side slide-in-from-left">
      <h4><i class="fas fa-ticket-alt"></i> Pick your ticket:</h4>

      <div v-for="(booking, index) in Object.keys(selectedBooking).length ? { selectedBooking } : propsBookings"
        :key="`booking_${index}`" class="more-card ticket-card">
        <div v-if="booking && isObject(booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing)"
          style="display: flex;flex-direction: row;width: 100%;justify-content: space-between;align-items: center;">
          <div class="airline">
            <img src="https://cdn.alibaba.ir/static/img/airlines/Domestic/B9.png" />
            <div class="airline__name">AirTour</div>
          </div>
          <div>
            <div class="ticket-card__info-line">
              <div class="ticket-card__info-line__title">
                <i class="fas fa-plane-departure"></i>
                Departure
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
                Arrival
              </div>
              <div class="ticket-card__info-line__value">{{
                `${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing[0].SailingInfo["@DestinationPortName"]}
                              -
                              ${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing[0].SailingInfo["@ArriveDateTime"].replaceAll('-',
                  '/').replaceAll('T', ' ')}` }}</div>
            </div>
          </div>

          <div style="display: flex;flex-direction: column;align-items: center;gap: 1rem;">
            <div class="trip-Vertical-line"></div>
            <label style="color:#3a5a99;display: inline-flex;gap:1rem;place-items: center;">Booking reference:
              <b>{{ booking.RecallBookingResponse.FerryComponents.FerryComponent.BookingReference["@Reference"] }}</b>
            </label>
          </div>

          <div>
            <div class="ticket-card__info-line">
              <div class="ticket-card__info-line__title">
                <i class="fas fa-plane-departure"></i>
                Departure
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
                Arrival
              </div>
              <div class="ticket-card__info-line__value">{{
                `${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing[1].SailingInfo["@DestinationPortName"]}
                              -
                              ${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing[1].SailingInfo["@ArriveDateTime"].replaceAll('-',
                  '/').replaceAll('T', ' ')}` }}</div>
            </div>
          </div>
          <div style="display:grid;gap:1rem">
            <button v-if="type === 'current' && !(bookingRequests.map(obj => obj.bookingref).includes(booking.RecallBookingResponse.FerryComponents.FerryComponent.BookingReference['@Reference']))" @click="selectedBooking = booking; initiateEdit(booking); getServices()">
            <svg style="margin-right: .4rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18"
              height="18" fill="currentColor">
              <path
                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
            Edit
          </button>
          <button v-if="type === 'current' && (bookingRequests.map(obj => obj.bookingref).includes(booking.RecallBookingResponse.FerryComponents.FerryComponent.BookingReference['@Reference']))" @click="selectedBooking = booking; initiateEdit(booking); getServices()">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#f0ad4e" version="1.1" id="Capa_1" width="48px" height="24px" viewBox="0 0 442.04 442.04" xml:space="preserve">
            <g>
              <g>
                <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203    c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219    c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367    c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021    c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212    c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071    c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"/>
              </g>
              <g>
                <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188    c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993    c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5    s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"/>
              </g>
              <g>
                <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"/>
              </g>
            </g>
            </svg>
          </button>
          <button v-if="type === 'current'" @click="handleCancleClick(booking)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="currentColor"
              height="24px" style="margin-right: .4rem;" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
            Cancel
          </button>
          </div>
          
        </div>


        <div v-else style="display: inline-flex;align-items: center;width: 100%;justify-content: space-between;padding:.8rem">
          <div class="airline">
            <img src="https://cdn.alibaba.ir/static/img/airlines/Domestic/B9.png" />
            <div class="airline__name">AirTour</div>
          </div>
          <div style="display: inline-flex;justify-content: space-evenly;width: 100%;">
            <div class="ticket-card__info-line">
              <div class="ticket-card__info-line__title">
                <i class="fas fa-plane-departure"></i>
                Departure
              </div>
              <div class="ticket-card__info-line__value">{{
                `${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing.SailingInfo["@DepartPortName"]}
                              -
                              ${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing.SailingInfo["@DepartDateTime"].replaceAll('-',
                  '/').replaceAll('T', ' ')}` }}</div>
            </div>
            <div style="display: flex;flex-direction: column;align-items: center;">
              <div class="dots">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <label style="color:#3a5a99;display: inline-flex;gap:1rem;place-items: center;">Booking reference:
              <b>{{ booking.RecallBookingResponse.FerryComponents.FerryComponent.BookingReference["@Reference"] }}</b>
            </label>
          </div>
            <div class="ticket-card__info-line">
              <div class="ticket-card__info-line__title">
                <i class="fas fa-plane-arrival"></i>
                Arrival
              </div>
              <div class="ticket-card__info-line__value">{{
                `${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing.SailingInfo["@DestinationPortName"]}
                              -
                              ${booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing.SailingInfo["@ArriveDateTime"].replaceAll('-',
                  '/').replaceAll('T', ' ')}` }}</div>
            </div>
          </div>
          <div style="display:grid;gap:1rem">
            <button v-if="type === 'current' && !(bookingRequests.map(obj => obj.bookingref).includes(booking.RecallBookingResponse.FerryComponents.FerryComponent.BookingReference['@Reference']))" @click="selectedBooking = booking; initiateEdit(booking); getServices()">
            <svg style="margin-right: .4rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18"
              height="18" fill="currentColor">
              <path
                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
            Edit
          </button>
          <button v-if="type === 'current' && (bookingRequests.map(obj => obj.bookingref).includes(booking.RecallBookingResponse.FerryComponents.FerryComponent.BookingReference['@Reference']))" @click="selectedBooking = booking; initiateEdit(booking); getServices()">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#f0ad4e" version="1.1" id="Capa_1" width="48px" height="24px" viewBox="0 0 442.04 442.04" xml:space="preserve">
              <g>
                <g>
                  <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203    c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219    c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367    c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021    c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212    c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071    c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"/>
                </g>
                <g>
                  <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188    c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993    c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5    s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"/>
                </g>
                <g>
                  <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"/>
                </g>
              </g>
            </svg>
          </button>
          <button v-if="type === 'current'" @click="handleCancleClick(booking)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="currentColor"
              height="24px" style="margin-right: .4rem;" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
            Cancel
          </button>
          </div>
        </div>

      </div>

      <br />
    </aside>
    <aside class="change-booking-form-container" v-if="displayModifPannel">
      <div class="change-booking-form" id="change-booking-form">
        <div id="formHeader" style="display: inline-flex;justify-content: space-evenly;width: 100%;">
          <h2>Modify Reservation</h2>
        </div>
        <fieldset :disabled="disableFormFields">
          <form id="BookingForm" @submit="preventDefault" @input="handleFormInput" :disabled="disableFormFields">
            <!-- Reservation dates -->
            <label for="departureDate">Booking Date{{ isRange ? 's' : '' }}</label>
            <!-- <input type="date" id="departureDate" :min="new Date().toISOString().split('T')[0]" name="departureDate"
            v-model="bookingModifications.dates.from"> -->
            <Datepicker style="margin-top:0px" v-model="modifDate" @range-start="handleRangeStart"
              @closed="datePickerClosed" :range="isRange" :allowed-dates="fetchedDates" :disabled="disableFormFields"
              :highlight="{ dates: fetchedDates, customClass: 'highlighted-dates' }" :enable-time-picker="false"
              :auto-apply="true" />

            <label for="route">Departure ~ Destination</label>
            <input disabled style="text-align: center;" name="route" :value="selectedBooking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing.length > 1
              ? `${bookingModifications.route.from.name} - ${bookingModifications.route.to.name} ~ ${bookingModifications.route.to.name} - ${bookingModifications.route.from.name}`
              : `${bookingModifications.route.from.name} ~ ${bookingModifications.route.to.name}`">

            <!-- Number of passengers with indication for type -->
            <label for="numAdults">Adults</label>
            <input type="number" id="numAdults" name="numAdults" min="1" v-model="bookingModifications.passengers.Adults">

            <label for="numChildren">Children</label>
            <input type="number" id="numChildren" name="numChildren" min="0"
              v-model="bookingModifications.passengers.Childs">

            <!-- Onboard services -->
            <fieldset>
              <legend>Outgoing trip</legend>
              <div class="onboard-service" style="width: 100%;justify-content: space-evenly;">
                <label for="numChildren">Accomodation servics</label>
                <span style="cursor: pointer;background-color: #fff;border-radius: 6rem;" v-if="services[0] && (services[0].ServicesOptions.OnBoardAccommodationServices.OnBoardAccommodationService
                  .filter(
                    s => !bookingModifications.services.accommodationServices.Out.some(
                      rtnService => rtnService['@Description'] === s['@Description']
                    )
                  ).length >= bookingModifications.services.accommodationServices.Out.length)"
                  @click="bookingModifications.services.accommodationServices.Out[bookingModifications.services.accommodationServices.Out.length] = {}">
                  ➕
                </span>
              </div>
              <div v-for="(service, index) in bookingModifications.services.accommodationServices.Out"
                class="onboard-service">
                <span style="cursor: pointer;background-color: #fff;border-radius: 6rem;"
                  @click="bookingModifications.services.accommodationServices.Out.splice(index, 1)">
                  ➖
                </span>
                <label v-if="Object.keys(service).length" style="font-weight: 500;font-size: .8em;">
                  {{ service['@Description'] }}
                </label>
                <select v-else v-model="bookingModifications.services.accommodationServices.Out[index]">
                  <option v-for="service in services[0].ServicesOptions.OnBoardAccommodationServices.OnBoardAccommodationService
                    .filter(
                      s => !bookingModifications.services.accommodationServices.Out.some(
                        rtnService => rtnService['@Description'] === s['@Description']
                      )
                    )
                " :key="service" :value="service">{{ service['@Description'] }}</option>
                </select>
                <input style="width: 4rem;" type="number" name="numChildren" min="0" v-model="service['@Quantity']">
              </div>

              <div class="onboard-service" style="width: 100%;justify-content: space-evenly;">
                <label for="numChildren">Onboard services</label>
                <span style="cursor: pointer;background-color: #fff;border-radius: 6rem;" v-if="services[0] && (Array.isArray(services[0].ServicesOptions.OnBoardServices.OnBoardService)
                  ? services[0].ServicesOptions.OnBoardServices.OnBoardService.filter(
                    s => !bookingModifications.services.onboardServices.Out.some(
                      rtnService => rtnService['@Description'] === s['@Description']
                    )
                  ).length >= bookingModifications.services.onboardServices.Out.length
                  : [services[0].ServicesOptions.OnBoardServices.OnBoardService].filter(
                    s => !bookingModifications.services.onboardServices.Out.some(
                      rtnService => rtnService['@Description'] === s['@Description']
                    )
                  ).length >= bookingModifications.services.onboardServices.Out.length)"
                  @click="bookingModifications.services.onboardServices.Out[bookingModifications.services.onboardServices.Out.length] = {}">
                  ➕
                </span>
              </div>
              <div v-for="(service, index) in bookingModifications.services.onboardServices.Out" class="onboard-service">
                <span style="cursor: pointer;background-color: #fff;border-radius: 6rem;"
                  @click="bookingModifications.services.onboardServices.Out.splice(index, 1)">
                  ➖
                </span>
                <label v-if="Object.keys(service).length" style="font-weight: 500;font-size: .8em;">
                  {{ service['@Description'] }}
                </label>
                <select v-else v-model="bookingModifications.services.onboardServices.Out[index]">
                  <option v-for="service in Array.isArray(services[0].ServicesOptions.OnBoardServices.OnBoardService)
                    ? services[0].ServicesOptions.OnBoardServices.OnBoardService.filter(
                      s => !bookingModifications.services.onboardServices.Out.some(
                        rtnService => rtnService['@Description'] === s['@Description']
                      )
                    )
                    : [services[0].ServicesOptions.OnBoardServices.OnBoardService].filter(
                      s => !bookingModifications.services.onboardServices.Out.some(
                        rtnService => rtnService['@Description'] === s['@Description']
                      )
                    )" :value="service">{{ service['@Description'] }}</option>
                </select>
                <input style="width: 4rem;" type="number" name="numChildren" min="0" v-model="service['@Quantity']">
              </div>
            </fieldset>
            <fieldset
              v-if="selectedBooking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing.length > 1">
              <legend>Return trip</legend>
              <div class="onboard-service" style="width: 100%;justify-content: space-evenly;">
                <label for="numChildren">Accomodation services</label>
                <span style="cursor: pointer;background-color: #fff;border-radius: 6rem;" v-if="services[1] && services[1].ServicesOptions.OnBoardAccommodationServices.OnBoardAccommodationService
                  .filter(
                    s => !bookingModifications.services.accommodationServices.Rtn.some(
                      rtnService => rtnService['@Description'] === s['@Description']
                    )
                  ).length >= bookingModifications.services.accommodationServices.Rtn.length"
                  @click="bookingModifications.services.accommodationServices.Rtn[bookingModifications.services.accommodationServices.Rtn.length] = {}">
                  ➕
                </span>
              </div>
              <div v-for="(service, index) in bookingModifications.services.accommodationServices.Rtn"
                class="onboard-service">
                <span style="cursor: pointer;background-color: #fff;border-radius: 6rem;"
                  @click="bookingModifications.services.accommodationServices.Rtn.splice(index, 1)">
                  ➖
                </span>
                <label v-if="Object.keys(service).length" style="font-weight: 500;font-size: .8em;">
                  {{ service['@Description'] }}
                </label>
                <select v-else v-model="bookingModifications.services.accommodationServices.Rtn[index]">
                  <option v-for="service in services[1].ServicesOptions.OnBoardAccommodationServices.OnBoardAccommodationService
                    .filter(
                      s => !bookingModifications.services.accommodationServices.Rtn.some(
                        rtnService => rtnService['@Description'] === s['@Description']
                      )
                    )
                " :value="service">{{ service['@Description'] }}</option>
                </select>
                <input style="width: 4rem;" type="number" name="numChildren" min="0" v-model="service['@Quantity']">
              </div>

              <div class="onboard-service" style="width: 100%;justify-content: space-evenly;">
                <label for="numChildren">Onboard services</label>
                <span style="cursor: pointer;background-color: #fff;border-radius: 6rem;" v-if="services[1] && ((Array.isArray(services[1].ServicesOptions.OnBoardServices.OnBoardService)
                  ? services[1].ServicesOptions.OnBoardServices.OnBoardService.filter(
                    s => !bookingModifications.services.onboardServices.Rtn.some(
                      rtnService => rtnService['@Description'] === s['@Description']
                    )
                  ).length >= bookingModifications.services.onboardServices.Rtn.length
                  : [services[1].ServicesOptions.OnBoardServices.OnBoardService].filter(
                    s => !bookingModifications.services.onboardServices.Rtn.some(
                      rtnService => rtnService['@Description'] === s['@Description']
                    )
                  ).length >= bookingModifications.services.onboardServices.Rtn.length))"
                  @click="bookingModifications.services.onboardServices.Rtn[bookingModifications.services.onboardServices.Rtn.length] = {}">
                  ➕
                </span>
              </div>
              <div v-for="(service, index) in bookingModifications.services.onboardServices.Rtn" class="onboard-service">
                <span style="cursor: pointer;background-color: #fff;border-radius: 6rem;"
                  @click="bookingModifications.services.onboardServices.Rtn.splice(index, 1)">
                  ➖
                </span>
                <label v-if="Object.keys(service).length" style="font-weight: 500;font-size: .8em;">
                  {{ service['@Description'] }}
                </label>
                <select v-else v-model="bookingModifications.services.onboardServices.Rtn[index]">
                  <option v-for="service in Array.isArray(services[1].ServicesOptions.OnBoardServices.OnBoardService)
                    ? services[1].ServicesOptions.OnBoardServices.OnBoardService.filter(
                      s => !bookingModifications.services.onboardServices.Rtn.some(
                        rtnService => rtnService['@Description'] === s['@Description']
                      )
                    )
                    : [services[1].ServicesOptions.OnBoardServices.OnBoardService].filter(
                      s => !bookingModifications.services.onboardServices.Rtn.some(
                        rtnService => rtnService['@Description'] === s['@Description']
                      )
                    )" :value="service">
                    {{ service['@Description'] }}
                  </option>
                </select>
                <input style="width: 4rem;" type="number" name="numChildren" min="0" v-model="service['@Quantity']">
              </div>
            </fieldset>

            <!-- Vehicle details -->
            <div id="vehicleDetails">
              <!-- Button to add vehicle details -->
              <label class="custom-checkbox"
                style="display: inline-flex;align-items: center;gap: 3rem;width: 100%; margin-top: 2rem;">
                <input type="checkbox" name="foodService" v-model="showVehicleForm">
                Include car
              </label>

              <!-- Hidden fields for vehicle information to be displayed when Add Car is clicked -->
              <fieldset v-if="showVehicleForm" id="vehicleInfo">
                <label for="vehicleOwnership">Vehicle Ownership</label>
                <select id="vehicleOwnership" name="vehicleOwnership" v-model="bookingModifications.vehicle.Ownership">
                  <option value="Owner">Yes</option>
                  <option value="Rent">No</option>
                </select>

                <label for="vehicleBrand">Car Brand</label>
                <select id="vehicleBrand" name="vehicleBrand" v-model="bookingModifications.vehicle.Brand">
                  <option v-for="brand in Object.keys(vehicleModels)" :value="brand">{{ brand }}</option>
                </select>

                <div
                  v-if="bookingModifications.vehicle.Brand && Object.keys(bookingModifications.vehicle.Brand).length > 0">
                  <label for="vehicleOwnership">Car Model</label>
                  <select id="vehicleOwnership" name="vehicleOwnership" v-model="bookingModifications.vehicle.Model">
                    <option v-for="model in vehicleModels[bookingModifications.vehicle.Brand]" :value="model">{{
                      model.Model
                    }}</option>
                  </select>
                </div>

                <label for="vehiclePlateNumber">Vehicle Plate Number</label>
                <input type="text" id="vehiclePlateNumber" name="vehiclePlateNumber" placeholder="Plate number"
                  v-model="bookingModifications.vehicle.PlateNumber">
              </fieldset>
              <div style="display: grid;">
                <label v-if="bookingModifications.cost" style="font-weight: 800;margin-top: 2rem;text-wrap: nowrap;">Cost <u>{{ bookingModifications.cost.toFixed(2)
                }}</u> €</label>
                <label v-if="newCost && newCost !== bookingModifications.cost"
                  style="font-weight: 800;margin-top: 2rem;text-wrap: nowrap;">New cost <u
                    style="background-color: rgb(255 255 255);padding: 0.8rem;border-radius: 4rem;">{{ newCost.toFixed(2) }}</u>
                  €</label>
              </div>
            </div>
            <!-- Submit button -->
            <div id="formButtons" v-if="!disableFormFields" style="display:inline-flex;gap:0.9rem;">
              <button class="change-booking-form-button" @click="submitChange">Submit Changes</button>
              <button class="change-booking-form-button" id="cancel-submit" @click="hideModifPannel">Cancel</button>
            </div>
          </form>
        </fieldset>

      </div>
    </aside>
  </div>
</template>

<script>
import { defineComponent, nextTick } from "vue";
import carModels from "../../vehicle-models.json";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import swal from 'sweetalert'
import VueJwtDecode from "vue-jwt-decode";

export default defineComponent({

  name: '',

  props: {
    Bookings: Object,
    type: String,
    userMail: String,
  },

  components: {
    Datepicker
  },

  data() {

    return {
      selectedBooking: {},
      bookingModifications: {},
      showVehicleForm: false,
      vehicleModels: carModels,
      modifDate: '',
      displayModifPannel: false,
      fetchedDates: [],
      services: [],
      newCost: null,
      vehiclesData: {},
      initialForm: "",
      modifsForm: "",
      user: {},
      bookingRequests: [],
      disableFormFields: false,
      propsBookings: []
    }

  },

  methods: {
    async handleCancleClick(booking){
      
      this.selectedBooking = booking
      await this.initiateEdit(booking)

      const Cost = this.bookingModifications.cost

      console.log(Cost)
      const cancelCharge = await this.$axios.post("https://cms.4help.tn/api/getCancelCharge_API/getCancelCharge", {
        referenceBooking: booking.RecallBookingResponse.FerryComponents.FerryComponent.BookingReference['@Reference'],
        TransactionId: "488445e3-13aa-41e3-ace1-9a022a74e974",
        User: "",
        LanguagePrefCode: "en",
        Currency: "EUR",
        CountryCode: "TUN",
        OriginatingSystem: "",
        TimeStamp: "2023-09-19T11:10:00"
      }).then(res => {return res.data.GetCancelChargeResponse.Cost ? parseFloat(res.data.GetCancelChargeResponse.Cost[0].CostDetails[0]['$'].GrossAmount) : 0})
      console.log(cancelCharge)
      swal({
  title: 'Are you sure you want to cancel your reservation?',
  text: `you'll get ${Cost - cancelCharge} back from ${Cost}`,
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, do it!'
}).then(async (result) => {
  if (result) {
    // Place your code here that you want to execute after confirm
    await this.$axios.post("https://cms.4help.tn/api/cancel_API/cancel", {
      referenceBooking: booking.RecallBookingResponse.FerryComponents.FerryComponent.BookingReference['@Reference'],
        TransactionId: "488445e3-13aa-41e3-ace1-9a022a74e974",
        User: "",
        LanguagePrefCode: "en",
        Currency: "EUR",
        CountryCode: "TUN",
        OriginatingSystem: "",
        TimeStamp: "2023-09-19T11:10:00"
    }).then(async res => {
      if(res.data) {
        swal({
            title: "Success",
            text: `Booking reference: ${booking.RecallBookingResponse.FerryComponents.FerryComponent.BookingReference['@Reference']} canceled successfully.`,
            icon: "success",
          })
          let tmpToken = await this.$axios.post("https://cms.4help.tn/api/Authentication_API/removereference",{
            user: this.$props.userMail,
            reference: booking.RecallBookingResponse.FerryComponents.FerryComponent.BookingReference['@Reference']
          }).then(res => {return res.data.token})
          console.log(tmpToken)
          localStorage.setItem("token", tmpToken)
          this.propsBookings.splice(this.propsBookings.indexOf(booking),1)
          this.displayModifPannel = false
          this.selectedBooking = {}
      }
      else {
        swal({
            title: "Error",
            text: `Something went wrong please try again later.`,
            icon: "error",
          })
      }
    })
  }
});
    },
    replaceBookingForm(htmlContent, id) {
    // Get the form element by its ID
    const bookingForm = document.getElementById(id);

    // If the form exists, replace its content
    if (bookingForm) {

      // Create a container for the new content
      const container = document.createElement('div');
      container.innerHTML = htmlContent;

      // Replace the form with the new content
      bookingForm.parentNode.replaceChild(container, bookingForm);
    }
  },
    extractStylesFromForm(formId) {
      const formElement = document.querySelector(formId);
      if (!formElement) {
        console.log('Form not found');
        return '';
      }

      // Retrieve styles as per your provided function
      const styleElements = document.getElementsByTagName('STYLE');
      let styleText = '';
      for (let i = 0; i < styleElements.length; i++) {
        styleText += styleElements[i].textContent;
      }

      // Collect all classes, IDs, and potential pseudo-classes used in the form
      const allElements = formElement.querySelectorAll('*');
      const selectors = Array.from(allElements).reduce((acc, el) => {
        if (el.id) acc.push('#' + el.id);
        el.classList.forEach(cls => acc.push('.' + cls));
        // Consider :disabled pseudo-class for styles
        if (el.disabled) acc.push(':disabled');
        return acc;
      }, []);

      // Filter the styles to only include selectors that are used inside the form
      const usedStyles = styleText.split('}').filter(rule => {
        const selectorPart = rule.split('{')[0];
        return selectors.some(sel => selectorPart.includes(sel));
      }).join('}') + '}'; // Add closing brace for the last rule

      // Create a new style element with the filtered styles
      const styleElement = document.createElement('style');
      styleElement.type = 'text/css';
      styleElement.textContent = usedStyles;

      // Set input values explicitly to preserve them
      const inputs = formElement.querySelectorAll('input');
      inputs.forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
          if (input.checked) {
            input.setAttribute('checked', 'checked');
          } else {
            input.removeAttribute('checked');
          }
        } else {
          input.setAttribute('value', input.value);
        }
      });

      // Prepend the style element to the form's HTML
      const formHTMLWithStyles = styleElement.outerHTML + formElement.outerHTML;

      return formHTMLWithStyles;
    },
    submitChange() {
      try {
      this.modifsForm = this.extractStylesFromForm('#change-booking-form').replace('<fieldset>', '<fieldset disabled="disabled">')
      console.log(this.initialForm)
      console.log(this.modifsForm)
      this.$axios.post("https://cms.4help.tn/api/Authentication_API/requestbookingmodif", {
        user: this.$props.userMail,
        oldBooking: this.initialForm,
        bookingRequest: this.modifsForm,
        bookingRef: this.selectedBooking.RecallBookingResponse.FerryComponents.FerryComponent.BookingReference["@Reference"]
      }).then(res => {
        if(res.status == 200) {
          swal({
            title: "Success",
            text: `Modification for ${this.selectedBooking.RecallBookingResponse.FerryComponents.FerryComponent.BookingReference["@Reference"]} has been registered, please wait for the approval.`,
            icon: "success",
          })
          this.bookingRequests.push({
            bookingref: this.selectedBooking.RecallBookingResponse.FerryComponents.FerryComponent.BookingReference["@Reference"],
            newbooking: this.modifsForm
          })
          this.disableFormFields = true
          this.replaceBookingForm(`<div id="formHeader" style="display: inline-flex;justify-content: space-evenly;width: 100%;">
          <h2>Modify Reservation</h2>
          <span id="closeForm" style="cursor: pointer;">❌</span>
        </div>`,'formHeader')
        const span = document.querySelector('#closeForm')
        if (span) {
                span.addEventListener('click', this.hideModifPannel);
              }
        } else {
          swal({
            title: "Error",
            text: "Something went wrong, please try this later.",
            icon: "error",
          })
        }
      
      })
      } catch (e){
        console.log(e)
      }
      console.log({
        user: this.$props.userMail,
        oldBooking: this.initialForm,
        bookingRequest: this.modifsForm,
        bookingRef: this.selectedBooking.RecallBookingResponse.FerryComponents.FerryComponent.BookingReference["@Reference"]
      })
    },
    async getPrice() {
      console.log("priceee")
      let getPriceData = {
        TransactionId: "488445e3-13aa-41e3-ace1-9a022a74e974",
        User: "",
        LanguagePrefCode: "en",
        Currency: "EUR",
        CountryCode: "TUN",
        OriginatingSystem: "",
        passengers: [],
        vehicles: [],
        sailings: [],
        onBoardAccomodationServices: [],
        onBoardServices: []
      };
      for (let i = 0; i < this.bookingModifications.passengers.Adults; i++) {
        getPriceData.passengers.push({
          Age: "35",
          Category: "Adult",
        })
      }

      for (let i = 0; i < this.bookingModifications.passengers.Childs; i++) {
        getPriceData.passengers.push({
          Age: "6",
          Category: "Child",
        })
      }

      const sailings = Array.isArray(this.selectedBooking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing) ? this.selectedBooking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing : [this.selectedBooking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing]
      if (sailings.length > 1) {
        getPriceData.sailings.push({
          id: "Out",
          DepartDateTime: sailings[0].SailingInfo["@DepartDateTime"].replace(/:00$/, ''),
          DepartPort: sailings[0].SailingInfo["@DepartPort"],
          DestinationPort: sailings[0].SailingInfo["@DestinationPort"],
          FareType: sailings[0].FareDetails["@FareType"],
        })
        getPriceData.sailings.push({
          id: "Rtn",
          DepartDateTime: sailings[1].SailingInfo["@DepartDateTime"].replace(/:00$/, ''),
          DepartPort: sailings[1].SailingInfo["@DepartPort"],
          DestinationPort: sailings[1].SailingInfo["@DestinationPort"],
          FareType: sailings[1].FareDetails["@FareType"],
        })
      } else {
        getPriceData.sailings.push({
          id: "Out",
          DepartDateTime: sailings[0].SailingInfo["@DepartDateTime"].replace(/:00$/, ''),
          DepartPort: sailings[0].SailingInfo["@DepartPort"],
          DestinationPort: sailings[0].SailingInfo["@DestinationPort"],
          FareType: sailings[0].FareDetails["@FareType"],
        })
      }
      console.log("dataaaa", getPriceData)

      if (Object.keys(this.bookingModifications.vehicle).length > 0) {
        getPriceData.vehicles = [{
          OperatorCode: this.bookingModifications.vehicle.Model.Code,
          Height: this.bookingModifications.vehicle.Model.Height.toString().replaceAll('.', ''),
          Length: this.bookingModifications.vehicle.Model.Length.toString().replaceAll('.', ''),
          Brand: this.bookingModifications.vehicle.Brand,
          Model: this.bookingModifications.vehicle.Model.Model
        }]
      }

      Object.keys(this.bookingModifications.services.accommodationServices).forEach((way) => {
        this.bookingModifications.services.accommodationServices[way].forEach((service) => {
          getPriceData.onBoardAccomodationServices.push({
            id: way,
            Code: service['@Code'],
            Quantity: service['@Quantity']
          })
        })
      })

      Object.keys(this.bookingModifications.services.onboardServices).forEach((way) => {
        this.bookingModifications.services.onboardServices[way].forEach((service) => {
          getPriceData.onBoardServices.push({
            id: way,
            Code: service['@Code'],
            Quantity: service['@Quantity']
          })
        })
      })

      console.log(getPriceData)
      console.log('bookingModifs \n', this.bookingModifications)
      let price = 0
      try {

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://cms.4help.tn/api/getPrice_API/callgetPriceAPIFn',
          headers: {
            'Content-Type': 'application/json'
          },
          maxRedirects: 0,
          data: getPriceData
        };

        const response = await this.$axios.request(config);
        if (response.data.GetPriceResponse) {

          const priceArray = Array.isArray(response.data.GetPriceResponse.FerryComponents.FerryComponent.Cost.CostDetails) ? response.data.GetPriceResponse.FerryComponents.FerryComponent.Cost.CostDetails : [response.data.GetPriceResponse.FerryComponents.FerryComponent.Cost.CostDetails]
          priceArray.forEach(sail => {
            price += parseFloat(sail["@GrossAmount"])
          })

          return price
        }

      } catch (e) {
        console.log(e)
        return 0
      }
    },
    async getServices() {
      let getServicesData = {
        TransactionId: "488445e3-13aa-41e3-ace1-9a022a74e974",
        User: "",
        LanguagePrefCode: "en",
        Currency: "EUR",
        CountryCode: "TUN",
        OriginatingSystem: "",
        passengers: [],
        vehicles: [],
        sailings: [],
      };

      for (let i = 0; i < this.bookingModifications.passengers.Adults; i++) {
        getServicesData.passengers.push({
          Age: "35",
          Category: "Adult",
        })
      }

      for (let i = 0; i < this.bookingModifications.passengers.Childs; i++) {
        getServicesData.passengers.push({
          Age: "6",
          Category: "Child",
        })
      }

      const sailings = Array.isArray(this.selectedBooking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing) ? this.selectedBooking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing : [this.selectedBooking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing]
      if (sailings.length > 1) {
        getServicesData.sailings.push({
          id: "Out",
          DepartDateTime: sailings[0].SailingInfo["@DepartDateTime"].replace(/:00$/, ''),
          DepartPort: sailings[0].SailingInfo["@DepartPort"],
          DestinationPort: sailings[0].SailingInfo["@DestinationPort"],
          FareType: sailings[0].FareDetails["@FareType"],
          AccommodationCode: sailings[0].Services.OnBoardAccommodationServices.OnBoardAccommodationService["@Code"],
          AccommodationQuantity: sailings[0].Services.OnBoardAccommodationServices.OnBoardAccommodationService["@Quantity"],
        })
        getServicesData.sailings.push({
          id: "Rtn",
          DepartDateTime: sailings[1].SailingInfo["@DepartDateTime"].replace(/:00$/, ''),
          DepartPort: sailings[1].SailingInfo["@DepartPort"],
          DestinationPort: sailings[1].SailingInfo["@DestinationPort"],
          FareType: sailings[1].FareDetails["@FareType"],
          AccommodationCode: sailings[1].Services.OnBoardAccommodationServices.OnBoardAccommodationService["@Code"],
          AccommodationQuantity: sailings[1].Services.OnBoardAccommodationServices.OnBoardAccommodationService["@Quantity"],
        })
      } else {
        getServicesData.sailings.push({
          id: "Out",
          DepartDateTime: sailings[0].SailingInfo["@DepartDateTime"].replace(/:00$/, ''),
          DepartPort: sailings[0].SailingInfo["@DepartPort"],
          DestinationPort: sailings[0].SailingInfo["@DestinationPort"],
          FareType: sailings[0].FareDetails["@FareType"],
          AccommodationCode: sailings[0].Services.OnBoardAccommodationServices.OnBoardAccommodationService["@Code"],
          AccommodationQuantity: sailings[0].Services.OnBoardAccommodationServices.OnBoardAccommodationService["@Quantity"],
        })
      }
      console.log("dataaaa", getServicesData)

      if (Object.keys(this.bookingModifications.vehicle).length > 0) {
        getServicesData.vehicles.push({
          OperatorCode: this.bookingModifications.vehicle.Model.Code,
          Height: this.bookingModifications.vehicle.Model.Height.toString().replaceAll('.', ''),
          Length: this.bookingModifications.vehicle.Model.Length.toString().replaceAll('.', ''),
          Brand: this.bookingModifications.vehicle.Brand,
          Model: this.bookingModifications.vehicle.Model.Model
        })
      }

      console.log(getServicesData)
      try {
        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "https://cms.4help.tn/api/getServices_API/getServicesAPI",
          headers: {
            "Content-Type": "application/json",
          },
          maxRedirects: 0,
          data: JSON.stringify(getServicesData),
        };
        const response = await this.$axios.request(config);
        console.log(
          ">>>>>>SERVICES<<<<<<<",
          response
        );
        this.services = Array.isArray(response.data.GetServicesResponse.FerryComponents.FerryComponent.Sailings.Sailing) ? response.data.GetServicesResponse.FerryComponents.FerryComponent.Sailings.Sailing : [response.data.GetServicesResponse.FerryComponents.FerryComponent.Sailings.Sailing]
          ;
        this.disableFormFields = true
        this.initialForm = this.extractStylesFromForm('#change-booking-form').replace('<fieldset>', '<fieldset disabled="disabled">')
        this.disableFormFields = false
        console.log(this.initialForm)
        console.log(this.services)
      } catch (e) {
        console.log(e)
      }
    },
    async handleFormInput() {
      this.newCost = await this.getPrice()
    },
    datePickerClosed(value) {
      JSON.stringify(this.modifDate) === JSON.stringify([this.bookingModifications.dates.from, this.bookingModifications.dates.to]) ? this.fetchDates() : this.modifDate
    },
    async handleRangeStart(DATE) {
      console.log(DATE);
      const { lastDayOfNextMonth } = this.getCurrentAndLastDayOfNextMonth();
      let dates = await this.useTimeTableAPI(this.formatDate(DATE.getFullYear(), DATE.getMonth(), DATE.getDate()), lastDayOfNextMonth, this.bookingModifications.route.to.code, this.bookingModifications.route.from.code);
      console.log(dates);
      this.fetchedDates = dates
        .map(date => new Date(date.DepartDateTime))
        .filter(dt => dt > DATE);
      this.fetchedDates.unshift(DATE);
      console.log(this.fetchedDates);
    },
    async useTimeTableAPI(fromDate, toDate, fromPort, toPort) {
      try {
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
        });
        console.log(data);
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
          console.log(res.data);
          if (res.data !== "Pas de data à afficher avec les données entrées") {
            return res.data;
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
    hideModifPannel() {
      this.displayModifPannel = false
      this.selectedBooking = {}
    },
    isObject(value) {
      return !(typeof value === 'object' && value !== null && !Array.isArray(value));
    },
    preventDefault(event) {
      event.preventDefault()
    },
    async initiateEdit(booking) {
        
      console.log(booking.RecallBookingResponse.FerryComponents.FerryComponent.Cost)
      const sailings = booking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing;
      const sailingArray = Array.isArray(sailings) ? sailings : [sailings];

      const costs = booking.RecallBookingResponse.FerryComponents.FerryComponent.Cost.CostDetails;
      const costsArray = Array.isArray(costs) ? costs : [costs];

      console.log(sailings)
      console.log(sailingArray[0].Services.OnBoardAccommodationServices.OnBoardAccommodationService)
      this.bookingModifications.route = {
        from: {
          name: sailingArray[0].SailingInfo["@DepartPortName"],
          code: sailingArray[0].SailingInfo["@DepartPort"]
        },
        to: {
          name: sailingArray[0].SailingInfo["@DestinationPortName"],
          code: sailingArray[0].SailingInfo["@DestinationPort"]
        }
      }

      this.bookingModifications.dates = {
        from: sailingArray[0].SailingInfo["@DepartDateTime"].split('T')[0],
        ...(Array.isArray(sailings) && {
          to: sailingArray[1].SailingInfo["@DepartDateTime"].split('T')[0]
        })
      };

      console.log(this.bookingModifications.dates)
      this.bookingModifications.services = {
        onboardServices: {
          Out: [],
          ...(sailingArray.length > 1) && { Rtn: [] }
        },
        accommodationServices: {
          Out: [],
          ...(sailingArray.length > 1) && { Rtn: [] }
        }
      }

      const AccomodationOUT = sailingArray[0].Services.OnBoardAccommodationServices.OnBoardAccommodationService
      const AccomodationOUTArray = Array.isArray(AccomodationOUT) ? AccomodationOUT : [AccomodationOUT];

      const OnboardServiceOUT = sailingArray[0].Services.OnBoardServices.OnBoardService
      const OnboardServiceOUTArray = Array.isArray(OnboardServiceOUT) ? OnboardServiceOUT : [OnboardServiceOUT];


      AccomodationOUTArray.forEach(service => {
        this.bookingModifications.services.accommodationServices.Out.push(service)
      })

      OnboardServiceOUTArray.forEach(service => {
        this.bookingModifications.services.onboardServices.Out.push(service)
      })

      if (sailingArray.length > 1) {

        const AccomodationRTN = sailingArray[1].Services.OnBoardAccommodationServices.OnBoardAccommodationService
        const AccomodationRTNArray = Array.isArray(AccomodationRTN) ? AccomodationRTN : [AccomodationRTN];

        const OnboardServiceRTN = sailingArray[1].Services.OnBoardServices.OnBoardService
        const OnboardServiceRTNArray = Array.isArray(OnboardServiceRTN) ? OnboardServiceRTN : [OnboardServiceRTN];


        AccomodationRTNArray.forEach(service => {
          this.bookingModifications.services.accommodationServices.Rtn.push(service)
        })

        OnboardServiceRTNArray.forEach(service => {
          this.bookingModifications.services.onboardServices.Rtn.push(service)
        })
      }


      if (booking.RecallBookingResponse.Vehicles) {
        this.showVehicleForm = true
        this.bookingModifications.vehicle = {
          Ownership: booking.RecallBookingResponse.Vehicles.Vehicle.Lead["@OperatorCode"].includes("Owner") ? "Owner" : "Rent",
          PlateNumber: booking.RecallBookingResponse.Vehicles.Vehicle.Lead["@Registration"],
          Brand: booking.RecallBookingResponse.Vehicles.Vehicle.Lead["@OperatorCode"].split(';')[1]
        }
        this.bookingModifications.vehicle.Model = this.vehicleModels[this.bookingModifications.vehicle.Brand].filter(model => model.Model === booking.RecallBookingResponse.Vehicles.Vehicle.Lead["@OperatorCode"].split(';')[2])[0]
      } else this.bookingModifications.vehicle = [{}]

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

      this.displayModifPannel = true
      this.bookingModifications.cost = await this.getPrice()
      const bookingREF = booking.RecallBookingResponse.FerryComponents.FerryComponent.BookingReference["@Reference"]
      console.log(bookingREF)
      if (this.bookingRequests.map(obj => obj.bookingref).includes(bookingREF)){
        this.replaceBookingForm(this.bookingRequests.find(booking => booking.bookingref === bookingREF).newbooking,'change-booking-form')
        this.replaceBookingForm('','formButtons')
        this.replaceBookingForm(`<div id="formHeader" style="display: inline-flex;justify-content: space-evenly;width: 100%;">
          <h2>Modify Reservation</h2>
          <span id="closeForm" style="cursor: pointer;">❌</span>
        </div>`,'formHeader')
        const span = document.querySelector('#closeForm')
        if (span) {
                span.addEventListener('click', this.hideModifPannel);
              }
      }
    },
    getCurrentAndLastDayOfNextMonth() {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth(); 
      const currentDay = currentDate.getDate();
      const formattedCurrentDate = this.formatDate(currentYear, currentMonth + 1, currentDay);

      const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;
      const lastDayOfNextMonth = new Date(nextMonthYear, nextMonth + 1, 0);
      const lastDay = lastDayOfNextMonth.getDate();
      const formattedLastDayOfNextMonth = this.formatDate(nextMonthYear, nextMonth + 1, lastDay);

      return {
        currentDate: formattedCurrentDate,
        lastDayOfNextMonth: formattedLastDayOfNextMonth,
      };
    },
    formatDate(year, month, day) {
      const formattedYear = year.toString().padStart(4, "0");
      const formattedMonth = month.toString().padStart(2, "0");
      const formattedDay = day.toString().padStart(2, "0");
      return `${formattedYear}-${formattedMonth}-${formattedDay}`;
    },
    async fetchDates(fromCode, toCode) {
      console.log("called fetchDates")
      const { currentDate, lastDayOfNextMonth } = this.getCurrentAndLastDayOfNextMonth();
      let dates = await this.useTimeTableAPI(currentDate, lastDayOfNextMonth, fromCode ? fromCode : this.bookingModifications.route.from.code, toCode ? toCode : this.bookingModifications.route.to.code);
      this.fetchedDates = dates
        .filter(date => !!date)
        .map(date => {
          const dt = date.DepartDateTime.split("T")[0];
          return new Date(dt);
        });
    },
  },
  watch: {
    async modifDate(value) {
      Array.isArray(this.selectedBooking.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing && value) ? (value[0] instanceof Date ? this.newCost = await this.getPrice() : null) : (value instanceof Date ? this.newCost = await this.getPrice() : null)
    },
    selectedBooking(value) {
      if (Object.keys(value).length == 0) return
      const isArray = Array.isArray(value.RecallBookingResponse.FerryComponents.FerryComponent.Sailings.Sailing)
      isArray ? this.modifDate = [this.bookingModifications.dates.from, this.bookingModifications.dates.to] : this.modifDate = this.bookingModifications.dates.from

      // else this.disableFormFields = false

      //console.log(this.bookingRequests.map(obj => obj.bookingref).includes(value.RecallBookingResponse.FerryComponents.FerryComponent.BookingReference["@Reference"]))
    },
    bookingModifications(value) {
      console.log(value)
    },
    'bookingModifications.route.from.code': 'fetchDates',
  },
  computed: {
    isRange() {
      // Check if modifDate is an array to determine if the range is enabled
      const state = Array.isArray(this.modifDate)
      return state;
    },
    allowedDates() {
      return this.fetchedDates
    }
  },
  async mounted() {
    this.bookingRequests = await this.$axios.post("https://cms.4help.tn/api/Authentication_API/getbookingmodif", {user: this.$props.userMail}).then(res => {return res.data})
  },
  created(){
    console.log(this.$props.Bookings)
    this.propsBookings = this.$props.Bookings
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
  background: rgb(255 255 255 / 49%);
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
  font-size: .9em;
  color: #2d0079;
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
  padding: 0.6rem;
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
  padding: 0 1.5rem;
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
  height: 14.7vh;
  background: #3a5a99;
}

.change-booking-form {
  padding: 2rem;
}

.change-booking-form-container {
  width: 20dvw;
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
  gap: 0.6rem;
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
  border-bottom: none;
  margin-bottom: .5rem
}

.change-booking-form-button {
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

.change-booking-form-button:hover {
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

.custom-checkbox input[type="checkbox"]:checked+.checkbox-indicator {
  background-color: #2196F3;
  border-color: #2196F3;
}

/* Style to add a checkmark when checked */
.custom-checkbox input[type="checkbox"]:checked+.checkbox-indicator:after {
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

.onboard-service {
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.dp__input {
  margin-top: 0px !important;
  font-size: .9em;
}

.highlighted-dates {
  background-color: #ffecb3;
  /* Light orange background */
  color: #000;
  /* Dark text color */
  border-radius: 50%;
}
</style>
