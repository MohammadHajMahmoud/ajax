async function get(){
  let response = await fetch("https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=58f3c1a6b6184fc48e7e4da47112e798")
  let data =await response.json();
  showPost(data.articles);
}

get();


function showPost(data){
  
    let htm1Data = document.querySelector(".data");
    let toHtml="";
     data.forEach(function (d) { 
         
toHtml +=`
<div class="card" >
<div class="card-header">
<img src="${d.urlToImage}"<img>
</div>
<div class="card-body">
<p>${d.title}
</p>
<a href="${d.url}" class="btn">Read more</a>
</div></div>
 `;
     });
     htm1Data.innerHTML = toHtml;
  }
   
    

    
    