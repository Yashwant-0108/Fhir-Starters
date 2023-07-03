<template>
    <div>
          <patient-table :data="fhirJson"></patient-table>
    </div>
  </template>
  
  <script>
  import { PatientTable } from "fire-starters";
  
  import PatientFHIRJson from "../json/patient-table-example.json";
  
  export default {
    components: {
      PatientTable,
    },
    data() {
      return {
        fhirJson: PatientFHIRJson,
      };
    },
  };
  </script>
  
  <style>
  
  </style>