<template>
  <div class="chart-2">
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
            <i class="fa fa-dashboard"></i> Chart 2
          </a>
        </li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row chart">
        <section class="col-lg-6">
          <canvas id="canvas"></canvas>
        </section>
        <section class="col-lg-6">
          <div class="control-panel">
            <a class="btn btn-block btn-social btn-bitbucket" @click="onRandom($event)">
              <i class="fa fa-bug"></i> 随机改变
            </a>
            <a class="btn btn-block btn-social btn-bitbucket" @click="onRefresh($event)">
              <i class="fa fa-list-ol"></i> 使用设定值刷新
            </a>
            <div class="row set-values" v-for="(item, index) in data" :key="index">
              <section class="col-lg-2">{{labels[index]}}</section>
              <section class="col-lg-10">
                <input v-model="data[index]">
              </section>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Chart from "chart.js";

@Component
export default class extends Vue {
  private labels: string[] = [
    "2014年",
    "2015年",
    "2016年",
    "2017年",
    "2018年",
    "2019年"
  ];
  private data: number[] = [12, 19, 3, 5, 2, 3];
  private myChart?: Chart;

  public randomScalingFactor(): number {
    return Math.round(Math.random() * 100);
  }

  public onRandom(event: any) {
    if (event) {
      event.preventDefault();
    }
    if (this.myChart) {
      for (var i = 0; i < 6; i++) {
        this.data[i] = this.randomScalingFactor();
      }
      this.myChart.update();
    }
  }

  public onRefresh(){
    if (event) {
      event.preventDefault();
    }
    if (this.myChart) {
      this.myChart.update();
    }
  }

  public mounted() {
    const ctx: HTMLCanvasElement = document.getElementById(
      "canvas"
    ) as HTMLCanvasElement;
    this.myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: this.labels,
        datasets: [
          {
            label: "# of Votes",
            data: this.data,
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
.chart-2 {
  .chart {
    width: 1200px;
    height: 400px;
    .control-panel {
      margin-top: 20px;
    }
    .set-values {
      margin-top: 10px;
    }
  }
}
</style>


