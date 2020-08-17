class TableRow {
  constructor(data) {
    this.data = data;
  }

  create() {
    const tableRow = document.createElement('tr');
    tableRow.insertAdjacentHTML('beforeend', `
      <td class="table__cell table__cell_name">${this.data.name}</td>
      <td class="table__cell table__cell_type">${this.data.type}</td>
      <td><input class="table__cell table__cell_color" type="color" value="${this.data.color}"/></td>
      <button class="button button_delete"></button>
      <button class="button button_edit"></button>`);
    tableRow.classList.add('table__row');
    tableRow.draggable = true;
    return tableRow;
  }
}