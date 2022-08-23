const detailsShopBtn = document.getElementById("detailsShop");
const detailsShopDiv = document.querySelector(".details-shop");
const detailsContentBtn = document.querySelector(
  ".details-shop .content button"
);

let counter = 0;
showTestimonials(counter);

document.querySelector(".prev").addEventListener("click", () => {
  computeTestimonials(-1);
});

document.querySelector(".next").addEventListener("click", () => {
  computeTestimonials(1);
});

function computeTestimonials(t) {
  showTestimonials((counter = counter + t));
}

function showTestimonials(n) {
  let i;
  let users = document.getElementsByClassName("user");

  if (n >= users.length) {
    counter = 0;
  }
  if (n < 1) {
    counter = users.length - 1;
  }

  for (i = 0; i < users.length; i++) {
    users[i].style.display = "none";
  }

  users[counter].style.display = "block";
}

////////////////////////////////////////////////

detailsShopBtn.addEventListener("click", () => {
  detailsShopDiv.classList.add("active");
});
detailsContentBtn.addEventListener("click", () => {
  detailsShopDiv.classList.remove("active");
});
