//Arrow function
const calArea = (a, b, ...number) => {
  return (a + b) + "," + number;
};

const area = calArea(10, 20, 30, 40, 50);
console.log("area is:", area);
