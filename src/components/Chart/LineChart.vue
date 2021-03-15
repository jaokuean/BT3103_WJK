<template>
  <div>
    <h1 id="chartDashboard">Line Chart</h1>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./LineChart.js";
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