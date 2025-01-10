"use strict";
import "./style.css";

const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    brand: "Toyota",
    manufacturedYear: 2019,
    doors: 4,
    price: 22000,
    available: "yes",
    image: "./images/first car toyota.jpg",
  },
  {
    id: 2,
    name: "Honda Civic",
    brand: "Honda",
    manufacturedYear: 2020,
    doors: 4,
    price: 25000,
    available: "yes",
    image: "./images/honda civic second.webp",
  },
  {
    id: 3,
    name: "Ford Mustang",
    brand: "Ford",
    manufacturedYear: 2018,
    doors: 2,
    price: 35000,
    available: "no",
    image: "./images/mustant 3.png",
  },
  {
    id: 4,
    name: "BMW 3 Series",
    brand: "BMW",
    manufacturedYear: 2021,
    doors: 4,
    price: 45000,
    available: "yes",
    image: "./images/BMW 3 Series 4.png",
  },
  {
    id: 5,
    name: "Chevrolet Camaro",
    brand: "Chevrolet",
    manufacturedYear: 2017,
    doors: 2,
    price: 32000,
    available: "no",
    image: "./images/Chavrolet 5.jpg",
  },
  {
    id: 6,
    name: "Audi A4",
    brand: "Audi",
    manufacturedYear: 2022,
    doors: 4,
    price: 42000,
    available: "yes",
    image: "./images/audi a4 6.jpg",
  },
  {
    id: 7,
    name: "Mercedes-Benz E-Class",
    brand: "Mercedes-Benz",
    manufacturedYear: 2020,
    doors: 4,
    price: 50000,
    available: "yes",
    image: "./images/mercedes e klasa 7.jpg",
  },
  {
    id: 8,
    name: "Lexus IS",
    brand: "Lexus",
    manufacturedYear: 2019,
    doors: 4,
    price: 38000,
    available: "no",
    image: "./images/lexus 8.webp",
  },
  {
    id: 9,
    name: "Volkswagen Golf",
    brand: "Volkswagen",
    manufacturedYear: 2021,
    doors: 4,
    price: 28000,
    available: "yes",
    image: "./images/golf 9.jpg",
  },
  {
    id: 10,
    name: "Subaru Outback",
    brand: "Subaru",
    manufacturedYear: 2022,
    doors: 4,
    price: 32000,
    available: "yes",
    image: "./images/subaru 10.png",
  },
];

const carCont = document.querySelector(".car-cont");
const carList = document.querySelector(".car-list");

const carCreator = function (carArg) {
  // const car = {
  //   id: crypto.randomUUID(),
  //   name: "",
  //   brand: "",
  //   year: "",
  //   doors: "",
  //   price: "",
  //   available: true,
  //   img: "",
  // };
  // const cars = [];
  const car = carArg;
  const getCar = () => car;
  const getId = () => car.id;
  const getName = () => car.name;
  const setName = (value) => (car.name = value);
  const getBrand = () => car.brand;
  const setBrand = (value) => (car.brand = value);

  const getYear = () => car.year;
  const setYear = (value) => (car.year = value);

  const getDoors = () => car.doors;
  const setDoors = (value) => (car.doors = value);
  const getPrice = () => car.price;
  const setPrice = (value) => (car.price = value);
  const getAvlbl = () => car.available;
  const setAvlbl = (value) => (car.available = value);
  const getImg = () => car.img;
  const setImg = (value) => (car.img = value);

  return {
    getCar,
    getId,
    getName,
    setName,
    getBrand,
    setBrand,
    getYear,
    setYear,
    getDoors,
    setDoors,
    getPrice,
    setPrice,
    getAvlbl,
    setAvlbl,
    getImg,
    setImg,
  };
};

const carManagerCreator = function () {
  const cars = [];

  const addToCars = (car) => cars.push(car);
  const getCars = () => cars;

  return { addToCars, getCars };
};

const carManager = carManagerCreator();

for (let i = 0; i < cars.length; i++) {
  const car = carCreator(cars[i]);
  carManager.addToCars(car);

  car.setName(cars[i].name);
  car.setBrand(cars[i].brand);
  car.setYear(cars[i].manufacturedYear);
  car.setDoors(cars[i].doors);
  car.setPrice(cars[i].price);
  car.setAvlbl(cars[i].available);
  car.setImg(cars[i].image);
  // console.log(car.getCar());

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
              <div class="available-btn">Available: <span>${car.getAvlbl()}</span></div>
            </div>
            <div class="del-cont">
              <button class="delete-btn">Delete</button>
            </div>`;
  // prettier-ignore
  car.getAvlbl() === "no" && (item.querySelector(".available-btn").style.backgroundColor = "rgb(214, 81, 81)");
  carList.appendChild(item);

  item.addEventListener("click", function (e) {
    if (!e.target.classList.contains("delete-btn")) return;
    const deleteEl = e.target.closest(".car-item");
    // deleteEl.remove();

    console.log(e.target.closest(".car-item").getAttribute("data-id"));
    console.log(car.getId());
  });
}
carManager.getCars().forEach((car) => console.log(car.getCar()));

const selectAvlbl = document.querySelector(".select-available");
console.log(selectAvlbl);

selectAvlbl.addEventListener("input", function () {
  console.log(selectAvlbl.value);
});
