<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HeaderComponent />

    <HomeComponent />

    <AboutComponent />

    <ServicesComponent />

    <ContactComponent />
  </div>
</template>

<script>
import HomeComponent from './components/Home.vue'
import AboutComponent from './components/About.vue'
import ServicesComponent from './components/Services.vue'
import ContactComponent from './components/Contact.vue'
import HeaderComponent from "@/components/Header.vue"

export default {
  name: 'App',
  components: {
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    HeaderComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

section {
  min-height: 100vh;
  padding: 20px;
  margin-top: 80px;
  padding-top: 40px;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 15px;
  justify-content: center;
  padding: 0;
}

nav ul li {
  cursor: pointer;
}

nav ul li a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
}

nav ul li a:hover {
  color: #42b983;
}
</style>
