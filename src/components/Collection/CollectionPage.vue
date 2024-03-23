<template>
  <div class="">
    <div :id="'section' + (index + 2)" v-for="(collect, index) in collections" :key="index" class="my-3 mb-5">
      <div class="w-100 container-fluid" :style="{ backgroundColor: containerColor }">
        <div @click="toggleCollapse(index);" data-bs-toggle="collapse" :data-bs-target="'#collapseData' + (index + 2)"
          class="row border" :class="{ 'bg': isCollapsed(index) }">
          <div class="py-3" :class="'order-' + collect.order">
            <div class="container d-flex justify-content-between align-items-center">
              <h1>{{ collect.heading }}</h1>
              <i :class="{ 'bi-chevron-down': !isCollapsed(index), 'bi-chevron-up': isCollapsed(index) }"></i>
            </div>
          </div>
        </div>
      </div>


      <div :id="'collapseData' + (index + 2)" class="collapse" :class="{ 'show': isCollapsed(index) }">
        <div class="container px-4 mt-3">
          <div class="row row-cols-3 row-cols-md-6 gx-2">
            <div class="col" v-for="(first, key) in collect.one" :key="key">
              <router-link :to="'/catalog-page/' + first.id" class="text-decoration-none text-dark">
                <div class="card rounded-0">
                  <img :src="first.img" alt="" style="width: 100%;">
                </div>
              </router-link>
              <div class="d-flex justify-content-between" style="font-size: 10px;">
                <p>₹{{ first.price }}</p>
                <p>{{ first.moq }}MOQ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollectionPage",
  props: ['collections', 'collect', 'index'],
  data() {
    return {
      collapsedItems: [],
    };
  },
  computed: {
    containerColor() {
      return this.isCollapsed(0) ? '#8d8d89' : '';
    }
  },
  methods: {
    toggleCollapse(index) {
      this.collapsedItems[index] = !this.collapsedItems[index];
    },
    isCollapsed(index) {
      return !this.collapsedItems[index];
    },
  }
};
</script>

<style>
.bg {
  background-color: #EFEFED;
}
</style>
