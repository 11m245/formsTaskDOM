


function checkMaxCheck(){

    document.getElementById("any2").classList.add("text-danger");
    var checkEls=document.getElementsByName("cfood");
// console.log(checkEls[0]);
var count=0;

for(let i=0;i<checkEls.length;i++){
    if(checkEls[i].checked===true){
        count++;

        if(count<2){
            document.getElementById("any2").classList.add("text-secondary");
            document.getElementById("any2").innerText="(Any of 2 must be selected)";


            for(let i=0;i<checkEls.length;i++){
                if(checkEls[i].disabled===true)
                checkEls[i].disabled=false;
            }
        }

        else if(count===2){
            
            for(let i=0;i<checkEls.length;i++){
            if(checkEls[i].checked===false){
                checkEls[i].setAttribute("disabled", true);
            }

            }
        document.getElementById("any2").classList.add("bg-danger","text-white");
        document.getElementById("any2").innerText="(only 2 Allowed)";

        }
        else {
            checkEls[i].checked=false;

        }

    }
}

}

var signupFormEl=document.forms.form;
// console.log(signupFormEl);
signupFormEl.addEventListener("submit",handleSubmit);

var sno=1;

function handleSubmit(x){

    x.preventDefault();
    
    console.log("form submitted");
    var tbodyElement = document.getElementById("table1").tBodies[0];
    // console.log(tbodyElement);
    var rowDataElement = document.createElement("tr");

   rowDataElement.innerHTML=`  
    <td >${sno}</td>
    <td >${signupFormEl.fname.value}</td>
    <td >${signupFormEl.lname.value}</td>
    <td >${checkGender([...signupFormEl.gender])}</td>
    <td >${checkFoodSelection([...signupFormEl.cfood])}</td>
    <td >${signupFormEl.email.value}</td>
    <td >${signupFormEl.address.value}</td>
    <td >${signupFormEl.state.value}</td>
    <td >${signupFormEl.country.value}</td>
    <td >${signupFormEl.pin.value}</td>  
`;

    tbodyElement.append(rowDataElement);
    sno ++;

    document.getElementById("form").reset();

  // console.log(signupFormEl.elements)


function checkGender(genderElArray){

    for(x of genderElArray){
        if(x.checked){
            return x.value;
        }
    }
}


function checkFoodSelection(foodElArray){
    console.log(foodElArray);
    var selectedFood=[];
    for(x of foodElArray){
       
            if(x.checked===true){
                selectedFood.push(x.value);
            }
       
    }

    return selectedFood;
}

}


