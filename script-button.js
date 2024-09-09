//Button選択マーカー変更


// 複数のボタンを取得
var buttons_category = document.querySelectorAll('.button-category-class');
var dataButtonsContainer = document.getElementById('button-all-id');
// var imageDiv = document.getElementById('image-div'); // 画像を表示するための要素を取得

// 初期状態で1つ目のボタンに "active" クラスを追加して押された状態にする
window.onload = function() {
  if (buttons_category.length > 0) {
    buttons_category[0].classList.add('active-category');
    handleCategoryClick(buttons_category[0].textContent);  // 初期表示
  }
};

// ボタンがクリックされた時の処理
buttons_category.forEach(function(button) {
  button.addEventListener('click', function() {
    // Button制御
    buttons_category.forEach(function(btn) {
      btn.classList.remove('active-category');
    });

    // クリックされたボタンに "active-category" クラスを追加
    this.classList.add('active-category');

    // ボタンのテキストを取得
    var buttonText = this.textContent;

    // カテゴリボタンをクリックしたときに、データを基にアイコンボタンを表示変更
    handleCategoryClick(buttonText);
  });
});

// カテゴリクリック時の処理（データボタンの生成）
function handleCategoryClick(category) {
  // データをフィルタリングしてカテゴリに対応するものだけを取得
  const filteredData = data.filter(item => item.category === category);

  // データボタンを表示するエリアを一度クリア
  dataButtonsContainer.innerHTML = '';

  // フィルタリングされたデータに基づいてボタンを生成
  filteredData.forEach((item, index) => {
    const dataButton = document.createElement('button');
    dataButton.textContent = item.name;
    dataButton.classList.add('data-button-class');
    dataButton.id = `data-button-${item.id}`;

    // アイコンの表示処理を追加
    dataButton.style.backgroundImage = `url(${linkFileImage}${item.icon})`;
    dataButton.style.backgroundSize = 'cover';  // 背景サイズを調整

    // アイコン表示用のクリックイベント
    dataButton.addEventListener('click', function() {
      // すべてのデータボタンから ".active" クラスを削除
      document.querySelectorAll('.data-button-class').forEach(function(btn) {
        btn.classList.remove('active');
      });

      // クリックされたボタンに ".active" クラスを追加
      this.classList.add('active');

      
      if (imageDiv) {
        imageDiv.src = `${linkFileImage}${item.icon}`;
      }
    });

    // 生成したボタンをコンテナに追加
    dataButtonsContainer.appendChild(dataButton);


    
    // 初期表示で最初のボタンに "active" クラスを追加する
    if (index === 0) {
      dataButton.classList.add('active');
      if (imageDiv) {
        imageDiv.src = `${linkFileImage}${item.icon}`;
      }
    }
  });
}


