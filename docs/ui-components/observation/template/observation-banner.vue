<template>
    <div>
       
        <ObservationBanner :data="fhirJson"></ObservationBanner>
    </div>
  </template>
  
  
  
  <script>
  import { ObservationBanner } from "fire-starters";
  import ObservationBannerFHIRJson from "../json/observation-example.json";
  
  export default {
    components: {
        ObservationBanner,
    },
    data() {
      return {
        fhirJson: ObservationBannerFHIRJson,
      };
    },
  };
  </script>
  
  <style>
 
  </style>