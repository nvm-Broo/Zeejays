var WHATSAPP_NUMBER = '923287209079';

var MENU = [
  {
    id:'rice', label:'Rice & biryani', note:'Priced per kg unless noted.',
    items:[
      {id:'r1', name:'Mutton Biryani', price:2600, unit:'/kg', img:'https://nvm-broo.github.io/Zeejays/sub/rice/muttonbir.jpg'},
      {id:'r2', name:'Beef Pulao', price:2000, unit:'/kg', img:'https://nvm-broo.github.io/Zeejays/sub/rice/beefpul.jpg'},
      {id:'r3', name:'Chicken Fried Rice', price:1600, unit:'/kg', img:'https://nvm-broo.github.io/Zeejays/sub/rice/chickfrice.jpg'},
      {id:'r4', name:'Zeera Chawal', price:900, unit:'/kg', img:'https://nvm-broo.github.io/Zeejays/sub/rice/daalchal.jpg'},
      {id:'r5', name:'Egg Fried Rice', price:1300, unit:'/kg', img:'https://nvm-broo.github.io/Zeejays/sub/rice/eggfrice.jpg'},
      {id:'r6', name:'Veg Fried Rice', price:1300, unit:'/kg', img:'https://nvm-broo.github.io/Zeejays/sub/rice/vegfrice.jpg'},
      {id:'r7', name:'Butter Garlic Rice', price:1000, unit:'/kg', img:'https://nvm-broo.github.io/Zeejays/sub/rice/buttergrice.jpg'}
    ]
  },
  {
    id:'desi', label:'Desi favourites', note:'Authentic Pakistani home cooking.',
    items:[
      {id:'d1', name:'Mutton Aloo Gosht', price:2000, unit:'/kg', img:'https://www.whiskaffair.com/wp-content/uploads/2019/03/Kashmiri-Dum-Aloo-2-1-720x1080.jpg'},
      {id:'d2', name:'Chicken Aloo Gosht', price:1200, unit:'/kg', img:'https://static.toiimg.com/photo/103247879.cms'},
      {id:'d3', name:'Daal Mash Special', price:800, unit:'/kg', img:'https://static.tossdown.com/images/ca98e37b-abef-4d75-b5c2-6066b4480a34.webp'},
      {id:'d4', name:'Chicken Roast', price:800, unit:' (2 pcs)', img:'https://static01.nyt.com/images/2021/09/22/dining/17chickenrex/merlin_194652171_2bbe3336-29a8-4ba2-81ba-449ce2f1904c-threeByTwoMediumAt2X.jpg'},
      {id:'d5', name:'Beef Karahi', price:2000, unit:'/kg', img:'https://i.pinimg.com/originals/34/e3/e0/34e3e03c804aafcf9d32e75a3e21c1cd.jpg'},
      {id:'d6', name:'Mutton Qorma', price:3200, unit:'/kg', img:'https://www.elgiultra.com/ultraliving/wp-content/uploads/2019/10/mutton-korma.jpg'},
      {id:'d7', name:'Mutton Chaanp', price:1500, unit:' (3 pcs)', img:'https://www.freshtohome.com/blog/wp-content/uploads/2024/06/Screenshot-2024-06-26-125108.png'},
      {id:'d8', name:'Beef Qeema', price:2000, unit:'/kg', img:'https://kfoods.com/images1/newrecipeicon/curried-minced-beef-kheema_6496.jpg'},
      {id:'d9', name:'White Chicken Karahi', price:1800, unit:'/kg', img:'https://img.taste.com.au/vJFgvlvo/taste/2019/04/white-chicken-korma-curry-148900-1.jpg'},
      {id:'d10', name:'Palak Kabaab', price:1200, unit:'/kg', img:'https://i0.wp.com/southindianrecipes.in/wp-content/uploads/2021/07/Palak-Kofta.jpg'},
      {id:'d11', name:'Kabab Daleem', price:900, unit:'/kg', img:'https://cdn.shopify.com/s/files/1/0407/1850/0004/articles/haleem_1024x1024.jpg?v=1626605863'},
      {id:'d12', name:'Chicken Vegetable Mix', price:1400, unit:'/kg', img:'https://tse1.mm.bing.net/th/id/OIP.EyaWv5l_KIfFRdjjQ3TRNQHaGI?rs=1&pid=ImgDetMain&o=7&rm=3'},
      {id:'d13', name:'Anda Kofta', price:1000, unit:'/kg', img:'https://tse3.mm.bing.net/th/id/OIP.DvCL2tKP0bdmVFmf_XZjcQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'}
    ]
  },
  {
    id:'chinese', label:'Chinese', note:'Wok-tossed, made to order.',
    items:[
      {id:'c1', name:'Chicken Manchurian', price:1400, unit:'/kg', img:'https://nvm-broo.github.io/Zeejays/sub/manchurian.jpg'},
      {id:'c2', name:'Chicken Pineapple', price:1800, unit:'/kg', img:'https://tse2.mm.bing.net/th/id/OIP.4py2isdEGzK-BVtrKOLSOwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3'},
      {id:'c3', name:'Chicken Blackpepper', price:1600, unit:'/kg', img:'https://tse3.mm.bing.net/th/id/OIP.VN2kyUt6GjKa6bYySDbn0gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'},
      {id:'c4', name:'Chicken Almond', price:1800, unit:'/kg', img:'https://th.bing.com/th/id/R.d2a737c5c1fa9efd59000c81aa6c51f5?rik=3nU7NdZfVqtTSQ&pid=ImgRaw&r=0'},
      {id:'c5', name:'Chicken Jalfrezi', price:1400, unit:'/kg', img:'https://tse2.mm.bing.net/th/id/OIP.nsulai1iJITAIeAZ87iz7gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3'}
    ]
  },
  {
    id:'salad', label:'Salads', note:'Priced per half kg.',
    items:[
      {id:'s1', name:'Fresh Salad', price:250, unit:' (½kg)', img:'https://img.freepik.com/premium-photo/side-view-fresh-sald-tomatoes-cucumbers-bell-peppers-red-onionnd-herbs-plate_974732-48662.jpg'},
      {id:'s2', name:'Russian Salad', price:700, unit:' (½kg)', img:'https://soupchick.s3.amazonaws.com/wp-content/uploads/2023/12/07140219/SALAD0030_1.png'},
      {id:'s3', name:'Chana Lobia Salad', price:450, unit:' (½kg)', img:'https://th.bing.com/th/id/R.e6a930ed4241dfd709a2cfdfae79e08b?rik=PpJ6Yb7c6OpaiA&pid=ImgRaw&r=0'},
      {id:'s4', name:'Kachoomar Salad', price:300, unit:' (½kg)', img:'https://searchingforspice.com/wp-content/uploads/2021/05/Kachumber-Salad-14.jpg'},
      {id:'s5', name:'Salsa Crunch Salad', price:600, unit:' (½kg)', img:'https://nvm-broo.github.io/Zeejays/sub/salad/123.jpeg'}
    ]
  },
  {
    id:'soup', label:'Soups', note:'Pricing not set yet — tap to ask on WhatsApp.',
    items:[
      {id:'so1', name:'Hot n Sour Soup', price:null, img:'https://www.cookingcarnival.com/wp-content/uploads/2023/09/Hot-and-sour-soup-4.jpg'},
      {id:'so2', name:'Chicken Corn Soup', price:null, img:'https://www.kitchensanctuary.com/wp-content/uploads/2023/06/Chicken-and-Sweetcorn-Soup-square-FS.jpg'},
      {id:'so3', name:'Chicken Vegetable Soup', price:null, img:'https://thecleaneatingcouple.com/wp-content/uploads/2022/01/chicken-vegetable-soup-1.jpg'},
      {id:'so4', name:'Cream of Tomato Soup', price:null, img:'https://th.bing.com/th/id/R.8d385ac1adbf544d24a934c208a338b2?rik=B2RPXW9bNhSYFQ&pid=ImgRaw&r=0'}
    ]
  },
  {
    id:'pasta', label:'Pasta', note:'Pricing not set yet — tap to ask on WhatsApp.',
    items:[
      {id:'p1', name:'Fajita Spaghetti', price:null, img:'https://dinnerthendessert.com/wp-content/uploads/2022/05/Creamy-Chicken-Fajita-Pasta-10-hero.jpg'},
      {id:'p2', name:'Alfredo Pasta', price:null, img:'https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/11/fettucine-alfredo.jpg'},
      {id:'p3', name:'Lasagne', price:null, img:'https://www.italienische-rezepte.net/wp-content/uploads/2020/12/lasagne.jpg'},
      {id:'p4', name:'Tikka Macaroni', price:null, img:'https://i.ytimg.com/vi/uSOPoXqyp5Q/maxresdefault.jpg'},
      {id:'p5', name:'Baked Pasta', price:null, img:'https://tse4.mm.bing.net/th/id/OIP.B7w_U2X0ZyPA9SQbQpaebwHaKR?rs=1&pid=ImgDetMain&o=7&rm=3'},
      {id:'p6', name:'Egg Noodles', price:null, img:'https://tse1.mm.bing.net/th/id/OIP.66XJNtGK5cyqu7JUH5lLUAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3'},
      {id:'p7', name:'Meat Ball Spaghetti', price:null, img:'https://d219o304zcx1el.cloudfront.net/9b83a135-58b3-44b8-b863-1c744879bc84.jpg'}
    ]
  },
  {
    id:'snack', label:'Snacks', note:'Pricing not set yet — tap to ask on WhatsApp.',
    items:[
      {id:'sn1', name:'Steamed Momos', price:null, img:'https://cdn.grofers.com/assets/search/usecase/banner/cheese_steamed_momos_01.png'},
      {id:'sn2', name:'Chicken Bread', price:null, img:'https://i.ytimg.com/vi/I_4vwNYWKgM/maxresdefault.jpg'},
      {id:'sn3', name:'Veg Bread Roll', price:null, img:'https://www.pepperbowl.com/wp-content/uploads/2023/09/easy-jalapeno-cheese-sticks-720x1080.jpg'},
      {id:'sn4', name:'Chicken Bread Roll', price:null, img:'https://hungrylankan.com/wp-content/uploads/2020/05/kochchicheese_rolls3-scaled.jpg'},
      {id:'sn5', name:'Shaami Kabab', price:null, img:'https://img.onmanorama.com/content/dam/mm/en/food/in-season/images/2020/5/19/mutton-shami-kebab.jpg'},
      {id:'sn6', name:'Bread Pakora', price:null, img:'https://www.cubesnjuliennes.com/wp-content/uploads/2020/04/Bread-Pakora-1.jpg'},
      {id:'sn7', name:'Chicken Tortilla Wrap', price:null, img:'https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Wrap.jpg'},
      {id:'sn8', name:'Chicken Loaded Fries', price:null, img:'https://tse2.mm.bing.net/th/id/OIP.x7PfFbTmMD5805LaDimeTQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3'},
      {id:'sn9', name:'Pizza Bites', price:null, img:'https://hip2save.com/wp-content/uploads/2023/01/Homemade-Pizza-Bites-17.jpg?resize=1024%2C768&strip=all'}
    ]
  }
];

(function(){
  var cart = {};

  function money(n){ return 'Rs.' + Number(n).toLocaleString('en-PK'); }

  function findItem(id){
    for(var c=0;c<MENU.length;c++){
      for(var i=0;i<MENU[c].items.length;i++){
        if(MENU[c].items[i].id === id) return MENU[c].items[i];
      }
    }
    return null;
  }

  function renderTabs(){
    var tabWrap = document.getElementById('catTabs');
    if(!tabWrap) return;
    MENU.forEach(function(cat){
      var b = document.createElement('button');
      b.className = 'cat-tab';
      b.textContent = cat.label;
      b.addEventListener('click', function(){
        document.getElementById('cat-'+cat.id).scrollIntoView({behavior:'smooth', block:'start'});
      });
      tabWrap.appendChild(b);
    });
  }

  function renderMenu(){
    var host = document.getElementById('menuSections');
    if(!host) return;
    MENU.forEach(function(cat){
      var section = document.createElement('section');
      section.className = 'cat-section';
      section.id = 'cat-'+cat.id;
      var grid = cat.items.map(function(item){
        var priceHtml = item.price
          ? '<span class="item-price">' + money(item.price) + (item.unit||'') + '</span>'
          : '<span class="item-price tbc">Ask for price</span>';
        var actionHtml = item.price
          ? '<div class="qty-stepper" data-id="'+item.id+'">'
            + '<button type="button" data-action="dec" aria-label="Decrease quantity">–</button>'
            + '<span data-qty>0</span>'
            + '<button type="button" data-action="inc" aria-label="Increase quantity">+</button>'
            + '</div>'
            + '<button type="button" class="btn btn-primary btn-sm" data-add="'+item.id+'">Add</button>'
          : '<a class="btn btn-ghost btn-sm" target="_blank" rel="noopener" href="https://wa.me/'+WHATSAPP_NUMBER+'?text='+encodeURIComponent('Hi ZeeJay\'s! Can you tell me the price for '+item.name+'?')+'">Ask on WhatsApp</a>';
        return '<div class="item-card">'
          + '<img src="'+item.img+'" alt="'+item.name+'" loading="lazy">'
          + '<div class="item-body">'
          + '<h3>'+item.name+'</h3>'
          + priceHtml
          + '<div class="item-actions">'+actionHtml+'</div>'
          + '</div></div>';
      }).join('');
      section.innerHTML = '<h2>'+cat.label+'</h2><p class="cat-sub">'+cat.note+'</p><div class="item-grid">'+grid+'</div>';
      host.appendChild(section);
    });
  }

  function updateStepperDisplay(id){
    var el = document.querySelector('.qty-stepper[data-id="'+id+'"] [data-qty]');
    if(el) el.textContent = cart[id] ? cart[id] : 0;
  }

  function addToCart(id){
    var item = findItem(id);
    if(!item || !item.price) return;
    cart[id] = (cart[id] || 0) + 1;
    updateStepperDisplay(id);
    renderCart();
  }

  function decFromCart(id){
    if(!cart[id]) return;
    cart[id] -= 1;
    if(cart[id] <= 0) delete cart[id];
    updateStepperDisplay(id);
    renderCart();
  }

  function removeFromCart(id){
    delete cart[id];
    updateStepperDisplay(id);
    renderCart();
  }

  function renderCart(){
    var itemsHost = document.getElementById('cartItems');
    var emptyMsg = document.getElementById('cartEmpty');
    var totalEl = document.getElementById('cartTotal');
    var waBtn = document.getElementById('waCheckout');
    if(!itemsHost) return;

    var ids = Object.keys(cart);
    if(ids.length === 0){
      itemsHost.innerHTML = '';
      emptyMsg.style.display = 'block';
      totalEl.style.display = 'none';
      waBtn.style.display = 'none';
      return;
    }
    emptyMsg.style.display = 'none';
    totalEl.style.display = 'flex';
    waBtn.style.display = 'inline-flex';

    var total = 0;
    var lines = [];
    itemsHost.innerHTML = ids.map(function(id){
      var item = findItem(id);
      var qty = cart[id];
      var lineTotal = item.price * qty;
      total += lineTotal;
      lines.push(qty + 'x ' + item.name + ' - ' + money(lineTotal));
      return '<div class="cart-row">'
        + '<span class="name">'+item.name+'</span>'
        + '<span class="meta">x'+qty+'</span>'
        + '<button class="remove" data-remove="'+id+'">Remove</button>'
        + '</div>';
    }).join('');

    totalEl.innerHTML = '<span>Total</span><span>'+money(total)+'</span>';

    var msg = "Hi ZeeJay's! I'd like to pre-order:\n" + lines.join('\n') + '\n\nTotal: ' + money(total) + '\n\nPlease confirm timing (6hrs-1day notice).';
    waBtn.href = 'https://wa.me/'+WHATSAPP_NUMBER+'?text='+encodeURIComponent(msg);
  }

  document.addEventListener('DOMContentLoaded', function(){
    renderTabs();
    renderMenu();
    renderCart();

    document.addEventListener('click', function(e){
      var add = e.target.closest('[data-add]');
      if(add){
        addToCart(add.getAttribute('data-add'));
        add.classList.remove('pop');
        void add.offsetWidth;
        add.classList.add('pop');
        return;
      }

      var step = e.target.closest('.qty-stepper button');
      if(step){
        var id = step.closest('.qty-stepper').getAttribute('data-id');
        if(step.getAttribute('data-action') === 'inc') addToCart(id);
        else decFromCart(id);
        return;
      }

      var remove = e.target.closest('[data-remove]');
      if(remove){ removeFromCart(remove.getAttribute('data-remove')); return; }
    });
  });
})();
