<template>
  <form>
    <input
      type="text"
      @focus="focus = !focus"
      @blur="focus = !focus"
      :placeholder="focus ? '' : 'Código de rastreio'">
    <button>Rastrear</button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      focus: false,
    };
  },
  methods: {

  },
};
</script>

<style lang="scss" scopped>
  form {
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    input {
      border: none;
      padding: 10px;
      outline: none;
      font-size: 22px;
      color: $blue;
      text-transform: uppercase;
      text-align: center;
      font-weight: 700;
      background: transparent;
      border-bottom: 2px solid $blue;

      &focus::-webkit-input-placeholder {
        opacity: 0;
      }

      &::placeholder {
        text-align: center;
        font-size: 22px;
        font-weight: 700;
        color: $blue;
      }
    }

    button {
      margin-top: 15px;
      border: 2px solid $blue;
      background: transparent;
      border-radius: 20px;
      padding: 10px;
      font-size: 18px;
      font-weight: 700;
      color: $blue;
    }
  }
</style>
