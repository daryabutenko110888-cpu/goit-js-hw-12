import{a as w,S,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const v="https://pixabay.com/api/",q="YOUR_API_KEY";async function f(r,e){return(await w.get(v,{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const m=document.querySelector(".gallery"),h=document.querySelector(".loader"),y=document.querySelector(".load-more"),M=new S(".gallery a",{captionsData:"alt",captionDelay:250});function p(r){const e=r.map(s=>`
      <li class="gallery-item">
        <a href="${s.largeImageURL}">
          <img
            src="${s.webformatURL}"
            alt="${s.tags}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b><br>${s.likes}</p>
          <p><b>Views</b><br>${s.views}</p>
          <p><b>Comments</b><br>${s.comments}</p>
          <p><b>Downloads</b><br>${s.downloads}</p>
        </div>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",e),M.refresh()}function O(){m.innerHTML=""}function g(){h.classList.remove("is-hidden")}function P(){h.classList.add("is-hidden")}function b(){y.classList.remove("is-hidden")}function l(){y.classList.add("is-hidden")}const L=document.querySelector(".form"),B=document.querySelector(".load-more");let i="",a=1,d=0;L.addEventListener("submit",$);B.addEventListener("click",E);async function $(r){if(r.preventDefault(),i=r.target.elements.searchText.value.trim(),!!i){a=1,O(),l(),g();try{const e=await f(i,a);if(d=e.totalHits,e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}p(e.hits),d<=15?n.info({message:"We're sorry, but you've reached the end of search results."}):b()}catch{n.error({message:"Oops! Something went wrong. Try again later."})}L.reset()}}async function E(){a+=1,l(),g();try{const r=await f(i,a);p(r.hits);const e=Math.ceil(d/15);a>=e?(l(),n.info({message:"We're sorry, but you've reached the end of search results."})):b(),T()}catch{n.error({message:"Oops! Something went wrong. Try again later."})}finally{P()}}function T(){const r=document.querySelector(".gallery-item");if(!r)return;const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
