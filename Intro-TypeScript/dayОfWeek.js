function dayOfWeek(day) {
    var num = '';
    if (day === "Monday") {
        num = "1";
    }
    else if (day === "Tuesday") {
        num = "2";
    }
    else if (day === "Wednesday") {
        num = "3";
    }
    else if (day === "Thursday") {
        num = "4";
    }
    else if (day === "Friday") {
        num = "5";
    }
    else if (day === "Saturday") {
        num = "6";
    }
    else if (day === "Sunday") {
        num = "7";
    }
    else if (day === 'Invalid') {
        num = "error";
    }
    return num;
}
var day = 'Invalid';
var res = dayOfWeek(day);
console.log(res);
