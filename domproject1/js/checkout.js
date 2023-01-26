window.onload =  function(event) {
    var x=JSON.parse(localStorage.getItem("data"))
    document.getElementById("pricecheckout").innerText=x.price

    document.getElementsByClassName("product-image")[0].src=x.image
     document.getElementsByClassName("product-image")[0].src=x.image
     document.getElementById("dis").innerText=x.name
     document.getElementById("qtt").Value=x.quantité

     
    }
    function check(){
        document.getElementById('pricecheckout').innerText=document.getElementById('qtt').value*3000
    }
   