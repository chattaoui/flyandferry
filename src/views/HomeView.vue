<template>
  <div class="overlayLoader" v-if="displayLoader" id="overlay">
    <jellyLoader />
  </div>
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <div class="container">
      <ol class="carousel-indicators">
        <li v-for="(Slide, index) in Slides" v-bind:key="Slide._id + index" data-target="#carousel-example-generic"
          :data-slide-to="index" :class="index == 0 ? `active` : ``"></li>
      </ol>
    </div>
    <div class="carousel-inner" role="listbox">
      <div v-for="(Slide, index) in Slides" v-bind:key="Slide._id" class="item" :class="index == 0 ? `active` : ``">
        <img class="img-responsive" :src="Slide.Slider_Image" alt="Slider Image">
      </div>
    </div>
  </div>
  <formWidget class="formWidget" />
  <div>
    <!-- <div class="content-lg container">
      <div class="masonry-grid row">
        <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-3 sm-margin-b-30">
          <div class="margin-b-60">
            <h2>Harmonious Planning</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna ut
              consequat siad esqudiat dolor</p>
          </div>
          <img class="full-width img-responsive wow fadeInUp" src="https://placehold.co/400" alt="Portfolio Image"
            data-wow-duration=".3" data-wow-delay=".2s">
        </div>
        <div class="masonry-grid-sizer col-xs-6 col-sm-6 col-md-1"></div>
        <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-3">
          <div class="margin-b-60">
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna ut
              consequat siad esqudiat dolor</p>
          </div>
          <img class="full-width img-responsive wow fadeInUp" src="https://placehold.co/400" alt="Portfolio Image"
            data-wow-duration=".3" data-wow-delay=".3s">
        </div>
        <div class="masonry-grid-sizer col-xs-6 col-sm-6 col-md-1"></div>

        <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-3">
          <div class="margin-t-60 margin-b-60">
            <h2>Superior Support</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna ut
              consequat siad esqudiat dolor</p>
          </div>
          <img class="full-width img-responsive wow fadeInUp" src="https://placehold.co/400" alt="Portfolio Image"
            data-wow-duration=".3" data-wow-delay=".4s">
        </div>
      </div>
    </div> -->
    <div>
      <div class="content-lg container" style="margin-top: 15vh;">
        <!-- Masonry Grid -->
        <div class="row">
          <div class="df-dom-promotions-head lozad" data-loaded="true">
            <h3 style="margin: 0!important;margin-left: 2.5rem!important;">{{ language.offers }}</h3>
            <div class="df-dom_light-button">
              <customButton :buttonText="language.offersButton" :redirectTo="'#'" />
            </div>
          </div>
        </div>
        <div class="row">
          <promoSlider />
        </div>
      </div>
    </div>
    <div>
      <div class="content-lg container">
        <!-- Masonry Grid -->
        <div class="row">
          <div class="df-dom-compagnies-head lozad" data-loaded="true">
            <h3 style="margin: 0!important;margin-left: 2.5rem!important;">{{ language.ferryComp }}</h3>
            <div class="df-dom_light-button">
              <customButton :buttonText="language.ferryCompButton" :redirectTo="'#'" />
            </div>
          </div>
        </div>
        <div class="row">
          <div v-for="ferryCompany in ferryCompanies" v-bind:key="ferryCompany.companyName"
            class="col-xs-16 col-sm-6 gap-6 col-md-2 sm-margin-b-30 margin-b-30 center">
            <RouterLink to="#" class="article-card">
              <img :src="ferryCompany.companyLogo" :alt="ferryCompany.companyName" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="content-lg container">
      <!-- Masonry Grid -->
      <div class="row">
        <div class="df-dom-destinations-head lozad" data-loaded="true">
          <h3 style="margin: 0!important;margin-left: 2.5rem!important;">{{ language.mainDest }}</h3>
          <div class="df-dom_light-button">
            <customButton :buttonText="language.mainDestButton" :redirectTo="'#'" />
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="destinPrin in destinPrins" v-bind:key="destinPrin._id"
          class="col-xs-12 col-sm-6 gap-6 col-md-3 sm-margin-b-30 margin-b-30">
          <div class="main">
            <div class="card" :style="{ backgroundImage: `url(${destinPrin.imageVille})` }">
              <div class="fl">
                <div class="fullscreen">
                  <svg viewBox="0 0 100 100" class="fullscreen_svg">
                    <path
                      d="M3.563-.004a3.573 3.573 0 0 0-3.527 4.09l-.004-.02v28.141c0 1.973 1.602 3.57 3.57 3.57s3.57-1.598 3.57-3.57V12.218v.004l22.461 22.461a3.571 3.571 0 0 0 6.093-2.527c0-.988-.398-1.879-1.047-2.523L12.218 7.172h19.989c1.973 0 3.57-1.602 3.57-3.57s-1.598-3.57-3.57-3.57H4.035a3.008 3.008 0 0 0-.473-.035zM96.333 0l-.398.035.02-.004h-28.16a3.569 3.569 0 0 0-3.57 3.57 3.569 3.569 0 0 0 3.57 3.57h19.989L65.323 29.632a3.555 3.555 0 0 0-1.047 2.523 3.571 3.571 0 0 0 6.093 2.527L92.83 12.221v19.985a3.569 3.569 0 0 0 3.57 3.57 3.569 3.569 0 0 0 3.57-3.57V4.034v.004a3.569 3.569 0 0 0-3.539-4.043l-.105.004zM3.548 64.23A3.573 3.573 0 0 0 .029 67.8v28.626-.004l.016.305-.004-.016.004.059v-.012l.039.289-.004-.023.023.121-.004-.023c.074.348.191.656.34.938l-.008-.02.055.098-.008-.02.148.242-.008-.012.055.082-.008-.012c.199.285.43.531.688.742l.008.008.031.027.004.004c.582.461 1.32.742 2.121.762h.004l.078.004h28.61a3.569 3.569 0 0 0 3.57-3.57 3.569 3.569 0 0 0-3.57-3.57H12.224l22.461-22.461a3.569 3.569 0 0 0-2.492-6.125l-.105.004h.008a3.562 3.562 0 0 0-2.453 1.074L7.182 87.778V67.793a3.571 3.571 0 0 0-3.57-3.57h-.055.004zm92.805 0a3.573 3.573 0 0 0-3.519 3.57v19.993-.004L70.373 65.328a3.553 3.553 0 0 0-2.559-1.082h-.004a3.573 3.573 0 0 0-3.566 3.57c0 1.004.414 1.91 1.082 2.555l22.461 22.461H67.802a3.57 3.57 0 1 0 0 7.14h28.606c.375 0 .742-.059 1.082-.168l-.023.008.027-.012-.02.008.352-.129-.023.008.039-.02-.02.008.32-.156-.02.008.023-.016-.008.008c.184-.102.34-.207.488-.32l-.008.008.137-.113-.008.004.223-.211.008-.008c.156-.164.301-.34.422-.535l.008-.016-.008.016.008-.02.164-.285.008-.02-.008.016.008-.02c.098-.188.184-.406.246-.633l.008-.023-.004.008.008-.023a3.44 3.44 0 0 0 .121-.852v-.004l.004-.078V67.804a3.569 3.569 0 0 0-3.57-3.57h-.055.004z">
                    </path>
                  </svg>
                </div>
              </div>
              <div class="card_content">
                <label class="switch_738">
                  <!-- <input type="checkbox" class="chk_738"> -->
                  <span class="slider_738"></span>
                </label>
              </div>
              <div class="card_back"></div>
            </div>
            <div class="data">
              <div class="img" :style="{ backgroundImage: `url(${destinPrin.imagePays})` }">
              </div>
              <div class="text">
                <div class="text_s">{{ destinPrin.nomVille }}</div>
                <div class="text_m">{{ destinPrin.nomPays }}</div>
              </div>
            </div>
            <div class="btns">
            </div>
          </div>
        </div>
        <!--     end country card     -->
        <!-- <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-4">
            <div class="margin-b-60">
              <h2>Easy Integration</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna ut consequat siad esqudiat dolor</p>
            </div>
            <img class="full-width img-responsive wow fadeInUp" src="html_template/img/500x500/02.jpg" alt="Portfolio Image" data-wow-duration=".3" data-wow-delay=".3s">
          </div>
          <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-4">
            <div class="margin-t-60 margin-b-60">
              <h2>Superior Support</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna ut consequat siad esqudiat dolor</p>
            </div>
            <img class="full-width img-responsive wow fadeInUp" src="html_template/img/500x500/03.jpg" alt="Portfolio Image" data-wow-duration=".3" data-wow-delay=".4s">
          </div> -->
      </div>
      <!-- End Masonry Grid -->
    </div>
    <div class="bg-color-sky-light">
      <div class="content-lg container">
        <div class="row">
          <div class="col-md-5 col-sm-5 md-margin-b-60">
            <div class="margin-t-50 margin-b-30">
              <h2>Why Us?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.</p>
            </div>
            <a href="#" class="btn-theme btn-theme-sm btn-white-bg text-uppercase">More...</a>
          </div>
          <div class="col-md-5 col-sm-7 col-md-offset-2">
            <!-- Accordion -->
            <div class="accordion">
              <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingOne">
                    <h4 class="panel-title">
                      <a class="panel-title-child" role="button" data-toggle="collapse" data-parent="#accordion"
                        href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Expert Research
                      </a>
                    </h4>
                  </div>
                  <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                    <div class="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                      wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingTwo">
                    <h4 class="panel-title">
                      <a class="collapsed panel-title-child" role="button" data-toggle="collapse" data-parent="#accordion"
                        href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Hi-Tech Engineering
                      </a>
                    </h4>
                  </div>
                  <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div class="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                      wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingThree">
                    <h4 class="panel-title">
                      <a class="collapsed panel-title-child" role="button" data-toggle="collapse" data-parent="#accordion"
                        href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Outstanding Results
                      </a>
                    </h4>
                  </div>
                  <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div class="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                      wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Accodrion -->
          </div>
        </div>
        <!--// end row -->
      </div>
    </div>
  </div>
  <footer class="footer">
    <!-- Links -->
    <div class="section-seperator">
      <div class="content-md container" style="">
        <div class="row" style="display: flex;justify-content: space-between;">
          <div class="col-sm-2 sm-margin-b-30">
            <!-- List -->
            <ul class="list-unstyled footer-list">
              <li class="footer-list-item">
                <p>Réservez vos billets de ferry avec <span style="color: #251b57; font-weight: bold;">Fly and
                    Ferry</span></p>
              </li>
              <li class="footer-list-item"><a href="#">Accueil</a></li>
              <li class="footer-list-item"><a href="#">Réserver un Ferry</a></li>
              <li class="footer-list-item"><a href="#contact">Contact</a></li>
            </ul>
            <!-- End List -->
          </div>
          <div class="col-sm-2 sm-margin-b-30">
            <!-- List -->
            <ul class="list-unstyled footer-list">
              <li class="footer-list-item"><a href="#">Twitter</a></li>
              <li class="footer-list-item"><a href="#">Facebook</a></li>
              <li class="footer-list-item"><a href="#">Instagram</a></li>
              <li class="footer-list-item"><a href="#">YouTube</a></li>
            </ul>
            <!-- End List -->
          </div>
          <div class="col-sm-3">
            <!-- List -->
            <ul class="list-unstyled footer-list">
              <li class="footer-list-item"><a href="#">S'abonner à notre newsletter</a></li>
              <li class="footer-list-item"><a href="#">Politique de confidentialité</a></li>
              <li class="footer-list-item"><a href="#">Terms &amp; Conditions</a></li>
            </ul>
            <!-- End List -->
          </div>
        </div>
        <!--// end row -->
      </div>
    </div>
    <!-- End Links -->
    <!-- Copyright -->
    <div class="content container">
      <div class="row">
        <div class="col-xs-6">
          <img class="footer-logo" src="html_template/img/logo.png" alt="fly&ferry logo">
        </div>
        <div class="col-xs-6 text-right">
          <div class="copyright" style="text-align: center; font-family: Arial, sans-serif;">
            <p>&copy; 2023 <span href="#" style="color: #251b57; font-weight: bold;">Fly and Ferry</span>. Tous droits
              réservés. <a href="#" style="color: #007bff; text-decoration: none;">Politique de confidentialité</a></p>
          </div>
        </div>
      </div>
      <!--// end row -->
    </div>
    <!-- End Copyright -->
  </footer>
</template>

<script>

import { languageStore } from '../LanguageStore';
import formWidget from "@/components/formWidget.vue"
import promoSlider from "@/components/homeSlider.vue"
import customButton from "@/components/customButton.vue"
import jellyLoader from "@/components/jellyLoader.vue"

export default {
  data() {
    return {
      displayLoader: false,
      Slides: {},
      ferryCompanies: [{
        companyLogo: "https://images.directferries.com:443/768x0//operators/grandi_navi_veloci_l.png",
        companyName: "grandi navi veloci",
      }, {
        companyLogo: "https://images.directferries.com:443/768x0//operators/grandi_navi_veloci_l.png",
        companyName: "grandi navi veloci",
      }, {
        companyLogo: "https://images.directferries.com:443/768x0//operators/grandi_navi_veloci_l.png",
        companyName: "grandi navi veloci",
      }, {
        companyLogo: "https://images.directferries.com:443/768x0//operators/grandi_navi_veloci_l.png",
        companyName: "grandi navi veloci",
      }
      ],
      destinPrins: {},
    }
  },
  components: {
    formWidget,
    promoSlider,
    customButton,
    jellyLoader
  },
  methods: {
    async getTopDest() {
      this.destinPrins = await this.$axios.get('https://cms.4help.tn/api/destinationPrincipale_API/AllDestinationsPrincipales')
        .then((res) => { return res.data })
      this.destinPrins.map(e => {
        e.imageVille = `https://cms.4help.tn/${e.imageVille.replaceAll(`\\`, '/').replaceAll(" ", "%20")}`
        e.imagePays = `https://cms.4help.tn/${e.imagePays.replaceAll(`\\`, '/').replaceAll(" ", "%20")}`
      })
    },
    async getSlides() {
      this.Slides = await this.$axios.get('https://cms.4help.tn/api/slider_API/AllSlides')
        .then((res) => { return res.data })
      this.Slides.map(e => {
        if (e.Slider_Image)
          e.Slider_Image = `https://cms.4help.tn/${e.Slider_Image.replaceAll(" ", "%20")}`
      })
    }
  },

  computed: {
    language() {
      console.log(languageStore.getLanguage().offers)
      return languageStore.getLanguage()
    }
  },
  mounted() {
    this.getTopDest()
    this.getSlides()
    console.log("pipeline works!!!!!")
  }
}
</script>


<style name="companyCard">
.overlayLoader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.562);
  /* Semi-transparent background */
  z-index: 99999999999999999999;
  /* Ensure it appears above other content */
}

.row {
  margin-bottom: 30px
}

.center {
  transform: scale(1.5);
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  margin-bottom: 5%;
}

.article-card {
  width: 8vw;
  height: 8vh;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 300ms;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.article-card img {
  width: 100%;
  height: 100%;
}
</style>

<style>
.lozad {
  align-items: center;

}

.formWidget {
  z-index: 997;
  transform: translateX(50%);
  margin-bottom: 5vh;
  transform: scale(.7) translateX(-73%)!important;
  position: relative;
}

.df-dom-promotions-head {
  font-size: 1.5rem;
  line-height: 1.75rem;
  align-self: start;
  text-align: left;
  background-repeat: no-repeat;
  background-size: 3rem;
  display: flex;
  background-position: left .7rem;
  -webkit-font-smoothing: antialiased;
  background-image: url(../../public/img/icons/shopping.svg);
  justify-content: space-around;
}

@media (min-width: 769px) {
  .df-dom-promotions-head {
    font-size: 1.75rem;
    line-height: 2rem;
    display: grid;
    align-items: center !important;
    grid-template-columns: 1fr auto;
    padding: 8px 0 8px 55px;
    background-size: 40px;
    background-position: 0;
    justify-content: space-around;
  }
}

.df-dom-compagnies-head {
  font-size: 1.5rem;
  line-height: 1.75rem;
  align-self: start;
  text-align: left;
  background-repeat: no-repeat;
  background-size: 3rem;
  display: flex;
  background-position: left .7rem;
  -webkit-font-smoothing: antialiased;
  background-image: url(../../public/img/icons/ship.svg);
  justify-content: space-around;
}

@media (min-width: 769px) {
  .df-dom-compagnies-head {
    font-size: 1.75rem;
    line-height: 2rem;
    display: grid;
    align-items: center !important;
    grid-template-columns: 1fr auto;
    padding: 8px 0 8px 55px;
    background-size: 40px;
    background-position: 0;
  }
}

.df-dom-destinations-head {
  font-size: 1.5rem;
  line-height: 1.75rem;
  align-self: start;
  text-align: left;
  background-repeat: no-repeat;
  background-size: 3rem;
  display: flex;
  background-position: left .7rem;
  -webkit-font-smoothing: antialiased;
  background-image: url(../../public/img/icons/language.svg);
  justify-content: space-around;
}

@media (min-width: 769px) {
  .df-dom-destinations-head {
    font-size: 1.75rem;
    line-height: 2rem;
    display: grid;
    align-items: center !important;
    grid-template-columns: 1fr auto;
    padding: 8px 0 8px 55px;
    background-size: 40px;
    background-position: 0;
  }
}
</style>

<style scoped>
/* CodePen Card */
.card {
  width: 17em;
  height: 12em;
  background-color: #252525;
  border-radius: 7px;
  cursor: pointer;
  background-size: cover;
}

.fl {
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  transition: .2s ease-in-out;
}

.fl:hover .fullscreen {
  scale: 1.2;
}

.fl:hover .fullscreen_svg {
  fill: white;
  background-color: rgba(141, 146, 168, 0.714);
}

.fullscreen {
  width: 1.5em;
  height: 1.5em;
  border-radius: 5px;
  background-color: #7278908f;
  margin: 1em;
  margin-right: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .2s ease-in-out;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
}

.fullscreen_svg {
  width: 15px;
  height: 15px;
  fill: rgba(177, 176, 176, 0.753);
  transition: .2s ease-in-out;
}

.card_back {
  position: absolute;
  width: 17em;
  height: 17em;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.6), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
  background: linear-gradient(to top right,
      rgba(0, 0, 0, 0.7),
      rgba(99, 99, 99, 0.9));
  /* Adjust colors and opacity */
  backdrop-filter: blur(5px);
  border-radius: 7px;
  margin-top: -5em;
  margin-left: 0.7em;
  transition: .2s ease-in-out;
  z-index: -1;
}

.main {
  padding: 5px;
  margin: 20px 0;
}

.main:hover .card_back {
  margin-top: -4.25em;
  margin-left: 0em;
  scale: 1.1;
  height: 17.25em;
  cursor: pointer;
}

.main:hover .fl {
  opacity: 1;
  cursor: pointer;
  margin-right: 0.5em;
}

.data {
  display: flex;
  flex-direction: row;
  margin-top: 1em;
}

.img {
  width: 2.25em;
  height: 2.25em;
  border-radius: 5px;
  overflow: hidden;
  background-size: contain;
  /* Fit the image inside the rectangle */
  background-repeat: no-repeat;
  background-position: center center;
}

.text {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 0.5em;
  font-family: Montserrat;
  color: white;
}

.text_m {
  font-weight: bold;
  font-size: 0.9em;
}

.text_s {
  font-size: 0.7em;
}

.btns {
  display: flex;
  gap: 0.5em;
  transition: .2s ease-in-out;
}

/* The Main Switch */
.card_content {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1600px) {
  .card {
    width: 22em;
    height: 17em;
  }

  .card_back {
    width: 22em;
    height: 22em;
  }

  .main:hover .card_back {
    height: 22.25em;
  }
}
</style>