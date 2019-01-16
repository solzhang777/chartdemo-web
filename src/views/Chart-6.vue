<template>
  <div class="chart-6">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Welcome to PPro365 coach
        <small>Preview</small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <a href="#">
            <i class="fa fa-dashboard"></i> Home
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-dashboard"></i> Chart 6
          </a>
        </li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row chart">
        <section class="col-lg-12">
          <canvas id="canvas-6-1"></canvas>
        </section>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Chart, { ChartConfiguration, ChartData } from "chart.js";

@Component
export default class extends Vue {
  public randomScalingFactor(): number {
    return Math.round(Math.random() * 100);
  }

  public mounted() {
    this.playOne();
  }

  public playOne() {
    const ctx: HTMLCanvasElement = document.getElementById(
      "canvas-6-1"
    ) as HTMLCanvasElement;
    const chartData: ChartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          type: "line",
          label: "Dataset 1",
          borderColor: "#00f",
          borderWidth: 2,
          fill: false,
          data: [
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor()
          ]
        },
        {
          type: "bar",
          label: "Dataset 2",
          backgroundColor: "#f00",
          data: [
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor()
          ],
          borderColor: "white",
          borderWidth: 2
        },
        {
          type: "bar",
          label: "Dataset 3",
          backgroundColor: "#0f0",
          data: [
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor()
          ]
        }
      ]
    };

    const myChart: Chart = new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Chart.js Combo Bar Line Chart"
        },
        tooltips: {
          mode: "index",
          intersect: true
        }
      }
    });
  }
}
</script>

<style lang="scss">
.chart-6 {
  .chart {
    width: 800px;
    height: 400px;
  }
}
</style>


