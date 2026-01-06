export class HealthCheck {
  constructor(data) {
    this.id = data.id;
    this.treadmillId = data.treadmillId;
    this.year = data.year;
    this.month = data.month;
    this.day = data.day;
    this.hour = data.hour;
    this.minutes = data.minutes;
    this.seconds = data.seconds;
    this.volts = data.volts;
    this.watts = data.watts;
    this.hp = data.hp;
  }
}