<template>
<ol class="stepper">
   <li  :class="{ active: activeItem === '1' }"></li>
   <li :class="{ active: activeItem === '2' }"></li>
   <li :class="{ active: activeItem === '3' }"></li>
</ol>
</template>

<script>
export default {
  props: ['activeItem']
}
</script>

<style>

ol.stepper {
  --default-b: lightgrey!important;
  --default-c: black!important;
  --active-b: #57b846!important;
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
  margin: 20px!important;
  font-size: 1rem!important;
  font-weight: bold!important;
  counter-reset: step!important;
  overflow: hidden!important;
  gap: 1rem;
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
  height: var(--circle)!important;
  border: 5px solid #fff!important;
  box-sizing: border-box!important;
  background: var(--active-b)!important;
  color: var(--active-c)!important;
  border-radius: 50%!important;
  font-family: monospace!important;
  z-index: 1!important;
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

@media (max-width: 600px) {
  ol.stepper {
   display: grid!important;
   gap: 20px!important;
  background: 
    linear-gradient(var(--default-b) 0 0) no-repeat
    calc((var(--circle) - var(--b))/2) 50%/ var(--b) 100%!important;
  }
  ol.stepper li {
    display: flex!important;
  }
  ol.stepper li.active::after {
    content: ""!important;
    position: absolute!important;
    width: var(--b)!important;
    bottom: 100%!important;
    left: calc((var(--circle) - var(--b))/2)!important;
    top: auto!important;
    right: auto!important;
    height: 100vw!important;
    background: var(--active-b)!important;
  }
}


</style>