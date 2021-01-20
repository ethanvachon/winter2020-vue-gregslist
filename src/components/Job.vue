<template>
  <div class="car col-4">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">
            {{ job.company }} | {{ job.jobTitle }}
          </h4>
          <h5>{{ job.hours }} at {{ job.rate }} an hour</h5>
          <p>{{ job.description }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Job',
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  setup(props) {

  }
}
</script>
<style lang="scss">
  .job {
    cursor: pointer;
  }
</style>
