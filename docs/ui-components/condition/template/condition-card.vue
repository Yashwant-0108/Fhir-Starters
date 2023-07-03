<!-- <template>
    <div>
        
      <ConditionCard :data="fhirJson" :fields="fields" />
    </div>
  </template>
  
  <script>

import { ConditionCard } from "fire-starters";

import ConditionCardFHIR from "../json/condition-example.json";
  export default {
    components: {
        ConditionCard,
    },
    data() {
      return {
        fhirJson:ConditionCardFHIR ,
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
   ====================== -->




   <template>
    <div>
      <h1>hhhhhhh</h1>
      <br />
      <v-row>
        <v-col md="3" v-for="patient in allPatientDetails" :key="patient.id">
          <v-card class="patient-card" style="background-color:lightblue;">
            <v-card-title class="text-center"><v-icon>mdi-account-circle</v-icon> </v-card-title>
            <v-card-title class="text-center">{{ patient.name }}</v-card-title>
            <v-card-actions>
                  <v-btn dark @click="detailbox(patient.id)"><v-icon>mdi-plus</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-dialog v-model="detailDialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
          <v-card>
            <v-toolbar dark color="primary">
              <v-toolbar-title>Patient Card</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn icon dark @click="detailDialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <PatientDetailView />
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </template>
  
  <script>
  // import { PatientCard } from "fire-starters";
  import { mapGetters } from "vuex";
  import PatientFHIRJson from "../json/condition-example.json";
  import PatientDetailView from "../components/patienCardDetail.vue";
  import apiService from "@/services/apiService"
  // import maleAvator from "../../public/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394"
  export default {
    components: {
      // PatientCard,
      PatientDetailView
    },
    computed: {
      ...mapGetters({
        patientData: "getPatientData",
      }),
    },
    data() {
      return {
        fhirJson: PatientFHIRJson,
        detailDialog: false,
        allPatientDetails: [],
      };
    },
    methods: {
      async detailbox(id){
        // this.detailDialog = true
        console.log(id,"id")
        let response = await apiService.getPatientDataById(id)
        console.log(response)
        this.$store.commit("SET_patientData", response.data)
        this.detailDialog = true
      },
      async setData() {
        this.$store.commit("SET_patientData", PatientFHIRJson);
      },
      async gotoDetailPage() {
        this.detailDialog = true
      },
      async getAllPatientDetails() {
        let responce = await apiService.getPatient()
        console.log("responce", responce)
        for(let data in responce){
          // console.log(data.resource, data.resource)
          let json = {
            "id": responce[data].resource.id,
            "gender" : responce[data].resource.gender,
            "name" : responce[data].resource.name && responce[data].resource.name.length > 0 ? responce[data].resource.name[0].given && responce[data].resource.name[0].given.length > 0 ? responce[data].resource.name[0].given[0] : null : null,
            "phone" : responce[data].resource?.telecom[0]?.value,
            "address" : responce[data].resource?.address[0]?.line[0],
            "DOB" : responce[data].resource.birthDate
          }
          this.allPatientDetails.push(json)
          
        }
        // console.log("res", data)
        this.$store.commit("SET_patienttableData", this.allPatientDetails);
      },
    },
    mounted() {
      // this.setData()
      this.getAllPatientDetails() 
    }
  };
  </script>
  
  <style>
  .dialog-bottom-transition-enter-active,
  .dialog-bottom-transition-leave-active {
    transition: transform .2s ease-in-out;
  }
  </style>