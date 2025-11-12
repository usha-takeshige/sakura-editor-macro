// マークダウンインデント増加マクロ (Ctrl+])
// 現在行のインデントを2スペース増やす

// 行の先頭に移動
Editor.GoLineTop(1);

// 2スペースを挿入
Editor.InsText("  ");

Editor.GoLineEnd(0);