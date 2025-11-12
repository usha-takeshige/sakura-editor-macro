// マークダウン改行マクロ (Enter)
// リスト、番号付きリスト、引用の自動継続

// 現在の行のテキストを取得（改行コード含む）
var lineText = Editor.GetLineStr(0);
// 改行コードを除去
lineText = lineText.replace(/\r?\n$/, '');

// 行末まで移動
Editor.GoLineEnd(0);

// 改行を挿入
Editor.InsText("\n");

// 前の行の内容を解析
var trimmedLine = lineText.replace(/^\s+/, '').replace(/\r?\n$/, ''); // 先頭の空白と改行を除去
var indent = lineText.match(/^\s*/)[0]; // インデントを取得

// 番号付きリスト (1. 2. など)
var numberedListMatch = trimmedLine.match(/^(\d+)\.\s+(.*)$/);
if (numberedListMatch) {
    var content = numberedListMatch[2];
    if (content.length === 0) {
        // 空のリスト行の場合、リストマーカーを削除
        Editor.Up();
        Editor.GoLineTop(0);
        Editor.GoLineEnd(1);
        Editor.Delete();
    } else {
        // 次の番号を挿入
        var nextNum = parseInt(numberedListMatch[1]) + 1;
        Editor.InsText(indent + nextNum + ". ");
    }
} else {
    // 箇条書きリスト (-, *, +)
    var bulletListMatch = trimmedLine.match(/^([-*+])\s+(.*)$/);
    if (bulletListMatch) {
        var content = bulletListMatch[2];
        if (content.length === 0) {
            // 空のリスト行の場合、リストマーカーを削除
            Editor.Up();
            Editor.GoLineTop(0);
            Editor.GoLineEnd(1);
            Editor.Delete();
        } else {
            // 同じリストマーカーを挿入
            var marker = bulletListMatch[1];
            Editor.InsText(indent + marker + " ");
        }
    } else {
        // 引用 (>)
        var quoteMatch = trimmedLine.match(/^(>+)\s*(.*)$/);
        if (quoteMatch) {
            var content = quoteMatch[2];
            if (content.length === 0) {
                // 空の引用行の場合、引用マーカーを削除
                Editor.Up();
                Editor.GoLineTop(0);
                Editor.GoLineEnd(1);
                Editor.Delete();
            } else {
                // 同じ引用マーカーを挿入
                var quoteMarker = quoteMatch[1];
                Editor.InsText(indent + quoteMarker + " ");
            }
        }
        // 上記のいずれにも該当しない場合は、通常の改行のみ（何もしない）
    }
}