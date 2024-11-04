<template>
  <section id="job">
  <div class="job-list">
    <TitleComponent
        firstPart="La mia "
        secondPart="esperienza"
    />
    <div class="job-container" ref="jobContainer">
      <div
          v-for="(job, index) in jobs"
          :key="job.id"
          class="job-card"
          :class="{ active: currentIndex === index }"
      >
        <div class="job-header">
          <div class="job-label">{{ job.role }}</div>
          <h3 class="job-company">{{ job.company }}</h3>
          <p class="job-location">{{ job.location }}</p>
          <p class="job-date">{{ job.date }}</p>
        </div>
        <div class="job-description">
          <p>{{ job.description }}</p>
        </div>
      </div>
    </div>

    <!-- Frecce e Pallini -->
    <div class="navigation">
      <button
          @click="prevJob"
          :disabled="currentIndex === 0"
          class="nav-button"
          :class="{ disabled: currentIndex === 0 }"
      >
        <svg class="arrow" viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6v12z" />
        </svg>
      </button>
      <div class="pagination-dots">
        <span
            v-for="(job, index) in jobs"
            :key="index"
            class="dot"
            :class="{ active: currentIndex === index }"
            @click="scrollToJob(index)"
        ></span>
      </div>
      <button
          @click="nextJob"
          :disabled="currentIndex === jobs.length - 1"
          class="nav-button"
          :class="{ disabled: currentIndex === jobs.length - 1 }"
      >
        <svg class="arrow" viewBox="0 0 24 24">
          <path d="M9 6l6 6-6 6V6z" />
        </svg>
      </button>
    </div>
  </div>
  </section>
</template>

<script>
import TitleComponent from "@/components/Title.vue";

export default {
  name: "JobList",
  components: { TitleComponent },
  data() {
    return {
      jobs: [
        {
          id: 1,
          role: "Psicologa",
          company: "Studio Mustang",
          location: "Torvaianica (RM)",
          date: "Dal 02/10/24 - In corso",
          description: "Attività di riabilitazione e supporto psicologico per bambini ed adolescenti; percorsi di supporto alla famiglia e alla genitorialità."
        },
        {
          id: 2,
          role: "Tutor Tirocinio Pratico Valutativo",
          company: "Ordine Psicologi della Lombardia",
          location: "ASST Spedali Civili di Brescia",
          date: "Dal 01/08/24 - In corso",
          description: null
        },
        {
          id: 3,
          role: "Psicologa delle cure primarie",
          company: "ASST Ospedali Civili di Brescia",
          location: "",
          date: "Dal 26/02/24 - In corso",
          description: null
        },
        {
          id: 4,
          role: "Psicologa",
          company: "Ospedale Generale 'Cristo Re'",
          location: "Roma (Ambulatorio di endocrinologia)",
          date: "Dal 14/04/22 al 29/02/24",
          description: "Attività di valutazione di accesso alla Chirurgia Bariatrica; sostegno psicologico mirato al percorso di psiconutrizione in equipe multidisciplinare."
        },
        {
          id: 5,
          role: "Psicologa",
          company: "Poliambulatorio Medigit",
          location: "Foggia",
          date: "Dal 12/11/22 al 05/09/23",
          description: null
        }
      ],
      currentIndex: 0,
    };
  },
  methods: {
    prevJob() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
        this.scrollToJob(this.currentIndex);
      }
    },
    nextJob() {
      if (this.currentIndex < this.jobs.length - 1) {
        this.currentIndex += 1;
        this.scrollToJob(this.currentIndex);
      }
    },
    scrollToJob(index) {
      this.currentIndex = index;
      const container = this.$refs.jobContainer;
      const cardWidth = container.clientWidth;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
/* Container principale */
.job-list {
  margin: 0 auto;
  padding: 40px;
  text-align: center;
}


/* Container per lo scroll orizzontale */
.job-container {
  display: flex;
  overflow: hidden;
  scroll-snap-type: x mandatory;
}

/* Card dei lavori */
.job-card {
  min-width: 80%;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 30px;
  scroll-snap-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 30px;
  position: relative;
}

/* Etichetta del lavoro */
.job-label {
  top: 20px;
  left: 20px;
  margin-bottom: 40px;
  background-color: #BEC8B7;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  max-width: 50%;            /* Limita la larghezza dell'etichetta */
  word-wrap: break-word;      /* Consente il wrapping delle parole */
  white-space: normal;        /* Permette che il testo vada su più righe */
  overflow-wrap: break-word;  /* Aggiunta per garantire il wrapping delle parole */
}


/* Hover e animazioni */
.job-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.15);
}

.active {
  border-color: #BEC8B7;
  box-shadow: 0px 4px 12px rgba(74, 144, 226, 0.3);
}

/* Frecce e Pallini */
.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 15px;
}

.nav-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #BEC8B7;
  padding: 10px;
  transition: color 0.3s ease; /* Aggiunta per transizione del colore */
}

.nav-button.disabled {
  color: #ccc; /* Colore più chiaro per frecce disabilitate */
  cursor: not-allowed;
}

/* Icone delle frecce */
.arrow {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

/* Pagination Dots */
.pagination-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.dot {
  height: 12px;
  width: 12px;
  background-color: #f8f8f8;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s;
  cursor: pointer;
}

.dot.active {
  background-color: #BEC8B7;
}

/* Header del lavoro */
.job-header {
  margin-bottom: 15px;
}

.job-company {
  font-size: 1.2rem;
  color: #333;
  margin-top: 4px;
}

.job-location {
  font-size: 1rem;
  color: #777;
}

.job-date {
  font-size: 0.9rem;
  color: #999;
}

.job-description {
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
}
</style>
