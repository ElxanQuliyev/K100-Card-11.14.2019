'use strict';
// $(".mybtn").click(function(){
//     $(this).parents(".parents").find("span").css("color","red")

// })

// $(".bt").click(function(){
//     var bt= $(this).next();
//     bt.slideToggle().animate({
//         left:250+"px"
//     },1000,function(){
//         bt.animate({
//             left:0
//         },1000,function(){
//             bt.slideUp(500)   
//         })
//     })

// })
// document.querySelector(".mybtn").onclick=function(){
//     this.parentNode.parentNode
// }

const btnDom = $("[data-btn='Add_To_Cart']")


let card = []

btnDom.click(function () {




    const cardParent = $(this).parents(".card")
    const product = {
        image: cardParent.find(".card-img-top").attr("src"),
        name: cardParent.find(".card-title").text(),
        price: cardParent.find(".card-price").text(),
        quantity: 1
    }
    const modal = document.querySelector(".modal-body")


    let isInCard = card.filter(cardItem => (cardItem.name.trim() === product.name.trim())).length > 0;
    if (!isInCard) {
        modal.insertAdjacentHTML("beforeEnd", `
        <div class="md-card d-flex justify-content-between">
        <div class="col-lg-2">
            <img src="${product.image}" class="img-fluid" alt="">
        </div>
        <div class="col-lg-5">
            <p class="card-name">${product.name}</p>
        </div>
        <div>
            <span class="md-price">${product.price}</span>
            <button data-btn="Decrease_Item" class="btn btn-sm btn-danger">-</button>
            <span class="card-quantity">${product.quantity}</span>
            <button data-btn="Increase_Item" class="btn btn-sm btn-primary">+</button>
            <button data-btn="Remove_Item" class="btn btn-sm btn-danger">&times;</button>
    
        </div>
    </div>
        
        `)
    }
    card.push(product)
    const mdCard = $(".md-card")
    mdCard.each(function (vaqif, kamran) {
        let cardText = $(kamran).find(".card-name").text()
        if (cardText === product.name) {
            $(kamran).find("[data-btn='Increase_Item']").click(function () {
                card.forEach(cardItem => {
                    if (cardItem.name == product.name) {
                       let newPrice= Number(cardItem.price.split("Azn")[0]);
                       $(kamran).find(".card-quantity").text(++cardItem.quantity)
                       $(kamran).find(".md-price").text(newPrice*cardItem.quantity+" Azn")
                    }
                })
            })
            $(kamran).find("[data-btn='Decrease_Item']").click(function () {
                card.forEach(cardItem => {
                    if (cardItem.name == product.name) {
                        if (cardItem.quantity > 1) {
                            let newPrice= Number(cardItem.price.split("Azn")[0]);
                            $(kamran).find(".card-quantity").text(--cardItem.quantity)
                            $(kamran).find(".md-price").text(newPrice*cardItem.quantity+" Azn")

                        }
                    }
                })
            })
            $(kamran).find("[data-btn='Remove_Item']").click(function () {
                card.forEach(cardItem => {
                        $(kamran).remove()
                        console.log(card)
                })
            })
        }
    })
})

















