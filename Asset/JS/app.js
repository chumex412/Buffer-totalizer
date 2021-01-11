
const soluteMass = document.getElementById('mass');
// UI variables
const molarConc = document.getElementById('molar-conc');
const molarMass = document.getElementById('molar-mass');
const volume = document.getElementById('volume');


// Event
handleEvent();

function handleEvent() {
  document.getElementById('form').addEventListener('submit',(e) => {

    // Show loader
    document.querySelector('.card-loader').style.display = 'block';
    
    //hide result
    document.querySelector('.card-footer').style.display = 'none';

    // Show result after 2mins
    setTimeout(getBufferValues, 2000);

    e.preventDefault();
  });
}

function getBufferValues() {

  const amount = parseFloat(molarConc.value) / 1000;
  const mass = parseFloat(molarMass.value) * amount;

  if (isFinite(mass)) {
    getAmount(mass, volume.value);

    // Hide loader
    document.querySelector('.card-loader').style.display = 'none';
        
    //Show result
    document.querySelector('.card-footer').style.display = 'block';
  } else {
    showErrorMessage('Please Invalid Input');
  }
  
}

function getAmount(m, v) {
  const saltMass = ((m * v) / 1000).toFixed(4);
  soluteMass.value = saltMass; 
  document.querySelector('.volume').innerHTML = volume.value + 'ml';
  document.querySelector('.mass').innerHTML = saltMass + 'grams'
}

function showErrorMessage(error) {
  // hide loader
  document.querySelector('.card-loader').style.display = 'none';
    
  //hide result
  document.querySelector('.card-footer').style.display = 'none';

  const container = document.querySelector('.container');

  //create Element
  const div = document.createElement('div');
  // Add className
  div.className = 'error'
  //Create and append text
  div.appendChild(document.createTextNode(error));
  //Prepend 
  container.prepend(div);

  // Clear error after 3mins
  setTimeout(clearErrorMessage, 3000);
}

function clearErrorMessage() {
  document.querySelector('.error').remove();
}