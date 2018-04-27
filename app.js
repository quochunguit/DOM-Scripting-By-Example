const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputNameDiv = document.createElement('div');
  const text = input.value;
  input.value = '';
  const li = document.createElement('li');
  li.appendChild(inputNameDiv);
  inputNameDiv.textContent = text;
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

  //create a Edit button
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.title = 'Click to edit the name';



  //append child label, checkbox & remove button to list
  li.appendChild(confirmedLabel);
  confirmedLabel.appendChild(confirmedCheckbox);
  li.appendChild(editButton);
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
  if(event.target.textContent === 'Remove') { //handle for REMOVE button
    removeClickedLi = event.target.parentNode;
    ul.removeChild(removeClickedLi); 

  } else if (event.target.textContent === 'Edit') { //handle for EDIT button
    const liEditButtonClicked = event.target;
    const parentNodeOf_liEditButtonClicked = liEditButtonClicked.parentNode;
    const a = parentNodeOf_liEditButtonClicked.firstElementChild;
    //console.log(a);
    const b = a.tagName;
    //console.log(b);
    const editName = document.createElement('input');
    parentNodeOf_liEditButtonClicked.insertBefore(editName, a); 
    parentNodeOf_liEditButtonClicked.removeChild(a);
    editName.placeholder = a.textContent;
    liEditButtonClicked.textContent = 'Save';

    liEditButtonClicked.addEventListener('click', (e) => { //hander for save button
      if(event.target.textContent === 'Save') {
        const newName = document.createElement('div');
        parentNodeOf_liEditButtonClicked.insertBefore(newName, a);
        parentNodeOf_liEditButtonClicked.removeChild(a);
        newName.textContent = editName.value;
        liEditButtonClicked.textContent = 'Edit';  

      }
    
    });



  }
  
});
