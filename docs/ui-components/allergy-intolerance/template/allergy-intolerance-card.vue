<template>
    <div>
      <allergy-intolerance-card :data="fhirJson" :fields="fields" />
    </div>
  </template>
  
  <script>

import { AllergyIntoleranceCard } from "fire-starters";

import AllergyIntoleranceCardFHIR from "../json/allergy-intolerance-example.json";
  export default {
    components: {
      AllergyIntoleranceCard,
    },
    data() {
      return {
        fhirJson:AllergyIntoleranceCardFHIR ,
        fields: {
          verificationStatus: {
            display: false,
          },
          clinicalStatus: {
            value: (data) =>
              String(data?.clinicalStatus?.coding?.[0]?.code).toUpperCase(),
          },
        },
      };
    },
  };
  </script>
  