function checkCompatibility(){

    let blood = document.getElementById("bloodGroup").value;
    let result = document.getElementById("result");

    let compatibility = {

        "O-":"Can Donate To: O-",
        "O+":"Can Donate To: O+, A+, B+, AB+",
        "A-":"Can Donate To: A-, A+, AB-, AB+",
        "A+":"Can Donate To: A+, AB+",
        "B-":"Can Donate To: B-, B+, AB-, AB+",
        "B+":"Can Donate To: B+, AB+",
        "AB-":"Can Donate To: AB-, AB+",
        "AB+":"Can Donate To: AB+"

    };

    result.innerHTML = compatibility[blood];
}
document.getElementById("donorForm").addEventListener("submit", function(e){

    e.preventDefault();

    document.getElementById("successMsg").innerHTML =
    "✅ Registration Successful! Thank you for saving lives.";

});
function searchDonor(){

    let blood = document.getElementById("searchBlood").value;
    let result = document.getElementById("donorResult");

    let donors = {

        "O+" : "👤 Arjun | 📍 Chennai | 📞 9876543210",

        "A+" : "👤 Priya | 📍 Salem | 📞 9876543211",

        "B+" : "👤 Karthik | 📍 Coimbatore | 📞 9876543212",

        "AB+" : "👤 Meena | 📍 Madurai | 📞 9876543213"

    };

    result.innerHTML =
        "<h3>" + donors[blood] + "</h3>";
}
document.getElementById("donorForm").addEventListener("submit", function(e){

    e.preventDefault();

    alert("🎉 Donor Registered Successfully!");

    this.reset();

});
let donors = [
    {name:"Ravi Kumar", blood:"O+", city:"Chennai", phone:"9876543210"},
    {name:"Priya Sharma", blood:"A+", city:"Salem", phone:"9876543211"},
    {name:"Arun", blood:"B+", city:"Coimbatore", phone:"9876543212"}
];
function addDonor() {

    let name = document.getElementById("name").value;
    let blood = document.getElementById("blood").value;
    let city = document.getElementById("city").value;
    let phone = document.getElementById("phone").value;

    let donor = {
        name: name,
        blood: blood,
        city: city,
        phone: phone
    };

    let donors = JSON.parse(localStorage.getItem("donors")) || [];

    donors.push(donor);

    localStorage.setItem("donors", JSON.stringify(donors));

    document.getElementById("msg").innerHTML =
    "✅ Donor Registered Successfully!";
}


    

function submitRequest(){

    document.getElementById("successMsg").innerHTML =
    "✅ Request Submitted Successfully";
    clear();

    

}
function clearForm(){

    document.getElementById("patientName").value = "";
    document.getElementById("bloodGroup").value = "";
    document.getElementById("hospital").value = "";
    document.getElementById("city").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("info").value = "";

}






 
function loadDonors(){

    let donors = JSON.parse(localStorage.getItem("donors")) || [];

    if(donors.length === 0){
        donors = [
            {name:"Ravi Kumar", blood:"O+", city:"Chennai", phone:"9876543210"},
            {name:"Priya Sharma", blood:"A+", city:"Salem", phone:"9876543211"}
        ];
    }

    showDonors(donors);
}

function searchDonor(){

    let blood = document.querySelector(".search-box select").value;

    let donors = JSON.parse(localStorage.getItem("donors")) || [];

    let filtered = donors.filter(d => d.blood == blood);

    showDonors(filtered);
}







function showDonors(list){

    let container = document.getElementById("donorContainer");

    container.innerHTML = "";

    list.forEach(d => {

        container.innerHTML += `
        <div class="donor-card">
            <h3>👤 ${d.name}</h3>
            <p>🩸 ${d.blood}</p>
            <p>📍 ${d.city}</p>
            <p>📞 ${d.phone}</p>
        </div>
        `;
    });
}

// SHOW ALL INITIALLY
showDonors(donors);

// SEARCH FUNCTION
function searchDonor(){

    let blood = document.querySelector(".search-box select").value;

    let filtered = donors.filter(d => d.blood == blood);

    showDonors(filtered);
}
function loadDonors(){

let donors =
JSON.parse(localStorage.getItem("donors")) || [];

let container =
document.getElementById("donorContainer");

if(container){

container.innerHTML="";

donors.forEach(donor=>{

container.innerHTML += `

<div class="donor-card">

<h3>${donor.name}</h3>

<p>🩸 ${donor.blood}</p>

<p>📍 ${donor.city}</p>

<p>📞 ${donor.phone}</p>

<button>Request Donor</button>

</div>

`;

});

}

}

window.onload = loadDonors;
function loadDonors() {

    let donors = JSON.parse(localStorage.getItem("donors")) || [];

    let output = "";

    donors.forEach(function(donor){

        output += `
        <div class="donor-card">
            <h3>${donor.name}</h3>
            <p>Blood Group: ${donor.blood}</p>
            <p>City: ${donor.city}</p>
            <p>Phone: ${donor.phone}</p>
        </div>
        `;

    });

    document.getElementById("donor-list").innerHTML = output;
}



loadDonors();
