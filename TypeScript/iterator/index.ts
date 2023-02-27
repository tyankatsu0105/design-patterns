export {};
class RadioStation {
  constructor(private frequency: number) {}

  getFrequency() {
    return this.frequency;
  }
}

class StationList {
  constructor(public stations: Map<number, RadioStation> = new Map()) {}

  addStation(station: RadioStation) {
    this.stations.set(station.getFrequency(), station);
  }

  removeStation(toRemove: RadioStation) {
    const target = toRemove.getFrequency();

    if (!this.stations.has(target)) {
      console.error(`Station ${target} not found`);
      return;
    }

    this.stations.delete(toRemove.getFrequency());
  }
}

const stationList = new StationList();

stationList.addStation(new RadioStation(89));
stationList.addStation(new RadioStation(101));
stationList.addStation(new RadioStation(102));
stationList.addStation(new RadioStation(103.2));

console.log("start");
stationList.stations.forEach((station) => console.log(station.getFrequency()));
console.log("end");

stationList.removeStation(new RadioStation(89));

console.log("start");
stationList.stations.forEach((station) => console.log(station.getFrequency()));
console.log("end");
