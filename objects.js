var cars  = {
name: "Enterprise",  
type: ['economy', 'midsize'],
econ: 100,
econBooked: 0,
mid: 150,
midBooked: 0,

econAvail: function() {
    return this.econ - this.econBooked;
},

midAvail: function() {
    return this.mid - this.midBooked;
},


bookEcon: function() {
    return this.econBooked++;
},

bookMid: function() {
    return this.midBooked++;
}
};

    document.getElementById('name').innerHTML = cars.name;
   

function update() {
    document.getElementById('name').innerHTML = cars.name;
    document.getElementById('econ').innerHTML = cars.econAvail();
    document.getElementById('mid').innerHTML = cars.midAvail();
    
}

    
function rentEcon() {
    
    cars.bookEcon();
    document.getElementById('econ').innerHTML = cars.econAvail();
    }

 
function rentMid() {
    cars.bookMid();
    document.getElementById('mid').innerHTML = cars.midAvail();

}