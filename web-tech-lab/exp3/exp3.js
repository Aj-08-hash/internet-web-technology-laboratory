// Function to find the left-most vowel

function findVowel()
{

var str=document.getElementById("textInput").value;

var position=-1;

for(var i=0;i<str.length;i++)
{

var ch=str.charAt(i).toLowerCase();

if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u")
{

position=i+1;

break;

}

}

if(position==-1)
{

document.getElementById("vowelResult").innerHTML="No vowel found.";

alert("No vowel found.");

}

else
{

document.getElementById("vowelResult").innerHTML=
"Left-most vowel is at position : "+position;

alert("Left-most vowel is at position : "+position);

}

}



// Function to reverse a number

function reverseNumber()
{

var number=document.getElementById("numberInput").value;

// Regular Expression Validation

var pattern=/^[0-9]+$/;

if(!pattern.test(number))
{

alert("Invalid Input! Enter only positive digits.");

document.getElementById("reverseResult").innerHTML="Invalid Input";

return;

}

number=parseInt(number);

var reverse=0;

while(number>0)
{

reverse=reverse*10+(number%10);

number=Math.floor(number/10);

}

document.getElementById("reverseResult").innerHTML=
"Reversed Number : "+reverse;

alert("Reversed Number : "+reverse);

}