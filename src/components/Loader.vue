<!-- components/Loader.vue -->
<template>
  <div v-if="isLoading" class="loader">
    <img src="@/assets/logo.png" alt="App Logo" class="loader-logo" />
  </div>
</template>

<script>
export default {
  name: 'LoaderComponent',
  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loader-logo {
  width: 100px;
  height: 100px;
  animation: scale 1.5s ease-in-out infinite;
}

/* Animazione di ingrandimento e riduzione */
@keyframes scale {
  0%, 100% {
    transform: scale(1); /* Dimensione iniziale e finale */
  }
  50% {
    transform: scale(1.2); /* Ingrandimento al 50% dell'animazione */
  }
}
</style>
