<template>
    <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
      <Slide v-for="slide in slidePromotions" :key="slide._id">
        <div @click="this.$router.push('#')" class="carousel__item"><div href="/test" class="custom-promotion-card">
    <div class="custom-promotion-card__image">
        <img :src="slide.promotion_Image" alt="Promotion Image">
    </div>
    <div class="custom-promotion-card__category">
        <div class="custom-promotion-card__category-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 478.44 358.22"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M475.32,123.16a9.47,9.47,0,0,0-6.09-2.64c-43.1-2.83-100.61,7.73-100.61,7.73-120.21,17.49-239.15,84-239.15,84C70.63,242.12,49,248.41,42.21,249.72c-2.18.42-4.37.88-6.53,1.46a74.85,74.85,0,0,1-21.55,2.57,10.11,10.11,0,0,0-7.53,2.94c-12.91,13.09-2.9,50.45-2.9,50.45,4,22.1,19.39,22.42,19.39,22.42l402.46,28.62.2,0a6.48,6.48,0,0,0,6.92-7.18,44.6,44.6,0,0,0-9.55-22.61,31.16,31.16,0,0,0-5.07-4.87c-5.76-4.56-7.11-11.19-6.87-17.07a29,29,0,0,1,7.43-17.89c13.51-15.39,26.66-40.12,26.66-40.12C474.53,200.13,478,136.2,478,136.2,479.29,129.21,477.46,125.31,475.32,123.16ZM68.09,293.31c-5.09,0-9.22-5.34-9.22-11.92s4.13-11.93,9.22-11.93,9.22,5.34,9.22,11.93S73.18,293.31,68.09,293.31Zm75.37-17.49c-6.85,0-12.4-7.34-12.4-16.38s5.55-16.38,12.4-16.38,12.41,7.33,12.41,16.38S150.31,275.82,143.46,275.82Zm87.31-16.51c-9.34,1-18-8.44-19.33-21.07s5.17-23.65,14.52-24.63,18,8.44,19.33,21.07S240.12,258.33,230.77,259.31Zm95.25-20c-11.92,1.89-23.66-9.72-26.23-25.93s5-30.87,16.95-32.75,23.67,9.72,26.23,25.93S337.94,237.4,326,239.28Z"/><path class="cls-1" d="M36.77,231.61,48.06,175s1.27-11.29,15.9-22.1a1775.32,1775.32,0,0,1,152.3-94.67q3.93-2.16,7.77-4.49C233.51,48,267.91,29.67,320,29.67c0,0,53.93,0,74.3,17.94A22.73,22.73,0,0,1,401.11,59l11.72,44.82-21.31,2.54S311.7,85,256.36,111.4L114.2,183l1.91-15.58,135.16-77s56-29.26,133.25-6.68L380.07,64s-31.92-17.07-80.73-11.38a175,175,0,0,0-63.93,20.7c-28.2,15.5-93.7,52.63-155.55,96,0,0-9.54,4.13-11.77,16.54l-7,37.84Z"/><path class="cls-1" d="M119.29,93.91V31.29a23.36,23.36,0,0,1,7.4-17.15c7.09-6.58,20.55-13.88,45.39-14,0,0,18.13-1.91,23.54,11.77L208.34,40.8Z"/></g></g></svg>
        </div>
        <div class="custom-promotion-card__category-title">
            {{ slide.promotion_Title }}
        </div>
    </div>
    <div class="custom-promotion-card__title">
        {{ slide.promotion_Description }}
    </div>
</div>
</div>
      </Slide>
  
      ...
    </Carousel>
  </template>
  
  <script>
import { defineComponent } from 'vue'
  import { Carousel, Pagination, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'Autoplay',
    components: {
      Carousel,
      Slide,
      Pagination,
    },
    data(){
      return {
        slidePromotions: {},
      }
    },
    methods: {
      async getPromos(){
        this.slidePromotions = await this.$axios.get('https://cms.4help.tn/api/promotions_API/AllPromotions')
                                      .then(res => {return res.data})
        this.slidePromotions.map(e => {
          e.promotion_Image = `https://cms.4help.tn/${e.promotion_Image.replaceAll(`\\`, '/').replaceAll(" ","%20")}`
        })
        console.log(this.slidePromotions)
      }
    },
    async mounted(){
      await this.getPromos()
    }
  })
  </script>
  
  <style scoped>
  .carousel__slide {
    padding: 0.3125vw;
    height: 43vh;
  }
  
  
  .carousel__track {
    transform-style: preserve-3d;
  }
  
  .carousel__slide--sliding {
    transition: 0.5s;
  }
  
  .carousel__slide {
    opacity: 0.9;
  }
  
  
  .carousel__slide--prev {
    opacity: 1;
  }
  
  .carousel__slide--next {
    opacity: 1;
  }
  
  .carousel__slide--active {
    opacity: 1;
  }

  .carousel__item {
    border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(29, 37, 78, 0.7);
  cursor: pointer;
  }
  </style>
  <style>
.custom-promotion-card {
    background: linear-gradient(to top right,
      rgba(0, 0, 0, 0.7),
      rgba(99, 99, 99, 0.9));
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    display: grid;
    grid-template-rows: 160px 48px auto;
    align-self: stretch;
    height: 100%;
    overflow: hidden;
    min-height: 30vh;
}

.custom-promotion-card__image {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.custom-promotion-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.custom-promotion-card__category {
  display: flex;
  align-items: center;
  padding: 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
}

.custom-promotion-card__category-icon svg {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  fill: #fff;
}

.custom-promotion-card__category-title {
  font-size: 14px;
  font-weight: bold;
}

.custom-promotion-card__title {
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.custom-promotion-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 3px 8px #2c2216;
}
  </style>