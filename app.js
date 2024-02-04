const mybutton=document.querySelector("button")
const inputbox=document.querySelector("input")
const myul= document.querySelector("ul")

mybutton.addEventListener("click", function()
{
    let task =inputbox.value

//    console.log(task)
 let myli = document.createElement("li")
//  console.log(myli)

myli.innerHTML =`${task} <i class="fa-solid fa-delete-left fa-beat-fade"></i> `
// console.log(task)

myul.append(myli)
inputbox.value =""
myli.querySelector("i").addEventListener("click", function()
{
    myli.remove()
}
)
})

 const deleteall= document.querySelector("i")
 deleteall.addEventListener("click", function()
 {
    myul.remove ()
 })
