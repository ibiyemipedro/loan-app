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
                    Set up permission to take payments from your customers bank
                    accounts. The safest and most trusted method of collecting
                    recurring payments.
                  </div>
                </div>
                <base-button
                  type="default"
                  class="mt-4"
                  @click="debitInstructionModal = true"
                >
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
          <base-button type="primary" @click="createDirDebitMandate"
            >Create Mandate</base-button
          >
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
          <base-button type="primary" @click="createDebitInstruction"
            >Create Instruction</base-button
          >
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

const baseUrl = "https://direct-debit.blusalt.net";

export default {
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
      bankCode: "",
      accountNumber: "",
      startDate: "",
      endDate: "",
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
          "Content-Type": "application/json",
        };

        const response = await axios.post(`${baseUrl}/mandate`, requestObject, {
          headers: headers,
        });
        console.log("createDirDebitMandate response", response);
      } catch (error) {
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
        console.log("createDebitInstruction response", response);
      } catch (error) {
        console.log("createDebitInstruction error", error);
      }
    },
  },
  mounted() {},
};
</script>
<style></style>
