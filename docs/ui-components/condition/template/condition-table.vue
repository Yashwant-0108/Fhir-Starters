<template>
    <div>

        <Condition-Table :data="fhirJson"></Condition-Table>
    </div>
  </template>
  
  <script>
  import {ConditionTable} from "fire-starters";
  import ConditionFHIRJson from "../json/condition-table-example.json";
  
  export default {
    components: {
        ConditionTable,
    },
    data() {
      return {
        fhirJson: ConditionFHIRJson,
      };
    },
  };
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>
  