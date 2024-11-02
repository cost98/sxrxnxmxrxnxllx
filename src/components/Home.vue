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
        <a href="#" class="cta-button">Contattami</a>
      </div>

      <!-- Colonna dell'immagine -->
      <div class="image-column">
        <div class="image-container">
          <img src="https://serenamarinelli.altervista.org/wp-content/uploads/2024/10/SERENA-MARINELLI-8.png" alt="Foto di Serena Marinelli" class="profile-image" />
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
  max-width: 1200px; /* Ridotto per evitare troppo spazio */
  gap: 50px;
  padding: 40px; /* Ridotto per rendere la card più compatta */
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
}

/* Colonna del testo */
.text-column {
  flex: 1;
}

.text-column h2 {
  font-size: 2.5em;
  color: #BEC8B7;
  margin: 0;
}

.text-column h3 {
  font-size: 1.5em;
  color: #BEC8B7;
  margin-top: 5px;
  font-weight: 400;
}

.text-column p {
  margin-top: 15px;
  font-size: 1.1em;
  line-height: 1.6;
  color: #444;
}

.cta-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 25px;
  background-color: #BEC8B7;
  color: #fff;
  text-decoration: none;
  font-size: 1em;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #BEC8B7;
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
  width: 350px; /* Ridotto leggermente */
  height: 350px;
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
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
}

/* Media queries per schermi piccoli */
@media (max-width: 768px) {
  .home-container {
    flex-direction: row; /* Mantiene la disposizione testo-sinistra, immagine-destra */
    text-align: center;
    gap: 20px;
    padding: 20px;
    max-width: 100%;
  }

  .text-column h2 {
    font-size: 2em;
  }

  .text-column h3 {
    font-size: 1.3em;
  }

  .text-column p {
    font-size: 1em;
  }

  .image-container {
    width: 250px; /* Ridotto su schermi piccoli */
    height: 250px;
  }
}
</style>
