<template>
    <div class="trip-container" v-if="trips.length == 1">
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
            <div class="grid-four">

                <div v-for="(trip, index) in trips[0]" :key="`trip_item_${index}`" class="travel-card">
                    <div class="travel-image">
                        <div v-html="getFerryCompany('CTN')"></div>
                    </div>
                    <div class="travel-arrival-info">
                        <p class="travel-time">{{ trip.DepartDateTime.split('T')[1] }}</p>
                        <p class="travel-arrival">{{ `${trip.DepartPortName} (${trip.DepartPort})` }}</p>
                        <p class="travel-arrival-date">{{ trip.DepartDateTime.split('T')[0] }}</p>
                    </div>
                    <div class="travel-range">
                        <p class="range-time">{{ calculateHourDifference(trip.DepartDateTime, trip.ArriveDateTime) }}</p>
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
                        <p class="travel-time">{{ trip.ArriveDateTime.split('T')[1] }}</p>
                        <p class="travel-arrival">{{ `${trip.DestinationPortName} (${trip.DestinationPort})` }}</p>
                        <p class="travel-arrival-date">{{ trip.ArriveDateTime.split('T')[0] }}</p>
                    </div>
                    <div class="travel-rate-final">
                        <div class="travel-rate"><sup>$</sup>56</div>
                        <button class="select-rate" @click="getSailtings(trip)">Select</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="trip-container" v-else>
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
            <div class="grid-four">
                <div v-for="(trip, index) in listedTrips" :key="`trip_item_${index}`" class="travel-card">
                    <div class="travel-image">
                        <div v-html="getFerryCompany('CTN')"></div>
                    </div>
                    <div class="trip-details-container">
                        <div class="trip-details">
                            <div class="travel-arrival-info">
                                <p class="travel-time">{{ trip.OUT.DepartDateTime.split('T')[1] }}</p>
                                <p class="travel-arrival">{{ `${trip.OUT.DepartPortName} (${trip.OUT.DepartPort})` }}</p>
                                <p class="travel-arrival-date">{{ trip.OUT.DepartDateTime.split('T')[0] }}</p>
                            </div>
                            <div class="travel-range">
                                <p class="range-time">{{ calculateHourDifference(trip.OUT.DepartDateTime,
                                    trip.OUT.ArriveDateTime) }}</p>
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
                                <p class="travel-time">{{ trip.OUT.ArriveDateTime.split('T')[1] }}</p>
                                <p class="travel-arrival">{{ `${trip.OUT.DestinationPortName} (${trip.OUT.DestinationPort})`
                                }}</p>
                                <p class="travel-arrival-date">{{ trip.OUT.ArriveDateTime.split('T')[0] }}</p>
                            </div>
                        </div>

                        <div class="trip-Vertical-line"></div>

                        <div class="trip-details">
                            <div class="travel-arrival-info">
                                <p class="travel-time">{{ trip.RTN.DepartDateTime.split('T')[1] }}</p>
                                <p class="travel-arrival">{{ `${trip.RTN.DepartPortName} (${trip.RTN.DepartPort})` }}</p>
                                <p class="travel-arrival-date">{{ trip.RTN.DepartDateTime.split('T')[0] }}</p>
                            </div>
                            <div class="travel-range">
                                <p class="range-time">{{ calculateHourDifference(trip.RTN.DepartDateTime,
                                    trip.RTN.ArriveDateTime) }}</p>
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
                                <p class="travel-time">{{ trip.RTN.ArriveDateTime.split('T')[1] }}</p>
                                <p class="travel-arrival">{{ `${trip.RTN.DestinationPortName} (${trip.RTN.DestinationPort})`
                                }}</p>
                                <p class="travel-arrival-date">{{ trip.RTN.ArriveDateTime.split('T')[0] }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="travel-rate-final">
                        <div class="travel-rate"><sup>$</sup>56</div>
                        <button class="select-rate" @click="getSailtings(trip)">Select</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            tripOptions: {},
            trips: [],
            ferryCompanies: {
                CTN: '<img src="img/CTNlogo.png" alt="">'
            },
            listedTrips: []
        }
    },
    methods: {
    async getSailtings(trip){
      function getCurrentFormattedDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
      }
      let data = {}
      if (this.trips.length == 1){

        const departDateTimeOut = trip.DepartDateTime
        const departPlaceOut = trip.DepartPort
        const destinationPlaceOut = trip.DestinationPort

        data = {
            "TransactionId": "488445e3-13aa-41e3-ace1-9a022a74e974",
            "TimeStamp": `${getCurrentFormattedDate()}`,
            "User": "",
            "LanguagePrefCode": "en",
            "Currency": "EUR",
            "CountryCode": "TUN",
            "OriginatingSystem": "",
            "departDateTimeOut": `${departDateTimeOut}`,
            "departPlaceOut": `${departPlaceOut}`,
            "destinationPlaceOut": `${destinationPlaceOut}`,
        }
      } else {

        const departDateTimeOut = trip.OUT.DepartDateTime
        const departPlaceOut = trip.OUT.DepartPort
        const destinationPlaceOut = trip.OUT.DestinationPort

        const departDateTimeRtn = trip.RTN.DepartDateTime
        const departPlaceRtn = trip.RTN.DepartPort
        const destinationPlaceRtn = trip.RTN.DestinationPort

        data = {
        "TransactionId": "488445e3-13aa-41e3-ace1-9a022a74e974",
        "TimeStamp": `${getCurrentFormattedDate()}`,
        "User": "",
        "LanguagePrefCode": "en",
        "Currency": "EUR",
        "CountryCode": "TUN",
        "OriginatingSystem": "",
        "departDateTimeOut": `${departDateTimeOut}`,
        "departPlaceOut": `${departPlaceOut}`,
        "destinationPlaceOut": `${destinationPlaceOut}`,
        "departDateTimeRtn": `${departDateTimeRtn}`,
        "departPlaceRtn": `${departPlaceRtn}`,
        "destinationPlaceRtn": `${destinationPlaceRtn}`,

      }
      }

      data.passengers = this.tripOptions.passengers

      if (this.tripOptions.passengers.length) data.vehicles = this.tripOptions.vehicles


    //   "passengers": [
    //       {
    //         "Age": "35",
    //         "Category": "Adult"
    //       },
    //       {
    //         "Age": "6",
    //         "Category": "Child"
    //       }
    //     ],
    //     "vehicles": [
    //       {
    //         "OperatorCode": "A1",
    //         "Height": "190",
    //         "Length": "900"
    //       }
    //     ]

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://cms.4help.tn/api/getSailings_API/getSailings',
        headers: { 
          'Content-Type': 'application/json'
        },
        maxRedirects: 0,
        data : JSON.stringify(data)
      };

        try {
          const response = await this.$axios.request(config);
          console.log(response.data.GetSailingsResponse)
        }
        catch (error) {
          console.log(error);
        }
      

    },
        calculateHourDifference(fromDate, toDate) {
            const startDate = new Date(fromDate);
            const endDate = new Date(toDate);

            const timeDifference = endDate - startDate;
            const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60)); // Calculate hours
            const minutesDifference = Math.floor((timeDifference / (1000 * 60)) % 60); // Calculate remaining minutes
            return `${hoursDifference ? `${hoursDifference}h` : ``} ${minutesDifference ? ` ${minutesDifference}m` : ``}`
        },
        transformTripsData(inputData) {
            const outputData = [];

            inputData.map(data => {
                for (let i = 0; i < Object.keys(data).length; i++) {
                    outputData.push(data[Object.keys(data)[i]])
                }
            })
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
            const allDates = fromDates.map(
                fromDate => {
                    return toDates.map(
                        toDate => {
                            let date1 = new Date(fromDate.ArriveDateTime)
                            let date2 = new Date(toDate.DepartDateTime)
                            if (date2 > date1) return { "OUT": fromDate, "RTN": toDate }
                        }
                    )
                }
            ).map(e => {
                return Object.keys(e).reduce((result, key) => {
                    if (e[key] !== undefined) {
                        result[key] = e[key];
                    }
                    return result;
                }, {})
            }
            )
            return allDates
        },
        getTripTitle() {
            return `${this.trips[0][0].DepartPortName} ( ${this.trips[0][0].DepartPort} ) -- ${this.trips[0][0].DestinationPortName} ( ${this.trips[0][0].DestinationPort} )`
        },
        getFerryCompany(company) {
            return this.ferryCompanies[company]
        },
        clickHoverInit() {
            let rate_cards = document.querySelectorAll(".rate-cards");
            rate_cards.forEach((rate_card) => {
                rate_card.addEventListener("click", () => {
                    rate_cards.forEach((rate_card) => rate_card.classList.remove("active"));
                    rate_card.classList.add("active");
                });
            });
        }
    },
    async mounted() {
        this.clickHoverInit()
    },
    beforeMount() {
        this.tripOptions = JSON.parse(localStorage.getItem('tripOptions'))
        console.log(localStorage.getItem('tripOptions'))
        this.trips = JSON.parse(localStorage.getItem('trips'))
        if (this.trips.length == 2) this.listedTrips = this.transformTripsData(this.getTripsMatrix(this.trips[0], this.trips[1]))
    }
    // beforeRouteLeave(){
    //     localStorage.removeItem('trips')
    // },
    // beforeUnmount(){
    //     localStorage.removeItem('trips')
    // },
}


</script>

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
    // justify-content: space-between;
    align-items: center;
    justify-content: space-evenly
}

.trip-container {
    width: 100%;
    padding: 12.5rem;
    background: $grey;
    height: 100%;
}

.trip-Vertical-line {
    width: 0.2rem; 
    height: 10.7vh; 
    background: #3a5a99;
}

.grid {
    display: grid;
    grid-template-rows: 100px;
    grid-gap: 20px;
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
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
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
    margin: 20px 0px;
}

.travel-card:last-child {
    margin-bottom: 0;
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
        font-size: 0.625em;
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
    justify-content: space-between;
    height: 100%;

    .travel-rate {
        color: $purple;
        font-size: 3rem;
        font-weight: bold;

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
}</style>