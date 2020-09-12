const rowone = [
    {
        name: 'House',
        img:"https://th.bing.com/th/id/OIP.qtMmLZcmfB0zErt7Ul2N7wHaDS?w=322&h=155&c=7&o=5&dpr=2&pid=1.7",
        price:"$2,000,000"
    },
    {
        name: 'Car',
        img:"https://th.bing.com/th/id/OIP.JOJfhEHyZJDCFOi0RqurdwHaEK?w=285&h=180&c=7&o=5&dpr=2&pid=1.7",
        price:"$200,150"
    },
    {
        name: 'boat',
        img:"https://th.bing.com/th/id/OIP.o4PxKPGlvXkVYEXr2n7suAHaFj?w=228&h=180&c=7&o=5&dpr=2&pid=1.7",
        price:"$500,000"
    }]

    const rowtwo=[
    {
        name: 'Phone',
        img:"https://th.bing.com/th/id/OIP.k_TGVWMQs9ckotv5JRlKqwHaHa?w=177&h=180&c=7&o=5&dpr=2&pid=1.7",
        price:"$1,000"
    },    {
        name: 'Computer',
        img:"https://i.pinimg.com/originals/5a/26/b5/5a26b577ca7a30feee8a150bf43edd6e.png",
        price:"$2,340"
    }]

    const rowthree=[
    {

        name: 'Soda',
        img:"https://4.bp.blogspot.com/-RTPB_hLWdsE/V4WXMOnSfsI/AAAAAAAAFa0/iAwDTDiub74V2m-YDkQjGkJxu-ludW13ACLcB/w1200-h630-p-k-nu/WHY+YOU+SHOULD+STOP+DRINKING+SODFT+DRINKS+SODAS+COKE+NUTALK+NUTRITIONAL+TALK.png",
        price:"$1"
    }
]



var html

function functionfunction(arr){
    arr.forEach(e=>{
    html+=`
    <div class="col-4 p-2 ">
        <div class="m-4 shadow p-2">
            <h1>${e.name}</h1>
        <img src=${e.img} alt="" >
        <h1>${e.price}</h1>
        <button class="btn btn-outline-dark">Buy</button>
        <h1></h1>
        </div>
    </div>`
    })

}

$('.l').click(()=> {
    html = ""  
    functionfunction(rowone)
    document.getElementById("product").innerHTML=html
    buy()
})

$('.e').click(()=> {
    html = ""  
    functionfunction(rowtwo)
    document.getElementById("product").innerHTML=html
    buy()
})


$('.f').click(()=> {
    html = ""  
    functionfunction(rowthree)
    document.getElementById("product").innerHTML=html
    buy()
})
