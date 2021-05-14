<template>
  <div class="home">
    <Coins />
  </div>
</template>

<script>
import Coins from "@/components/Coins.vue";
export default {
  name: "Home",
  components: {
    Coins,
  },
  data() {
    return {
    };
  },
  mounted() {
    this.getSymbols();
  },
  methods: {
    async getSymbols() {
      try {
        const response = await this.$store.dispatch("getSymbols");
        console.log(response);
      } catch (error) {
        console.log("There was an error: " + error.response);
      }
    },
  },
};
</script>
