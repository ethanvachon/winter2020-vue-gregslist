<template>
  <div class="container-fluid jobs-page">
    <div class="row">
      <Job v-for="job in jobs" :key="job.id" :job="job"/>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { jobsService } from '../services/JobsService'
import { AppState } from '../AppState'
import Job from '../components/Job.vue'
// import { useRouter } from 'vue-router'

export default {
  name: 'JobsPage',
  setup() {
    // const router = useRouter()
    const state = reactive({
      newJob: {}
    })
    onMounted(() => {
      try {
        jobsService.getJobs()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state,
      jobs: computed(() => AppState.jobs)
    }
  },
  components: {
    Job
  }
}
</script>
