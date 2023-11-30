<template>
    <header class="header navbar-fixed-top">
        <nav class="navbar" role="navigation">
            <div class="container">
                <div class="menu-container ">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="toggle-icon"></span>
                    </button>
                    <div class="logo">
                        <RouterLink to='/' class="logo-wrap">
                            <img class="logo-img logo-img-main" src="html_template/img/logo.png" alt="FlameOnePage Logo">
                            <img class="logo-img logo-img-active" src="html_template/img/logo-dark.png"
                                alt="Fly&ferry Logo">
                        </RouterLink>
                    </div>
                </div>
                <div class="collapse navbar-collapse nav-collapse">
                    <!--div class="language-switcher">
    					  <ul class="nav-lang">
                            <li><a class="active" href="#">EN</a></li>
    					    <li><a href="#">DE</a></li>
    						<li><a href="#">FR</a></li>
    					  </ul>
    					</div--->
                    <div class="menu-container">
                        <ul class="nav navbar-nav navbar-nav-right">
                            <li v-for="(navItem, index) in navItems" :key="`navItem_${index}`" class=" nav-item">
                                <RouterLink :to="`/${navItem.link}`" class="nav-item-child nav-item-hover">{{ navItem.name
                                }}</RouterLink>
                            </li>
                            <li class=" nav-item"><RouterLink to="jellyloader" class="nav-item-child nav-item-hover">
                                    <svg id="11" style="margin-top: 1.5rem!important; display: inline-flex"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <defs>
                                            <path
                                                d="M22,10 L22,6 C22,4.9 21.1,4 20,4 L4,4 C2.9,4 2.01,4.9 2.01,6 L2.01,10 C3.11,10 4,10.9 4,12 C4,13.1 3.11,14 2,14 L2,18 C2,19.1 2.9,20 4,20 L20,20 C21.1,20 22,19.1 22,18 L22,14 C20.9,14 20,13.1 20,12 C20,10.9 20.9,10 22,10 Z M20,8.54 C18.81,9.23 18,10.53 18,12 C18,13.47 18.81,14.77 20,15.46 L20,18 L4,18 L4,15.46 C5.19,14.77 6,13.47 6,12 C6,10.52 5.2,9.23 4.01,8.54 L4,6 L20,6 L20,8.54 Z M9.07,16 L12,14.12 L14.93,16 L14.04,12.64 L16.73,10.44 L13.26,10.23 L12,7 L10.73,10.22 L7.26,10.43 L9.95,12.63 L9.07,16 Z"
                                                id="path-1" />
                                        </defs>
                                        <g id="dark-blue/active-booking" stroke="none" stroke-width="1" fill="none"
                                            fill-rule="evenodd">
                                            <rect id="view-box" x="0" y="0" width="24" height="24" />
                                            <g id="Group">
                                                <rect id="view-box" x="0" y="0" width="24" height="24" />
                                                <g id="icon/maps/local_activity_24px">
                                                    <mask id="mask-2" fill="white">
                                                        <use xlink:href="#path-1" />
                                                    </mask>
                                                    <g fill-rule="nonzero" />
                                                    <g id="Group" mask="url(#mask-2)" fill="#193354">
                                                        <g id="◼︎/colours/secondary/Dark-Blue">
                                                            <rect id="colour" x="0" y="0" width="24" height="24" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg></RouterLink>
                            </li>

                            <li class=" nav-item">
                                <RouterLink to="login" class="nav-item-child nav-item-hover">
                                    <svg style="margin-top: 1.5rem!important; display: inline-flex" xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                                </RouterLink>
                            </li>
                            <li class=" nav-item">
                                <Lang class="nav-item-child nav-item-hover" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <backTop />
</template>

<script>
import Lang from '@/components/selectLang.vue'
import backTop from '@/components/backtoTop.vue'

export default {
    components: {
        Lang,
        backTop
    },
    data() {
        return {
            navItems: [],
        }
    },
    methods: {
        async getnavItems() {
            this.navItems = await this.$axios.get('https://cms.4help.tn/api/menu_API/menu').then(r => {
                let tempItems = []
                r.data.map(e => {
                    tempItems[e.order] = e
                })
                return tempItems
            })
        }
    },
    mounted() {
        this.getnavItems()
    }
}

</script>


<style>
.df-icon-user {
    background-image: url('../../public/img/icons/user.svg');
    background-size: cover;
    background-position: center;
    height: 24px !important;
    width: 24px !important;
    margin-top: 15px !important;
}</style>