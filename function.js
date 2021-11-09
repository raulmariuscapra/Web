function factorial(numar)
{
    if(numar>1)
    {
        return numar*factorial(numar-1);
    }
    else
    {
        return 1;
    }
}

var numarul;

numarul=prompt("Introdu un numar pentru a ii face factorialul");

alert(factorial(numarul));