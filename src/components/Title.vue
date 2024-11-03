<template>
  <h1>{{ firstPart }}<span class="highlight">{{ secondPart }}</span>{{ thirdPart}}</h1>
</template>

<script>
export default {
  name: "TitleComponent",
  props: {
    firstPart: {
      type: String,
      default: ""
    },
    secondPart: {
      type: String,
      default: ""
    },
    thirdPart: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>

h1 {
  font-size: 2.8rem;
  margin-bottom: 40px;
  color: #2c3e50;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-right: 10%;
  padding-left: 10%;
  text-align: center;
}


.highlight {
  text-align: center;
  color: #BEC8B7;
}


@media (max-width: 768px) {
  h1 {
    font-size: 8vw; /* Il font si adatterà alla larghezza del viewport */
  }
}
</style>