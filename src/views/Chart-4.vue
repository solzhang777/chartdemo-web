<template>
  <div class="chart-4">
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
            <i class="fa fa-dashboard"></i> Chart 4
          </a>
        </li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row chart">
        <section class="col-lg-6">
          <canvas id="canvas-4-1"></canvas>
        </section>
        <section class="col-lg-6">
          <canvas id="canvas-4-2"></canvas>
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
    this.playTwo();
  }

  public playOne() {
    const ctx: HTMLCanvasElement = document.getElementById(
      "canvas-4-1"
    ) as HTMLCanvasElement;
    const config: ChartConfiguration = {
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

  public playTwo() {
    const ctx: HTMLCanvasElement = document.getElementById(
      "canvas-4-2"
    ) as HTMLCanvasElement;
    const myChart: Chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}
</script>


<style lang="scss">
.chart-4 {
  .chart {
    width: 800px;
    height: 300px;
  }
}
</style>


