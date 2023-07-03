<template>
  <div>
      <v-card>
          <v-tabs v-model="tab" bg-color="deep-purple-accent-4" centered stacked>
              <v-tab value="tab-1">
                  <v-icon>mdi-account-box</v-icon>
                  Card
              </v-tab>
              <v-tab value="tab-2">
                  <v-icon>mdi-table</v-icon>
                  Table
              </v-tab>
              <v-tab value="tab-3">
                  <v-icon>mdi-checkerboard</v-icon>
                  Banner
              </v-tab>
          </v-tabs>

          <v-window v-model="tab">
              <v-window-item key="1" value="tab-1">
                  <br/>
                  <v-card>
                      <patient-card :data="fhirJson" @errMessages="showErrorMessage"></patient-card>
                  </v-card>
                  <v-card>
                      <patient-card :data="fhirJson" >
                          <template #iconButtonTemplate>
                            <button
                              class="btn-close base-btn-close"
                              type="button"
                            />
                          </template>
                        </patient-card>
                  </v-card>
                  <v-card>
                      <patient-card :data="fhirJson">
                          <template #toolbarTemplate>
                               <button
                              class="btn btn-primary dropdown-toggle text-wrap base-btn-download"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Download
                                </button>
                                <ul class="dropdown-menu base-btn-download-dropdown">
                                  <li
                                    class="dropdown-item base-btn-download-dropdown-item base-btn-download-dropdown-item-json"
                                  >
                                    JSON
                                  </li>
                                  <li
                                    class="dropdown-item base-btn-download-dropdown-item base-btn-download-dropdown-item-xml"
                                  >
                                    XML
                                  </li>
                                  <li
                                    class="dropdown-item base-btn-download-dropdown-item base-btn-download-dropdown-item-pdf"
                                  >
                                    PDF
                                  </li>
                                </ul>
                          </template>
                        </patient-card>
                  </v-card>
                  <v-card>
                      <patient-card :data="fhirJson" :options="options" />
                  </v-card>
              </v-window-item>
              <v-window-item key="2" value="tab-2">
                  <br/>
                  <v-card>
                      <patient-table :data="fhirJson2" @errMessages="showErrorMessage" ></patient-table>
                  </v-card>
                  <v-card>
                    <patient-table :data="fhirJson2" :options="tableoptions"></patient-table>
                </v-card>
                <v-card>
                  <patient-table :data="fhirJson2" :fields="fields" title="Table"></patient-table>
              </v-card>
              </v-window-item>
              <v-window-item key="3" value="tab-3">
                  <br/>
                  <v-card>
                      <patient-banner :data="fhirJson"></patient-banner>
                  </v-card>
                  <v-card>
                    <patient-banner :data="fhirJson">
  <template #iconButtonTemplate   >
    <button
      class="btn-close base-btn-close"
      type="button"
    />
  </template>
</patient-banner>
                </v-card>
                <v-card>
                  <patient-banner :data="fhirJson">
<template #toolbarTemplate>
     <button
    class="btn btn-primary dropdown-toggle text-wrap base-btn-download"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Download
      </button>
      <ul class="dropdown-menu base-btn-download-dropdown">
        <li
          class="dropdown-item base-btn-download-dropdown-item base-btn-download-dropdown-item-json"
        >
          JSON
        </li>
        <li
          class="dropdown-item base-btn-download-dropdown-item base-btn-download-dropdown-item-xml"
        >
          XML
        </li>
        <li
          class="dropdown-item base-btn-download-dropdown-item base-btn-download-dropdown-item-pdf"
        >
          PDF
        </li>
      </ul>
</template>
</patient-banner>
              </v-card>
              <v-card>
                <patient-banner :data="fhirJson">
                  <template #customHtmlCellContentAreaTemplate>
                    <strong>Custom HTML Cell Content</strong>
                  </template>
                
                  <template #customHtmlContentAreaTemplate >
                    <h5>Custom HTML Content</h5>
                    <a href="https://www.hl7.org/fhir/us/core/">
                      FHIR US Core Implementation Guideline
                    </a>
                  </template>
                </patient-banner>
            </v-card>
            <v-card>
              <patient-banner :data="fhirJson" :options="banneroptions"></patient-banner>
          </v-card>
          <v-card>
            <patient-banner :data="fhirJson"  @errMessages="showErrorMessage"></patient-banner>
        </v-card>
              </v-window-item>
          </v-window>
      </v-card>
  </div>
</template>
<script>
import { PatientCard } from "fhir-starters";
import { PatientTable } from "fhir-starters";
import PatientFHIRJson from "../json/patient-example.json"

// import PatientFHIRJson from "../fixtures/patient-table-example.json";
import { PatientBanner } from "fhir-starters";
// import PatientFHIRJsonPatientBanner from "../fixtures/patient-example.json";

export default {
  nam: "PatientDetailView",
  components: {
      PatientCard,
      PatientTable,
      PatientBanner
  },
  data() {
      return {
          fhirJson: {},
          fhirJson2: {},
          PatientFHIRJson : PatientFHIRJson,
          tab: null,
          options: {
      iconButton: `<div> Custom Icon Button </div>`,
      header: (data) => data.birthDate,
      line1: "Custom Line1",
      hasExpandableSection: false,
    },
      tableoptions:{
        search: false,
      pagination: true,
      paginationRowOptions: [5, 10, 20, 50],
      paginationRow: 20,
      sorting: false,
      },
      fields: [
      {
        title: "Patient ID",
        // Define how the value is rendered
        value: (data) => data.identifier[0].value,
        // Disable the sorting function for this field
        sortable: false,
      },
      {
        title: "Patient Name",
        value: (data) => data.name[0].given.join(" "),
        // Exclude this field in the searching operation
        searchable: false,
      },
      {
        title: "Patient Birthdate",
        // Render the field based on config file
        field: "birthDate",
      },
    ],
    banneroptions: {
      iconButton: `<button> Custom Icon Button </button>`,
      heading1: (data) => data.birthDate,
      heading2: "Custom Heading 2",
      customHtml: `Custom HTML Content`,
      customHtmlCell: "Custom HTML Cell",
    },
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
  },
  mounted() {
      this.fhirJson = this.PatientFHIRJson
      this.fhirJson2 = this.patienttableData
      console.log(this.fhirJson, "this.fhirJson")
  },
  methods: {
  showErrorMessage(value) {
    console.log(value);
  },
},
}
</script>