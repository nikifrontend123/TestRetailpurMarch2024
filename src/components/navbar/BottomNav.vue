<template>
  <div v-if="link" class="d-flex justify-content-evenly w-100">

    <routerLink :to="link.route" :class="{ 'text-dark': currentRoute === link.name }"
      style="text-decoration:none;color:#e9848b;">
      <div class="inner-items py-1 d-flex flex-column">
        <i :class="link.icon"></i>
        <p class="m-0" style="font-size:12px;">{{ link.label }}</p>
      </div>
    </routerLink>


  </div>
</template>
<script>
export default {
  props: ['link'],
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  },
};
</script>
<style>
.items {
  display: flex;
  text-align: center;
}

.nav-bottom {
  height: 20%;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  background: #F6F6F6;
}
</style>
