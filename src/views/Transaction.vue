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
                        <th>Date Created</th>
                        <th>Mandate ID</th>
                        <th>Action</th>
                      </template>

                      <template v-slot:default="row">
                        <th scope="row">
                          <div class="media align-items-center">
                            <div class="d-flex align-items-center">
                              <span class="completion mr-2"
                                >{{ row.item.requestId.slice(0, 7) }} ...</span
                              >
                              <div></div>
                            </div>
                          </div>
                        </th>
                        <td class="budget">₦ {{ row.item.amount }}</td>
                        <td>
                          <div class="d-flex align-items-center">
                            <span class="completion mr-2">
                              {{ row.item.createdAt }}</span
                            >
                            <div></div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex align-items-center">
                            <span class="completion mr-2">{{
                              row.item.mandateId
                            }}</span>
                            <div></div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex align-items-center">
                            <span class="completion mr-2">{{
                              row.item.action
                            }}</span>
                            <div></div>
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
  "4872539a8cdcc91534f4f118281db5cac0f171fe4c59d046b2eb0fbaf3d59d150d780e0b329e90cdcfd55792ac513490";
export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  components: {
    BaseHeader2,
  },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    async getTransactions() {
      try {
        let headers = {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        };
        const response = await axios.get(`${baseUrl}/transactions`, {
          headers,
        });
        this.toast.info("get transaction success", {
          timeout: 2000,
        });
        console.log("get transaction  response", response);
        this.tableData = response.data.data;
      } catch (error) {
        console.log("get transaction  error", error);
      }
    },
  },
  mounted() {
    this.getTransactions();
  },
};
</script>
