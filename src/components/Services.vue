<template>
  <section id="services" class="services-section">
    <TitleComponent
        firstPart="I miei "
        secondPart="Servizi"
        thirdPart=" di Supporto Psicologico"
    />
    <p class="intro-text">Scopri come posso aiutarti con i miei servizi personalizzati.</p>
    <p class="modalities">Modalità di servizio disponibili:</p>
    <ul class="modalities-list">
      <li>- Consulenza psicologica in presenza</li>
      <li>- Consulenza psicologica online</li>
    </ul>

    <div class="services-container">
      <div
          v-for="service in services"
          :key="service.id"
          class="service-card"
          :style="{ backgroundImage: 'url(' + service.image + ')' }"
      >
        <div class="overlay"></div> <!-- Overlay for darkening effect -->
        <div class="service-content">
          <h2 class="service-title">{{ service.title }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TitleComponent from "@/components/Title.vue";

export default {
  name: "ServicesComponent",
  components: {TitleComponent},
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Supporto alla Genitorialità',
          image: require('@/assets/parent-support.webp')
        },
        {
          id: 2,
          title: 'Supporto alla Famiglia',
          image: require('@/assets/family-support.webp')
        },
        {
          id: 3,
          title: 'Supporto all\'Individuo',
          image: require('@/assets/individual-support.webp')
        },
        {
          id: 4,
          title: 'Supporto per Coppia',
          image: require('@/assets/couple-support.webp')
        },
        {
          id: 5,
          title: 'Valutazione Psicologica per Chirurgia Bariatrica',
          image: require('@/assets/bariatric-evaluation.webp')
        },
      ]
    };
  },
  mounted() {
    const observerOptions = {
      threshold: 0.1 // triggers when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target); // Stop observing after the animation
        }
      });
    }, observerOptions);

    this.$nextTick(() => {
      const elements = document.querySelectorAll(".service-card");
      elements.forEach(el => observer.observe(el));
    });
  }
}
</script>

<style scoped>
.services-section {
  text-align: center;
  padding: 80px 20px;
  background: white;
  border-radius: 15px;
}


.intro-text {
  font-size: 1.2rem;
  color: #34495e;
  margin-bottom: 20px;
}

.modalities {
  font-weight: bold;
  font-size: 1.1rem;
  margin: 20px 0;
}

.modalities-list {
  list-style-type: none;
  padding: 0;
  font-size: 1rem;
  color: #555;
}

.modalities-list li {
  padding: 5px 0;
}

.services-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
}

.service-card {
  opacity: 0;
  transform: translateY(30px);
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  width: 360px;
  height: 280px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card.fade-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease, transform 0.6s ease; /* Animation effect */
}

.service-card:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: inherit;
  background-size: 120%;
  background-position: center;
  transition: background-size 0.3s ease;
  z-index: 0;
}

.service-card:hover::before {
  background-size: 150%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
}

.service-card:hover .overlay {
  opacity: 1;
}

.service-content {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  color: white;
  text-align: center;
  padding: 10px;
}

.service-title {
  font-size: 1.6rem;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  transition: color 0.3s;
}
</style>

