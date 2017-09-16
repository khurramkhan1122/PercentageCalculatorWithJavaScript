var Eng = +prompt("Enter Your English Obtain Marks");
var Urdu = +prompt("Enter Your Urdu Obtain Marks");
var Math = +prompt("Enter Your Math Obtain Marks");
var Bio = +prompt("Enter Your Biology Obtain Marks");
var Sci = +prompt("Enter Your Science Obtain Marks");
total=(Eng+Urdu+Math+Bio+Sci)*100/500;

document.write("<h1>Your Obtained Percentage is " +total +"% </h1s");
if(total=70<=100 )
{
    document.write("<h1> <br> YOur Rank is A+</h1>");
}
elseif(total=70>=60 )
{
    document.write("<h1> <br> YOur Rank is B </h1>");
}
elseif(total=60<=50 )
{
    document.write("<h1> <br> YOur Rank is C</h1>");
}
elseif(total=50>=40 )
{
    document.write("<h1> <br> YOur Rank is D </h1>");
}