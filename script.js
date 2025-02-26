let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let fact = await getFacts();

    let p = document.querySelector("#aFact");
    p.innerText = fact;
});


let url = "https://catfact.ninja/fact";


async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("error:", e);
        return "No Fact Found";
    }
}

// dog image through api
let butn = document.querySelector("#dog");
butn.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#image");
    img.setAttribute("src", link);
});
let url2 = "https://dog.ceo/api/breeds/image/random";
async function getImage() {
    try {
        let res = await axios.get(url2);

        return res.data.message;
    } catch (e) {
        console.log("error:", e);
        return "No Image Found";
    }
}


let url3 = "http://universities.hipolabs.com/search?name=";


document.addEventListener("DOMContentLoaded", function () {
    let baton = document.querySelector("#baton");
    baton.addEventListener("click", async () => {

        let country = document.querySelector("input").value;
        let colArr = await getColleges(country);

        show(colArr);
    });
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";

    //create list and add college name


    for (col of colArr) {

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}



async function getColleges(country) {
    try {
        let res = await axios.get(url3 + country);
        return res.data;
    } catch (e) {
        console.log("error :", e);
    }
}