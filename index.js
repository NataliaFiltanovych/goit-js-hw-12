import{a as w,S as v,i as l}from"./assets/vendor-BDPjZNE_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function p(s,r){const i="55051390-ef93f0dae1124012c9fc0333f",t="https://pixabay.com/api/",a={key:i,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:r};return(await w.get(t,{params:a})).data}function b(s){const{webformatURL:r,largeImageURL:i,tags:c,likes:e,views:t,comments:a,downloads:g}=s;return`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${r}"
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
            <p class="image-number">${a}</p>
          </div>
          <div class="image-description">
            <p class="image-text">Downloads</p>
            <p class="image-number">${g}</p>
          </div>
          </div>
        </li>`}function f(s){const r=s.map(b).join("");o.listElem.insertAdjacentHTML("beforeend",`${r}`),new v(".gallery-item a",{captionsData:"alt",captionDelay:250}).refresh()}function E(){o.listElem.innerHTML=""}function h(){o.loader.classList.remove("hidden")}function y(){o.loader.classList.add("hidden")}function L(){o.loadMore.classList.remove("hidden")}function m(){o.loadMore.classList.add("hidden")}const o={formEl:document.querySelector(".form"),listElem:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),loadMore:document.querySelector(".js-btn-load")},P=15;let d,n,u;o.formEl.addEventListener("submit",async s=>{if(s.preventDefault(),m(),d=s.target.elements["search-text"].value.trim(),!d){l.show({message:"Fill please field",messageColor:"white",color:"red",position:"topRight"});return}n=1,E(),h();try{const r=await p(d,n);if(r.hits.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight"});return}f(r.hits),u=Math.ceil(r.totalHits/P),n>=u?(m(),l.show({message:"We're sorry, but you've reached the end of search results."})):L()}catch{l.show({message:"Sorry, error. Please try again later!",messageColor:"white",color:"red",position:"topRight"})}y(),s.target.reset()});o.loadMore.addEventListener("click",async()=>{n+=1,m(),h();try{const s=await p(d,n);f(s.hits),n>=u?(m(),l.show({message:"We're sorry, but you've reached the end of search results."})):L()}catch{l.show({message:"Sorry, error. Please try again later!",messageColor:"white",color:"red",position:"topRight"})}y()});
//# sourceMappingURL=index.js.map
