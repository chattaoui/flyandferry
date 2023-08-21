<template>
  <div class="formbold-main-wrapper" style="margin: 100px">
    <!-- Author: FormBold Team -->
    <!-- Learn More: https://formbold.com -->
    <div class="formbold-form-wrapper">
      <form class="search-form" method="POST">
        <div class="toggle">
          <input
            type="radio"
            name="sizeBy"
            value="weight"
            id="sizeWeight"
            checked="checked"
          />
          <label for="sizeWeight">Voyage aller-retour</label>
          <input
            type="radio"
            name="sizeBy"
            value="dimensions"
            id="sizeDimensions"
          />
          <label for="sizeDimensions">Aller simple</label>
        </div>
        <div class="formbold-steps">
          <ul>
            <li class="formbold-step-menu1 active">
              <span>1</span>
              Sign Up
            </li>
            <li class="formbold-step-menu2">
              <span>2</span>
              Message
            </li>
            <li class="formbold-step-menu3">
              <span>3</span>
              Confirm
            </li>
          </ul>
        </div>

        <div class="formbold-form-step-2">
          <div class="formbold-input-flex">
            <div>
              <label for="firstname" class="formbold-form-label">
                First name
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="Andrio"
                id="firstname"
                class="formbold-form-input"
              />
            </div>
            <div>
              <label for="lastname" class="formbold-form-label">
                Last name
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Dolee"
                id="lastname"
                class="formbold-form-input"
              />
            </div>
          </div>

          <div class="formbold-input-flex">
            <div>
              <label for="dob" class="formbold-form-label">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                class="formbold-form-input"
              />
            </div>
            <div>
              <label for="email" class="formbold-form-label">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                id="email"
                class="formbold-form-input"
              />
            </div>
          </div>

          <div>
            <label for="address" class="formbold-form-label"> Address </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Flat 4, 24 Castle Street, Perth, PH1 3JY"
              class="formbold-form-input"
            />
          </div>
        </div>

        <div
          class="formbold-form-step-1 test-center active"
          style="flex-direction: column; gap: 30px; margin-top: 35px"
        >
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path
                  d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                ></path>
              </g>
            </svg>
            <input
              @input="filterRoutes"
              style="font-size: 13px"
              placeholder="Entrez un port, un pays ou un opérateur"
              id="searchRef"
              ref="searchRef"
              v-model="searchInp"
              type="search"
              @focus="
                searchFocused = true;
                showPopular = true;
              "
              class="input"
            />
            <svg
              v-if="searchFocused"
              @click="clearSearch"
              fill="blue"
              style="height: 24px; width: 24px; position: absolute; right: 4px"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>

          <!-- <button class="formbold-btn" @click="handleFormClick" style="display:block">
                Rechercher
            </button> -->
          <a
            class="formbold-btn"
            v-if="!searchFocused"
            @click="handleFormClick"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Rechercher
          </a>

          <div class="search-menu" v-if="showPopular">
            <div v-if="showRoutes">
              <div>
                <h5 style="color: azure; font-size: 16px">
                  {{ language.form.Routes }}
                </h5>
              </div>
              <div class="popular-ferry-list">
                <div
                  class="list-item"
                  v-for="(route, index) in searchedRoutes"
                  :key="`Routes-${index}`"
                  @click="handleRouteClick(route)"
                >
                  <div class="departure">
                    <span class="port">{{ route.departurePort }}</span>
                    <span class="country">{{ route.departureCountry }}</span>
                  </div>
                  <div class="arrow-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <g>
                        <rect fill="none" height="24" width="24" x="0" />
                      </g>
                      <g>
                        <g>
                          <g>
                            <path
                              d="M9.01,14H2v2h7.01v3L13,15l-3.99-4V14z M14.99,13v-3H22V8h-7.01V5L11,9L14.99,13z"
                            />
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
              <div
                class="list-item"
                v-for="(trip, index) in popularTrips"
                :key="index"
                @click="handleRouteClick(trip)"
              >
                <div class="departure">
                  <span class="port">{{ trip.departurePort }}</span>
                  <span class="country">{{ trip.departureCountry }}</span>
                </div>
                <div class="arrow-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <g>
                      <rect fill="none" height="24" width="24" x="0" />
                    </g>
                    <g>
                      <g>
                        <g>
                          <path
                            d="M9.01,14H2v2h7.01v3L13,15l-3.99-4V14z M14.99,13v-3H22V8h-7.01V5L11,9L14.99,13z"
                          />
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
        </div>

        <div class="formbold-form-step-3">
          <div class="formbold-form-confirm">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <div>
              <button class="formbold-confirm-btn active">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    fill="white"
                    stroke="#DDE3EC"
                  />
                  <g clip-path="url(#clip0_1667_1314)">
                    <path
                      d="M9.83343 12.8509L15.1954 7.48828L16.0208 8.31311L9.83343 14.5005L6.12109 10.7882L6.94593 9.96336L9.83343 12.8509Z"
                      fill="#536387"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1667_1314">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(4 4)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Yes! I want it.
              </button>

              <button class="formbold-confirm-btn">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    fill="white"
                    stroke="#DDE3EC"
                  />
                  <g clip-path="url(#clip0_1667_1314)">
                    <path
                      d="M9.83343 12.8509L15.1954 7.48828L16.0208 8.31311L9.83343 14.5005L6.12109 10.7882L6.94593 9.96336L9.83343 12.8509Z"
                      fill="#536387"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1667_1314">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(4 4)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                No! I don’t want it.
              </button>
            </div>
          </div>
        </div>

        <div class="formbold-form-btn-wrapper">
          <button class="formbold-back-btn">Back</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { languageStore } from "../LanguageStore";

export default {
  data() {
    return {
      searchedRoutes: {},
      searchInp: "",
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
  methods: {
    handleRouteClick(route) {
      console.log(route);
    },
    filterRoutes() {
      this.searchedRoutes = this.popularTrips
        .map((trip) => {
          if (
            Object.values(trip).some((value) =>
              value.toUpperCase().includes(this.searchInp.toUpperCase())
            )
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
      this.showPopular = false;
    },
    nextPrevBut() {
      const stepMenuOne = document.querySelector(".formbold-step-menu1");
      const stepMenuTwo = document.querySelector(".formbold-step-menu2");
      const stepMenuThree = document.querySelector(".formbold-step-menu3");

      const stepOne = document.querySelector(".formbold-form-step-1");
      const stepTwo = document.querySelector(".formbold-form-step-2");
      const stepThree = document.querySelector(".formbold-form-step-3");

      const formSubmitBtn = document.querySelector(".formbold-btn");
      const formBackBtn = document.querySelector(".formbold-back-btn");

      const inputSearch = document.getElementById("searchRef");

      formSubmitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        if (inputSearch.value !== "") {
          if (stepMenuOne.className == "formbold-step-menu1 active") {
            event.preventDefault();

            stepMenuOne.classList.remove("active");
            stepMenuTwo.classList.add("active");

            stepOne.classList.remove("active");
            stepTwo.classList.add("active");

            formBackBtn.classList.add("active");
            formBackBtn.addEventListener("click", function (event) {
              event.preventDefault();

              stepMenuOne.classList.add("active");
              stepMenuTwo.classList.remove("active");

              stepOne.classList.add("active");
              stepTwo.classList.remove("active");

              formBackBtn.classList.remove("active");
            });
          } else if (stepMenuTwo.className == "formbold-step-menu2 active") {
            event.preventDefault();

            stepMenuTwo.classList.remove("active");
            stepMenuThree.classList.add("active");

            stepTwo.classList.remove("active");
            stepThree.classList.add("active");

            formBackBtn.classList.remove("active");
            formSubmitBtn.textContent = "Submit";
          } else if (stepMenuThree.className == "formbold-step-menu3 active") {
            event.preventDefault();
            console.log("prevented from onMounted");
          }
        } else {
          inputSearch.focus();
        }
      });
    },
  },
  computed: {
    language() {
      return languageStore.getLanguage();
    },
  },
  mounted() {
    this.nextPrevBut();
  },
};
</script>

<style>
.search-form {
  width: 90%;
}

.search-menu {
  overflow-y: scroll;
  max-height: 55vh;
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
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 10px;
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
  top: 20%;
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
  overflow: hidden;

  border-radius: 8px;
  padding: 20px;
  margin: 0 auto;
  width: 26.38vw;
  height: 75vh;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.6),
    0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
  background: linear-gradient(
    to top right,
    rgba(228, 85, 41, 0.7),
    rgba(26, 142, 153, 0.9)
  );
  /* Adjust colors and opacity */
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
}

.formbold-steps {
  display: none;
  padding-bottom: 18px;
  margin-bottom: 35px;
  border-bottom: 1px solid #dde3ec;
}

.formbold-steps ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 40px;
}

.formbold-steps li {
  display: flex;
  align-items: center;
  gap: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #536387;
}

.formbold-steps li span {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dde3ec;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #536387;
}

.formbold-steps li.active {
  color: #07074d;
}

.formbold-steps li.active span {
  background: #6a64f1;
  color: #ffffff;
}

.formbold-input-flex {
  display: block;
  gap: 20px;
  margin-bottom: 22px;
}

.formbold-input-flex > div {
  width: 50%;
}

.formbold-form-input {
  width: 100%;
  padding: 13px 22px;
  border-radius: 5px;
  border: 1px solid #dde3ec;
  background: #ffffff;
  font-weight: 400;
  font-size: 16px;
  color: #536387;
  outline: none;
  resize: none;
}

.formbold-form-input:focus {
  border-color: #6a64f1;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
}

.formbold-form-label {
  color: #07074d;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: block;
  margin-bottom: 10px;
}

.formbold-form-confirm {
  border-bottom: 1px solid #dde3ec;
  padding-bottom: 35px;
}

.formbold-form-confirm p {
  font-size: 16px;
  line-height: 24px;
  color: #536387;
  margin-bottom: 22px;
  width: 75%;
}

.formbold-form-confirm > div {
  display: flex;
  gap: 15px;
}

.formbold-confirm-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  border: 0.5px solid #dde3ec;
  border-radius: 5px;
  font-size: 16px;
  line-height: 24px;
  color: #536387;
  cursor: pointer;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out;
}

.formbold-confirm-btn {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);
}

.formbold-confirm-btn.active {
  background: #6a64f1;
  color: #ffffff;
}

.formbold-form-step-1,
.formbold-form-step-2,
.formbold-form-step-3 {
  display: none;
}

.formbold-form-step-1.active,
.formbold-form-step-2.active,
.formbold-form-step-3.active {
  display: block;
  display: flex;
}

.formbold-form-btn-wrapper {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 25px;
  margin-top: 25px;
}

.formbold-back-btn {
  cursor: pointer;
  background: #ffffff;
  border: none;
  color: #07074d;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: none;
}

.formbold-back-btn.active {
  display: block;
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

.toggle input + label {
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

.toggle input + label:first-of-type {
  border-radius: 6px 0 0 6px;
  border-right: none;
  color: white;
}

.toggle input + label:last-of-type {
  border-radius: 0 6px 6px 0;
  border-left: none;
  color: white;
}

.toggle input:hover + label {
  border-color: rgb(85, 134, 197);
}

.toggle input:checked + label {
  background-color: rgb(53, 90, 138);
  color: #fff;
  box-shadow: 0 0 10px rgba(102, 179, 251, 0.5);
  border-color: rgba(53, 90, 138, 0.514);
  z-index: 1;
}

.toggle input:focus + label {
  outline: dotted 1px #ccc;
  outline-offset: 0.45rem;
}

@media (max-width: 800px) {
  .toggle input + label {
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
