// One day Time in ms (milliseconds)
const one_day=1000*60*60*24;

//Listen for submit
document.getElementById('bday-form').addEventListener('submit', displayLoader);

function displayLoader(e){
  //show loader gif
  document.getElementById('loading').style.display = 'block';
      //set two second display time
      setTimeout(calculateResults, 1000);

  e.preventDefault();
};

function calculateResults() {
  // hide loader
  document.getElementById('loading').style.display = 'none';
  //show results
  document.getElementById('results').style.display = 'block';

  // declare variable of today using 'new Date()' function, which is preset
  today = new Date();
  // user input month value
  const month = document.getElementById('month').value;

  // user input day value
  const day = document.getElementById('day').value;
  // converts user input into month-day-current year, but only works for remainder of the year: only works if birthday hasn't passed yet
  const bDay=new Date(today.getFullYear(), month, day);

  // to calculate birthday if current month and birthday has not passed
  if (today.getMonth()==month && today.getDate()<day) {
    // concatenate two strings with final math calculation between them
    let message = ("Congratulations, you have " + Math.ceil((bDay.getTime()-today.getTime())/(one_day))+ " day(s) left until your next birthday!");
    
    
    // final answer is returned to the h5 element within html page
    document.querySelector('.before').style.display = 'none';
    document.querySelector("h5").innerHTML = message;
    document.querySelector("body").style.backgroundImage = "url(images/congrats.jpg)";
  }

  // clears negative value within current month
  if (today.getMonth()==month && today.getDate()>day)
  {
  bDay.setFullYear(bDay.getFullYear()+1);

    // concatenate two strings with final math calculation between them
    let message = ("Congratulations, you have " + Math.ceil((bDay.getTime()-today.getTime())/(one_day))+ " day(s) left until your next birthday!");
    
    
    // final answer is returned to the h5 element within html page
    document.querySelector('.before').style.display = 'none';
    document.querySelector("h5").innerHTML = message;
    document.querySelector("body").style.backgroundImage = "url(images/congrats.jpg)";
  }

  // To Calculate days until birthday if birthday has passed already
  if (today.getMonth() > month && day !== ''){
    bDay.setFullYear(bDay.getFullYear()+1);

    // concatenate two strings with final math calculation between them
    let message = ("Congratulations, you have " + Math.ceil((bDay.getTime()-today.getTime())/(one_day))+ " day(s) left until your next birthday!");


    // final answer is returned to the h5 element within html page
    document.querySelector('.before').style.display = 'none';
    document.querySelector("h5").innerHTML = message;
    document.querySelector("body").style.backgroundImage = "url(images/congrats.jpg)";
  }
  if (day === '') {
    showError();
  }
}




//Show error function
function showError(){
  //hide results
  document.getElementById('results').style.display = 'none';
  //hide loader 
  document.getElementById('loading').style.display = 'none';


  //create a div
  const errorDiv = document.createElement('div');
  const textNode = document.createTextNode('Check numbers for error');
  //create text node and append to the div
  errorDiv.appendChild(textNode);
  //add a class to the div
  errorDiv.className = 'alert alert-danger';

    //get elements
    const before = document.querySelector('.before');
    const heading = document.querySelector('.heading');

    //insert error above heading
    before.insertBefore(errorDiv, heading);
      //clear error after 3 seconds
      setTimeout(clearError, 3000);
}

//clear error function
function clearError(){
  document.querySelector('.alert').remove();
}