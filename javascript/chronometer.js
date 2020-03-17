class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // //bonus 
    // this.currentTimeMil = 0;
    // this.intervalIdMil = 0;
  }

  startClick(callback) {
   this.intervalId = setInterval( () => {
        this.currentTime += 1;
    }, 1000);
    // //bonus
    // this.intervalIdMil = setInterval(() => {
    //   this.currentTimeMil += 1;
    // }, 10);
  }

  getMinutes() {
    let minute = Math.floor(this.currentTime / 60)
    return minute
  }

  getSeconds() {
    let seconds = this.currentTime % 60
    return seconds
  }

  // //bonus
  // getMillSeconds(){
  //   if (this.currentTimeMil < 100){
  //     return this.currentTimeMil;
  //   } else if (this.currentTimeMil >= 100){
  //     let milSeconds = this.currentTimeMil % 100;
  //     return milSeconds;
  //   }    
  // }

  twoDigitsNumber(timer) {
    if (timer <= 9) {
        return `0${timer}`;
    } else {
      return `${timer}`
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
    // //bonus
    // clearInterval(this.intervalIdMil);
  }

  resetClick() {
    this.currentTime = 0;
    // //bonus
    // this.currentTimeMil = 0;
  }

  splitClick() {
    let splitMin = this.twoDigitsNumber(this.getMinutes())
    let splitSec = this.twoDigitsNumber(this.getSeconds())
    return `${splitMin}:${splitSec}`
    // //bonus
    let splitMillSeconds = this.twoDigitsNumber(this.getMillSeconds());
    // return `${splitMin}:${splitSec}:${splitMillSeconds}`
  }
}
