
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Otto"],"S"));
output(getSentence(["Bist","du","Otto"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));
output(getSentence(["Test", "test"], "P"))





function getSentence(arr, b) {
    
    const GAP = " ";
    let str = "";

    for (let i = 0; i < arr.length; i++) {
        
        if (i != arr.length - 1) {
            str += arr[i] + GAP;
        } else {
            str += arr[i];
        }    
    }

    return changeLast(str, b);


}


function changeLast(str, b) {

    let c = [".", "?", "!"];

    switch (TRUE) {
        case b == "S":
            return str + c[0];
        case b == "Q":
            return str + c[1];
        case b == "E":
            return str + c[2];
    
        default:
            return str;
    }
    
}


function output(outputStr) {
        console.log(outputStr);
    
}