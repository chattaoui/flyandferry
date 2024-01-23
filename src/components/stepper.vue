<template>
  <ol class="stepper">
    <li v-for="step in steps" :key="`step_${step}`" :id="`step_${step}`" :style="`--active-b: ${buttonColor}!important`"
      :class="{ active: activeItem == step }"></li>
  </ol>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['activeItem', 'steps', 'buttonColor'],
}
</script>

<style>
ol.stepper {
  --default-b: white !important;
  --default-c: black !important;
  --active-c: white !important;
  --circle: 6.5em !important;
  /* size of circle */
  --b: 6px !important;
  /* line thickness */

  display: flex !important;
  list-style: none !important;
  justify-content: space-between !important;
  background:
    linear-gradient(var(--default-b) 0 0) no-repeat 50% calc((var(--circle) - var(--b))/2)/100% var(--b) !important;
  counter-reset: step !important;
  margin: 3rem 0 !important;
  font-size: 1rem !important;
  font-weight: bold !important;
  counter-reset: step !important;
  overflow: hidden !important;
  gap: 1rem;
  min-width: 100%;
}

ol.stepper li {
  display: grid !important;
  place-items: center !important;
  gap: 5px !important;
  font-family: sans-serif !important;
  position: relative !important;
  font-size: 1rem;

}

ol.stepper li::before {
  content: counter(step) " " !important;
  counter-increment: step !important;
  display: grid !important;
  place-content: center !important;
  aspect-ratio: 1 !important;
  min-height: 6rem;
  min-width: 6rem;
  box-sizing: border-box !important;
  background: var(--active-b) !important;
  color: var(--active-c) !important;
  border-radius: 16% !important;
  font-family: monospace !important;
  z-index: 1 !important;
  font-size: 2.3rem;
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2);
  transform: scaleY(.9) !important
}

ol.stepper li.active~li::before {
  background: var(--default-b) !important;
  color: var(--default-c) !important;
}

ol.stepper li.active::after {
  content: "" !important;
  position: absolute !important;
  height: var(--b) !important;
  right: 100% !important;
  top: calc((var(--circle) - var(--b))/2) !important;
  width: 100vw !important;
  background: var(--active-b) !important;
}
</style>