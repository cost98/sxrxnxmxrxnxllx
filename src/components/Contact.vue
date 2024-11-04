<template>
  <section id="contact" class="contact-section">
    <TitleComponent
        firstPart="I miei "
        secondPart="Contatti"
    />
    <p class="intro-text">Siamo qui per aiutarti. Contattaci tramite uno dei seguenti metodi:</p>

    <div class="contact-container">
      <!-- Contact Card for Phone -->
      <a :href="'tel:' + phone" class="contact-card">
        <div class="icon-wrapper">
          <IconComponent name="phone" color="white" />
        </div>
        <div class="contact-content">
          <h2 class="contact-title">Telefono</h2>
          <p class="contact-info">{{ phone }}</p>
        </div>
      </a>

      <!-- Contact Card for Email -->
      <a :href="'mailto:' + email" class="contact-card">
        <div class="icon-wrapper">
          <IconComponent name="envelope" color="white" />
        </div>
        <div class="contact-content">
          <h2 class="contact-title">Email</h2>
          <p class="contact-info">{{ email }}</p>
        </div>
      </a>

      <!-- Contact Card for Address -->
      <a
          :href="'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address)"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
      >
        <div class="icon-wrapper">
          <IconComponent name="map-location-dot" color="white" />
        </div>
        <div class="contact-content">
          <h2 class="contact-title">Indirizzo</h2>
          <p class="contact-info">{{ address }}</p>
        </div>
      </a>
    </div>

    <!-- Map Section -->
    <div class="map-section">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95373531586002!3d-37.81720974201407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775f55f8b1b4d!2sVia%20Roma%20123%2C%2000100%20Roma%2C%20Italia!5e0!3m2!1sit!2sit!4v1611234567890"
          width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
          aria-hidden="false" tabindex="0">
      </iframe>
    </div>
  </section>
</template>

<script>
import TitleComponent from "@/components/Title.vue";

export default {
  name: "ContactComponent",
  components: {TitleComponent},
  props: {
    phone: {
      type: String,
      default: "+39 342 522 4862"
    },
    email: {
      type: String,
      default: "info@example.com"
    },
    address: {
      type: String,
      default: "Roma, Piazza Camillo Finocchiaro Aprile n.3"
    }
  }
}
</script>

<style scoped>
.contact-section {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(to right, #f7f9fa, #ffffff);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.intro-text {
  font-size: 1.2rem;
  color: #34495e;
  margin-bottom: 20px;
}

.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
}

.contact-card {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  width: 300px;
  height: 220px;
  padding: 20px;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: inherit; /* mantiene il colore del testo */
  text-decoration: none; /* rimuove la sottolineatura */
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: #BEC8B7;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
}

.contact-content {
  color: #2c3e50;
}

.contact-title {
  font-size: 1.4rem;
  margin-bottom: 8px;
  color: #2c3e50;
}

.contact-info {
  font-size: 1.1rem;
  color: #555;
}

.map-section {
  margin-top: 40px;
  width: 100%;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
}
</style>
