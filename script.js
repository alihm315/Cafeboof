const menuItems = [
  {
    name: "لاته",
    price: 85000,
    image: "images/latte.jpg"
  },
  {
    name: "اسپرسو",
    price: 60000,
    image: "images/espresso.jpg"
  },
  {
    name: "کیک شکلاتی",
    price: 65000,
    image: "images/cake.jpg"
  }
];

let cart = [];

const menuDiv = document.getElementById("menu");

menuItems.forEach((item, index) => {
  menuDiv.innerHTML += `
    <div class="card">
      <img src="${item.image}">
      <h3>${item.name}</h3>
      <p>${item.price.toLocaleString()} تومان</p>
      <button onclick="addToCart(${index})">افزودن</button>
    </div>
  `;
});

function addToCart(index) {
  cart.push(menuItems[index]);
  alert("به سفارش اضافه شد");
}

function submitOrder() {
  if (cart.length === 0) {
    alert("سبد سفارش خالی است");
    return;
  }

  const name = document.getElementById("customerName").value;
  const table = document.getElementById("tableNumber").value;

  let orderText = `
    <div class="card">
      <h3>سفارش جدید</h3>
      <p>نام: ${name || "-"}</p>
      <p>میز: ${table || "-"}</p>
      <ul>
        ${cart.map(i => `<li>${i.name} - ${i.price.toLocaleString()} تومان</li>`).join("")}
      </ul>
    </div>
  `;

  document.getElementById("orders").innerHTML = orderText;
  cart = [];
}
