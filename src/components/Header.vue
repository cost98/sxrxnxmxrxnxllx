<template>
  <nav>
    <div class="navbar-container">
      <div class="logo">
      </div>
      <div class="menu-toggle" @click="toggleMenu">
        <div class="bar" v-bind:class="{ 'open': isMenuOpen }"></div>
        <div class="bar" v-bind:class="{ 'open': isMenuOpen }"></div>
        <div class="bar" v-bind:class="{ 'open': isMenuOpen }"></div>
      </div>
      <ul :class="{ 'active': isMenuOpen }">
        <li><a @click.prevent="scrollToSection('home')">Home</a></li>
        <li><a @click.prevent="scrollToSection('about')">About</a></li>
        <li><a @click.prevent="scrollToSection('services')">Services</a></li>
        <li><a @click.prevent="scrollToSection('contact')">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      isMenuOpen: false // Stato del menu hamburger
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Alterna lo stato del menu
    },
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
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background 0.3s;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px; /* Padding per la navbar */
}

.logo img {
  height: 40px; /* Dimensione del logo */
}

.menu-toggle {
  display: none; /* Nascondi il toggle per desktop */
  flex-direction: column;
  cursor: pointer;
}

.menu-toggle .bar {
  height: 4px;
  width: 25px;
  background: #333;
  margin: 4px 0;
  transition: all 0.3s ease; /* Transizione per l'apertura */
}

ul {
  display: flex;
  list-style: none;
  gap: 15px;
  margin: 0;
  padding: 0;
}

ul.active {
  display: flex; /* Mostra il menu quando attivo */
}

ul li {
  cursor: pointer;
}

ul li a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  padding: 10px 15px; /* Padding per i link */
  transition: color 0.3s;
}

ul li a:hover {
  color: #42b983; /* Colore hover */
}

/* Stile per i dispositivi mobili */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex; /* Mostra il toggle per mobile */
  }

  ul {
    display: none; /* Nascondi il menu per mobile */
    flex-direction: column; /* Imposta il menu in colonna */
    position: absolute;
    top: 60px; /* Posizione sotto la navbar */
    left: 0;
    right: 0;
    background: white; /* Sfondo del menu */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  ul.active {
    display: flex; /* Mostra il menu quando attivo */
  }

  ul li {
    width: 100%; /* Larghezza del 100% per ogni voce del menu */
    text-align: center; /* Centra il testo */
  }
}
</style>
