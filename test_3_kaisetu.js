// 変数のスコープ
// 言語によってスコープが異なる
// {} でスコープが区切られている。

// ※Pythonのみ
if (true) {
    const test_00 = '1';
}
console.log(test_00);

function test() {
    // この変数は関数の中だけで使える
    const test = '1';
    console.log(test); // 1
}

console.log(test); // undefined;


function test2() {
    const test_01 = '1';
    test3();
    console.log(test_01) // 1
}

function test3() {
    console.log(test_01) // undefined;
}

// グローバル変数はファイル呼び出し時（node実行時）に呼び出される
// その後は再度実行し直さない限り、変数の中身は更新されない。

// int , string は型
// JavaScriptでは型の区別がない
// 開発にかかる時間が減り、難易度が低くなる
// バグが起こりやすくなる
// TypeScriptという型付きのJavaScriptコンパイラがある。
// →バグが起こっている箇所を把握しやすくなる。

test4('dog'); // JavaScriptではエラーにはならないが、他の言語では代替できないので、危ない。 // 出力: 'dog', undefined

test4('dog', 'cat', 'bird'); // エラー

test4('dog', 'cat'); // 'dog', 'cat'

test4(hensu, hensu, hensu, hensu, hensu, hensu);

function test4(att_01, att_02) {
    console.log(att_01, att_02) // 'dog', 'cat'
    return
}

// 分割代入
test5({ att_01: 'dog', att_02: 'cat' });

function test5({att_01, att_02}) {
    return
}

//　変数の初期値
test6('dog'); // 'dog', 'test'

function test6(att_01, att_02='test') {
    console.log(att_01, att_02)
    return
}

// 初期値の引数の数が多くなると、例えばatt_01とatt_03だけ指定するということができなくなる。
// →分割代入にしておけば、可能になる。

test7('dog'); // 'dog', 'test', 'test2',

test7('dog', 'cat') // 'dog', 'cat', test2'

test7('dog', 'test', 'cat');

function test7(att_01, att_02='test', att_03='test2') {
    console.log(att_01, att_02, att_03)
    return
}

function test7({att_01, att_02='test', att_03='test2'}) {
    console.log(att_01, att_02, att_03)
    return
}

// 場合によって、修正工数が一番低くなるやり方を選ぶ。

// ClassはJavaScriptにはないが、Reactなどのフレームワークでは出てくる。

// 関数は入力に対して出力ある。
// Class 状態やメソッド（関数）を持っている。

// Python
// class test():
//     def init():
//         count = 1
    
//     def update():
//         count += 1


// 共通関数は外部ファイルに切り出すと、追加する工数や修正工数が減る。

// commonFunction.js
function testFunction() {
    return 'test';
}

export const testFunc = testFunction();

// main.js
import { testFunc } from 'commonFunction.js';

// main2.js
import { testFunc } from 'commonFunction.js';


const indexes = [1, 2, 3];
const animals = ['dog', 'cat', 'bird'];

// 例：ユーザーのリストをAPIから取得する（JSON）
// 同じ目的のデータが複数データあるときは配列
const users = [
    {
        role: 'admin', // 1対1のデータ
        name: 'test1',
        // このユーザーが好きなカテゴリー
        categories: [ // 1対多のデータ
            {
                name: 'dog',
                test: '1',
            },
            {
                name: 'dog',
                test: '2',
            }
        ]
    },
    {
        role: 'admin',
        name: 'test2',
        categories: [
            {
                name: 'cat',
            }
        ]
    }
]

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    // {
    //     role: 'admin',
    //     name: 'test1',
    //     categories: [
    //         {
    //             name: 'dog',
    //         }
    //     ]
    // },
    for (let j = 0; j < users[i].categories.length; j++) {
        console.log(users[i].categories[j]);
        // {
        //     name: 'dog',
        // }
    }
}

for (const user of users) {
    console.log(user);
    // {
    //     role: 'admin',
    //     name: 'test1',
    //     categories: [
    //         {
    //             name: 'dog',
    //         }
    //     ]
    // },
    for (const category of user.categories) {
        console.log(category);
        // {
        //     name: 'dog',
        // }
    }
}

// user はオブジェクト1つ分、indexは何番目を取り出しているか？（int）
users.map((user, index) => {
    console.log(user);
    // 例えば新しいプロパティを追加する
    user.order = index;
})

// replace(置き換え対象, 何に置き換えるか);
// /xxx/g →正規表現、g：グローバル（当てはまるもの全てが対象になる）
// gがなければ、左から順に調べて、1つめのみを対象とする
// [年月日]→ []の中で当てはまるもの 年 or 月 or 日 が対象になる。 // []は正規表現の記法
// 年 or 月 or 日 を ''（空白）に置き換える
label.replace(/[年月日]/g, '');

// type=date&date={選択した日付}
// オブジェクトを文字列で表現したい時にこうすることが多い。
// 扱いやすい

date = {
    test: 1,
    test2: 2,
}
//　↓
// test=1&test2=2

