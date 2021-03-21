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
              <div class="col-xs-12">
                <h4>TRANSACTIONS HISTORY</h4>
                <div class="row">
                  <div class="col-12">
                    History of all transactions on your account
                  </div>
                  <div class="col-12 mt-3">
                    <base-table
                      class="table align-items-center table-flush"
                      :class="type === 'dark' ? 'table-dark' : ''"
                      :thead-classes="
                        type === 'dark' ? 'thead-dark' : 'thead-light'
                      "
                      tbody-classes="list"
                      :data="tableData"
                    >
                      <template v-slot:columns>
                        <th>Project</th>
                        <th>Budget</th>
                        <th>Status</th>
                        <th>Users</th>
                        <th>Completion</th>
                      </template>

                      <template v-slot:default="row">
                        <th scope="row">
                          <div class="media align-items-center">
                            <a href="#" class="avatar rounded-circle mr-3">
                              <img
                                alt="Image placeholder"
                                :src="row.item.img"
                              />
                            </a>
                            <div class="media-body">
                              <span class="name mb-0 text-sm">{{
                                row.item.title
                              }}</span>
                            </div>
                          </div>
                        </th>
                        <td class="budget">
                          {{ row.item.budget }}
                        </td>
                        <td>
                          <badge
                            class="badge-dot mr-4"
                            :type="row.item.statusType"
                          >
                            <i :class="`bg-${row.item.statusType}`"></i>
                            <span class="status">{{ row.item.status }}</span>
                          </badge>
                        </td>
                        <td>
                          <div class="avatar-group">
                            <a
                              href="#"
                              class="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Ryan Tompson"
                            >
                              <img
                                alt="Image placeholder"
                                src="img/theme/team-1-800x800.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              class="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Romina Hadid"
                            >
                              <img
                                alt="Image placeholder"
                                src="img/theme/team-2-800x800.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              class="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Alexander Smith"
                            >
                              <img
                                alt="Image placeholder"
                                src="img/theme/team-3-800x800.jpg"
                              />
                            </a>
                            <a
                              href="#"
                              class="avatar avatar-sm rounded-circle"
                              data-toggle="tooltip"
                              data-original-title="Jessica Doe"
                            >
                              <img
                                alt="Image placeholder"
                                src="img/theme/team-4-800x800.jpg"
                              />
                            </a>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex align-items-center">
                            <span class="completion mr-2"
                              >{{ row.item.completion }}%</span
                            >
                            <div>
                              <base-progress
                                :type="row.item.statusType"
                                :show-percentage="false"
                                class="pt-0"
                                :value="row.item.completion"
                              />
                            </div>
                          </div>
                        </td>
                      </template>
                    </base-table>
                  </div>
                </div>
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
