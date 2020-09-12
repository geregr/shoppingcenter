var paid=0

function processString(str){
    // transfer string to array
    let arr = str.split("")

    // filter $ , space
    arr=arr.filter(x=>(x!=='$' && x!=="," && x!==" "))

    // return number
    var strstrstr=arr.join("")
    return +strstrstr;

}

$('.btn').click(e=>{
   var price = e.target.parentElement.children[2].innerText

   // get the number
   let num = processString(price)
   
    paid += num;
    $('#spent').html(paid)

})


function buy(){
    function processString(str){
        // transfer string to array
        let arr = str.split("")
    
        // filter $ , space
        arr=arr.filter(x=>(x!=='$' && x!=="," && x!==" "))
    
        // return number
        var strstrstr=arr.join("")
        return +strstrstr;
    
    }
    
    $('.btn').click(e=>{
       var price = e.target.parentElement.children[2].innerText
    
       // get the number
       let num = processString(price)
       
        paid += num;
        $('#spent').html(paid)
    
    })
}

