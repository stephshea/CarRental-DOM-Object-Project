var cars = {
	type1: 'economy',
	eInventory: 4,
	eBooked: 0,
	econPrice: "$25",
	type2: 'midsize',
	mInventory: 5,
	mBooked: 0,
	midPrice: "$40",
	eAvail: function() {
		return this.eInventory - this.eBooked;
	},
	mAvail: function() {
		return this.mInventory - this.mBooked;
	},
	bookEcon: function() {
		return this.eBooked++;
	},
	bookMid: function() {
		return this.mBooked++;
	}
};

function rentEcon() {
	cars.bookEcon();
	document.getElementById('econ').innerHTML = cars.eAvail();
}

function rentMid() {
	cars.bookMid();
	document.getElementById('mid').innerHTML = cars.mAvail();
}

function displayInfo() {
	var newType = document.getElementById("car_type").value;
	if (newType == 1) {
		document.getElementById('cartype').innerHTML = cars.type1;
		document.getElementById('eprice').innerHTML = cars.econPrice;
		document.getElementById('econ').innerHTML = cars.eAvail();
		document.getElementById('cartype2').innerHTML = ("");
		document.getElementById('mprice').innerHTML = ("");
		document.getElementById('mid').innerHTML = ("");
	}
	/*else {
	document.getElementById('mprice').innerHTML=cars.midprice;
	document.getElementById('mid').innerHTML=cars.mAvail();
	}*/
	
	if (newType == 2) {
		document.getElementById('cartype2').innerHTML = cars.type2;
		document.getElementById('mprice').innerHTML = cars.midPrice;
		document.getElementById('mid').innerHTML = cars.mAvail();
		document.getElementById('cartype').innerHTML = ("");
		document.getElementById('eprice').innerHTML = ("");
		document.getElementById('econ').innerHTML = ("");
	}
	if (newType == 0) {
		document.getElementById('cartype2').innerHTML = ("");
		document.getElementById('mprice').innerHTML = ("");
		document.getElementById('mid').innerHTML = ("");
		document.getElementById('cartype').innerHTML = ("");
		document.getElementById('eprice').innerHTML = ("");
		document.getElementById('econ').innerHTML = ("");
	}
}
var reserve = {
	rentername: [],
	newType: [],
	addRenter: function(rentername, newType) {
		this.rentername.push({
			rentername: rentername,
		});
		this.newType.push({
			newType: newType
		});
	}
}

function rent() {
	var rentername = document.getElementById("name").value;
	var newType = document.getElementById("car_type").value;
	if (rentername == '') {
		alert('Please enter name')
	}
	if (newType == 0) {
		alert('Please enter car type')
	}
	if ((newType == 1) && (cars.eAvail() !== 0)) {
		rentEcon();
		reserve.addRenter(rentername, newType);
		console.log(reserve);
	}
	if ((newType == 2) && (cars.mAvail() !== 0)) {
		rentMid();
		reserve.addRenter(rentername, newType);
		console.log(reserve);
	}
	if (cars.mAvail == 0) {
		alert('None avail');
	}
	if (cars.eAvail == 0) {
		alert('None avail');
	}
}