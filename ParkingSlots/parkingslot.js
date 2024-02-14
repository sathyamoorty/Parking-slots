let num=1;
let div1=document.createElement("div")
document.body.append(div1)
div1.setAttribute("id","mydiv")

let table=document.createElement("table")
div1.appendChild(table)
table.setAttribute("id","content1")
document.getElementById("content1").style.position="absolute"
document.getElementById("content1").style.left="800px"
document.getElementById("content1").style.top="100px"
document.getElementById("content1").style.borderCollapse="collapse"
document.getElementById("content1").style.width="90%"
let thead=document.createElement("thead")
table.appendChild(thead)

let tr=document.createElement("tr")
thead.appendChild(tr)

let th=document.createElement("th")
tr.appendChild(th)
th.textContent="S.no"

let th1=document.createElement("th")
tr.appendChild(th1)
th1.textContent="Name"

let th2=document.createElement("th")
tr.appendChild(th2)
th2.textContent="BikeNo"

let th3=document.createElement("th")
tr.appendChild(th3)
th3.textContent="CheckIn"

let th4=document.createElement("th")
tr.appendChild(th4)
th4.textContent="CheckOut"

let tbody=document.createElement("tbody")
thead.appendChild(tbody)
thead.style.display="block"

let button=document.getElementById("sub");
button.addEventListener("click",()=>{

let cname=document.getElementById("Cname").value;
let cbikeno=document.getElementById("Cbikeno").value;
let out=document.getElementById("Checkout").value; 
let check=document.getElementById("check").value;
if(cname !=="" && cbikeno!=="" && out!=="" && check!=="")
{
    let tr1=document.createElement("tr")
tbody.appendChild(tr1)
tr1.style.border="1px solid black"


let td=document.createElement("td");
tr1.appendChild(td)
td. textContent=num++;
td. style.border="1px solid black "


let td1=document.createElement("td");
tr1.appendChild(td1)
td1.textContent=cname
document.getElementById("Cname").value="";



let td2=document.createElement("td")
tr1.appendChild(td2)
td2.textContent=cbikeno
document.getElementById("Cbikeno").value=""


let td3=document.createElement("td");
tr1.appendChild(td3)
td3.textContent=check
document.getElementById("Checkout").value=""
 
let td4=document.createElement("td");
tr1.appendChild(td4)
td4.textContent=out
document.getElementById("check").value=""
}
else if(cname == "" && cbikeno == "" && out == "" && check ==""){
    alert("please fill the empty space")
}
})  


