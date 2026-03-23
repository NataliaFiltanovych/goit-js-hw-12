import{a as m,S as d,i as n}from"./assets/vendor-BDPjZNE_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function g(s,r){const a="55051390-ef93f0dae1124012c9fc0333f",t="https://pixabay.com/api/",i={key:a,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:r};return(await m.get(t,{params:i})).data.hits}function p(s){const{webformatURL:r,largeImageURL:a,tags:o,likes:e,views:t,comments:i,downloads:c}=s;return`<li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${o}"
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
            <p class="image-number">${c}</p>
          </div>
          </div>
        </li>`}function u(s){const r=s.map(p).join("");l.listElem.insertAdjacentHTML("afterbegin",`${r}`),new d(".gallery-item a",{captionsData:"alt",captionDelay:250}).refresh()}function f(){l.listElem.innerHTML=""}function y(){l.loader.classList.remove("hidden")}function h(){l.loader.classList.add("hidden")}const l={formEl:document.querySelector(".form"),listElem:document.querySelector(".gallery"),loader:document.querySelector(".js-loader")};l.formEl.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){n.show({message:"Fill please field",messageColor:"white",color:"red",position:"topRight"});return}f(),y();try{const a=await g(r,1);if(a.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight"});return}u(a)}catch{n.show({message:"Sorry, error. Please try again later!",messageColor:"white",color:"red",position:"topRight"})}h(),s.target.reset()});
//# sourceMappingURL=index.js.map
