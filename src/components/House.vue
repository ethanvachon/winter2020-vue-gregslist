<template>
  <div class="car col-4">
    <router-link :to="{ name: 'HouseDetails', params: { id: house.id } }">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">
            <div>
              <img :src="house.imgUrl" alt="" />
            </div>
            {{ house.bedrooms }} Bedrooms | {{ house.bathrooms }} Bathrooms
          </h4>
          <p>
            {{ house.description }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'House',
  props: {
    house: {
      type: Object,
      required: true
    }
  },
  setup(props) {

  }
}
</script>
<style lang="scss" scoped>
  .house {
    cursor: pointer;
  }
  img{
    height: auto;
    width: 400px
  }
</style>
