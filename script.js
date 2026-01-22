function popup(){
    alert("messager was send")
}
setInterval(function () {
  document.getElementById("clock").innerHTML = new Date().toLocaleString();
}, 1000);