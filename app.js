function serch(){
    //alert("click");
    let place = document.getElementById('place');

    if(place.value){
        console.log("set");
        //前の持ち物の描画を消すの処理
        deleate();
        
        //listの照会
        var item_list = JSON.parse(localStorage.getItem(place.value));
        if(item_list){
        //表示の処理
            for(var i = 0; i < item_list.length; i++){
                var li = document.createElement('li',id = 'child');
                li.textContent = item_list[i];
                document.getElementById('item_list').appendChild(li);
            }
        }else{
            alert("no item");
        }
    }else{
        deleate();
        alert("no place");
    }
}

function deleate(){
    li = document.getElementById('item_list')
    children = li.children;
    while (children.length > 0) {
        li.removeChild(children[0]);
    }
}

function add(){
    let place = document.getElementById('place');
    var list = JSON.parse(localStorage.getItem(place.value));
    let addItem = document.getElementById('addItem');

    if(place.value && addItem.value){
        //listタグに追加し、表示
        var li = document.createElement('li',id = 'child');
        li.textContent = addItem.value;
        document.getElementById('item_list').appendChild(li);

        //localstrageに追加
        //行き先が設定されてなかった場合
        if(!list)
            list = [];
        list.push(addItem.value);
        localStorage.setItem(place.value,JSON.stringify(list));
        //alert("add Item");
    }else{
        alert("no Item");
    }
    addItem.value = '';
}

function submit(){
    var parent = document.getElementById('goto_list');
    while( parent.firstChild ){
        parent.removeChild( parent.firstChild );
    }

    for (var i = 0; i < localStorage.length; i++) {
        var itemList = document.createElement('li'); 
　      itemList.textContent = localStorage.key(i);
　      document.getElementById('goto_list').appendChild(itemList); 
    }

    if(!localStorage.getItem(place.value)){
        alert("持ち物が追加されていません");
    }

}

//loadされたら登録されている行き先を表示
window.onload = function () {
    for (var i = 0; i < localStorage.length; i++) {
        var itemList = document.createElement('li'); 
        itemList.id = 'goto_item';
　      itemList.textContent = localStorage.key(i);
　      document.getElementById('goto_list').appendChild(itemList); 
    }
    if(localStorage.length==0){
        var itemList = document.createElement('li');
        itemList.textContent = "まだ行き先が登録されていません！";
        document.getElementById('goto_list').appendChild(itemList); 
    }
}
