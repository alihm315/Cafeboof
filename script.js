const items = [
 {name:'قهوه ترک',price:85000,cat:'بار قهوه',img:'images/coffee.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'لاته',price:110000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'اسپرسو، شیر بخار داده شده، فوم شیر'},
 {name:'چای',price:40000,cat:'چای و دمنوش',img:'images/tea.jpg',recipe:'چای سیاه، آب داغ'},
 {name:'هات چاکلت',price:90000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'شکلات، شیر، خامه'},
 {name:'آبمیوه',price:50000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'میوه تازه، یخ'},
 {name:'شیک موز',price:70000,cat:'شیک',img:'images/milkshake.jpg',recipe:'موز، شیر، بستنی'},
 {name:'ساندویچ',price:120000,cat:'پیش غذا',img:'images/sandwich.jpg',recipe:'نان، مرغ، سبزیجات، سس'},
 {name:'استیک',price:250000,cat:'غذا اصلی',img:'images/steak.jpg',recipe:'گوشت استیک، نمک، فلفل'},
 {name:'پنکیک',price:80000,cat:'صبحانه',img:'images/pancake.jpg',recipe:'آرد، تخم مرغ، شیر، شکر'},
 {name:'چیزکیک',price:60000,cat:'کیک و دسر',img:'images/cheesecake.jpg',recipe:'پنیر، بیسکویت، شکر، کره'}
];

let cart = [];
let currentCat = 'همه';
const cats = ['همه', ...new Set(items.map(i=>i.cat))];

function renderCategories(){
  const c = document.getElementById('categories');
  c.innerHTML='';
  cats.forEach(cat=>{
    const b=document.createElement('button');
    b.innerText=cat;
    if(cat===currentCat) b.classList.add('active');
    b.onclick=()=>{currentCat=cat; renderMenu(); renderCategories();}
    c.appendChild(b);
  });
}

function renderMenu(){
  const m=document.getElementById('menu');
  m.innerHTML='';
  const search = document.getElementById('searchBox').value.toLowerCase();
  items.filter(i=> (currentCat==='همه'||i.cat===currentCat) && i.name.toLowerCase().includes(search))
  .forEach(i=>{
    m.innerHTML+=`
    <div class="item">
      <img src="${i.img}">
      <h3>${i.name}</h3>
      <span>${i.price.toLocaleString()} تومان</span>

      <div class="recipe-toggle" onclick="toggleRecipe(this)">📄 رسپی</div>
      <div class="recipe-text">${i.recipe || ''}</div>

      <button onclick="addToCart('${i.name}',${i.price})">افزودن</button>
    </div>`;
  });
}

function addToCart(name, price){
  const existing = cart.find(i=>i.name===name);
  if(existing) existing.qty++; else cart.push({name,price,qty:1});
  updateCart();
}

function updateCart(){
  const c = document.getElementById('cart-items');
  const t = document.getElementById('cart-total');
  const countSpan = document.getElementById('cart-count');
  c.innerHTML='';
  let sum=0, totalQty=0;

  cart.forEach((item,index)=>{
    sum+=item.price*item.qty;
    totalQty+=item.qty;
    c.innerHTML+=`
    <div class="cart-item">
      ${item.name}
      <div>
        <button onclick="changeQty(${index},-1)">-</button>
        ${item.qty}
        <button onclick="changeQty(${index},1)">+</button>
      </div>
    </div>`;
  });

  // ارزش افزوده 10٪
  const tax = Math.round(sum*0.1);
  const total = sum + tax;

  t.innerHTML = `
    جمع کل: ${sum.toLocaleString()} تومان<br>
    ارزش افزوده 10٪: ${tax.toLocaleString()} تومان<br>
    جمع فاکتور: ${total.toLocaleString()} تومان
  `;
  countSpan.innerText=totalQty;
}

function changeQty(index,d){
  cart[index].qty+=d;
  if(cart[index].qty<=0) cart.splice(index,1);
  updateCart();
}

document.getElementById('cart-icon').onclick=()=>document.getElementById('cart-popup').classList.toggle('hidden');
document.getElementById('close-cart').onclick=()=>document.getElementById('cart-popup').classList.add('hidden');

document.getElementById('checkout').onclick=()=>{
  const name=document.getElementById('customer-name').value.trim();
  const table=document.getElementById('table-number').value.trim();
  if(!name || !table || cart.length===0){ alert('نام، شماره میز و آیتم‌ها را کامل کنید'); return; }
  alert(`سفارش ثبت شد ✅\nنام: ${name}\nمیز: ${table}\nتعداد آیتم: ${cart.reduce((s,i)=>s+i.qty,0)}`);
  cart=[]; updateCart(); document.getElementById('cart-popup').classList.add('hidden');
}

// تابع باز/بسته کردن رسپی
function toggleRecipe(el){
  el.nextElementSibling.classList.toggle('show');
}

renderCategories();
renderMenu();
