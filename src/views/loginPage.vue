<template>
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
            <div style="background: linear-gradient(-135deg, #dea75f47, #727eba7d);border-radius: 1rem;">
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
                        <div v-if="parseInt(this.setStepper) == 2" class="credit-card-container" id="app">
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
                                            <option value="2030">2030</option>
                                            <option value="2029">2029</option>
                                            <option value="2028">2028</option>
                                            <option value="2027">2027</option>
                                            <option value="2026">2026</option>
                                            <option value="2025">2025</option>
                                            <option value="2024">2024</option>
                                            <option value="2023">2023</option>
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
            if (parseInt(this.setStepper) == 2 && this.validateCard() && this.ValidExpireDate(this.month, this.year)) {
                this.setStepper = (parseInt(this.setStepper) + 1).toString()
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
    width: 55vw;
    border-radius: 1rem 0;
    transform: scale(0.96);
}

.txt1 {
    font-family: Poppins-Regular;
    font-size: 13px;
    line-height: 1.5;
    color: #999999;
}

.txt2 {
    font-family: Poppins-Regular;
    font-size: 13px;
    line-height: 1.5;
    color: #666666;
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
    color: rgba(87, 184, 70, 0.8);
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
    animation: hi 0.7s forwards ease;
    min-height: 58vh;
    width: 55vw;
    display: grid;
    grid-template-columns: 40% 60%;
    gap: 4rem;
    box-shadow: 0px 50px 50px -50px rgba(0, 0, 0, 0.5);
}

@keyframes gogo {
    100% {
        transform: perspective(600px) rotateX(-2deg) translate(0, -30px) translateZ(-10px);
    }
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
    bottom: -40px;
    right: -80px;
    width: 180px;
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
    font-size: 1em;
    white-space: nowrap;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    color: rgb(89, 89, 89);
    letter-spacing: 5px;
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
    padding: 10px;
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
    gap: 20px;
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