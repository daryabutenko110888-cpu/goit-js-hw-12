import{a as w,S,i as d}from"./assets/vendor-DcHCnVjq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const v="https://pixabay.com/api/",q="YOUR_API_KEY";async function u(r,e){return(await w.get(v,{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),M=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(r){const e=r.map(n=>`
      <li class="gallery-item">
        <a href="${n.largeImageURL}">
          <img
            src="${n.webformatURL}"
            alt="${n.tags}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b><br>${n.likes}</p>
          <p><b>Views</b><br>${n.views}</p>
          <p><b>Comments</b><br>${n.comments}</p>
          <p><b>Downloads</b><br>${n.downloads}</p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",e),M.refresh()}function P(){f.innerHTML=""}function p(){m.classList.remove("is-hidden")}function g(){m.classList.add("is-hidden")}function B(){h.classList.remove("is-hidden")}function b(){h.classList.add("is-hidden")}const L=document.querySelector(".form"),$=document.querySelector(".load-more");let a="",s=1,c=0;L.addEventListener("submit",O);$.addEventListener("click",E);async function O(r){if(r.preventDefault(),a=r.target.elements.searchText.value.trim(),!!a){s=1,P(),b(),p();try{const e=await u(a,s);if(c=e.totalHits,e.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits),c>15&&B()}catch(e){console.log(e)}finally{g()}L.reset()}}async function E(){s+=1,p();try{const r=await u(a,s);y(r.hits);const e=Math.ceil(c/15);s>=e&&(b(),d.info({message:"We're sorry, but you've reached the end of search results."})),_()}catch(r){console.log(r)}finally{g()}}function _(){const r=document.querySelector(".gallery-item");if(!r)return;const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
