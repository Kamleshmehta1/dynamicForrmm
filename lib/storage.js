class Storage {
  constructor(storageId, objData, tableId) {
    // Pass storageId to save json string data after each operation in localStorage
    // local storageId is important to retrieve old saved data
    this.fetchData = this.fetchData(storageId, objData, tableId);
  }
  // create methods to perform operations like save/edit/delete/add data

  setLocalStorage(storageId, data) {
    console.log("set");
    localStorage.setItem(storageId, JSON.stringify(data));
  }

  getLocalStorage(storageId) {
    return JSON.parse(localStorage.getItem(storageId));
  }

  removeLocalStorage(storageId) {
    localStorage.removeItem(storageId);
  }

  myMethod(){
    return "storage";
  }

  fetchData(storageId, objData, tableId) {
    let globalArr;
    this.getLocalStorage(storageId) == null
      ? (globalArr = [])
      : (globalArr = this.getLocalStorage(storageId));
    globalArr.push(objData);
    // this.setLocalStorage(storageId, globalArr); //setting data to localStorage
    globalArr ? new Table(storageId, objData, tableId) : null;
  }
}
