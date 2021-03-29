// 【初心者】JavaScript　コールバック関数／JSのES5／復習・練習【備忘録１５】から


let height = 1.76;
let weight = 75;

let bmi = weight / height / height;
console.log("BMIは" + bmi + "です");


if (bmi < 18.5) {
    console.log("痩せ気味です");
} else if (bmi < 25) {
    console.log("普通です");
} else {
    console.log("肥満気味です");
}