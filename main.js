function sendMail() {
    var link = "mailto:markhamyouthchallenge@gmail.com" + "&subject=" + escape(document.getElementById('mySubject').value) + "&body=" + escape(document.getElementById('myText').value);

    window.location.href = link;

    document.getElementById("myText").value = "";
    document.getElementById("mySubject").value = "";
}
