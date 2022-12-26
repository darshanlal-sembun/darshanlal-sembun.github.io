var user_name = document.getElementById("username");
user_name.addEventListener("keypress", username);

function username(event) {
    //alert(event.target.value);
    if (((event.keyCode > 64) && (event.keyCode <= 90)) || ((event.keyCode > 96) && (event.keyCode <= 122))) {
        return true;
        // alert("Entered Number is : " + event.key + "\n" + " Number's keycode is : " + event.keyCode);
    }
    else {
        event.preventDefault();
        alert("Enter Only Alphabets");
    }

    //return event.value;
};


var age = document.getElementById("age");
age.addEventListener("keypress", user_age);

function user_age(event) {
    if ((((event.keyCode > 48) && (event.keyCode <= 57))) && (age.value.length < 2)) {
        // alert("Entered Number is : " + event.key + "\n" + " Number's keycode is : " + event.keyCode);
        console.log(age.value);
    }
    else {
        event.preventDefault();
        alert("Enter Only Numbers");
    }
};


var gender = document.getElementsByName("gender").forEach(function (event) {
    event.addEventListener("change", function () {
        alert("You have selected" + " " + event.value + " " + "Gender");
    });
});


var mobile = document.getElementById("mobile_number");
mobile.addEventListener("keypress", user_mobile);

function user_mobile(event) {
    if (((event.keyCode > 47) && (event.keyCode <= 57)) && (mobile.value.length < 10)) {

    }
    else {
        event.preventDefault();
        alert("Enter Only Numbers");
    }
};

var aadhar = document.getElementById("aadhar_number");
aadhar.addEventListener("keypress", user_aadhar);

function user_aadhar(event) {
    if (((event.keyCode > 47) && (event.keyCode <= 57)) && (aadhar.value.length < 12)) {

    }
    else {
        event.preventDefault();
        alert("Enter Only Numbers");
    }
};

var email = document.getElementById("email");
email.addEventListener("focusout", user_email);

function user_email() {
    const emailField = email.value;
    alert(emailField);
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        alert("Valid email address!");
        //return true;
    }
    else {
        alert("You have entered an invalid email address!");
    }
};

var interest = document.getElementsByName("interest");
for (i = 0; i < interest.length; i++) {
    interest[i].addEventListener("click", user_interest);
};

function user_interest() {
    let interest_checked = document.querySelectorAll('input[name="interest"]:checked');
    let values = [];
    interest_checked.forEach((interest) => {
        values.push(interest.value);
    });

    alert("checked" + values);
    // alert(e.value);
};

var state = document.getElementById("state");
console.log(state);
state.addEventListener("click", function () { dropdown(this) });

function dropdown(event) {
    var selected = event.selectedIndex;
    var option = event.options;
    alert("Index: " + option[selected].index + " is " + option[selected].text);
};

var district = document.getElementById("district");
console.log(district);
state.addEventListener("click", function () { dropdown(this) });

function dropdown(event) {
    var selected = event.selectedIndex;
    var option = event.options;
    alert("Index: " + option[selected].index + " is " + option[selected].text);
};

var country = document.getElementById("Country");
country.addEventListener("keypress", user_country);

function user_country(event) {
    // alert(event.target.value);
    if (((event.keyCode > 64) && (event.keyCode <= 90)) || ((event.keyCode > 96) && (event.keyCode <= 122))) {
        // alert("Entered Number is : " + event.key + "\n" + " Number's keycode is : " + event.keyCode);
    }
    else {
        event.preventDefault();
        alert("Enter Only Alphabets");
    }
};

var address = document.getElementById("address");
console.log(address);
address.addEventListener("focusout", user_address);

function user_address() {
    alert(address.value);
};

var comments = document.getElementById("comments");
console.log(comments);
comments.addEventListener("focusout", user_comments);

function user_comments() {
    alert(comments.value);
};

var reset = document.getElementById("reset_btn");
reset.addEventListener("click", reset_all);

function reset_all() {
    //  document.getElementsByTagNameNS("form").reset();
    document.getElementById("myForm").reset();
};

var submit = document.getElementById("submit_btn");
submit.addEventListener("click", submit_all);

function submit_all() {
    //console.log(document.body.form);
    // var total_form = document.getElementById("myform");
    //console.log(total_form.username.value);

    if (user_name.value == '') {
        alert("please enter your Username");
    }
    else if (age.value == '') {
        alert("please enter your Age");
    }
    else if (gender.value == '') {
        alert("please enter your Gender");
    }
    else if (mobile.target.value == '') {
        alert("please enter your Mobile");
    }
    else if (aadhar.value == '') {
        alert("please enter your Aadhar");
    }
    else if (email.value == '') {
        alert("please enter your Email");
    }
    else if (interest.value == '') {
        alert("please enter your Interest");
    }
    else if (state.value == '') {
        alert("please enter your State");
    }
    else if (district.value == '') {
        alert("please enter your District");
    }
    else if (country.value == '') {
        alert("please enter your Country");
    }
    else if (address.value == '') {
        alert("please enter your Address");
    }
    else if (comments.value == '') {
        alert("please enter your Comments");
    }
    else {
        alert("ok");
    }
};