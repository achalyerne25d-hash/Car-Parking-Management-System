let MAX = 20;
let parking = new Array(MAX).fill(null);

// Render Parking Grid
function renderParking(){

let container = document.getElementById("parkingLot");
container.innerHTML = "";

for(let i=0; i<MAX; i++){

let div = document.createElement("div");
div.classList.add("slot");

if(parking[i] == null){
div.classList.add("empty");
div.innerText = "Slot "+(i+1)+"\nEMPTY";
}
else{
div.classList.add("occupied");
div.innerText = "Slot "+(i+1)+"\n"+parking[i];
}

container.appendChild(div);
}
}

// Car Entry
function carEntry(){

let carNo = document.getElementById("carNo").value;

if(carNo == ""){
document.getElementById("output").innerText="Please enter car number";
return;
}

if(parking.includes(carNo)){
document.getElementById("output").innerText="Car already parked!";
return;
}

let index = parking.indexOf(null);

if(index == -1){
document.getElementById("output").innerText="Parking FULL!";
return;
}

parking[index] = carNo;

document.getElementById("output").innerText=
"Car "+carNo+" parked at slot "+(index+1);

document.getElementById("carNo").value="";

renderParking();
}

// Car Exit
function carExit(){

let carNo = document.getElementById("carNo").value;

if(carNo == ""){
document.getElementById("output").innerText="Please enter car number";
return;
}

let index = parking.indexOf(carNo);

if(index == -1){
document.getElementById("output").innerText="Car not found";
return;
}

parking[index] = null;

document.getElementById("output").innerText=
"Car "+carNo+" exited from slot "+(index+1);

document.getElementById("carNo").value="";

renderParking();
}

// Show Status
function showStatus(){

let occupied = parking.filter(car => car !== null).length;
let available = MAX - occupied;

document.getElementById("output").innerText=
"Total Slots: "+MAX+
"\nOccupied Slots: "+occupied+
"\nAvailable Slots: "+available;
}

// Display Cars
function displayCars(){

let result = "";

for(let i=0; i<MAX; i++){

if(parking[i] == null){
result += "Slot "+(i+1)+": EMPTY\n";
}
else{
result += "Slot "+(i+1)+": "+parking[i]+"\n";
}

}

document.getElementById("output").innerText = result;
}

// Initial Load
renderParking();