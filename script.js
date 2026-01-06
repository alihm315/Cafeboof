let cart = [];

const menuItems = document.querySelectorAll('.item');
const cartItemsDiv = document.getElementById('cart-items');
const cartSubtotalDiv = document.getElementById('cart-subtotal');
const cartTaxDiv = document.getElementById('cart-tax');
const cartTotalDiv = document.getElementById('cart-total');

const addButtons = document.querySelectorAll('.add-btn');
const categoryButtons = document.querySelectorAll('.categories button');

const cartIcon = document.getElementById('cart-icon');
const cartPopup = document.getElementById('cart-popup');
const closeCartBtn = document.getElementById('close-cart');
const cartCount = document.getElementById('cart-count');

// دسته بندی
categoryButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const category = e.target.dataset.category;
    categoryButtons.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');

    menuItems.forEach(item => {
      item.style.display =
        category === 'all' || item.classList.contains(category)
          ? 'block'
          : 'none';
    });
  });
});

// افزودن به سبد
addButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const item = e.target.closest('.item');
    const name = item.querySelector('h3').textContent;
    const price = parseInt(item.querySelector('.price').dataset.price);

    const existing = cart.find(i => i.name === name);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ name, price, qty: 1 });
    }
    updateCart();
  });
});

// آپدیت سبد
function updateCart() {
  cartItemsDiv.innerHTML = '';
  let subtotal = 0;
  let count = 0;

  cart.forEach((item, index) => {
    subtotal += item.price * item.qty;
    count += item.qty;

    const row = document.createElement('div');
    row.className = 'cart-row';

    row.innerHTML = `
      <span>${item.name} × ${item.qty}</span>
      <div>
        <button onclick="changeQty(${index},-1)">−</button>
        <button onclick="changeQty(${index},1)">+</button>
      </div>
    `;
    cartItemsDiv.appendChild(row);
  });

  const tax = Math.round(subtotal * 0.10);
  const total = subtotal + tax;

  cartSubtotalDiv.textContent = `جمع آیتم‌ها: ${subtotal.toLocaleString()} تومان`;
  cartTaxDiv.textContent = `ارزش افزوده (۱۰٪): ${tax.toLocaleString()} تومان`;
  cartTotalDiv.textContent = `جمع کل فاکتور: ${total.toLocaleString()} تومان`;

  cartCount.textContent = count;
}

function changeQty(index, val) {
  cart[index].qty += val;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  updateCart();
}

// باز و بسته شدن سبد
cartIcon.onclick = () => cartPopup.classList.toggle('hidden');
closeCartBtn.onclick = () => cartPopup.classList.add('hidden');

// ثبت سفارش
document.getElementById('checkout').onclick = () => {
  const name = document.getElementById('customer-name').value.trim();
  const table = document.getElementById('table-number').value.trim();
  const note = document.getElementById('customer-note').value.trim();

  if (!name || !table || cart.length === 0) {
    alert('نام، شماره میز و آیتم‌ها را کامل کنید');
    return;
  }

  alert(
`سفارش ثبت شد ✅
نام: ${name}
میز: ${table}
توضیحات: ${note || '—'}
`
  );

  cart = [];
  updateCart();
  cartPopup.classList.add('hidden');
};
