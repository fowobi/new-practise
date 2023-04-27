function doCalc (S, K) {
    let returnDay = "";
    let startingDay = 0;
    let fullDayCount = 0;
    let remainder = 0;
    if (S === "Mon") {
        startingDay = 1;
    } else if (S === "Tue") {
        startingDay = 2;
       } else if (S === "Wed") {
        startingDay = 3;
      } else if (S=== "Thu") {
        startingDay = 4;
       } else if (S === "Fri") {
        startingDay = 5;
       } else if (S === "Sat") {
        startingDay = 6;
       } else if (S === "Sun") {
        startingDay = 7;
    }
    fullDayCount = startingDay + K;  3 + 6
    remainder =  fullDayCount % 7;  2
    let daysArray = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    returnDay = daysArray[remainder-1]
    return returnDay;
    
}
