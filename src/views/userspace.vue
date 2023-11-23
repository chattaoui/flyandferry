<template>
    <div id="userspace">
        <div class="video-bg">
        <img
            src="https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2547.jpg?w=1380&t=st=1700753706~exp=1700754306~hmac=aed8a6ced6a99331aa4432946b45efbe9ef555f5e6d5bc11fde07fe2f387f98e">
    </div>
    <div class="dark-light">
        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
    </div>
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
                    <div class="side-title">Apps</div>
                    <div class="side-menu">
                        <a href="#">
                            <svg viewBox="0 0 512 512">
                                <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <path
                                        d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0"
                                        data-original="#bfc9d1" />
                                </g>
                                <path xmlns="http://www.w3.org/2000/svg" d="M192 192h128v128H192zm0 0" fill="currentColor"
                                    data-original="#82b1ff" />
                                <path xmlns="http://www.w3.org/2000/svg"
                                    d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0"
                                    fill="currentColor" data-original="#bfc9d1" />
                            </svg>
                            All Apps
                        </a>
                        <a href="#">
                            <svg viewBox="0 0 488.932 488.932" fill="currentColor">
                                <path
                                    d="M243.158 61.361v-57.6c0-3.2 4-4.9 6.7-2.9l118.4 87c2 1.5 2 4.4 0 5.9l-118.4 87c-2.7 2-6.7.2-6.7-2.9v-57.5c-87.8 1.4-158.1 76-152.1 165.4 5.1 76.8 67.7 139.1 144.5 144 81.4 5.2 150.6-53 163-129.9 2.3-14.3 14.7-24.7 29.2-24.7 17.9 0 31.8 15.9 29 33.5-17.4 109.7-118.5 192-235.7 178.9-98-11-176.7-89.4-187.8-187.4-14.7-128.2 84.9-237.4 209.9-238.8z" />
                            </svg>
                            Updates
                            <span class="notification-number updates">3</span>
                        </a>
                    </div>
                </div>
                <div class="side-wrapper">
                    <div class="side-title">Categories</div>
                    <div class="side-menu">
                        <a href="#">
                            <svg viewBox="0 0 488.455 488.455" fill="currentColor">
                                <path
                                    d="M287.396 216.317c23.845 23.845 23.845 62.505 0 86.35s-62.505 23.845-86.35 0-23.845-62.505 0-86.35 62.505-23.845 86.35 0" />
                                <path
                                    d="M427.397 91.581H385.21l-30.544-61.059H133.76l-30.515 61.089-42.127.075C27.533 91.746.193 119.115.164 152.715L0 396.86c0 33.675 27.384 61.074 61.059 61.074h366.338c33.675 0 61.059-27.384 61.059-61.059V152.639c-.001-33.674-27.385-61.058-61.059-61.058zM244.22 381.61c-67.335 0-122.118-54.783-122.118-122.118s54.783-122.118 122.118-122.118 122.118 54.783 122.118 122.118S311.555 381.61 244.22 381.61z" />
                            </svg>
                            Photography
                        </a>
                        <a href="#">
                            <svg viewBox="0 0 512 512" fill="currentColor">
                                <circle cx="295.099" cy="327.254" r="110.96" transform="rotate(-45 295.062 327.332)" />
                                <path
                                    d="M471.854 338.281V163.146H296.72v41.169a123.1 123.1 0 01121.339 122.939c0 3.717-.176 7.393-.5 11.027zM172.14 327.254a123.16 123.16 0 01100.59-120.915L195.082 73.786 40.146 338.281H172.64c-.325-3.634-.5-7.31-.5-11.027z" />
                            </svg>
                            Graphic Design
                        </a>
                        <a href="#">
                            <svg viewBox="0 0 58 58" fill="currentColor">
                                <path
                                    d="M57 6H1a1 1 0 00-1 1v44a1 1 0 001 1h56a1 1 0 001-1V7a1 1 0 00-1-1zM10 50H2v-9h8v9zm0-11H2v-9h8v9zm0-11H2v-9h8v9zm0-11H2V8h8v9zm26.537 12.844l-11 7a1.007 1.007 0 01-1.018.033A1.001 1.001 0 0124 36V22a1.001 1.001 0 011.538-.844l11 7a1.003 1.003 0 01-.001 1.688zM56 50h-8v-9h8v9zm0-11h-8v-9h8v9zm0-11h-8v-9h8v9zm0-11h-8V8h8v9z" />
                            </svg>
                            Video
                        </a>
                        <a href="#">
                            <svg viewBox="0 0 512 512" fill="currentColor">
                                <path
                                    d="M499.377 46.402c-8.014-8.006-18.662-12.485-29.985-12.613a41.13 41.13 0 00-.496-.003c-11.142 0-21.698 4.229-29.771 11.945L198.872 275.458c25.716 6.555 47.683 23.057 62.044 47.196a113.544 113.544 0 0110.453 23.179L500.06 106.661C507.759 98.604 512 88.031 512 76.89c0-11.507-4.478-22.33-12.623-30.488zM176.588 302.344a86.035 86.035 0 00-3.626-.076c-20.273 0-40.381 7.05-56.784 18.851-19.772 14.225-27.656 34.656-42.174 53.27C55.8 397.728 27.795 409.14 0 416.923c16.187 42.781 76.32 60.297 115.752 61.24 1.416.034 2.839.051 4.273.051 44.646 0 97.233-16.594 118.755-60.522 23.628-48.224-5.496-112.975-62.192-115.348z" />
                            </svg>
                            Illustrations
                        </a>
                        <a href="#">
                            <svg viewBox="0 0 512 512" fill="currentColor">
                                <path
                                    d="M497 151H316c-8.401 0-15 6.599-15 15v300c0 8.401 6.599 15 15 15h181c8.401 0 15-6.599 15-15V166c0-8.401-6.599-15-15-15zm-76 270h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15zm0-180h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15z" />
                                <path
                                    d="M15 331h196v60h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h135v-30h-30v-60h30V166c0-24.814 20.186-45 45-45h135V46c0-8.284-6.716-15-15-15H15C6.716 31 0 37.716 0 46v270c0 8.284 6.716 15 15 15z" />
                            </svg>
                            UI/UX
                        </a>
                        <a href="#">
                            <svg viewBox="0 0 512 512" fill="currentColor">
                                <path
                                    d="M0 331v112.295a14.996 14.996 0 007.559 13.023L106 512V391L0 331zM136 391v121l105-60V331zM271 331v121l105 60V391zM406 391v121l98.441-55.682A14.995 14.995 0 00512 443.296V331l-106 60zM391 241l-115.754 57.876L391 365.026l116.754-66.15zM262.709 1.583a15.006 15.006 0 00-13.418 0L140.246 57.876 256 124.026l115.754-66.151L262.709 1.583zM136 90v124.955l105 52.5V150zM121 241L4.246 298.876 121 365.026l115.754-66.15zM271 150v117.455l105-52.5V90z" />
                            </svg>
                            3D/AR
                        </a>
                    </div>
                </div>
                <div class="side-wrapper">
                    <div class="side-title">Fonts</div>
                    <div class="side-menu">
                        <a href="#">
                            <svg viewBox="0 0 332 332" fill="currentColor">
                                <path
                                    d="M282.341 8.283C275.765 2.705 266.211 0 253.103 0c-18.951 0-36.359 5.634-51.756 16.743-14.972 10.794-29.274 28.637-42.482 53.028-4.358 7.993-7.428 11.041-8.973 12.179h-26.255c-10.84 0-19.626 8.786-19.626 19.626 0 8.989 6.077 16.486 14.323 18.809l-.05.165h.589c1.531.385 3.109.651 4.757.651h18.833l-32.688 128.001c-7.208 27.848-10.323 37.782-11.666 41.24-1.445 3.711-3.266 7.062-5.542 10.135-.42-5.39-2.637-10.143-6.508-13.854-4.264-4.079-10.109-6.136-17.364-6.136-8.227 0-15.08 2.433-20.37 7.229-5.416 4.93-8.283 11.193-8.283 18.134 0 5.157 1.701 12.712 9.828 19.348 6.139 4.97 14.845 7.382 26.621 7.382 17.096 0 32.541-4.568 45.891-13.577 13.112-8.845 24.612-22.489 34.166-40.522 9.391-17.678 18.696-45.124 28.427-83.9l18.598-73.479h30.016c10.841 0 19.625-8.785 19.625-19.625s-8.784-19.626-19.625-19.626h-19.628c6.34-21.62 14.175-37.948 23.443-48.578 2.284-2.695 5.246-5.692 8.412-7.678-1.543 3.392-2.325 6.767-2.325 10.055 0 6.164 2.409 11.714 6.909 16.03 4.484 4.336 10.167 6.54 16.888 6.54 7.085 0 13.373-2.667 18.17-7.716 4.76-5.005 7.185-11.633 7.185-19.703.017-9.079-3.554-16.899-10.302-22.618z" />
                            </svg>
                            Manage Fonts
                        </a>
                    </div>
                </div>
                <div class="side-wrapper">
                    <div class="side-title">Resource Links</div>
                    <div class="side-menu">
                        <a href="#">
                            <svg viewBox="0 0 512 512" fill="currentColor">
                                <path
                                    d="M467 0H45C20.186 0 0 20.186 0 45v422c0 24.814 20.186 45 45 45h422c24.814 0 45-20.186 45-45V45c0-24.814-20.186-45-45-45zM181 241c41.353 0 75 33.647 75 75s-33.647 75-75 75-75-33.647-75-75c0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45zm180 120h30c8.291 0 15 6.709 15 15s-6.709 15-15 15h-30c-24.814 0-45-20.186-45-45V211h-15c-8.291 0-15-6.709-15-15s6.709-15 15-15h15v-45c0-8.291 6.709-15 15-15s15 6.709 15 15v45h45c8.291 0 15 6.709 15 15s-6.709 15-15 15h-45v135c0 8.276 6.724 15 15 15z" />
                            </svg>
                            Stock
                        </a>
                        <a href="#">
                            <svg viewBox="0 0 511.441 511.441" fill="currentColor">
                                <path d="M255.721 347.484L90.22 266.751v106.57l165.51 73.503 165.509-73.503V266.742z" />
                                <path
                                    d="M511.441 189.361L255.721 64.617 0 189.361l255.721 124.744 195.522-95.378v111.032h30V204.092z" />
                            </svg>
                            Tutorials
                        </a>
                        <a href="#">
                            <svg viewBox="0 0 512 512" fill="currentColor">
                                <path d="M196 151h-75v90h75c24.814 0 45-20.186 45-45s-20.186-45-45-45z" />
                                <path
                                    d="M467 0H45C20.186 0 0 20.186 0 45v422c0 24.814 20.186 45 45 45h422c24.814 0 45-20.186 45-45V45c0-24.814-20.186-45-45-45zM196 271h-75v105c0 8.291-6.709 15-15 15s-15-6.709-15-15V136c0-8.291 6.709-15 15-15h90c41.353 0 75 33.647 75 75s-33.647 75-75 75zm210-60c8.291 0 15 6.709 15 15s-6.709 15-15 15h-45v135c0 8.291-6.709 15-15 15s-15-6.709-15-15V241h-15c-8.291 0-15-6.709-15-15s6.709-15 15-15h15v-45c0-24.814 20.186-45 45-45h30c8.291 0 15 6.709 15 15s-6.709 15-15 15h-30c-8.276 0-15 6.724-15 15v45h45z" />
                            </svg>
                            Portfolio
                        </a>
                        <a href="#">
                            <svg viewBox="0 0 512 512" fill="currentColor">
                                <path
                                    d="M181 181h-60v60h60c16.54 0 30-13.46 30-30s-13.46-30-30-30zm0 0M181 271h-60v60h60c16.54 0 30-13.46 30-30s-13.46-30-30-30zm0 0M346 241c-19.555 0-36.238 12.54-42.438 30h84.875c-6.199-17.46-22.882-30-42.437-30zm0 0" />
                                <path
                                    d="M436 0H75C33.648 0 0 33.648 0 75v362c0 41.352 33.648 75 75 75h361c41.352 0 76-33.648 76-75V75c0-41.352-34.648-75-76-75zM286 151h120v30H286zm-45 150c0 33.09-26.91 60-60 60H91V151h90c33.09 0 60 26.91 60 60 0 18.008-8.133 33.996-20.73 45 12.597 11.004 20.73 26.992 20.73 45zm180 0H303.562c6.196 17.46 22.883 30 42.438 30 16.012 0 30.953-8.629 38.992-22.516l25.957 15.032C397.58 346.629 372.687 361 346 361c-41.352 0-75-33.648-75-75s33.648-75 75-75 75 33.648 75 75zm0 0" />
                            </svg>
                            Behance
                        </a>
                        <a href="#">
                            <svg viewBox="0 0 512 512" fill="currentColor">
                                <path
                                    d="M352 0H64C28.704 0 0 28.704 0 64v320a16.02 16.02 0 009.216 14.496A16.232 16.232 0 0016 400c3.68 0 7.328-1.248 10.24-3.712L117.792 320H352c35.296 0 64-28.704 64-64V64c0-35.296-28.704-64-64-64z" />
                                <path
                                    d="M464 128h-16v128c0 52.928-43.072 96-96 96H129.376L128 353.152V400c0 26.464 21.536 48 48 48h234.368l75.616 60.512A16.158 16.158 0 00496 512c2.336 0 4.704-.544 6.944-1.6A15.968 15.968 0 00512 496V176c0-26.464-21.536-48-48-48z" />
                            </svg>
                            Social Forum
                        </a>
                    </div>
                </div>
            </div>
            <div class="main-container">
                <div class="main-header">
                    <a class="menu-link-main" href="#">All Apps</a>
                    <div class="header-menu">
                        <a class="main-header-link is-active" href="#">Desktop</a>
                        <a class="main-header-link" href="#">Mobile</a>
                        <a class="main-header-link" href="#">Web</a>

                    </div>
                </div>
                <div class="content-wrapper">
                    <div class="content-wrapper-header">
                        <div class="content-wrapper-context">
                            <h3 class="img-content">
                                <svg viewBox="0 0 512 512">
                                    <path
                                        d="M467 0H45C20.099 0 0 20.099 0 45v422c0 24.901 20.099 45 45 45h422c24.901 0 45-20.099 45-45V45c0-24.901-20.099-45-45-45z"
                                        fill="#d6355b" data-original="#ff468c" />
                                    <path xmlns="http://www.w3.org/2000/svg"
                                        d="M512 45v422c0 24.901-20.099 45-45 45H256V0h211c24.901 0 45 20.099 45 45z"
                                        fill="#d6355b" data-original="#d72878" />
                                    <path xmlns="http://www.w3.org/2000/svg"
                                        d="M467 30H45c-8.401 0-15 6.599-15 15v422c0 8.401 6.599 15 15 15h422c8.401 0 15-6.599 15-15V45c0-8.401-6.599-15-15-15z"
                                        fill="#2e000a" data-original="#700029" />
                                    <path xmlns="http://www.w3.org/2000/svg"
                                        d="M482 45v422c0 8.401-6.599 15-15 15H256V30h211c8.401 0 15 6.599 15 15z"
                                        fill="#2e000a" data-original="#4d0e06" />
                                    <path xmlns="http://www.w3.org/2000/svg"
                                        d="M181 391c-41.353 0-75-33.647-75-75 0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45c41.353 0 75 33.647 75 75s-33.647 75-75 75z"
                                        fill="#d6355b" data-original="#ff468c" />
                                    <path xmlns="http://www.w3.org/2000/svg"
                                        d="M391 361h-30c-8.276 0-15-6.724-15-15V211h45c8.291 0 15-6.709 15-15s-6.709-15-15-15h-45v-45c0-8.291-6.709-15-15-15s-15 6.709-15 15v45h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h15v135c0 24.814 20.186 45 45 45h30c8.291 0 15-6.709 15-15s-6.709-15-15-15z"
                                        fill="#d6355b" data-original="#d72878" />
                                </svg>
                                Adobe Stock
                            </h3>
                            <div class="content-text">Grab yourself 10 free images from Adobe Stock in a 30-day free trial
                                plan and find perfect image, that will help you with your new project.</div>
                            <button class="content-button">Start free trial</button>
                        </div>
                        <img class="content-wrapper-img" src="https://assets.codepen.io/3364143/glass.png" alt="">
                    </div>
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
                                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather close feather-x-circle">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M15 9l-6 6M9 9l6 6" />
                                            </svg>
                                        </div>
                                        <div class="pop-up__subtitle">Adjust your selections for advanced options as desired
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

export default defineComponent({

    name: '',

    props: {},

    data() {

        return {

        }

    },

    components: {},

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
    if (!container.contains(e.target) && !container.isSameNode(e.target)) {
      dd.classList.remove("is-active");
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
        this.navMenuInit()
    },

});

</script>

<style lang="scss">
#userspace {
    --theme-bg-color: rgba(255, 255, 255, 0.089)!important;
    --theme-color: #3c3a3a!important;
    --inactive-color: #333333!important;
    --button-inactive: #3c3a3a!important;
    --search-bg: rgb(255 255 255 / 31%)!important;
    --dropdown-bg: #f7f7f7!important;
    --overlay-bg: rgb(255 255 255 / 30%)!important;
    --dropdown-hover: rgb(236 236 236)!important;
    --border-color: rgb(255 255 255 / 35%)!important;
    --popup-bg: rgb(255 255 255)!important;
    --hover-menu-bg: rgba(255 255 255 / 35%)!important;
    --scrollbar-bg: rgb(255 253 253 / 57%)!important;
    --content-title-color: --theme-color!important;

html {
    box-sizing: border-box!important;
    -webkit-font-smoothing: antialiased!important;
}


.video-bg {
    position: fixed!important;
    right: 0!important;
    top: 0!important;
    width: 100%!important;
    height: 100%!important;

    img {
        width: 100%!important;
        height: 100%!important;
        object-fit: cover!important;
    }
}

img {
    max-width: 100%!important;
}

.dark-light {
    position: fixed!important;
    bottom: 50px!important;
    right: 30px!important;
    background-color: var(--dropdown-bg)!important;
    box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2)!important;
    padding: 8px!important;
    border-radius: 50%!important;
    z-index: 3!important;
    cursor: pointer!important;

    svg {
        width: 24px!important;
        flex-shrink: 0!important;
        fill: #ffce45!important;
        stroke: #ffce45!important;
        transition: 0.5s!important;
    }
}

    .dark-light svg {
        fill: transparent!important;
        stroke: var(--theme-color)!important;
    }

    .profile-img {
        border: 2px solid var(--theme-bg-color)
    }

    .content-section ul {
        background-color: var(--theme-bg-color)!important;
    }

    .pop-up__title {
        border-color: var(--theme-color)!important;
    }

    .dropdown.is-active ul {
        background-color: rgb(255 255 255 / 94%)!important;
    }


body.light-mode:before,
body.light-mode .video-bg:before {
    content: ""!important;
    position: absolute!important;
    left: 0!important;
    top: 0!important;
    width: 100%!important;
    height: 100vh!important;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.72) 0%, rgb(255 255 255 / 45%) 100%)!important;
    backdrop-filter: saturate(3)!important;
}

.app {
    background-color: var(--theme-bg-color)!important;
    width: 100dvw !important;
    height: 100dvh!important;
    display: flex!important;
    flex-direction: column!important;
    overflow: hidden!important;
    position: relative!important;
    width: 100%!important;
    backdrop-filter: blur(20px)!important;
    -webkit-backdrop-filter: blur(20px)!important;
    font-size: 15px!important;
    font-weight: 500!important;
}

.header {
    display: flex!important;
    align-items: center!important;
    flex-shrink: 0!important;
    height: 58px!important;
    width: 100%!important;
    border-bottom: 1px solid var(--border-color)!important;
    padding: 0 30px!important;
    white-space: nowrap!important;

    @media screen and (max-width: 480px) {
        padding: 0 16px!important;
    }

    &-menu {
        display: flex!important;
        align-items: center!important;

        a {
            padding: 20px 30px!important;
            text-decoration: none!important;
            color: var(--inactive-color)!important;
            border-bottom: 2px solid transparent!important;
            transition: 0.3s!important;

            @media screen and (max-width: 610px) {
                &:not(.main-header-link) {
                    display: none!important;
                }
            }

            &.is-active,
            &:hover {
                color: var(--theme-color)!important;
                border-bottom: 2px solid var(--theme-color)!important;
            }
        }
    }
}

.notify {
    position: relative!important;

    &:before {
        content: ""!important;
        position: absolute!important;
        background-color: #3a6df0!important;
        width: 6px!important;
        height: 6px!important;
        border-radius: 50%!important;
        right: 20px!important;
        top: 16px!important;
    }

    @media screen and (max-width: 1055px) {
        display: none!important;
    }
}

.menu-circle {
    width: 11dvw!important;
    padding: 4rem!important;
}

.search-bar {
    height: 5vh!important;
    display: flex!important;
    width: 100%!important;
    max-width: 400px!important;
    padding-left: 16px!important;
    border-radius: 4px!important;
    margin-left: auto !important;

    input {
        width: 100%!important;
        height: 100%!important;
        border: none!important;
        background-color: var(--search-bg)!important;
        border-radius: 4px!important;
        font-family: var(--body-font)!important;
        font-size: 15px!important;
        font-weight: 500!important;
        padding: 0 20px 0 40px!important;
        box-shadow: 0 0 0 2px rgb(134 140 160 / 2%)!important;
        background-image: url("data:image/svg+xml!important;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e")!important;
        background-size: 14px!important;
        background-repeat: no-repeat!important;
        background-position: 16px 48%!important;
        color: var(--theme-color)!important;

        &::placeholder {
            font-family: var(--body-font)!important;
            color: var(--inactive-color)!important;
            font-size: 15px!important;
            font-weight: 500!important;
        }
    }
}



.header-profile {
    display: flex!important;
    align-items: center!important;
    padding: 0 16px 0 40px!important;
    margin-left: auto!important;
    flex-shrink: 0!important;

    svg {
        width: 22px!important;
        color: #f9fafb!important;
        flex-shrink: 0!important;
    }
}

.notification {
    position: relative!important;

    &-number {
        position: absolute!important;
        background-color: #3a6df0!important;
        width: 16px!important;
        height: 16px!important;
        border-radius: 50%!important;
        font-size: 10px!important;
        display: flex!important;
        align-items: center!important;
        justify-content: center!important;
        color: #fff!important;
        right: -6px!important;
        top: -6px!important;
    }

    &+svg {
        margin-left: 22px!important;

        @media screen and (max-width: 945px) {
            display: none!important;
        }
    }
}

.profile-img {
    width: 32px!important;
    height: 32px!important;
    border-radius: 50%!important;
    object-fit: cover!important;
    border: 2px solid var(--theme-color)!important;
    margin-left: 22px!important;
}

.wide {

    .header-menu,
    .header-profile {
        display: none!important;
    }

    .search-bar {
        max-width: 600px!important;
        margin: auto!important;
        transition: 0.4s!important;
        box-shadow: 0 0 0 1px var(--border-color)!important;
        padding-left: 0!important;
    }

    .menu-circle {
        margin-right: 0!important;
    }
}

.wrapper {
    display: flex!important;
    flex-grow: 1!important;
    overflow: hidden!important;
}

.left-side {
    flex-basis: 240px!important;
    border-right: 1px solid var(--border-color)!important;
    padding: 26px!important;
    overflow: auto!important;
    flex-shrink: 0!important;

    @media screen and (max-width: 945px) {
        display: none!important;
    }
}

.side-wrapper+.side-wrapper {
    margin-top: 20px!important;
}

.side-title {
    color: var(--inactive-color)!important;
    margin-bottom: 14px!important;
}

.side-menu {
    display: flex!important;
    flex-direction: column!important;
    white-space: nowrap!important;

    a {
        text-decoration: none!important;
        color: var(--theme-color)!important;
        display: flex!important;
        align-items: center!important;
        font-weight: 400!important;
        padding: 10px!important;
        font-size: 14px!important;
        border-radius: 6px!important;
        transition: 0.3s!important;

        &:hover {
            background-color: var(--hover-menu-bg)!important;
        }
    }

    svg {
        width: 16px!important;
        margin-right: 8px!important;
    }
}

.updates {
    position: relative!important;
    top: 0!important;
    right: 0!important;
    margin-left: auto!important;
    width: 18px!important;
    height: 18px!important;
    font-size: 11px!important;
}

.main-header {
    display: flex!important;
    align-items: center!important;
    border-bottom: 1px solid var(--border-color)!important;
    height: 58px!important;
    flex-shrink: 0!important;

    .header-menu {
        margin-left: 150px!important;

        @media screen and (max-width: 1055px) {
            margin: auto!important;
        }

        a {
            padding: 20px 24px!important;
        }
    }
}

.main-container {
    display: flex!important;
    flex-direction: column!important;
    flex-grow: 1!important;
}

.menu-link-main {
    text-decoration: none!important;
    color: var(--theme-color)!important;
    padding: 0 30px!important;

    @media screen and (max-width: 1055px) {
        display: none!important;
    }
}

.content-wrapper {
    display: flex!important;
    flex-direction: column!important;
    color: var(--theme-color)!important;
    padding: 20px 40px!important;
    height: 100%!important;
    overflow: auto!important;
    background-color: var(--theme-bg-color)!important;

    @media screen and (max-width: 510px) {
        padding: 20px!important;
    }

    &-header {
        display: flex!important;
        align-items: center!important;
        width: 100%!important;
        justify-content: space-between!important;
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
                #ffe652)!important;
        border-radius: 14px!important;
        padding: 20px 40px!important;

        @media screen and (max-width: 415px) {
            padding: 20px!important;
        }
    }

    &.overlay {
        pointer-events: none!important;
        transition: 0.3s!important;
        background-color: var(--overlay-bg)!important;
    }
}

.overlay-app {
    width: 100%!important;
    height: 100%!important;
    position: fixed!important;
    left: 0!important;
    top: 0!important;
    pointer-events: all!important;
    background-color: rgba(36, 39, 59, 0.8)!important;
    opacity: 0!important;
    visibility: hidden!important;
    transition: 0.3s!important;

    &.is-active {
        visibility: visible!important;
        opacity: 1!important;
    }
}

.img-content {
    font-weight: 500!important;
    font-size: 17px!important;
    display: flex!important;
    align-items: center!important;
    margin: 0!important;

    svg {
        width: 28px!important;
        margin-right: 14px!important;
    }
}

.content-text {
    font-weight: 400!important;
    font-size: 14px!important;
    margin-top: 16px!important;
    line-height: 1.7em!important;
    color: #ebecec!important;
    display: -webkit-box!important;
    -webkit-line-clamp: 4!important;
    -webkit-box-orient: vertical!important;
    overflow: hidden!important;
    text-overflow: ellipsis!important;
}

.content-wrapper-context {
    max-width: 350px!important;
}

.content-button {
    background-color: #3a6df0!important;
    border: none!important;
    padding: 8px 26px!important;
    color: #fff!important;
    border-radius: 20px!important;
    margin-top: 16px!important;
    cursor: pointer!important;
    transition: 0.3s!important;
    white-space: nowrap!important;
}

.content-wrapper-img {
    width: 186px!important;
    object-fit: cover!important;
    margin-top: -25px!important;
    object-position: center!important;

    @media screen and (max-width: 570px) {
        width: 110px!important;
    }
}

.content-section {
    margin-top: 30px!important;
    display: flex!important;
    flex-direction: column!important;

    &-title {
        color: var(--content-title-color)!important;
        margin-bottom: 14px!important;
    }

    ul {
        display: flex!important;
        flex-direction: column!important;
        width: 100%!important;
        height: 100%!important;
        justify-content: space-around!important;
        background-color: var(--content-bg)!important;
        padding-left: 0!important;
        margin: 0!important;
        border-radius: 14px!important;
        border: 1px solid var(--theme-bg-color)!important;
        cursor: pointer!important;

        li {
            list-style: none!important;
            padding: 10px 18px!important;
            display: flex!important;
            align-items: center!important;
            font-size: 16px!important;
            width: 100%!important;
            height: 100%!important;
            white-space: nowrap!important;
            transition: 0.3s!important;

            &:hover {
                background-color: var(--theme-bg-color)!important;

                &:first-child {
                    border-radius: 13px 13px 0 0!important;
                }

                &:last-child {
                    border-radius: 0 0 13px 13px!important;
                }
            }

            &+li {
                border-top: 1px solid var(--border-color)!important;
            }
        }

        svg {
            width: 28px!important;
            border-radius: 6px!important;
            margin-right: 16px!important;
            flex-shrink: 0!important;
        }
    }
}

.products {
    display: flex!important;
    align-items: center!important;
    width: 150px!important;

    @media screen and (max-width: 480px) {
        width: 120px!important;
    }
}

.status {
    margin-left: auto!important;
    width: 140px!important;
    font-size: 15px!important;
    position: relative!important;

    @media screen and (max-width: 700px) {
        display: none!important;
    }

    &-circle {
        width: 6px!important;
        height: 6px!important;
        background-color: #396df0!important;
        position: absolute!important;
        border-radius: 50%!important;
        top: 4px!important;
        left: -20px!important;

        &.green {
            background-color: #3bf083!important;
        }
    }

    &-button {
        font-size: 15px!important;
        margin-top: 0!important;
        padding: 6px 24px!important;

        @media screen and (max-width: 390px) {
            padding: 6px 14px!important;
        }

        &.open {
            background: none!important;
            color: var(--button-inactive)!important;
            border: 1px solid var(--button-inactive)!important;
        }

        &:not(.open):hover {
            color: #fff!important;
            border-color: #fff!important;
        }
    }
}

.content-button:not(.open):hover {
    background: #1e59f1!important;
}

.menu {
    width: 5px!important;
    height: 5px!important;
    background-color: var(--button-inactive)!important;
    border-radius: 50%!important;
    box-shadow: 7px 0 0 0 var(--button-inactive), 14px 0 0 0 var(--button-inactive)!important;
    margin: 0 12px!important;
}

@media screen and (max-width: 415px) {
    .adobe-product .menu {
        display: none!important;
    }
}

.dropdown {
    position: relative!important;
    height: 53px!important;
    width: 40px!important;
    top: -24px!important;
    display: flex!important;
    left: -5px!important;
    background: transparent!important;
    border: none!important;
    cursor: pointer!important;

    ul {
        position: absolute!important;
        background: var(--dropdown-bg)!important;
        height: 110px!important;
        width: 120px!important;
        right: 0!important;
        top: 20px!important;
        pointer-events: none!important;
        opacity: 0!important;
        transform: translatey(10px)!important;
        transition: all 0.4s ease!important;

        li a {
            text-decoration: none!important;
            color: var(--theme-color)!important;
            font-size: 12px!important;
        }
    }
}

.dropdown.is-active {
    ul {
        opacity: 1!important;
        pointer-events: all!important;
        transform: translatey(25px)!important;

        li:hover {
            background-color: var(--dropdown-hover)!important;
        }
    }
}

.button-wrapper {
    display: flex!important;
    align-items: center!important;
    justify-content: flex-end!important;
    width: 187px!important;
    margin-left: auto!important;

    @media screen and (max-width: 480px) {
        width: auto!important;
    }
}

.pop-up {
    position: absolute!important;
    padding: 30px 40px!important;
    top: 50%!important;
    left: 50%!important;
    transform: (translate(-50%, -50%))!important;
    overflow-y: auto!important;
    box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.4)!important;
    transition: all 0.3s!important;
    z-index: 10!important;
    background-color: var(--popup-bg)!important;
    width: 500px!important;
    visibility: hidden!important;
    opacity: 0!important;
    border-radius: 6px!important;
    display: flex!important;
    flex-direction: column!important;
    white-space: normal!important;

    @media screen and (max-width: 570px) {
        width: 100%!important;
    }

    &.visible {
        visibility: visible!important;
        opacity: 1!important;
    }

    &__title {
        padding-bottom: 20px!important;
        border-bottom: 1px solid var(--border-color)!important;
        display: flex!important;
        justify-content: space-between!important;
        align-items: center!important;
    }

    &__subtitle {
        white-space: normal!important;
        margin: 20px 0!important;
        font-size: 14px!important;
        font-weight: 400!important;
        line-height: 1.8em!important;

        a {
            color: var(--theme-color)!important;
        }
    }
}

.content-button-wrapper .content-button.status-button.open.close {
    width: auto!important;
}

.content-section .close {
    margin-right: 0!important;
    width: 24px!important;
}

.checkbox-wrapper {
    display: flex!important;
    align-items: center!important;
    font-size: 14px!important;
    font-weight: 400!important;

    &+.checkbox-wrapper {
        margin: 20px 0 40px!important;
    }
}

.checkbox {
    display: none!important;
}

.checkbox+label {
    display: flex!important;
    align-items: center!important;

    &:before {
        content: ""!important;
        margin-right: 10px!important;
        width: 15px!important;
        height: 15px!important;
        border: 1px solid var(--theme-color)!important;
        border-radius: 4px!important;
        cursor: pointer!important;
        flex-shrink: 0!important;
    }
}

.checkbox:checked+label:before {
    background-color: #3a6df0!important;
    border-color: #3a6df0!important;
    background-image: url("data:image/svg+xml!important;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3e%3cpath d='M20 6L9 17l-5-5'/%3e%3c/svg%3e")!important;
    background-position: 50%!important;
    background-size: 12px!important;
    background-repeat: no-repeat!important;
}

.content-button-wrapper {
    margin-top: auto!important;
    margin-left: auto!important;

    .open {
        margin-right: 8px!important;
    }
}

.apps-card {
    display: flex!important;
    align-items: center!important;
    flex-wrap: wrap!important;
    width: calc(100% + 20px)!important;
}

.app-card {
    display: flex!important;
    flex-direction: column!important;
    width: calc(33.3% - 20px)!important;
    font-size: 16px!important;
    background-color: var(--content-bg)!important;
    border-radius: 14px!important;
    border: 1px solid var(--theme-bg-color)!important;
    padding: 20px!important;
    cursor: pointer!important;
    transition: 0.3s ease!important;

    &:hover {
        transform: scale(1.02)!important;
        background-color: var(--theme-bg-color)!important;
    }

    svg {
        width: 28px!important;
        border-radius: 6px!important;
        margin-right: 12px!important;
        flex-shrink: 0!important;
    }

    &+.app-card {
        margin-left: 20px!important;
    }

    span {
        display: flex!important;
        align-items: center!important;
    }

    &__subtext {
        font-size: 14px!important;
        font-weight: 400!important;
        line-height: 1.6em!important;
        margin-top: 20px!important;
        border-bottom: 1px solid var(--border-color)!important;
        padding-bottom: 20px!important;
    }

    &-buttons {
        display: flex!important;
        align-items: center!important;
        margin-left: auto!important;
        margin-top: 16px!important;
    }

    @media screen and (max-width: 1110px) {
        width: calc(50% - 20px)!important;

        &:last-child {
            margin-top: 20px!important;
            margin-left: 0px!important;
        }
    }

    @media screen and (max-width: 565px) {
        width: calc(100% - 20px)!important;
        margin-top: 20px!important;

        &+.app-card {
            margin-left: 0!important;
        }
    }
}

::-webkit-scrollbar {
    width: 6px!important;
    border-radius: 10px!important;
}

::-webkit-scrollbar-thumb {
    background: var(--scrollbar-bg)!important;
    border-radius: 10px!important;
}
}
</style>