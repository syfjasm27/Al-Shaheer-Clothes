const productsSection = document.querySelector(".women .products");
const productFull = document.querySelector(".product-full");
const productFullAllInput = document.querySelectorAll(".product-full .form div input");
const productFullClose = document.querySelector(".product-full .product-section .close");
const productSelectColor = productFull.querySelector(".color select");
const productSelectSize = productFull.querySelector(".size select");
const productSelectCompany = productFull.querySelector(".company select");
const productFullName = productFull.querySelector(".name input");
const productFullCity = productFull.querySelector(".city input");
const productFullInsideCity = productFull.querySelector(".inside-city input");
const productFullCount = productFull.querySelector(".count input");
const productFullPhone = productFull.querySelector(".phone input");
const productFullEmail = productFull.querySelector(".email input");
const productFullCode = productFull.querySelector(".code input");
const productFullBuyBtn = productFull.querySelector(".buy .go-btn");



let womenArray = [
    {
        title: "قميص",
        price: 13,
        company: "ماركة زارا الاسبانية ",
        imgSrc: "img/women1.jpg"
    },
    {
        title: "سروال - بنطلون",
        price: 16,
        company: "ماركة  فريساتشا الايطالية",
        imgSrc: "img/women2.jpg"
    },
    {
        title: "بدلة",
        price: 30,
        company: "ماركة دولتشي",
        imgSrc: "img/women3.jpg"
    },
    {
        title: "حذاء",
        price: 7,
        company: "ماركة  فريساتشا الايطالية",
        imgSrc: "img/women4.jpg"
    },
    {
        title: "صندل",
        price: 17,
        company: "ماركة اندر ارمور الاميركية",
        imgSrc: "img/women5.jpg"
    },
    {
        title: "سترة",
        price: 27,
        company: "ماركة دولتشي",
        imgSrc: "img/women6.jpg"
    },
    {
        title: "حذاء عالي ",
        price: 15,
        company: "ماركة اندر ارمور الاميركية",
        imgSrc: "img/women7.jpg"
    },
    {
        title: "قبعة",
        price: 5,
        company: "ماركة جوتشي الايطالية",
        imgSrc: "img/women8.jpg"
    },
    {
        title: "سروال قصير",
        price: 9,
        company: "ماركة  فريساتشا الايطالية",
        imgSrc: "img/women9.jpg"
    },
    {
        title: "قميص",
        price: 10,
        company: "ماركة زارا الاسبانية",
        imgSrc: "img/women10.jpg"
    },
    {
        title: "بدلة",
        price: 30,
        company: "ماركة دولتشي",
        imgSrc: "img/women11.jpg"
    },
    {
        title: "بدلة",
        price: 30,
        company: "ماركة دولتشي",
        imgSrc: "img/women12.jpg"
    },
    {
        title: "حذاء",
        price: 7,
        company: "ماركة  فريساتشا الايطالية",
        imgSrc: "img/women13.jpg"
    },
    {
        title: "صندل",
        price: 17,
        company: "ماركة اندر ارمور الاميركية",
        imgSrc: "img/women14.jpg"
    },
    {
        title: "سترة",
        price: 27,
        company: "ماركة دولتشي",
        imgSrc: "img/women15.jpg"
    },
    {
        title: "حذاء عالي ",
        price: 15,
        company: "ماركة اندر ارمور الاميركية",
        imgSrc: "img/women16.jpg"
    },
]




let productWomen = "";
let allProductWomen = "";
womenArray.forEach(oneArray => {
    productWomen = `
    <div class="product">
          <h4>${oneArray.title}</h4>
          <div class="product-hover">
            <span>${oneArray.price}$</span>
            <p>( ${oneArray.company} )</p>
          </div>
          <img src="${oneArray.imgSrc}" alt="" />
        </div>`;

        allProductWomen += productWomen;
});

productsSection.innerHTML = allProductWomen;

const allProducts = document.querySelectorAll(".products .product");

allProducts.forEach(product => {
    let productH4 = product.querySelector("h4");
    let productSpan = product.querySelector(".product-hover span");
    let productCompany = product.querySelector(".product-hover p");
    let productImg = product.querySelector("img");

    let productFullH4Span = productFull.querySelector("h4 span");
    let productFullH4I = productFull.querySelector("h4 i");
    let productFullPrice = productFull.querySelector("ul .price");
    let productFullImg = productFull.querySelector(".all-img .img img");
    product.addEventListener("click", () => {
        productFull.classList.add("active");
        productFullH4Span.innerHTML = productH4.innerHTML;
        productFullH4I.innerHTML = productCompany.innerHTML;
        productFullPrice.innerHTML = productSpan.innerHTML;
        productFullImg.src = productImg.src;

    });
});



productFullClose.addEventListener("click", () => {
    productFull.classList.remove("active");
});

//////////////////////////////////////////////////////////////

productFullBuyBtn.addEventListener("click", () => {
    if (productFullName.value == "" || productFullCount.value == "" || productFullCity.value == "" || productFullInsideCity.value == "" || productFullPhone.value == "" || productFullEmail.value == "" || productFullCode.value == "") {
        productFullBuyBtn.parentElement.firstElementChild.classList.add("active");
        setTimeout(() => {
            productFullBuyBtn.parentElement.firstElementChild.classList.remove("active");

        }, 6000);
    }
    else {
        alert("احسنت صنعا , تم الحجز  بهذه المعلومات سيتم اشعارك على الايميل والاتصال بك على رقم الهاتف خلال مدة اقصاها 24 ساعة");
        window.location.href = "men.html";
    }

});

  ///////////////////////////////////////////////////////
