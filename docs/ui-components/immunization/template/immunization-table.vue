<template>
    <div>
      <br />
      <v-row>
        <v-col md="3" v-for="Immunization in allImmunizationDetails" :key="Immunization.id">
          <v-card class="Immunization-card" style="background-color:lightblue;">
            <v-card-title class="text-center"><v-icon>mdi-account-circle</v-icon> </v-card-title>
            <v-card-title class="text-center">{{ Immunization.vaccinecode }}</v-card-title>
            <v-card-text>
            </v-card-text>
            <v-card-actions>
                  <v-btn dark @click="detailbox(Immunization.id)"><v-icon>mdi-plus</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-dialog v-model="detailDialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
          <v-card>
            <v-toolbar dark color="primary">
              <v-toolbar-title>Immunization Card</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn icon dark @click="detailDialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <ImmunizationDetailView />
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </template>
  
  <script>
  // import { ImmunizationBanner } from "fire-starters";
  import ImmunizationDetailView from "../components/ImmunizationCardDetail.vue";
  import { mapGetters } from "vuex";
  import ImmunizationFHIRJson from "../fixtures/immunization-example.json";
  import apiService from "@/services/apiService"
  
  export default {
    components: {
      // ImmunizationCard,
       ImmunizationDetailView
    },
    computed: {
      ...mapGetters({
        ImmunizationData: "getImmunizationData",
      }),
    },
    data() {
      return {
        fhirJson: ImmunizationFHIRJson,
        detailDialog: false,
        allImmunizationDetails: [],
      };
    },
    methods: {
      async detailbox(id){
        // this.detailDialog = true
        console.log(id,"id")
        let response = await apiService.getImmunizationDataById(id)
        console.log(response)
        this.$store.commit("SET_ImmunizationData", response.data)
        this.detailDialog = true
      },
      async setData() {
        this.$store.commit("SET_ImmunizationData", ImmunizationFHIRJson);
      },
      async gotoDetailPage() {
        this.detailDialog = true
      },
      async getallImmunizationDetails() {
        let res = await apiService.getImmunization()
        let responce = res.data.entry
        console.log(res,"res")
        console.log("responce", responce)
        for(let data in responce){
          // console.log(data, data)
          let json = {
            "id": responce[data].resource.id,
            "vaccinecode":responce[data].resource.vaccineCode.text,
            "status": responce[data].resource.status,
            "occurrenceDateTime": responce[data].resource.occurrenceDateTime,
          }
          this.allImmunizationDetails.push(json)
        }
         console.log("allImmunizationDetails", this.allImmunizationDetails)
         this.$store.commit("SET_ImmunizationtableData", this.allImmunizationDetails);
      },
      
    },
    mounted() {
      // this.setData()
      this.getallImmunizationDetails()
    }
  };
  </script>
  
  <style>
  
  </style>