<template>
    <div>
      
        <MedicationRequestBanner :data="fhirJson"></MedicationRequestBanner>
    </div>
  </template>
  
  
  
  <script>
  import { MedicationRequestBanner } from "fire-starters";
  import MedicationRequestBannerFHIRJson from "../json/medication-request-example.json";
  
  export default {
    components: {
        MedicationRequestBanner,
    },
    data() {
      return {
        fhirJson: MedicationRequestBannerFHIRJson,
      };
    },
  };
  </script>
  
  <style>
 
  </style>