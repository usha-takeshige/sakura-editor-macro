// マークダウンインデント減少マクロ (Ctrl+[)
// 現在行のインデントを2スペース減らす

// 現在の行を取得
var lineText = Editor.GetLineStr(0);

// 先頭のスペースをチェック
if (lineText.match(/^  /)) {
    // 行の先頭に移動
    Editor.GoLineTop(1);
    
    // 2文字削除
    Editor.Delete();
    Editor.Delete();
}

Editor.GoLineEnd(0);