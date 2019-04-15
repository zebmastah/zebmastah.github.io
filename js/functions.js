
function getOauthToken() {
    var xhttp = new XMLHttpRequest();
    var url;
    var params;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("demo").innerHTML = xhttp.responseText;
        }
    };
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.open("POST", url, true);
    xhttp.send(params);
}

function test(){
    alert("Testing");
}
