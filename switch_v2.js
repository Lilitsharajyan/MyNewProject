let flag = 0;
while (flag == 0) {
var my_string = prompt("Input a text (with min length of 5 symbols)");
flag = my_string.length >= 5 ? 1:0;
}
while (flag == 1) {
var my_number = 0;
var i = 0;
for (;i<=2;i++) {
switch (my_string.charAt(i)) {
  case "a":
  case "e":
  case "u":
  case "i":
  case "o":
    my_number += 4;
    break;
  case "z":
    my_number += 5;
    break;
  default:
    my_number -= 1;
}
}
alert("Value is: " + my_number);
flag = 0;
}