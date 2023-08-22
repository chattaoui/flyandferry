<template>
    <div class="loader">
  <div class="ball"></div>
  <div class="ball"></div>
  <div class="ball"></div>
  <div class="ball"></div>
</div>
</template>

<script setup>

</script>

<style lang="scss">
$body-bg:        #fff;
$jelly-color:    #433751;
$size: 70px;

*, *::after, *::before {
    box-sizing: border-box;
}
html, body {
    height: 100%;
    min-height: 100%;
}
body {
    margin: 0;  
    display: flex;
    align-items: center;
    justify-content: center;
    background: $body-bg;
}

.loader {
    position: relative;
    width: $size;
    height: $size;
}

.ball {
    position: absolute;
    width: $size;
    height: $size;
    border-radius: 50%;
    background: rgba($jelly-color, .2);
    animation: jelly 2.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;

    @for $i from 2 through 4 {
        &:nth-child(#{$i}) {
            z-index: -$i;
            transform: scale(1 + ($i - 1) * 0.4);
            animation: jelly#{$i} 2.5s (($i - 1) * 0.2s) cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }
    }
}

@keyframes jelly {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(.6);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes jelly2 {
    0% {
        transform: scale(1.4);
    }
    45% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.4);
    }
}
@keyframes jelly3 {
    0% {
        transform: scale(1.8);
    }
    40% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1.8);
    }
}
@keyframes jelly4 {
    0% {
        transform: scale(2.2);
    }
    35% {
        transform: scale(1.9);
    }
    100% {
        transform: scale(2.2);
    }
}

</style>