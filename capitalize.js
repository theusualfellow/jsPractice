

function capitalize(word){


    if (word.charAt(0) == word.charAt(0).toLowerCase()){
        const firstLetter = word.charAt(0).toUpperCase();
        let newWord = "";
        for(let i=1; i<word.length; i++){  
            let lower = word.charAt(i).toLowerCase();
            newWord+=lower;
        }
        return firstLetter+newWord;
        
    }

    else{
        console.log("nah");
    }
   
}

console.log(capitalize("Harmna"));

