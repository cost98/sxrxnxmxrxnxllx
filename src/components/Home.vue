<template>
  <section id="home">
    <div class="home-container">
      <!-- Colonna di testo -->
      <div class="text-column">
        <h2>Dr.ssa Serena Marinelli</h2>
        <h3>Psicologa</h3>
        <p>
          Sono la <strong>Dott.ssa Serena Marinelli</strong>, psicologa clinica e della salute, laureata presso l’Università di Pisa. Attualmente esercito la libera professione a <strong>Roma</strong> e collaboro con l’<strong>ASST Spedali Civili di Brescia</strong>, dove mi occupo di psicologia delle cure primarie.
        </p>
      </div>

      <!-- Colonna dell'immagine -->
      <div class="image-column">
        <div class="image-container">
          <img src="@/assets/personal.png" alt="Foto di Serena Marinelli" class="profile-image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeComponent"
}
</script>

<style scoped>

/* Contenitore */
.home-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding: 100px; /* Ridotto per rendere la card più compatta */
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
}

/* Colonna del testo */
.text-column {
  flex: 1;
}

.text-column h2 {
  font-size: 4em;
  color: #BEC8B7;
  margin: 0;
}

.text-column h3 {
  font-size: 2.5em;
  color: #BEC8B7;
  margin-top: 5px;
  font-weight: 400;
}

.text-column p {
  margin-top: 15px;
  font-size: 1.5em;
  line-height: 1.6;
  color: #444;
}

/* Colonna dell'immagine */
.image-column {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  position: relative;
  background-color: transparent; /* Colore di sfondo trasparente per rimuovere il secondo cerchio */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image {
  width: 90%;
  height: 90%;
  background-color: #BEC8B7;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

/* Media queries per schermi piccoli */@media (max-width: 768px) {
  .home-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 20px;
    max-width: 100%;
  }

  /* Ordina la colonna dell'immagine per apparire subito dopo il titolo */
  .image-column {
    order: 1; /* Imposta l'immagine come primo elemento */
    margin-top: 15px;
  }

  .text-column {
    order: 2; /* Imposta il testo come secondo elemento */
  }

  .text-column h2 {
    font-size: 3em;
  }

  .text-column h3 {
    font-size: 2em;
  }

  .text-column p {
    font-size: 1.5em;
  }
}

</style>
