<template>
      <a class="btn">
        <span class="btn__circle"></span>
        <span class="btn__white-circle">
          <svg xmlns="http://www.w3.org/2000/svg" id="icon-arrow-right" viewBox="0 0 21 12">
            <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
          </svg>
        </span>
        <span class="btn__text">Search</span>
      </a>
</template>

<script setup>

</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  line-height: 1.5;
}

.btn {
  display: inline-block;
  color: #000000;
  padding: 32px;
  position: relative;
  letter-spacing: 1px;

  &__circle,
  &__text,
  &__white-circle {
    position: absolute;
  }

  &__circle {
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 100%;
    width: 100%;
    box-shadow: 0 0 1px 1px #000000;
    transition: 0.3s linear;
  }

  &__white-circle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 56px;
    height: 56px;
    border-radius: 100%;
    background: #174ea6;
    display: flex;
    transition: 0.3s ease-in-out;

    svg {
      width: 24px;
      height: 24px;
      margin: auto;
    }
  }

  &__text {
    top: 50%;
    transform: translateY(-50%);
    white-space: nowrap;
    z-index: 2;
    padding: 24px 8px;
    transition: 0.3s linear;
  }

  &:hover {
    .btn__circle {
      transform: scale(0);
    }

    .btn__white-circle {
      transform: translate(-50%, -50%) scale(1);
    }

    .btn__text {
      transform: translate(40px, -50%);
      color: #174ea6;
    }
  }
}
.btn__text {
      color: #174ea6;
      font-size: 2rem;
    }


</style>