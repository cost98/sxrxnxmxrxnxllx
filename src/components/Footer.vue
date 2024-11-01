<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Company Info Section -->
      <div class="footer-info">
        <h2>{{ companyName }}</h2>
        <p>{{ address }}</p>
        <p>Telefono: {{ phone }}</p>
        <p>Email: {{ email }}</p>
      </div>

      <!-- Navigation Links Section -->
      <div class="footer-links">
        <h3>Link Rapidi</h3>
        <ul>
          <li><a @click.prevent="scrollToSection('home')">{{ home }}</a></li>
          <li><a @click.prevent="scrollToSection('about')">{{ about }}</a></li>
          <li><a @click.prevent="scrollToSection('services')">{{ services }}</a></li>
          <li><a @click.prevent="scrollToSection('contact')">{{ contact }}</a></li>
        </ul>
      </div>

      <!-- Social Media Section -->
      <div class="footer-social">
        <h3>Seguici</h3>
        <div class="social-icons">
          <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" :aria-label="link.name">
            <IconComponent :name="link.icon" :color="link.color"/>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2023 {{ companyName }}. Tutti i diritti riservati.</p>
    </div>
  </footer>
</template>


<script>

export default {
  name: "FooterComponent",
  props: {
    home: {
      type: String,
      default: "Home" // Default title
    },
    about: {
      type: String,
      default: "About" // Default content
    },
    services: {
      type: String,
      default: "Services" // Default content
    },
    contact: {
      type: String,
      default: "Contact" // Default content
    },
    companyName: {
      type: String,
      default: "Nome Azienda"
    },
    address: {
      type: String,
      default: "Via Roma 123, 00100 Roma, Italia"
    },
    phone: {
      type: String,
      default: "+39 012 345 6789"
    },
    email: {
      type: String,
      default: "info@example.com"
    },
    socialLinks: {
      type: Array,
      default: () => [
        { name: "Facebook", url: "https://facebook.com", icon: "facebook-f", color: "#4267B2" }, // Blu
        { name: "Instagram", url: "https://instagram.com", icon: "instagram", color: "#C13584" }, // Rosso/Rosa
        { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin", color: "#0077B5" }, // Blu
        { name: "Twitter", url: "https://twitter.com", icon: "twitter", color: "#1DA1F2" } // Blu
      ]
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      this.isMenuOpen = false; // Chiudi il menu dopo la selezione
    }
  }
}
</script>


<style scoped>
.footer {
  background-color: #BEC8B7;
  color: #ffffff;
  padding: 40px 20px;
  text-align: center;
  font-size: 0.9rem;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-info,
.footer-links,
.footer-social {
  flex: 1 1 300px;
  min-width: 300px;
}

.footer-info h2 {
  font-size: 1.5rem;
}

.footer-info p {
  margin: 5px 0;
}

.footer-links h3,
.footer-social h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin: 5px 0;
}

.footer-links a {
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #ffffff;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-icons a {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}

.social-icons a:hover {
  transform: scale(1.1);
}

.social-icons img {
  width: 20px;
  height: 20px;
}

.footer-bottom {
  margin-top: 20px;
  padding-top: 10px;
}

.footer-bottom p {
  margin: 0;
  color: #ffffff;
}
</style>
