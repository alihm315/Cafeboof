let cart = [];

const menuItems = document.querySelectorAll('.item');
const cartItemsDiv = document.getElementById('cart-items');
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
  let total = 0;
  let count = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;
    count += item.qty;

    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.alignItems = 'center';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = `${item.name} × ${item.qty}`;

    const controls = document.createElement('div');

    const minus = document.createElement('button');
    minus.textContent = '−';
    minus.onclick = () => {
      item.qty--;
      if (item.qty === 0) cart.splice(index, 1);
      updateCart();
    };

    const plus = document.createElement('button');
    plus.textContent = '+';
    plus.onclick = () => {
      item.qty++;
      updateCart();
    };

    controls.appendChild(minus);
    controls.appendChild(plus);

    row.appendChild(nameSpan);
    row.appendChild(controls);
    cartItemsDiv.appendChild(row);
  });

  // ارزش افزوده 10٪
  let tax = Math.round(total * 0.1);
  let finalTotal = total + tax;

  cartTotalDiv.innerHTML = `جمع آیتم‌ها: ${total.toLocaleString()} تومان
  <br>-------------------<br>
  ارزش افزوده (10٪): ${tax.toLocaleString()} تومان
  <br>جمع کل فاکتور: ${finalTotal.toLocaleString()} تومان`;

  cartCount.textContent = count;
}

// باز و بسته شدن سبد
cartIcon.onclick = () => {
  cartPopup.classList.toggle('hidden');
};
closeCartBtn.onclick = () => {
  cartPopup.classList.add('hidden');
};

// ثبت سفارش
document.getElementById('checkout').onclick = () => {
  const name = document.getElementById('customer-name').value.trim();
  const table = document.getElementById('table-number').value.trim();

  if (!name || !table || cart.length === 0) {
    alert('نام، شماره میز و آیتم‌ها را کامل کنید');
    return;
  }

  let total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  let tax = Math.round(total * 0.1);
  let finalTotal = total + tax;

  alert(
    `سفارش ثبت شد ✅
نام: ${name}
میز: ${table}
تعداد آیتم: ${cart.reduce((s,i)=>s+i.qty,0)}
جمع کل: ${finalTotal.toLocaleString()} تومان`
  );

  cart = [];
  updateCart();
  cartPopup.classList.add('hidden');
  function toggleRecipe(el){
  el.nextElementSibling.classList.toggle('show');
};
