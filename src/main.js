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
    image: "./img/first car toyota.jpg",
  },
  {
    id: 2,
    name: "Honda Civic",
    brand: "Honda",
    manufacturedYear: 2020,
    doors: 4,
    price: 25000,
    available: "yes",
    image: "./img/honda civic second.webp",
  },
  {
    id: 3,
    name: "Ford Mustang",
    brand: "Ford",
    manufacturedYear: 2018,
    doors: 2,
    price: 35000,
    available: "no",
    image: "./img/mustant 3.png",
  },
  {
    id: 4,
    name: "BMW 3 Series",
    brand: "BMW",
    manufacturedYear: 2021,
    doors: 4,
    price: 45000,
    available: "yes",
    image: "./img/BMW 3 Series 4.png",
  },
  {
    id: 5,
    name: "Chevrolet Camaro",
    brand: "Chevrolet",
    manufacturedYear: 2017,
    doors: 2,
    price: 32000,
    available: "no",
    image: "./img/Chavrolet 5.jpg",
  },
  {
    id: 6,
    name: "Audi A4",
    brand: "Audi",
    manufacturedYear: 2022,
    doors: 4,
    price: 42000,
    available: "yes",
    image: "./img/audi a4 6.jpg",
  },
  {
    id: 7,
    name: "Mercedes-Benz E-Class",
    brand: "Mercedes-Benz",
    manufacturedYear: 2020,
    doors: 4,
    price: 50000,
    available: "yes",
    image: "./img/mercedes e klasa 7.jpg",
  },
  {
    id: 8,
    name: "Lexus IS",
    brand: "Lexus",
    manufacturedYear: 2019,
    doors: 4,
    price: 38000,
    available: "no",
    image: "./img/lexus 8.webp",
  },
  {
    id: 9,
    name: "Volkswagen Golf",
    brand: "Volkswagen",
    manufacturedYear: 2021,
    doors: 4,
    price: 28000,
    available: "yes",
    image: "./img/golf 9.jpg",
  },
  {
    id: 10,
    name: "Subaru Outback",
    brand: "Subaru",
    manufacturedYear: 2022,
    doors: 4,
    price: 32000,
    available: "yes",
    image: "./img/subaru 10.png",
  },
];

const carCont = document.querySelector(".car-cont");
const carList = document.querySelector("car-lists");

console.log(cars);

const carCreator = function () {
  const car = {
    id: crypto.randomUUID(),
    name: "",
    brand: "",
    year: "",
    doors: "",
    price: "",
    available: true,
    img: "",
  };
  const getId = () => car.id;
  const getName = () => car.name;
  const getBrand = () => car.brand;
  const getYear = () => car.year;
  const getDoors = () => car.doors;
  const getPrice = () => car.price;
  const getAvlbl = () => car.available;
  const changeStatus = (value) => (car.available = value);
  const getImg = () => car.img;
  const setImg = (value) => (car.img = value);

  return {
    getId,
    getName,
    getBrand,
    getYear,
    getDoors,
    getPrice,
    getAvlbl,
    changeStatus,
    getImg,
    setImg,
  };
};

// const car = carCreator();

// const carManager = function () {
//   const cars = [];
// };

const carItem = function () {
  for (let i; i > cars.length; i++) {
    console.log([i]);
  }
};
carItem();
