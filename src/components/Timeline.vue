<template>
  <section id="timeline" class="timeline-section">
    <TitleComponent
        firstPart="La mia "
        secondPart="Formazione"
    />
    <div
        v-if="sortedData.length"
        class="timeline">
      <div
          class="timeline__item"
          v-for="item in sortedData"
          :key="item._id"
      >
        <div class="content">
          <!-- Icona -->
          <icon-component :name="item.icon" color="#BEC8B7"/>
          <h2
              v-if="item.title.length"
              class="content__heading">
            {{ item.title }}
          </h2>
          <p v-if="item.text.length">{{ item.text }}</p>
          <p
              v-if="item.date.length"
              class="content__date">
            <b>{{ item.date }}</b>
          </p>
          <div v-if="item.tags.length">
            <span
                class="content__tag"
                v-for="tag in item.tags"
                :key="tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TitleComponent from "@/components/Title.vue";
import IconComponent from "v-svg-icons";

export default {
  name: 'TimelineComponent',
  components: {IconComponent, TitleComponent},
  data() {
    return {
      inputData: [
        {
          "_id": "1",
          "title": "Laurea triennale",
          "text": "Laurea triennale in scienze e tecniche psicologiche presso Università G. D’Annunzio, Chieti",
          "date": "2014",
          "tags": [],
          "icon": "school"
        },
        {
          "_id": "2",
          "title": "Laurea magistrale",
          "text": "Laurea Magistrale in psicologia clinica e della salute presso Università di Pisa (votazione 110/110)",
          "date": "2017",
          "tags": [],
          "icon": "school"
        },
        {
          "_id": "3",
          "title": "Corso EMDR",
          "text": "Corso EMDR, livello 1 presso Centro di ricerche e studi in Psicotraumatologia",
          "date": "2021",
          "tags": [],
          "icon": "book"
        },
        {
          "_id": "4",
          "title": "Corso di alta formazione",
          "text": "Corso di alta formazione “L’approccio ricostruttivo interpersonale nella psicoterapia individuale sistemica e relazionale” presso Istituto Dedalus",
          "date": "2023",
          "tags": [],
          "icon": "book"
        },
        {
          "_id": "5",
          "title": "Master",
          "text": "“LO PSICOTERAPEUTA IN TRIBUNALE” MASTER IN PSICOLOGIA GIURIDICA E FORENSE",
          "date": "2023",
          "tags": [],
          "icon": "school"
        },
        {
          "_id": "6",
          "title": "Laureanda",
          "text": "Laureanda in psicoterapia sistemica relazionale presso Istituto Dedalus",
          "date": "2024",
          "tags": [],
          "icon": "school"
        }
      ]

    }
  },
  props: {
    reversed: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  computed: {
    sortedData() {
      const inputData = this.inputData

      inputData.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
      })

      if (this.reversed) inputData.reverse()

      return inputData
    }
  }
}
</script>

<style scoped lang="scss">

.timeline-section {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(to right, #ece9e6, #ffffff);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  & * {
    box-sizing: border-box;
  }

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: snow;
    top: 0;
    bottom: 0;
    left: 90%;
    margin-left: -3px;

    @media screen and (min-width: 1024px) {
      left: 50%;
    }
  }

  &__item {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 90%;

    @media screen and (min-width: 1024px) {
      width: 50%;
    }

    &::after {
      content: '';
      position: absolute;
      width: 25px;
      height: 25px;
      right: -19px;
      background-color: white;
      border: 6px solid #BEC8B7;
      top: calc(50% - 16px);
      border-radius: 50%;
      z-index: 1;

      @media screen and (min-width) {
        top: calc(50% - 16px);
      }
    }

    &:nth-child(odd) {
      left: 0;

      @media screen and (min-width: 520px) {
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          width: 50%;
          z-index: -1;
          height: 6px;
          background-color: #BEC8B7;
        }
      }

      .content {
        @media screen and (min-width: 520px) {
          padding: 20px 50px 20px 30px;
          margin-right: 60px;


        }
      }
    }

    &:nth-child(even) {
      @media screen and (min-width: 520px) {

      }

      @media screen and (min-width: 1024px) {
        left: 50%;
      }

      .content {
        @media screen and (min-width: 520px) {
          padding: 20px 50px 20px 30px;
          margin: 0 60px 0 0;

        }

        @media screen and (min-width: 1024px) {
          padding: 20px 30px 20px 50px;
          margin: 0 0 0 60px;
        }
      }

      &::after {
        @media screen and (min-width: 1024px) {
          left: -18px;
        }
      }
    }
  }

  .content {
    border-radius: 20px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    background-color: white;
    position: relative;

    &__heading {
      color: #BEC8B7;
    }

    &__date {
      font-style: italic;
    }

    &__tag {
      padding: 5px 10px;
      margin-right: 5px;
      background-color: #BEC8B7;
      font-size: 10px;
      color: #FFF;
      border-radius: 5px;
    }
  }
}
</style>