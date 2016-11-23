//カウンタ・アルファベット系データ初期化
var rowcounter = 2;
var rowflag = 0;
var columncounter = 2;
var columnflag = 0;
var alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//------
//行追加
//------
function insertRow(id) {
    rowcounter++;
    //テーブル取得
    var table = document.getElementById(id);

    //列数取得
    var cols = table.rows[0].cells.length;

    //行追加
    var rows = table.insertRow(-1);

    rowflag = "1";

    //新規追加した行へ既存で存在する列数分、セルを追加
    for ( var i = 0; i < cols; i++) {
        //セル追加
        var cell = rows.insertCell(-1);

        //セル属性情報設定
        cell.setAttribute("class",rowcounter + '-' + i);
        cell.className = rowcounter + '-' + i;

        if (rowflag == "1") {
        //テキストボックス属性情報設定＋name統合
            var HTML1 = '<input readonly type="text" name="'+ 'rowindex_' + columncounter +'" value="'+ rowcounter +'" size="1" maxlength="100" />';
        rowflag = "0";
        }else{
            var HTML1 = '<input type="text" name="'+ rowcounter + '-' + i +'" value="" size="10" maxlength="20" />';
        }
        //新規テキストボックスをtable.cellへ適応
        cell.innerHTML = HTML1;
    }

}

//------
//列追加
//------
function insertColumn(id) {
    columncounter++;
    if (columncounter >= 27){
        //アルファベット数での列数追加制限
        alert("これ以上の行追加は行なえません!");
    }else{
        //テーブル取得
        var table = document.getElementById(id);
        //行数取得
        var rows = table.rows.length;

        columnflag = "1";

        //既存で存在する行数分、セルを追加
        for ( var i = 0; i < rows; i++) {
            //セル追加
            var cell = table.rows[i].insertCell(-1);
            //列数取得
            var cols = table.rows[i].cells.length;

            //セル属性情報設定
            cell.setAttribute("class",(i + 1) + '-' + (cols - 1));
            cell.className = (i + 1) + '-' + (cols - 1);

            if(columnflag == "1"){
            //テキストボックス属性情報設定＋name統合
                var HTML1 = '<input readonly type="text" name="'+ 'columnindex_' + columncounter +'" value="'+ alphabet[columncounter - 1] +'" size="10" maxlength="20" />';
                columnflag = "0";
            }else{
                var HTML1 = '<input type="text" name="'+ (i + 1) + '-' + (cols - 1) +'" value="" size="10" maxlength="20" />';
            }
            //新規テキストボックスをtable.cellへ適応
            cell.innerHTML = HTML1;
            }
    }
}

//キー投下時に実行される関数
window.document.onkeydown = function(event){
    //Enterキー投下時のみ
    if (event.key === 'Enter') {

        //現在選択されているテキストボックスの一文字目を切り出し
        var EqualString = document.activeElement.value.substring(0, 1);
        
        //もしも1文字目に「=」が挿入されていた場合
        if(EqualString == "="){
            
            //足し算計算
            var vaule = document.activeElement.value.substr(1);
            math = vaule.split("+");
            clac = Number(math[0]) + Number(math[1]);
            document.activeElement.value = String(clac);
        }else{
            //何もしない
        }
    }
}