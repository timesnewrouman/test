class MainTable {
  constructor(container, tableCreate) {
    this.container = container;
    this.tableCreate = tableCreate;
  }

  addRow(data) {
    const row = this.tableCreate(data)
    this.container.appendChild(row.create());
  }

  render(array) {
    for (const element of array) {
      const tableRow = {
        name: element.name,
        type: element.type,
        color: element.color
      };
      mainTable.addRow(tableRow);
    }
  }
}