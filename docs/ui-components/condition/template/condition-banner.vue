<template>
    <div>
        
        <ConditionBanner :data="fhirJson"></ConditionBanner>
    </div>
  </template>
  
  
  
  <script>
  import { ConditionBanner } from "fire-starters";
  import ConditionBannerFHIRJson from "../json/condition-example.json";
  
  export default {
    components: {
        ConditionBanner,
    },
    data() {
      return {
        fhirJson: ConditionBannerFHIRJson,
      };
    },
  };
  </script>
  
  <style>
 
  </style>
  