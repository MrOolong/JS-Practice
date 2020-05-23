const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 8;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 8
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 9;
      break;
    default:
    return "No date found";   
  }
};

const getActualSleepHours = () => {
let sleepSum = getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");

return sleepSum;
};

const getIdealSleepHours = () => {
  const idealHours = 8;

  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  let underHours = idealSleepHours - actualSleepHours;
  let overHours = actualSleepHours - idealSleepHours;

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${overHours} hour(s) more sleep than you needed.`);
    }
    else {
      console.log(`You should get some rest. You had ${underHours} hour(s) less sleep than you needed this week.`);
  }
};

calculateSleepDebt();


