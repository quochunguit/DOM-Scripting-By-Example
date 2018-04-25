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

  const confirmedLabel = document.createElement('label');
  confirmedLabel.textContent = 'Confirmed';
  const confirmedCheckbox = document.createElement('input');
  confirmedCheckbox.type = 'checkbox';

  li.appendChild(confirmedLabel);
  confirmedLabel.appendChild(confirmedCheckbox);

});

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