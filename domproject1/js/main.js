var quantité=0
var addproduct=function(){  
    quantité++
    document.getElementById("quanty").innerText=quantité
    totalprice()
}
var moinproduct=function(){
    if(quantité>0){
        quantité--
        document.getElementById("quanty").innerText=quantité
    }
    totalprice()
}
var totalprice=function(){
    document.getElementById("prix").innerText=quantité*3000


}
var storage=function(){
    var obj={}
    const image=document.getElementsByClassName("ram")[0].src
    const name=document.getElementById("desc").innerText
    const price=document.getElementById("prix").innerText
    obj={
        image:image,
        name:name,
        price:price,
        quantité:quantité
        
        

    }
 localStorage.setItem("data",JSON.stringify(obj))
}

