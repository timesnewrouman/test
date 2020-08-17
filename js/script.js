const container = document.querySelector('.table');
const popupAdd = document.querySelector('.popup.popup_add');
const popupEdit = document.querySelector('.popup.popup_edit');
const buttonAdd = document.querySelector('.button.button_add');
const formAdd = document.forms.add;
const formEdit = document.forms.edit;
const abc = document.querySelector('.abc');

const createCard = (args) => new TableRow(args);
const mainTable = new MainTable(container, createCard);

buttonAdd.addEventListener('click', function () {
  formAdd.reset();
  const popup = new Popup(popupAdd);
  popup.open();
});

formAdd.addEventListener('submit', function (event) {
  event.preventDefault();
  const data = {
    name: formAdd.elements.name.value,
    type: formAdd.elements.type.value,
    color: formAdd.elements.color.value
  };
  mainTable.addRow(data);
  const popup = new Popup(popupAdd);
  popup.close();
  newRow = container.lastChild;
  newRow.addEventListener('dragstart', handleDragStart, false);
  newRow.addEventListener('dragover', handleDragOver, false);
  newRow.addEventListener('drop', handleDrop, false);
  newRow.addEventListener('dragend', handleDragEnd, false);
});

container.addEventListener('click', function (event) {
  if (event.target.classList.contains('button_edit')) {
    let name = event.target.parentElement.querySelector('.table__cell_name');
    let type = event.target.parentElement.querySelector('.table__cell_type');
    let color = event.target.parentElement.querySelector('.table__cell_color');
    formEdit.elements.name.value = name.textContent;
    formEdit.elements.type.value = type.textContent;
    formEdit.elements.color.value = color.value;
    const popup = new Popup(popupEdit);
    popup.open();
    formEdit.addEventListener('submit', function (event) {
      event.preventDefault();
      name.textContent = formEdit.elements.name.value
      type.textContent = formEdit.elements.type.value;
      color.value = formEdit.elements.color.value;
      popup.close();
    }, { once: true });
  }
});

container.addEventListener('click', function (event) {
  if (event.target.classList.contains('button_delete')) {
    const tableRow = event.target.closest('.table__row');
    tableRow.parentElement.removeChild(tableRow);
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  let items = document.querySelectorAll('.table__row');
  items.forEach(function (item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
  });
});

mainTable.render(initialData);