let alphabet = 'abcdefghijklmnopqrstuvwxyz';

//Iterate over two arrays 
//No thinking only loops
function move(string){
    let output = "";
    for(let i = 0; i< string.length; i++){
        for(let j = 0; j < alphabet.length; j++){
            if(string[i] == alphabet[j]){
                output =  output + alphabet[j+1];
                break;
            }
        }
    }
    return output
}

//Using character code
//Probably faster 
function moveBetter(string){
    let output = "";
    for(let i = 0; i < string.length; i++){
        let charCode = string.charCodeAt(i);
        output = output + alphabet[charCode - 96];
    }
    return output
}

console.log(move("helloeverynyan"));
console.log(moveBetter("helloeverynyan"));
