<template>
  <div class="container-fluid jobs-page">
    <div class="row">
      <House v-for="house in houses" :key="house.id" :house="house"/>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState'
import House from '../components/House.vue'
// import { useRouter } from 'vue-router'

export default {
  name: 'HousesPage',
  setup() {
    // const router = useRouter()
    const state = reactive({
      newHouse: {}
    })
    onMounted(() => {
      try {
        housesService.getHouses()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state,
      houses: computed(() => AppState.houses)
    }
  },
  components: {
    House
  }
}
</script>
