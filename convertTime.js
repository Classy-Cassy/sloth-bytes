function convertTime(string){
    let components = string.split(" ");
    let time = components[0].split(":");
    let hours = time[0];
    let mins = time[1];

    if(components.length == 2){
        if(components[1] == "am"){
            if(hours == "12"){
                return "0:00";
            }
            return hours + ":" + mins;
        }
        else{
            hours = Number(hours) + 12;
            hours = String(hours);
            return hours + ":" + mins 
        }
    }
    else{
        hours = Number(hours);
        if(hours > 12){
            hours -= 12;
            hours = String(hours);
            return hours + ":" + mins + " pm"
        }
        else{
            if(hours == 0){
                hours = String(hours);
                return "12:00 am"
            }
            hours = String(hours)
            return hours + ":" + mins + " am"
        }
    }
}

console.log(convertTime("12:00 am")) //0:00
console.log(convertTime("6:20 pm")) //18:20
console.log(convertTime("21:00")) //9:00 pm
console.log(convertTime("5:05")) // 5:05 am

