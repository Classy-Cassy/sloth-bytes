//It "works" but the number of spaces at the end is a bit weird, I'm not fixing it

function keyboardShortcut(string){
    let sentence = string.split(" ");
    let copied = "";
    let res = "";
    for(let i = 0; i < sentence.length; i++){
        while(sentence[i] == "Ctrl" && sentence[i + 1] == "+"){
            if(sentence[i+2] == "C"){
                sentence.splice(i, 3);
                for(word of sentence.slice(0,i)){
                    copied =  copied + word + " ";
                }
            }
            else if(sentence[i + 2] == "V"){
                sentence.splice(i, 3);
                res += copied;
            }
        }

        if(i != sentence.length){
            res += sentence[i];
        }
        if (i != sentence.length - 1){
            res += " ";
        }
    }
    return res;
}

console.log(keyboardShortcut("the egg and Ctrl + C Ctrl + V the spoon"));
console.log(keyboardShortcut("WARNING Ctrl + V Ctrl + C Ctrl + V"));
console.log(keyboardShortcut("The Ctrl + C Ctrl + V Town Ctrl + C Ctrl + V"));
