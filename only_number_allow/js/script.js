var number = document.getElementById("only_numbers");
number.addEventListener("keypress", check);
function check(event) {
    if ((event.keyCode > 47) && (event.keyCode <= 57)) {
        alert("Entered Number is : " + event.key + "\n" + " Number's keycode is : " + event.keyCode);
    }
    else {
        event.preventDefault();
        alert("Enter Only Numbers");
    }
};


// let addq = {
//     num: 0,
//     calc: function () {

//         // logs the add object
//         console.log(this + ' ')
//         this.num += 1;
//         return this.num;
//     }
// };

// let add = {
//     num: 0,
//     calc: function () {

//         // logs the add object
//         console.log(this + ' ')

//         function innerfunc() {
//             this.num += 1;

//             // logs the window object
//             console.log(this + ' ');

//             return this.num

//         } return innerfunc();
//     }
// };


let add = {
    num: 0,
    calc: function () {

        // logs the add object
        console.log(this + ' ')

        // using thisreference variable to
        // store the value of this
        
        thisreference = this;
        function innerfunc() {
            
            // using the variable to access the
            // context of the outer function
            alert(thisreference.num);
            thisreference.num += 1;
            alert(thisreference.num);
            // logs the add object
            console.log(thisreference + ' ');
            return thisreference.num;
        }
        return innerfunc();
    }
};
// logs 1
// console.log(add.calc() + '<br>');

// // logs 2
// console.log(add.calc());



// logs 1
console.log(add.calc() + '<br>');
// logs 2
//console.log(add.calc());

