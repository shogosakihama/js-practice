// 【初心者】JavaScript　コールバック関数／JSのES5／復習・練習【備忘録１５】から

let users = [{
        name: '太郎',
        age: 21,
        nationality: '日本',
    },
    {
        name: 'リリー',
        age: 37,
        nationality: 'イギリス',
    },
    {
        name: 'ジョン',
        age: 16,
        nationality: 'アメリカ',
    },
];

for (let i = 0; i < users.length; i++) {
    let number = i + 1;

    console.log(number + '人目');

    console.log('名前' + users[i].name);
    console.log('年齢' + users[i].age);
    console.log('国籍' + users[i].nationality);
}