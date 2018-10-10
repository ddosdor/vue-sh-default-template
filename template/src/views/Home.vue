<template>
  <div class="HomeView">
    <WelcomeVue />
  </div>
</template>

<script>
import WelcomeVue from '@/components/Home/WelcomeVue';

export default {
  name: 'Home',
  components: { WelcomeVue },
};
</script>

<style lang="sass" scoped></style>