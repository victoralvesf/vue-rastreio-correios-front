<template>
  <header>
    <div class="row">
      <h1>Rastreio Correios</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    width: 100vw;
    height: 60px;
    background: $primary;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 5px rgba(#333, 0.3);
    border-bottom: 1px solid rgba(#000, 0.1);

    .row {
      width: 80vw;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      h1 {
        margin-top: -3px;
        color: $blue;
      }
    }
  }
</style>
