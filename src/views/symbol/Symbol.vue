<template>
  <div>
    <button @click="back">&laquo;Previous</button>
    <h2>{{ symbol.symbol }} Details</h2>
    <ul>
      <li>
        <h6>
          Ask Price
        </h6>
        <div>
          {{ symbol.askPrice }}
        </div>
      </li>
      <li>
        <h6>
          Ask Quantity
        </h6>
        <div>
          {{ symbol.askQty }}
        </div>
      </li>
      <li>
        <h6>
          Bid Price
        </h6>
        <div>
          {{ symbol.bidPrice }}
        </div>
      </li>
      <li>
        <h6>
          Bid Quantity
        </h6>
        <div>
          {{ symbol.bidQty }}
        </div>
      </li>
      <li>
        <h6>
          Close Time
        </h6>
        <div>
          {{ symbol.closeTime }}
        </div>
      </li>
      <li>
        <h6>
          Count
        </h6>
        <div>
          {{ symbol.count }}
        </div>
      </li>
      <li>
        <h6>
          First ID
        </h6>
        <div>
          {{ symbol.firstId }}
        </div>
      </li>
      <li>
        <h6>
          High Price
        </h6>
        <div>
          {{ symbol.highPrice }}
        </div>
      </li>
      <li>
        <h6>
          Last ID
        </h6>
        <div>
          {{ symbol.lastId }}
        </div>
      </li>
      <li>
        <h6>
          Last Price
        </h6>
        <div>
          {{ symbol.lastPrice }}
        </div>
      </li>
      <li>
        <h6>
          Last Quantity
        </h6>
        <div>
          {{ symbol.lastQty }}
        </div>
      </li>
      <li>
        <h6>
          Low Price
        </h6>
        <div>
          {{ symbol.lowPrice }}
        </div>
      </li>
      <li>
        <h6>
          Open Price
        </h6>
        <div>
          {{ symbol.openPrice }}
        </div>
      </li>
      <li>
        <h6>
          Open Time
        </h6>
        <div>
          {{ symbol.openTime }}
        </div>
      </li>
      <li>
        <h6>
          Previous Close Price
        </h6>
        <div>
          {{ symbol.prevClosePrice }}
        </div>
      </li>
      <li>
        <h6>
          Price Change
        </h6>
        <div>
          {{ symbol.priceChange }}
        </div>
      </li>
      <li>
        <h6>
          Price Change Percent
        </h6>
        <div>
          {{ symbol.priceChangePercent }}
        </div>
      </li>
      <li>
        <h6>
          Quote Volume
        </h6>
        <div>
          {{ symbol.quoteVolume }}
        </div>
      </li>
      <li>
        <h6>
          Symbol
        </h6>
        <div>
          {{ symbol.symbol }}
        </div>
      </li>
      <li>
        <h6>
          Volume
        </h6>
        <div>
          {{ symbol.volume }}
        </div>
      </li>
      <li>
        <h6>
          Weighted Average Price
        </h6>
        <div>
          {{ symbol.weightedAvgPrice }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    symbol() {
      return this.$route.params.symbolObject;
    },
  },
  methods: {
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
button {
  display: flex;
  justify-content: flex-start;
  padding: 13px 30px;
  background: #1e1147;
  color: #ffffff;
  border: transparent;
  cursor: pointer;
}
ul {
  list-style-type: none;
  border: 1px solid black;
  max-width: 600px;
  padding: 0;
  margin: 0 auto;
}
li {
  padding: 4px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c3cbd3;
}
li h6 {
  text-transform: uppercase;
}
li:last-child {
  border: none;
}
</style>
