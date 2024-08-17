let btn =document.querySelector("button");

btn.addEventListener("click" , async()=>{
    console.log("Button was clicked ");
    let fact = await getfacts();
    console.log(fact);

    let p=document.querySelector("p");
    p.innerText=fact;
    
    let image=await getImages();
    let body=document.querySelector("body");
    console.log(body)
    body.image=image;
})

let url= "https://catfact.ninja/fact";
let url2="https://api.thecatapi.com/v1/images/search";

async function getfacts()
{
    try{
        let res=await axios.get(url);
        return(res.data.fact);
    }   
    catch(err)
    {
        console.log("Your error is ",err);
        return "No fact found!!"
    }
}

async function getImages()
{
    try{
        let res=await axios.get(url2);
        return(res.url);
    }   
    catch(err)
    {
        console.log("Your error is ",err);
        return "No Images found!!"
    }
}

