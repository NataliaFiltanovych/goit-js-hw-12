import{a as L,S as v,i as l}from"./assets/vendor-BDPjZNE_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function h(r,s){const a="55051390-ef93f0dae1124012c9fc0333f",t="https://pixabay.com/api/",i={key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s};return(await L.get(t,{params:i})).data}function E(r){const{webformatURL:s,largeImageURL:a,tags:c,likes:e,views:t,comments:i,downloads:p}=r;return`<li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${c}"
            />
          </a>
          <div class="image-container">
          <div class="image-description">
            <p class="image-text">Likes</p>
            <p class="image-number">${e}</p>
          </div>
          <div class="image-description">
            <p class="image-text">Views</p>
            <p class="image-number">${t}</p>
          </div>
          <div class="image-description">
            <p class="image-text">Comments</p>
            <p class="image-number">${i}</p>
          </div>
          <div class="image-description">
            <p class="image-text">Downloads</p>
            <p class="image-number">${p}</p>
          </div>
          </div>
        </li>`}function f(r){const s=r.map(E).join("");o.listElem.insertAdjacentHTML("beforeend",`${s}`),new v(".gallery-item a",{captionsData:"alt",captionDelay:250}).refresh()}function b(){o.listElem.innerHTML=""}function y(){o.loader.classList.remove("hidden")}function g(){o.loader.classList.add("hidden")}function w(){o.loadMore.classList.remove("hidden")}function m(){o.loadMore.classList.add("hidden")}const o={formEl:document.querySelector(".form"),listElem:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),loadMore:document.querySelector(".js-btn-load")},P=15;let d,n,u;o.formEl.addEventListener("submit",async r=>{if(r.preventDefault(),m(),d=r.target.elements["search-text"].value.trim(),!d){l.show({message:"Fill please field",messageColor:"white",color:"red",position:"topRight"});return}n=1,b(),y();try{const s=await h(d,n);if(s.hits.length===0){g(),l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight"});return}f(s.hits),u=Math.ceil(s.totalHits/P),n>=u?(m(),l.show({message:"We're sorry, but you've reached the end of search results."})):w()}catch{l.show({message:"Sorry, error. Please try again later!",messageColor:"white",color:"red",position:"topRight"})}g(),r.target.reset()});o.loadMore.addEventListener("click",async()=>{n+=1,m(),y();try{const r=await h(d,n);f(r.hits),n>=u?(m(),l.show({message:"We're sorry, but you've reached the end of search results."})):w();const a=o.listElem.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}catch{l.show({message:"Sorry, error. Please try again later!",messageColor:"white",color:"red",position:"topRight"})}g()});
//# sourceMappingURL=index.js.map
