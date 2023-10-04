<template>
    <div class="travel-booking">
        <div class="options-container">
            <label v-for="option in tripOptions" :key="option.value" class="radio-button">
                <input type="radio" v-model="tripType" :value="option.value">
                <span :class="{ 'selected': tripType === option.value }">{{ option.label }}</span>
            </label>
        </div>

        <div class="options-container flexContainer">
            <button class="menuButton" @click="showMenu('trip')">Select Your Trip</button>
            <button class="menuButton" @click="showMenu('date')">Select Date</button>
            <button class="menuButton" @click="showMenu('passengers')">Passengers</button>
            <button class="menuButton" @click="showMenu('vehicles')">Vehicles</button>
            <searchButton />
        </div>

        <div v-if="currentMenu === 'trip'" class="menu">
            <div class="menu-column">
                <h3>Departure</h3>
                <ul v-for="(port, index) in Object.keys(filteredRouteList)" :key="`DepartPort_`+index">
                    <li @click="setPort(port)">{{ port }}</li>
                </ul>
            </div>
            <div class="trip-Vertical-line"></div>
            <div class="menu-column">
                <h3>Destination</h3>
                <ul v-if="destPort" v-for="(portt, index) in filteredRouteList[destPort]" :key="`DestPort_`+index">
                    <li>{{ portt }}</li>
                </ul>
            </div>
            <div class="menu-column">
                <h3></h3>
                <MapView
                    :place="Object.keys(selectedRoute).length !== 0 ? `${selectedRoute['$'].DepartPortName.toString()}` : null"
                    :destination="Object.keys(selectedRoute).length !== 0 ? `${selectedRoute['$'].DestinationPortName.toString()}` : null" />
            </div>
        </div>
        <div v-if="currentMenu === 'date'" class="menu">
            <VueCtkDateTimePicker style="width: 4px;" v-model="departDate" format='YYYY-MM-DD' :range="true"
                :noShortcuts="true" :no-header="true" :inline="true" :only-date="true" :position="'bottom'" :no-button="true"
                :min-date="getCurrentDate()" class="date-picker" :noButtonNow="true" :label="`Select departure date`"
                :formatted="'YYYY-MM-DD'">
            </VueCtkDateTimePicker>
        </div>
        <!-- Other menus go here -->
    </div>
</template>

<script>
import { languageStore } from "../LanguageStore";
import MapView from '@/components/mapRoute.vue';
import searchButton from '@/components/searchButton.vue'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

export default {
    data() {
        return {
            destPort: null,
            filteredRouteList: {
            },
            departDate: "",
            tripType: "roundtrip",
            currentMenu: null,
            tripOptions: [
                { value: 'roundtrip', label: 'Roundtrip' },
                { value: 'oneway', label: 'One way' },
                { value: 'differentreturn', label: 'Different Return' }
            ],
            Routes: [],
            searchedRoutes: {},
            selectedRoute: {},
            svgVehicules: {
                Car: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M241-223v49q0 8.925-6.325 14.962Q228.35-153 219-153h-44q-9.35 0-15.675-6.038Q153-165.075 153-174v-305.143L230-669q6.571-19.65 24.064-30.825Q271.557-711 293-711h374q21.443 0 38.936 11.175T730-669l77 189.857V-174q0 8.925-6.325 14.962Q794.35-153 785-153h-44q-9.35 0-15.675-6.038Q719-165.075 719-174v-49H241Zm2-299h474l-49-122H292l-49 122Zm70.882 195Q333-327 346.5-340.382q13.5-13.383 13.5-32.5Q360-392 346.618-405.5q-13.383-13.5-32.5-13.5Q295-419 281.5-405.618q-13.5 13.383-13.5 32.5Q268-354 281.382-340.5q13.383 13.5 32.5 13.5Zm332 0Q665-327 678.5-340.382q13.5-13.383 13.5-32.5Q692-392 678.618-405.5q-13.383-13.5-32.5-13.5Q627-419 613.5-405.618q-13.5 13.383-13.5 32.5Q600-354 613.382-340.5q13.383 13.5 32.5 13.5Z"/></svg>`,
                BUS: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.9 120.5" width="20px" height="20px" style="enable-background:new 0 0 122.9 120.5" xml:space="preserve"><style xmlns="http://www.w3.org/2000/svg" type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M110.8,103.6h-7.6V114c0,3.6-2.9,6.5-6.5,6.5h-9c-3.6,0-6.5-2.9-6.5-6.5v-10.3H41.5V114c0,3.6-2.9,6.5-6.5,6.5 h-9c-3.6,0-6.5-2.9-6.5-6.5v-10.3H12v-82c0-7.6,4.4-13.1,13.3-16.5c17.6-6.9,54.6-6.9,72.3,0c8.9,3.4,13.3,8.9,13.3,16.5V103.6 L110.8,103.6L110.8,103.6z M118.6,40.4h-3.8V62h3.8c2.4,0,4.3-1.9,4.3-4.3V44.7C122.9,42.3,121,40.4,118.6,40.4L118.6,40.4z M4.3,40.4h3.8V62H4.3C1.9,62,0,60.1,0,57.7V44.7C0,42.3,1.9,40.4,4.3,40.4L4.3,40.4z M46.4,8.6h30.1c0.9,0,1.6,0.7,1.6,1.6v5.2 c0,0.9-0.7,1.6-1.6,1.6H46.4c-0.9,0-1.6-0.7-1.6-1.6v-5.2C44.8,9.3,45.5,8.6,46.4,8.6L46.4,8.6z M22.9,23.2h76.7 c1,0,1.9,0.9,1.9,1.9v42.8c0,1-0.9,1.9-1.9,1.9H22.9c-1,0-1.9-0.9-1.9-1.9V25.1C21,24.1,21.8,23.2,22.9,23.2L22.9,23.2L22.9,23.2 L22.9,23.2z M98.6,84.9c0-1.9-0.7-3.6-2-4.9c-1.3-1.3-3-2-4.9-2c-1.9,0-3.5,0.7-4.9,2c-1.4,1.3-2,3-2,4.9c0,1.9,0.7,3.5,2,4.8 c1.4,1.3,3,2,4.9,2c1.9,0,3.6-0.7,4.9-2C98,88.4,98.6,86.8,98.6,84.9L98.6,84.9L98.6,84.9L98.6,84.9z M38.1,84.9 c0-1.9-0.7-3.6-2-4.9c-1.3-1.3-3-2-4.9-2c-1.9,0-3.6,0.7-4.9,2c-1.3,1.3-2,3-2,4.9c0,1.9,0.6,3.5,2,4.8c1.3,1.3,3,2,4.9,2 c2,0,3.6-0.7,4.9-2C37.4,88.4,38.1,86.8,38.1,84.9L38.1,84.9L38.1,84.9L38.1,84.9z"/></g></svg>`,
                Van: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M242.5-200q-48.75 0-82.875-34.125T125.5-317h-68v-399q0-27.638 19.681-47.319T124.5-783h543v140h115l120 168v158h-69q0 48.75-34.125 82.875T716.5-200q-48.75 0-82.875-34.125T599.5-317h-240q0 49-34.125 83T242.5-200Zm0-67q20.9 0 35.45-14.55Q292.5-296.1 292.5-317q0-20.9-14.55-35.45Q263.4-367 242.5-367q-20.9 0-35.45 14.55Q192.5-337.9 192.5-317q0 20.9 14.55 35.45Q221.6-267 242.5-267Zm474 0q20.9 0 35.45-14.55Q766.5-296.1 766.5-317q0-20.9-14.55-35.45Q737.4-367 716.5-367q-20.9 0-35.45 14.55Q666.5-337.9 666.5-317q0 20.9 14.55 35.45Q695.6-267 716.5-267Zm-49-187 167-1L748-576h-80.5v122Z"/></svg>`,
                Motorcycle: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M173-198q-68.35 0-116.175-47.825T9-362q0-64 42.25-110.75T156.5-524.5L104-577H10v-45h149l132 106 142-57h157l-97-122H388v-67h137l107 134 129-86v138h-88l51 63q16-5 31.5-9t32.476-4q68.374 0 116.199 47.856T952-361.894q0 68.394-47.856 116.144T787.894-198q-68.394 0-116.144-47.825T624-362q0-32 12-61t33-52l-19-24-123 206H386l-51-52q-5.5 63-52.25 105T173-198Zm.062-67q40.038 0 68.488-28.512Q270-322.024 270-362.062t-28.512-68.488Q212.976-459 172.938-459t-68.488 28.512Q76-401.976 76-361.938t28.512 68.488Q133.024-265 173.062-265Zm615 0q40.038 0 68.488-28.512Q885-322.024 885-362.062t-28.512-68.488Q827.976-459 787.938-459t-68.488 28.512Q691-401.976 691-361.938t28.512 68.488Q748.024-265 788.062-265Z"/></svg>`
            },
            VehiculesPassengers: {},
            selectedVehicule: {},
            selectedTrailer: {},

        }
    },
    components: {
        MapView,
        searchButton,
        VueCtkDateTimePicker
    },
    methods: {
        setPort(port){
            this.destPort = port
            console.log(port)
        },
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
        async getTimeTable(fromDate, toDate) {
            if (this.tripType !== "roundTrip") {
                [fromDate, toDate] = this.getDatesOneWay(fromDate)
                const OUT = await this.useTimeTableAPI(fromDate, toDate, this.selectedRoute["$"].DepartPort, this.selectedRoute["$"].DestinationPort)
                localStorage.setItem('trips', JSON.stringify([OUT]))
                var tripOptions = { passengers: [], vehicles: [] }

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

                var tripOptions = { passengers: [], vehicles: [] }

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
        getCurrentDate() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, "0"); // Month is zero-based
            const day = String(now.getDate()).padStart(2, "0");
            return `${year}-${month}-${day}`;
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
        },
        async getRoutes() {

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
            console.log(this.Routes)
        },
        showMenu(menu) {
            this.currentMenu = menu;
        },
        getDepartDest(){
            this.Routes.map((route) => {
                if(!Object.keys(this.filteredRouteList).includes(route["$"].DepartPortName)) this.filteredRouteList[route["$"].DepartPortName] = []
                if(!Object.keys(this.filteredRouteList[route["$"].DepartPortName]).includes(route["$"].DestinationPortCountry)) this.filteredRouteList[route["$"].DepartPortName][route["$"].DestinationPortCountry] = []
                //this.filteredRouteList[route["$"].DepartPortName].push(route["$"].DestinationPortName)
                this.filteredRouteList[route["$"].DepartPortName][route["$"].DestinationPortCountry].push(route["$"].DestinationPortName)
            })
        }
    },
    computed: {
        language() {
            return languageStore.getLanguage();
        },
    },
    async mounted() {
        this.$parent.displayLoader = true
        await this.getRoutes()
        await this.getVehiculesPassengers()
        this.getDepartDest()
        console.log(this.filteredRouteList)
        this.$parent.displayLoader = false
    },
}

</script>

<style>
.datetimepicker {
    width: 70vh!important;
    margin-bottom: 4rem;
}
.date-time-picker * {
  /* Change the border radius for the date picker */
  border-radius: 2rem!important;
}
</style>

<style scoped>
.travel-booking {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 200px;
    max-width: 50vw;
    background-color: #a3a3a324;
    border-radius: 3rem;
    padding: 2rem;
}

.options-container {
    margin: 20px;
}


.radio-button {
    display: inline-block;
    margin-right: 20px;
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
    background-color: #4CAF50;
    border-color: #4CAF50;
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
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 10px;
}

.menu button:hover {
    background-color: #45a049;
}

.menuButton {
    margin: 0px 20px;
    align-items: center;
    appearance: none;
    background-color: #fff;
    border-radius: 10px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #3c4043;
    cursor: pointer;
    display: inline-flex;
    fill: currentcolor;
    font-size: 14px;
    font-weight: 500;
    height: 48px;
    justify-content: center;
    letter-spacing: .25px;
    line-height: normal;
    max-width: 100%;
    overflow: visible;
    padding: 2px 24px;
    position: relative;
    text-align: center;
    text-transform: none;
    transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: auto;
    will-change: transform, opacity;
    z-index: 0;
}

.menuButton:hover {
    background: #F6F9FE;
    color: #174ea6;
}

.menuButton:active {
    box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
    outline: none;
}

.menuButton:focus {
    outline: none;
    border: 2px solid #b6d2ff;
    color: #00358a;
}

.menuButton:not(:disabled) {
    box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.menuButton:not(:disabled):hover {
    box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
}

.menuButton:not(:disabled):focus {
    box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.menuButton:not(:disabled):active {
    box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
}

.menuButton:disabled {
    box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.trip-Vertical-line {
    width: 0.06rem;
    background: #3a5a99;
}
</style>