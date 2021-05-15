<template>
  <div>
    <div class="coins--section">
      <div class="coin--card" v-for="symbol in pageList" :key="symbol.id">
        <h2>{{ symbol.symbol }}</h2>
        <div>Ask Price: {{ symbol.askPrice }}</div>
        <div>Bid Price: {{ symbol.bidPrice }}</div>
        <button @click="showSymbolDetails(symbol)">Click to see more...</button>
      </div>
    </div>
    <div class="data-table-actions">
      <div>
        <p>
          Showing
          {{ currentPage * numberPerPage - (numberPerPage - 1) }} -
          {{ numberOfPages === currentPage ? totalItems : currentPage * numberPerPage }}
          of {{ totalItems }} items
        </p>
      </div>
      <div class="pagination">
        <span v-show="currentPage > 1" class="action text-orange" id="previous" @click="previousPage()">
          Prev.
        </span>
        <span class="action" :class="currentPage == 1 ? 'active' : ''" id="first" @click="firstPage()">
          1
        </span>
        <span v-show="numberOfPages > 1" class="action" :class="currentPage == 2 ? 'active' : ''" id="page" @click="goToPage(2)">
          2
        </span>
        <span v-show="numberOfPages > 2" class="action" :class="currentPage == 3 ? 'active' : ''" id="page" @click="goToPage(3)">
          3
        </span>
        <span class="action" v-if="numberOfPages > 4 && currentPage !== 4">...</span>
        <span v-show="currentPage > 3" class="action active" id="last">
          {{ currentPage }}
        </span>
        <span class="action" v-if="currentPage !== numberOfPages - 1 && currentPage > 3 && currentPage !== numberOfPages">...</span>
        <span v-show="currentPage < numberOfPages" class="action" :class="currentPage == numberOfPages ? 'active' : ''" id="last" @click="lastPage()">
          {{ numberOfPages }}
        </span>
        <span v-show="currentPage < numberOfPages" class="action" id="next" @click="nextPage()">
          Next
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageList: [],
      currentPage: 1,
      totalItems: 0,
      numberOfPages: 0,
      numberPerPage: 32,
    };
  },
  mounted() {
    this.loadSymbols();
    this.totalItems = this.symbols.length;
    this.numberOfPages = this.getNumberOfPages();
  },
  computed: {
    symbols() {
      return this.$store.state.symbols;
    },
    setTime(time) {
      return new Date(time).setHours();
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
    getNumberOfPages() {
      return Math.ceil(this.symbols.length / this.numberPerPage);
    },
    nextPage() {
      this.currentPage += 1;
      this.loadSymbols();
    },
    previousPage() {
      this.currentPage -= 1;
      this.loadSymbols();
    },
    firstPage() {
      this.currentPage = 1;
      this.loadSymbols();
    },
    goToPage(page) {
      this.currentPage = page;
      this.loadSymbols();
    },
    lastPage() {
      this.currentPage = this.numberOfPages;
      this.loadSymbols();
    },
    loadSymbols() {
      var begin = (this.currentPage - 1) * this.numberPerPage;
      var end = begin + this.numberPerPage;
      this.pageList = this.symbols.slice(begin, end);
      this.totalItems = this.symbols.length;
    },
  },
  watch: {
    symbols: function(data) {
      this.loadSymbols(this.symbols);
      this.totalItems = this.symbols.length;
      this.numberOfPages = this.getNumberOfPages();
    },
  },
};
</script>

<style>
button {
  border: none;
  background: none;
  color: #1e1147;
  cursor: pointer;
}
.coins--section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  gap: 10px;
}

.coin--card {
  border: 1px solid black;
  padding: 10px;
}

.data-table-actions {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2.5rem;
}

.data-table-actions .pagination {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}

.data-table-actions .pagination .action {
  cursor: pointer;
}

.data-table-actions .pagination .action:not(:last-child) {
  margin-right: 0.5rem;
}

.data-table-actions .pagination .action.active {
  background: #1e1147;
  border-radius: 50%;
  text-align: center;
  height: 30px;
  width: 30px;
  color: #ffffff;
}

.text-orange {
  color: rgb(255, 145, 0);
}
</style>
