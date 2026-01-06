<script>
  import {PatientService} from "@/nursing/services/patient.service.js";
  import {ExaminerService} from "@/nursing/services/examiner.service.js";
  import {onMounted, ref} from "vue";
  import {Patient} from "@/nursing/models/patient.entity.js";
  import {Exam} from "@/nursing/models/exam.entity.js";
  import {Examiner} from "@/nursing/models/examiner.entity.js";

  export default {
    props: {
      exam: {
        type: Exam,
        required: true
      }
    },
    setup(props) {
      const patient = ref({});
      const examiner = ref({});

      const getPatient = async () => {
        const patientService = new PatientService();
        const response = await patientService.getById(props.exam.patientId);
        patient.value = new Patient(
            response.data.id,
            response.data.firstName,
            response.data.lastName,
            response.data.photoUrl,
            response.data.birthDate
        );
      };

      const getExaminer = async () => {
        const examinerService = new ExaminerService();
        const response = await examinerService.getById(props.exam.examinerId);
        examiner.value = new Examiner(
            response.data.id,
            response.data.firstName,
            response.data.lastName,
            response.data.nationalProviderIdentifier
        );
      };

      onMounted(() => {
        getPatient();
        getExaminer();
      });

      return {
        patient,
        examiner
      };
    }
  };
</script>

<template>
  <pv-card class="card">
    <template #header>
      <img :src="patient.photoUrl" :alt="'${Patient.firstName} Image'" />
    </template>

    <template #content>
      <h3>Name: {{patient.firstName + " " + patient.lastName}}</h3>
      <p><b> Born date: </b>{{patient.birthDate}}</p>
      <p><b>Exam date: </b>{{exam.examDate}}</p>
      <p><b>Examiner name: </b>{{patient.firstName + " " + patient.lastName}}</p>
      <p><b>Examiner national provider identifier: </b>{{examiner.nationalProviderIdentifier}}</p>
      <p><b>Total score:</b> {{exam.orientationScore}}</p>
    </template>
  </pv-card>
</template>

<style scoped>
.card{
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  text-align: center;
  background-color: #252525;
  color:white;
}
</style>