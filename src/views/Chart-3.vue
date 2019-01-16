<template>
  <div class="chart-3">
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
            <i class="fa fa-dashboard"></i> Chart 3
          </a>
        </li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="chart">
        <canvas id="canvas-3"></canvas>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Chart from "chart.js";

@Component
export default class extends Vue {
  public randomScalingFactor(): number {
    return Math.round(Math.random() * 100);
  }

  public mounted() {
    const ctx: HTMLCanvasElement = document.getElementById(
      "canvas-3"
    ) as HTMLCanvasElement;
    const config = {
      type: "pie",
      data: {
        datasets: [
          {
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor()
            ],
            backgroundColor: ["#f00", "#00f", "#f39", "#0f0", "#03f"],
            label: "Dataset 1"
          }
        ],
        labels: ["Red", "Orange", "Yellow", "Green", "Blue"]
      },
      options: {
        responsive: true
      }
    };

    const myChart: Chart = new Chart(ctx, config);
  }
}
</script>


<style lang="scss">
.chart-3 {
  .chart {
    width: 400px;
    height: 300px;
  }
}
</style>


