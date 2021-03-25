<template>
  <div>
    <BaseHeader2 />

    <div class="container-fluid mt--7">
      <!--Charts-->
      <div class="row">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <div class="row">
              <div class="col-xs-12">
                <h4>MANDATE HISTORIES</h4>
                <div class="row">
                  <div class="col-12">
                    History of all mandates activities on ypur account
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
                        <th>Mandate ID</th>
                        <th>Mandate Ref</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Actions</th>
                      </template>

                      <template v-slot:default="row">
                        <th scope="row">
                          <div class="media align-items-center">
                            <div class="media-body">
                              <span class="name mb-0 text-sm">{{
                                row.item.mandateId
                              }}</span>
                            </div>
                          </div>
                        </th>
                        <td class="budget">
                          {{ row.item.mandateReference.slice(0, 7) }} ..
                        </td>
                        <td class="budget">₦ {{ row.item.amount }}</td>

                        <td>
                          <badge class="badge-dot mr-4">
                            <span class="status">{{ row.item.status }}</span>
                          </badge>
                        </td>
                        <td>
                          <div class="">
                            <span class="name mb-0 text-sm">{{
                              row.item.startDate
                            }}</span>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex align-items-center">
                            <span class="completion mr-2">{{
                              row.item.endDate
                            }}</span>
                          </div>
                        </td>
                        <td>
                          <div class="row">
                            <span
                              class="completion mr-2 badge badge-default"
                              @click="
                                requestMandateOTP(
                                  row.item.mandateId,
                                  row.item.mandateReference
                                )
                              "
                            >
                              Request OTP
                            </span>
                            <br />
                            <span
                              class="completion mr-2 badge badge-primary"
                              @click="
                                startDebitInstructionModal(row.item.mandateId)
                              "
                            >
                              Send Debit Instruction
                            </span>
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
      </div>
      <!-- End charts-->
      <!-- Modal  -->
      <modal v-model:show="mandateOTPModal">
        <template v-slot:header>
          <h4 class="modal-title" id="modal-title-default">
            VERIFY MANDATE OTP
          </h4>
        </template>

        <div class="row" v-if="sentOTP">
          <div class="col-12">
            <div class="form-group">
              <h6>OTP</h6>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Madate OTP"
                v-model="otp"
              />
            </div>
          </div>

          <div class="col-12">
            <div class="form-group">
              <h6>Digits</h6>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your the last 4 digis of your Debit Card"
                v-model="digits"
              />
            </div>
          </div>
        </div>

        <div class="row justify-content-center" v-else>
          <h6>Loading...</h6>
        </div>

        <template v-slot:footer>
          <button class="btn btn-default" @click="verifyMandateOTP">
            Verify OTP
          </button>
          <base-button
            type="link"
            class="ml-auto"
            @click="mandateOTPModal = false"
            >Close
          </base-button>
        </template>
      </modal>
      <modal v-model:show="debitInstructionModal">
        <template v-slot:header>
          <h4 class="modal-title" id="modal-title-default">
            DEBIT INSTRUCTION SET-UP
          </h4>
        </template>
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <h6>Amount</h6>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Amount"
                v-model="fundingAmount"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <h6>Funding Bank Code</h6>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Bank Code"
                v-model="fundingBankCode"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <h6>Funding Account</h6>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Account"
                v-model="fundingAccount"
              />
            </div>
          </div>
        </div>

        <template v-slot:footer>
          <button class="btn btn-default" @click="createDebitInstruction">
            Create Instruction
          </button>
          <button
            type="link"
            class="ml-auto btn btn-secondary"
            @click="debitInstructionModal = false"
          >
            Close
          </button>
        </template>
      </modal>
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

const headers = {
  "x-api-key": apiKey,
};
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
      mandateOTPModal: false,
      debitInstructionModal: false,
      sentOTP: false,
      mandateId: "",
      transRef: "",
      otp: "1234",
      digits: "0441234567890",
      // set up direct instruction
      fundingBankCode: "",
      fundingAmount: "",
      fundingAccount: "",
    };
  },
  methods: {
    async getMandates() {
      try {
        const response = await axios.get(`${baseUrl}/mandate`, {
          headers,
        });
        this.toast.info("Fetch mandate success", {
          timeout: 2000,
        });
        console.log("Fetch mandate response", response);
        this.tableData = response.data.data;
      } catch (error) {
        console.log("Fetch mandate error", error);
      }
    },
    async requestMandateOTP(mandateId, mandateReference) {
      this.mandateId = mandateId;
      this.mandateOTPModal = true;
      try {
        const options = {
          method: "PUT",
          url: baseUrl + "/mandate/request/" + mandateReference,
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
        };
        const response = await axios.request(options);
        this.toast.info(response.data.message, {
          timeout: 2000,
        });
        this.transRef = response.data.data.remitaTransRef;
        console.log("requestMandateOTP response", response);
        this.sentOTP = true;
      } catch (error) {
        this.toast.info(error.message, {
          timeout: 2000,
        });
        console.log("requestMandateOTP error", error);
      }
    },
    async verifyMandateOTP() {
      try {
        const verifyObj = {
          otp: this.otp,
          digits: this.digits,
        };
        const options = {
          method: "PUT",
          url: baseUrl + "/mandate/verify?remitaTransRef=" + this.transRef,
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
          data: verifyObj,
        };
        const response = await axios.request(options);
        this.toast.info(response.data.message, {
          timeout: 2000,
        });
        this.sentOTP = false;
        this.mandateOTPModal = false;
        console.log("verifyMandateOTP response", response);
        location.reload();
      } catch (error) {
        this.toast.info(error.message, {
          timeout: 2000,
        });
        console.log("verifyMandateOTP error", error);
      }
    },
    async startDebitInstructionModal(mandateId) {
      this.mandateId = mandateId;
      this.debitInstructionModal = true;
    },
    async createDebitInstruction() {
      try {
        let requestObject = {
          mandateId: this.mandateId,
          amount: this.fundingAmount,
          fundingAccount: this.fundingAccount,
          fundingBankCode: this.fundingBankCode,
        };
        const options = {
          method: "POST",
          url: baseUrl + "/mandate/debit",
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
          data: requestObject,
        };
        const response = await axios.request(options);
        this.toast.info(response.data.message, {
          timeout: 2000,
        });
        this.debitInstructionModal = false;
        console.log("createDebitInstruction response", response);
      } catch (error) {
        this.toast.error(error.message, {
          timeout: 2000,
        });
        this.debitInstructionModal = false;
        console.log("createDebitInstruction error", error);
      }
    },
  },
  mounted() {
    this.getMandates();
  },
};
</script>
<style></style>
