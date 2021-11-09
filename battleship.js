var location1=3;
var location1hit=false;
var location2=4;
var location2hit=false;
var location3=5;
var location3hit=false;

var guess;
var guesses=0;
var hits=0;

var isSunk=false;

while(!isSunk)
{
    guess=prompt("Ready, aim, set, fire! (enter a number from 0-6):");
    if(guess<0 || guess>6)
    {
        alert("Enter a valid number(from 0 to 6)");
    }
    else
    {
        guesses++;
        if(guess == location1 && !location1hit)
        {
            hits++;
            alert("Hit:/");
            location1hit=true;
        }
        else if(guess==location1 && location1hit)
        {
            alert("Already hit so i will count it as a miss>:)");
        }
        if(guess== location2 && !location2hit)
        {
            hits++;
            alert("Hit:/");
            location2hit=true;
        }
        else if(guess==location2 && location2hit)
        {
            alert("Already hit so i will count it as a miss>:)");
        }
        if(guess== location3 && !location3hit)
        {
            hits++;
            alert("Hit:/");
            location3hit=true;
        }
        else if(guess==location3 && location3hit)
        {
            alert("Already hit so i will count it as a miss>:)");
        }
        if(guess!=location1 && guess!=location2 && guess!=location3)
        {
            alert("Miss!:P");
        }
        if(hits==3)
        {
            isSunk=true;
            alert("You sank my battleship and it took you "+ guesses +" guesses to do that good job!Your precentage was " + 3/guesses + " (for a rematch you can refresh the page)");
        }
    }
}

