<template>
  <div>
    <div class="banner bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border border-gray-300 rounded p-4 mb-4">
      <h1 class="text-4xl font-bold mb-2">{{ fhirJson.code.text }}</h1>
      <p class="text-gray-900">Clinical Status: <span class="font-bold">{{ fhirJson.clinicalStatus.coding[0].code }}</span></p>
      <p class="text-gray-900">Verification Status: <span class="font-bold">{{ fhirJson.verificationStatus.coding[0].code }}</span></p>
      <p class="text-gray-900">Type: <span class="font-bold">{{ fhirJson.type }}</span></p>
      <p class="text-gray-900">Category: <span class="font-bold">{{ fhirJson.category[0] }}</span></p>
      <p class="text-gray-900">Criticality: <span class="font-bold">{{ fhirJson.criticality }}</span></p>
      <p class="text-gray-900">Patient: <span class="font-bold">{{ fhirJson.patient.reference }}</span></p>
      <p class="text-gray-900">Recorded Date: <span class="font-bold">{{ fhirJson.recordedDate }}</span></p>
    </div>
  </div>
</template>



<script>
import { AllergyIntoleranceBanner } from "fire-starters";
import AllergyIntoleranceBannerFHIRJson from "../json/allergy-intolerance-banner.json";

export default {
  components: {
    AllergyIntoleranceBanner,
  },
  data() {
    return {
      fhirJson: AllergyIntoleranceBannerFHIRJson,
    };
  },
};
</script>

<style>
.banner {
  background-color: #f5f5f5;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
}
</style>
