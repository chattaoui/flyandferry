<template>
    <div class="navbar" style="display: none!important;"></div>
    <div class="limiter">
        <div v-if="login" class="container-login100">
            <div class="wrap-login100"
                style="background: linear-gradient(-135deg, #dea75f47, #727eba7d);border-radius: 1rem;">
                <div class="login100-pic">
                    <img src="img/img-01.png" alt="IMG">
                </div>

                <form class="login100-form validate-form">
                    <span class="login100-form-title">
                        Member Login
                    </span>

                    <div class="wrap-input100 validate-input">
                        <input class="input100" type="text" name="email" placeholder="Email">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div class="wrap-input100 validate-input">
                        <input class="input100" type="password" name="pass" placeholder="Password" required>
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn">
                            Login
                        </button>
                    </div>

                    <div class="text-center p-t-12">
                        <span class="txt1">
                            Forgot
                        </span>
                        <a class="txt2" href="#">
                            Username / Password?
                        </a>
                    </div>

                    <div class="text-center p-t-17vh">
                        <a class="txt2" @click="login = false">
                            Create your Account
                            <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>
        <div v-else class="container-login100">
            <div class="first-signup-step">
                <div class="stepper">
                    <stepper :activeItem="setStepper" />
                </div>
                <div class="wrap-login100" style="height: 58vh;">
                    <!-- First signup step -->
                    <Transition class="fade-in-left">
                        <form v-if="parseInt(this.setStepper) == 1" class="login100-form validate-form">

                            <div class="wrap-input100 validate-input">
                                <input class="input100" type="text" name="Name" placeholder="Full name" required>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input100 validate-input">
                                <input class="input100" type="date" :max="getEighteenYearsAgoDate()" name="calendar"
                                    placeholder="Date of birth" required>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input100 validate-input">
                                <input class="input100" type="text" name="email" placeholder="Email" required>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input100 validate-input">
                                <input class="input100" type="password" name="pass" placeholder="Password" required>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input100 validate-input">
                                <input class="input100" type="password" name="confirmpass" placeholder="Confirm password"
                                    required>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                        </form>
                    </Transition>
                    <Transition class="fade-in-right">
                        <div v-if="parseInt(this.setStepper) == 1" class="login100-pic">
                            <img src="img/signup-pic.svg" alt="signup-pic">
                        </div>
                    </Transition>

                    <!-- Second signup step -->

                    <Transition>
                        <div v-if="parseInt(this.setStepper) == 2" class="credit-card-container credit-card-container-hi">
                            <div class="card-area">
                                <div class="front-credit-card">
                                    <div class="template">{{ holder_number }}</div>
                                    <div class="Expiration-Date">Expires</div>
                                    <div class="date">{{ holder_month }} / {{ holder_year }}</div>
                                    <div class="Card-Holders">Card Holders</div>
                                    <div class="name">{{ holder_cardHolders }}</div>
                                </div>
                                <div class="back-credit-card">
                                    <div class="num">{{ holder_cvv }}</div>
                                </div>
                            </div>
                            <div class="form">
                                <h1>Credit Card Form</h1>
                                <label for="Holders">Card Holders</label>
                                <input type="text" v-model="cardHolders" placeholder="Full Name" />
                                <label for="Number">Card Number</label>
                                <input type="text" placeholder="#### #### #### ####" v-model="cardNumber"
                                    @input="handleCardNumberInput" maxlength="19" />
                                <div class="bottom">
                                    <div>
                                        <label for="name">Expiration Date</label>
                                        <select name="dob-year" class="datefield year" v-model="year">
                                            <option value="">Year</option>
                                            <option v-for="year in getFutureYears()" :key="year" :value="year">{{ year }}
                                            </option>
                                        </select>
                                    </div>
                                    <div>
                                        <select name="dob-month" class="datefield month" v-model="month">
                                            <option value="">Month</option>
                                            <option value="01">Jan</option>
                                            <option value="02">Feb</option>
                                            <option value="03">Mar</option>
                                            <option value="04">Apr</option>
                                            <option value="05">May</option>
                                            <option value="06">Jun</option>
                                            <option value="07">Jul</option>
                                            <option value="08">Aug</option>
                                            <option value="09">Sep</option>
                                            <option value="10">Oct</option>
                                            <option value="11">Nov</option>
                                            <option value="12">Dec</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="cvv">CVV</label>
                                        <input type="text" v-on:keypress="NumbersOnly" v-model="cvv" placeholder="###"
                                            maxlength="3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>

                    <Transition v-if="parseInt(this.setStepper) == 3">
                        <div style="display: flex;align-items: center">
                            <div class="fade-in-left" style="width: 80%;padding: 6rem;">
                                <svg class="last-step-pic" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="524.67004" height="520.18759"
                                    viewBox="0 0 524.67004 520.18759">
                                    <path
                                        d="M524.67004,518.99758c0,.66003-.53003,1.19-1.19006,1.19H1.19c-.65997,0-1.19-.52997-1.19-1.19s.53003-1.19,1.19-1.19H523.47998c.66003,0,1.19006,.53003,1.19006,1.19Z"
                                        fill="#3f3d56" />
                                    <polygon
                                        points="362.54192 461.05879 368.54192 486.05879 350.54192 491.05879 346.54192 464.05879 362.54192 461.05879"
                                        fill="#ffb6b6" />
                                    <polygon
                                        points="391.54192 380.05879 372.54192 396.05879 360.54192 415.05879 377.54192 426.05879 406.54192 393.05879 391.54192 380.05879"
                                        fill="#ffb6b6" />
                                    <path
                                        d="M385.54192,215.05879l16,54s71,62,64,75c-7,13-54,49-54,49,0,0,3.48819,11.51181-6.75591,6.75591-10.24409-4.75591-21.24409-17.75591-21.24409-17.75591,0,0,0-10,5-8,5,2,28-25,28-25l-50-46v153.81496s12,10.49213,0,11.33858c-12,.84646-23,2.84646-23,2.84646,0,0-14-5-9-10l-15-82-11-100,8-52,69-12Z"
                                        fill="#2f2e41" />
                                    <path
                                        d="M353.54192,483.05879s1-4,5-4h12.21654s3.78346,17,2.78346,17,16,22-2,23c-18,1-23-1-23-1l-2-7.8937s-3-5.1063-2-9.1063,9-18,9-18Z"
                                        fill="#2f2e41" />
                                    <path
                                        d="M378.54192,418.05879s11.48556-.1811,8.74278,2.90945c-2.74278,3.09055-7.74278,8.09055-7.74278,8.09055,0,0-11.8942,24-17.4471,19.5-5.5529-4.5-14.5529-54.5-11.5529-60.5s7-6,7-6l18.44907,11.09552s-11.44907,27.90448,2.55093,24.90448Z"
                                        fill="#2f2e41" />
                                    <polygon
                                        points="350.54192 130.05879 354.54192 105.05879 327.54192 94.05879 323.54192 132.05879 350.54192 130.05879"
                                        fill="#ffb6b6" />
                                    <polygon
                                        points="350.54192 130.05879 354.54192 105.05879 327.54192 94.05879 323.54192 132.05879 350.54192 130.05879"
                                        opacity=".1" />
                                    <path
                                        d="M322.04192,126.55879l32-8,34,11s15,42,10,57c-5,15-5,44.29921-5,44.29921,0,0-.5-12.79921-29.5-3.79921-29,9-50,8-50,8l-1-36-12.56231-31.97679c-5.36947-13.66775,.41799-29.18571,13.42611-35.99949l8.6362-4.52372Z"
                                        fill="#e6e6e6" />
                                    <g>
                                        <path id="uuid-1b03a630-7e31-41b5-b302-96493ff31189-222"
                                            d="M468.93625,244.36122c4.51538,5.40957,5.38427,12.12429,1.94111,14.99735-3.44316,2.87305-9.89353,.81637-14.40979-4.59574-1.83372-2.13717-3.12896-4.6824-3.77735-7.42276l-18.84239-23.1622,9.17843-7.42782,19.28065,22.56531c2.58106,1.12838,4.85427,2.85861,6.62935,5.04587Z"
                                            fill="#ffb6b6" />
                                        <polygon
                                            points="386.58903 129.87809 380.03103 155.85437 412.12807 207.23315 444.89428 240.16415 455.51447 231.35346 422.46915 190.23683 397.42099 137.25937 386.58903 129.87809"
                                            fill="#e6e6e6" />
                                    </g>
                                    <g>
                                        <ellipse cx="459.12853" cy="52.44806" rx="41.5" ry="52.5"
                                            transform="translate(-2.61679 33.98) rotate(-4.22648)" fill="#6e4ab5" />
                                        <rect x="460.12853" y="104.80549" width="2" height="199.43799" fill="#2f2e41" />
                                        <polygon
                                            points="462.62626 100.59386 462.86623 107.66085 466.05994 114.20304 452.73559 113.52346 458.33644 107.88988 457.70336 101.46854 462.62626 100.59386"
                                            fill="#6e4ab5" />
                                    </g>
                                    <g>
                                        <circle cx="343.71883" cy="85.56184" r="27.53355" fill="#ffb6b6" />
                                        <path
                                            d="M341.52141,48.54491c.79671,.46507,1.86389-.23857,2.11935-1.12501s-.04212-1.82761-.33722-2.70165l-1.48558-4.40008c-1.0536-3.12063-2.17183-6.35032-4.45368-8.72552-3.44408-3.58499-8.91753-4.497-13.84474-3.83628-6.3275,.84849-12.57056,4.27476-15.51267,9.94055-2.9421,5.66579-1.68954,13.5716,3.62665,17.10648-7.57673,8.68419-10.21786,18.36242-9.80083,29.87971,.41702,11.51729,12.96805,22.11696,21.153,30.23044,1.82785-1.10801,3.48957-6.30065,2.48442-8.18702s.435-4.07179-.80984-5.80934-2.28631,1.02915-1.0278-.69854c.79414-1.0902-2.30536-3.59827-1.12493-4.25078,5.70958-3.15606,7.60854-10.2728,11.19452-15.72263,4.32536-6.57351,11.72821-11.02516,19.56239-11.76369,4.31558-.40683,8.87377,.33002,12.41109,2.83544,3.53731,2.50542,5.82735,6.98256,5.00708,11.23896,2.12436-2.157,3.18182-5.31809,2.78297-8.31917-.39885-3.00108-2.24525-5.77623-4.85926-7.3035,1.58943-5.25615,.22781-11.30225-3.46132-15.36964s-18.65428-3.37463-24.04014-2.30417"
                                            fill="#2f2e41" />
                                        <path
                                            d="M340.68501,68.64111c-7.1334,.77005-12.28392,6.94917-16.63311,12.65557-2.50677,3.28904-5.13259,6.92124-5.06965,11.05618,.06363,4.18054,2.85874,7.76625,4.19457,11.72813,2.18345,6.47581,.05542,14.18053-5.14218,18.61771,5.13581,.97458,10.68776-2.87625,11.57437-8.02797,1.03212-5.99724-3.51408-11.7855-2.97566-17.84704,.47435-5.34029,4.68273-9.45028,8.26047-13.4432,3.57775-3.99292,6.93788-9.29143,5.29193-14.39384"
                                            fill="#2f2e41" />
                                    </g>
                                    <path
                                        d="M314.42637,234.55793H108.75752c-23.32296,0-42.22995,18.90699-42.22995,42.22995v199.43289c0,23.32291,18.90695,42.22986,42.22986,42.22986h205.66894c23.32296,0,42.22995-18.90699,42.22995-42.22995v-199.43281c0-23.32296-18.90699-42.22995-42.22995-42.22995Z"
                                        fill="#fff" />
                                    <path
                                        d="M314.42649,519.45019H108.75754c-23.83691,0-43.22998-19.39258-43.22998-43.22949v-199.43262c0-23.83691,19.39307-43.22998,43.22998-43.22998h205.66895c23.83691,0,43.22998,19.39307,43.22998,43.22998v199.43262c0,23.83691-19.39307,43.22949-43.22998,43.22949ZM108.75754,235.5581c-22.73438,0-41.22998,18.49561-41.22998,41.22998v199.43262c0,22.73438,18.49561,41.22949,41.22998,41.22949h205.66895c22.73438,0,41.22998-18.49512,41.22998-41.22949v-199.43262c0-22.73437-18.49561-41.22998-41.22998-41.22998H108.75754Z"
                                        fill="#3f3d56" />
                                    <circle cx="292.72497" cy="249.4082" r="4.76903" fill="#3f3d56" />
                                    <circle cx="305.83981" cy="249.4082" r="4.76903" fill="#3f3d56" />
                                    <circle cx="318.95465" cy="249.4082" r="4.76903" fill="#3f3d56" />
                                    <path
                                        d="M102.01538,448.63094c-1.48165,0-2.68692,1.20526-2.68692,2.68692,0,.72246,.27901,1.39069,.78543,1.88399,.51079,.52304,1.1799,.80293,1.90148,.80293h215.09838c1.48165,0,2.68692-1.20526,2.68692-2.68692,0-.72246-.27901-1.39069-.78543-1.88399-.51079-.52304-1.1799-.80293-1.90148-.80293H102.01538Z"
                                        fill="#e6e6e6" />
                                    <path
                                        d="M217.02966,447.7353v7.16511H102.01538c-.98518,0-1.88082-.39414-2.52565-1.0569-.66287-.64483-1.0569-1.54047-1.0569-2.52565,0-1.97047,1.61219-3.58255,3.58255-3.58255h115.01428Z"
                                        fill="#6e4ab5" />
                                    <path
                                        d="M312.63557,434.30072h-35.82554c-3.95078,0-7.16511-3.21345-7.16511-7.16511s3.21433-7.16511,7.16511-7.16511h35.82554c3.95078,0,7.16511,3.21345,7.16511,7.16511s-3.21433,7.16511-7.16511,7.16511Z"
                                        fill="#e6e6e6" />
                                    <g>
                                        <polyline
                                            points="178.04436 439.42158 153.00042 355.27363 151.08342 355.84395 176.03948 439.696"
                                            fill="#2f2e41" />
                                        <ellipse cx="175.04192" cy="195.55879" rx="41.5" ry="52.5"
                                            transform="translate(-13.93649 13.43225) rotate(-4.22648)" fill="#6e4ab5" />
                                        <rect x="176.04192" y="247.91621" width="2" height="199.43799" fill="#2f2e41" />
                                        <polygon
                                            points="154.12589 352.83568 156.37116 359.54081 161.29787 364.90062 148.33299 368.04891 152.09477 361.05206 149.65683 355.07788 154.12589 352.83568"
                                            fill="#6e4ab5" />
                                        <polygon
                                            points="178.53965 243.70459 178.77961 250.77158 181.97332 257.31377 168.64898 256.63419 174.24983 251.0006 173.61675 244.57926 178.53965 243.70459"
                                            fill="#6e4ab5" />
                                        <ellipse cx="136.04192" cy="305.55879" rx="41.5" ry="52.5"
                                            transform="translate(-100.19337 68.77521) rotate(-20.93384)" fill="#6e4ab5" />
                                    </g>
                                    <path id="uuid-b40723c2-846b-43d4-8d7a-d7be28bdc184-223"
                                        d="M336.50935,224.32158c6.7457,2.0366,11.16281,7.16803,9.866,11.46082-1.29681,4.29279-7.81569,6.12073-14.56352,4.0825-2.70665-.77722-5.18781-2.19132-7.2359-4.12401l-28.47282-8.99009,3.58382-11.25044,28.51078,8.25056c2.77637-.4763,5.62645-.28063,8.31164,.57066Z"
                                        fill="#ffb6b6" />
                                    <path
                                        d="M287.04192,150.55879l30-22-1,42-28,36,30,12-1,17.13379s-38-9.13379-44-10.13379-11-15-11-15l25-60Z"
                                        fill="#e6e6e6" />
                                </svg>
                            </div>
                            <form class="fade-in-right">

                                <div class="wrap-input100 validate-input">
                                    <input class="input100" type="text" name="Name" placeholder="Address" required>
                                    <span class="focus-input100"></span>
                                    <span class="symbol-input100">
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div class="wrap-input100 validate-input">
                                    <input class="input100" type="text" name="Name" placeholder="Postal code" required>
                                    <span class="focus-input100"></span>
                                    <span class="symbol-input100">
                                        <i class="fa fa-bullseye" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div class="wrap-input100 validate-input">
                                    <input class="input100" type="text" name="Name" placeholder="Phone number" required>
                                    <span class="focus-input100"></span>
                                    <span class="symbol-input100">
                                        <i class="fa fa-book" aria-hidden="true"></i>
                                    </span>
                                </div>

                            </form>
                        </div>
                    </Transition>

                </div>
                <div class="container-login100-form-btn">
                    <button v-if="parseInt(this.setStepper) < 3" @click="handleNextClick()" class="login100-form-btn"
                        style="width:30%">
                        NEXT
                    </button>
                    <button v-else @click="finishSignUp()" class="login100-form-btn" style="width:30%">
                        Finish signup
                    </button>
                </div>

                <div class="text-center" style="margin: 3rem 0;">
                    <a class="txt2" @click="login = true">
                        Already have an Account?
                        <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import stepper from "@/components/stepper.vue"
import CreditCardValidator from 'credit-card-validator';

export default {
    data() {
        return {
            login: false,
            setStepper: "1",
            validation: true,
            cardHolders: "",
            cardNumber: "",
            month: "",
            year: "",
            cvv: "",
            otherCardMask: "#### #### #### ####",
            isValidCard: false,

        }
    },
    components: {
        stepper,
    },
    methods: {
        getFutureYears() {
            const currentYear = new Date().getFullYear();
            const futureYears = [];

            for (let i = 0; i < 8; i++) {
                futureYears.push((currentYear + i).toString());
            }

            return futureYears;
        },
        handleCardNumberInput() {
            this.cardNumber = this.cardNumber.replace(/\D/g, '');
            this.cardNumber = this.cardNumber
                .split('') // Convert the string to an array of characters
                .map((char, index) => {
                    // Insert a space after every 2 characters (excluding the first character)
                    if (index > 0 && index % 4 === 0) {
                        return ' ' + char;
                    }
                    return char;
                })
                .join(''); // Convert the array back to a string
        },
        SwapFadeEffect() {
            let InLeft = document.getElementsByClassName('fade-in-left');
            let InRight = document.getElementsByClassName('fade-in-right');

            // Loop through the elements and add a new class
            for (var i = 0; i < InLeft.length; i++) {
                InLeft[i].classList.replace('fade-in-left', 'fade-out-left');
            }
            for (var i = 0; i < InRight.length; i++) {
                InRight[i].classList.replace('fade-in-right', 'fade-out-right');
            }
        },
        handleNextClick() {
            // && this.validateCard() && this.ValidExpireDate(this.month, this.year)
            if (parseInt(this.setStepper) == 2) {
                this.setStepper = (parseInt(this.setStepper) + 1).toString()
                const InLeft = document.getElementsByClassName('credit-card-container-hi');
                InLeft[0].classList.replace('credit-card-container-hi', 'credit-card-container-bye');
            }
            else if (parseInt(this.setStepper) == 1 && this.validation) {
                this.setStepper = (parseInt(this.setStepper) + 1).toString()
                this.SwapFadeEffect()
            } else window.alert("invalid inputs")

        },
        finishSignUp() {
            window.alert("finished signup")
        },
        getEighteenYearsAgoDate() {
            const today = new Date();
            const year = today.getFullYear() - 18;
            const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
            const day = String(today.getDate()).padStart(2, '0');

            const formattedDate = `${year}-${month}-${day}`;
            return formattedDate;
        },
        NumbersOnly(evt) {
            evt = evt ? evt : window.event;
            var charCode = evt.which ? evt.which : evt.keyCode;
            if (
                charCode > 31 &&
                (charCode < 48 || charCode > 57) &&
                charCode !== 46
            ) {
                evt.preventDefault();
            } else {
                return true;
            }
        },
        ValidExpireDate(inputMonth, inputYear) {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const currentMonthIndex = new Date().getMonth();
            const inputMonthIndex = months.indexOf(inputMonth);

            // Compare input year and month with current year and month
            if (inputYear > new Date().getFullYear()) {
                return true; // Input year is in the future
            } else if (inputYear === new Date().getFullYear() && inputMonthIndex > currentMonthIndex) {
                return true; // Input month is in the future of the current year
            } else {
                return false; // Input year and month are not in the future
            }
        },
        validateCard() {
            // this.isValidCard = CreditCardValidator.number(this.cardNumber) &&
            //     CreditCardValidator.expirationDate(this.month.concat('/',this.year.slice(-2))) &&
            //     CreditCardValidator.cvv(this.cvv);
            return CreditCardValidator.validateCardAndSecCode(this.cardNumber, this.cvv)
        }
    },
    computed: {
        holder_number: function () {
            if (this.cardNumber.trim() == "") {
                return "#### #### #### ####";
            }
            return (
                this.cardNumber +
                [
                    "#",
                    "#",
                    "#",
                    "#",
                    " ",
                    "#",
                    "#",
                    "#",
                    "#",
                    " ",
                    "#",
                    "#",
                    "#",
                    "#",
                    " ",
                    "#",
                    "#",
                    "#",
                    "#",
                ]

                    .splice(this.cardNumber.length, 19)
                    .join("")
            );
        },
        holder_month: function () {
            if (this.month.trim() == "") {
                return "mm";
            }
            return this.month;
        },
        holder_year: function () {
            if (this.year.trim() == "") {
                return "yyyy";
            }
            return this.year;
        },
        holder_cardHolders: function () {
            if (this.cardHolders.trim() == "") {
                return "Full Name";
            }
            return this.cardHolders;
        },
        holder_cvv: function () {
            if (this.cvv.trim() == "") {
                return "###";
            }
            return (
                this.cvv + ["#", "#", "#"].splice(this.cvv.length, 3).join("")
            );
        },
    }

}
</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

body,
html {
    height: 100%;
    font-family: Poppins-Regular, sans-serif;
}

a {
    font-family: Poppins-Regular;
    font-size: 14px;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
}

a:focus {
    outline: none !important;
}

a:hover {
    text-decoration: none;
    color: #8766a4;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0px;
}

p {
    font-family: Poppins-Regular;
    font-size: 14px;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
}

ul,
li {
    margin: 0px;
    list-style-type: none;
}

input {
    outline: none;
    border: none;
}

textarea {
    outline: none;
    border: none;
}

textarea:focus,
input:focus {
    border-color: transparent !important;
}

input:focus::-webkit-input-placeholder {
    color: transparent;
}

input:focus:-moz-placeholder {
    color: transparent;
}

input:focus::-moz-placeholder {
    color: transparent;
}

input:focus:-ms-input-placeholder {
    color: transparent;
}

textarea:focus::-webkit-input-placeholder {
    color: transparent;
}

textarea:focus:-moz-placeholder {
    color: transparent;
}

textarea:focus::-moz-placeholder {
    color: transparent;
}

textarea:focus:-ms-input-placeholder {
    color: transparent;
}

input::-webkit-input-placeholder {
    color: #999999;
}

input:-moz-placeholder {
    color: #999999;
}

input::-moz-placeholder {
    color: #999999;
}

input:-ms-input-placeholder {
    color: #999999;
}

textarea::-webkit-input-placeholder {
    color: #999999;
}

textarea:-moz-placeholder {
    color: #999999;
}

textarea::-moz-placeholder {
    color: #999999;
}

textarea:-ms-input-placeholder {
    color: #999999;
}


button {
    outline: none !important;
    border: none;
    background: transparent;
}

button:hover {
    cursor: pointer;
}

iframe {
    border: none !important;
}

.stepper {
    width: 80%;
    border-radius: 1rem 0;
}

.txt1 {
    font-family: Poppins-Regular;
    font-size: 1.2em;
    line-height: 1.5;
    color: white;
}

.txt2 {
    font-family: Poppins-Regular;
    font-size: 13px;
    line-height: 1.5;
    color: #ffffff;
}

.txt2:hover {
    color: #c9c9c9;
}

.limiter {
    width: 100%;
    margin: 0 auto;
}

.container-login100 {
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: #8766a4;
    background: -webkit-linear-gradient(-135deg, #f08700, #4158d0);
    background: -o-linear-gradient(-135deg, #f08700, #4158d0);
    background: -moz-linear-gradient(-135deg, #f08700, #4158d0);
    background: linear-gradient(-135deg, #f08700, #4158d0);
}

.first-signup-step {
    background: linear-gradient(-135deg, #dea75f47, #727eba7d);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.wrap-login100 {
    width: 55vw;
    height: 76vh;
    overflow: hidden;

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    padding: 2vh 7vw 2vh 7vw;
    align-content: center;
    justify-content: space-between;
    align-items: center;
}

.login100-pic {
    width: 316px;
}

.login100-pic img {
    max-width: 100%;
    transition: ease-in-out 0.5s;
}

.login100-pic:hover img {
    transform: scale(1.2);
    transition: ease-in-out .5s;
}

.last-step-pic:hover {
    transform: scale(1.2);
    transition: ease-in-out .5s;

}

.login100-form {
    width: 15vw;
}

.login100-form-title {
    font-family: Poppins-Bold;
    font-size: 24px;
    color: #333333;
    line-height: 1.2;
    text-align: center;

    width: 100%;
    display: block;
    padding-bottom: 54px;
}


.wrap-input100 {
    position: relative;
    width: 100%;
    z-index: 1;
    margin-bottom: 10px;
}

.input100 {
    font-family: Poppins-Medium;
    font-size: 15px;
    line-height: 1.5;
    color: #666666;

    display: block;
    width: 100%;
    background: #e6e6e6;
    height: 50px;
    border-radius: 25px;
    padding: 0 30px 0 68px;
}


.focus-input100 {
    display: block;
    position: absolute;
    border-radius: 25px;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 0px 0px;
    color: rgba(136, 72, 189, 0.8);
}

.input100:focus+.focus-input100 {
    -webkit-animation: anim-shadow 0.5s ease-in-out forwards;
    animation: anim-shadow 0.5s ease-in-out forwards;
}

@-webkit-keyframes anim-shadow {
    to {
        box-shadow: 0px 0px 70px 25px;
        opacity: 0;
    }
}

@keyframes anim-shadow {
    to {
        box-shadow: 0px 0px 70px 25px;
        opacity: 0;
    }
}

.symbol-input100 {
    font-size: 15px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    position: absolute;
    border-radius: 25px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-left: 35px;
    pointer-events: none;
    color: #666666;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}

.input100:focus+.focus-input100+.symbol-input100 {
    color: #8766a4;
    padding-left: 28px;
}

.container-login100-form-btn {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 20px;
}

.login100-form-btn {
    font-family: Montserrat-Bold;
    font-size: 15px;
    line-height: 1.5;
    color: #fff;
    text-transform: uppercase;

    width: 100%;
    height: 50px;
    border-radius: 25px;
    background: #8766a4;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}

.login100-form-btn:hover {
    background: #333333;
}

.text-center {
    text-align: center;
}

.p-t-12 {
    padding-top: 12px;
}

.p-t-17vh {
    padding-top: 15vh;
}

@keyframes fadeInFromLeft {
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeOutLeft {
    0% {
        opacity: 1;
        transform: translateX(0);
    }

    100% {
        opacity: 0;
        transform: translateX(-100%);
    }
}


@keyframes fadeInFromRight {
    0% {
        opacity: 0;
        transform: translateX(100%);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeOutRight {
    0% {
        opacity: 1;
        transform: translateX(0);
    }

    100% {
        opacity: 0;
        transform: translateX(100%);
    }
}

@keyframes fadeInFromTop {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-top {
    opacity: 0;
    transform: translateY(-100%);
    animation: fadeInFromTop 0.7s ease forwards;
}

.fade-out-left {
    animation: fadeOutLeft 0.7s ease forwards;

}

.fade-out-right {
    animation: fadeOutRight 0.7s ease forwards;
}

.fade-in-left {
    opacity: 0;
    transform: translateX(-100%);
    animation: fadeInFromLeft 0.7s ease forwards;
}

.fade-in-right {
    opacity: 0;
    transform: translateX(100%);
    animation: fadeInFromRight 0.7s ease forwards;
}

@media (max-width: 992px) {
    .wrap-login100 {
        padding: 177px 90px 33px 85px;
    }

    .login100-pic {
        width: 35%;
    }

    .login100-form {
        width: 50%;
    }
}

@media (max-width: 768px) {
    .wrap-login100 {
        padding: 100px 80px 33px 80px;
    }

    .login100-pic {
        display: none;
    }

    .login100-form {
        width: 100%;
    }
}

@media (max-width: 576px) {
    .wrap-login100 {
        padding: 100px 15px 33px 15px;
    }
}

.validate-input {
    position: relative;
}

@media (max-width: 992px) {
    .alert-validate::before {
        visibility: visible;
        opacity: 1;
    }
}
</style>
<style name="credit-card">
.credit-card-container {
    padding: 1rem;
    min-height: 58vh;
    width: 55vw;
    display: grid;
    grid-template-columns: 40% 60%;
    gap: 4rem;
    box-shadow: 0px 50px 50px -50px rgba(0, 0, 0, 0.5);
}

.credit-card-container-hi {
    animation: hi 0.7s forwards ease;
}

.credit-card-container-bye {
    animation: bye 0.7s forwards ease;
}

@keyframes hi {
    0% {
        opacity: 0;
        transform: perspective(5px) rotateX(50deg) translateY(800%);
    }

    100% {
        opacity: 1;
        transform: perspective(100rem);
    }
}

@keyframes bye {
    0% {
        opacity: 1;
        transform: perspective(100rem);
    }

    100% {
        opacity: 0;
        transform: perspective(5px) rotateX(50deg) translateY(800%);
    }
}

.credit-card-container .card-area,
.credit-card-container .form {
    background-color: #8766a4;
    border-radius: 2rem;
    display: flex;
    min-height: 98%;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), 10px -8px 15px rgba(0, 0, 0, 0.1),
        4px 0 12px rgba(0, 0, 0, 0.1);
    flex-direction: column;
}

.credit-card-container .card-area {
    user-select: none;
    padding: 2rem;
    gap: 3rem;
}

.front-credit-card,
.back-credit-card {
    z-index: 0;
    position: relative;
    flex: 1;
    background-color: lavender;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.1), 10px 8px 15px rgba(0, 0, 0, 0.1);
}

.front-credit-card::before {
    position: absolute;
    content: "";
    bottom: -10.5rem;
    right: -9rem;
    width: 18rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: rgb(229 241 255);
    box-shadow: -40px 20px 0 rgb(115, 115, 115, 0.3);
}

.front-credit-card::after {
    position: absolute;
    content: "";
    top: 24%;
    left: 50px;
    width: 42px;
    height: 32px;
    box-shadow: -10px 10px 0 rgb(115, 115, 115, 0.3);
    background-color: rgb(229 241 255);
    border-radius: 5px;
}

.front-credit-card .template {
    position: absolute;
    top: 50%;
    left: 10%;
    font-size: 0.9em;
    white-space: nowrap;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    color: rgb(89, 89, 89);
    letter-spacing: .5em;
}

.front-credit-card .Expiration-Date {
    position: absolute;
    top: 68%;
    right: 22%;
    font-size: 0.8em;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(161, 161, 161);
}

.front-credit-card .date {
    position: absolute;
    top: 80%;
    left: 65%;
    font-size: 0.95em;
    white-space: nowrap;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    color: rgb(118, 118, 118);
    letter-spacing: 1px;
    font-weight: 500;
}

.front-credit-card .Card-Holders {
    position: absolute;
    top: 68%;
    left: 10%;
    font-size: 0.8em;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(161, 161, 161);
}

.front-credit-card .name {
    position: absolute;
    top: 80%;
    left: 10%;
    font-size: 0.8em;
    white-space: nowrap;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    color: rgb(126, 126, 126);
    letter-spacing: 1px;
    font-weight: 400;
    text-transform: uppercase;
}

.back-credit-card::before {
    z-index: -1;
    position: absolute;
    content: "";
    top: 15%;
    left: -10%;
    width: 120%;
    height: 18%;
    box-shadow: -50px 20px 0 2px rgb(115, 115, 115, 0.3);
    border-radius: 15px;
    background-color: rgb(229 241 255);
}

.back-credit-card::after {
    z-index: -1;
    position: absolute;
    content: "";
    top: 59%;
    right: 10%;
    width: 60px;
    height: 20%;
    border-radius: 5px;
    background-color: rgba(213, 213, 213, 0.5);
    box-shadow: -15px 15px 0 rgb(115, 115, 115, 0.3);
}

.back-credit-card .num {
    position: absolute;
    top: 70%;
    right: 2px;
    width: 60px;
    height: 20%;
    font-size: 1em;
    letter-spacing: 2px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    color: rgb(118, 118, 118);
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
}

.credit-card-container .form {
    padding: 1rem;
    gap: 2rem;
    justify-content: center;
    align-items: center;
}

.credit-card-container .form h1 {
    user-select: none;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3em;
}

.credit-card-container .form input {
    height: 4.5rem;
    width: 80%;
    border-radius: 10px;
    border: 0;
    outline: 0;
    padding: 1rem;
    font-size: 1.1em;
    color: rgb(255, 255, 255);
    box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.1), 10px 8px 15px rgba(0, 0, 0, 0.1);
}

.credit-card-container .form input::placeholder {
    color: lavender;
}

.credit-card-container .form>label {
    user-select: none;
    width: 75%;
    transform: translateY(10px);
    font-size: 1em;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}

.credit-card-container .form .bottom {
    width: 80%;
    display: flex;
    gap: 2rem;
    align-items: end;
    justify-content: space-around;
}

.credit-card-container .form .bottom div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
    align-items: center;
}

.credit-card-container .form .bottom div select {
    font-family: Arial, Helvetica, sans-serif;
    height: 38px;
    width: 100%;
    border-radius: 10px;
    border: 0;
    outline: 0;
    padding: 10px;
    font-size: 1em;
    color: rgb(186, 186, 204);
    box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.1), 10px 8px 15px rgba(0, 0, 0, 0.1);
}



.credit-card-container .form .bottom div input {
    width: 100%;
    text-align: center;
    box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.1), 10px 8px 15px rgba(0, 0, 0, 0.1);
}

.credit-card-container .form .bottom div label {
    user-select: none;
    font-size: 0.9em;
    color: white;
    white-space: nowrap;
}

/* @media screen and (max-width: 1500px) {
    .credit-card-container {
        height: 420px;
        width: 880px;
        grid-template-columns: 340px calc(880px - 120px - 340px);
    }

    .credit-card-container .card-area,
    .credit-card-container .form {
        min-height: 380px;
        gap: 20px;
        padding: 20px;
    }

    .credit-card-container .form {
        padding: 30px 20px;
    }

    .credit-card-container .form h1 {
        font-size: 2.4em;
        transform: translateY(8px);
    }

    .credit-card-container .form>label {
        transform: translateY(8px);
    }

    .front-credit-card .template {
        top: 55%;
        font-size: 0.95em;
    }

    .credit-card-container .form .bottom div {
        flex: 1;
    }

    .credit-card-container .form button {
        margin-top: 0px;
        font-size: 0.95em;
    }

    .credit-card-container .form input {
        height: 35px;
        font-size: 0.95em;
    }

    .credit-card-container .form .bottom div select {
        height: 35px;
        padding: 10px;
    }

    .front-credit-card .Card-Holders {
        top: 72%;
        left: 10%;
    }

    .front-credit-card .name {
        top: 82%;
        left: 11%;
    }

    .front-credit-card .Expiration-Date {
        top: 72%;
        right: 22%;
    }

    .front-credit-card .date {
        top: 82%;
        left: 64%;
    }
} */
</style>