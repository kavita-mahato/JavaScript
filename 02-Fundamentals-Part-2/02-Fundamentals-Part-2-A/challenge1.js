const avgscore = (a,b,c) => (a+b+c)/3;

// test 1
let avgDolphines = avgscore(44,23,71);
let avgKaolas = avgscore(65,54,49);
console.log(avgDolphines,avgKaolas);

const checkWinner = function(avgdolphines, avgkaolas){
    if (avgdolphines>=2*avgkaolas){
        console.log(`Dolphines win (${avgdolphines} vs. ${avgkaolas})`);
    }
    else if(avgkaolas>=2*avgdolphines){
        console.log(`Koalas win (${avgkaolas} vs. ${avgdolphines})`);        
    }
    else{
        console.log("No one wins")
    }
}

checkWinner(avgDolphines,avgKaolas);

// test 2
avgDolphines = avgscore(85,54,41);
avgKaolas = avgscore(23,34,27);
checkWinner(avgDolphines,avgKaolas);