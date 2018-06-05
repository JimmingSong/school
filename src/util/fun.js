const util = {
  ajaxGet() {
  //   let xhr = null;
  //   if (window.XMLHttpRequest) { // code for all new browsers
  //     xhr = new XMLHttpRequest();
  //   } else if (window.ActiveXObject) { // code for IE5 and IE6
  //     xhr = new ActiveXObject("Microsoft.XMLHTTP");
  //   }
  //   xhr.onreadystatechange = function() {
  //       if (xhr.readyState === 4 && xhr.status === 200) {
  //         data = xhr.responseText;
  //         return data
  //       }
  //     },
  //     xhr.open('GET', sendData, true);
  //   xhr.send()
  // }
  let xhr = null;
  if (window.XMLHttpRequest) { // code for all new browsers
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // code for IE5 and IE6
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function(){
     if(xhr.readyState === 4 && xhr.status === 200){
       // console.log(xhr.responseText);
       return xhr.responseText;
     }
    };
    xhr.open('GET','http://localhost:8080/search',true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
    xhr.send(null);
  }
}

export default util;