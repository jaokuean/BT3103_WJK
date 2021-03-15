<template>
  <div id="main">
    <div id="chart">
      <bar-chart></bar-chart>
    </div>
    <div id="chart">
      <line-chart></line-chart>
    </div>
  </div>
</template>

<script>
import barChart from "./Chart/BarChart.vue";
import lineChart from "./Chart/LineChart.vue";

export default {
  components: {
    "bar-chart": barChart,
    "line-chart": lineChart,
  },
};
</script>

<style>
#main {
  content: "";
  display: table;
  clear: both;
}
#chart {
  width: 700px;
  height: 700px;
  border-style: solid;
  border-color: rgb(155, 84, 84);
  border-width: 1px;
  padding: 30px;
  float: left;
}
</style>