// マークダウン太字マクロ (Ctrl+B)
// 選択範囲を ** で囲む

var selectedText = Editor.GetSelectedString(0);

if (selectedText.length > 0) {
    // 選択範囲がある場合: ** で囲む
    Editor.InsText("**" + selectedText + "**");
} else {
    // 選択範囲がない場合: **** を挿入してカーソルを中央に
    Editor.InsText("****");
    // カーソルを2文字左に移動
    Editor.Left();
    Editor.Left();
}
