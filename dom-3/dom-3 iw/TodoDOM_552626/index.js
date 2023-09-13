let form = document.querySelector("form")
let taskname=document.querySelector("#task")
let Priorityname=document.getElementById("priority")
let tbody=document.querySelector("tbody")

let globaldata=[];
form.addEventListener("submit",function(e){
    e.preventDefault();
    let data={
        task:taskname.value,
        Priority:Priorityname.value
    }
    globaldata.push(data)

    tbody.innerHTML=null;
    
    globaldata.forEach((el)=>{
        let tr=document.createElement("tr");

        let td1=document.createElement("td")
        let td2=document.createElement("td")

       
        td1.innerText=el.task
        td2.innerText=el.Priority
        
        console.log(el,el.task)


        tr.append(td1,td2)
        tbody.append(tr)
    })

})