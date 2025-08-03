/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const getObject = () => {
  const numName = Math.floor(Math.random() * NAMES.length);
  const name = NAMES[numName];
  const numOccu = Math.floor(Math.random() * OCCUPATIONS.length);
  const occu = OCCUPATIONS[numOccu];
  const price = Math.floor(
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1) + PRICE_RANGE.min
  );
  //   const numNum = Math.floor(Math.random() * NUM_FREELANCERS);
  //   const getNum = NUM_FREELANCERS[numNum];

  return { name, occu, price };
};

const freelancerNum = [];

for (let i = 0; i < NUM_FREELANCERS; i++) {
  const allObjects = getObject();
  freelancerNum.push(allObjects);
}
console.log(freelancerNum);

const getAvgRate = () => {
  const avgPrice =
    freelancerNum.reduce((a, b) => a + b.price, 0) / NUM_FREELANCERS;
  console.log();
  return avgPrice;
};

const avgRate = getAvgRate();

const singleFreelancer = () => {
  const $div = document.createElement("div");
  const freelancerOne = Math.floor(Math.random() * freelancerNum.length) + 1;
  $div.textContent = freelancerNum[freelancerOne];
  return freelancerNum[freelancerOne];
};

console.log(singleFreelancer());

const listFreelancers = () => {
  const $section = document.createElement("section");
  freelancerNum.forEach((freelancer) => {
    const $table = document.createElement("table");
    $table.textContent = `${freelancer.name} - ${freelancer.occu} - ${freelancer.price}/hr`;
    $section.append($table);
  });

  //   const fullList = [];
  //   for (let i = 0; NUM_FREELANCERS > i; i++) {
  //     $table.textContent = `${freelancerNum.name} - ${freelancerNum.occu} - ${freelancerNum.price}`;
  //     fullList.push($table);
  //   }
  //   $section.append($table);
  return $section;
};

const listAvgPrice = () => {
  const $p = document.createElement("p");
  $p.textContent = avgRate;
  return $p;
};

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <listAvgPrice></listAvgPrice>
    <listFreelancers></listFreelancers>
  `;
  $app.querySelector("listAvgPrice").replaceWith(listAvgPrice());
  $app.querySelector("listFreelancers").replaceWith(listFreelancers());
}
render();
