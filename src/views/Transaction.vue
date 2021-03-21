<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total traffic"
            type="gradient-red"
            sub-title="350,897"
            icon="ni ni-active-40"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i> 3.48%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total traffic"
            type="gradient-orange"
            sub-title="2,356"
            icon="ni ni-chart-pie-35"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i> 12.18%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Sales"
            type="gradient-green"
            sub-title="924"
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-danger mr-2">
                <i class="fa fa-arrow-down"></i> 5.72%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Performance"
            type="gradient-info"
            sub-title="49,65%"
            icon="ni ni-chart-bar-32"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i> 54.8%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <!--Charts-->
      <div class="row">
        <div class="col-xl-8 mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <h4>CREATE MANDATE</h4>
                <div class="row">
                  <div class="col-2">
                    <i class="ni ni-air-baloon ni-3x"></i>
                  </div>
                  <div class="col-10">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae eum aliquid corrupti dolorem, cupiditate quibusdam.
                  </div>
                </div>
                <base-button type="default" class="mt-4">
                  Create Direct Debit
                </base-button>
              </div>
              <div class="col-xs-12 col-md-6">
                <h4>DEBIT INSTRUCTION</h4>
                <div class="row">
                  <div class="col-2">
                    <i class="ni ni-air-baloon ni-3x"></i>
                  </div>
                  <div class="col-10">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae eum aliquid corrupti dolorem, cupiditate quibusdam.
                  </div>
                </div>
                <base-button type="default" class="mt-4">
                  Set Debit Instruction
                </base-button>
              </div>
            </div>
          </card>
        </div>

        <div class="col-xl-4">
          <card header-classes="bg-transparent">
            <template v-slot:header>
              <div class="row align-items-center">
                <div class="col"></div>
              </div>
            </template>
            <div class="chart-area">
              <canvas :height="350"></canvas>
            </div>
          </card>
        </div>
      </div>
      <!-- End charts-->
    </div>
  </div>
</template>
<script>
// Charts

export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
