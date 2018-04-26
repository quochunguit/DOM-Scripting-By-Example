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
  confirmedCheckbox.title = 'Check if the guest confirmed';

  //create a remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.title = 'Click here to remove the guest';

  //append child label, checkbox & remove button to list
  li.appendChild(confirmedLabel);
  confirmedLabel.appendChild(confirmedCheckbox);
  li.appendChild(removeButton);

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

//event listener on Remove Button
ul.addEventListener('click', (e) => {
  if(event.target.tagName == 'BUTTON') {
    removeClickedLi = event.target.parentNode;
    ul.removeChild(removeClickedLi); 

  }
});
