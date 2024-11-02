<template>
  <div id="app">
    <!-- Mostra solo il loader quando isLoading è true -->
    <LoaderComponent :isLoading="isLoading" />

    <!-- Mostra il contenuto principale solo quando isLoading è false -->
    <div v-if="!isLoading">
      <HeaderComponent />
      <HomeComponent />
      <TimelineComponent />
      <AboutComponent />
      <ServicesComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import HomeComponent from './components/Home.vue';
import AboutComponent from './components/About.vue';
import ServicesComponent from './components/Services.vue';
import ContactComponent from './components/Contact.vue';
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';
import TimelineComponent from '@/components/Timeline.vue';
import LoaderComponent from '@/components/Loader.vue';

export default {
  name: 'App',
  components: {
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    TimelineComponent,
    LoaderComponent,
  },
  data() {
    return {
      isLoading: true,
      assets: [
        require('@/assets/logo.png'), // Aggiungi qui il logo o altre immagini
        require('@/assets/parent-support.webp'),
        require('@/assets/family-support.webp'),
        require('@/assets/individual-support.webp'),
        require('@/assets/couple-support.webp'),
        require('@/assets/bariatric-evaluation.webp')
        // Puoi aggiungere altre immagini o assets in questo array
      ],
    };
  },
  methods: {
    loadAssets() {
      const promises = this.assets.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      // Ritorna la Promise che risolve quando tutte le immagini sono caricate
      return Promise.all(promises);
    },
  },
  mounted() {
    // Chiama il metodo di caricamento e imposta isLoading a false al termine
    this.loadAssets()
        .then(() => {
          this.isLoading = false;
        })
        .catch((error) => {
          console.error('Errore nel caricamento degli assets:', error);
          this.isLoading = false; // Anche in caso di errore nascondiamo il loader
        });
  },
};
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
  padding: 60px 20px 60px 20px;
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
