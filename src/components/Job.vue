<template>
  <section id="job">
    <div class="job-list">
      <TitleComponent firstPart="La mia " secondPart="esperienza" />

      <div class="job-items">
        <div v-for="job in jobs" :key="job.id" class="job-item">
          <div class="job-header">
            <h3>{{ job.role }}</h3>
            <p class="company">{{ job.company }}</p>
          </div>
          <div class="job-location-date">
            <p class="location">{{ job.location || 'Sede non specificata' }}</p>
            <p class="date">{{ job.date }}</p>
          </div>
          <p class="description" v-if="job.descriptionCo">{{ job.descriptionCo }}</p>
          <p v-else class="no-description"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TitleComponent from "@/components/Title.vue";

export default {
  name: "JobList",
  components: {TitleComponent},
  data() {
    return {
      jobs: [
        {
          id: 1,
          role: "Psicologa",
          company: "Studio Mustang",
          location: "Torvaianica (RM)",
          date: "Dal 02/10/24 - In corso",
          descriptionCo:
              "Attività di riabilitazione e supporto psicologico per bambini ed adolescenti; percorsi di supporto alla famiglia e alla genitorialità.",
        },
        {
          id: 2,
          role: "Tutor Tirocinio Pratico Valutativo",
          company: "Ordine Psicologi della Lombardia",
          location: "ASST Spedali Civili di Brescia",
          date: "Dal 01/08/24 - In corso",
          descriptionCo: null,
        },
        {
          id: 3,
          role: "Psicologa delle cure primarie",
          company: "ASST Ospedali Civili di Brescia",
          location: "",
          date: "Dal 26/02/24 - In corso",
          descriptionCo: null,
        },
        {
          id: 4,
          role: "Psicologa",
          company: "Ospedale Generale 'Cristo Re'",
          location: "Roma (Ambulatorio di endocrinologia)",
          date: "Dal 14/04/22 al 29/02/24",
          descriptionCo:
              "Attività di valutazione di accesso alla Chirurgia Bariatrica; sostegno psicologico mirato al percorso di psiconutrizione in equipe multidisciplinare.",
        },
        {
          id: 5,
          role: "Psicologa",
          company: "Poliambulatorio Medigit",
          location: "Foggia",
          date: "Dal 12/11/22 al 05/09/23",
          descriptionCo: null,
        },
      ],
      currentIndex: 0,
    };
  },
};
</script>

<style scoped>
.job-list {
  padding: 20px;
}

.job-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.job-item {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.job-item:hover {
  transform: translateY(-5px);
}

.job-header h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.company {
  font-size: 1.1rem;
  color: #777;
}

.job-location-date {
  margin-top: 10px;
  font-size: 1rem;
  color: #555;
}

.location {
  margin-bottom: 5px;
}

.date {
  font-style: italic;
  color: #777;
}

.description {
  margin-top: 15px;
  color: #444;
}

.no-description {
  margin-top: 15px;
  color: #888;
}

.job-item .description, .job-item .no-description {
  font-size: 1rem;
}
</style>
