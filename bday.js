// One day Time in ms (milliseconds)
var one_day=1000*60*60*24;

// declare variable of today using 'new Date()' function, which is preset
today = new Date();

// user input sets birth month via prompt input window
let month = prompt('What month were you born?');
// create an array of all possible months, in chronological order
  monthsArray = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];


// pass users birth month input into the monthsArray to convert month name into an index number in order to apply mathematics
  monthNumber = monthsArray.indexOf(month.toLowerCase());

// user input sets birth day via prompt input window
let day = prompt(`On what day in ${month} were you born?`);

    // converts user input into month-day-current year, but only works for remainder of the year: only works if birthday hasn't passed yet
    bDay=new Date(today.getFullYear(), monthNumber, day);
    // clears negative value within current month
    if (today.getMonth()==monthNumber && today.getDate()>day)
    {
    bDay.setFullYear(bDay.getFullYear()+1);
    }

// To Calculate days until birthday if birthday has passed already
if (today.getMonth() > monthNumber){
  bDay.setFullYear(bDay.getFullYear()+1);
}

// concatenate two strings with final math calculation between them
let message = ("Congratulations, you have " + Math.ceil((bDay.getTime()-today.getTime())/(one_day))+ " days left until your birthday!");


// final answer is returned to the h1 element within html page
document.querySelector("h1").innerHTML = message;
document.querySelector(".image").innerHTML = `
  <img src="images/congrats.jpeg">
`
