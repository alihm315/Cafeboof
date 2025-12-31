let cart = [];

const menuItems = document.querySelectorAll('.item');
const cartItemsDiv = document.getElementById('cart-items');
const cartTotalDiv = document.getElementById('cart-total');
const addButtons = document.querySelectorAll('.add-btn');
const categoryButtons = document.querySelectorAll('.categories button');

const cartIcon = document.getElementById('cart-icon');
const cartPopup = document.getElementById('cart-popup');
const closeCartBtn = document.getElementById('close-cart');

// دسته بندی
categoryButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const category = e.target.getAttribute('data-category');
    categoryButtons.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');

    menuItems.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// افزودن به سبد
addButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const itemDiv = e.target.closest('.item');
    const name = itemDiv.querySelector('h3').textContent;
    const price = parseInt(itemDiv.querySelector('.price').dataset.price);
    cart.push({ name, price });
    updateCart();
  });
});

// بروز رسانی سبد
function updateCart() {
  cartItemsDiv.innerHTML = '';
  let total = 0;
  cart.forEach((i, index) => {
    total += i.price;
    const div = document.createElement('div');
    div.textContent = `${i.name} - ${i.price.toLocaleString()} تومان`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '❌';
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', () => {
      cart.splice(index, 1);
      updateCart();
    });

    div.appendChild(removeBtn);
    cartItemsDiv.appendChild(div);
  });

  cartTotalDiv.textContent = `جمع کل: ${total.toLocaleString()} تومان`;
  document.getElementById('cart-count').textContent = cart.length;
}

// باز و بسته کردن سبد
cartIcon.addEventListener('click', () => {
  cartPopup.classList.toggle('hidden');
});

closeCartBtn.addEventListener('click', () => {
  cartPopup.classList.add('hidden');
});

// ثبت سفارش
document.getElementById('checkout').addEventListener('click', () => {
  const name = document.getElementById('customer-name').value.trim();
  const table = document.getElementById('table-number').value.trim();
  if (!name || !table || cart.length === 0) {
    alert('لطفاً نام، شماره میز و آیتم‌ها را وارد کنید!');
    return;
  }
  alert(`سفارش شما ثبت شد!\nنام: ${name}\nمیز: ${table}\nتعداد آیتم‌ها: ${cart.length}`);
  cart = [];
  updateCart();
  cartPopup.classList.add('hidden');
});
