<template>
    <div>
       <patient-card :data="fhirJson" :fields="fields"/>
    </div>
</template>
<script>
// import { patient-card } from "fire-starters";
import practionarJson from "../json/practioner.json"
import ImmunizationFHIRJson from "../json/immunization-example.json"
export default {
  name: "praction",
  components: {
    ImmunizationCard,
  },
  data() {
    return {
      practionarJson: practionarJson,
      fhirJson: ImmunizationFHIRJson,
    };
  },
  mounted(){
    console.log("practionarJson", ImmunizationFHIRJson)
  }
};
</script>