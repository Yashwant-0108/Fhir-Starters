<!-- <template>
    <div>
        <v-card>
            <v-card>
                <practitioner-banner :data="fhirJson"></practitioner-banner>
            </v-card>
            <v-window v-model="tab">
                <v-window-item value="tab-3">
                    <br />
                    <v-card>
                        <practitioner-banner :data="fhirJson"></practitioner-banner>
                    </v-card>
                    <v-card>
                        <practitioner-banner :data="fhirJson">
                            <template #iconButtonTemplate>
                                <button class="btn-close base-btn-close" type="button" />
                            </template>
                        </practitioner-banner>
                    </v-card>
                    <v-card>
                        <practitioner-banner :data="fhirJson">
                            <template #toolbarTemplate>
                                <button class="btn btn-primary dropdown-toggle text-wrap base-btn-download" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Download
                                </button>
                                <ul class="dropdown-menu base-btn-download-dropdown">
                                    <li
                                        class="dropdown-item base-btn-download-dropdown-item base-btn-download-dropdown-item-json">
                                        JSON
                                    </li>
                                    <li
                                        class="dropdown-item base-btn-download-dropdown-item base-btn-download-dropdown-item-xml">
                                        XML
                                    </li>
                                    <li
                                        class="dropdown-item base-btn-download-dropdown-item base-btn-download-dropdown-item-pdf">
                                        PDF
                                    </li>
                                </ul>
                            </template>
                        </practitioner-banner>
                    </v-card>
                    <v-card>
                        <practitioner-banner :data="fhirJson">
                            <template #customHtmlCellContentAreaTemplate>
                                <strong>Custom HTML Cell Content</strong>
                            </template>

                            <template #customHtmlContentAreaTemplate>
                                <h5>Custom HTML Content</h5>
                                <a href="https://www.hl7.org/fhir/us/core/">
                                    FHIR US Core Implementation Guideline
                                </a>
                            </template>
                        </practitioner-banner>
                    </v-card>
                    <v-card>
                        <practitioner-banner :data="fhirJson" :options="banneroptions"></practitioner-banner>
                    </v-card>
                    <v-card>
                        <practitioner-banner :data="fhirJson" @errMessages="showErrorMessage"></practitioner-banner>
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
    },
    data() {
        return {
            fhirJson: {},
            PractitionerFHIRJson: PractitionerFHIRJson,
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
import { PractitionerBanner } from "fire-starters";

import PractitionerFHIRJson from "../json/practitioner-example.json";

export default {
  components: {
    PractitionerBanner,
  },
  data() {
    return {
      fhirJson: PractitionerFHIRJson,
    };
  },
};
</script>

<template>
    <div>
        <practitioner-banner :data="fhirJson"></practitioner-banner>
    </div>
</template>