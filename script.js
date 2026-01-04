const items = [
 {name:'اسپرسو سینگل',price:110000,cat:'بار قهوه',img:'images/coffee.jpg',recipe:'قهوه آسیاب شده، آب داغ},
 {name:'اسپرسو دابل',price:110000,cat:'بار قهوه',img:'images/coffee.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'لاته ماچا نارگیل',price:230000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'ماچا',price:170000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
 {name:'امریکانو سینگل',price:110000,cat:'بار قهوه',img:'images/coffee.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'امریکانو دابل',price:110000,cat:'بار قهوه',img:'images/coffee.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'لاته',price:150000,cat:'بار قهوه',img:'images/coffee.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'آیس لاته',price:150000,cat:'بار قهوه',img:'images/coffee.jpg',recipe:'قهوه آسیاب شده، آب داغ},
 {name:'لاته ماسالا',price:170000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'فراپاچینو',price:170000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'موکا',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'کارامل ماکیاتو',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'فندق ماکیاتو',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'وانیل ماکیاتو',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'لوتوس ماکیاتو',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'نارگیل ماکیاتو',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'آیس موکا',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'آیس کارامل',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'آیس فندق',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'آیس وانیل',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'آیس لوتوس',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'آیس نارگیل',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'یونانی',price:150000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'قهوه ترک',price:110000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ},
 {name:'چای لیوانی',price:75000,cat:'چای و دمنوش',img:'images/tea.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'چای سبز',price:120000,cat:'چای و دمنوش',img:'images/tea.jpg',recipe:'قهوه آسیاب شده، آب داغ},
       {name:'چای ترش',price:120000,cat:'چای و دمنوش',img:'images/tea.jpg',recipe:'قهوه آسیاب شده، آب داغ},
   {name:'چای مراکشی',price:120000,cat:'چای و دمنوش',img:'images/tea.jpg',recipe:'قهوه آسیاب شده، آب داغ},
   {name:'دمنوش بهارنارنج-به لیمو',price:120000,cat:'چای و دمنوش',img:'images/tea.jpg',recipe:'قهوه آسیاب شده، آب داغ},
     {name:'دمنوش گل گاو زبان',price:120000,cat:'چای و دمنوش',img:'images/tea.jpg',recipe:'قهوه آسیاب شده، آب داغ},
     {name:'دمنوش آرامش',price:130000,cat:'چای و دمنوش',img:'images/tea.jpg',recipe:'قهوه آسیاب شده، آب داغ},
     {name:'دمنوش سرماخوردگی',price:130000,cat:'چای و دمنوش',img:'images/tea.jpg',recipe:'قهوه آسیاب شده، آب داغ},
 {name:'200CC هات چاکلت',price:150000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'400CC هات چاکلت',price:200000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'200CC شیر ماسالا',price:140000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'400CC شیر ماسالا',price:190000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'200CC چای کرک',price:140000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'400CC چای کرک',price:190000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'200CC مارشمالو چاکلت',price:150000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'400CC مارشمالو چاکلت',price:200000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'200CC وایت چاکلت',price:140000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ},
  {name:'400CC وایت چاکلت',price:190000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ},
 {name:'آبمیوه',price:50000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ},
 {name:'شیک موز',price:70000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ},
 {name:'ساندویچ',price:120000,cat:'پیش غذا',img:'images/sandwich.jpg',recipe:'قهوه آسیاب شده، آب داغ},
 {name:'استیک',price:250000,cat:'غذا اصلی',img:'images/steak.jpg',recipe:'قهوه آسیاب شده، آب داغ},
 {name:'پنکیک',price:80000,cat:'صبحانه',img:'images/pancake.jpg',recipe:'قهوه آسیاب شده، آب داغ},
 {name:'چیزکیک',price:60000,cat:'کیک و دسر',img:'images/cheesecake.jpg',recipe:'قهوه آسیاب شده، آب داغ}
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
