"use strict";
import "./style.css";

const carsData = [
  {
    id: 1,
    name: "Toyota Corolla",
    brand: "Toyota",
    manufacturedYear: 2019,
    doors: "4",
    price: 22000,
    available: "yes",
    image: "./images/first car toyota.jpg",
  },
  {
    id: 2,
    name: "Honda Civic",
    brand: "Honda",
    manufacturedYear: 2020,
    doors: "4",
    price: 25000,
    available: "yes",
    image: "./images/honda civic second.webp",
  },
  {
    id: 3,
    name: "Ford Mustang",
    brand: "Ford",
    manufacturedYear: 2018,
    doors: "2",
    price: 35000,
    available: "no",
    image: "./images/mustant 3.png",
  },
  {
    id: 4,
    name: "BMW 3 Series",
    brand: "BMW",
    manufacturedYear: 2021,
    doors: "4",
    price: 45000,
    available: "yes",
    image: "./images/BMW 3 Series 4.png",
  },
  {
    id: 5,
    name: "Chevrolet Camaro",
    brand: "Chevrolet",
    manufacturedYear: 2017,
    doors: "2",
    price: 32000,
    available: "no",
    image: "./images/Chavrolet 5.jpg",
  },
  {
    id: 6,
    name: "Audi A4",
    brand: "Audi",
    manufacturedYear: 2022,
    doors: "4",
    price: 42000,
    available: "yes",
    image: "./images/audi a4 6.jpg",
  },
  {
    id: 7,
    name: "Mercedes-Benz E-Class",
    brand: "Mercedes-Benz",
    manufacturedYear: 2020,
    doors: "4",
    price: 50000,
    available: "yes",
    image: "./images/mercedes e klasa 7.jpg",
  },
  {
    id: 8,
    name: "Lexus IS",
    brand: "Lexus",
    manufacturedYear: 2019,
    doors: "4",
    price: 38000,
    available: "no",
    image: "./images/lexus 8.webp",
  },
  {
    id: 9,
    name: "Volkswagen Golf",
    brand: "Volkswagen",
    manufacturedYear: 2021,
    doors: "4",
    price: 28000,
    available: "yes",
    image: "./images/golf 9.jpg",
  },
  {
    id: 10,
    name: "Subaru Outback",
    brand: "Subaru",
    manufacturedYear: 2022,
    doors: "4",
    price: 32000,
    available: "yes",
    image: "./images/subaru 10.png",
  },
];

// const carList = document.querySelector(".car-list");
// const selectAvlbl = document.querySelector(".select-available");
// const selectSort = document.querySelector(".select-sort");

// const carCreator = function (carArg) {
//   const car = carArg;

//   const getCar = () => car;
//   const getId = () => car.id;
//   const getName = () => car.name;
//   const getBrand = () => car.brand;
//   const getYear = () => car.manufacturedYear;
//   const getDoors = () => car.doors;
//   const getPrice = () => car.price;
//   const getAvlbl = () => car.available;
//   const getImg = () => car.image;
//   // prettier-ignore
//   return {getCar, getId, getName, getBrand, getYear, getDoors, getPrice, getAvlbl, getImg};
// };

// const carManagerCreator = function () {
//   let currentFilter = "all";
//   let currentSort;
//   let cars = [];
//   let freshCars;
//   // prettier-ignore
//   const filterAndSort = () => {
//     freshCars = carsData.map(car => carCreator(car));

//     if (currentFilter === 'all') {
//       cars = freshCars.sort((a,b) => {
//         if (currentSort === ("z-a")) return (a.getName() < b.getName()) ? 1 : ((b.getName() < a.getName()) ? -1 : 0);
//         if (currentSort === ("a-z")) return (a.getName() > b.getName()) ? 1 : ((b.getName() > a.getName()) ? -1 : 0);
//         if (currentSort === ("price-lowest")) return (a.getPrice() > b.getPrice()) ? 1 : ((b.getPrice() > a.getPrice()) ? -1 : 0);
//         if (currentSort === ("price-highest")) return (a.getName() < b.getName()) ? 1 : ((b.getName() < a.getName()) ? -1 : 0);
//         })
//     } else {
//       (cars = freshCars.filter((car) => car.getAvlbl() == currentFilter)).sort((a,b) => {
//         if (currentSort === ("z-a")) return (a.getName() < b.getName()) ? 1 : ((b.getName() < a.getName()) ? -1 : 0);
//         if (currentSort === ("a-z")) return (a.getName() > b.getName()) ? 1 : ((b.getName() > a.getName()) ? -1 : 0);
//         if (currentSort === ("price-lowest")) return (a.getPrice() > b.getPrice()) ? 1 : ((b.getPrice() > a.getPrice()) ? -1 : 0);
//         if (currentSort === ("price-highest")) return (a.getName() < b.getName()) ? 1 : ((b.getName() < a.getName()) ? -1 : 0);
//       });
//     }
//   }
//   const getFreshCars = () => freshCars;

//   const setCurrentFilter = (value) => (currentFilter = value);
//   const setCurrentSort = (value) => (currentSort = value);

//   const addToCars = (car) => cars.push(car);
//   const getCars = () => cars;

//   // prettier-ignore
//   return {filterAndSort, getFreshCars, setCurrentFilter, setCurrentSort, addToCars, getCars};
// };

// const carManager = carManagerCreator();

// for (let i = 0; i < carsData.length; i++) {
//   const car = carCreator(carsData[i]);
//   carManager.addToCars(car);

//   const item = document.createElement("li");
//   item.classList.add("car-item");
//   item.setAttribute("data-id", car.getId());
//   item.innerHTML = `<div class="img-cont">
//     <h3 class="car-name">${car.getName()}</h3>
//     <img class="car-img" src="${car.getImg()}" />
//     </div>
//     <div class="specifications-cont">
//     <p>Brand:<span>${car.getBrand()}</span></p>
//     <p>Manufactured Year:<span>${car.getYear()}</span></p>
//     <p>Doors:<span>${car.getDoors()}</span></p>
//     <p>Price:<span>$${car.getPrice()}</span></p>
//     </div>
//     <div class="availability-cont">
//     <div class="available-btn">Available: <span>${car.getAvlbl()}</span></div>
//     </div>
//     <div class="del-cont">
//     <button class="delete-btn">Delete</button>
//     </div>`;
//   // prettier-ignore
//   car.getAvlbl() === "no" && (item.querySelector(".available-btn").style.backgroundColor = "rgb(214, 81, 81)");
//   carList.appendChild(item);

//   item.addEventListener("click", function (e) {
//     if (!e.target.classList.contains("delete-btn")) return;

//     const index = carManager
//       .getCars()
//       .findIndex(
//         (car) =>
//           String(car.getId()) ===
//           e.target.closest(".car-item").getAttribute("data-id")
//       );
//     // console.log(index);
//     carManager.getCars().splice(index, 1);
//     carManager.getCars().forEach((car) => console.log(car.getCar()));
//     const deleteEl = e.target.closest(".car-item");
//     deleteEl.remove();
//   });
// }

// const setUI = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const item = document.createElement("li");
//     item.classList.add("car-item");
//     item.setAttribute("data-id", arr[i].getId());
//     item.innerHTML = `<div class="img-cont">
//             <h3 class="car-name">${arr[i].getName()}</h3>
//             <img class="car-img" src="${arr[i].getImg()}" />
//           </div>
//           <div class="specifications-cont">
//             <p>Brand:<span>${arr[i].getBrand()}</span></p>
//             <p>Manufactured Year:<span>${arr[i].getYear()}</span></p>
//             <p>Doors:<span>${arr[i].getDoors()}</span></p>
//             <p>Price:<span>$${arr[i].getPrice()}</span></p>
//           </div>
//           <div class="availability-cont">
//             <div class="available-btn">Available: <span>${arr[
//               i
//             ].getAvlbl()}</span></div>
//           </div>
//           <div class="del-cont">
//             <button class="delete-btn">Delete</button>
//           </div>`;
//     // prettier-ignore
//     arr[i].getAvlbl() === "no" && (item.querySelector(".available-btn").style.backgroundColor = "rgb(214, 81, 81)");
//     carList.appendChild(item);

//     item.addEventListener("click", function (e) {
//       if (!e.target.classList.contains("delete-btn")) return;

//       // prettier-ignore
//       const index = arr.findIndex((car) => String(car.getId()) === e.target.closest(".car-item").getAttribute("data-id"));

//       arr.splice(index, 1);
//       arr.forEach((car) => console.log(car.getCar()));
//       const deleteEl = e.target.closest(".car-item");
//       deleteEl.remove();
//     });
//   }
// };

// const renderCars = function (value) {
//   carManager.setCurrentFilter(value);
//   carManager.filterAndSort();
//   carList.innerHTML = "";
//   setUI(carManager.getCars());
// };

// selectAvlbl.addEventListener("input", function (e) {
//   if (e.target.value === "all") renderCars("all");
//   if (e.target.value === "available") renderCars("yes");
//   if (e.target.value === "not-available") renderCars("no");
// });

// selectSort.addEventListener("input", function (e) {
//   if (e.target.value === "a-z") {
//     // renderCars("a-z");
//     carManager.setCurrentSort("a-z");
//     carManager.filterAndSort();
//     carList.innerHTML = "";
//     setUI(carManager.getCars());
//   }
//   if (e.target.value === "z-a") {
//     carManager.setCurrentSort("z-a");
//     carManager.filterAndSort();
//     carList.innerHTML = "";
//     setUI(carManager.getCars());
//   }
//   if (e.target.value === "price-lowest") {
//     carManager.setCurrentSort("price-lowest");
//     carManager.filterAndSort("");
//     carList.innerHTML = "";
//     setUI(carManager.getCars());
//   }
//   if (e.target.value === "price-highest") {
//     carManager.setCurrentSort("price-highest");
//     carManager.filterAndSort();
//     carList.innerHTML = "";
//     setUI(carManager.getCars());
//   }
// });

const carList = document.querySelector(".car-list");
const selectAvlbl = document.querySelector(".select-available");
const selectSort = document.querySelector(".select-sort");

const carCreator = function (car) {
  let id = car.id;
  let name = car.name;
  let doors = car.doors;
  let manufacturedYear = car.manufacturedYear;
  let brand = car.brand;
  let price = car.price;
  let available = car.available;
  let image = car.image;

  const getId = () => id;
  const getName = () => name;
  const getBrand = () => brand;
  const getYear = () => manufacturedYear;
  const getDoors = () => doors;
  const getPrice = () => price;
  const getAvlbl = () => available;
  const getImg = () => image;
  // prettier-ignore
  return { getId, getName, getBrand, getYear, getDoors, getPrice, getAvlbl, getImg};
};

const carManagerCreator = function () {
  let cars = [];

  let currentFilter = "all";
  let currentSort = "";

  const addCar = (value) => cars.push(value);
  const getCars = () => cars;
  const setCars = (value) => (cars = value);

  const filterAndSort = () => {
    let freshCars = [...carsData];
    if (currentFilter === "all")
      return freshCars.sort((a, b) => {
        // prettier-ignore
        if (currentSort === "a-z") return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
        // prettier-ignore
        if (currentSort === "z-a") return a.name < b.name ? 1 : b.name < a.name ? -1 : 0;
        // prettier-ignore
        if (currentSort === "price-highest") return a.price < b.price ? 1 : b.price < a.price ? -1 : 0;
        //prettier-ignore
        if (currentSort === "price-lowest") return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
      });

    freshCars = freshCars.filter((car) => car.available === currentFilter);
    return freshCars.sort((a, b) => {
      // prettier-ignore
      if (currentSort === "a-z") return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
      // prettier-ignore
      if (currentSort === "z-a") return a.name < b.name ? 1 : b.name < a.name ? -1 : 0;
      // prettier-ignore
      if (currentSort === "price-highest") return a.price < b.price ? 1 : b.price < a.price ? -1 : 0;
      //prettier-ignore
      if (currentSort === "price-lowest") return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
    });
  };
  // a.price > b.price ? 1 : b.price > a.price ? -1 : 0
  const getCurrentFilter = () => currentFilter;
  const getCurrentSort = () => currentSort;

  const setCurrentFilter = (value) => (currentFilter = value);
  const setCurrentSort = (value) => (currentSort = value);

  return {
    getCars,
    addCar,
    setCars,
    filterAndSort,
    getCurrentFilter,
    getCurrentSort,
    setCurrentFilter,
    setCurrentSort,
  };
};

const carManager = carManagerCreator();
carsData.forEach((car) => carManager.addCar(carCreator(car)));

const renderCars = function () {
  carList.innerHTML = "";
  carManager.getCars().forEach((car) => {
    const item = document.createElement("li");
    item.classList.add("car-item");
    item.setAttribute("data-id", car.getId());
    item.innerHTML = `<div class="img-cont">
    <h3 class="car-name">${car.getName()}</h3>
    <img class="car-img" src="${car.getImg()}" />
    </div>
    <div class="specifications-cont">
    <p>Brand:<span>${car.getBrand()}</span></p>
    <p>Manufactured Year:<span>${car.getYear()}</span></p>
    <p>Doors:<span>${car.getDoors()}</span></p>
    <p>Price:<span>$${car.getPrice()}</span></p>
    </div>
    <div class="availability-cont">
    <div class="available-btn ${
      car.getAvlbl() === "yes" ? "btn-available" : "btn-not-available"
    }">Available: <span>${car.getAvlbl()}</span></div>
    </div>
    <div class="del-cont">
    <button class="delete-btn">Delete</button>
    </div>`;
    carList.appendChild(item);
  });
};
renderCars();

selectSort.addEventListener("input", function (e) {
  const [key, value] = e.target.value.split("--");
  console.log(key);
  console.log(value);
  carManager.setCurrentSort(value);
  const newCars = carManager.filterAndSort().map((car) => carCreator(car));
  carManager.setCars(newCars);
  renderCars();
});

selectAvlbl.addEventListener("input", function (e) {
  const [key, value] = e.target.value.split("-");
  console.log(key);
  console.log(value);
  carManager.setCurrentFilter(value);
  const newCars = carManager.filterAndSort().map((car) => carCreator(car));
  carManager.setCars(newCars);
  renderCars();
});
