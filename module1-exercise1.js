//AreaOfRectangle
// BEGIN 
// NUMERIC length, width, area
// DECLARE length, width
let length, width
// INPUT length, width
length = 5
width = 3
// COUNT area = length * width
let area = length * width
// OUTPUT area
console.log(`${area}`) //AreaOfRectangle = 15
// END

//PerimeterofRectangle
// BEGIN 
// NUMERIC length, width, perimeter
// DECLARE length, width
// INPUT length, width
length = 5
width = 3
// COUNT perimeter = (2 * length) + (2 * width)
let perimeter = (2 * length) + (2 * width)
// OUTPUT perimeter
console.log(`${perimeter}`) //PerimeterOfRectangle = 16
// END

//DiameterOfCircle
// BEGIN 
// NUMERIC radius, diameter
// DECLARE radius
let radius
// INPUT radius
radius = 5
// COUNT diameter = 2 * radius
let diameter = 2 * radius
// OUTPUT diameter
console.log(`${diameter}`) //DiameterOfCircle = 10
// END

//CircumferenceOfCircle (PerimeterOfCircle)
// BEGIN 
// NUMERIC radius, circumference, phi
// DECLARE radius, phi
// INPUT radius, phi
radius = 5
const PHI = Math.PI
// COUNT circumference = 2 * 3.14 * radius
let circumference = 2 * PHI * radius
// OUTPUT Circumference
console.log(`${circumference}`) //CircumferenceOfCircle = 31.4
// END

//AreaOfCircle 
// BEGIN 
// NUMERIC radius, area, phi
// DECLARE radius, phi
// INPUT radius
radius = 5
// COUNT area = 3.14 * radius**2
area = PHI * radius**2 // "let" is not declared 
// OUTPUT area
console.log(`${area}`) //AreaOfCircle = 78.5
// END

//UnknownAngleInTriangle
// BEGIN 
// NUMERIC angle1, angle2, unknownAngle
// DECLARE angle1, angle2
// INPUT angle1, angle2
const ANGLE1 = 80, ANGLE2 = 65
// COUNT unknownAngle = 180 - (ANGLE1 + ANGLE2)
let unknownAngle = 180 - (ANGLE1 + ANGLE2)
// OUTPUT unknownAngle
console.log(`${unknownAngle}`) //UnknownAngleInTriangle = 35
// END

//DateDifference
// BEGIN 
// DATE DATE1, DATE2; NUMERIC dateDifferenceInTime, dateDifference
// DECLARE DATE1, DATE2
const DATE1 = new Date("2022-01-20")
const DATE2 = new Date("2022-01-22")
// COUNT dateDifference 
// [notes] dateDifferenceInTime = DATE2 - DATE1
// [notes] dateDifference = dateDifferenceInTime / (1000 * 3600 * 24)
let dateDifference = new Date(DATE2.getTime() - DATE1.getTime())  
// OUTPUT dateDifference
console.log(`${dateDifference.getUTCDate()-1}`) 
// END

//ConvertDaysToYearsMonthsDays
// BEGIN
// DATE convDate1, convDate2; NUMERIC days1, days2
// DECLARE DAYS1, DAYS2
// INPUT DAYS1, DAYS2
const DAYS1 = 400, DAYS2 = 366
// DECLARE convDate1, convDate2
// COUNT convDate1, convDate2
const convDate1 = getFormatedStringFromDays(DAYS1), convDate2 = getFormatedStringFromDays(DAYS2)

// COUNT getFormatedStringFromDays
function getFormatedStringFromDays(numberOfDays) {
    // NUMERIC years, months, days
    // DECLARE years, months, days
    // COUNT years = Math.floor(numberOfDays / 365), months = Math.floor(numberOfDays % 365 / 30), 
            // days = Math.floor(numberOfDays % 365 % 30)
    let years = Math.floor(numberOfDays / 365);
    let months = Math.floor(numberOfDays % 365 / 30);
    let days = Math.floor(numberOfDays % 365 % 30);
    // STRING yearsDisplay, monthsDisplay, daysDisplay
    // DECLARE yearsDisplay, monthsDisplay, daysDisplay
    // INPUT yearsDisplay, monthsDisplay, daysDisplay
    let yearsDisplay = years > 0 ? years + (years == 1 ? " year, " : " years, ") : "0 year, ";
    let monthsDisplay = months > 0 ? months + (months == 1 ? " month, " : " months, ") : "0 month, ";
    let daysDisplay = days > 0 ? days + (days == 1 ? " day" : " days") : "0 days";
    // SHOW yearsDisplay, monthsDisplay, daysDisplay
    return yearsDisplay + monthsDisplay + daysDisplay; 
}
// SHOW convDate1, convDate2
console.log(convDate1)
console.log(convDate2)

// [notes] console.log(getFormatedStringFromDays(400))
// [notes] console.log(getFormatedStringFromDays(366))


// Pseudocode Algorithm Flow
// INPUT
// PROCESS
// OUTPUT

