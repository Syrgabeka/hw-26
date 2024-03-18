let menu = [
  {
    id: 1,
    image: "img/foto/sur.avif",
    title: "Шаурма с сыром",
    price: 253,
    quantity: 1,
    totalPrice: 0,
  },
  {
    id: 2,
    image: "img/foto/zap.avif",
    title: "Шаурма запеченная",
    price: 253,
    quantity: 1,
    totalPrice: 0,
  },
  {
    id: 3,
    image: "img/foto/fri.avif",
    title: "Картошка фри",
    price: 115,
    quantity: 1,
    totalPrice: 0,
  },
  {
    id: 4,
    image: "img/foto/mini.avif",
    title: "Мини бургер",
    price: 149,
    quantity: 1,
    totalPrice: 0,
  },
  {
    id: 5,
    image: "img/foto/chalap.jpeg",
    title: "Чалап (300 гр.)",
    price: 49,
    quantity: 1,
    totalPrice: 0,
  },
  {
    id: 6,
    image: "img/foto/Pepsi.webp",
    title: "Pepsi (1 л.)",
    price: 109,
    quantity: 1,
    totalPrice: 0,
  },
];

//! Вывод меню
let dataOutput = document.querySelector(".menu-cart");

function displayMenu() {
  let displayMenu = "";

  menu.forEach(function (item) {
    displayMenu += `<button onclick="order(${item.id})" class="cart">
   <img class="foto" src="${item.image}" />
   <p class="text-menu">
              ${item.title} <br />
             ${item.price} сом
            </p>
   </button>`;

    dataOutput.innerHTML = displayMenu;
  });
}
displayMenu();

//! Вывод заказа
let clickOrder = document.querySelector(".buy-order-foot");
let plusNum = document.querySelector(".plusnum");

let orderBuy = [];

const order = (param, type) => {
  let existingFood = orderBuy.find(({ id }) => id === param);

  if (type !== "delete") {
    if (existingFood) {
      let displayBuy = "";
      existingFood.quantity++;
      existingFood.totalPrice = existingFood.price * existingFood.quantity;

      orderBuy.forEach(function (item) {
        displayBuy += `<div class="buy-order">
          <p>${item.title}</p>
          <p>${item.quantity}</p>
          <p class="plusnum">${item.totalPrice} сом</p>
          <button onclick="remove(${item.id})" class="buy-delete">delete</button>
          </div>`;
      });

      clickOrder.innerHTML = displayBuy;
    } else {
      let displayBuy = "";

      const filteredTasks = menu.find(({ id }) => id === param);

      orderBuy.push(filteredTasks);

      orderBuy.forEach(function (item) {
        displayBuy += `<div class="buy-order">
        <p>${item.title}</p>
        <p>${item.quantity}</p>
        <p class="plusnum">${item.price} сом</p>
        <button onclick="remove(${item.id})" class="buy-delete">delete</button>
        </div>`;
      });
      clickOrder.innerHTML = displayBuy;
    }
  } else {
    let displayBuy = "";

    const filteredTasks = menu.find(({ id }) => id === param);

    orderBuy.push(filteredTasks);

    orderBuy.forEach(function (item) {
      displayBuy += `<div class="buy-order">
      <p>${item.title}</p>
      <p>${item.quantity}</p>
      <p class="plusnum">${item.price} сом</p>
      <button onclick="remove(${item.id})" class="buy-delete">delete</button>
      </div>`;
    });

    clickOrder.innerHTML = displayBuy;
  }

  sumAll();
  quantityAll();
};

//! Сумма цены
let allPrice = document.querySelector(".all-sum");

function sumAll() {
  let sums = 0;

  for (let i = 0; i < orderBuy.length; i++) {
    let numPrice = orderBuy[i].price;
    let totalNum = orderBuy[i].totalPrice;
    let numPriceTwo = parseInt(numPrice + totalNum);
    sums += numPriceTwo;
  }

  allPrice.innerHTML = sums;
}
let allQuantity = document.querySelector(".quantity");

function quantityAll() {
  let sums = 0;

  for (let i = 0; i < orderBuy.length; i++) {
    let numPrice = orderBuy[i].quantity;
    let numPriceTwo = parseInt(numPrice);
    sums += numPriceTwo;
  }

  allQuantity.innerHTML = sums;
}

//! Удаление
const remove = (param) => {
  const filteredRemove = orderBuy.filter(({ id }) => id !== param);

  orderBuy = filteredRemove;
  order(param, "delete");
};

// const removButton = document.querySelector(".buy-delete");
// const buyOrder = document.querySelector(".buy-order");
// removButton.addEventListener("click", () => {
//   removButton.remove(buyOrder);
// });
