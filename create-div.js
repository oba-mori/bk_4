// 要素作成


/*

Titanfall
Cyberpunk2077


*/ 



// データ入力
var data = [
  { id: 0, category: 'Titanfall',name: 'kid', icon: 'icon-ki.png', img: 'img-kid.png' },
  { id: 1, category: 'Titanfall',name: 'olib', icon: 'icon-1.png', img: 'img-1.png' },
  { id: 2, category: 'Titanfall',name: 'ki-ul', icon: 'icon-2.png', img: 'img-2.png' },
  { id: 3, category: 'Titanfall',name: '9sist', icon: 'icon-3.png', img: 'img-3.png' },
  { id: 4, category: 'Titanfall',name: 's;eiglas', icon: 'icon-3.png', img: 'img-3.png' },
  { id: 5, category: 'Titanfall',name: 'jest', icon: 'icon-3.png', img: 'img-3.png' },
  { id: 6, category: 'Cyberpunk2077',name: 'v', icon: 'icon-3.png', img: 'img-3.png' },
  { id: 7, category: 'Cyberpunk2077',name: 'od', icon: 'icon-3.png', img: 'img-3.png' },
  { id: 8, category: 'Cyberpunk2077',name: 'tkml', icon: 'icon-3.png', img: 'img-3.png' },
  { id: 9, category: 'Cyberpunk2077',name: 'sdi', icon: 'icon-3.png', img: 'img-3.png' },
  { id: 10, category: 'Cyberpunk2077',name: '3row', icon: 'icon-3.png', img: 'img-3.png' },
  { id: 11, category: 'Cyberpunk2077',name: 'nkg', icon: 'icon-3.png', img: 'img-3.png' }
];

// Map の作成
const myMap = new Map();
data.forEach(item => {
  myMap.set(item.id, item); // IDをキーとして使用
});

// // Map の内容を表示
// for (const [key, value] of myMap) {
//   console.log(`Key: ${key}, Name: ${value.name}, Icon: ${value.icon}, Img: ${value.img}`);
// }

// // IDでデータを取得
// const idToFind = 2;
// const item = myMap.get(idToFind);

// if (item) {
//   console.log(`Found Item - Name: ${item.name}, Icon: ${item.icon}, Img: ${item.img}`);
// } else {
//   console.log(`Item with ID ${idToFind} not found.`);
// }



//---------------------------------------------------------------------
//dataのカテゴリ数
var categories = [...new Set(data.map(item => item.category))];
var categoryCount = categories.length;


//カテゴリ用button作成

// 各カテゴリにボタンを作成
categories.forEach((category, index) => {
  // 新しいButton要素を作成
  var buttonCategory = document.createElement("button");

  // divにテキストを追加
  // buttonCategory.textContent = i;
  // buttonCategory.textContent =  myMap.get(i).category;
  buttonCategory.textContent =  category;    
  // console.log(category);

  // divにクラスを追加
  buttonCategory.className = "button-category-class";

  // 新しいdiv要素にidを設定
  buttonCategory.id = `category-button-${index}`; // ここでidを設定
  // console.log(buttonCategory.id);
    
  // 既存のdiv要素を取得（例: idで取得）
  var buttonCategoryAllDiv = document.getElementById("button-category-all-id");

  // 既存のdiv要素に新しいdivを追加
  buttonCategoryAllDiv.appendChild(buttonCategory);

  //CSS
  //Buttonの背景画像
  // button.style.backgroundImage = 'url(./sample_img/' + icons[i] + ')';
  // button.style.backgroundImage = 'url(./sample_img/' + myMap.get(i).icon + ')';
  // buttonCategory.style.backgroundImage = 'url(' + linkFileImage + myMap.get(i).icon + ')';
});








//---------------------------------------------------------------------
//Buttonの数
// var charaValue = icons.length;
// var charaValue = data.length;   //Buttonの数=データの数

//---------------------------------------------------------------------
// Button用

// for(var i = 0; i < charaValue; i++)
// {
//   // 新しいButton要素を作成
//   var button = document.createElement("button");

//   // divにテキストを追加
//   // button.textContent = "Hello, World!";

//   // divにクラスを追加
//   button.className = "data-button-class";

//   // 新しいdiv要素にidを設定
//   button.id = "data-button-id-" + i; // ここでidを設定

//   // 既存のdiv要素を取得（例: idで取得）
//   var buttonAllDiv = document.getElementById("button-all-id");

//   // 既存のdiv要素に新しいdivを追加
//   buttonAllDiv.appendChild(button);

//   //CSS
//   //Buttonの背景画像
//   // button.style.backgroundImage = 'url(./sample_img/' + icons[i] + ')';
//   // button.style.backgroundImage = 'url(./sample_img/' + myMap.get(i).icon + ')';
//   button.style.backgroundImage = 'url(' + linkFileImage + myMap.get(i).icon + ')';
// }

//---------------------------------------------------------------------
//modal用
// 新しいdiv要素を作成
var modalDiv = document.createElement("div");

// divにテキストを追加
// modalDiv.textContent = "Hello, World!";

// divにクラスを追加
modalDiv.className = "modal-class";

// 新しいdiv要素にidを設定
modalDiv.id = "modal-id"; // ここでidを設定

// 既存のdiv要素を取得（例: idで取得）
var existingDiv = document.getElementById("modall-all-id");

// 既存のdiv要素に新しいdivを追加
existingDiv.appendChild(modalDiv);

//---------------------------------------------------------------------
// 新しいimageDiv要素を作成
var imageDiv = document.createElement("img");

// imageにクラスを追加
imageDiv.className = "image-class";

// 新しいimage要素にidを設定
imageDiv.id = "image-id"; // ここでidを設定

// 既存のdiv要素に新しいimageを追加
modalDiv.appendChild(imageDiv);

//---------------------------------------------------------------------


