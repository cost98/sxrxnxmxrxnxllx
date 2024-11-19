<template>
  <div id="app">
    <!-- Mostra solo il loader quando isLoading è true -->
    <LoaderComponent :isLoading="isLoading" />

    <!-- Mostra il contenuto principale solo quando isLoading è false -->
    <div v-if="!isLoading">
      <HeaderComponent />
      <HomeComponent />
      <AboutComponent />
      <ServicesComponent />
      <ContactComponent />
      <TimelineComponent reversed />
      <JobComponent />
      <FooterComponent />
      <div
          v-if="showScrollButton"
          @click="scrollToTop"
          :class="{ 'scroll-to-top': true, show: showScrollButton }"
          title="Torna su"
      >
        <IconComponent name="arrow-up" />
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
        require('@/assets/parent-support.webp'),
        require('@/assets/family-support.webp'),
        require('@/assets/individual-support.webp'),
        require('@/assets/couple-support.webp'),
        require('@/assets/bariatric-evaluation.webp'),
        require('@/assets/personal.webp'),
        require('@/assets/Virtual-Regular.otf'),
        require('@/assets/Virtual-Regular.ttf')
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
          img.onload = () => {
            console.log(`Immagine caricata con successo: ${src}`);
            resolve();
          };
          img.onerror = (error) => {
            console.error(`Errore nel caricamento dell'immagine: ${src}`, error);
            reject(error);
          };
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
      console.log("Posizione scroll:", window.scrollY, "Mostra bottone:", this.showScrollButton);
    },
    initializeIubenda() {
      if (window._iub) {
        window._iub.csConfiguration = {
          cookiePolicyId: 45671686,
          siteId: 3842443,
          timeoutLoadConfiguration: 30000,
          lang: 'it',
          enableTcf: true,
          tcfVersion: 2,
          tcfPurposes: {
            "2": "consent_only",
            "3": "consent_only",
            "4": "consent_only",
            "5": "consent_only",
            "6": "consent_only",
            "7": "consent_only",
            "8": "consent_only",
            "9": "consent_only",
            "10": "consent_only"
          },
          invalidateConsentWithoutLog: true,
          googleAdditionalConsentMode: true,
          consentOnContinuedBrowsing: false,
          banner: {
            position: "top",
            acceptButtonDisplay: true,
            customizeButtonDisplay: true,
            closeButtonDisplay: true,
            closeButtonRejects: true,
            fontSizeBody: "14px"
          }
        };
      } else {
        console.error("Iubenda non è stato caricato correttamente");
      }
    }
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  mounted() {
    // Carica gli script di Iubenda
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.iubenda.com/cs/tcf/stub-v2.js';
    script1.async = true;
    script1.onload = () => {
      console.log('Script 1 caricato con successo');
      this.initializeIubenda();
    };
    script1.onerror = (err) => {
      console.error('Errore durante il caricamento dello script 1', err);
    };
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://cdn.iubenda.com/cs/iubenda_cs.js';
    script2.async = true;
    script2.onload = () => {
      console.log('Script 2 caricato con successo');
      this.initializeIubenda();
    };
    script2.onerror = (err) => {
      console.error('Errore durante il caricamento dello script 2', err);
    };
    document.head.appendChild(script2);

    // Aggiungi l'event listener per il scroll
    window.addEventListener('scroll', this.handleScroll);

    // Aggiungi il caricamento degli asset
    console.log("Inizio il caricamento degli asset");

    const assetPromise = this.loadAssets();

    // Forza un caricamento minimo di 2 secondi
    const minLoadingTime = new Promise((resolve) => setTimeout(resolve, 2000));

    // Aspetta sia il caricamento degli asset che i 2 secondi minimi
    Promise.all([assetPromise, minLoadingTime])
        .then(() => {
          console.log("Tutti gli asset sono stati caricati correttamente, e il tempo minimo è trascorso.");
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
  font-family: 'Nunito Sans', Arial, sans-serif;
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
  left: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #BEC8B7FF;
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
  background-color: #709c94;
}

.scroll-to-top.show {
  opacity: 1;
  transform: scale(1);
}
</style>
