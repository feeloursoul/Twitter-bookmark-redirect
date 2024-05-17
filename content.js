function redirectToBookmarks() {
  window.location.href = "https://x.com/i/bookmarks";
}

const button = document.createElement('button');
// ボタンのテキストをハート形に変更します。HTMLエンティティを使用します。
button.innerHTML = '&#x2764;'; // ハート記号
// ボタンのスタイルを変更してハート形のピンク色にします。
button.style.position = 'fixed';
button.style.left = '0px';
button.style.top = '0px';
button.style.zIndex = '10000';
button.style.backgroundColor = 'pink'; // 背景色をピンクに
button.style.color = 'white'; // テキスト色を白に
button.style.border = 'none'; // 枠線をなくす
button.style.borderRadius = '50%'; // ボタンを丸くする
button.style.padding = '5px 10px'; // パディングを調整してサイズを小さく
button.style.fontSize = '16px'; // フォントサイズを適切な大きさに
button.onclick = redirectToBookmarks;

document.body.appendChild(button);
