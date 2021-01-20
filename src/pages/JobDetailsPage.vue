<template>
  <div class="car-details">
    <div v-if="state.loaded">
      <h4>
        {{ job.company }} | {{ job.jobTitle }}
      </h4>
      <h5>{{ job.hours }} at {{ job.rate }} an hour</h5>
      <p>{{ job.description }}</p>
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
import { jobsService } from '../services/JobsService'
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      loaded: false
    })
    onMounted(async () => {
      try {
        await jobsService.getOne(route.params.id)
      } catch (error) {
        console.error(error)
      }
      state.loaded = true
    })
    return {
      state,
      job: computed(() => AppState.activeJob)
    }
  }
}
</script>

<style scoped>

</style>
