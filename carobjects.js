/*global cars*/
/*global cartype*/
/*global selectedIndex*/
/*global selectBtn */


var carRental = {
	cars: [
			{
				cartype: 'Economy',
				inventory: 4,
				booked: 2,
				price: "$25"
			},
			
			{	cartype: 'Midsize',
				available: 5,
				booked: 1,
				price: "$40"
			},
				
			{	cartype: 'Luxury',
				available: 7,
				booked: 4,
				price: "$70"
			}
    ],
   
}
	

function displayDetails(car) {
    console.log(car);
    document.getElementById("price").innerHTML = carRental.cars[car].price;
    document.getElementById("available").innerHTML = carRental.cars[car].available;
}

	
	for (var i = 0; i < carRental.cars.length; i++) {
		var selectBtn = document.createElement("OPTION");
		selectBtn.setAttribute('type', 'option');
		selectBtn.setAttribute('value', i);
	    selectBtn.innerHTML = carRental.cars[i].cartype;
	    selectBtn.setAttribute("onchange", "displayDetails(" + i + ")");  
		document.getElementById("selectMenu").appendChild(selectBtn);
	}



// function rent() {
// 	cars.book();
// 	document.getElementById('econ').innerHTML = cars.avail();
// }

// function rentMid() {
// 	cars.bookMid();
// 	document.getElementById('mid').innerHTML = cars.mAvail();
// }

// function displayInfo() {
// 	var newType = document.getElementById("car_type").value;
// 	if (newType == 1) {
// 		document.getElementById('cartype').innerHTML = cars.type1;
// 		document.getElementById('eprice').innerHTML = cars.econPrice;
// 		document.getElementById('econ').innerHTML = cars.eAvail();
// 		document.getElementById('cartype2').innerHTML = ("");
// 		document.getElementById('mprice').innerHTML = ("");
// 		document.getElementById('mid').innerHTML = ("");
// 	}
// 	/*else {
// 	document.getElementById('mprice').innerHTML=cars.midprice;
// 	document.getElementById('mid').innerHTML=cars.mAvail();
// 	}*/
	
	
	
// 	if (newType == 2) {
// 		document.getElementById('cartype2').innerHTML = cars.type2;
// 		document.getElementById('mprice').innerHTML = cars.midPrice;
// 		document.getElementById('mid').innerHTML = cars.mAvail();
// 		document.getElementById('cartype').innerHTML = ("");
// 		document.getElementById('eprice').innerHTML = ("");
// 		document.getElementById('econ').innerHTML = ("");
// 	}
// 	if (newType == 0) {
// 		document.getElementById('cartype2').innerHTML = ("");
// 		document.getElementById('mprice').innerHTML = ("");
// 		document.getElementById('mid').innerHTML = ("");
// 		document.getElementById('cartype').innerHTML = ("");
// 		document.getElementById('eprice').innerHTML = ("");
// 		document.getElementById('econ').innerHTML = ("");
// 	}
// }



// for (var i = 0; i < hotel.rooms.length; i++) {
//     console.log("start");
//   var radioBtn = document.createElement("INPUT");
//     radioBtn.setAttribute("type", "radio");
//     radioBtn.setAttribute("name", "roomType");
//     radioBtn.setAttribute("value", i);
//     radioBtn.setAttribute("id", "room" + i);
//     // radioBtn.onclick = displayDetails(i);
//     radioBtn.setAttribute("onclick", "displayDetails(" + i + ")")
//     var radioLbl = document.createElement("LABEL");
//     radioLbl.innerHTML = hotel.rooms[i].name;
//     document.getElementById("radialSection").appendChild(radioBtn);
//     document.getElementById("radialSection").appendChild(radioLbl);
//     console.log("stop");
// var reserve = {
// 	rentername: [],
// 	newType: [],
// 	addRenter: function(rentername, newType) {
// 		this.rentername.push({
// 			rentername: rentername,
// 		});
// 		this.newType.push({
// 			newType: newType
// 		});
// 	}
// }

// function rent() {
// 	var rentername = document.getElementById("name").value;
// 	var newType = document.getElementById("car_type").value;
// 	if (rentername == '') {
// 		alert('Please enter name')
// 	}
// 	if (newType == 0) {
// 		alert('Please enter car type')
// 	}
// 	if ((newType == 1) && (cars.eAvail() !== 0)) {
// 		rentEcon();
// 		reserve.addRenter(rentername, newType);
// 		console.log(reserve);
// 	}
// 	if ((newType == 2) && (cars.mAvail() !== 0)) {
// 		rentMid();
// 		reserve.addRenter(rentername, newType);
// 		console.log(reserve);
// 	}
// 	if (cars.mAvail == 0) {
// 		alert('None avail');
// 	}
// 	if (cars.eAvail == 0) {
// 		alert('None avail');
// 	}
// }