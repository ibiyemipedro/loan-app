<template>
  <div>
    <BaseHeader2 />

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
                        <th>Tranx ID</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Mandate ID</th>
                        <th>Action</th>
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
import axios from "axios";
import BaseHeader2 from "../components/BaseHeader2";
import { useToast } from "vue-toastification";
const baseUrl = "https://direct-debit.blusalt.net";
const apiKey =
  "4e63b51a0f46ba7d6082d01e4655471351c131fe07ad54308296cb88bf350288e73c10d215821207026fef56f2794fb3";
export default {
  setup() {
    const toast = useToast();
    toast("I'm a toast!");
    toast.success("My toast content", {
      timeout: 2000,
    });
    return { toast };
  },
  components: {
    BaseHeader2,
  },
  data() {
    return {};
  },
  methods: {
    async getTransactions() {
      try {
        let headers = {
          "x-api-key": apiKey,
        };
        const response = await axios.get(`${baseUrl}/transactions`, {
          headers,
        });
        this.toast.info("Create mandate success", {
          timeout: 2000,
        });
        console.log("createDirDebitMandate response", response);
      } catch (error) {
        console.log("createDirDebitMandate error", error);
      }
    },
  },
  mounted() {},
};
</script>
