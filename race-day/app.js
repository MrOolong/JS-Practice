let raceNumber = Math.floor(Math.random() * 1000);

let earlyReg = true;

let runnerAge = 19;

if (runnerAge > 18 && earlyReg === false) {
  raceNumber = raceNumber + 1000;
  //console.log(raceNumber);
}

if (runnerAge > 18 && earlyReg === false) {
  console.log(`Adults who registered early will race at 9:30 am. Your race numbers are ${raceNumber}`);
} else if (runnerAge > 18 && earlyReg != false) {
  console.log(`Adults who registered late will race at 11:00 am. Your race numbers are ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm (regardless of registration). Your race numbers are ${raceNumber}`);
} else {
  console.log("Please see the registration desk")
}


