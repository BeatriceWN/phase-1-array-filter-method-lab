//returns drivers whose names match the query exactly and is case insensitive
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}
//returns drivers whose names start with the query string but not necessarily an exact match
function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}
//returns driver objects whose name matches the query exactly
function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
}
//drivers data
const drivers = [
    {name: "John", hometown: "Ruiru"},
    {name: "Mathew", hometown: "Thika"},
    {name: "Martha", hometown: "Kileleshwa"},
    {name: "Mark", hometown: "South B"},
    {name: "Jack", hometown: "Ngong"},
];
const driverNames = ["John", "Mathew", "Mark", "Martha", "Jack"]

//console log the functions
console.log(findMatching(driverNames, "john")); // ["John"]
console.log(fuzzyMatch(driverNames, "Ma")); // ["Mathew", "Martha", "Mark
console.log(matchName(drivers, "John")); // [{ name: "John", hometown: "Ruiru" }]