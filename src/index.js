// 分割代入
const pro = ["fumi", 22];
const [name, age] = pro;
const message = `私の名前は${name}です。年齢は${age}です`;
// console.log(message);

// デフォルト値、引数など
const hello = (name = "guest") => {
  console.log(`こんにちは${name}さん！`);
};
// hello('tatsuya');
// hello();

// スプレッド構文 ...

// 配列の展開
const arr = [1, 2];
// console.log(...arr);

const sum = (num1, num2) => console.log(num1 + num2);
// sum(arr[0],arr[1]);
// sum(...arr);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, ...arr3] = arr2;
// console.log(num1);
// console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
// console.log(arr6);

const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// mapやfilterを使った配列の処理
const nameArr = ["tanaka", "yamada", "aiu"];

const nameArr2 = nameArr.map((name) => {
  return name;
});
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "aiu") {
    return name;
  } else {
    return `${name}さん`;
  }
});
// console.log(newNameArr);

// 三項演算子
// 条件 ? 条件がtrueの時 : 条件がfalseの時
const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);
