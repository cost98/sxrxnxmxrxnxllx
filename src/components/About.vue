<!-- About.vue -->
<template>
  <section id="about" class="about-section">
    <!-- Titolo principale -->
    <div class="title-container">
      <TitleComponent secondPart="Riguardo me" />
    </div>

    <!-- Contenuto della sezione About -->
    <div class="about-container">
      <div class="image-container">
        <img src="https://serenamarinelli.altervista.org/wp-content/uploads/2024/10/SERENA-MARINELLI-2-960x960.png" alt="Foto di esempio" class="about-image" />
      </div>
      <div class="text-container">
        <h2>Di cosa mi occupo</h2>
        <p>Ho completato un programma di specializzazione quinquennale in psicoterapia presso l'Istituto Dedalus, un centro di studi dedicato alla terapia familiare, e sono attualmente in fase di elaborazione della mia tesi.
          Inoltre, ho conseguito una Formazione di I Livello in EMDR (Eye Movement Desensitization and Reprocessing), una tecnica efficace per l'elaborazione dei traumi.
          La mia formazione e le mie esperienze mi permettono di affrontare le diverse problematiche psicologiche con una visione integrata e personalizzata.
          Ho un’esperienza consolidata nel trattamento di disturbi della nutrizione e dell'alimentazione, ansia, depressione e psicopatologie dello sviluppo.</p>

        <h2>La terapia</h2>
        <p>Il mio approccio terapeutico è di natura sistemico-relazionale. Ciò significa che considero la funzionalità del sintomo all'interno del ciclo di vita dell'individuo e del contesto familiare e sociale in cui si inserisce. Credo che ogni sintomo porti con sé significati profondi che meritano di essere interpretati con attenzione.Questo processo non solo aiuta a comprendere il disagio attuale, ma restituisce anche un senso alla storia di vita del paziente, permettendo di integrare esperienze passate e presenti in un quadro coerente e significativo.</p>
      </div>
    </div>
  </section>
</template>

<script>
import TitleComponent from "@/components/Title.vue";

export default {
  name: "AboutComponent",
  components: { TitleComponent }
}
</script>

<style scoped>
/* Sezione principale */
.about-section {
  padding: 80px 20px;
  background: linear-gradient(to right, #f7f9fa, #ffffff);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

/* Contenitore per il titolo */
.title-container {
  text-align: center;
  margin-bottom: 40px;
}

/* Contenitore About */
.about-container {
  display: flex;
  align-items: flex-start;
  gap: 50px;
  padding: 40px;
  margin: 0 auto;
}

/* Stile per l'immagine */
.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-image {
  width: 100%;
  border-radius: 10px;
}

/* Stile per il testo */
.text-container {
  flex: 2;
}

.text-container h2 {
  font-size: 1.8em;
  color: #6c7b59;
  margin-bottom: 10px;
}

.text-container p {
  font-size: 1.1em;
  line-height: 1.6;
  color: #444;
  margin-bottom: 20px;
}

/* Media queries per schermi piccoli */
@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
    padding: 20px;
    text-align: center;
  }

  .image-container, .text-container {
    width: 100%;
  }

  .about-image {
    width: 80%; /* Immagine più grande su mobile */
    max-width: none; /* Rimuovi limite di larghezza su mobile */
  }

  .text-container h2 {
    font-size: 1.5em;
  }

  .text-container p {
    font-size: 1em;
  }
}

</style>
