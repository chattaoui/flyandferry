<template>
<ol class="stepper">
   <li v-for="step in Steps" :key="`step_${step}`" :id="`step_${step}`" :class="{ active: activeItem == step }"></li>
</ol>
</template>

<script>
export default {
  data(){
    return {
      Steps : 3,
    }
  },
  props: ['activeItem'],
}
</script>

<style>

ol.stepper {
  --default-b: lightgrey!important;
  --default-c: black!important;
  --active-b: #7941ab!important;
  --active-c: white!important;
  --circle: 7.5em!important; /* size of circle */
  --b: 7px!important; /* line thickness */

  display: flex!important;
  list-style: none!important;
  justify-content: space-between!important;
  background: 
    linear-gradient(var(--default-b) 0 0) no-repeat
    50% calc((var(--circle) - var(--b))/2)/100% var(--b)!important;
  counter-reset: step!important;
  margin: 3rem 0!important;
  font-size: 1rem!important;
  font-weight: bold!important;
  counter-reset: step!important;
  overflow: hidden!important;
  gap: 1rem;
  min-width: 100%;
}
ol.stepper li {
  display: grid!important;
  place-items: center!important;
  gap: 5px!important;
  font-family: sans-serif!important;
  position: relative!important;
  font-size: 1rem;
  
}
ol.stepper li::before {
  content: counter(step) " "!important;
  counter-increment: step!important;
  display: grid!important;
  place-content: center!important;
  aspect-ratio: 1!important;
  min-height: 8rem;
  min-width: 8rem;
  border: 5px solid #fff!important;
  box-sizing: border-box!important;
  background: var(--active-b)!important;
  color: var(--active-c)!important;
  border-radius: 50%!important;
  font-family: monospace!important;
  z-index: 1!important;
  font-size: 2.3rem;
}

ol.stepper li.active ~ li::before{
  background: var(--default-b)!important;
  color: var(--default-c)!important;
}
ol.stepper li.active::after {
  content: ""!important;
  position: absolute!important;
  height: var(--b)!important;
  right: 100%!important;
  top: calc((var(--circle) - var(--b))/2)!important;
  width: 100vw!important;
  background: var(--active-b)!important;
}



</style>