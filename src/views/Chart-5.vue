<template>
  <div class="chart-5">
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
            <i class="fa fa-dashboard"></i> Chart 5
          </a>
        </li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <section class="col-lg-6">
          <canvas id="canvas-5-1"></canvas>
        </section>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Chart, { ChartConfiguration } from "chart.js";

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
      "canvas-5-1"
    ) as HTMLCanvasElement;
    const color = Chart.helpers.color;
    const config: ChartConfiguration = {
      type: "radar",
      data: {
        labels: [
          ["Eating", "Dinner"],
          ["Drinking", "Water"],
          "Sleeping",
          ["Designing", "Graphics"],
          "Coding",
          "Cycling",
          "Running"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: color("#f00")
              .alpha(0.2)
              .rgbString(),
            borderColor: "#f00",
            pointBackgroundColor: "#f00",
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
            label: "My Second dataset",
            backgroundColor: color("#0f0")
              .alpha(0.2)
              .rgbString(),
            borderColor: "#0f0",
            pointBackgroundColor: "#0f0",
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
      },
      options: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Chart.js Radar Chart"
        },
        scales: {
          ticks: {
            beginAtZero: true
          }
        }
      }
    };

    const myChart: Chart = new Chart(ctx, config);
  }
}
</script>


<style lang="scss">
.chart-5 {
  .chart {
    width: 400px;
    height: 300px;
  }
}
</style>


