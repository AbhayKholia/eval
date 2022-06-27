//store the products array in localstorage as "data"

    // let obj = {}
    function Eproducts(b,p,pn,i){
        this.Bname = b;
        this.pname = p;
        this.pricename = pn;
        this.img = i;
    }
  



// let arr = []
function psubmit(e){
e.preventDefault()

let form = document.getElementById("product_form")
let Bname = form.product_brand.value;
let pname = form.product_name.value;
let pricename = form.product_price.value;
let img = form.product_image.value;

let ecomm = new Eproducts(Bname,pname,pricename,img)

let arr = JSON.parse(localStorage.getItem("Eproducts")) || []
arr.push(ecomm)
localStorage.setItem("Eproducts",JSON.stringify(arr))
console.log(ecomm)

}

