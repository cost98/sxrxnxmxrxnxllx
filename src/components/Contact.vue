<template>
  <section id="contact" class="contact-section">
    <h1>
      I Nostri <span class="highlight">Contatti</span>
    </h1>
    <p class="intro-text">Siamo qui per aiutarti. Contattaci tramite uno dei seguenti metodi:</p>

    <div class="contact-container">
      <!-- Contact Card for Phone -->
      <div class="contact-card">
        <div class="icon-wrapper">
          <IconComponent name="phone" color="white" />

        </div>
        <div class="contact-content">
          <h2 class="contact-title">Telefono</h2>
          <p class="contact-info">{{ phone }}</p>
        </div>
      </div>

      <!-- Contact Card for Email -->
      <div class="contact-card">
        <div class="icon-wrapper">
          <IconComponent name="envelope" color="white" />

        </div>
        <div class="contact-content">
          <h2 class="contact-title">Email</h2>
          <p class="contact-info">{{ email }}</p>
        </div>
      </div>

      <!-- Contact Card for Address -->
      <div class="contact-card">
        <div class="icon-wrapper">
          <IconComponent name="map-location-dot" color="white" />
        </div>
        <div class="contact-content">
          <h2 class="contact-title">Indirizzo</h2>
          <p class="contact-info">{{ address }}</p>
        </div>
      </div>
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
export default {
  name: "ContactComponent",
  props: {
    phone: {
      type: String,
      default: "+39 012 345 6789"
    },
    email: {
      type: String,
      default: "info@example.com"
    },
    address: {
      type: String,
      default: "Via Roma 123, 00100 Roma, Italia"
    }
  }
}
</script>

<style scoped>
.contact-section {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(to right, #f7f9fa, #ffffff);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

h1 {
  font-size: 2.8rem;
  margin-bottom: 10px;
  color: #2c3e50;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.highlight {
  color: #BEC8B7;
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
