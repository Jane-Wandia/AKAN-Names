
let maleNames =[ 'Kwasi','Kwadwo', 'Kwabena','Kwaku','Yaw','Kofi','kwame']

let femaleNames= ['Akosua','Adwoa','Abenaa','Akua','Yaa', 'Afua','Ama']

let Days = ['Sunday','Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday']





let form = document.getElementById('sbb');


form.addEventListener('click', function(event){

event.preventDefault();

calling();

});


function calling() {


  


  if (datedate.value == "") {
    alert("Date must be filled out");
    return false;
  }


  let dateOfBirth = document.getElementById('datedate').value;
  
  let birthDay = new Date(dateOfBirth);
  let day = birthDay.getDay();

  
  var z = document.getElementById('para');
  // z.innerText = "Your Akan Name is" +  ;

  let gender = document.getElementsByName('gender');

 for(let i of gender){
  if (i.value === 'Male') {
    z.innerText= (`Your Akan Name is ${maleNames[day]}`);
  } else {
    z.innerText= (`Your Akan Name is ${femaleNames[day]}`);
  }
}


};












// const calender = document.getElementById('datedate').value;























