<template>
  <div class="house-details">
    <div v-if="state.loaded">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">
            <div>
              <img :src="house.imgUrl" alt="" />
            </div>
            {{ house.bedrooms }} Bedrooms | {{ house.bathrooms }} Bathrooms
          </h4>
          <h4>${{ house.price }}</h4>
          <h5>{{ house.levels }} levels</h5>
          <p>
            {{ house.description }}
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { housesService } from '../services/HousesService'
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      loaded: false
    })
    onMounted(async () => {
      try {
        await housesService.getOne(route.params.id)
      } catch (error) {
        console.error(error)
      }
      state.loaded = true
    })
    return {
      state,
      house: computed(() => AppState.activeHouse)
    }
  }
}
</script>

<style scoped>

</style>
