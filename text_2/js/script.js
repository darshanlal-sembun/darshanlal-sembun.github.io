var testing = document.getElementById("text_check");
testing.addEventListener("keyup", checking);


function checking() {
    alert("Entered String is : " + " " + testing.value + "\n" + "String Length is : " + " " + testing.value.length);
};