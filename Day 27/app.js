let url = "http://universities.hipolabs.com/search?name="


let btn= document.querySelector("button")

btn.addEventListener("click",async ()=> {
    let country = document.querySelector("input").value
    let res = await getCollege(country)
    print(res)
})

async function getCollege(country) {
    let res = await axios.get(url+country)
    return res.data
}

function print(res){
    for(r of res){
        let ul = document.querySelector("ul")
        let li=document.createElement('li')
        li.innerText = r.name
        ul.appendChild(li)
    }
}