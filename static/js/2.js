function copywx() {
    var val = document.getElementById('txtVal');
    window.getSelection().selectAllChildren(val);
    document.execCommand("Copy");
    alert("微信号复制成功，请到微信内粘贴搜索添加好友");
    window.location.href = "weixin://";
}
