<template>
    <div>
     
          <Allergy-Intolerance-Table :data="fhirJson"></Allergy-Intolerance-Table>
    </div>
  </template>
  
  <script>
  import { AllergyIntoleranceTable } from "fire-starters";
  
  import AllergyIntoleranceTableFHIRJson from "../json/allergy-intolerance-table-example.json";
  
  export default {
    components: {
        AllergyIntoleranceTable,
    },
    data() {
      return {
        fhirJson: AllergyIntoleranceTableFHIRJson,
      };
    },
  };
  </script>
  
  <style>
  
  </style>