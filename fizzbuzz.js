function fizzbuzz(number){

    
    for(let i=1; i<number+1; i++){
        let word="";
        if(i%3==0){
            word += "fizz\n";
        }
        if(i%5==0){
            word+="buzz\n";
        }
        if (word == ""){
            word+=i+"\n";
        }
        console.log(word);
    }
    
}
fizzbuzz(18);