function reverseNumber()
{
    var number = document.getElementById("numberInput").value;

    // Regular Expression Validation
    var pattern = /^[0-9]+$/;

    if(!pattern.test(number))
    {
        alert("Invalid Input! Enter only positive digits.");
        document.getElementById("result").innerHTML = "Invalid Input";
        return;
    }

    number = parseInt(number);

    var reverse = 0;

    while(number > 0)
    {
        // Get last digit using modulus
        reverse = reverse * 10 + (number % 10);

        // Remove last digit
        number = Math.floor(number / 10);
    }

    alert("Reversed Number = " + reverse);

    document.getElementById("result").innerHTML =
    "Reversed Number : " + reverse;
}