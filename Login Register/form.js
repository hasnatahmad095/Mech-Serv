function displayItems() {
  let items = "";
  JSON.parse(localStorage.getItem("items")).forEach((element) => {
    items += `
        <li class="table-row">
        <div class="col col-1" data-label="Id">${element.idObj}</div>
        <div class="col col-2" data-label="User Name">${element.userNameObj}</div>
        <div class="col col-3" data-label="Email">${element.nameObj}</div>
        <div class="col col-3" data-label="Phone Number">${element.numberObj}</div>
        <div class="col col-4" data-label="Password">${element.pwObj}</div>
        </li>
        `;
  });

  document.querySelector(".responsive-table-js").innerHTML = items;
}
displayItems();
