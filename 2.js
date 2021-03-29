// 【初心者】JavaScript　コールバック関数／JSのES5／復習・練習【備忘録１５】から


const call=(callback)=>{
    console.log("コールバック関数を呼び出します");
    callback();
};

call(()=>{
    console.log("ココちゃん");
});