const inputbox = document.querySelector(".input input");
const addbtn = document.querySelector(".input button");
const todo = document.querySelector(".todo");
const deleteAll = document.querySelector(".footer button");

inputbox.onkeyup = ()=>{
    let userData = inputbox.value; //getting user entered values
    if(userData.trim() != 0){ //if user values aren't only spaces
    addbtn.classList.add("active"); //active the add button
    }else{
        addbtn.classList.remove("active");
    }
    
}
showtask();

// func to add task inside ul
function showtask(){
    let getLocalStorage = localStorage.getItem("New Task");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage); // transform json str into a js obj
    }
    const pendingNum = document.querySelector(".pendNum");
    pendingNum.textContent = listArr.length; //passing the length value
    if(listArr.length>0){
        deleteAll.classList.add("active"); //active the clearall btn
    }else{
        deleteAll.classList.remove("active"); //unactive the btn
    }
    let newLitag = '';
    listArr.forEach((element,index)=>{
        newLitag += `<li> ${element} <span onclick = "deleteTask(${index})";><i class="fa fa-trash"></i></span></li>`;
    });
    todo.innerHTML = newLitag; //adding new li tag inside ul tag
    inputbox.value = ""; //once task added leave the input blank
}

//if user click on add button
addbtn.addEventListener("click",()=>{
    let userData = inputbox.value; //getting user value
    let getLocalStorage = localStorage.getItem("New Task"); //getting localstorage
    if(getLocalStorage == null){
        listArr = []; //creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage); // transform json str into a js obj
    }
    listArr.push(userData); //pushing or adding user data
    localStorage.setItem("New Task",JSON.stringify(listArr)); //transform js obj into a json string
    showtask(); //calling fn
});

//delete task

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Task");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,1); //delete the particular indexed li
    
    //after remove the li again update the local sorage
    localStorage.setItem("New Task",JSON.stringify(listArr)); //transform js obj into a json string
    showtask();
}

//delete all task

deleteAll.onclick = ()=>{
    listArr = []; //empty an array
    //after delete all task update the local storage
    localStorage.setItem("New Task",JSON.stringify(listArr));
    showtask();
}



//timer
function countdown(){
    var now = new Date();
    var eventDate = new Date(userData);
    var currenttime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currenttime;
}
