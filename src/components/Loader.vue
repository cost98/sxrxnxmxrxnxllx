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
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
