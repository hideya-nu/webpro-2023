// localStorage.clear();

function serch(){
    //alert("click");
    let place = document.getElementById('place');
    
    //var list = [['映画館','3D眼鏡','席の確保','チケット','ポップコーン'],['大学','パソコン','お弁当','定期券','スマホ','帽子'];

    if(place.value){
        console.log("set");
        //前の持ち物の描画を消すの処理
        deleate();
        
        //listの照会
        var list = JSON.parse(localStorage.getItem(place.value));
        if(list){
        //表示の処理
            for(var i = 0; i < list.length; i++){
                var li = document.createElement('li',id = 'child');
                li.textContent = list[i];
                document.getElementById('list').appendChild(li);
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
    li = document.getElementById('list')
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
        document.getElementById('list').appendChild(li);

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