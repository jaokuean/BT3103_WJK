<template>
  <div>
    <h1 id="chartDashboard">Bar Chart</h1>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./BarChart.js";
export default {
  components: {
    Chart,
  },
};
</script>

<style>
#chartDashboard {
  width: 100%;
  padding: 10px;
  text-align: center;
  background-color: lightblue;
}
</style>