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

const btnDom=$("[data-btn='Add_To_Cart']")
btnDom.click(function(){
    
  const cardParent= $(this).parents(".card")
  const product={
      image:cardParent.find(".card-img-top").attr("src"),
      name:cardParent.find(".card-title").text(),
      price:cardParent.find(".card-price").text(),
      quantity:1
    }
    const modal=document.querySelector(".modal-body")
    
    modal.insertAdjacentHTML("beforeEnd",`
    <div class="md-Cart d-flex justify-content-between">
    <div class="col-lg-2">
        <img src="${product.image}" class="img-fluid" alt="">
    </div>
    <div class="col-lg-5">
        <p>${product.name}</p>
    </div>
    <div>
        <span class="md-price">${product.price}</span>
        <button class="btn btn-sm btn-danger">-</button>
        <span>${product.quantity}</span>
        <button class="btn btn-sm btn-primary">+</button>

    </div>
</div>
    
    `)
})


















