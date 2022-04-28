async function get(){
  let response = await fetch("https://gnews.io/api/v4/top-headlines?token=d2a4d6c8730edfaa30d472e847e96736&lang=en")
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
<img src="${d.image}"<img>
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
   
    

    
    