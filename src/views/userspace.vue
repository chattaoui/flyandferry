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

                    <div class="drop-down">
                        <img id="dropDown" class="profile-img" :src="user.image ? user.image : 'img/1635932302.png'" alt="">

                        <div class="drop-down__menu-box">
                            <ul class="drop-down__menu">
                                <li data-name="profile" data-toggle="modal" data-target="#profileModal"
                                    class="drop-down__item">Your Profile <svg version="1.1" class="drop-down__item-icon"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px" y="0px" viewBox="0 0 350 350" style="enable-background:new 0 0 350 350;"
                                        xml:space="preserve">
                                        <g>
                                            <path
                                                d="M175,171.173c38.914,0,70.463-38.318,70.463-85.586C245.463,38.318,235.105,0,175,0s-70.465,38.318-70.465,85.587   C104.535,132.855,136.084,171.173,175,171.173z">
                                            </path>
                                            <path
                                                d="M41.909,301.853C41.897,298.971,41.885,301.041,41.909,301.853L41.909,301.853z">
                                            </path>
                                            <path
                                                d="M308.085,304.104C308.123,303.315,308.098,298.63,308.085,304.104L308.085,304.104z">
                                            </path>
                                            <path
                                                d="M307.935,298.397c-1.305-82.342-12.059-105.805-94.352-120.657c0,0-11.584,14.761-38.584,14.761   s-38.586-14.761-38.586-14.761c-81.395,14.69-92.803,37.805-94.303,117.982c-0.123,6.547-0.18,6.891-0.202,6.131   c0.005,1.424,0.011,4.058,0.011,8.651c0,0,19.592,39.496,133.08,39.496c113.486,0,133.08-39.496,133.08-39.496   c0-2.951,0.002-5.003,0.005-6.399C308.062,304.575,308.018,303.664,307.935,298.397z">
                                            </path>
                                        </g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                    </svg></li>
                                <li data-name="dashboard" class="drop-down__item">Your Dashboard <svg version="1.1"
                                        class="drop-down__item-icon" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="511.626px"
                                        height="511.627px" viewBox="0 0 511.626 511.627"
                                        style="enable-background:new 0 0 511.626 511.627;" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M491.361,211.274c-13.511-31.599-31.689-58.813-54.529-81.658c-22.839-22.841-50.059-41.017-81.659-54.53   c-31.601-13.513-64.713-20.271-99.359-20.271c-34.644,0-67.762,6.759-99.357,20.271c-31.595,13.518-58.813,31.689-81.653,54.53   c-22.845,22.845-41.018,50.059-54.534,81.658C6.757,242.873,0,275.988,0,310.631c0,49.865,13.418,95.838,40.256,137.903   c3.614,5.52,8.754,8.278,15.417,8.278h400.281c6.66,0,11.8-2.759,15.414-8.278c26.84-42.254,40.258-88.224,40.258-137.903   C511.626,275.988,504.872,242.873,491.361,211.274z M229.973,102.069c7.142-7.139,15.752-10.709,25.84-10.709   c10.089,0,18.699,3.571,25.838,10.709c7.139,7.135,10.711,15.749,10.711,25.837s-3.572,18.699-10.711,25.837   s-15.749,10.709-25.838,10.709c-10.088,0-18.702-3.571-25.84-10.709c-7.135-7.139-10.707-15.749-10.707-25.837   S222.834,109.205,229.973,102.069z M98.929,336.469c-7.138,7.135-15.752,10.715-25.84,10.715c-10.085,0-18.699-3.58-25.837-10.715   c-7.139-7.132-10.705-15.749-10.705-25.838c0-10.088,3.566-18.698,10.705-25.837s15.752-10.708,25.837-10.708   c10.088,0,18.706,3.569,25.84,10.708c7.135,7.139,10.707,15.749,10.707,25.837C109.636,320.72,106.064,329.33,98.929,336.469z    M153.748,208.562c-7.142,7.137-15.752,10.709-25.841,10.709c-10.089,0-18.702-3.576-25.841-10.709   c-7.135-7.135-10.706-15.749-10.706-25.837s3.567-18.699,10.706-25.837c7.142-7.139,15.752-10.709,25.841-10.709   c10.088,0,18.702,3.571,25.841,10.709c7.135,7.139,10.706,15.749,10.706,25.837C164.454,192.81,160.882,201.423,153.748,208.562z    M315.482,210.99l-28.839,109.062c9.524,6.468,16.376,15.126,20.564,25.98c4.182,10.849,4.757,21.984,1.711,33.404   c-3.806,14.657-12.278,25.793-25.413,33.403c-13.135,7.614-27.026,9.521-41.686,5.712c-14.653-3.806-25.791-12.275-33.402-25.41   c-7.611-13.138-9.514-27.027-5.708-41.688c3.044-11.416,9.04-20.79,17.987-28.113c8.944-7.333,19.126-11.468,30.546-12.422   l28.837-109.064c1.331-4.948,4.186-8.711,8.562-11.281c4.381-2.565,8.945-3.184,13.706-1.853c4.764,1.334,8.425,4.139,10.991,8.42   C315.914,201.427,316.625,206.042,315.482,210.99z M357.882,208.562c-7.139-7.135-10.711-15.749-10.711-25.837   s3.572-18.699,10.711-25.837s15.749-10.709,25.838-10.709c10.088,0,18.698,3.571,25.837,10.709s10.712,15.749,10.712,25.837   c0,10.085-3.573,18.699-10.712,25.837c-7.139,7.137-15.749,10.709-25.837,10.709C373.631,219.271,365.021,215.699,357.882,208.562z    M464.374,336.469c-7.139,7.135-15.749,10.715-25.837,10.715c-10.089,0-18.699-3.58-25.838-10.715   c-7.139-7.132-10.708-15.749-10.708-25.838c0-10.088,3.569-18.698,10.708-25.837s15.749-10.708,25.838-10.708   c10.088,0,18.698,3.569,25.837,10.708s10.704,15.749,10.704,25.837C475.078,320.72,471.512,329.33,464.374,336.469z">
                                            </path>
                                        </g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g>
                                        </g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                    </svg></li>
                                <li data-name="activity" @click="logoutUser()" class="drop-down__item">Logout <svg
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" id="Layer_1" x="0px" y="0px" class="drop-down__item-icon"
                                        width="110.395px" height="122.88px" viewBox="0 0 110.395 122.88"
                                        enable-background="new 0 0 110.395 122.88" xml:space="preserve">
                                        <g>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M93.359,17.16L75.68,9.377L75.99,0h34.404v61.439v61.44H75.99l-0.311-6.835 l17.68-10.946V17.16L93.359,17.16z M82.029,79.239v-34.54H47.004V13.631L0,61.937l47.004,48.373v-31.07H82.029L82.029,79.239z" />
                                        </g>
                                    </svg></li>
                            </ul>
                        </div>
                    </div>

                    <!-- Modal -->
                    <div id="profileModal" class="modal fade" role="dialog">
                        <div class="modal-dialog">

                            <!-- Modal content-->
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title">User Profile</h4>
                                </div>
                                <div class="modal-body">
                                    <p><strong>Name:</strong> userProfile.name </p>
                                    <p><strong>Email:</strong> userProfile.email </p>
                                    <!-- Add more profile fields here -->
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>

                        </div>
                    </div>

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
                                <stepper :activeItem="currentStep" :steps="3" :buttonColor="'#084C61'" />
                            </div>
                            <div style="align-self: center;">
                                <div class="faq" id="accordion" v-if="currentStep === '1'">
                                    <div v-for="(passenger, index) in passengers" :key="`passenger-Form-${index}`"
                                        class="card">
                                        <div class="card-header" :id="`faqHeading-${index}`" @click="toggleSection(index)">
                                            <div class="mb-0">
                                                <h5 class="faq-title" :data-target="`#faqCollapse-${index}`"
                                                    :data-aria-controls="`faqCollapse-${index}`">
                                                    Passenger <span class="badge">{{ index + 1 }}</span>
                                                    {{ passenger.Category }}
                                                </h5>
                                            </div>
                                        </div>
                                        <div :id="`faqCollapse-${index}`"
                                            :class="openSectionIndex == index ? 'collapse in' : 'collapse'"
                                            :aria-labelledby="`faqHeading-${index}`" data-parent="#accordion"
                                            style="padding: 0 2rem;">
                                            <form class="passenger-form card-body">
                                                <div class="flex">
                                                    <label>
                                                        <div>
                                                            <span>Title</span>
                                                            <select v-model="passengersData[index]['title']"
                                                                :class="{ 'invalid': submitted && !passengersData[index]['title'] }">
                                                                <option value="Mr">Mr</option>
                                                                <option value="Mrs">Mrs</option>
                                                            </select>
                                                        </div>
                                                        <div class="error-message-wrapper">
                                                            <span v-if="submitted && !passengersData[index]['title']"
                                                                class="error-message">Please choose your title.</span>
                                                            <a style="width: 20%;"></a>
                                                        </div>
                                                    </label>

                                                    <label>
                                                        <div>
                                                            <span>First Name</span>
                                                            <input required="" placeholder=""
                                                                :class="{ 'invalid': submitted && !passengersData[index]['first name'] }"
                                                                v-model="passengersData[index]['first name']" type="text"
                                                                class="input">
                                                        </div>
                                                        <div class="error-message-wrapper">
                                                            <span v-if="submitted && !passengersData[index]['first name']"
                                                                class="error-message">this field is required.</span>
                                                            <a style="width: 20%;"></a>
                                                        </div>
                                                    </label>
                                                </div>

                                                <label>
                                                    <div>
                                                        <span>Last Name</span>
                                                        <input required="" placeholder=""
                                                            :class="{ 'invalid': submitted && !passengersData[index]['last name'] }"
                                                            v-model="passengersData[index]['last name']" type="txt"
                                                            class="input">
                                                    </div>
                                                    <div class="error-message-wrapper">
                                                        <span v-if="submitted && !passengersData[index]['last name']"
                                                            class="error-message">this field is required.</span>
                                                        <a style="width: 20%;"></a>
                                                    </div>
                                                </label>

                                                <div class="flex">
                                                    <label>
                                                        <div>
                                                            <span>Gender</span>
                                                            <select v-model="passengersData[index]['gender']"
                                                                :class="{ 'invalid': submitted && !passengersData[index]['gender'] }">
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                            </select>
                                                        </div>

                                                        <div class="error-message-wrapper">
                                                            <span v-if="submitted && !passengersData[index]['gender']"
                                                                class="error-message">this field is required.</span>
                                                            <a style="width: 20%;"></a>
                                                        </div>
                                                    </label>

                                                    <label>
                                                        <div>
                                                            <span>Date of birth</span>
                                                            <input required="" placeholder=""
                                                                :class="{ 'invalid': submitted && !passengersData[index]['date of birth'] }"
                                                                v-model="passengersData[index]['date of birth']"
                                                                :max="getMaxBD(passenger.Category)"
                                                                :min="getMinBD(passenger.Category)" type="date"
                                                                class="input">
                                                        </div>

                                                        <div class="error-message-wrapper">
                                                            <span
                                                                v-if="submitted && !passengersData[index]['date of birth']"
                                                                class="error-message">this field is required.</span>
                                                            <a style="width: 20%;"></a>
                                                        </div>
                                                    </label>
                                                </div>

                                                <div class="flex">
                                                    <label>
                                                        <div>
                                                            <span>Country</span>
                                                            <select v-model="passengersData[index]['country']"
                                                                :class="{ 'invalid': submitted && !passengersData[index]['country'] }">
                                                                <option value="Tunis">Tunisia</option>
                                                            </select>
                                                        </div>

                                                        <div class="error-message-wrapper">
                                                            <span v-if="submitted && !passengersData[index]['country']"
                                                                class="error-message">this field is required.</span>
                                                            <a style="width: 20%;"></a>
                                                        </div>
                                                    </label>

                                                    <label>
                                                        <div>
                                                            <span>Place of birth</span>
                                                            <input required="" placeholder=""
                                                                :class="{ 'invalid': submitted && passengersData[index]['place of birth'].length < 3 }"
                                                                v-model="passengersData[index]['place of birth']" type="txt"
                                                                class="input">
                                                        </div>
                                                        <div class="error-message-wrapper">
                                                            <span
                                                                v-if="submitted && !passengersData[index]['place of birth']"
                                                                class="error-message">this field is required.</span>
                                                            <a style="width: 20%;"></a>
                                                        </div>
                                                    </label>
                                                </div>

                                                <div class="flex">


                                                    <label>
                                                        <div>
                                                            <span>Type of id</span>
                                                            <select v-model="passengersData[index]['type of id']"
                                                                :class="{ 'invalid': submitted && !passengersData[index]['type of id'] }">
                                                                <option value="Passport">Passport</option>
                                                                <option value="CIN">CIN</option>
                                                            </select>
                                                        </div>
                                                        <div class="error-message-wrapper">
                                                            <span v-if="submitted && !passengersData[index]['type of id']"
                                                                class="error-message">Please choose your type of id.</span>
                                                            <a style="width: 20%;"></a>
                                                        </div>
                                                    </label>

                                                    <label>
                                                        <div>
                                                            <span>Id Number</span>
                                                            <input
                                                                :class="{ 'invalid': submitted && passengersData[index]['id'].length < 8 }"
                                                                required="" placeholder=""
                                                                v-model="passengersData[index]['id']" type="txt"
                                                                class="input">
                                                        </div>
                                                        <div class="error-message-wrapper">
                                                            <span v-if="submitted && !passengersData[index]['id']"
                                                                class="error-message">Please enter your id number.</span>
                                                            <a style="width: 20%;"></a>
                                                        </div>
                                                    </label>
                                                </div>

                                                <label v-if="passengersData[index]['type of id'] === 'Passport'">
                                                    <div>
                                                        <span>Passport expiration date</span>
                                                        <input required="" placeholder=""
                                                            :class="{ 'invalid': submitted && !passengersData[index]['expiry date'] }"
                                                            v-model="passengersData[index]['expiry date']" type="date"
                                                            class="input">
                                                    </div>

                                                    <div class="error-message-wrapper">
                                                        <span v-if="submitted && !passengersData[index]['expiry date']"
                                                            class="error-message">expiration date is required.</span>
                                                        <a style="width: 20%;"></a>
                                                    </div>
                                                </label>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="ticket-container" v-else-if="currentStep === '2'">
                                    <Eticket />
                                    <div class="choices">
                                        <details v-for="(accomod, index) in selectedTrip.Accomodations"
                                            :key="`accomod-${index}`" @click="openServiceIndex(index)">
                                            <summary v-if="accomod.serviceName.includes('fauteuil')">
                                                <div>
                                                    <span style="background-color: #f2dcbb;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#3B566E"
                                                            height="10rem" width="10rem"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                                                            id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 113.4"
                                                            style="enable-background:new 0 0 122.88 113.4"
                                                            xml:space="preserve">
                                                            <g>
                                                                <path
                                                                    d="M100.73,106.44v6.96h-4.29v-6.96h-0.7c-0.05,0-0.11,0.01-0.17,0.01H28.28c-0.08,0.01-0.16,0.01-0.24,0.01h-0.03h-1.77v6.94 h-4.29v-6.94h-2.47v-0.01c-2.42-0.01-4.41-0.49-5.91-1.77c-1.54-1.31-2.41-3.29-2.49-6.2c0-0.03,0-0.07,0-0.1l0.01-31.2 c-1.94-0.56-3.64-1.28-5.08-2.19c-1.98-1.25-3.46-2.85-4.37-4.85c-3.07-6.74-1.52-12.41,2.11-16.23c1.65-1.74,3.74-3.07,6.02-3.92 c2.27-0.85,4.73-1.22,7.12-1.03c1.8,0.14,3.57,0.58,5.2,1.35V18.73c0-8.88,1.33-13.51,4.75-16.1C30.18,0.1,35,0,42.3,0h38.22 c7.94,0,12.76,0.31,15.94,3.15c3.18,2.84,4.11,7.71,4.11,16.72v21.26c2.18-1.04,4.58-1.52,6.97-1.5c2.33,0.02,4.64,0.51,6.72,1.4 c2.11,0.91,4.01,2.24,5.5,3.93c3.26,3.73,4.44,9.06,1.28,15.26c-0.96,1.89-2.42,3.46-4.34,4.71c-1.44,0.93-3.13,1.68-5.07,2.25 v31.23h-0.01l0,0.05c-0.08,2.92-0.95,4.89-2.49,6.2c-1.5,1.27-3.49,1.76-5.91,1.77v0.01H100.73L100.73,106.44z M26.37,43.54 c1.32,1.5,2.39,3.4,3.1,5.71c0.34,1.1,0.58,2.3,0.7,3.6c0.12,1.25,0.12,2.59-0.01,4.04l0,5.73h62.37V56.8 c-0.12-1.41-0.16-2.72-0.07-3.92c0.1-1.37,0.36-2.64,0.83-3.79c0.77-1.9,1.79-3.49,2.99-4.79V19.87c0-7.7-0.6-11.69-2.67-13.54 c-2.06-1.84-6.19-2.04-13.09-2.04H42.3c-6.42,0-10.64,0.07-12.89,1.77c-2.19,1.65-3.04,5.31-3.04,12.68V43.54L26.37,43.54z M30.16,66.91l0,7.21h62.37v-7.21H30.16L30.16,66.91z M23.06,46.31c-0.25-0.16-0.47-0.38-0.63-0.63c-1.66-1.5-3.73-2.28-5.86-2.45 c-1.79-0.14-3.62,0.13-5.31,0.76c-1.68,0.63-3.21,1.6-4.41,2.87c-2.5,2.64-3.53,6.64-1.32,11.51c0.55,1.2,1.49,2.19,2.78,3.01 c1.42,0.9,3.24,1.58,5.39,2.06l0,0c0.95,0.21,1.67,1.07,1.67,2.09l-0.01,32.86c0.04,1.57,0.38,2.53,0.98,3.04 c0.64,0.55,1.72,0.76,3.15,0.76v-0.01h4.98c0.08-0.01,0.16-0.01,0.24-0.01h1.17l0.01-45.32c0-0.08,0-0.15,0.01-0.23 c0.11-1.22,0.11-2.34,0.01-3.36c-0.09-1-0.27-1.91-0.53-2.74C24.85,48.78,24.05,47.39,23.06,46.31L23.06,46.31z M96.82,64.1 c0.07,0.21,0.11,0.43,0.11,0.67c0,0.23-0.04,0.46-0.11,0.67v10.35c0.04,0.15,0.05,0.32,0.05,0.48s-0.02,0.33-0.05,0.48v25.41h6.39 v0.01c1.42,0,2.5-0.21,3.15-0.76c0.59-0.5,0.93-1.44,0.98-2.99h-0.01V65.52c0-1.08,0.8-1.97,1.83-2.12 c2.09-0.48,3.83-1.17,5.2-2.06c1.27-0.83,2.23-1.85,2.85-3.06c2.23-4.37,1.5-8.02-0.68-10.5c-1.04-1.19-2.42-2.14-3.97-2.81 c-1.58-0.68-3.32-1.05-5.06-1.07c-4.14-0.03-8.31,1.99-10.24,6.77c-0.29,0.72-0.46,1.56-0.52,2.5c-0.08,1.06-0.04,2.2,0.07,3.43 c0.01,0.06,0.01,0.13,0.01,0.19h0.01V64.1L96.82,64.1z M30.15,102.16h62.38V78.41H30.15L30.15,102.16L30.15,102.16z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    <h3>
                                                        <strong>Place en salon fauteuil</strong>
                                                    </h3>
                                                    <span class="plus">+<a style="font-size: 9px; vertical-align: super;">
                                                            &euro; </a>{{ parseFloat(accomod.unitCost) * accomod.Quantity
                                                            }}</span>
                                                </div>
                                            </summary>
                                            <summary v-else-if="accomod.serviceName.includes('Pension')">
                                                <div>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#3B566E"
                                                            height="10rem" width="10rem" id="Layer_1" data-name="Layer 1"
                                                            viewBox="0 0 122.88 97.37">
                                                            <title>breakfast</title>
                                                            <path
                                                                d="M60.27,0a44.56,44.56,0,0,1,44.55,44.55,43.83,43.83,0,0,1-.3,5.15,21.74,21.74,0,0,0-2.76-1.6c.09-1.17.15-2.35.15-3.55a41.38,41.38,0,0,0-4.2-18.22,4.14,4.14,0,0,1-.41.65l0,0-.07.09L88.11,38.82l-.08.1a4,4,0,0,1-2.3,1.32A3.87,3.87,0,0,1,83,39.53l-1.46-1.11a16.77,16.77,0,0,1,.55,2.4,8.74,8.74,0,0,1-1.22,6h0a11.79,11.79,0,0,1-4.34,4V64.69a1.24,1.24,0,0,1,0,.27A3.48,3.48,0,0,1,75,67.62a6,6,0,0,1-3.26.68H49.32l2.49-2.5H71.69a4.09,4.09,0,0,0,1.92-.29c.2-.13.32-.41.4-.91V50.08A1.27,1.27,0,0,1,74.69,49a9.91,9.91,0,0,0,4-3.48,6.35,6.35,0,0,0,.87-4.3,13,13,0,0,0-2.9-6.46c-1.81-1.4-3.61-2.8-5.43-4.19A28.3,28.3,0,0,0,58.9,27.88,26.63,26.63,0,0,0,44,32a13.24,13.24,0,0,0-5.25,6.44l-.35-.08A11.85,11.85,0,0,0,36.24,38a15.58,15.58,0,0,1,6.34-8.11,29.22,29.22,0,0,1,16.33-4.51q1,0,2,.06l-1.41-.57a3.69,3.69,0,0,1-2-1.73,3,3,0,0,1,0-2.48L63.86,5.9a.55.55,0,0,1,.08-.15,3.13,3.13,0,0,1,1.71-1.27,8.24,8.24,0,0,1,3.6.26A39.28,39.28,0,0,1,74.73,6.5l.25.11a25.55,25.55,0,0,1,6.38,3.46L80.24,11a26.72,26.72,0,0,0-5.82-3l-.25-.11a38.55,38.55,0,0,0-5.25-1.69,7.17,7.17,0,0,0-2.86-.27,1.49,1.49,0,0,0-.49.24,1.9,1.9,0,0,0-.4.4l-.12.28a36.79,36.79,0,0,1,7.89,2.32c2.2.86,4.42,1.86,6.23,2.79-.39.34-.77.69-1.15,1-1.65-.82-3.64-1.69-5.61-2.46-3.4-1.33-6.67-2.36-8-2.29l-5.54,13a1.63,1.63,0,0,0-.08,1.32,2.39,2.39,0,0,0,1.24,1L67,26.36q1.42.36,2.76.84a3.72,3.72,0,0,1,.7-1.41l10.32-13,.12-.13a3.58,3.58,0,0,1,1-.57A3,3,0,0,1,83,11.88a8.46,8.46,0,0,1,3.52,1.25,36.69,36.69,0,0,1,3.28,2l-.05-.05h0A41.65,41.65,0,0,0,19.05,50.49L17.54,51.9l-.29.28h0c-.25.26-.5.52-.73.78A44.55,44.55,0,0,1,60.27,0Zm55.17,95.41L99.91,78.17C87.85,79.23,79.42,61.52,88.09,55.6c10.52-7.19,24.54,10,17.21,18.68l16.28,17c3.93,4.11-1.9,8.86-6.14,4.15ZM27.06,74c3.34.63,6.1-.15,10-4.37L47.46,59.16c1.44-1.47-1-4.28-2.79-2.79l-8.55,8.35a1.68,1.68,0,1,1-2.37-2.37l8.84-8.65c1.52-1.59-.83-4.27-2.59-2.58-2.42,2.43-6.41,6.22-8.84,8.64-1.41,1.66-3.81-.34-2-2l8.78-8.58a2,2,0,0,0-1.2-3.28c-1.54-.35-2.54,1-3.6,2l-10.3,9.64c-2.84,2.94-4.44,6.07-3.18,9.34a8.13,8.13,0,0,0,1,1.73L1.13,86.6A3.59,3.59,0,0,0,1,91.73l.31.32a4.06,4.06,0,0,0,5.78-.12L24.88,72.8A6.16,6.16,0,0,0,27.06,74Zm10.39,5.44a41.68,41.68,0,0,0,46.13-.33c.45.47.92.93,1.41,1.37.25.22.51.45.77.66a44.58,44.58,0,0,1-51.29-.21l.26-.1a17.93,17.93,0,0,0,2.72-1.39ZM71.21,27.77a22.89,22.89,0,0,1,3.4,1.81,17.14,17.14,0,0,1,5.69,6l3.52,2.7a2.4,2.4,0,0,0,1.68.48,2.6,2.6,0,0,0,1.42-.85l8.79-11.34C94.59,25,91.34,22.19,88,19.73c-3-2.26-6-4.18-7.28-4.46l-9.1,11.44a1.88,1.88,0,0,0-.45,1.06ZM64.85,45.66a4.39,4.39,0,1,1-4.39,4.39,4.4,4.4,0,0,1,4.39-4.39Zm-2.77,12a1.59,1.59,0,1,1-1.59,1.58,1.58,1.58,0,0,1,1.59-1.58ZM51.47,38.63a2.71,2.71,0,1,1-2.7,2.7,2.7,2.7,0,0,1,2.7-2.7Zm-8.25-.21a1.33,1.33,0,0,1,.16,2.65L43,40.66a10,10,0,0,0-1.08-.84v-.07a1.33,1.33,0,0,1,1.34-1.33Zm27,.81A2.24,2.24,0,1,1,68,41.47a2.24,2.24,0,0,1,2.24-2.24ZM59.75,32.69a1.93,1.93,0,1,1-1.93,1.92,1.93,1.93,0,0,1,1.93-1.92ZM35.36,23.14a1.32,1.32,0,0,1-2.25-1.39A24,24,0,0,1,41,13.81,19.38,19.38,0,0,1,51.17,10.9a1.33,1.33,0,1,1,0,2.65,16.71,16.71,0,0,0-8.74,2.52,21.41,21.41,0,0,0-7,7.07ZM83,13.39a1.8,1.8,0,0,0-.56.11,2.32,2.32,0,0,0-.5.29l-.2.25A37,37,0,0,1,89,18.52a52.67,52.67,0,0,1,7.59,6.68,2.52,2.52,0,0,0,.08-.55,1.59,1.59,0,0,0,0-.48c-.54-1-1.12-1.9-1.73-2.82a36.12,36.12,0,0,0-4.1-3.6l-.23-.17a38.47,38.47,0,0,0-4.76-3.13A7.54,7.54,0,0,0,83,13.39Zm5.65,9.13a.76.76,0,0,0-.91,1.22.76.76,0,1,0,.91-1.22Zm2.27,2A.76.76,0,0,0,90,25.71a.76.76,0,1,0,.91-1.22Zm2,2.29A.76.76,0,0,0,92,28a.77.77,0,0,0,1.07-.15.77.77,0,0,0-.16-1.07Zm-6.69-6.05A.76.76,0,0,1,85.33,22a.76.76,0,0,1,.92-1.22Zm-2.53-1.62a.76.76,0,0,1-.92,1.22.77.77,0,0,1-.15-1.07.76.76,0,0,1,1.07-.15ZM81,17.81a.76.76,0,1,1-1.07.15A.76.76,0,0,1,81,17.81ZM73.69,13a.74.74,0,0,0-1,.42.74.74,0,0,0,1.37.54.74.74,0,0,0-.41-1Zm2.62,1.26a.72.72,0,0,0-1,.41.75.75,0,0,0,.18.82c.34-.36.68-.72,1-1.07a.76.76,0,0,0-.26-.16ZM71,11.89a.74.74,0,1,1-1,.42.74.74,0,0,1,1-.42ZM68.21,11a.74.74,0,1,1-.54,1.37A.74.74,0,1,1,68.21,11Zm-2.92-.5a.73.73,0,0,1,.42,1,.74.74,0,0,1-1,.42.74.74,0,0,1,.54-1.37Z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <h3>
                                                        <strong>Pension</strong>
                                                    </h3>
                                                    <span class="plus">+<a style="font-size: 9px; vertical-align: super;">
                                                            &euro; </a>{{ parseFloat(accomod.unitCost) * accomod.Quantity
                                                            }}</span>
                                                </div>
                                            </summary>
                                            <summary v-else>
                                                <div>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#3B566E"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink" width="800px"
                                                            height="800px" viewBox="0 0 64 64" aria-hidden="true" role="img"
                                                            class="iconify iconify--emojione-monotone"
                                                            preserveAspectRatio="xMidYMid meet">
                                                            <path
                                                                d="M60.026 39.445v-5.854l-5.82-1.464l-.397-.744c-.469-.875-.856-1.433-1.154-1.657c-.33-.255-.889-.394-1.42-.468c-.401-.745-.676-.864-.835-.934a1.345 1.345 0 0 0-.536-.106c-.438 0-.967.208-1.408.43c-.679-.729-1.063-.734-1.267-.736h-.224c-2.12 0-4.896.154-7.912.42l-.798-1.016c-.023-.03-2.393-3.065-3.031-5.41l-.116-.425v-8.232s-2.338.345-3.488-2.554h-1.031s-.27.111-.725.168c-.922-.105-2.119-.521-3.388-1.719C23.145 6 19.965 6 19.965 6h-1.031s-3.558 0-7.28 3.145c-1.356 1.146-2.659 1.637-3.567 1.745c-.716-.032-1.155-.194-1.155-.194H5.9C4.615 13.594 2 13.249 2 13.249v28.222h.412v2.935H3.81l.635-2.028l9.599 6.145c.28 1.771 1.5 5.656 1.5 5.656s1.313-3.081 1.521-3.722l.958.612l.488 2.483l.572-1.805l3.075 1.971l.375 3.903l.552.379l1.331-.379l.637-3.64l34.016-5.672l.843 3.444l1.675-.276V47.89l.413-.07v-7.453l-1.974-.922M30.905 21.904c2.139 0 3.413.245 3.413.245c.697 2.559 3.197 5.738 3.197 5.738l-.311-.002c-6.207 0-10.847 1.852-10.847 1.852c-1.005-3.917-3.158-6.85-3.158-6.85a31.578 31.578 0 0 1 7.706-.983m-13.24.798c2.39 0 3.813.273 3.813.273c.78 2.862 3.574 6.417 3.574 6.417a35.864 35.864 0 0 0-.328-.002c-6.951 0-12.148 2.073-12.148 2.073c-1.124-4.382-3.534-7.661-3.534-7.661c3.45-.872 6.439-1.1 8.623-1.1m-9.038 2.155a24.905 24.905 0 0 1 2.621 5.425c-.463.112-.723.184-.723.184c-3.618-1.418-4.719-4.387-4.719-4.387a20.253 20.253 0 0 1 2.821-1.222m5.778 7.021c-.509.399-1.404 1.67-1.601 2.485c-.191.793.02 3.381.183 5.026L4.12 35.062v-5.214l3.173-.258a9.804 9.804 0 0 0 2.887 1.74l.298.117l.308-.088c.012-.003.276-.076.738-.186c.049.172.1.344.145.52l.264 1.028l.994-.395c.017-.006.602-.233 1.607-.53c-.043.026-.092.054-.129.082m6.389 15.257s-.509-2.401-.878-2.401c-.03 0-.061.017-.089.053c-.333.417-1.143 4.287-1.143 4.287s-.366-2.569-.798-2.569c-.042 0-.083.023-.125.074c-1.04 1.262-2.124 4.476-2.124 4.476s-1.313-5.22-1.042-7.374c.284-2.258 1.529-6.589 2.452-8.42c.444-.883 1.553-2.587 2.274-2.803c6.59-1.971 20.711-3.617 27.643-3.617h.213c.312.003 1.055 1.006 1.055 1.006s1.088-.7 1.631-.7c.061 0 .115.009.16.029c.208.091.595.95.595.95s1.139.085 1.469.339c.283.214.894 1.353.894 1.353s-1.645-.343-2.069-.355a29.067 29.067 0 0 0-.852-.012c-7.041 0-19.966 2.253-26.271 4.983c-.688.296-1.706 2.112-1.99 3.104c-.415 1.46-1.005 7.597-1.005 7.597m37.996-7.428l-35.001 4.955l-1.699-.829c.199-1.689.432-3.41.612-4.042c.199-.699.767-1.697 1.175-2.208l34.913-3.322v5.446" />
                                                        </svg>
                                                    </span>
                                                    <h3>
                                                        <strong>Suite ou cabine</strong>
                                                    </h3>
                                                    <span class="plus">+<a style="font-size: 9px; vertical-align: super;">
                                                            &euro; </a>{{ parseFloat(accomod.unitCost) * accomod.Quantity
                                                            }}</span>
                                                </div>
                                            </summary>
                                            <div>
                                                <dl>
                                                    <div>
                                                        <dt></dt>
                                                        <dd>{{ accomod.serviceName }}</dd>
                                                    </div>

                                                    <div>
                                                        <dt>Quantity</dt>
                                                        <dd>{{ accomod.Quantity }}</dd>
                                                    </div>

                                                    <div>
                                                        <dt>Price</dt>
                                                        <dd>{{ accomod.unitCost }}</dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </details>
                                    </div>
                                </div>

                                <div class="ticket-container" v-else-if="currentStep === '3'">
                                    <div class="credit-card-container">
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
                                            <input type="text" v-model="cardCredit.cardHolders" placeholder="Full Name" />
                                            <label for="Number">Card Number</label>
                                            <input type="text" placeholder="#### #### #### ####"
                                                v-model="cardCredit.cardNumber" @input="handleCardNumberInput"
                                                maxlength="19" />
                                            <div class="bottom">
                                                <div>
                                                    <label for="name">Expiration Date</label>
                                                    <select name="dob-year" class="datefield year"
                                                        v-model="cardCredit.year">
                                                        <option value="">Year</option>
                                                        <option v-for="year in getFutureYears()" :key="year" :value="year">
                                                            {{ year }}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <select name="dob-month" class="datefield month"
                                                        v-model="cardCredit.month">
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
                                                    <input type="text" v-on:keypress="NumbersOnly" v-model="cardCredit.cvv"
                                                        placeholder="###" maxlength="3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button class="submit" @click="handleNextClick()">Next</button>
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
import Eticket from "@/components/eticket.vue";
import VueJwtDecode from 'vue-jwt-decode';

export default defineComponent({

    components: {
        stepper,
        Eticket
    },

    data() {
        return {
            user: {},
            cardCredit: {
                cardHolders: "",
                cardNumber: "",
                month: "",
                year: "",
                cvv: "",
            },
            selectedMenu: "payment",
            passengersData: [],
            passengers: [],
            openSectionIndex: 0,
            submitted: false,
            currentStep: "1",
            selectedTrip: {}
        }

    },

    computed: {
        holder_number: function () {
            if (this.cardCredit.cardNumber.trim() == "") {
                return "#### #### #### ####";
            }
            return (
                this.cardCredit.cardNumber +
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

                    .splice(this.cardCredit.cardNumber.length, 19)
                    .join("")
            );
        },
        holder_month: function () {
            if (this.cardCredit.month.trim() == "") {
                return "mm";
            }
            return this.cardCredit.month;
        },
        holder_year: function () {
            if (this.cardCredit.year.trim() == "") {
                return "yyyy";
            }
            return this.cardCredit.year;
        },
        holder_cardHolders: function () {
            if (this.cardCredit.cardHolders.trim() == "") {
                return "Full Name";
            }
            return this.cardCredit.cardHolders;
        },
        holder_cvv: function () {
            if (this.cardCredit.cvv.trim() == "") {
                return "###";
            }
            return this.cardCredit.cvv + ["#", "#", "#"].splice(this.cardCredit.cvv.length, 3).join("");
        },
    },

    watch: {},

    methods: {
        logoutUser() {
            localStorage.removeItem("token");
            //localStorage.clear();
            this.$router.push({ path: "/login" });

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
            this.cardCredit.cardNumber = this.cardCredit.cardNumber.replace(/\D/g, "");
            this.cardCredit.cardNumber = this.cardCredit.cardNumber
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
        openServiceIndex(index) {
            const detailsElements = this.$el.getElementsByTagName('details');
            for (let i = 0; i < detailsElements.length; i++) {
                if (i !== index) {
                    detailsElements[i].removeAttribute('open');
                }
            }
        },
        handleNextClick() {
            let error = false
            if (this.currentStep === "1") {
                let errorIndex = null
                this.submitted = true
                this.passengersData.forEach((data, index) => {
                    if (!error && (data['type of id'] === 'Passport' && !data['expiry date'])) {
                        error = true
                        errorIndex = index
                    }
                    if (!error && (Object.values(data).some(value => value === '') || data.id < 8)) {
                        error = true
                        errorIndex = index

                    }
                })
                console.log(errorIndex)
                if (error) {
                    this.openSectionIndex = errorIndex
                    return
                }
                this.currentStep = "2"
                return
            }
            else if (this.currentStep === "2") {
                this.currentStep = "3"
            }
        },
        getCurrentDate() {
            const now = new Date()
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, "0") // Month is zero-based
            const day = String(now.getDate()).padStart(2, "0")
            return `${year}-${month}-${day}`
        },

        initPassengersArray(n) {
            this.passengersData = Array.from({ length: n }, () => (createPassengerDetail()));
            function createPassengerDetail() {
                return {
                    title: "",
                    "first name": "",
                    "last name": "",
                    "place of birth": "",
                    "date of birth": "",
                    gender: "",
                    "type of id": "",
                    id: ""
                };
            }
        },
        getMaxBD(category) {
            switch (category) {
                case "Adult":
                    return this.getYearsAgoDate(14)
                case "Child":
                    return this.getYearsAgoDate(2)
                case "Baby":
                    return this.getCurrentDate()
            }
        },

        getMinBD(category) {
            switch (category) {
                case "Adult":
                    return
                case "Child":
                    return this.getYearsAgoDate(14)
                case "Baby":
                    return this.getYearsAgoDate(2)
            }
        },
        getYearsAgoDate(years) {
            const today = new Date()
            const year = today.getFullYear() - years
            const month = String(today.getMonth() + 1).padStart(2, "0") // Month is 0-indexed
            const day = String(today.getDate()).padStart(2, "0")

            const formattedDate = `${year}-${month}-${day}`
            return formattedDate
        },
        toggleSection(index) {
            this.openSectionIndex === index ? this.openSectionIndex = null : this.openSectionIndex = index;
        },
        navMenuInit() {
            const menuLinks = this.$el.querySelectorAll(".menu-link")
            menuLinks.forEach((link) => {
                link.addEventListener("click", () => {
                    menuLinks.forEach((link) => {
                        link.classList.remove("is-active")
                    })
                    link.classList.add("is-active")
                });
            });

            const mainHeaderLinks = this.$el.querySelectorAll(".main-header-link")
            mainHeaderLinks.forEach((link) => {
                link.addEventListener("click", () => {
                    mainHeaderLinks.forEach((link) => {
                        link.classList.remove("is-active")
                    })
                    link.classList.add("is-active")
                })
            })

            const dropdowns = this.$el.querySelectorAll(".dropdown")
            dropdowns.forEach((dropdown) => {
                dropdown.addEventListener("click", (e) => {
                    e.stopPropagation()
                    dropdowns.forEach((c) => {
                        c.classList.remove("is-active")
                    })
                    dropdown.classList.add("is-active")
                });
            });

            const searchBarInput = this.$el.querySelector(".search-bar input")
            searchBarInput.addEventListener("focus", () => {
                this.$el.querySelector(".header").classList.add("wide")
            });
            searchBarInput.addEventListener("blur", () => {
                this.$el.querySelector(".header").classList.remove("wide")
            })

            document.addEventListener("click", (e) => {
                const container = this.$el.querySelector(".status-button")
                const dd = this.$el.querySelector(".dropdown")
                if (container) {
                    if (!container.contains(e.target) && !container.isSameNode(e.target)) {
                        dd.classList.remove("is-active")
                    }
                }
            })

            dropdowns.forEach((dropdown) => {
                dropdown.addEventListener("click", (e) => {
                    this.$el.querySelector(".content-wrapper").classList.add("overlay")
                    e.stopPropagation()
                })
                document.addEventListener("click", (e) => {
                    if (!e.target.classList.contains("dropdown")) {
                        this.$el.querySelector(".content-wrapper").classList.remove("overlay")
                    }
                })
            })

            const statusButtons = this.$el.querySelectorAll(".status-button:not(.open)")
            statusButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    this.$el.querySelector(".overlay-app").classList.add("is-active")
                })
            })

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
        initDropDownMenu() {
            const dropDownButton = document.getElementById('dropDown');
            const dropDownContent = document.querySelector('.drop-down');

            dropDownButton.addEventListener('click', function (event) {
                dropDownContent.classList.toggle('drop-down--active');
                event.stopPropagation(); // Prevent click from being immediately captured by document
            });

            document.addEventListener('click', function (event) {
                const isClickInsideDropDown = dropDownContent.contains(event.target) || dropDownButton.contains(event.target);

                if (!isClickInsideDropDown && dropDownContent.classList.contains('drop-down--active')) {
                    dropDownContent.classList.remove('drop-down--active');
                }
            });
        }
    },

    mounted() {
        this.initDropDownMenu()
        this.navMenuInit()
        this.passengers = JSON.parse(window.localStorage.getItem("tripOptions")).passengers
        this.user = VueJwtDecode.decode(window.localStorage.getItem('token'))
        this.initPassengersArray(this.passengers.length)
        this.selectedTrip = JSON.parse(localStorage.getItem('selectedTrip'))
        console.log(this.selectedTrip)
    },

});

</script>

<style name="dropdownMenu" scoped>
.modal-backdrop {
    z-index: 1!important;
}

.drop-down {
    display: inline-block;
    position: relative;
}

.drop-down__button {
    background: linear-gradient(to right, #3d6def, #8FADFE);
    display: inline-block;
    line-height: 40px;
    padding: 0 18px;
    text-align: left;
    border-radius: 4px;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

.drop-down__name {
    font-size: 9px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 800;
    letter-spacing: 2px;
}

.drop-down__icon {
    width: 18px;
    vertical-align: middle;
    margin-left: 14px;
    height: 18px;
    border-radius: 50%;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -ms-transition: all 0.4s;
    -o-transition: all 0.4s;

}



.drop-down__menu-box {
    position: absolute;
    width: 15rem !important;
    left: -7rem;
    background-color: rgb(240, 240, 240);
    border-radius: 4px;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    visibility: hidden;
    opacity: 0;
    margin-top: 5px;
}

.drop-down__menu {
    margin: 0;
    padding: 0 13px;
    list-style: none;

}

.drop-down__menu-box:before {
    content: '';
    background-color: transparent;
    border-right: 8px solid transparent;
    position: absolute;
    border-left: 8px solid transparent;
    border-bottom: 8px solid rgb(240, 240, 240);
    border-top: 8px solid transparent;
    top: -15px;
    right: 18px;

}

.drop-down__menu-box:after {
    content: '';
    background-color: transparent;
}

.drop-down__item {
    font-size: 13px;
    padding: 13px 0;
    text-align: left;
    font-weight: 500;
    color: #909dc2;
    cursor: pointer;
    position: relative;
    border-bottom: 1px solid #e0e2e9;
    display: flex;
}

.drop-down__item-icon {
    width: 15px;
    height: 15px;
    position: absolute;
    right: 0px;
    fill: #8995b6;

}

.drop-down__item:hover .drop-down__item-icon {
    fill: #3d6def;
}

.drop-down__item:hover {
    color: #3d6def;
}



.drop-down__item:last-of-type {
    border-bottom: 0;
}


.drop-down--active .drop-down__menu-box {
    visibility: visible;
    opacity: 1;
    margin-top: .8rem;
}

.drop-down__item:before {
    content: '';
    position: absolute;
    width: 3px;
    height: 28px;
    background-color: #3d6def;
    left: -13px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
}

.drop-down__item:hover:before {
    display: block;
}
</style>

<style lang="scss" name="summary-details">
summary {
    border-radius: 3rem;
    background-color: #ffffffa1;
    position: relative;
    cursor: pointer;
    padding: 1em .5em;
    list-style: none; // Remove arrow

    &::-webkit-details-marker {
        display: none; // Remove arrow
    }

    &:hover {
        background-color: #f2f5f9;
    }


    div {
        display: flex;
        align-items: center;
        padding: .5rem;
    }

    h3 {
        display: flex;
        flex-direction: column;
        margin: 0;
    }

    small {
        color: #084C61 !important;
        font-size: .875em;
    }

    strong {
        font-weight: 700;
        font-size: .9em;
    }

    span:first-child {
        width: 4rem;
        height: 4rem;
        border-radius: 10px;
        background-color: rgb(255, 193, 69, .52);
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        margin-right: 1.25em;

        svg {
            width: 2.25rem;
            height: 2.25rem;
        }
    }

    span:last-child {
        position: absolute;
        font-weight: 700;
        right: 5rem;
    }

    &:focus {
        outline: none;
    }

    .plus {
        color: #289672;
    }

    .plus a {
        color: #289672;
    }
}

details {
    border-bottom: 1px solid #b5bfd9;
    border-radius: 3rem;

    &[open] {
        box-shadow: -3px 0 0 #b5bfd9;
    }

    &:first-of-type {
        border-top: 1px solid #b5bfd9;
    }

    &>div {
        padding: 2em 2em 0;
        font-size: .875em;
    }
}

dl {
    display: flex;
    flex-wrap: nowrap;
    font-size: .8em !important;

    dt {
        font-weight: 600;
    }

    div {
        padding: 0rem 1rem 1rem 3rem;
    }
}
</style>

<style scoped name="form list">
.ticket-container {
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
}

.choices {
    background-color: #ffffffa1;
    width: 45rem;
    height: fit-content;
    margin-left: -5rem;
    border-radius: 4rem;
    padding: 3rem 2rem 3rem 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* background: linear-gradient(to top, #d9e9ff, #6991c8); */
}

.error-message-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.input-wrapper {
    display: flex !important;
    align-items: center !important;
}

.invalid {
    border-color: red !important;
    background-image: url(/public/img/icons/exclamation-circle-solid.svg) !important;
    background-repeat: no-repeat !important;
    background-position: right !important;
    background-size: 11% 35% !important;
}

.error-message {
    color: red !important;
    font-size: 0.7em !important;
    display: flex;
    justify-self: center
}

.error-message::after {
    content: "";
    flex-grow: 1;
}

.faq-title {
    background: #FFFFFF;
}

.faq-title h2::before {
    content: "";
    position: absolute;
    left: 50%;
    width: 60px;
    height: 2px;
    background: #E91E63;
    bottom: -25px;
    margin-left: -30px;
}

.faq {
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    min-width: 45dvw;
    margin-bottom: 4rem;
}

.faq .card {
    border: none;
    background: none;
}

.faq .card .card-header {
    padding: 0px;
    border: none;
    background: none;
    border-radius: 1rem;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}

.faq .card .card-header:hover {
    background: rgb(255, 193, 69);
    padding-left: 10px;
}

.faq .card .card-header .faq-title {
    width: 100%;
    text-align: left;
    padding: 0px;
    padding-left: 30px;
    padding-right: 30px;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 1px;
    color: #3B566E;
    text-decoration: none !important;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    padding-top: 20px;
    padding-bottom: 20px;
}

.faq .card .card-header .faq-title .badge {
    width: 2rem;
    height: 2rem;
    line-height: 1.4em;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    text-align: center;
    background: rgb(255, 193, 69);
    color: #fff;
    font-size: 12px;
    margin-right: 20px;
}

.faq .card .card-body {
    padding: 3rem;
    font-weight: 400;
    font-size: 16px;
    color: #6F8BA4;
    line-height: 28px;
    letter-spacing: 1px;
    border: 1px solid #F3F8FF;
    margin-bottom: 1.4rem;
}

.faq .card .card-body p {
    margin-bottom: 14px;
}

@media (max-width: 991px) {
    .faq {
        margin-bottom: 30px;
    }

    .faq .card .card-header .faq-title {
        line-height: 26px;
        margin-top: 10px;
    }
}
</style>

<style lang="scss" scoped>
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

<style scoped>
.passenger-form {
    display: flex;
    flex-direction: column;
    gap: .7rem;
    width: 43dvw;
    padding: 1rem;
    border-radius: 1rem;
    position: relative;
    align-items: stretch;
}

.flex {
    display: flex;
    width: 100%;
    gap: .7rem;
}

.passenger-form div {
    position: relative;
    display: inline-flex;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
    gap: 2rem;
    align-items: center;
    text-wrap: nowrap;
}

.passenger-form label {
    display: grid;
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
    max-width: 50rem;
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
    width: 30rem;
    align-self: center;
}

.submit:hover {
    background-color: rgba(255, 193, 69, 0.78);
}
</style>

<style lang="scss" scoped>
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
            width: 2rem !important;
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
        width: 6rem !important;
        height: 6rem !important;
        border-radius: 50% !important;
        object-fit: cover !important;
        border: .3rem solid rgb(240, 240, 240) !important;
        margin-left: 2.5rem !important;
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

<style name="credit-card">
.credit-card-container {
    padding: 1rem;
    min-height: 58vh;
    width: 55vw;
    display: grid;
    grid-template-columns: 40% 60%;
    gap: 4rem;
}

.credit-card-container .card-area,
.credit-card-container .form {
    background-color: rgb(255, 193, 69);
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
    background-color: rgba(8, 76, 97, 0.1294117647);
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
</style>