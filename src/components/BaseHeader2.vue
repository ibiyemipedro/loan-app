<template>
  <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
    <div class="row">
      <div class="col-xl-3 col-lg-6">
        <stats-card
          title="Total Mandates"
          type="gradient-red"
          sub-title="2,897"
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
          title="Total Transactions"
          type="gradient-orange"
          sub-title="356"
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
          title="Debit Instructions"
          type="gradient-green"
          sub-title="24"
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
          sub-title="9.5%"
          icon="ni ni-chart-bar-32"
          class="mb-4 mb-xl-0"
        >
          <template v-slot:footer>
            <span class="text-success mr-2">
              <i class="fa fa-arrow-up"></i> 14.8%
            </span>
            <span class="text-nowrap">Since last month</span>
          </template>
        </stats-card>
      </div>
    </div>
  </base-header>
</template>
<script>
export default {};
</script>
