// ==========================
// Valley.Scoop v1.0
// Phase 1.3
// ==========================

let cart = [];
let cartCount = 0;

// --------------------------
// Add To Basket
// --------------------------

function addCart(product, price){

    cart.push({
        name: product,
        price: price
    });

    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    basketBounce();

    showToast(product + " added to basket 🎀");

}

// --------------------------
// Basket Animation
// --------------------------

function basketBounce(){

    const basket = document.querySelector(".cart-icon");

    basket.animate([

        {transform:"scale(1)"},
        {transform:"scale(1.25)"},
        {transform:"scale(1)"}

    ],{

        duration:350

    });

}

// --------------------------
// Cute Toast
// --------------------------

function showToast(message){

    let toast = document.createElement("div");

    toast.className = "toast";

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },10);

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },400);

    },2200);

}

// --------------------------
// Smooth Fade
// --------------------------

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});

// --------------------------
// Order Button
// --------------------------

document
.getElementById("orderButton")
.addEventListener("click",()=>{

if(cart.length===0){

showToast("Your basket is empty 🧺");

return;

}

let small = 0;
let medium = 0;
let large = 0;

let subtotal = 0;

cart.forEach(item=>{

subtotal += item.price;

if(item.name==="Small Scoop") small++;

if(item.name==="Medium Scoop") medium++;

if(item.name==="Large Scoop") large++;

});

// --------------------------
// Discount
// --------------------------

let discount = Math.floor(small/2)*1000;

let total = subtotal-discount;

// --------------------------
// WhatsApp Message
// --------------------------

let message =

`🎀 *Valley.Scoop Order* 🎀

Hello!

I'd like to place an order.

━━━━━━━━━━━━━━

🩷 Small Scoop : ${small}

☁️ Medium Scoop : ${medium}

🎁 Large Scoop : ${large}

━━━━━━━━━━━━━━

Subtotal :
Rp${subtotal.toLocaleString("id-ID")}

Bundle Discount :
-Rp${discount.toLocaleString("id-ID")}

━━━━━━━━━━━━━━

Total Products :
Rp${total.toLocaleString("id-ID")}

Please let me know the shipping fee.

Thank you! 🌸`;

let phone="6285186055868";

window.open(

`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,

"_blank"

);

});

// --------------------------
// Floating Background
// --------------------------

document.addEventListener("mousemove",(e)=>{

const circles=document.querySelectorAll(".floating");

circles.forEach((circle,index)=>{

const speed=(index+1)*0.015;

circle.style.transform=

`translate(${e.clientX*speed}px,${e.clientY*speed}px)`;

});

});
