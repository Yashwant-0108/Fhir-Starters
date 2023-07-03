<!-- <template>
    <div>
        <v-card>
            <v-tabs v-model="tab" bg-color="deep-purple-accent-4" centered stacked>
                <v-tab value="tab-1">
                    <v-icon>mdi-account-box</v-icon>
                    Card
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
                        <practitioner-card :data="fhirJson" @errMessages="showErrorMessage"></practitioner-card>
                    </v-card>
                    <v-card>
                        <practitioner-card :data="fhirJson" >
                            <template #iconButtonTemplate>
                              <button
                                class="btn-close base-btn-close"
                                type="button"
                              />
                            </template>
                          </practitioner-card>
                    </v-card>
                    <v-card>
                        <practitioner-card :data="fhirJson">
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
                          </practitioner-card>
                    </v-card>
                    <v-card>
                        <practitioner-card :data="fhirJson" :options="options" />
                    </v-card>
                </v-window-item>
                
            </v-window>
        </v-card>
    </div>
</template> -->
<!-- <script>
import { PractitionerCard } from "fire-starters";
import { PractitionerBanner } from "fire-starters";
import PractitionerFHIRJson from "../json/practitioner-example.json"

export default {
    nam: "PatientDetailView",
    components: {
        PractitionerCard,
        PractitionerBanner
        // PatientBanner
    },
    data() {
        return {
            fhirJson: {},
            PractitionerFHIRJson : PractitionerFHIRJson,
            tab: null,
            options: {
        iconButton: `<div> Custom Icon Button </div>`,
        header: (data) => data.birthDate,
        line1: "Custom Line1",
        hasExpandableSection: false,
      },
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
        this.fhirJson = this.PractitionerFHIRJson
    },
    methods: {
    showErrorMessage(value) {
      console.log(value);
    },
  },
}
</script> -->

<script>
import { PractitionerCard } from "fire-starters";

import PractitionerFHIRJson from "../json/practitioner-example.json";

export default {
  components: {
    PractitionerCard,
  },
  data() {
    return {
      fhirJson: PractitionerFHIRJson,
    };
  },
};
</script>

<template>
  <practitioner-card :data="fhirJson"></practitioner-card>
</template>
