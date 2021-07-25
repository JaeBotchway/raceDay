let raceNumber = Math.floor(Math.random() * 1000);
let runnerRegisteredEarly = true;
let runnerAge = 18;
if (runnerAge > 18 && runnerRegisteredEarly){
  raceNumber += 1000;
console.log (`raceNumber ${raceNumber} will race at 9:30am`)
}
else if (runnerAge > 18 && !runnerRegisteredEarly){
  console.log (`raceNumber ${raceNumber} will race at 11:00am`)
}
else if (runnerAge < 18){
  console.log(`raceNumber ${raceNumber} will race at 12:30pm`)
}
else{
  console.log(`raceNumber ${raceNumber} see registration desk`)
}