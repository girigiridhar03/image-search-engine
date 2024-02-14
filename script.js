const accessKey = "uHF3ZyFeoF00RpvFd6Qm1a_wzKyMRioEtn529XeRLQA"

const form = document.querySelector("form");
const searchBox = document.querySelector("#search-box");
const searchResults = document.querySelector(".search-results");
const showMore = document.querySelector(".show-more");
let page = 1;
let keyword = ""
async function searchImages(){
    keyword = searchBox.value;
     let res = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`);
     let data = await res.json();
     if(page === 1){
        searchResults.innerHTML = ""
     }
     let results = data.results;
     results.map(result=>{
         const image = document.createElement("img");
         image.src = result.urls.small;
         const imgLink = document.createElement("a");
         imgLink.href = result.links.html;
         imgLink.target = "_blank"
         imgLink.append(image);
         searchResults.append(imgLink);
         showMore.style.display = "block"
     })
}

showMore.addEventListener("click",()=>{
    page++;
    searchImages()
})
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages()
})