<template>
  <nav>
    <div class="navbar-container">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </div>
      <div class="menu-toggle" @click="toggleMenu">
        <div class="bar" v-bind:class="{ 'open': isMenuOpen }"></div>
        <div class="bar" v-bind:class="{ 'open': isMenuOpen }"></div>
        <div class="bar" v-bind:class="{ 'open': isMenuOpen }"></div>
      </div>
      <ul v-if="!isMenuOpen" :class="{ 'active': isMenuOpen }" class="navbar-menu">
        <li><a @click.prevent="scrollToSection('home')">{{ home }}</a></li>
        <li><a @click.prevent="scrollToSection('about')">{{ about }}</a></li>
        <li><a @click.prevent="scrollToSection('working')">{{ working }}</a></li>
        <li><a @click.prevent="scrollToSection('contact')">{{ contact }}</a></li>
        <li><a @click.prevent="scrollToSection('services')">{{ services }}</a></li>
      </ul>
    </div>

    <!-- Full-screen Overlay Menu -->
    <div v-if="isMenuOpen" class="overlay" @click="toggleMenu">
      <div class="overlay-content" @click.stop>
        <ul>
          <li><a @click.prevent="scrollToSection('home')">{{ home }}</a></li>
          <li><a @click.prevent="scrollToSection('about')">{{ about }}</a></li>
          <li><a @click.prevent="scrollToSection('working')">{{ working }}</a></li>
          <li><a @click.prevent="scrollToSection('contact')">{{ contact }}</a></li>
          <li><a @click.prevent="scrollToSection('services')">{{ services }}</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: "HeaderComponent",
  props: {
    home: {
      type: String,
      default: "Home" // Default title
    },
    about: {
      type: String,
      default: "Riguardo me" // Default content
    },
    services: {
      type: String,
      default: "Servizi" // Default content
    },
    contact: {
      type: String,
      default: "Contatti" // Default content
    },
    working: {
      type: String,
      default: "Formazione" // Default content
    }
  },
  data() {
    return {
      isMenuOpen: false // Stato del menu hamburger
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
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
  padding: 15px 20px; /* Padding for the navbar */
}

.logo img {
  height: 60px; /* Logo size */
}

.menu-toggle {
  display: none; /* Hide toggle for desktop */
  flex-direction: column;
  cursor: pointer;
}

.menu-toggle .bar {
  height: 2px;
  width: 25px;
  background: #333;
  margin: 4px 0;
  transition: all 0.3s ease; /* Transition for opening */
}

ul {
  display: flex;
  list-style: none;
  gap: 15px;
  margin: 0;
  padding: 0;
}

ul.active {
  display: flex; /* Show the menu when active */
}

ul li {
  cursor: pointer;
}

ul li a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  padding: 10px 15px; /* Padding for links */
  transition: color 0.3s;
}

ul li a:hover {
  color: #42b983; /* Hover color */
}

/* Full-screen Overlay Menu Styles */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
  z-index: 999; /* Ensure overlay appears above other content */
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-content {
  text-align: center; /* Center content */
  color: white; /* Text color for overlay */
  width: 100%; /* Full width for overlay content */
  max-width: 400px; /* Optional: Limit max width for aesthetics */
}

.overlay-content ul {
  list-style: none; /* No bullet points */
  padding: 0;
  margin: 0; /* Remove margin for better alignment */
  display: flex; /* Use flexbox for vertical alignment */
  flex-direction: column; /* Set direction to column for vertical layout */
  align-items: center; /* Center items horizontally */
}

.overlay-content li {
  margin: 20px 0; /* Space between items */
}

.overlay-content li a {
  font-size: 24px; /* Larger font for visibility */
  color: white; /* Link color */
  text-decoration: none; /* No underline */
  transition: color 0.3s; /* Transition for hover */
}

.overlay-content li a:hover {
  color: #42b983; /* Hover color for links in overlay */
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex; /* Show the toggle for mobile */
  }

  .navbar-menu {
    display: none; /* Hide the menu for mobile */
  }

  .navbar-menu.active {
    display: flex; /* Show the menu when active */
  }

  .navbar-menu li {
    width: 100%; /* Full width for each menu item */
    text-align: center; /* Center text */
    margin: 10px 0; /* Margin between items */
    padding: 15px 0; /* Add padding for more space */
  }
}
</style>
