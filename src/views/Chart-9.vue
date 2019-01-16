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
            <i class="fa fa-dashboard"></i> 年度培训统计情况
          </a>
        </li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="app-line">
        <div>
          <canvas id="line-chart-panel" width="400" height="100"></canvas>
        </div>
        <div>
          <button @click="update($event)">刷新</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import coachService from "@/services/coach.service";
import CoachInfo from "@/models/coach.model";
import Chart from "chart.js";
const jStat = require("jStat");

@Component
export default class extends Vue {
  private name: string = "Demo";
  private ctx: HTMLCanvasElement | undefined;
  private data = {
    labels: ["2014年", "2015年", "2016年"],
    passCount: [12, 19, 3],
    notPassCount: [3, 2, 0],
    target: [5, 5, 5],
    totalCount: []
  };
  private myChart: Chart | undefined;
  private maxYear = 2016;

  constructor() {
    super();
    this.data.totalCount = jStat([
      this.data.passCount,
      this.data.notPassCount
    ]).sum();
  }

  public async update(event: any) {
    if (event) {
      event.preventDefault();
    }
    const response = await coachService.getAll();
    if (response.status === 200) {
      const coashList: CoachInfo[] = response.data;
      this.data.labels = [];
      this.data.passCount = [];
      this.data.notPassCount = [];
      this.data.target = [];
      await coashList.forEach(async (coach: CoachInfo) => {
        this.data.labels.push(coach.year);
        this.data.passCount.push(coach.pass);
        this.data.notPassCount.push(coach.noPass);
        this.data.target.push(5);
      });

      this.data.totalCount = jStat([
        this.data.passCount,
        this.data.notPassCount
      ]).sum();

      this.updateChartWithData(this.data);
    }
  }

  public mounted(): void {
    this.ctx = document.getElementById("line-chart-panel") as HTMLCanvasElement;
    this.myChart = new Chart(this.ctx, {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "公司培训师培训次数指标",
            data: [],
            fill: false,
            pointBorderColor: "#333",
            borderColor: "#333",
            borderDash: [2, 2],
            lineTension: 0
          },
          {
            label: "总共培训次数",
            data: [],
            fill: false,
            pointBorderColor: "#0f0",
            borderColor: "#0f0",
            lineTension: 0
          },
          {
            label: "达标次数",
            data: [],
            fill: false,
            pointBorderColor: "#f00",
            borderColor: "#f00",
            lineTension: 0
          },
          {
            label: "没有达标次数",
            data: [],
            fill: false,
            pointBorderColor: "#00f",
            borderColor: "#00f",
            lineTension: 0
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

    this.updateChartWithData(this.data);
  }

  public updateChartWithData(newData: any, event?: any): void {
    if (event) {
      event.preventDefault();
    }
    this.data.totalCount = jStat([
      this.data.passCount,
      this.data.notPassCount
    ]).sum();

    // update chart
    if (this.myChart && this.myChart.data && this.myChart.data.datasets) {
      this.myChart.data.labels = newData.labels;
      this.myChart.data.datasets[0].data = newData.target;
      this.myChart.data.datasets[1].data = newData.totalCount;
      this.myChart.data.datasets[2].data = newData.passCount;
      this.myChart.data.datasets[3].data = newData.notPassCount;
      this.myChart.update();
    }
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


