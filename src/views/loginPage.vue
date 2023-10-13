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

                        <div class="text-center p-t-12">
                            <span class="txt1">
                                Forgot
                            </span>
                            <a class="txt2" href="#">
                                Username / Password?
                            </a>
                        </div>

                    </form>

                    <div class="login100-pic">
                        <img src="img/img-01.png" alt="IMG">
                    </div>

                </div>
                <div class="container-login100-form-btn">
                    <button v-if="parseInt(this.setStepper)<3" @click="handleNextClick()" class="login100-form-btn" style="width:30%">
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

export default {
    data() {
        return {
            login: false,
            setStepper: "1",
            validation: true
        }
    },
    components: {
        stepper,
    },
    methods: {
        handleNextClick(){
            if (parseInt(this.setStepper)<3 && this.validation) this.setStepper = (parseInt(this.setStepper)+1).toString()
        },
        finishSignUp(){
            window.alert("finished signup")
        },
        getEighteenYearsAgoDate() {
            const today = new Date();
            const year = today.getFullYear() - 18;
            const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
            const day = String(today.getDate()).padStart(2, '0');

            const formattedDate = `${year}-${month}-${day}`;
            return formattedDate;
        }
    },

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
    color: #57b846;
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

.stepper {
    width: 55vw;
    border-radius: 1rem 0;
    transform: scale(0.9);
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
    background: #9053c7;
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
    padding: 2vh 6vw 2vh 6vw;
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
    color: #57b846;
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
    background: #57b846;
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