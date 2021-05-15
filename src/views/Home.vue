<template>
  <div>
    <div v-if="isLoading">Loading, please wait...</div>

    <div class="home" v-else-if="!isLoading">
      <Coins />
    </div>
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
      isLoading: false,
    };
  },
  async created() {
    await this.getSymbols();
  },
  methods: {
    async getSymbols() {
      this.isLoading = true;
      try {
        const response = await this.$store.dispatch("getSymbols");
        console.log(response);
        setTimeout(() => {
          this.getSymbols();
        }, 30000);
        this.isLoading = false;
      } catch (error) {
        console.log("There was an error: " + error.response);
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.home {
  max-width: 80%;
  margin: 4rem auto;
}
</style>
