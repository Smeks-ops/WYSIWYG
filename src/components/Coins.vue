<template>
  <div>
    <div class="coins--section">
      <div class="coin--card" v-for="symbol in symbols" :key="symbol.id">
        <h2 @click="showSymbolDetails(symbol)">{{ symbol.symbol }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    symbols() {
      return this.$store.state.symbols;
    },
  },
  methods: {
    showSymbolDetails(symbol) {
      console.log(symbol);
      const symbolObject = symbol;
      const symbol_name = symbol.symbol;
      this.$router.push({
        name: "Symbol",
        params: { symbol_name, symbolObject },
      });
    },
  },
};
</script>

<style>
.coins--section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  /* grid-row: 150px; */
  gap: 10px;
}
.coin--card {
  border: 1px solid black;
}
h2 {
  cursor: pointer;
}
</style>
