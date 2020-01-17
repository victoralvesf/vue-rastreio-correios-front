<template>
  <div class="home">
    <Form />
  </div>
</template>

<script>
import Form from '@/components/widgets/InputForm.vue';

export default {
  name: 'home',
  components: { Form },
};
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    height: calc(100vh - 60px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba($primary, 0.5);
  }
</style>
