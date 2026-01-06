const items = [
 {name:'اسپرسو سینگل',price:110000,cat:'بار قهوه',img:'images/coffee.jpg',recipe:'یک شات عصاره اسپرسو'},
  {name:'اسپرسو دابل',price:110000,cat:'بار قهوه',img:'images/coffee.jpg',recipe:'دو شات عصاره اسپرسو'},
 {name:'لاته ماچا نارگیل',price:250000,cat:'بار قهوه',img:'images/latte.jpg',recipe:' دو گرم ماچا ، شیر، سیروپ نارگیل'},
 {name:'لاته ماچا',price:250000,cat:'بار قهوه',img:'images/latte.jpg',recipe:' دو گرم ماچا ، شیر '},
 {name:'ماچا',price:170000,cat:'بار قهوه',img:'images/latte.jpg',recipe:' دو گرم ماچا، آب داغ'},
 {name:'امریکانو سینگل',price:110000,cat:'بار قهوه',img:'images/coffee.jpg',recipe:'یک شات عصاره اسپرسو، آب جوش'},
 {name:'امریکانو دابل',price:110000,cat:'بار قهوه',img:'images/coffee.jpg',recipe:'دو شات عصاره اسپرسو، آب جوش'},
 {name:'لاته',price:150000,cat:'بار قهوه',img:'images/coffee.jpg',recipe:'یک شات اسپرسو، شیر'},
 {name:'آیس لاته',price:160000,cat:'بار قهوه',img:'images/coffee.jpg',recipe:'دو شات اسپرسو، شیر، یخ'},
 {name:'لاته ماسالا',price:170000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'پودر ماسالا، شیر، یک شات اسپرسو'},
 {name:'فراپاچینو',price:170000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'شیر، سیروپ کارامل، دو شات اسپرسو، یخ بلند شده'},
 {name:'موکا',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'کارامل ماکیاتو',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'فندق ماکیاتو',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'وانیل ماکیاتو',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'لوتوس ماکیاتو',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'نارگیل ماکیاتو',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'آیس موکا',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'آیس کارامل',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'آیس فندق',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'آیس وانیل',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'آیس لوتوس',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'آیس نارگیل',price:160000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'یونانی',price:150000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'قهوه ترک',price:110000,cat:'بار قهوه',img:'images/latte.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'چای لیوانی',price:75000,cat:'چای و دمنوش',img:'images/tea.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'چای سبز',price:120000,cat:'چای و دمنوش',img:'images/tea.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'چای ترش',price:120000,cat:'چای و دمنوش',img:'images/tea.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'چای مراکشی',price:120000,cat:'چای و دمنوش',img:'images/tea.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'دمنوش بهارنارنج-به لیمو',price:120000,cat:'چای و دمنوش',img:'images/tea.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'دمنوش گل گاو زبان',price:120000,cat:'چای و دمنوش',img:'images/tea.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'دمنوش آرامش',price:130000,cat:'چای و دمنوش',img:'images/tea.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'دمنوش سرماخوردگی',price:130000,cat:'چای و دمنوش',img:'images/tea.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'200CC هات چاکلت',price:150000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'400CC هات چاکلت',price:200000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'200CC شیر ماسالا',price:140000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'400CC شیر ماسالا',price:190000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'200CC چای کرک',price:140000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'400CC چای کرک',price:190000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'200CC مارشمالو چاکلت',price:150000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'400CC مارشمالو چاکلت',price:200000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'200CC وایت چاکلت',price:140000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'400CC وایت چاکلت',price:190000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'200CC شیر پسته گرم',price:200000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'400CC شیر پسته گرم',price:300000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'200CC شیر نوتلا',price:200000,cat:'نوشیدنی گرم',img:'images/hotchoco.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'نوشیدنی محصوص بوف',price:160000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'نوشیدنی محصوص علی',price:150000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'موهیتو',price:160000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
  {name:'رد موهیتو',price:160000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'لیموناد',price:150000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'پیناکولادا',price:150000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شیر موز',price:160000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
{name:'شیر موز قهوه',price:200000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شیر پسته',price:160000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'اسموتی توت فرنگی',price:180000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
  {name:'اسموتی استوایی',price:190000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'اسموتی ترش',price:180000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'اسموتی سیب لیمو',price:180000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'موکتل بلوبری',price:140000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'موکتل توت فرنگی',price:140000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شربت زعفران',price:140000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شربت گلاب',price:140000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شربت سکنجبین',price:140000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شربت بهارنارنج',price:140000,cat:'نوشیدنی سرد',img:'images/juice.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شیک نوتلا',price:195000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
  {name:'شیک کروسان',price:180000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شیک پسته',price:220000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شیک بیسکویت oreo',price:195000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شیک کره بادام زمینی',price:195000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شیک معجون',price:235000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شیک نوتلا کره بادام زمینی',price:230000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شیک وانیل',price:150000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شیک موز وانیل',price:180000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شیک شکلات',price:150000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شیک موز شکلات',price:180000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شیک اسپرسو',price:195000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شیک توت فرنگی',price:195000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شیک نوتلا توت فرنگی',price:230000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شیک ترش',price:180000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
  {name:'شیک موز بیسکویت مادر',price:210000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'شیک انرژی زا',price:195000,cat:'شیک',img:'images/milkshake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'سیب زمینی ساده',price:180000,cat:'پیش غذا',img:'images/sandwich.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
  {name:'سیب زمینی مخصوص بوف',price:320000,cat:'پیش غذا',img:'images/sandwich.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
  {name:'سیب زمینی با سس آلفردو',price:320000,cat:'پیش غذا',img:'images/sandwich.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'سیب زمینی با سس دیپ چیز',price:280000,cat:'پیش غذا',img:'images/sandwich.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'سیب زمینی با سس قارچ',price:280000,cat:'پیش غذا',img:'images/sandwich.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
  {name:'سالاد سزار',price:290000,cat:'پیش غذا',img:'images/sandwich.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
  {name:'فیله اضافی',price:80000,cat:'پیش غذا',img:'images/sandwich.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'کلاب',price:195000,cat:'پیش غذا',img:'images/sandwich.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'همبرگر',price:280000,cat:'غذا اصلی',img:'images/steak.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
  {name:'دابل برگر',price:380000,cat:'غذا اصلی',img:'images/steak.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'پاستا آلفردو',price:340000,cat:'غذا اصلی',img:'images/steak.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'استیک مرغ',price:310000,cat:'غذا اصلی',img:'images/steak.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'استیک گوشت 150 گرمی',price:600000,cat:'غذا اصلی',img:'images/steak.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'استیک گوشت 300 گرمی',price:950000,cat:'غذا اصلی',img:'images/steak.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'ساندویچ مرغ با سس قارچ',price:250000,cat:'غذا اصلی',img:'images/steak.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'ساندویچ هات داگ با سس قارچ',price:230000,cat:'غذا اصلی',img:'images/steak.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'املت 1 نفره',price:140000,cat:'صبحانه',img:'images/pancake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'املت 2 نفره',price:180000,cat:'صبحانه',img:'images/pancake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'املت سوسیس 1 نفره',price:180000,cat:'صبحانه',img:'images/pancake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'املت سوسیس 2 نفره',price:220000,cat:'صبحانه',img:'images/pancake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'سوسیس تخم مرغ 1 نفره',price:140000,cat:'صبحانه',img:'images/pancake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'سوسیس تخم مرغ 2 نفره',price:180000,cat:'صبحانه',img:'images/pancake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'کیک روز',price:130000,cat:'کیک و دسر',img:'images/cheesecake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
  {name:'آفوگاتو',price:180000,cat:'کیک و دسر',img:'images/cheesecake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
 {name:'بستنی لیوانی (شکلات-وانیل)',price:140000,cat:'کیک و دسر',img:'images/cheesecake.jpg',recipe:'قهوه آسیاب شده، آب داغ'},
];


let cart = [];
let currentCat = 'همه';
const cats = ['همه', ...new Set(items.map(i=>i.cat))];

function renderCategories(){
  const c = document.getElementById('categories');
  c.innerHTML='';
  cats.forEach(cat=>{
    const b = document.createElement('button');
    b.innerText = cat;
    if(cat===currentCat) b.classList.add('active');
    b.onclick = ()=>{currentCat=cat; renderMenu(); renderCategories();}
    c.appendChild(b);
  });
}

function renderMenu(){
  const m = document.getElementById('menu');
  m.innerHTML='';
  const search = document.getElementById('searchBox').value.toLowerCase();
  items.filter(i=> (currentCat==='همه'||i.cat===currentCat) && i.name.toLowerCase().includes(search))
  .forEach(i=>{
    m.innerHTML += `
      <div class="item">
        <img src="${i.img}">
        <h3>${i.name}</h3>
        <span>${i.price.toLocaleString()} تومان</span>

        <div class="recipe-toggle" onclick="toggleRecipe(this)">📄 رسپی</div>
        <div class="recipe-text">${i.recipe || ''}</div>

        <button onclick="addToCart('${i.name}',${i.price})">افزودن</button>
      </div>
    `;
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
      </div>
    `;
  });

  const tax = Math.round(sum*0.1);
  const total = sum + tax;

  t.innerHTML = `
    جمع کل: ${sum.toLocaleString()} تومان<br>
    ارزش افزوده 10٪: ${tax.toLocaleString()} تومان<br>
    جمع فاکتور: ${total.toLocaleString()} تومان
  `;
  countSpan.innerText = totalQty;
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
  const note=document.getElementById('cart-note').value.trim();
  if(!name || !table || cart.length===0){ alert('نام، شماره میز و آیتم‌ها را کامل کنید'); return; }
  alert(`سفارش ثبت شد ✅\nنام: ${name}\nمیز: ${table}\nتوضیحات: ${note}\nتعداد آیتم: ${cart.reduce((s,i)=>s+i.qty,0)}`);
  cart=[]; updateCart(); document.getElementById('cart-popup').classList.add('hidden');
}

function toggleRecipe(el){
  el.nextElementSibling.classList.toggle('show');
}

renderCategories();
renderMenu();
