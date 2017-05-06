const sacar = function(url, callback){
  const httpRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")

  httpRequest.onreadystatechange = function (e){
    if (httpRequest.readyState !== XMLHttpRequest.DONE || httpRequest.status !== 200)
      return;

    const scriptElement = document.createElement("script")
    scriptElement.innerHTML = e.target.responseText;
    document.body.appendChild(scriptElement)

    callback()
  }

  httpRequest.open('GET', url, true);
  httpRequest.send();
}
