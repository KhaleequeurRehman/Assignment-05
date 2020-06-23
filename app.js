// chapter21-25 starts from here

// Task1
var firstName = prompt("Enter Your First Name : ");
var lastName = prompt("Enter Your Last Name : ");
var fullName = firstName + lastName;
alert("Hello Dear "+fullName+", Welcome to our website");

// Task2
var favouritePhone = prompt("Enter Your Favourite Mobile's Model : ");
var len = favouritePhone.length;
document.write("My Favourite Phone is : "+ favouritePhone+"<br>");
document.write("Length of string : "+ len);

// Task3
var word = "pakistani";
document.write("String : "+word+"<br>");
document.write("Index of 'n' : "+ word.indexOf('n'));

// Task4
var word = "Hello World";
document.write("String : "+word+"<br>");
document.write("Last index of 'l' : "+ word.lastIndexOf('l'));

// Task5
var word = "pakistani";
document.write("String : "+word+"<br>");
document.write("Character at index 3 : "+ word.charAt(3));

// Task6
var firstName = prompt("Enter Your First Name : ");
var lastName = prompt("Enter Your Last Name : ");
var fullName = firstName.concat(lastName);
alert("Hello Dear "+fullName+", Welcome to our website");

// Task7
var word = "Hyderabad";
document.write("City : "+word+"<br>");
document.write("After replacement : "+ word.replace("Hyder","Islam"));

// Task8
var message="Ali and Sami are best friends. They play cricket and football together";
document.write("String : "+message+"<br>");
document.write("After replacement : "+ message.replace(/and/g,"&"));

// Task9
var str="472";
var num = Number(str);
document.write("Value : "+str+"<br>");
document.write("Type : "+ typeof(str)+"<br>");
document.write("Value : "+num+"<br>");
document.write("Type : "+ typeof(num)+"<br>");

// Task10
var str = prompt("Enter any string ");
document.write("User input : "+str+"<br>");
document.write("Upper case : "+ str.toUpperCase()+"<br>");

// Task11
var str = prompt("Enter any string ");
var firstChar = str[0];
var otherChar = str.slice(1);
var new_str = firstChar.toUpperCase() + otherChar;
document.write("User input : "+str+"<br>");
document.write("Upper case : "+ new_str+"<br>");

// Task12
var num = 35.36;
var str = num.toString();
var str_array = str.split(".");
var result = str_array[0].concat(str_array[1]);
document.write("Number : "+num+"<br>");
document.write("Result : "+ result+"<br>");

// Task13
var userName = prompt("Enter Username : ");
      
for(var i=0;i<userName.length;i++)
{
   if(userName.charCodeAt(i) == 33 || userName.charCodeAt(i) == 44 || userName.charCodeAt(i) == 46 || userName.charCodeAt(i) == 64)
    {
        alert("Enter valid username!");
        break;
    }
}

document.write("Username : " + userName);

// Task14
var i,check=true,ordered_item;
var a = ["cake","apple pie","cookie","chips","patties"];
ordered_item = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
ordered_item = ordered_item.toLowerCase();
for(i=0;i<a.length;i++)
{ 
    if(a[i] == ordered_item)
    { 
        alert(ordered_item+" is available at index "+i+" in our bakery");
        check = false;
        break;
    }

}
if(check)
    alert("We are sorry. "+ordered_item+" is not available in our bakery");


// Task15
var password = prompt("Enter Your Password : ");
if(password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 58)
{
    alert("Password can not begin with a number \nPlease enter a valid password");
}
else if(password.length<6)
{
    alert("Password must be atleast six characters long");
}    
else
    alert("Your password is valid");

// Task16
var university = "University of Karachi";
var str_array = university.split(" ");
var first_word = str_array[0];
var second_word = str_array[1];
var third_word = str_array[2];
var str = first_word+" "+second_word+" "+third_word;

for(var i=0;i<str.length;i++)
    document.write(str[i]+"<br>");

// Task17
var str = prompt("Enter any String : ");
var lastCharacter = str[str.length-1];
document.write("User input : "+str+"<br>");
document.write("Last character of input : "+lastCharacter+"<br>");

// Task18
var str = "The quick brown fox jumps over the lazy dog";
var count=0;

for(var i=0;i<str.length;i++)
{

    if(str.slice(i,i+3) == "The" || str.slice(i,i+3) == "the" || str.slice(i,i+3) == "THE")
    {
        count++;
    } 

}
document.write("Text : " +str+"<br>There are "+count+" occurrence(s) of word 'the'");

// chapter21-25 ends here

// chapter26-30 start from here
// Task1
var num = prompt("Enter any number : ");
var roundOfValue = Math.round(num);
var floorValue =  Math.floor(num);
var ceilValue =  Math.ceil(num);
document.write("number : "+num+"<br>");
document.write("round of value : "+roundOfValue+"<br>");
document.write("floor value : "+floorValue+"<br>");
document.write("ceil value : "+ceilValue);

// Task2
var num = prompt("Enter any negative number : ");
var roundOfValue = Math.round(num);
var floorValue =  Math.floor(num);
var ceilValue =  Math.ceil(num);
document.write("number : "+num+"<br>");
document.write("round of value : "+roundOfValue+"<br>");
document.write("floor value : "+floorValue+"<br>");
document.write("ceil value : "+ceilValue);

// Task3
var num = prompt("Enter any number : ");
var absoluteValue = Math.abs(num);
document.write("The absolute value of "+num+" is "+absoluteValue);

// Task4
var randomNumber = Math.random()*9;
document.write("Random dice value : "+Math.round(randomNumber));

// Task5
var randomNumber = Math.random()*2; 
if(Math.round(randomNumber) == 1 || Math.round(randomNumber) == 0) 
    document.write("Random coin value : Tails");
else if(Math.round(randomNumber) == 2)
    document.write("Random coin value : Heads");

// Task6
var randomNumber = Math.random()*100;
if(Math.round(randomNumber) != 0)
    document.write("Random number between 1 and 100 : "+Math.round(randomNumber));

// Task7
var weight = prompt("Enter your weight in kilograms ");
var index = weight.indexOf('k');
var  new_weight = weight.split('k');
    if(weight.slice(index) == "kgs" || weight.slice(index) == "kilograms")
    {   
        
        document.write("The weight of user is "+new_weight[0]+"kilograms");
    }
    else
        document.write("The weight of user is "+new_weight[0]+"kilograms");

// Task8
var guessNumber = prompt("Enter a number between 1 and 10 ");
var randomNumber = Math.random()*10;
var secretNumber = Math.round(randomNumber);
if(Math.round(secretNumber) != 0)
{
    if(secretNumber == guessNumber)
        document.write("Congratulations, You Guess Right Number! ");
    else
        document.write("Try gain!");
}
else
        document.write("Try gain!"); 

// chapter26-30 ends here

// chapter31-34 starts from here

// Task1
var dt = new Date();
document.write(dt);

// Task2
var dt = new Date();
var months_arr = ["january","febrary","march","april","may","june","july","august","september","octobar","novembar","december"];
var currentMonth = dt.getMonth();
document.write("Current month : "+months_arr[currentMonth]);

// Task3
var dt = new Date();
            var days_arr = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
            var currentDay = dt.getDay();
            if(days_arr[currentDay] == "sunday")
                alert("Today is Sun");
            else if(days_arr[currentDay] == "monday")
                alert("Today is Mon");
            else if(days_arr[currentDay] == "tuesday")
                alert("Today is Tue");
            else if(days_arr[currentDay] == "wednesday")
                alert("Today is Wed");
            else if(days_arr[currentDay] == "thrusday")
                alert("Today is Thr");
            else if(days_arr[currentDay] == "friday")
                alert("Today is Fri");
            else if(days_arr[currentDay] == "saturday")
                alert("Today is Sat");
            else
                document.write("program end");

// Task4
var dt = new Date();
            var days_arr = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
            var currentDay = dt.getDay();
            if(days_arr[currentDay] == "sunday" || days_arr[currentDay] == "saturday")
                document.write("It’s Fun day");
            else
                document.write("Today is working day");var dt = new Date();
                var days_arr = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
                var currentDay = dt.getDay();
                if(days_arr[currentDay] == "sunday" || days_arr[currentDay] == "saturday")
                    document.write("It’s Fun day");
                else
                    document.write("Today is working day");

// Task5
var dt = new Date();
            var currentDate = dt.getDate();
            if(currentDate <16)
                document.write("First fifteen days of the month");
            else
                document.write("Last days of the month");

// Task6
var dt = new Date();
var elapsedMilliseconds = dt.getTime();
var elapsedMinutes = elapsedMilliseconds/(1000*60*60);
document.write("Current Date : "+dt);
document.write("<br>Elapsed milliseconds since January 1 , 1970 : "+elapsedMilliseconds);
document.write("<br>Elapsed milliseconds since January 1 , 1970 : "+Math.floor(elapsedMinutes));


// Task7
var dt = new Date();
var currentHours = dt.getHours()
var currentMinutes = dt.getMinutes()
var currentSeconds = dt.getSeconds();

if(currentHours < 12)
    alert("Its AM");
else
    alert("Its PM");

document.write("Current Time " + currentHours+":"+ currentMinutes+":"+ currentSeconds);

// Task8
var laterDate = new Date("Dec 31,2020");

            document.write("Later date : " + laterDate);

// Task9
var eairlerDate = new Date("april 25,2020");
            var currentDate = new Date();
            var diff = currentDate.getTime() - eairlerDate.getTime();
            var diffDays = Math.round(diff/(1000*60*60*24));
            document.write(diffDays+" days have passed since 1st Ramdan, 2020");var eairlerDate = new Date("april 25,2020");
            var currentDate = new Date();
            var diff = currentDate.getTime() - eairlerDate.getTime();
            var diffDays = Math.round(diff/(1000*60*60*24));
            document.write(diffDays+" days have passed since 1st Ramdan, 2020");

// Task10
var eairlerDate = new Date("january 1,2020");
var currentDate = new Date();
var diff = currentDate.getTime() - eairlerDate.getTime();
var diffSeconds = Math.round(diff/(1000*60));
document.write(" On reference date "+currentDate+", <br>"+diffSeconds+" seconds had passed since beginning of 2020");

// Task11
var currentDate = new Date();
var dt = currentDate.toString();
var currentHour = currentDate.getHours();
var oneHourLater = currentHour+1;
currentDate.setHours(oneHourLater);
document.write(" Current date : "+currentDate+"<br>1 hour ago, it was "+dt);

// Task12
var currentDate = new Date();
            var dt = currentDate.toString();
            var yearsBack = currentDate.getFullYear()-100; 
            currentDate.setFullYear(yearsBack);
            document.write(" Current date : "+dt+"<br>100 years back, it was "+currentDate);

// Task13
var age = prompt("Enter Your Age : ");
age = Number(age);
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var birthYear = currentYear - age ;

document.write("Your age is : "+age+"<br>Your birth year is "+birthYear);


// Task14
var name = prompt("Dear Cutomer, Enter Your Name : ");
            var months_arr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            var currentDate = new Date();
            var currentMonth = months_arr[currentDate.getMonth()];
            var perUnit = 16;
            var surcharge = 350;
            var numOfUnits = Math.random()*500;
            numOfUnits = Math.round(numOfUnits);

            document.write("<h1>K-Electric Bill</h1>");

            document.write("Customer Name : "+name+"<br>Month : "+currentMonth+"<br>Number of units : "+numOfUnits+"<br>Charges per unit : "+perUnit);

            document.write("<br><br>Net Amount payable(within Due Date) : "+numOfUnits*perUnit);
            document.write("<br>"+"Late Payment surcharge :  "+surcharge);
            document.write("<br>"+"Gross Amount payable(after Due Date) :  "+(numOfUnits*perUnit+surcharge)); var name = prompt("Dear Cutomer, Enter Your Name : ");
            var months_arr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            var currentDate = new Date();
            var currentMonth = months_arr[currentDate.getMonth()];
            var perUnit = 16;
            var surcharge = 350;
            var numOfUnits = Math.random()*500;
            numOfUnits = Math.round(numOfUnits);

            document.write("<h1>K-Electric Bill</h1>");

            document.write("Customer Name : "+name+"<br>Month : "+currentMonth+"<br>Number of units : "+numOfUnits+"<br>Charges per unit : "+perUnit);

            document.write("<br><br>Net Amount payable(within Due Date) : "+numOfUnits*perUnit);
            document.write("<br>"+"Late Payment surcharge :  "+surcharge);
            document.write("<br>"+"Gross Amount payable(after Due Date) :  "+(numOfUnits*perUnit+surcharge)); 
            
// chapter31-34 ends here

