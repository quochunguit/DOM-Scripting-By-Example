const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = '';
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);

  //creating a label
  const confirmedLabel = document.createElement('label');
  confirmedLabel.textContent = 'Confirmed';
  //create a checkbox
  const confirmedCheckbox = document.createElement('input');
  confirmedCheckbox.type = 'checkbox';

  //create a remove button


  //append child label & checkbox to list
  li.appendChild(confirmedLabel);
  confirmedLabel.appendChild(confirmedCheckbox);

});

//event listener on Confrimed checkbox
ul.addEventListener('change', (e) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const parentLabel = checkbox.parentNode.parentNode;
  if(checked) {
    parentLabel.className = 'responded';

  } else {
    parentLabel.className = '';

  }

  
});
