<template>
  <div class="chart-8">
    <!-- Main content -->
    <section class="content">
      <div class="row">
        <section class="col-lg-6">
          <el-container class="box">
            <el-container>
              <el-header height>
                <div class="row">
                  <section class="col-lg-6">Coaching Completed/Acknowledgeed Rate</section>
                  <section class="col-lg-6"></section>
                </div>
                <div class="row title">
                  <section class="col-lg-6">2019-04-1 to 2019-05-1</section>
                  <section class="col-lg-6">
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary">Completed</button>
                      <button type="button" class="btn btn-default">Acknowledgeed</button>
                    </div>
                  </section>
                </div>
              </el-header>
              <el-main height>
                <el-table
                  :data="tableData"
                  style="width: 100%"
                  border
                  header-row-class-name="table-header"
                >
                  <el-table-column prop="no" label="No." width="180"></el-table-column>
                  <el-table-column prop="site" label="Site" width="180"></el-table-column>
                  <el-table-column prop="rate" label="Rate"></el-table-column>
                </el-table>
              </el-main>
            </el-container>
          </el-container>
        </section>
        <section class="col-lg-6">
          <el-container class="box">
            <el-container>
              <el-header height>
                <div class="row">
                  <section class="col-lg-6">Coaching Completed Proportion</section>
                  <section class="col-lg-6"></section>
                </div>
                <div class="row title">
                  <section class="col-lg-6">2019-04-1 to 2019-05-1</section>
                </div>
              </el-header>
              <el-main height>
                <canvas id="canvas-8-1"></canvas>
              </el-main>
            </el-container>
          </el-container>
        </section>
      </div>
      <div class="row">
        <section class="col-lg-12">
          <el-container class="box">
            <el-container>
              <el-header height>
                <div class="row">
                  <section class="col-lg-6">Head Count</section>
                </div>
              </el-header>
              <el-main height>
                <div class="canvas-8-2">
                  <canvas id="canvas-8-2"></canvas>
                </div>
              </el-main>
            </el-container>
          </el-container>
        </section>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Chart, ChartConfiguration, ChartData } from "chart.js";

@Component
export default class extends Vue {
  private tableData = [
    {
      no: 1,
      site: "site1",
      rate: "80%"
    },
    {
      no: 2,
      site: "site2",
      rate: "80%"
    },
    {
      no: 3,
      site: "site3",
      rate: "80%"
    },
    {
      no: 4,
      site: "site4",
      rate: "80%"
    },
    {
      no: 4,
      site: "site4",
      rate: "80%"
    }
  ];

  private myChart1?: Chart;

  public randomScalingFactor() {
    return Math.round(Math.random() * 100);
  }

  public mounted() {
    this.drawChart1();
    this.drawChart2();
  }

  public drawChart1() {
    var config: ChartConfiguration = {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor()
            ],
            backgroundColor: ["#f00", "#0f0", "#00f"],
            label: "Dataset 1"
          }
        ],
        labels: ["Other", "Hight than 40%", "Lower than 10%"]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        legend: {
          position: "top"
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    };

    const ctx: HTMLCanvasElement = document.getElementById(
      "canvas-8-1"
    ) as HTMLCanvasElement;
    this.myChart1 = new Chart(ctx, config);
  }

  public drawChart2() {
    const ctx: HTMLCanvasElement = document.getElementById(
      "canvas-8-2"
    ) as HTMLCanvasElement;
    const chartData: ChartData = {
      labels: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "11",
        "22",
        "33",
        "44",
        "55",
        "66",
        "77"
      ],
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
            this.randomScalingFactor(),
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
            this.randomScalingFactor(),
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
            this.randomScalingFactor(),
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
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
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
.chart-8 {
  .box {
    height: 400px;
    .title {
      margin-top: 20px;
    }
    .table-header {
      background-color: #f00;
    }
  }
  .canvas-8-2 {
    height: 320px;
  }
}
</style>
