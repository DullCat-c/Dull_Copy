/**
 * @use Dull_Copy(node_id,type)
 * @author: DullCat https://blog.dullcat.top/
 * @param node_id 填写元素id,或想要复制的字符串
 * @param type 元素类型或字符串类型 input,other,string
 */

function Dull_Copy(node_id,type) {
    if (type === 'input'){
        input_copy(node_id);
    }else if (type === 'other'){
        other_copy(node_id);
    }else if (type === 'string'){
        string_copy(node_id);
    }else{
        throw 'TYPE_ERROR';
    }
}

function input_copy(node) {
    var copyDOM = document.getElementById(node);
    copyDOM.setSelectionRange(0, copyDOM.value.length);
    copyDOM.focus();
    document.execCommand("Copy");
}

function other_copy(node){
    window.getSelection().removeAllRanges();//这段代码必须放在前面否则无效
    var copyDOM=document.getElementById(node);//要复制文字的节点
    var range = document.createRange();
    range.selectNode(copyDOM);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}

function string_copy(node){
    var copyDOM = document.createElement('input');
    //要复制的字符串
    copyDOM.value = node;
    document.body.appendChild(copyDOM);
    //选择
    copyDOM.setSelectionRange(0, copyDOM.value.length);
    copyDOM.focus();
    document.execCommand("Copy"); //复制
    copyDOM.style.display = 'none'; //隐藏创建的节点
}