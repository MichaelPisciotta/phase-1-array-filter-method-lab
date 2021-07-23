// Code your solution here
function findMatching(drivers, string){
return drivers.filter(driver => driver.toUpperCase() === string.toUpperCase());
}






function fuzzyMatch(drivers, string){
    return drivers.filter(driver => driver.indexOf(string) === string.indexOf(string));
}








function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string);
}