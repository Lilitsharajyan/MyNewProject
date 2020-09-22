let my_text = prompt("Enter a text");
let len = my_text.length;
my_result = "";
for (i = 0; i <= len; i++) {
    my_result += my_text.charAt(len - i);
}
alert("The reverted text is: " + my_result);