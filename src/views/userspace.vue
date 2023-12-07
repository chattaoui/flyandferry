<template>
    <div id="userspace">
        <div class="app">
            <div class="header">
                <div to="/" class="menu-circle">
                    <img @click="$router.push({ name: 'home' })" style="cursor: pointer;" src="html_template/img/logo.png">
                </div>
                <div class="search-bar">
                    <input type="text" placeholder="Search">
                </div>
                <div class="header-profile">
                    <div class="notification">
                        <span class="notification-number">3</span>
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                        </svg>
                    </div>
                    <svg viewBox="0 0 512 512" fill="currentColor">
                        <path
                            d="M448.773 235.551A135.893 135.893 0 00451 211c0-74.443-60.557-135-135-135-47.52 0-91.567 25.313-115.766 65.537-32.666-10.59-66.182-6.049-93.794 12.979-27.612 19.013-44.092 49.116-45.425 82.031C24.716 253.788 0 290.497 0 331c0 7.031 1.703 13.887 3.006 20.537l.015.015C12.719 400.492 56.034 436 106 436h300c57.891 0 106-47.109 106-105 0-40.942-25.053-77.798-63.227-95.449z" />
                    </svg>
                    <img class="profile-img"
                        src="https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                        alt="">
                </div>
            </div>
            <div class="wrapper">
                <div class="left-side">
                    <div class="side-wrapper">
                        <div class="side-menu">
                            <a href="#" @click="selectedMenu = 'payment'"
                                :class="{ 'selected-menu': selectedMenu === 'payment' }">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                </svg>
                                Payment
                            </a>
                            <a href="#" @click="selectedMenu = 'voyages'"
                                :class="{ 'selected-menu': selectedMenu === 'voyages' }">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                    viewBox="0 0 99.401 152.04874999999998"
                                    style="enable-background:new 0 0 99.401 121.639;" xml:space="preserve">
                                    <g>
                                        <polygon points="83.11,45.463 83.129,47.459 85.144,47.459 85.125,45.444  " />
                                        <polygon points="60.146,35.967 60.165,37.963 62.18,37.963 62.161,35.948  " />
                                        <polygon points="25.758,47.478 27.754,47.459 27.754,45.444 25.739,45.463  " />
                                        <polygon points="60.146,45.463 60.165,47.459 62.18,47.459 62.161,45.444  " />
                                        <polygon points="71.628,35.967 71.647,37.963 73.662,37.963 73.643,35.948  " />
                                        <polygon points="71.628,45.463 71.647,47.459 73.662,47.459 73.643,45.444  " />
                                        <polygon
                                            points="58.89,8.242 57.84,8.242 53.735,8.242 45.666,8.242 41.561,8.242 40.512,8.242 40.512,12.455 58.89,12.455  " />
                                        <polygon points="59.186,21.49 90.824,21.49 90.824,18.265 58.88,18.265  " />
                                        <polygon points="42.224,21.49 57.177,21.49 56.871,18.265 42.53,18.265  " />
                                        <polygon points="14.276,37.982 16.272,37.963 16.272,35.948 14.257,35.967  " />
                                        <polygon points="14.276,47.478 16.272,47.459 16.272,45.444 14.257,45.463  " />
                                        <polygon points="37.24,47.478 39.237,47.459 39.237,45.444 37.222,45.463  " />
                                        <polygon points="25.758,37.982 27.754,37.963 27.754,35.948 25.739,35.967  " />
                                        <polygon points="37.24,37.982 39.237,37.963 39.237,35.948 37.222,35.967  " />
                                        <polygon points="48.723,37.982 50.719,37.963 50.719,35.948 48.704,35.967  " />
                                        <polygon points="48.723,47.478 50.719,47.459 50.719,45.444 48.704,45.463  " />
                                        <polygon points="40.521,18.265 8.577,18.265 8.577,21.49 40.215,21.49  " />
                                        <path
                                            d="M6.586,29.774h86.229l0.938-3.825c0.146-0.597,0.013-1.216-0.366-1.699c-0.379-0.483-0.949-0.76-1.563-0.76H7.577   c-0.614,0-1.184,0.277-1.563,0.76c-0.379,0.483-0.513,1.103-0.366,1.699L6.586,29.774z" />
                                        <polygon points="42.891,14.455 42.72,16.265 56.682,16.265 56.51,14.455  " />
                                        <path d="M50.701,98.155h37.432c0.615-1,1.242-2.028,1.876-3.076H50.701V98.155z" />
                                        <rect x="42.561" width="2.105" height="6.242" />
                                        <polygon points="21.902,56.353 21.902,53.449 13.971,53.449 13.971,57.988  " />
                                        <path
                                            d="M96.596,62.331l-45.896-9.458v40.206h40.513c2.599-4.332,5.274-8.907,7.723-13.178c0.304-0.53,0.464-1.134,0.464-1.746   V65.773C99.401,64.114,98.222,62.666,96.596,62.331z M72.02,79.835c-2.381,0-4.31-3.934-4.31-8.787s1.93-8.787,4.31-8.787   c2.381,0,4.31,3.934,4.31,8.787S74.401,79.835,72.02,79.835z M83.887,77.284c-1.689,0-3.059-2.792-3.059-6.235   s1.37-6.235,3.059-6.235s3.059,2.792,3.059,6.235S85.576,77.284,83.887,77.284z M93.59,75.225c-1.131,0-2.049-1.87-2.049-4.176   s0.917-4.176,2.049-4.176c1.131,0,2.049,1.87,2.049,4.176S94.721,75.225,93.59,75.225z" />
                                        <path
                                            d="M48.701,52.872L2.805,62.331C1.18,62.666,0,64.114,0,65.773v12.382c0,0.612,0.161,1.216,0.464,1.746   c2.449,4.27,5.124,8.846,7.723,13.178h40.513V52.872z M5.812,75.225c-1.131,0-2.049-1.87-2.049-4.176s0.917-4.176,2.049-4.176   c1.131,0,2.049,1.87,2.049,4.176S6.943,75.225,5.812,75.225z M15.515,77.284c-1.689,0-3.059-2.792-3.059-6.235   s1.37-6.235,3.059-6.235s3.059,2.792,3.059,6.235S17.204,77.284,15.515,77.284z M27.381,79.835c-2.381,0-4.31-3.934-4.31-8.787   s1.93-8.787,4.31-8.787c2.381,0,4.31,3.934,4.31,8.787S29.762,79.835,27.381,79.835z" />
                                        <path d="M48.701,95.079H9.393c0.634,1.048,1.261,2.076,1.876,3.076h37.432V95.079z" />
                                        <rect x="54.735" width="2.105" height="6.242" />
                                        <path
                                            d="M20.932,112.217c2.826,2.33,11.427,9.422,28.769,9.422s25.943-7.092,28.769-9.422c1.362-1.123,4.578-5.886,8.425-12.063   H12.506C16.353,106.331,19.57,111.094,20.932,112.217z" />
                                        <polygon points="83.11,35.967 83.129,37.963 85.144,37.963 85.125,35.948  " />
                                        <path
                                            d="M89.038,58.731V31.774H10.364v26.957l1.607-0.331v-5.951c0-0.552,0.448-1,1-1h9.932c0.552,0,1,0.448,1,1v3.492l1.356-0.279   v-3.213c0-0.552,0.448-1,1-1h19.441l3.8-0.783c0.033-0.007,0.067,0.003,0.1,0c0.035-0.004,0.066-0.021,0.102-0.021   s0.067,0.017,0.102,0.021c0.033,0.003,0.067-0.007,0.1,0l3.8,0.783h19.441c0.552,0,1,0.448,1,1v3.213l1.356,0.279v-3.492   c0-0.552,0.448-1,1-1h9.932c0.552,0,1,0.448,1,1V58.4L89.038,58.731z M18.272,47.478c0,1.092-0.889,1.981-1.981,1.981h-2.034   c-1.093,0-1.981-0.889-1.981-1.981v-2.034c0-1.092,0.889-1.981,1.981-1.981h2.034c1.093,0,1.981,0.889,1.981,1.981V47.478z    M18.272,37.982c0,1.092-0.889,1.981-1.981,1.981h-2.034c-1.093,0-1.981-0.889-1.981-1.981v-2.034c0-1.092,0.889-1.981,1.981-1.981   h2.034c1.093,0,1.981,0.889,1.981,1.981V37.982z M29.754,47.478c0,1.092-0.889,1.981-1.981,1.981h-2.034   c-1.092,0-1.981-0.889-1.981-1.981v-2.034c0-1.092,0.889-1.981,1.981-1.981h2.034c1.092,0,1.981,0.889,1.981,1.981V47.478z    M29.754,37.982c0,1.092-0.889,1.981-1.981,1.981h-2.034c-1.092,0-1.981-0.889-1.981-1.981v-2.034c0-1.092,0.889-1.981,1.981-1.981   h2.034c1.092,0,1.981,0.889,1.981,1.981V37.982z M41.237,47.478c0,1.092-0.889,1.981-1.981,1.981h-2.034   c-1.093,0-1.981-0.889-1.981-1.981v-2.034c0-1.092,0.889-1.981,1.981-1.981h2.034c1.093,0,1.981,0.889,1.981,1.981V47.478z    M41.237,37.982c0,1.092-0.889,1.981-1.981,1.981h-2.034c-1.093,0-1.981-0.889-1.981-1.981v-2.034c0-1.092,0.889-1.981,1.981-1.981   h2.034c1.093,0,1.981,0.889,1.981,1.981V37.982z M52.719,47.478c0,1.092-0.889,1.981-1.981,1.981h-2.034   c-1.092,0-1.981-0.889-1.981-1.981v-2.034c0-1.092,0.889-1.981,1.981-1.981h2.034c1.092,0,1.981,0.889,1.981,1.981V47.478z    M52.719,37.982c0,1.092-0.889,1.981-1.981,1.981h-2.034c-1.092,0-1.981-0.889-1.981-1.981v-2.034c0-1.092,0.889-1.981,1.981-1.981   h2.034c1.092,0,1.981,0.889,1.981,1.981V37.982z M64.161,47.478c0,1.092-0.889,1.981-1.981,1.981h-2.034   c-1.093,0-1.981-0.889-1.981-1.981v-2.034c0-1.092,0.889-1.981,1.981-1.981h2.034c1.093,0,1.981,0.889,1.981,1.981V47.478z    M64.161,37.982c0,1.092-0.889,1.981-1.981,1.981h-2.034c-1.093,0-1.981-0.889-1.981-1.981v-2.034c0-1.092,0.889-1.981,1.981-1.981   h2.034c1.093,0,1.981,0.889,1.981,1.981V37.982z M75.643,47.478c0,1.092-0.889,1.981-1.981,1.981h-2.034   c-1.092,0-1.981-0.889-1.981-1.981v-2.034c0-1.092,0.889-1.981,1.981-1.981h2.034c1.092,0,1.981,0.889,1.981,1.981V47.478z    M75.643,37.982c0,1.092-0.889,1.981-1.981,1.981h-2.034c-1.092,0-1.981-0.889-1.981-1.981v-2.034c0-1.092,0.889-1.981,1.981-1.981   h2.034c1.092,0,1.981,0.889,1.981,1.981V37.982z M87.125,47.478c0,1.092-0.889,1.981-1.981,1.981H83.11   c-1.093,0-1.981-0.889-1.981-1.981v-2.034c0-1.092,0.889-1.981,1.981-1.981h2.034c1.093,0,1.981,0.889,1.981,1.981V47.478z    M87.125,37.982c0,1.092-0.889,1.981-1.981,1.981H83.11c-1.093,0-1.981-0.889-1.981-1.981v-2.034c0-1.092,0.889-1.981,1.981-1.981   h2.034c1.093,0,1.981,0.889,1.981,1.981V37.982z" />
                                        <polygon points="72.143,53.449 63.407,53.449 72.143,55.249  " />
                                        <polygon points="85.431,57.988 85.431,53.449 77.499,53.449 77.499,56.353  " />
                                        <polygon points="35.995,53.449 27.258,53.449 27.258,55.249  " />
                                    </g>
                                </svg>
                                Voyages
                            </a>
                            <a href="#" @click="selectedMenu = 'history'"
                                :class="{ 'selected-menu': selectedMenu === 'history' }">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 101.33605 112.21565" x="0px" y="0px">
                                    <g data-name="Camada 2">
                                        <g data-name="Your Icon">
                                            <path
                                                d="M62.94653.47856A44.87788,44.87788,0,0,0,11.91847,39.31448l.00254.00368L1.98264,37.86438A1.7278,1.7278,0,0,0,.37,40.636L13.97346,58.08664a1.72748,1.72748,0,0,0,2.39483.323L33.71,45.4858a1.72785,1.72785,0,0,0-.78281-3.09487l-9.91061-1.44972c.02044-.31251.06563-.62141.11082-.93031A33.67082,33.67082,0,1,1,37.47818,72.716a5.55718,5.55718,0,0,0-6.45515.16163,5.61515,5.61515,0,0,0,.22328,9.14836A44.8824,44.8824,0,1,0,62.94653.47856Z" />
                                            <path
                                                d="M59.3735,20.97847h-.00061A5.41636,5.41636,0,0,0,53.95663,26.395V43.6812L39.9785,53.94475a5.41663,5.41663,0,0,0,6.412,8.73191l18.32431-13.455h.075V26.395A5.41636,5.41636,0,0,0,59.3735,20.97847Z" />
                                        </g>
                                    </g>
                                </svg>
                                Historique
                            </a>
                        </div>
                    </div>
                </div>
                <div id="payment" class="main-container" v-if="selectedMenu === 'payment'">
                    <div class="content-wrapper">
                        <div class="content-section">
                            <div style="width:40%;align-self:center;">
                                <stepper :activeItem="`1`" :steps="3" :buttonColor="'#084C61'" />
                            </div>
                            <div style="align-self: center;">
                                <!-- <div class="faq" id="accordion">
                                    https://codepen.io/baahubali92/embed/LMBLwp?
                            <div class="card">
                                <div class="card-header" id="faqHeading-1">
                                    <div class="mb-0">
                                        <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-1" data-aria-expanded="true" data-aria-controls="faqCollapse-1">
                                            <span class="badge">1</span>What is Lorem Ipsum?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-1" class="collapse" aria-labelledby="faqHeading-1" data-parent="#accordion">
                                    <div class="card-body"> -->
                                <form v-for="passenger in passengers" class="passenger-form">
                                    <div class="flex">
                                        <label>
                                            <span>Title</span>
                                            <select>
                                                <option value="Mr">Mr</option>
                                                <option value="Mrs">Mrs</option>
                                            </select>
                                        </label>

                                        <label>
                                            <span>First Name</span>
                                            <input required="" placeholder="" type="text" class="input">
                                        </label>
                                    </div>

                                    <label>
                                        <span>Last Name</span>
                                        <input required="" placeholder="" type="email" class="input">
                                    </label>

                                    <div class="flex">
                                        <label>
                                            <span>Gender</span>
                                            <select>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </label>

                                        <label>
                                            <span>Date of birth</span>
                                            <input required="" placeholder="" type="date" class="input">
                                        </label>
                                    </div>

                                    <div class="flex">
                                        <label>
                                            <span>Country</span>
                                            <select>
                                                <option value="Tunis">Tunisia</option>
                                            </select>
                                        </label>

                                        <label>
                                            <span>Place of birth</span>
                                            <input required="" placeholder="" type="txt" class="input">
                                        </label>
                                    </div>

                                    <div class="flex">
                                        <label>
                                            <span>Place of birth</span>
                                            <input required="" placeholder="" type="txt" class="input">
                                        </label>

                                        <label>
                                            <span>Type of id</span>
                                            <select v-model="passengerDetails.typeOfId">
                                                <option value="Passport">Passport</option>
                                                <option value="CIN">CIN</option>
                                            </select>
                                        </label>
                                    </div>

                                    <div class="flex">
                                        <label>
                                            <span>Id Number</span>
                                            <input required="" placeholder="" type="txt" class="input">
                                        </label>

                                        <label v-if="passengerDetails.typeOfId === 'Passport'">
                                            <span>Passport expiration date</span>
                                            <input required="" placeholder="" type="date" class="input">
                                        </label>
                                    </div>
                                </form>
                                <button class="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="voyages" class="main-container" v-if="selectedMenu === 'voyages'">
                    <div class="content-wrapper">
                        <div class="content-section">
                            <div class="content-section-title">Installed</div>
                            <ul>
                                <li class="adobe-product">
                                    <div class="products">
                                        <svg viewBox="0 0 52 52" style="border:1px solid #3291b8">
                                            <g xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                                                    fill="#061e26" data-original="#393687" />
                                                <path
                                                    d="M12.16 39H9.28V11h9.64c2.613 0 4.553.813 5.82 2.44 1.266 1.626 1.9 3.76 1.9 6.399 0 .934-.027 1.74-.08 2.42-.054.681-.22 1.534-.5 2.561-.28 1.026-.66 1.866-1.14 2.52-.48.654-1.213 1.227-2.2 1.72-.987.494-2.16.74-3.52.74h-7.04V39zm0-12h6.68c.96 0 1.773-.187 2.44-.56.666-.374 1.153-.773 1.46-1.2.306-.427.546-1.04.72-1.84.173-.801.267-1.4.28-1.801.013-.399.02-.973.02-1.72 0-4.053-1.694-6.08-5.08-6.08h-6.52V27zM29.48 33.92l2.8-.12c.106.987.6 1.754 1.48 2.3.88.547 1.893.82 3.04.82s2.14-.26 2.98-.78c.84-.52 1.26-1.266 1.26-2.239s-.36-1.747-1.08-2.32c-.72-.573-1.6-1.026-2.64-1.36-1.04-.333-2.086-.686-3.14-1.06a7.36 7.36 0 01-2.78-1.76c-.987-.934-1.48-2.073-1.48-3.42s.54-2.601 1.62-3.761 2.833-1.739 5.26-1.739c.854 0 1.653.1 2.4.3.746.2 1.28.394 1.6.58l.48.279-.92 2.521c-.854-.666-1.974-1-3.36-1-1.387 0-2.42.26-3.1.78-.68.52-1.02 1.18-1.02 1.979 0 .88.426 1.574 1.28 2.08.853.507 1.813.934 2.88 1.28 1.066.347 2.126.733 3.18 1.16 1.053.427 1.946 1.094 2.68 2s1.1 2.106 1.1 3.6c0 1.494-.6 2.794-1.8 3.9-1.2 1.106-2.954 1.66-5.26 1.66-2.307 0-4.114-.547-5.42-1.64-1.307-1.093-1.987-2.44-2.04-4.04z"
                                                    fill="#c1dbe6" data-original="#89d3ff" />
                                            </g>
                                        </svg>
                                        Photoshop
                                    </div>
                                    <span class="status">
                                        <span class="status-circle green"></span>
                                        Updated</span>
                                    <div class="button-wrapper">
                                        <button class="content-button status-button open">Open</button>
                                        <div class="menu">
                                            <button class="dropdown">
                                                <ul>
                                                    <li><a href="#">Go to Discover</a></li>
                                                    <li><a href="#">Learn more</a></li>
                                                    <li><a href="#">Uninstall</a></li>
                                                </ul>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="adobe-product">
                                    <div class="products">
                                        <svg viewBox="0 0 52 52" style="border:1px solid #b65a0b">
                                            <g xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                                                    fill="#261400" data-original="#6d4c13" />
                                                <path
                                                    d="M30.68 39h-3.24l-2.76-9.04h-8.32L13.72 39H10.6l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L17.12 27h6.84zM37.479 12.24c0 .453-.16.84-.48 1.16-.32.319-.7.479-1.14.479-.44 0-.827-.166-1.16-.5-.334-.333-.5-.713-.5-1.14s.166-.807.5-1.141c.333-.333.72-.5 1.16-.5.44 0 .82.16 1.14.48.321.322.48.709.48 1.162zM37.24 39h-2.88V18.96h2.88V39z"
                                                    fill="#e6d2c0" data-original="#ffbd2e" />
                                            </g>
                                        </svg>
                                        Illustrator
                                    </div>

                                    <span class="status">
                                        <span class="status-circle"></span>
                                        Update Available</span>
                                    <div class="button-wrapper">
                                        <button class="content-button status-button">Update this app</button>
                                        <div class="pop-up">
                                            <div class="pop-up__title">Update This App
                                                <svg width="24" height="24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather close feather-x-circle">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="M15 9l-6 6M9 9l6 6" />
                                                </svg>
                                            </div>
                                            <div class="pop-up__subtitle">Adjust your selections for advanced options as
                                                desired
                                                before continuing. <a href="#">Learn more</a></div>
                                            <div class="checkbox-wrapper">
                                                <input type="checkbox" id="check1" class="checkbox">
                                                <label for="check1">Import previous settings and preferences</label>
                                            </div>
                                            <div class="checkbox-wrapper">
                                                <input type="checkbox" id="check2" class="checkbox">
                                                <label for="check2">Remove old versions</label>
                                            </div>
                                            <div class="content-button-wrapper">
                                                <button class="content-button status-button open close">Cancel</button>
                                                <button class="content-button status-button">Continue</button>
                                            </div>
                                        </div>
                                        <div class="menu">
                                            <button class="dropdown">
                                                <ul>
                                                    <li><a href="#">Go to Discover</a></li>
                                                    <li><a href="#">Learn more</a></li>
                                                    <li><a href="#">Uninstall</a></li>
                                                </ul>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="adobe-product">
                                    <div class="products">
                                        <svg viewBox="0 0 52 52" style="border: 1px solid #C75DEB">
                                            <g xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                                                    fill="#3a3375" data-original="#3a3375" />
                                                <path
                                                    d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z"
                                                    fill="#e4d1eb" data-original="#e7adfb" />
                                            </g>
                                        </svg>
                                        After Effects
                                    </div>
                                    <span class="status">
                                        <span class="status-circle green"></span>
                                        Updated</span>
                                    <div class="button-wrapper">
                                        <button class="content-button status-button open">Open</button>
                                        <div class="menu">
                                            <button class="dropdown">
                                                <ul>
                                                    <li><a href="#">Go to Discover</a></li>
                                                    <li><a href="#">Learn more</a></li>
                                                    <li><a href="#">Uninstall</a></li>
                                                </ul>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <div class="content-section-title">Apps in your plan</div>
                            <div class="apps-card">
                                <div class="app-card">
                                    <span>
                                        <svg viewBox="0 0 512 512" style="border: 1px solid #a059a9">
                                            <path xmlns="http://www.w3.org/2000/svg"
                                                d="M480 0H32C14.368 0 0 14.368 0 32v448c0 17.664 14.368 32 32 32h448c17.664 0 32-14.336 32-32V32c0-17.632-14.336-32-32-32z"
                                                fill="#210027" data-original="#7b1fa2" />
                                            <g xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M192 64h-80c-8.832 0-16 7.168-16 16v352c0 8.832 7.168 16 16 16s16-7.168 16-16V256h64c52.928 0 96-43.072 96-96s-43.072-96-96-96zm0 160h-64V96h64c35.296 0 64 28.704 64 64s-28.704 64-64 64zM400 256h-32c-18.08 0-34.592 6.24-48 16.384V272c0-8.864-7.168-16-16-16s-16 7.136-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16v-96c0-26.464 21.536-48 48-48h32c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
                                                    fill="#f6e7fa" data-original="#e1bee7" />
                                            </g>
                                        </svg>
                                        Premiere Pro
                                    </span>
                                    <div class="app-card__subtext">Edit, master and create fully proffesional videos</div>
                                    <div class="app-card-buttons">
                                        <button class="content-button status-button">Update</button>
                                        <div class="menu"></div>
                                    </div>
                                </div>
                                <div class="app-card">
                                    <span>
                                        <svg viewBox="0 0 52 52" style="border: 1px solid #c1316d">
                                            <g xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                                                    fill="#2f0015" data-original="#6f2b41" />
                                                <path
                                                    d="M18.08 39H15.2V13.72l-2.64-.08V11h5.52v28zM27.68 19.4c1.173-.507 2.593-.761 4.26-.761s3.073.374 4.22 1.12V11h2.88v28c-2.293.32-4.414.48-6.36.48-1.947 0-3.707-.4-5.28-1.2-2.08-1.066-3.12-2.92-3.12-5.561v-7.56c0-2.799 1.133-4.719 3.4-5.759zm8.48 3.12c-1.387-.746-2.907-1.119-4.56-1.119-1.574 0-2.714.406-3.42 1.22-.707.813-1.06 1.847-1.06 3.1v7.12c0 1.227.44 2.188 1.32 2.88.96.719 2.146 1.079 3.56 1.079 1.413 0 2.8-.106 4.16-.319V22.52z"
                                                    fill="#e1c1cf" data-original="#ff70bd" />
                                            </g>
                                        </svg>
                                        InDesign
                                    </span>
                                    <div class="app-card__subtext">Design and publish great projects & mockups</div>
                                    <div class="app-card-buttons">
                                        <button class="content-button status-button">Update</button>
                                        <div class="menu"></div>
                                    </div>
                                </div>
                                <div class="app-card">
                                    <span>
                                        <svg viewBox="0 0 52 52" style="border: 1px solid #C75DEB">
                                            <g xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                                                    fill="#3a3375" data-original="#3a3375" />
                                                <path
                                                    d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z"
                                                    fill="#e4d1eb" data-original="#e7adfb" />
                                            </g>
                                        </svg>
                                        After Effects
                                    </span>
                                    <div class="app-card__subtext">Industry Standart motion graphics & visual effects</div>
                                    <div class="app-card-buttons">
                                        <button class="content-button status-button">Update</button>
                                        <div class="menu"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="history" class="main-container" v-if="selectedMenu === 'history'">
                    <div class="content-wrapper">
                        <div class="content-section">
                            <div class="content-section-title">Historique</div>
                            <ul>
                                <li class="adobe-product">
                                    <div class="products">
                                        <svg viewBox="0 0 52 52" style="border:1px solid #3291b8">
                                            <g xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                                                    fill="#061e26" data-original="#393687" />
                                                <path
                                                    d="M12.16 39H9.28V11h9.64c2.613 0 4.553.813 5.82 2.44 1.266 1.626 1.9 3.76 1.9 6.399 0 .934-.027 1.74-.08 2.42-.054.681-.22 1.534-.5 2.561-.28 1.026-.66 1.866-1.14 2.52-.48.654-1.213 1.227-2.2 1.72-.987.494-2.16.74-3.52.74h-7.04V39zm0-12h6.68c.96 0 1.773-.187 2.44-.56.666-.374 1.153-.773 1.46-1.2.306-.427.546-1.04.72-1.84.173-.801.267-1.4.28-1.801.013-.399.02-.973.02-1.72 0-4.053-1.694-6.08-5.08-6.08h-6.52V27zM29.48 33.92l2.8-.12c.106.987.6 1.754 1.48 2.3.88.547 1.893.82 3.04.82s2.14-.26 2.98-.78c.84-.52 1.26-1.266 1.26-2.239s-.36-1.747-1.08-2.32c-.72-.573-1.6-1.026-2.64-1.36-1.04-.333-2.086-.686-3.14-1.06a7.36 7.36 0 01-2.78-1.76c-.987-.934-1.48-2.073-1.48-3.42s.54-2.601 1.62-3.761 2.833-1.739 5.26-1.739c.854 0 1.653.1 2.4.3.746.2 1.28.394 1.6.58l.48.279-.92 2.521c-.854-.666-1.974-1-3.36-1-1.387 0-2.42.26-3.1.78-.68.52-1.02 1.18-1.02 1.979 0 .88.426 1.574 1.28 2.08.853.507 1.813.934 2.88 1.28 1.066.347 2.126.733 3.18 1.16 1.053.427 1.946 1.094 2.68 2s1.1 2.106 1.1 3.6c0 1.494-.6 2.794-1.8 3.9-1.2 1.106-2.954 1.66-5.26 1.66-2.307 0-4.114-.547-5.42-1.64-1.307-1.093-1.987-2.44-2.04-4.04z"
                                                    fill="#c1dbe6" data-original="#89d3ff" />
                                            </g>
                                        </svg>
                                        Photoshop
                                    </div>
                                    <span class="status">
                                        <span class="status-circle green"></span>
                                        Updated</span>
                                    <div class="button-wrapper">
                                        <button class="content-button status-button open">Open</button>
                                        <div class="menu">
                                            <button class="dropdown">
                                                <ul>
                                                    <li><a href="#">Go to Discover</a></li>
                                                    <li><a href="#">Learn more</a></li>
                                                    <li><a href="#">Uninstall</a></li>
                                                </ul>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="adobe-product">
                                    <div class="products">
                                        <svg viewBox="0 0 52 52" style="border:1px solid #b65a0b">
                                            <g xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                                                    fill="#261400" data-original="#6d4c13" />
                                                <path
                                                    d="M30.68 39h-3.24l-2.76-9.04h-8.32L13.72 39H10.6l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L17.12 27h6.84zM37.479 12.24c0 .453-.16.84-.48 1.16-.32.319-.7.479-1.14.479-.44 0-.827-.166-1.16-.5-.334-.333-.5-.713-.5-1.14s.166-.807.5-1.141c.333-.333.72-.5 1.16-.5.44 0 .82.16 1.14.48.321.322.48.709.48 1.162zM37.24 39h-2.88V18.96h2.88V39z"
                                                    fill="#e6d2c0" data-original="#ffbd2e" />
                                            </g>
                                        </svg>
                                        Illustrator
                                    </div>

                                    <span class="status">
                                        <span class="status-circle"></span>
                                        Update Available</span>
                                    <div class="button-wrapper">
                                        <button class="content-button status-button">Update this app</button>
                                        <div class="pop-up">
                                            <div class="pop-up__title">Update This App
                                                <svg width="24" height="24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather close feather-x-circle">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="M15 9l-6 6M9 9l6 6" />
                                                </svg>
                                            </div>
                                            <div class="pop-up__subtitle">Adjust your selections for advanced options as
                                                desired
                                                before continuing. <a href="#">Learn more</a></div>
                                            <div class="checkbox-wrapper">
                                                <input type="checkbox" id="check1" class="checkbox">
                                                <label for="check1">Import previous settings and preferences</label>
                                            </div>
                                            <div class="checkbox-wrapper">
                                                <input type="checkbox" id="check2" class="checkbox">
                                                <label for="check2">Remove old versions</label>
                                            </div>
                                            <div class="content-button-wrapper">
                                                <button class="content-button status-button open close">Cancel</button>
                                                <button class="content-button status-button">Continue</button>
                                            </div>
                                        </div>
                                        <div class="menu">
                                            <button class="dropdown">
                                                <ul>
                                                    <li><a href="#">Go to Discover</a></li>
                                                    <li><a href="#">Learn more</a></li>
                                                    <li><a href="#">Uninstall</a></li>
                                                </ul>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="adobe-product">
                                    <div class="products">
                                        <svg viewBox="0 0 52 52" style="border: 1px solid #C75DEB">
                                            <g xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                                                    fill="#3a3375" data-original="#3a3375" />
                                                <path
                                                    d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z"
                                                    fill="#e4d1eb" data-original="#e7adfb" />
                                            </g>
                                        </svg>
                                        After Effects
                                    </div>
                                    <span class="status">
                                        <span class="status-circle green"></span>
                                        Updated</span>
                                    <div class="button-wrapper">
                                        <button class="content-button status-button open">Open</button>
                                        <div class="menu">
                                            <button class="dropdown">
                                                <ul>
                                                    <li><a href="#">Go to Discover</a></li>
                                                    <li><a href="#">Learn more</a></li>
                                                    <li><a href="#">Uninstall</a></li>
                                                </ul>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <div class="content-section-title">Apps in your plan</div>
                            <div class="apps-card">
                                <div class="app-card">
                                    <span>
                                        <svg viewBox="0 0 512 512" style="border: 1px solid #a059a9">
                                            <path xmlns="http://www.w3.org/2000/svg"
                                                d="M480 0H32C14.368 0 0 14.368 0 32v448c0 17.664 14.368 32 32 32h448c17.664 0 32-14.336 32-32V32c0-17.632-14.336-32-32-32z"
                                                fill="#210027" data-original="#7b1fa2" />
                                            <g xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M192 64h-80c-8.832 0-16 7.168-16 16v352c0 8.832 7.168 16 16 16s16-7.168 16-16V256h64c52.928 0 96-43.072 96-96s-43.072-96-96-96zm0 160h-64V96h64c35.296 0 64 28.704 64 64s-28.704 64-64 64zM400 256h-32c-18.08 0-34.592 6.24-48 16.384V272c0-8.864-7.168-16-16-16s-16 7.136-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16v-96c0-26.464 21.536-48 48-48h32c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
                                                    fill="#f6e7fa" data-original="#e1bee7" />
                                            </g>
                                        </svg>
                                        Premiere Pro
                                    </span>
                                    <div class="app-card__subtext">Edit, master and create fully proffesional videos</div>
                                    <div class="app-card-buttons">
                                        <button class="content-button status-button">Update</button>
                                        <div class="menu"></div>
                                    </div>
                                </div>
                                <div class="app-card">
                                    <span>
                                        <svg viewBox="0 0 52 52" style="border: 1px solid #c1316d">
                                            <g xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                                                    fill="#2f0015" data-original="#6f2b41" />
                                                <path
                                                    d="M18.08 39H15.2V13.72l-2.64-.08V11h5.52v28zM27.68 19.4c1.173-.507 2.593-.761 4.26-.761s3.073.374 4.22 1.12V11h2.88v28c-2.293.32-4.414.48-6.36.48-1.947 0-3.707-.4-5.28-1.2-2.08-1.066-3.12-2.92-3.12-5.561v-7.56c0-2.799 1.133-4.719 3.4-5.759zm8.48 3.12c-1.387-.746-2.907-1.119-4.56-1.119-1.574 0-2.714.406-3.42 1.22-.707.813-1.06 1.847-1.06 3.1v7.12c0 1.227.44 2.188 1.32 2.88.96.719 2.146 1.079 3.56 1.079 1.413 0 2.8-.106 4.16-.319V22.52z"
                                                    fill="#e1c1cf" data-original="#ff70bd" />
                                            </g>
                                        </svg>
                                        InDesign
                                    </span>
                                    <div class="app-card__subtext">Design and publish great projects & mockups</div>
                                    <div class="app-card-buttons">
                                        <button class="content-button status-button">Update</button>
                                        <div class="menu"></div>
                                    </div>
                                </div>
                                <div class="app-card">
                                    <span>
                                        <svg viewBox="0 0 52 52" style="border: 1px solid #C75DEB">
                                            <g xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                                                    fill="#3a3375" data-original="#3a3375" />
                                                <path
                                                    d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z"
                                                    fill="#e4d1eb" data-original="#e7adfb" />
                                            </g>
                                        </svg>
                                        After Effects
                                    </span>
                                    <div class="app-card__subtext">Industry Standart motion graphics & visual effects</div>
                                    <div class="app-card-buttons">
                                        <button class="content-button status-button">Update</button>
                                        <div class="menu"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overlay-app"></div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import stepper from "@/components/stepper.vue";

export default defineComponent({

    components: {
        stepper,
    },

    data() {

        return {
            selectedMenu: "payment",
            passengerDetails: {
            },
            passengers: [],
        }

    },

    computed: {},

    watch: {},

    methods: {
        navMenuInit() {
            const menuLinks = this.$el.querySelectorAll(".menu-link");
            menuLinks.forEach((link) => {
                link.addEventListener("click", () => {
                    menuLinks.forEach((link) => {
                        link.classList.remove("is-active");
                    });
                    link.classList.add("is-active");
                });
            });

            const mainHeaderLinks = this.$el.querySelectorAll(".main-header-link");
            mainHeaderLinks.forEach((link) => {
                link.addEventListener("click", () => {
                    mainHeaderLinks.forEach((link) => {
                        link.classList.remove("is-active");
                    });
                    link.classList.add("is-active");
                });
            });

            const dropdowns = this.$el.querySelectorAll(".dropdown");
            dropdowns.forEach((dropdown) => {
                dropdown.addEventListener("click", (e) => {
                    e.stopPropagation();
                    dropdowns.forEach((c) => {
                        c.classList.remove("is-active");
                    });
                    dropdown.classList.add("is-active");
                });
            });

            const searchBarInput = this.$el.querySelector(".search-bar input");
            searchBarInput.addEventListener("focus", () => {
                this.$el.querySelector(".header").classList.add("wide");
            });
            searchBarInput.addEventListener("blur", () => {
                this.$el.querySelector(".header").classList.remove("wide");
            });

            document.addEventListener("click", (e) => {
                const container = this.$el.querySelector(".status-button");
                const dd = this.$el.querySelector(".dropdown");
                if (container) {
                    if (!container.contains(e.target) && !container.isSameNode(e.target)) {
                        dd.classList.remove("is-active");
                    }
                }
            });

            dropdowns.forEach((dropdown) => {
                dropdown.addEventListener("click", (e) => {
                    this.$el.querySelector(".content-wrapper").classList.add("overlay");
                    e.stopPropagation();
                });
                document.addEventListener("click", (e) => {
                    if (!e.target.classList.contains("dropdown")) {
                        this.$el.querySelector(".content-wrapper").classList.remove("overlay");
                    }
                });
            });

            const statusButtons = this.$el.querySelectorAll(".status-button:not(.open)");
            statusButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    this.$el.querySelector(".overlay-app").classList.add("is-active");
                });
            });

            const popUpCloseButtons = this.$el.querySelectorAll(".pop-up .close");
            popUpCloseButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    this.$el.querySelector(".overlay-app").classList.remove("is-active");
                });
            });

            statusButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    this.$el.querySelector(".pop-up").classList.add("visible");
                });
            });

            popUpCloseButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    this.$el.querySelector(".pop-up").classList.remove("visible");
                });
            });
        },
    },

    mounted() {
        this.passengers = JSON.parse(window.localStorage.getItem("tripOptions")).passengers
        this.navMenuInit()
        console.log(window.localStorage.getItem("token"))
    },

});

</script>

<style lang="scss">
$glass: rgb(255 255 255 / 79%);
$glass-icon: rgba(255, 255, 255, 0.3);
$gradient: linear-gradient(35deg, red, purple);
$option: #084c6121;

select {
    /* Reset */
    appearance: none;
    border: 0;
    outline: 0;
    font: inherit;
    /* Personalize */
    width: auto;
    height: 2.5em;
    padding: 0 4em 0 1em;
    background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) no-repeat right 0.8em center / 1.4em,
        linear-gradient(to left, $glass-icon 3em, $glass 3em);
    color: #084C61;
    border-radius: 1rem;
    border: 1px solid rgba(105, 105, 105, 0.397);
    cursor: pointer;

    /* <option> colors */
    option {
        color: inherit;
        background-color: $option;
    }

    /* Remove focus outline */
    &:focus {
        outline: none;
    }

    /* Remove IE arrow */
    &::-ms-expand {
        display: none;
    }
}
</style>

<style>
.passenger-form {
    display: flex;
    flex-direction: column;
    gap: .7rem;
    width: 40dvw;
    padding: 1rem;
    border-radius: 1rem;
    position: relative;
    align-items: stretch;
    margin-bottom: 5rem;
}

.flex {
    display: flex;
    width: 100%;
    gap: .7rem;
}

.passenger-form label {
    position: relative;
    display: inline-flex;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
    gap: 2rem;
    align-items: center;
    text-wrap: nowrap;
}

.passenger-form span {
    color: #084C61;
    font-size: .9em;
}

.passenger-form label .input {
    width: 100%;
    padding: 1rem 1rem 1rem 1rem;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 1rem;
    background-color: white;
    color: #084C61 !important;
    margin-right: 2rem;
    height: 2.5em;
}

.passenger-form label .input+span {
    color: #084C61;
    font-size: 0.7em;
    cursor: text;
    transition: 0.3s ease;
}

.passenger-form label .input:valid+span {
    color: green;
}

.submit {
    border: none;
    outline: none;
    background-color: rgb(255, 193, 69);
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
    width: 40%;
    align-self: center;
}

.submit:hover {
    background-color: rgba(255, 193, 69, 0.78);
}
</style>

<style lang="scss">
#userspace {
    --theme-bg-color: rgb(255, 255, 255);
    --border-color: rgba(113 119 144 / 25%);
    --theme-color: #084C61;
    --inactive-color: rgb(113 119 144 / 78%);
    --body-font: "Poppins", sans-serif;
    --hover-menu-bg: rgba(37, 43, 64, 0.3);
    --content-title-color: #999ba5;
    --content-bg: rgb(146 151 179 / 13%);
    --button-inactive: rgb(249 250 251 / 55%);
    --dropdown-bg: #21242d;
    --dropdown-hover: rgb(42 46 60);
    --popup-bg: rgb(22 25 37);
    --search-bg: #d0d6e1a1;
    --overlay-bg: rgba(36, 39, 59, 0.3);
    --scrollbar-bg: rgb(1 2 3 / 40%);

    //  --theme-bg-color: rgba(255, 255, 255, 0.089)!important;
    //     --theme-color: #3c3a3a!important;
    //     --inactive-color: #333333!important;
    //     --button-inactive: #3c3a3a!important;
    //     --search-bg: rgb(255 255 255 / 31%)!important;
    //     --dropdown-bg: #f7f7f7!important;
    //     --overlay-bg: rgb(255 255 255 / 30%)!important;
    //     --dropdown-hover: rgb(236 236 236)!important;
    //     --border-color: rgb(255 255 255 / 35%)!important;
    //     --popup-bg: rgb(255 255 255)!important;
    //     --hover-menu-bg: rgba(255 255 255 / 35%)!important;
    //     --scrollbar-bg: rgb(255 253 253 / 57%)!important;
    //     --content-title-color: --theme-color!important;

    html {
        box-sizing: border-box !important;
        -webkit-font-smoothing: antialiased !important;
    }

    img {
        max-width: 100% !important;
    }

    .dark-light {
        position: fixed !important;
        bottom: 50px !important;
        right: 30px !important;
        background-color: var(--dropdown-bg) !important;
        box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2) !important;
        padding: 8px !important;
        border-radius: 50% !important;
        z-index: 3 !important;
        cursor: pointer !important;

        svg {
            width: 24px !important;
            flex-shrink: 0 !important;
            fill: #ffce45 !important;
            stroke: #ffce45 !important;
            transition: 0.5s !important;
        }
    }

    .dark-light svg {
        fill: transparent !important;
        stroke: var(--theme-color) !important;
    }

    .profile-img {
        border: 2px solid var(--theme-bg-color)
    }

    .content-section ul {
        background-color: var(--theme-bg-color) !important;
    }

    .pop-up__title {
        border-color: var(--theme-color) !important;
    }

    .dropdown.is-active ul {
        background-color: rgb(255 255 255 / 94%) !important;
    }

    .app {
        background-color: var(--theme-bg-color) !important;
        width: 100dvw !important;
        height: 100dvh !important;
        display: flex !important;
        flex-direction: column !important;
        overflow: hidden !important;
        position: relative !important;
        width: 100% !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        font-size: 15px !important;
        font-weight: 500 !important;
    }

    .header {
        display: flex !important;
        align-items: center !important;
        flex-shrink: 0 !important;
        height: 9rem !important;
        width: 100% !important;
        border-bottom: 1px solid var(--border-color) !important;
        padding: 0 5rem 0 3.5rem !important;
        white-space: nowrap !important;

        @media screen and (max-width: 480px) {
            padding: 0 16px !important;
        }

        &-menu {
            display: flex !important;
            align-items: center !important;

            a {
                padding: 20px 30px !important;
                text-decoration: none !important;
                color: var(--inactive-color) !important;
                border-bottom: 2px solid transparent !important;
                transition: 0.3s !important;

                @media screen and (max-width: 610px) {
                    &:not(.main-header-link) {
                        display: none !important;
                    }
                }

                &.is-active,
                &:hover {
                    color: var(--theme-color) !important;
                    border-bottom: 2px solid var(--theme-color) !important;
                }
            }
        }
    }

    .notify {
        position: relative !important;

        &:before {
            content: "" !important;
            position: absolute !important;
            background-color: #3a6df0 !important;
            width: 6px !important;
            height: 6px !important;
            border-radius: 50% !important;
            right: 20px !important;
            top: 16px !important;
        }

        @media screen and (max-width: 1055px) {
            display: none !important;
        }
    }

    .menu-circle {
        width: 11dvw !important;

    }

    .search-bar {
        height: 5vh !important;
        display: flex !important;
        width: 100% !important;
        max-width: 400px !important;
        padding-left: 16px !important;
        border-radius: 4px !important;
        margin-left: auto !important;

        input {
            width: 100% !important;
            height: 100% !important;
            border: none !important;
            background-color: var(--search-bg) !important;
            border-radius: 4px !important;
            font-family: var(--body-font) !important;
            font-size: 15px !important;
            font-weight: 500 !important;
            padding: 0 20px 0 40px !important;
            box-shadow: 0 0 0 2px rgb(134 140 160 / 2%) !important;
            background-image: url("data:image/svg+xml!important;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e") !important;
            background-size: 14px !important;
            background-repeat: no-repeat !important;
            background-position: 16px 48% !important;
            color: var(--theme-color) !important;

            &::placeholder {
                font-family: var(--body-font) !important;
                color: var(--inactive-color) !important;
                font-size: 15px !important;
                font-weight: 500 !important;
            }
        }
    }



    .header-profile {
        display: flex !important;
        align-items: center !important;
        padding: 0 16px 0 40px !important;
        margin-left: auto !important;
        flex-shrink: 0 !important;

        svg {
            width: 22px !important;
            color: #f9fafb !important;
            flex-shrink: 0 !important;
        }
    }

    .notification {
        position: relative !important;

        &-number {
            position: absolute !important;
            background-color: #3a6df0 !important;
            width: 16px !important;
            height: 16px !important;
            border-radius: 50% !important;
            font-size: 10px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            color: #fff !important;
            right: -6px !important;
            top: -6px !important;
        }

        &+svg {
            margin-left: 22px !important;

            @media screen and (max-width: 945px) {
                display: none !important;
            }
        }
    }

    .profile-img {
        width: 32px !important;
        height: 32px !important;
        border-radius: 50% !important;
        object-fit: cover !important;
        border: 2px solid var(--theme-color) !important;
        margin-left: 22px !important;
    }

    .wide {

        .header-menu,
        .header-profile {
            display: none !important;
        }

        .search-bar {
            max-width: 600px !important;
            margin: auto !important;
            transition: 0.4s !important;
            box-shadow: 0 0 0 1px var(--border-color) !important;
            padding-left: 0 !important;
        }

        .menu-circle {
            margin-right: 0 !important;
        }
    }

    .wrapper {
        display: flex !important;
        flex-grow: 1 !important;
        overflow: hidden !important;
    }

    .left-side {
        flex-basis: 240px !important;
        border-right: 1px solid var(--border-color) !important;
        padding: 26px !important;
        overflow: auto !important;
        flex-shrink: 0 !important;

        @media screen and (max-width: 945px) {
            display: none !important;
        }
    }

    .side-wrapper+.side-wrapper {
        margin-top: 20px !important;
    }

    .selected-menu {
        background-color: rgba(0, 0, 0, 0.3) !important;
    }

    .side-menu {
        display: flex !important;
        flex-direction: column !important;
        white-space: nowrap !important;
        row-gap: 0.3rem;

        a {
            text-decoration: none !important;
            color: var(--theme-color) !important;
            display: flex !important;
            align-items: center !important;
            font-weight: 400 !important;
            padding: 1rem !important;
            font-size: 1.3em !important;
            border-radius: 6px !important;
            transition: 0.3s !important;

            &:hover {
                background-color: var(--hover-menu-bg) !important;
            }
        }

        svg {
            width: 1.7rem !important;
            margin-right: 1.6rem !important;
        }
    }

    .updates {
        position: relative !important;
        top: 0 !important;
        right: 0 !important;
        margin-left: auto !important;
        width: 18px !important;
        height: 18px !important;
        font-size: 11px !important;
    }

    .main-header {
        display: flex !important;
        align-items: center !important;
        border-bottom: 1px solid var(--border-color) !important;
        height: 58px !important;
        flex-shrink: 0 !important;

        .header-menu {
            margin-left: 150px !important;

            @media screen and (max-width: 1055px) {
                margin: auto !important;
            }

            a {
                padding: 20px 24px !important;
            }
        }
    }

    .main-container {
        display: flex !important;
        flex-direction: column !important;
        flex-grow: 1 !important;
    }

    .menu-link-main {
        text-decoration: none !important;
        color: var(--theme-color) !important;
        padding: 0 30px !important;

        @media screen and (max-width: 1055px) {
            display: none !important;
        }
    }

    .content-wrapper {
        display: flex !important;
        flex-direction: column !important;
        color: var(--theme-color) !important;
        padding: 20px 40px !important;
        height: 100% !important;
        overflow: auto !important;
        background-color: rgb(240, 240, 240) !important;

        @media screen and (max-width: 510px) {
            padding: 20px !important;
        }

        &-header {
            display: flex !important;
            align-items: center !important;
            width: 100% !important;
            justify-content: space-between !important;
            background-image: url("https://www.transparenttextures.com/patterns/cubes.png"),
                linear-gradient(to right top,
                    #cf4af3,
                    #e73bd7,
                    #f631bc,
                    #fd31a2,
                    #ff3a8b,
                    #ff4b78,
                    #ff5e68,
                    #ff705c,
                    #ff8c51,
                    #ffaa49,
                    #ffc848,
                    #ffe652) !important;
            border-radius: 14px !important;
            padding: 20px 40px !important;

            @media screen and (max-width: 415px) {
                padding: 20px !important;
            }
        }

        &.overlay {
            pointer-events: none !important;
            transition: 0.3s !important;
            background-color: var(--overlay-bg) !important;
        }
    }

    .overlay-app {
        width: 100% !important;
        height: 100% !important;
        position: fixed !important;
        left: 0 !important;
        top: 0 !important;
        pointer-events: all !important;
        background-color: rgba(36, 39, 59, 0.8) !important;
        opacity: 0 !important;
        visibility: hidden !important;
        transition: 0.3s !important;

        &.is-active {
            visibility: visible !important;
            opacity: 1 !important;
        }
    }

    .img-content {
        font-weight: 500 !important;
        font-size: 17px !important;
        display: flex !important;
        align-items: center !important;
        margin: 0 !important;

        svg {
            width: 28px !important;
            margin-right: 14px !important;
        }
    }

    .content-text {
        font-weight: 400 !important;
        font-size: 14px !important;
        margin-top: 16px !important;
        line-height: 1.7em !important;
        color: #ebecec !important;
        display: -webkit-box !important;
        -webkit-line-clamp: 4 !important;
        -webkit-box-orient: vertical !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
    }

    .content-wrapper-context {
        max-width: 350px !important;
    }

    .content-button {
        background-color: #3a6df0 !important;
        border: none !important;
        padding: 8px 26px !important;
        color: #fff !important;
        border-radius: 20px !important;
        margin-top: 16px !important;
        cursor: pointer !important;
        transition: 0.3s !important;
        white-space: nowrap !important;
    }

    .content-wrapper-img {
        width: 186px !important;
        object-fit: cover !important;
        margin-top: -25px !important;
        object-position: center !important;

        @media screen and (max-width: 570px) {
            width: 110px !important;
        }
    }

    .content-section {
        display: flex !important;
        flex-direction: column !important;
        gap: 1rem;

        &-title {
            color: var(--content-title-color) !important;
            margin-bottom: 14px !important;
        }

        ul {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            height: 100% !important;
            justify-content: space-around !important;
            background-color: var(--content-bg) !important;
            padding-left: 0 !important;
            margin: 0 !important;
            border-radius: 14px !important;
            border: 1px solid var(--theme-bg-color) !important;
            cursor: pointer !important;

            li {
                list-style: none !important;
                padding: 10px 18px !important;
                display: flex !important;
                align-items: center !important;
                font-size: 16px !important;
                width: 100% !important;
                height: 100% !important;
                white-space: nowrap !important;
                transition: 0.3s !important;

                &:hover {
                    background-color: var(--theme-bg-color) !important;

                    &:first-child {
                        border-radius: 13px 13px 0 0 !important;
                    }

                    &:last-child {
                        border-radius: 0 0 13px 13px !important;
                    }
                }

                &+li {
                    border-top: 1px solid var(--border-color) !important;
                }
            }

            svg {
                width: 28px !important;
                border-radius: 6px !important;
                margin-right: 16px !important;
                flex-shrink: 0 !important;
            }
        }
    }

    .products {
        display: flex !important;
        align-items: center !important;
        width: 150px !important;

        @media screen and (max-width: 480px) {
            width: 120px !important;
        }
    }

    .status {
        margin-left: auto !important;
        width: 140px !important;
        font-size: 15px !important;
        position: relative !important;

        @media screen and (max-width: 700px) {
            display: none !important;
        }

        &-circle {
            width: 6px !important;
            height: 6px !important;
            background-color: #396df0 !important;
            position: absolute !important;
            border-radius: 50% !important;
            top: 4px !important;
            left: -20px !important;

            &.green {
                background-color: #3bf083 !important;
            }
        }

        &-button {
            font-size: 15px !important;
            margin-top: 0 !important;
            padding: 6px 24px !important;

            @media screen and (max-width: 390px) {
                padding: 6px 14px !important;
            }

            &.open {
                background: none !important;
                color: var(--button-inactive) !important;
                border: 1px solid var(--button-inactive) !important;
            }

            &:not(.open):hover {
                color: #fff !important;
                border-color: #fff !important;
            }
        }
    }

    .content-button:not(.open):hover {
        background: #1e59f1 !important;
    }

    .menu {
        width: 5px !important;
        height: 5px !important;
        background-color: var(--button-inactive) !important;
        border-radius: 50% !important;
        box-shadow: 7px 0 0 0 var(--button-inactive), 14px 0 0 0 var(--button-inactive) !important;
        margin: 0 12px !important;
    }

    @media screen and (max-width: 415px) {
        .adobe-product .menu {
            display: none !important;
        }
    }

    .dropdown {
        position: relative !important;
        height: 53px !important;
        width: 40px !important;
        top: -24px !important;
        display: flex !important;
        left: -5px !important;
        background: transparent !important;
        border: none !important;
        cursor: pointer !important;

        ul {
            position: absolute !important;
            background: var(--dropdown-bg) !important;
            height: 110px !important;
            width: 120px !important;
            right: 0 !important;
            top: 20px !important;
            pointer-events: none !important;
            opacity: 0 !important;
            transform: translatey(10px) !important;
            transition: all 0.4s ease !important;

            li a {
                text-decoration: none !important;
                color: var(--theme-color) !important;
                font-size: 12px !important;
            }
        }
    }

    .dropdown.is-active {
        ul {
            opacity: 1 !important;
            pointer-events: all !important;
            transform: translatey(25px) !important;

            li:hover {
                background-color: var(--dropdown-hover) !important;
            }
        }
    }

    .button-wrapper {
        display: flex !important;
        align-items: center !important;
        justify-content: flex-end !important;
        width: 187px !important;
        margin-left: auto !important;

        @media screen and (max-width: 480px) {
            width: auto !important;
        }
    }

    .pop-up {
        position: absolute !important;
        padding: 30px 40px !important;
        top: 50% !important;
        left: 50% !important;
        transform: (translate(-50%, -50%)) !important;
        overflow-y: auto !important;
        box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.4) !important;
        transition: all 0.3s !important;
        z-index: 10 !important;
        background-color: var(--popup-bg) !important;
        width: 500px !important;
        visibility: hidden !important;
        opacity: 0 !important;
        border-radius: 6px !important;
        display: flex !important;
        flex-direction: column !important;
        white-space: normal !important;

        @media screen and (max-width: 570px) {
            width: 100% !important;
        }

        &.visible {
            visibility: visible !important;
            opacity: 1 !important;
        }

        &__title {
            padding-bottom: 20px !important;
            border-bottom: 1px solid var(--border-color) !important;
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
        }

        &__subtitle {
            white-space: normal !important;
            margin: 20px 0 !important;
            font-size: 14px !important;
            font-weight: 400 !important;
            line-height: 1.8em !important;

            a {
                color: var(--theme-color) !important;
            }
        }
    }

    .content-button-wrapper .content-button.status-button.open.close {
        width: auto !important;
    }

    .content-section .close {
        margin-right: 0 !important;
        width: 24px !important;
    }

    .checkbox-wrapper {
        display: flex !important;
        align-items: center !important;
        font-size: 14px !important;
        font-weight: 400 !important;

        &+.checkbox-wrapper {
            margin: 20px 0 40px !important;
        }
    }

    .checkbox {
        display: none !important;
    }

    .checkbox+label {
        display: flex !important;
        align-items: center !important;

        &:before {
            content: "" !important;
            margin-right: 10px !important;
            width: 15px !important;
            height: 15px !important;
            border: 1px solid var(--theme-color) !important;
            border-radius: 4px !important;
            cursor: pointer !important;
            flex-shrink: 0 !important;
        }
    }

    .checkbox:checked+label:before {
        background-color: #3a6df0 !important;
        border-color: #3a6df0 !important;
        background-image: url("data:image/svg+xml!important;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3e%3cpath d='M20 6L9 17l-5-5'/%3e%3c/svg%3e") !important;
        background-position: 50% !important;
        background-size: 12px !important;
        background-repeat: no-repeat !important;
    }

    .content-button-wrapper {
        margin-top: auto !important;
        margin-left: auto !important;

        .open {
            margin-right: 8px !important;
        }
    }

    .apps-card {
        display: flex !important;
        align-items: center !important;
        flex-wrap: wrap !important;
        width: calc(100% + 20px) !important;
    }

    .app-card {
        display: flex !important;
        flex-direction: column !important;
        width: calc(33.3% - 20px) !important;
        font-size: 16px !important;
        background-color: var(--content-bg) !important;
        border-radius: 14px !important;
        border: 1px solid var(--theme-bg-color) !important;
        padding: 20px !important;
        cursor: pointer !important;
        transition: 0.3s ease !important;

        &:hover {
            transform: scale(1.02) !important;
            background-color: var(--theme-bg-color) !important;
        }

        svg {
            width: 28px !important;
            border-radius: 6px !important;
            margin-right: 12px !important;
            flex-shrink: 0 !important;
        }

        &+.app-card {
            margin-left: 20px !important;
        }

        span {
            display: flex !important;
            align-items: center !important;
        }

        &__subtext {
            font-size: 14px !important;
            font-weight: 400 !important;
            line-height: 1.6em !important;
            margin-top: 20px !important;
            border-bottom: 1px solid var(--border-color) !important;
            padding-bottom: 20px !important;
        }

        &-buttons {
            display: flex !important;
            align-items: center !important;
            margin-left: auto !important;
            margin-top: 16px !important;
        }

        @media screen and (max-width: 1110px) {
            width: calc(50% - 20px) !important;

            &:last-child {
                margin-top: 20px !important;
                margin-left: 0px !important;
            }
        }

        @media screen and (max-width: 565px) {
            width: calc(100% - 20px) !important;
            margin-top: 20px !important;

            &+.app-card {
                margin-left: 0 !important;
            }
        }
    }

    ::-webkit-scrollbar {
        width: 6px !important;
        border-radius: 10px !important;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--scrollbar-bg) !important;
        border-radius: 10px !important;
    }
}
</style>