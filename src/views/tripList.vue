<template>
    <div class="trip-container">
        <div class="grid">
            <div class="grid-one">
                <div class="current-travel">
                    <p class="current-travel-location">Barcelona (BCN) - Rome (ROM)</p>
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

                <div class="travel-card">
                    <div class="travel-image">
                        <div v-html="getFerryCompany('CTN')"></div>
                    </div>
                    <div class="travel-arrival-info">
                        <p class="travel-time">10:30 AM</p>
                        <p class="travel-arrival">Barcelona (BCN)</p>
                        <p class="travel-arrival-date">Tuesday, Apr 21, 2020</p>
                    </div>
                    <div class="travel-range">
                        <p class="range-time">1h 50m</p>
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
                        <p class="travel-time">12:20 AM</p>
                        <p class="travel-departure">ROME (ROM)</p>
                        <p class="travel-departure-date">Tuesday, Apr 21, 2020</p>
                    </div>
                    <div class="travel-rate-final">
                        <div class="travel-rate"><sup>$</sup>56</div>
                        <button class="select-rate">Select</button>
                    </div>
                </div>
                <div class="travel-card">
                    <div class="travel-image">
                        <div v-html="getFerryCompany('CTN')"></div>
                    </div>
                    <div class="travel-arrival-info">
                        <p class="travel-time">07:45 AM</p>
                        <p class="travel-arrival">Barcelona (BCN)</p>
                        <p class="travel-arrival-date">Tuesday, Apr 21, 2020</p>
                    </div>
                    <div class="travel-range">
                        <p class="range-time">7h 55m</p>
                        <div class="range">
                            <div class="range-pos range-start"></div>
                            <div class="range-pos range-end"></div>
                            <div class="ranger"></div>
                        </div>
                        <p class="range-stops">
                            <span class="range-stop">VIE</span>
                        </p>
                    </div>
                    <div class="travel-departure-info">
                        <p class="travel-time">3:40 PM</p>
                        <p class="travel-departure">ROME (ROM)</p>
                        <p class="travel-departure-date">Tuesday, Apr 21, 2020</p>
                    </div>
                    <div class="travel-rate-final">
                        <div class="travel-rate"><sup>$</sup>68</div>
                        <button class="select-rate">Select</button>
                    </div>
                </div>
                <div class="travel-card">
                    <div class="travel-image">
                        <div v-html="getFerryCompany('CTN')"></div>
                    </div>
                    <div class="travel-arrival-info">
                        <p class="travel-time">10:35 PM</p>
                        <p class="travel-arrival">Barcelona (BCN)</p>
                        <p class="travel-arrival-date">Tuesday, Apr 21, 2020</p>
                    </div>
                    <div class="travel-range">
                        <p class="range-time">17h 15m</p>
                        <div class="range">
                            <div class="range-pos range-start"></div>
                            <div class="range-pos range-end"></div>
                            <div class="ranger"></div>
                        </div>
                        <p class="range-stops">
                            <span class="range-stop">PMI</span>
                            <span class="range-stop">VLC</span>
                        </p>
                    </div>
                    <div class="travel-departure-info">
                        <p class="travel-time">3:50 PM</p>
                        <p class="travel-departure">ROME (ROM)</p>
                        <p class="travel-departure-date">Tuesday, Apr 22, 2020</p>
                    </div>
                    <div class="travel-rate-final">
                        <div class="travel-rate"><sup>$</sup>82</div>
                        <button class="select-rate">Select</button>
                    </div>
                </div>
                <div class="travel-card">
                    <div class="travel-image">
                        <div v-html="getFerryCompany('CTN')"></div>
                    </div>
                    <div class="travel-arrival-info">
                        <p class="travel-time">09:30 AM</p>
                        <p class="travel-arrival">Barcelona (BCN)</p>
                        <p class="travel-arrival-date">Tuesday, Apr 21, 2020</p>
                    </div>
                    <div class="travel-range">
                        <p class="range-time">23h 15m</p>
                        <div class="range">
                            <div class="range-pos range-start"></div>
                            <div class="range-pos range-end"></div>
                            <div class="ranger"></div>
                        </div>
                        <p class="range-stops">
                            <span class="range-stop">CGN</span>
                            <span class="range-stop">KTW</span>
                        </p>
                    </div>
                    <div class="travel-departure-info">
                        <p class="travel-time">8:45 AM</p>
                        <p class="travel-departure">ROME (ROM)</p>
                        <p class="travel-departure-date">Tuesday, Apr 22, 2020</p>
                    </div>
                    <div class="travel-rate-final">
                        <div class="travel-rate"><sup>$</sup>91</div>
                        <button class="select-rate">Select</button>
                    </div>
                </div>
                <div class="travel-card">
                    <div class="travel-image">
                        <div v-html="getFerryCompany('CTN')"></div>
                    </div>
                    <div class="travel-arrival-info">
                        <p class="travel-time">09:30 AM</p>
                        <p class="travel-arrival">Barcelona (BCN)</p>
                        <p class="travel-arrival-date">Tuesday, Apr 21, 2020</p>
                    </div>
                    <div class="travel-range">
                        <p class="range-time">28h 00m</p>
                        <div class="range">
                            <div class="range-pos range-start"></div>
                            <div class="range-pos range-end"></div>
                            <div class="ranger"></div>
                        </div>
                        <p class="range-stops">
                            <span class="range-stop">PMI</span>
                            <span class="range-stop">CGN</span>
                            <span class="range-stop">KTW</span>
                        </p>
                    </div>
                    <div class="travel-departure-info">
                        <p class="travel-time">1:30 PM</p>
                        <p class="travel-departure">ROME (ROM)</p>
                        <p class="travel-departure-date">Tuesday, Apr 22, 2020</p>
                    </div>
                    <div class="travel-rate-final">
                        <div class="travel-rate"><sup>$</sup>120</div>
                        <button class="select-rate">Select</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            ferryCompanies: {
                CTN: '<img src="img/CTNlogo.png" alt="">'
            }
        }
    },
    methods: {
        getFerryCompany(company){
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
    mounted() {
        this.clickHoverInit()
    }
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
    height: 100vh;
}

/*--------------------------------------*/

.trip-container {
    width: 100%;
    padding: 12.5rem;
    background: $grey;
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
    font-size: 12px;
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
    font-size: 12px;
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
    font-size: 25px;
    font-weight: bold;
    padding: 5px;
    white-space: nowrap;
    sup {
        font-size: 12px;
    }
}

.travel-card {
    height: 15vh;
    width: 100%;
    background: $white;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    padding: 20px;
    border: #f08700;
    border-radius: 30px;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.travel-card:hover {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  animation-name: example;
  animation-duration: 0.25s;
  border-left: 8px solid $purple;
  box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
}
@keyframes example {
    0%   {border-left: 2px solid #ffffff;}
    25%  {border-left: 3px solid #858ea0;}
    50%  {border-left: 4px solid #5e729a;}
    100% {border-left: 5px solid #3a5a99;}
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
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 4px;
    }

    .travel-arrival,
    .travel-departure {
        font-size: 14px;
        margin-bottom: 2px;
    }

    .travel-arrival-date,
    .travel-departure-date {
        font-size: 12px;
    }
}

.travel-range {
    width: calc(100% - 30px - 242px - 140px - 120px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 30px;

    .range-stops,
    .range-time {
        color: $purple;
        margin: 2px 0px;
        font-size: 12px;
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
            height: 7px;
            width: 7px;
            background: $purple;
            border-radius: 50%;
            position: absolute;
            top: -13.5px;
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
        font-size: 25px;
        font-weight: bold;

        sup {
            font-size: 10px;
        }
    }

    .select-rate {
        border: 0;
        padding: 10px 50px;
        border-radius: 7px;
        background: $orange;
        color: $white;
        font-weight: bold;
        cursor: pointer;
        outline: none;
    }
}</style>