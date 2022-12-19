const c = document.createElement("div");
c.style.width = "100%";
document.body.appendChild(c);

const idcard = document.createElement("div");
idcard.style.width = "100%";
idcard.style.color = "white";
idcard.style.margin = "40px auto";
idcard.style.borderRadius = "10px";
c.appendChild(idcard);

const image_div = document.createElement("div");
image_div.style.width = "20%";
image_div.style.backgroundColor = "azure";
image_div.style.margin = "20px auto";
image_div.style.textAlign = "center";
image_div.style.borderRadius = "20px";
image_div.style.padding = "10px";
image_div.style.color = "black";
image_div.style.fontWeight = "700";
image_div.style.boxShadow = "0px 0px 50px grey";
idcard.appendChild(image_div);
//image
const image = document.createElement("img");
image.src = "../card/images/IMG_0800.JPG";
image.setAttribute("height", "100px");
image.setAttribute("width", "100px");
image.style.borderRadius = "50px";
image.style.margin = "20px auto";
image_div.appendChild(image);
//Username
const Name = document.createElement("p");
Name.innerText = "Username : Darshan Lal";
Name.style.fontSize = "18px";
image_div.appendChild(Name);
//mobile number
const mobile_number = document.createElement("p");
mobile_number.innerText = "Mobile Number : 8834852738";
mobile_number.style.fontSize = "18px";
image_div.appendChild(mobile_number);
// email id
const email_id = document.createElement("p");
email_id.innerText = "Email Id : darshanlal@gmail.com";
email_id.style.fontSize = "18px";
image_div.appendChild(email_id);
