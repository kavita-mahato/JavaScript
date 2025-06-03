'use strict';

// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

/*
const calTempAmp = function(temps){
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number')
            continue;
        if(temps[i]<min)
            min = temps[i];
        if(temps[i]>max)
            max = temps[i];
    }
    // console.log(max,min);
    return max-min;
};
console.log(calTempAmp([3,7,4,34]));
console.log(calTempAmp(temperatures));
*/

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays
/*
const calTempAmp = function(temps1,temps2){
    const temps = temps1.concat(temps2);
    console.log(temps);
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number')
            continue;
        if(temps[i]<min)
            min = temps[i];
        if(temps[i]>max)
            max = temps[i];
    }
    console.log(max,min);
    return max-min;
};
const tempAmp = calTempAmp([3,5,1],[9,0,5]);
console.log(tempAmp);
*/

// Celcius to Kelvin
/*
const measureKelvin = function(){
    const measurement = {
        type:'temp',
        unit:'celsius',

        // (C) FIX
        value:Number(prompt('Degree celsius')),
    };
    console.log(measurement);

    //(B) FIND
    console.table(measurement);
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);
    const kelvin = measurement.value +273;
    return kelvin;
}

// (A) IDENTIFY
console.log(measureKelvin());
*/

// USING a Debugger
const calTempAmpBug = function(temps1,temps2){
    const temps = temps1.concat(temps2);
    console.log(temps);

    // (B) FIND
    let max = 0;
    let min = 0;
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number')
            continue;
        debugger;
        if(curTemp<min)
            min = temps[i];
        if(curTemp>max)
            max = temps[i];
    }
    console.log(max,min);
    return max-min;
};
const tempAmpBug = calTempAmpBug([3,5,1],[9,4,5]);

// (A) IDENTIFY
console.log(tempAmpBug);