<template>
  <div class="navbar" style="display: none !important"></div>
  <div class="video-bg">
    <img src="html_template/img/1165589_8685.jpg" />
  </div>
  <div class="limiter">
    <div v-if="login" class="container-login100">
      <div class="wrap-login100">
        <div class="login100-pic2">
          <img src="img/login-illustration.svg" alt="IMG" />
        </div>

        <form @submit="preventDefault" class="login100-form validate-form">
          <div v-if="!validatingAccount">
            <span class="login100-form-title"> Member Login </span>

          <div class="wrap-input100 validate-input">
            <input class="input100" type="text" name="email" v-model="user.email" placeholder="Email" />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>

          <div class="wrap-input100 validate-input">
            <input class="input100" type="password" name="pass" placeholder="Password" v-model="user.password" required />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>
          </div>

          <div v-else>
          <div class="text-center" style="margin: 3rem 0">
            <a style="font-family: Poppins-Regular;font-size: 1.3em;line-height: 1.5;color: #919191;">
              Please check your email for the verification pin we sent you.
            </a>
          </div>

          <div class="wrap-input100 validate-input">
            <input class="input100" type="text" name="confirmpass" placeholder="Verification code"
              v-model="confirmationPin" required />
            <span class="focus-input100"></span>
          </div>
          </div>

          <div class="container-login100-form-btn">
            <button v-if="!validatingAccount" @click="loginUser()" class="login100-form-btn">Login</button>
            <button v-else @click="finishSignUp()" class="login100-form-btn">
              Validate and login
            </button>
          </div>

          <div class="text-center p-t-12">
            <span class="txt1"> Forgot </span>
            <a class="txt2" href="#"> Username / Password? </a>
          </div>

          <div class="text-center p-t-17vh">
            <a class="txt2" style="cursor: pointer" @click="login = false">
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
          <stepper :activeItem="setStepper" :buttonColor="`#ddab72`" :steps="3" />
        </div>
        <div class="wrap-login100" style="height: 58vh">
          <!-- First signup step -->
          <Transition class="fade-in-left">
            <form v-if="parseInt(this.setStepper) == 1" class="login100-form validate-form">
              <div class="wrap-input100 validate-input">
                <input class="input100" type="text" name="Name" v-model="newUser.name" placeholder="Full name" required />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </span>
              </div>

              <div class="wrap-input100 validate-input">
                <input class="input100" type="text" name="email" v-model="newUser.email" placeholder="Email" required />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div class="wrap-input100 validate-input">
                <input class="input100" type="date" :max="getEighteenYearsAgoDate()" v-model="newUser.birthdate"
                  name="calendar" placeholder="Date of birth" required />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                </span>
              </div>

              <div class="wrap-input100 validate-input">
                <input class="input100" type="text" name="Name" placeholder="Phone number"
                  v-model="newUser['phone number']" required />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-book" aria-hidden="true"></i>
                </span>
              </div>

              <div class="wrap-input100 validate-input">
                <input class="input100" type="text" name="Name" placeholder="Address" v-model="newUser.address"
                  required />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </span>
              </div>

              <div class="wrap-input100 validate-input">
                <input class="input100" type="text" name="Name" placeholder="Postal code" v-model="newUser['postal code']"
                  required />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-bullseye" aria-hidden="true"></i>
                </span>
              </div>
            </form>
          </Transition>
          <Transition class="fade-in-right">
            <div v-if="parseInt(this.setStepper) == 1" class="login100-pic">
              <img src="img/signup-pic.svg" alt="signup-pic" />
            </div>
          </Transition>

          <!-- Second signup step -->

          <!-- <Transition>
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
                    </Transition> -->

          <Transition v-if="parseInt(this.setStepper) == 3">
            <div style="display: flex; align-items: center">
              <div class="fade-in-left" style="width: 80%; padding: 6rem">
                <svg class="last-step-pic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="524.67004" height="520.18759" viewBox="0 0 524.67004 520.18759">
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
                    fill="#0c4c64" />
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
                      transform="translate(-2.61679 33.98) rotate(-4.22648)" fill="#f48404" />
                    <rect x="460.12853" y="104.80549" width="2" height="199.43799" fill="#2f2e41" />
                    <polygon
                      points="462.62626 100.59386 462.86623 107.66085 466.05994 114.20304 452.73559 113.52346 458.33644 107.88988 457.70336 101.46854 462.62626 100.59386"
                      fill="#f48404" />
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
                    fill="#f48404" />
                  <path
                    d="M312.63557,434.30072h-35.82554c-3.95078,0-7.16511-3.21345-7.16511-7.16511s3.21433-7.16511,7.16511-7.16511h35.82554c3.95078,0,7.16511,3.21345,7.16511,7.16511s-3.21433,7.16511-7.16511,7.16511Z"
                    fill="#e6e6e6" />
                  <g>
                    <polyline points="178.04436 439.42158 153.00042 355.27363 151.08342 355.84395 176.03948 439.696"
                      fill="#2f2e41" />
                    <ellipse cx="175.04192" cy="195.55879" rx="41.5" ry="52.5"
                      transform="translate(-13.93649 13.43225) rotate(-4.22648)" fill="#f48404" />
                    <rect x="176.04192" y="247.91621" width="2" height="199.43799" fill="#2f2e41" />
                    <polygon
                      points="154.12589 352.83568 156.37116 359.54081 161.29787 364.90062 148.33299 368.04891 152.09477 361.05206 149.65683 355.07788 154.12589 352.83568"
                      fill="#f48404" />
                    <polygon
                      points="178.53965 243.70459 178.77961 250.77158 181.97332 257.31377 168.64898 256.63419 174.24983 251.0006 173.61675 244.57926 178.53965 243.70459"
                      fill="#f48404" />
                    <ellipse cx="136.04192" cy="305.55879" rx="41.5" ry="52.5"
                      transform="translate(-100.19337 68.77521) rotate(-20.93384)" fill="#f48404" />
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


                <div class="text-center" style="margin: 3rem 0">
                  <a style="font-family: Poppins-Regular;font-size: 1.3em;line-height: 1.5;color: #919191;">
                    Please check your email for the verification pin we sent you.
                  </a>
                </div>

                <div class="wrap-input100 validate-input">
                  <input class="input100" type="text" name="confirmpass" placeholder="Verification code"
                    v-model="confirmationPin" required />
                  <span class="focus-input100"></span>
                </div>
              </form>
            </div>
          </Transition>
          <Transition v-if="parseInt(this.setStepper) == 2">
            <div style="display: flex; align-items: center">
              <div class="fade-in-left" style="width: 80%; padding: 6rem">
                <svg class="last-step-pic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  data-name="Layer 1" width="917.90945" height="521" viewBox="0 0 917.90945 521">
                  <path
                    d="M1037.37568,628.79523c-3.31771-26.67813-19.85136-52.96384-45.29423-61.64563a123.86326,123.86326,0,0,1-.00614,85.04047c-3.90959,10.5753-9.35913,21.9305-5.68165,32.5888,2.28809,6.63189,7.88559,11.70587,14.14246,14.87849,6.25726,3.17263,13.20152,4.68476,20.05886,6.16664l1.34957,1.11617C1032.83048,682.35917,1040.69338,655.47336,1037.37568,628.79523Z"
                    transform="translate(-141.04528 -189.5)" fill="#f0f0f0" />
                  <path
                    d="M991.829,567.654a105.86975,105.86975,0,0,1,26.319,59.58345,45.591,45.591,0,0,1-.5186,14.27516,26.14853,26.14853,0,0,1-6.50347,12.12823c-2.93126,3.22058-6.30257,6.17543-8.39991,10.05247a16.01083,16.01083,0,0,0-.7822,13.07062c1.85173,5.3111,5.50139,9.64009,9.21758,13.74946,4.12611,4.56266,8.48414,9.23647,10.238,15.28536.21251.7329,1.33731.36031,1.12512-.37149-3.0515-10.524-13.26755-16.50188-18.13955-25.98073-2.27337-4.423-3.22759-9.55792-1.09634-14.22685,1.86368-4.08278,5.3376-7.13282,8.33375-10.36808a27.90251,27.90251,0,0,0,6.80084-11.62187,42.14814,42.14814,0,0,0,1.06551-14.20255,102.71228,102.71228,0,0,0-7.50152-31.21348A107.7471,107.7471,0,0,0,992.613,566.7654c-.50661-.56729-1.28731.32506-.784.88864Z"
                    transform="translate(-141.04528 -189.5)" fill="#fff" />
                  <path
                    d="M1017.82909,620.06712a15.88383,15.88383,0,0,0,12.09073-16.6389c-.06037-.76-1.24413-.70184-1.18368.05912A14.70809,14.70809,0,0,1,1017.4576,618.942c-.74175.17636-.366,1.30047.37149,1.12512Z"
                    transform="translate(-141.04528 -189.5)" fill="#fff" />
                  <path
                    d="M1012.82728,652.20367a30.61482,30.61482,0,0,1-13.67134-17.63188c-.2151-.73212-1.34-.35975-1.12512.3715a31.844,31.844,0,0,0,14.26357,18.31864c.657.38974,1.18635-.67064.53289-1.05826Z"
                    transform="translate(-141.04528 -189.5)" fill="#fff" />
                  <path
                    d="M1006.24767,587.55765a8.991,8.991,0,0,1-8.52044-.43253c-.65176-.39787-1.18041.663-.5329,1.05826a10.07515,10.07515,0,0,0,9.42484.49938.61233.61233,0,0,0,.37681-.7483.59542.59542,0,0,0-.74831-.37681Z"
                    transform="translate(-141.04528 -189.5)" fill="#fff" />
                  <path
                    d="M914.528,614.8c.39991.26.79981.52,1.2002.79A118.40769,118.40769,0,0,1,930.86784,627.41c.37012.33.74023.67,1.1001,1.01A124.82726,124.82726,0,0,1,959.0778,665.53a121.22249,121.22249,0,0,1,6.64014,17.18c2.45019,8.13,4.46,17.14,9.31005,23.79a20.7951,20.7951,0,0,0,1.62012,2h43.83008c.09961-.05.19971-.09.2998-.14l1.75.08c-.07031-.31-.1499-.63-.22021-.94-.04-.18-.08984-.36-.12988-.54-.02979-.12-.06006-.24-.08008-.35-.00977-.04-.02-.08-.02979-.11-.02-.11-.05029-.21-.07031-.31q-.65991-2.685-1.35986-5.37c0-.01,0-.01-.00977-.02-3.59033-13.63-8.3501-27.08-15-39.38-.20019-.37-.3999-.75-.62012-1.12a115.67333,115.67333,0,0,0-10.39013-15.76,102.26018,102.26018,0,0,0-6.81006-7.79A85.03654,85.03654,0,0,0,966.528,620.81c-15.72021-8.3-33.91992-11.48-50.72021-6.41C915.37809,614.53,914.95768,614.66,914.528,614.8Z"
                    transform="translate(-141.04528 -189.5)" fill="#f0f0f0" />
                  <path
                    d="M914.62653,615.35628a105.86979,105.86979,0,0,1,56.88764,31.72816,45.591,45.591,0,0,1,8.18056,11.71015,26.14849,26.14849,0,0,1,2.10938,13.59926c-.40144,4.33627-1.31422,8.72531-.65458,13.08365a16.0108,16.0108,0,0,0,7.24487,10.9071c4.67615,3.12574,10.19656,4.38486,15.63785,5.42855,6.0415,1.15883,12.33511,2.26677,17.37735,6.04049.61094.45724,1.2847-.51746.67468-.974-8.77264-6.56563-20.52866-5.18785-30.12561-9.82289-4.47811-2.1628-8.33157-5.68823-9.44091-10.69928-.97007-4.38194-.03267-8.90876.41173-13.29581a27.90252,27.90252,0,0,0-1.56708-13.374,42.14783,42.14783,0,0,0-7.70016-11.98145A102.7127,102.7127,0,0,0,948.88,627.30041a107.74722,107.74722,0,0,0-34.16255-13.12569c-.746-.14793-.83213,1.03459-.091,1.18156Z"
                    transform="translate(-141.04528 -189.5)" fill="#fff" />
                  <path
                    d="M966.94247,641.55133a15.88384,15.88384,0,0,0-.364-20.56469c-.50574-.57044-1.41593.18867-.90951.75986a14.70809,14.70809,0,0,1,.29949,19.13015c-.48606.58739.49073,1.25871.974.67468Z"
                    transform="translate(-141.04528 -189.5)" fill="#fff" />
                  <path
                    d="M982.29723,670.222a30.61477,30.61477,0,0,1-21.53141-5.847c-.61254-.45506-1.28648.5195-.67468.974a31.844,31.844,0,0,0,22.41775,6.03877c.75924-.0844.54345-1.24974-.21166-1.16581Z"
                    transform="translate(-141.04528 -189.5)" fill="#fff" />
                  <path
                    d="M938.12241,622.56714a8.991,8.991,0,0,1-7.06351,4.78455c-.75994.07473-.54333,1.24.21166,1.1658a10.07514,10.07514,0,0,0,7.82586-5.27567.61233.61233,0,0,0-.14967-.82435.59542.59542,0,0,0-.82434.14967Z"
                    transform="translate(-141.04528 -189.5)" fill="#fff" />
                  <circle cx="16" cy="102" r="16" fill="#e4e4e4" />
                  <circle cx="819" cy="102" r="16" fill="#e4e4e4" />
                  <rect x="654.88184" y="101" width="169.11816" height="2" fill="#e4e4e4" />
                  <rect x="454.09448" y="101" width="156.28345" height="2" fill="#e4e4e4" />
                  <rect x="251.98438" y="101" width="157.6062" height="2" fill="#e4e4e4" />
                  <rect x="16" y="101" width="191.66931" height="2" fill="#e4e4e4" />
                  <path d="M376.04528,319a22.5,22.5,0,1,1,22.5-22.5A22.52538,22.52538,0,0,1,376.04528,319Z"
                    transform="translate(-141.04528 -189.5)" fill="#f48404" />
                  <path
                    d="M371.04528,314.5a23,23,0,1,1,23-23A23.02611,23.02611,0,0,1,371.04528,314.5Zm0-44a21,21,0,1,0,21,21A21.02367,21.02367,0,0,0,371.04528,270.5Z"
                    transform="translate(-141.04528 -189.5)" fill="#3f3d56" />
                  <path
                    d="M370.54528,298.5a1.50046,1.50046,0,0,1-1.06067-.43945l-8.5-8.5a1.49993,1.49993,0,1,1,2.12133-2.1211l7.43934,7.43946L385.339,280.085a1.49984,1.49984,0,0,1,2.12109,2.12109l-15.85413,15.8545A1.50025,1.50025,0,0,1,370.54528,298.5Z"
                    transform="translate(-141.04528 -189.5)" fill="#fff" />
                  <path d="M578.04528,319a22.5,22.5,0,1,1,22.5-22.5A22.52538,22.52538,0,0,1,578.04528,319Z"
                    transform="translate(-141.04528 -189.5)" fill="#f48404" />
                  <path
                    d="M573.04528,314.5a23,23,0,1,1,23-23A23.02611,23.02611,0,0,1,573.04528,314.5Zm0-44a21,21,0,1,0,21,21A21.02367,21.02367,0,0,0,573.04528,270.5Z"
                    transform="translate(-141.04528 -189.5)" fill="#3f3d56" />
                  <path
                    d="M572.54528,298.5a1.50046,1.50046,0,0,1-1.06067-.43945l-8.5-8.5a1.49993,1.49993,0,1,1,2.12133-2.1211l7.43934,7.43946L587.339,280.085a1.49984,1.49984,0,1,1,2.12109,2.12109l-15.85413,15.8545A1.50025,1.50025,0,0,1,572.54528,298.5Z"
                    transform="translate(-141.04528 -189.5)" fill="#fff" />
                  <path d="M779.04528,319a22.5,22.5,0,1,1,22.5-22.5A22.52538,22.52538,0,0,1,779.04528,319Z"
                    transform="translate(-141.04528 -189.5)" fill="#f0f0f0" />
                  <path
                    d="M774.04528,314.5a23,23,0,1,1,23-23A23.02611,23.02611,0,0,1,774.04528,314.5Zm0-44a21,21,0,1,0,21,21A21.02367,21.02367,0,0,0,774.04528,270.5Z"
                    transform="translate(-141.04528 -189.5)" fill="#cacaca" />
                  <path d="M759.6122,408.01575a22.5,22.5,0,1,1,22.5-22.5A22.52539,22.52539,0,0,1,759.6122,408.01575Z"
                    transform="translate(-141.04528 -189.5)" fill="#f48404" />
                  <path
                    d="M758.1122,392.51575a1.50047,1.50047,0,0,1-1.06066-.43946l-8.5-8.5a1.49992,1.49992,0,0,1,2.12133-2.12109l7.43933,7.43945,14.79371-14.79394a1.49984,1.49984,0,0,1,2.12109,2.12109l-15.85413,15.85449A1.50026,1.50026,0,0,1,758.1122,392.51575Z"
                    transform="translate(-141.04528 -189.5)" fill="#fff" />
                  <polygon points="668.809 508.674 656.694 506.801 658.155 459.177 676.036 461.942 668.809 508.674"
                    fill="#9e616a" />
                  <path
                    d="M811.12879,710.39648l-39.06643-6.04113.07639-.49413a15.38729,15.38729,0,0,1,17.55661-12.85477l.001.00015,23.86043,3.68979Z"
                    transform="translate(-141.04528 -189.5)" fill="#2f2e41" />
                  <polygon points="796.146 507.474 783.898 507.996 776.056 460.999 794.134 460.229 796.146 507.474"
                    fill="#9e616a" />
                  <path
                    d="M940.82154,708.714l-39.49494,1.68245-.0213-.49954a15.38732,15.38732,0,0,1,14.71709-16.0277l.001,0,24.12217-1.0275Z"
                    transform="translate(-141.04528 -189.5)" fill="#2f2e41" />
                  <path
                    d="M913.07568,416.79409a10.02446,10.02446,0,0,1,1.76756-.32933l-7.63588-62.5007L881.29843,299.096a15.08,15.08,0,0,1,26.24077-14.71754l0,.00006a118.97093,118.97093,0,0,1,15.22467,33.59584L933.64906,357.331l-7.9595,67.49264a9.9971,9.9971,0,1,1-12.61388-8.02955Z"
                    transform="translate(-141.04528 -189.5)" fill="#9e616a" />
                  <path
                    d="M875.19419,298.98013A20.80155,20.80155,0,0,1,913.86232,283.666l16.21626,38.14182-32.73377,37.44653Z"
                    transform="translate(-141.04528 -189.5)" fill="#0c4c64" />
                  <path
                    d="M850.04528,305.5l22-37,0,0c15.197-9.93646,27.70009-3.4393,34.3654,13.45017,5.80754,14.7159,10.31595,33.3333,7.63458,52.54985-6.00637,43.0456-11,48-11,48s37.5,41.5,29.5,94.5l6,200-18-1-25-115-19-72-33,88-29,102-20-4,12-113,17-130,19.5-49.5-9.5-34.5S822.54528,324,850.04528,305.5Z"
                    transform="translate(-141.04528 -189.5)" fill="#0c4c64" />
                  <path
                    d="M776.93873,358.34387a10.02393,10.02393,0,0,1,1.08439,1.43417L830.52637,325.021l37.51033-47.69436A15.08,15.08,0,0,1,892.928,294.2265l0,0a118.971,118.971,0,0,1-23.25335,28.63131l-30.34607,27.323-63.93732,23.03539a9.9971,9.9971,0,1,1,1.5475-14.87242Z"
                    transform="translate(-141.04528 -189.5)" fill="#9e616a" />
                  <path
                    d="M865.41294,271.81381a20.80155,20.80155,0,0,1,30.97771,27.7512l-26.87728,31.5496-48.12649-12.55323Z"
                    transform="translate(-141.04528 -189.5)" fill="#0c4c64" />
                  <circle cx="869.01643" cy="225.61756" r="29.72869"
                    transform="translate(-142.77094 254.98063) rotate(-28.66318)" fill="#9e616a" />
                  <path
                    d="M864.04528,189.5h19.2041c12.58984,0,22.7959,11.48193,22.7959,25.64563L905.1566,249.5a149.22544,149.22544,0,0,0-39.541,10.57574l-1.79248-7.65448-3.53565,10.08082q-4.7168,2.28533-9.35351,4.99792c3.60791-16.95111,5.09277-33.86285,2.61572-47h-6.50439v-7.1181l-2.208,7.1181h-11.792v-.00006A30.9998,30.9998,0,0,1,864.04528,189.5Z"
                    transform="translate(-141.04528 -189.5)" fill="#2f2e41" />
                  <path d="M1057.95472,710.5h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z"
                    transform="translate(-141.04528 -189.5)" fill="#cacaca" />
                  <path d="M371.04528,427.5a1,1,0,0,1-1-1v-112a1,1,0,0,1,2,0v112A1.00005,1.00005,0,0,1,371.04528,427.5Z"
                    transform="translate(-141.04528 -189.5)" fill="#3f3d56" />
                  <path d="M300.50891,444.88a6.34567,6.34567,0,0,0,0,12.69134h141.0995a6.34568,6.34568,0,0,0,0-12.69134Z"
                    transform="translate(-141.04528 -189.5)" fill="#e4e4e4" />
                  <path
                    d="M338.34293,474.954a6.34568,6.34568,0,1,0-.02677,12.69134h65.45826a6.34567,6.34567,0,1,0,0-12.69134Z"
                    transform="translate(-141.04528 -189.5)" fill="#e4e4e4" />
                  <path d="M505.50891,444.88a6.34567,6.34567,0,0,0,0,12.69134h141.0995a6.34568,6.34568,0,0,0,0-12.69134Z"
                    transform="translate(-141.04528 -189.5)" fill="#e4e4e4" />
                  <path
                    d="M543.34293,474.954a6.34568,6.34568,0,1,0-.02677,12.69134h65.45826a6.34567,6.34567,0,1,0,0-12.69134Z"
                    transform="translate(-141.04528 -189.5)" fill="#e4e4e4" />
                  <path d="M576.04528,427.5a1,1,0,0,1-1-1v-112a1,1,0,0,1,2,0v112A1.00005,1.00005,0,0,1,576.04528,427.5Z"
                    transform="translate(-141.04528 -189.5)" fill="#3f3d56" />
                </svg>
              </div>
              <form class="fade-in-right">
                <div class="wrap-input100 validate-input">
                  <input class="input100" type="password" name="pass" placeholder="Password" v-model="newUser.password"
                    required />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>

                <div class="wrap-input100 validate-input">
                  <input class="input100" type="password" name="confirmpass" placeholder="Confirm password"
                    v-model="confirmPassword" required />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>
              </form>
            </div>
          </Transition>
        </div>
        <div class="container-login100-form-btn">
          <button v-if="parseInt(this.setStepper) < 3" @click="handleNextClick()" class="login100-form-btn"
            style="width: 30%">
            NEXT
          </button>
          <button v-else @click="finishSignUp()" class="login100-form-btn" style="width: 30%">
            Finish signup
          </button>
        </div>

        <div class="text-center" style="margin: 3rem 0">
          <a class="txt2" style="cursor: pointer" @click="login = true">
            Already have an Account?
            <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stepper from "@/components/stepper.vue";
import CreditCardValidator from "credit-card-validator";

export default {
  data() {
    return {
      validatingAccount: false,
      confirmationPin: "",
      confirmPassword: "",
      login: true,
      setStepper: "1",
      validation: true,
      cardHolders: "",
      cardNumber: "",
      month: "",
      year: "",
      cvv: "",
      otherCardMask: "#### #### #### ####",
      isValidCard: false,
      newUser: {
        name: "",
        email: "",
        password: "",
        birthdate: "",
        "phone number": "",
        address: "",
        "postal code": "",
        pin: null,
      },
      user: {
        email: "",
        password: ""
      }
    };
  },
  components: {
    stepper,
  },
  methods: {
    preventDefault(event){
      event.preventDefault()
    },
    async loginUser() {
      try {
        await this.$axios.post("https://cms.4help.tn/api/Authentication_API/login", {
          email: this.user.email,
          password: this.user.password
        }).then((res) => {
          window.localStorage.setItem("token", res.data.token);
          this.$router.push("/userspace");
        })
      } catch (e) {
        if(e.response.data.error === "User account not yet validated") {
            this.validatingAccount = true
          }
      }
    },
    getFutureYears() {
      const currentYear = new Date().getFullYear();
      const futureYears = [];

      for (let i = 0; i < 8; i++) {
        futureYears.push((currentYear + i).toString());
      }

      return futureYears;
    },
    handleCardNumberInput() {
      this.cardNumber = this.cardNumber.replace(/\D/g, "");
      this.cardNumber = this.cardNumber
        .split("") // Convert the string to an array of characters
        .map((char, index) => {
          // Insert a space after every 2 characters (excluding the first character)
          if (index > 0 && index % 4 === 0) {
            return " " + char;
          }
          return char;
        })
        .join(""); // Convert the array back to a string
    },
    SwapFadeEffect() {
      let InLeft = document.getElementsByClassName("fade-in-left");
      let InRight = document.getElementsByClassName("fade-in-right");

      // Loop through the elements and add a new class
      for (var i = 0; i < InLeft.length; i++) {
        InLeft[i].classList.replace("fade-in-left", "fade-out-left");
      }
      for (var i = 0; i < InRight.length; i++) {
        InRight[i].classList.replace("fade-in-right", "fade-out-right");
      }
    },
    async handleNextClick() {
      // && this.validateCard() && this.ValidExpireDate(this.month, this.year)
      if (parseInt(this.setStepper) == 2) {
        this.setStepper = (parseInt(this.setStepper) + 1).toString();
        if (this.newUser.password === this.confirmPassword && this.newUser.password.length > 7) {
          try {
            await this.$axios
              .post(
                "https://cms.4help.tn/api/Authentication_API/register",
                this.newUser
              )
              .then((res) => {
                console.log(res);
              });
          } catch (e) {
            window.alert(e);
          }
        }
        else window.alert("invalid password");
      } else if (parseInt(this.setStepper) == 1 && this.validation) {
        this.setStepper = (parseInt(this.setStepper) + 1).toString();
        this.SwapFadeEffect();
      } else window.alert("invalid inputs");
    },
    async finishSignUp() {

      try {
        await this.$axios
          .post(
            "https://cms.4help.tn/api/Authentication_API/validate-pin",
            { "email": this.newUser.email? this.newUser.email : this.user.email, "pin": this.confirmationPin }
          )
          .then((res) => {
            window.localStorage.setItem("token", res.data.token);
            this.$router.push("/userspace");
          });
      } catch (e) {
        window.alert(e);
      }
      console.log(this.newUser)

    },
    getEighteenYearsAgoDate() {
      const today = new Date();
      const year = today.getFullYear() - 18;
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
      const day = String(today.getDate()).padStart(2, "0");

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
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const currentMonthIndex = new Date().getMonth();
      const inputMonthIndex = months.indexOf(inputMonth);

      // Compare input year and month with current year and month
      if (inputYear > new Date().getFullYear()) {
        return true; // Input year is in the future
      } else if (
        inputYear === new Date().getFullYear() &&
        inputMonthIndex > currentMonthIndex
      ) {
        return true; // Input month is in the future of the current year
      } else {
        return false; // Input year and month are not in the future
      }
    },
    validateCard() {
      // this.isValidCard = CreditCardValidator.number(this.cardNumber) &&
      //     CreditCardValidator.expirationDate(this.month.concat('/',this.year.slice(-2))) &&
      //     CreditCardValidator.cvv(this.cvv);
      return CreditCardValidator.validateCardAndSecCode(
        this.cardNumber,
        this.cvv
      );
    },
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
      return this.cvv + ["#", "#", "#"].splice(this.cvv.length, 3).join("");
    },
  },
};
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
  color: #f48404;
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

.video-bg {
  position: fixed !important;
  right: 0 !important;
  top: 0 !important;
  width: 100% !important;
  height: 100% !important;

  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
  }
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
  color: rgb(0, 0, 0);
}

.txt2 {
  font-family: Poppins-Regular;
  font-size: 1.3em;
  line-height: 1.5;
  color: #919191;
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
  padding: 3rem;
}

.first-signup-step {
  backdrop-filter: invert(4%) !important;
  -webkit-backdrop-filter: invert(4%) !important;
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
  padding: 2vh 7vw 2vh 4vw;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: invert(4%) !important;
  -webkit-backdrop-filter: invert(4%) !important;
}

.login100-pic {
  width: 22dvw;
}

.login100-pic img {
  max-width: 100%;
  transition: ease-in-out 0.5s;
}

.login100-pic:hover img {
  transform: scale(1.2);
  transition: ease-in-out 0.5s;
}

.login100-pic2 {
  width: 26dvw;
}

.login100-pic2 img {
  max-width: 100%;
  transition: ease-in-out 0.5s;
}

.login100-pic2:hover img {
  transform: scale(1.2);
  transition: ease-in-out 0.5s;
}

.last-step-pic2:hover {
  transform: scale(1.2);
  transition: ease-in-out 0.5s;
}

.last-step-pic:hover {
  transform: scale(1.2);
  transition: ease-in-out 0.5s;
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
  color: #f48404bd;
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
  color: #0c4c64;
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

  width: auto;
  height: 4rem;
  border-radius: 25px;
  background: #f48404;
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
  background: #ffa33a;
}

.text-center {
  text-align: center;
}

.p-t-12 {
  padding-top: 4vh;
}

.p-t-17vh {
  padding-top: 1vh;
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
  background-color: #f48404;
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
  letter-spacing: 0.5em;
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
