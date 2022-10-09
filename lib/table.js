class Table {
  constructor(storageId, objData, tableContainerId) {
    // Pass tableContainerId to append table inside of HTML DIV element
    this.renderTable = this.renderTable(storageId, objData, tableContainerId);
  }
  // create methods/event to refresh table data, add data row, update data row, delete data row, etc
  renderTable(storageId, objData, tableContainerId) {
    console.log(tableContainerId);
    let data = JSON.parse(localStorage.getItem("mainData"));
    let table = document.createElement("table");
    let td;
    let tr;
    let flag = false;
    data.forEach((Obj) => {
      tr = document.createElement("tr");
      let tr1 = document.createElement("tr");
      for (let key in Obj) {
        if (!flag) {
          let th = document.createElement("th");
          th.innerHTML = key;
          tr1.appendChild(th);
        }
        td = document.createElement("td");
        console.log(Obj[key]);
        td.innerHTML = Obj[key];
        tr.appendChild(td);
      }
      flag = true;
      table.appendChild(tr1);
      table.appendChild(tr);
    });
    document.querySelector("#tableDiv").appendChild(table);
  }

  // handleDelete(e, id, storageId) {
  //   e.parentNode.parentNode.remove();
  //   let localData = JSON.parse(localStorage.getItem(storageId));
  //   console.log(localData);
  //   let updatedData = localData.filter((ele) => ele.id != id);
  //   localStorage.setItem(storageId, JSON.stringify(updatedData));
  // }
}
