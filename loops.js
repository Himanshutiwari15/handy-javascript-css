let i = 0;
while (i < 3) //While loop runs as long as the condition is evaluated to true
{
  console.log(i);
  i++;
}


let i = 0;
do { //Do while loop runs as long as the condition is evaluated to true BUT will also run once at the beginning no matter the condition
  console.log(i);
  i++;
} while (i < 3);


for (let i = 0; i < 3; i++) { //For loop is a loop that automatically increments itself to a fixed number.
  alert(i);
}