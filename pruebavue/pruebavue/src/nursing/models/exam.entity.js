export class Exam {
    constructor(id, patientId, examinerId, examDate,orientationScore,registrationScore,attentionAndCalculationScore,recallScore,languageScore) {
        this.id = id;
        this.patientId = patientId;
        this.examinerId = examinerId;
        this.examDate = examDate;
        this.orientationScore = orientationScore;
        this.registrationScore = registrationScore;
        this.attentionAndCalculationScore = attentionAndCalculationScore;
        this.recallScore = recallScore;
        this.languageScore = languageScore;
    }
}