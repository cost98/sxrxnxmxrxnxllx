<template>
  <div id="app">
    <!-- Mostra solo il loader quando isLoading è true -->
    <LoaderComponent :isLoading="isLoading" />

    <!-- Mostra il contenuto principale solo quando isLoading è false -->
    <div v-if="!isLoading">
      <HeaderComponent />
      <HomeComponent />
      <AboutComponent />
      <TimelineComponent  reversed/>
      <ContactComponent />
      <ServicesComponent />
      <JobComponent/>
      <FooterComponent />
      <div
          v-if="showScrollButton"
          @click="scrollToTop"
          :class="{ 'scroll-to-top': true, show: showScrollButton }"
          title="Torna su"
      >
        <IconComponent name="arrow-up"/>
      </div>
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
import JobComponent from "@/components/Job.vue";

export default {
  name: 'App',
  components: {
    JobComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    TimelineComponent,
    LoaderComponent
  },
  data() {
    return {
      isLoading: true,
      assets: [
        require('@/assets/logo.png'),
        require('@/assets/logo_string.png'),
        require('@/assets/parent-support.webp'),
        require('@/assets/family-support.webp'),
        require('@/assets/individual-support.webp'),
        require('@/assets/couple-support.webp'),
        require('@/assets/bariatric-evaluation.webp'),
        require('@/assets/personal.webp')
        // Puoi aggiungere altre immagini o assets in questo array
      ],
      showScrollButton: false,
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
      return Promise.all(promises);
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Scrolling fluido
      });
    },
    handleScroll() {
      this.showScrollButton = window.scrollY > 300;
    },
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    // Inizia a caricare gli asset
    const assetPromise = this.loadAssets();

    // Forza un caricamento minimo di 2 secondi
    const minLoadingTime = new Promise((resolve) => setTimeout(resolve, 2000));

    // Aspetta sia il caricamento degli asset che i 2 secondi minimi
    Promise.all([assetPromise, minLoadingTime])
        .then(() => {
          this.isLoading = false;
        })
        .catch((error) => {
          console.error('Errore nel caricamento degli assets:', error);
          this.isLoading = false; // Anche in caso di errore nascondiamo il loader
        });
  }
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
  color: #BEC8B7;
}
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #BEC8B7;
  color: white;
  font-size: 24px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.scroll-to-top:hover {
  background-color: #BEC8B7;
}

.scroll-to-top.show {
  opacity: 1;
  transform: scale(1);
}
</style>
