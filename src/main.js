"use strict";
import "./style.css";

const carsData = [
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

const carList = document.querySelector(".car-list");

const selectAvlbl = document.querySelector(".select-available");

const selectSort = document.querySelector(".select-sort");

const carCreator = function (carArg) {
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
  const getImg = () => car.image;
  const setImg = (value) => (car.image = value);

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
  let currentFilter;
  let currentSort;
  let cars = [];
  let freshCars;
  // prettier-ignore
  const filterAndSort = () => {
    freshCars = carsData.map(car => carCreator(car));

    (cars = freshCars.filter((car) => car.getAvlbl() === currentFilter)).sort((a,b) => {
      if (currentSort === ("z-a")) return (a.getName() < b.getName()) ? 1 : ((b.getName() < a.getName()) ? -1 : 0)
      if (currentSort === ("a-z")) return (a.getName() > b.getName()) ? 1 : ((b.getName() > a.getName()) ? -1 : 0)});
 
  }
  const getFreshCars = () => freshCars;

  const setCurrentFilter = (value) => (currentFilter = value);
  const setCurrentSort = (value) => (currentSort = value);

  const addToCars = (car) => cars.push(car);
  const getCars = () => cars;

  const setCars = (value) => (cars = value);

  const emptyCarsArr = () => (cars = []);

  return {
    filterAndSort,
    getFreshCars,
    setCurrentFilter,
    setCurrentSort,
    addToCars,
    getCars,
    setCars,
    emptyCarsArr,
  };
};

const carManager = carManagerCreator();

const defaultUI = function () {
  for (let i = 0; i < carsData.length; i++) {
    // carList.innerHTML = "";
    const car = carCreator(carsData[i]);
    carManager.addToCars(car);

    // car.setName(cars[i].name);
    // car.setBrand(cars[i].brand);
    // car.setYear(cars[i].manufacturedYear);
    // car.setDoors(cars[i].doors);
    // car.setPrice(cars[i].price);
    // car.setAvlbl(cars[i].available);
    // car.setImg(cars[i].image);
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

      // console.log(
      //   e.target.closest(".car-item").getAttribute("data-id") ===
      //     String(car.getId())
      // );

      const index = carManager
        .getCars()
        .findIndex(
          (car) =>
            String(car.getId()) ===
            e.target.closest(".car-item").getAttribute("data-id")
        );
      // console.log(index);
      carManager.getCars().splice(index, 1);
      carManager.getCars().forEach((car) => console.log(car.getCar()));
      const deleteEl = e.target.closest(".car-item");
      deleteEl.remove();
    });
  }
};
defaultUI();

const setUI = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const item = document.createElement("li");
    item.classList.add("car-item");
    item.setAttribute("data-id", arr[i].getId());
    item.innerHTML = `<div class="img-cont">
            <h3 class="car-name">${arr[i].getName()}</h3>
            <img class="car-img" src="${arr[i].getImg()}" />
          </div>
          <div class="specifications-cont">
            <p>Brand:<span>${arr[i].getBrand()}</span></p>
            <p>Manufactured Year:<span>${arr[i].getYear()}</span></p>
            <p>Doors:<span>${arr[i].getDoors()}</span></p>
            <p>Price:<span>$${arr[i].getPrice()}</span></p>
          </div>
          <div class="availability-cont">
            <div class="available-btn">Available: <span>${arr[
              i
            ].getAvlbl()}</span></div>
          </div>
          <div class="del-cont">
            <button class="delete-btn">Delete</button>
          </div>`;
    // prettier-ignore
    arr[i].getAvlbl() === "no" && (item.querySelector(".available-btn").style.backgroundColor = "rgb(214, 81, 81)");
    carList.appendChild(item);

    item.addEventListener("click", function (e) {
      if (!e.target.classList.contains("delete-btn")) return;
      console.log(e.target.closest(".car-item").getAttribute("data-id"));

      console.log(String(arr[i].getId()));

      const index = arr.findIndex(
        (car) =>
          String(car.getId()) ===
          e.target.closest(".car-item").getAttribute("data-id")
      );
      // console.log(index);
      arr.splice(index, 1);
      arr.forEach((car) => console.log(car.getCar()));
      const deleteEl = e.target.closest(".car-item");
      deleteEl.remove();
    });
  }
};

selectAvlbl.addEventListener("input", function (e) {
  console.log(e.target.value);

  if (e.target.value === "all") {
    carList.innerHTML = "";
    carManager.emptyCarsArr();
    carManager.setCurrentFilter();
    carManager.filterAndSort();
    defaultUI();
    carManager.getCars().forEach((car) => console.log(car.getCar()));
  }

  if (e.target.value === "available") {
    carManager.setCurrentFilter("yes");
    carManager.filterAndSort();
    carManager.getCars().forEach((car) => console.log(car.getCar()));
    carList.innerHTML = "";
    setUI(carManager.getCars());
  }

  if (e.target.value === "not-available") {
    carManager.setCurrentFilter("no");
    carManager.filterAndSort();
    carManager.getCars().forEach((car) => console.log(car.getCar()));
    carList.innerHTML = "";
    setUI(carManager.getCars());
  }
});

selectSort.addEventListener("input", function (e) {
  console.log(selectSort.value);

  if (e.target.value === "a-z") {
    // prettier-ignore
    carManager.setCurrentSort("a-z");
    carManager.filterAndSort();
    console.log(
      carManager.getFreshCars().forEach((car) => console.log(car.getCar()))
    );

    carManager.getCars().forEach((car) => console.log(car.getCar()));
    carList.innerHTML = "";
    setUI(carManager.getCars());
  }

  if (e.target.value === "z-a") {
    // prettier-ignore
    carManager.setCurrentSort("z-a");
    carManager.filterAndSort();
    console.log(
      carManager.getFreshCars().forEach((car) => console.log(car.getCar()))
    );

    carManager.getCars().forEach((car) => console.log(car.getCar()));
    carList.innerHTML = "";
    setUI(carManager.getCars());
  }
});

// selectAvlbl.addEventListener("input", function (e) {
//   console.log(e.target.value);
//   if (e.target.value === "all") {
//     carList.innerHTML = "";
//     defaultUI();
//   }

//   if (e.target.value === "available") {
//     // prettier-ignore
//     const carsAvailable = carManager.getCars().filter(car => car.getAvlbl() === 'yes');
//     carsAvailable.forEach((car) => console.log(car.getCar()));
//     carList.innerHTML = "";

//     setUI(carsAvailable);
//     // carsAvailable.splice(0, carsAvailable.length);
//   }
//   if (e.target.value === "not-available") {
//     // prettier-ignore
//     const carsNotAvailable = carManager.getCars().filter((car) => car.getAvlbl() === "no");
//     carsNotAvailable.forEach((car) => console.log(car.getCar()));
//     carList.innerHTML = "";

//     setUI(carsNotAvailable);
//     // carsNotAvailable.splice(0, carsNotAvailable.length);
//   }
// });

// selectSort.addEventListener("input", function (e) {
//   console.log(selectSort.value);

//   if (e.target.value === "a-z") {
//     // prettier-ignore
//     const carsSortedAZ = carManager.getCars().sort((a,b) => (a.getName() > b.getName()) ? 1 : ((b.getName() > a.getName()) ? -1 : 0));
//     carsSortedAZ.forEach((car) => console.log(car.getName()));

//     carList.innerHTML = "";

//     setUI(carsSortedAZ);
//   }
//   if (e.target.value === "z-a") {
//     // prettier-ignore
//     const carsSortedZA = carManager.getCars().sort((b,a) => (a.getName() > b.getName()) ? 1 : ((b.getName() > a.getName()) ? -1 : 0));
//     carsSortedZA.forEach((car) => console.log(car.getName()));

//     carList.innerHTML = "";

//     setUI(carsSortedZA);
//   }
//   if (e.target.value === "price-lowest") {
//     // prettier-ignore
//     const priceHighest = carManager.getCars().sort((a,b) => (a.getPrice() > b.getPrice()) ? 1 : ((b.getPrice() > a.getPrice()) ? -1 : 0));
//     priceHighest.forEach((car) => console.log(car.getPrice()));

//     carList.innerHTML = "";

//     setUI(priceHighest);
//   }
//   if (e.target.value === "price-highest") {
//     // prettier-ignore
//     const priceHighest = carManager.getCars().sort((b,a) => (a.getPrice() > b.getPrice()) ? 1 : ((b.getPrice() > a.getPrice()) ? -1 : 0));
//     priceHighest.forEach((car) => console.log(car.getPrice()));

//     carList.innerHTML = "";

//     setUI(priceHighest);
//   }
// });
