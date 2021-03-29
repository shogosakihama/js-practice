// 【初心者】JavaScript　コールバック関数／JSのES5／復習・練習【備忘録１５】から



let scores=[88, 62, 65, 21, 47, 92, 57, 89, 79, 89, 54, 82, 69, 72, 74, 54, 66, 92, 64, 96, 47, 89, 95, 93, 70, 30, 84, 93, 81, 98, 78, 96, 32, 56, 64, 42, 67];

let sum = 0;
let bestScore = 0;

for(let i = 0 ; i <scores.length ; i++){
    sum += scores[i];

    if(scores[i]>bestScore){
        bestScore = scores[i];
    }
}

let average = sum /scores.length;
console.log('平均点は'+ average +'点です');
console.log("最高得点は" + bestScore + "点です");