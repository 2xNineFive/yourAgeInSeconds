// let age = window.prompt("Enter your age?");
//     var secsInAMin = 60;
//     var minsInAHour = 60;
//     var secsInAHour = secsInAMin * minsInAHour;

//     var hoursInADay = 24;
//     var secsInADay = secsInAHour * hoursInADay;

//     var daysInAYear = 365;
//     var secsInAYear = secsInADay * daysInAYear;

//     var howManySecondsOld = secsInAYear * age;

//     const formatted = howManySecondsOld.toLocaleString('en-US');

//     alert("You are more than " + formatted + " seconds old!");

function yourAgeInSeconds(yourAgeInYears) {
    var secsInAMin = 60;
    var minsInAHour = 60;
    var secsInAHour = secsInAMin * minsInAHour;
       
    var hoursInADay = 24;
    var secsInADay = secsInAHour * hoursInADay;

    var daysInAYear = 365;
    var secsInAYear = secsInADay * daysInAYear;

    var howManySecondsOld = secsInAYear * yourAgeInYears;

    const formatted = howManySecondsOld.toLocaleString('en-US');

    console.log("You are " + formatted + " seconds old!");
    }

// let RosaleensAge = yourAgeInSeconds(15);
// RosaleensAge;

yourAgeInSeconds(18);

// console.log("Rosaleen you are " + RosaleensAge + " old!");