const menu = [
  { name: "Pad Thai", price: 50, allergy: "peanuts" },
  { name: "Tom Yum Soup", price: 70, allergy: "shellfish" },
  { name: "Fried Rice", price: 45, allergy: "none" }
];

const menuDiv = document.getElementById("menu");
const orderList = document.getElementById("orderList");
const totalSpan = document.getElementById("total");

let total = 0;

menu.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "menu-item";
  div.innerHTML = `
    <h3>${item.name}</h3>
    <p>Price: ${item.price} ฿</p>
    <p>Allergy: ${item.allergy}</p>
    <button onclick="addToOrder(${index})">Add to Order</button>
  `;
  menuDiv.appendChild(div);
});

function addToOrder(index) {
  const item = menu[index];
  const li = document.createElement("li");
  li.textContent = `${item.name} - ${item.price} ฿`;
  orderList.appendChild(li);
  total += item.price;
  totalSpan.textContent = total;
}
