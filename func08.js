//1.Define function
const greet = () => {
  console.log("Hi");
};

//1.Define function
const inUser = (callback, msg, name) => {
  callback();
  console.log(msg, name);
};
//2.Call function
inUser(greet, "Hello", "Mark");
