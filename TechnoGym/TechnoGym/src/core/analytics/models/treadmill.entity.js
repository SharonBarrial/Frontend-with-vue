export class Treadmill {
  constructor(data) {
    this.id = data.id;
    this.serialNumber = data.serialNumber;
    this.centerId = data.centerId;
    this.healthChecks = data.healthChecks;
  }
}