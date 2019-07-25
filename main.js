

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => helper(data))
.catch(err => console.log("Error:", err));




var country_list;

function helper(data){
country_list = data;
}

function callme(){
//console.log(country_list.length)
var country = document.getElementById("search").value
console.log(country)
var res = [];
for(var i=0; i<country_list.length; ++i){
if(country_list[i].name.toLowerCase().indexOf(country.toLowerCase()) !=-1){
 res.push(country_list[i])
}
}
if(res.length==1){
console.log(res)
 displayCountryInfo(res[0]);
}else if(res.length==0){
 //display all cntrs
alert("Country not found!")
}


}

function displayCountryInfo(countryData) {
  localStorage.setItem("country_name",JSON.stringify(countryData));
  console.log(countryData)
document.getElementById("name").innerHTML = 'Name: '+countryData.name;
  document.querySelector("#flag-container img").src = countryData.flag;
  document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;  
  
}



