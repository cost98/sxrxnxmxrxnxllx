<!-- Contact.vue -->
<template>
  <section id="contact">
    <h1>{{ title }}</h1>
    <p>{{content}}</p>
  </section>
</template>
<script>
export default {
  name: "ContactComponent",
  props: {
    title: {
      type: String,
      default: "Contact" // Default title
    },
    content: {
      type: String,
      default: "Benvenuto nella sezione Contact" // Default content
    }
  }
}
</script>