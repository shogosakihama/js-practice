// 【初心者】JavaScript　コールバック関数／JSのES5／復習・練習【備忘録１５】から



for(let i = 0 ; i <= 15 ; i ++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if (i % 5 === 0){
        console.log("Buzz");
    }else if(i % 3 === 0){
        console.log("Fizz");
    }else {
        console.log(i);
    }
}