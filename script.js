// //ALSO WE CAN USE DEBUGGER THING ON THE CONSOLE TO VIEW A FUNCTION CALL WE MADE STEPWISE

// function Tableboy(name, age, exp, rep) {
//   //constructor function's names start with a capital letter
//   this.name = name;
//   this.age = age;
//   this.exp = exp;
//   this.rep = rep; //repertoire
//   this.clean = (area) => {
//     alert(`${this.name} is cleaning ${area}`);
//   };
// }

// let t1 = new Tableboy("madan", 19, 2, ["washing", "brooming", "sweeping"]);
// t1.clean("Room no.13")



const btn=document.querySelector(".btn")
let lst=document.querySelector(".list")
let counter=0

//getting storage items and adding in list and increasing cnt if present otherwise initialising array
let storedData=localStorage.getItem("arr")
if(storedData!=null)
{
  JSON.parse(localStorage.getItem("arr")).forEach(element => 
    {
    let l=document.createElement("li")

    let ticky = document.createElement("input");
    ticky.classList.add("tick");
    ticky.setAttribute("type", "checkbox");
    ticky.addEventListener("click", function () {
      // console.log(this.parentElement.textContent[0]);
      delElement(this.parentElement.textContent[0]);
      counter--
    });

    l.textContent = counter + 1 + ".  " + element;
    l.appendChild(ticky);
    lst.appendChild(l)
    counter++
  });
}
else
{
  var arr=[]
}


function enter()
{
  //if no list already=> add item in list and in array and save in local storage and increment counter
  let input = document.querySelector(".input-box");

  let ticky=document.createElement("input")
  ticky.classList.add("tick")
  ticky.setAttribute("type","checkbox")
  ticky.addEventListener("click",function()
  {
    delElement(this.parentElement.textContent[0]);
  })
  let l = document.createElement("li");
  l.textContent = (counter+1)+".  "+input.value;
  l.appendChild(ticky)
  lst.appendChild(l);


  if(counter==0)
  {
    console.log(input.value)
    // arr.push(input.value)
    localStorage.setItem("arr",JSON.stringify([input.value]))

    counter++
  }
  // otherwise add item in list in html, add in localstorage array and increment counter
  else
  {
    let arr1=JSON.parse(localStorage.getItem("arr"))
    arr1.push(input.value)
    localStorage.setItem("arr",JSON.stringify(arr1))

    counter++
  }

  console.log(localStorage.getItem("arr"))

  // document.querySelector("input-box").value=""
  input.value=""
}


// if someone touches button or clicks the enter key
btn.addEventListener("click",enter)
document.addEventListener("keydown", function (event) {
  // console.log(event.key)
  if(event.key=="Enter")
  {
    enter()
  }
});

document.querySelector(".clear-btn").addEventListener("click",function()
{
  localStorage.clear()
  lst.innerHTML=""
  counter=0
})

function delElement(i)
{
  // console.log(JSON.parse(localStorage.getItem("arr")[i]))
  console.log(i)
  let oldarr=JSON.parse(localStorage.getItem("arr"))
  // console.log(oldarr)
  oldarr.splice(i - 1, 1);
  console.log(oldarr)
  
  //add stikethrough
  document.querySelectorAll("li")[i - 1].setAttribute("style", "text-decoration: line-through;");
  localStorage.setItem("arr", JSON.stringify(oldarr));
  // counter--
  // console.log(arr)
  
}
