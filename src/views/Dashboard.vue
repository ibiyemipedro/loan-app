<template>
  <div>
    <BaseHeader2 />
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
                    <i class="ni ni-money-coins ni-3x"></i>
                  </div>
                  <div class="col-10">
                    Set up permission to take payments from your customers bank
                    accounts. The safest and most trusted method of collecting
                    recurring payments.
                  </div>
                </div>
                <base-button
                  type="default"
                  class="mt-4"
                  @click="mandateModal = true"
                >
                  Create Direct Debit Mandate
                </base-button>
              </div>
              <div class="col-xs-12 col-md-6">
                <h4>DEBIT INSTRUCTION</h4>
                <div class="row">
                  <div class="col-2">
                    <i class="ni ni-credit-card ni-3x"></i>
                  </div>
                  <div class="col-10">
                    Add instructions on a mandate to take payments from your
                    customers bank accounts. The safest and most trusted method
                    of collecting recurring payments.
                  </div>
                </div>
                <base-button
                  type="default"
                  class="mt-4"
                  @click="debitInstructionModal = true"
                >
                  Send Debit Instruction
                </base-button>
              </div>
            </div>
          </card>
        </div>

        <div class="col-xl-4">
          <card header-classes="bg-transparent">
            <template v-slot:header>
              <div class="row align-items-center">
                <div class="col">
                  <h6>RECENT ACTIVITIES</h6>
                </div>
              </div>
            </template>
            <div class="chart-area">
              <canvas :height="350" :id="ordersChartID"></canvas>
            </div>
          </card>
        </div>
      </div>
      <!-- End charts-->
      <!-- Modals -->
      <modal v-model:show="mandateModal">
        <template v-slot:header>
          <h4 class="modal-title" id="modal-title-default">
            CREATE MANDATE SET-UP
          </h4>
        </template>

        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <h6>Name</h6>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Fullname"
                v-model="fullName"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <h6>E-mail</h6>
              <input
                type="text"
                class="form-control"
                placeholder="name@example.com"
                v-model="email"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <h6>Phone Number</h6>
              <!-- <input type="text" class="form-control" /> -->
              <input
                type="text"
                class="form-control"
                placeholder="2348000000"
                v-model="phoneNumber"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <h6>Amount</h6>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Amount"
                v-model="amount"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <h6>Max Debit</h6>
              <input
                type="text"
                class="form-control"
                placeholder="Enter maximum debits"
                v-model="maxDebit"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <h6>Bank Code</h6>
              <input
                type="text"
                class="form-control"
                placeholder="044"
                v-model="bankCode"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <h6>Account Number</h6>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Account Number"
                v-model="accountNumber"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <h6>Start Date</h6>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Date"
                v-model="startDate"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <h6>End Date</h6>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Date"
                v-model="endDate"
              />
            </div>
          </div>
        </div>

        <template v-slot:footer>
          <button class="btn btn-default" @click="createDirDebitMandate">
            Create Mandate
          </button>
          <base-button type="link" class="ml-auto" @click="mandateModal = false"
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
        <!-- <input type="text" class="form-control" />  -->
        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <h6>Mandate ID</h6>

              <input
                type="text"
                class="form-control"
                placeholder="Enter Madate ID"
                v-model="mandateID"
              />
            </div>
          </div>
          <div class="col-6">
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
          <base-button
            type="link"
            class="ml-auto"
            @click="debitInstructionModal = false"
            >Close
          </base-button>
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
      mandateModal: false,
      debitInstructionModal: false,
      // set up direct debit mandate
      fullName: "",
      email: "",
      phoneNumber: "",
      amount: "",
      maxDebit: "",
      bankCode: "057",
      accountNumber: "0012618858",
      startDate: "28/04/2021",
      endDate: "28/08/2021",
      // set up direct instruction
      mandateID: "",
      fundingBankCode: "",
      fundingAmount: "",
      fundingAccount: "",
    };
  },
  methods: {
    async createDirDebitMandate() {
      try {
        let requestObject = {
          name: this.fullName,
          email: this.email,
          phone: this.phoneNumber,
          amount: this.amount,
          bankCode: this.bankCode,
          bankAccount: this.accountNumber,
          maxDebits: this.maxDebit,
          startDate: this.startDate,
          endDate: this.endDate,
        };
        let headers = {
          "x-api-key": apiKey,
        };
        const response = await axios.post(`${baseUrl}/mandate`, requestObject, {
          headers,
        });
        this.mandateModal = false;
        this.toast.info("Create mandate success", {
          timeout: 2000,
        });

        console.log("createDirDebitMandate response", response);
      } catch (error) {
        this.toast.error("Could not create mandate", {
          timeout: 2000,
        });
        this.toast.info(error.message, {
          timeout: 2000,
        });
        console.log("createDirDebitMandate error", error);
      }
    },
    async createDebitInstruction() {
      try {
        let requestObject = {
          mandateId: this.mandateID,
          amount: this.fundingAmount,
          fundingAccount: this.fundingAccount,
          fundingBankCode: this.fundingBankCode,
        };
        const response = await axios.post(
          `${baseUrl}/mandate/debit`,
          requestObject
        );
        this.toast.info(response.data.message, {
          timeout: 2000,
        });

        console.log("createDebitInstruction response", response);
      } catch (error) {
        this.toast.info(error.message, {
          timeout: 2000,
        });
        console.log("createDebitInstruction error", error);
      }
    },
  },
  mounted() {},
};
</script>
<style></style>
