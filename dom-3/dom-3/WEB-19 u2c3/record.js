// fill in javascript code here



let name=document.getElementById("name")
let employee_id=document.getElementById("employeeID")
let department=document.getElementById("department")
let experience=document.getElementById("exp")
let email=document.getElementById("email")
let mobile=document.getElementById("mbl")
let form=document.querySelector("form");
let tbody=document.querySelector("tbody")

let arr=[]
form.addEventListener("submit",function(el){
  el.preventDefault()
  let obj={
    name:name.value,
    employee_id:employee_id.value,
    department:department.value,
    experience:experience.value,
    email:email.value,
    mobile:mobile.value,


  }
  let role=""
  if(+experience.value<=1){
    role="Fresher"
  }else if(+experience.value>=2 && +experience.value<=5){
    role="Junior"
  }else if(+experience.value > 5){
    role="Senior"
  }

  obj.role = role
  arr.push(obj)

  arr.forEach((element,index)=>{
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td")
    let td3=document.createElement("td")
    let td4=document.createElement("td")
    let td5=document.createElement("td")
    let td6=document.createElement("td")
    let td7=document.createElement("td")
    let td8=document.createElement("td")

    td1.innerText=element.name;
    td2.innerText=element.employee_id;
    td3.innerText=element.department;
    td4.innerText=element.experience;
    td5.innerText=element.email;
    td6.innerText=element.mobile;
    td7.innerText=element.role;
    td8.innerText="delete"

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    tbody.append(tr)
    td8.addEventListener("click",function(){
      tr.remove()
    })
   
  })

  arr=[];
})