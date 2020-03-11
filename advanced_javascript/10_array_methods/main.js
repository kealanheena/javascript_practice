var cars = ["Ford", "Chevey", "Dodge", "Toyota"];

document.getElementById("test1").innerHTML = cars;


function myFunction() {
  cars.push("Volvo");
  console.log(cars);
  document.getElementById("test1").innerHTML = cars;
}