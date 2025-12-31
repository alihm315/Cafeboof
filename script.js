let cart = [];

function filterItems(category) {
  const items = document.querySelectorAll('.item');
  const buttons = document.querySelectorAll('.categories button');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  items.forEach(item => {
    if (category === 'all') {
      item.style.display = 'block';
    } else {
      if (item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item) => {
    total += item.price;
    const div = document.createElement('div');
    div.textContent = `${item.name} - ${item.price.toLocaleString()} تومان`;
    cartItems.appendChild(div);
  });

  cartTotal.textContent = `جمع کل: ${total.toLocaleString()} تومان`;
}

// ثبت سفارش (فعلاً هشدار)
document.getElementById('checkout').addEventListener('click', () => {
  const name = document.getElementById('customer-name').value;
  const table = document.getElementById('table-number').value;

  if (!name || !table || cart.length === 0) {
    alert('لطفاً نام، شماره میز و آیتم‌ها را وارد کنید!');
    return;
  }

  alert(`سفارش شما ثبت شد!\nنام: ${name}\nمیز: ${table}\nتعداد آیتم‌ها: ${cart.length}`);
  cart = [];
  updateCart();
});
