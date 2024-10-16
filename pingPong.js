function pingPong(arr,win){
    let output = [];
    let numElements = arr.length + arr.length -1;  
    for(let i =0; i < numElements; i++){
        if(i%2 == 0){
            output.push("Ping!");
        }
        else{
            output.push("Pong!");
        }
    }
    
    if(win){
        output.push("Pong!")
    }
    
    return output;
}

// #Example 1
console.log(pingPong(["Ping!"], true)) // output = ["Ping!", "Pong!"]

// #Example 2
console.log(pingPong(["Ping!", "Ping!"], false)) // output = ["Ping!", "Pong!", "Ping!"]

// #Example 3
console.log(pingPong(["Ping!", "Ping!", "Ping!"], true)) // output = ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
