<template>
  <div class="chart-1">
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
            <i class="fa fa-dashboard"></i> Chart 1
          </a>
        </li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="chart">
        <canvas id="canvas"></canvas>
      </div>
    </section>
    <!-- /.content -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Chart from "chart.js";

@Component
export default class extends Vue {
  public mounted() {
    const ctx: HTMLCanvasElement = document.getElementById(
      "canvas"
    ) as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
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
.chart-1 {
  .chart {
    width: 800px;
    height: 400px;
  }
}
</style>


