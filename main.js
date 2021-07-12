
/*like an product*/

let like = Array.from(document.querySelectorAll(".like-btn"))
like.forEach((h) => {
    h.addEventListener("click", (event) => {
        if (event.target.style.color != "red") {
            event.target.style.color = "red"
        } else { event.target.style.color = "black" }
    })
})
/*plus1*/

let adds = document.getElementsByClassName("plus")

for (const add of adds) {
    add.addEventListener('click',function () {
    add.nextElementSibling.innerHTML++
    sum()
    })
    
    
}
/*moins1*/
let moins =document.getElementsByClassName("minus")
for (const min of moins){
    min.addEventListener('click',function() {
        if(min.previousElementSibling.innerHTML>1)
       { min.previousElementSibling.innerHTML--
        sum()
    }
       else {alert('oooops')}
      
    })}

/*delete*/
let dels=document.querySelectorAll('.delete-btn')
for (const del of dels) {
    del.addEventListener('click',function () {
  del.parentNode.parentNode.parentNode.remove()
  sum()
    })
}

    /*price total */
let qtes=document.getElementsByClassName("quantite")
console.log(qtes[0].innerHTML)
let prices=document.getElementsByClassName('price')
console.log(prices[0].innerHTML)

function sum() {
    let tot=0
    for (let i = 0; i < qtes.length; i++) {
        tot=tot+qtes[i].innerHTML*prices[i].innerHTML        
    }
   return document.getElementById('som').innerHTML=tot
    
}

