let my_text = prompt("Enter a text");
var my_result = "";
let my_array = my_text.split('');
for (let i = my_array.length - 1; i >= 0; i--) {
    my_result += my_array[i];
}
alert("The reverted text is: " + my_result);