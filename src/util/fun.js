const util = {
  ajaxGet() {
    let host = location.hostname;
  let xhr = null;
  if (window.XMLHttpRequest) { // code for all new browsers
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // code for IE5 and IE6
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
    xhr.onreadystatechange = function(){
     if(xhr.readyState === 4 && xhr.status === 200){
       // console.log(xhr.responseText);
       let txt = xhr.responseText;
       console.log(txt);
       if(txt){
         return xhr.responseText;
       }else{
        return '请求失败'
       }
     }else{
        return '请求失败'
     }
    };
    xhr.open('GET','http://localhost:8088/search',false);
    xhr.send(null);
  }
}

export default util;