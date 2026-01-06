<script>

import ExamCard from "@/nursing/components/exam-card.vue";
import {ExamService} from "@/nursing/services/exam.service.js";

export default {
  components: {
    ExamCard
  },
  data() {
    return {
      exams: []
    };
  },
  created() {
    this.examService = new ExamService();
    this.getExams();
  },
  methods: {
    async getExams() {
      const response = await this.examService.getAll();
      this.exams = response.data;
      console.log(exams);
    }
  }
}

</script>

<template>
  <div class="cards">
    <template v-for="exam in exams" :key="exam.id">
      <exam-card :exam="exam" />
    </template>
  </div>
</template>

<style scoped>
.cards{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  max-width:1200px;
  justify-content: center;
  margin:auto;
}
</style>