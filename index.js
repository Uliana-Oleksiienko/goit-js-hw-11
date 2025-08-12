import{a as m,S as p,i as l}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="51722364-670cbd21d6749aee290d6f753",h="https://pixabay.com/api/",y={key:g,image_type:"photo",orientation:"horizontal",safesearch:!0};function L(s){const o=String(s||"").trim(),t={...y,q:o};return m.get(h,{params:t}).then(({data:n})=>n)}const c=document.getElementById("gallery"),u=document.querySelector(".loader");let a=null;function b(){a=new p(".gallery a",{captionsData:"alt",captionDelay:250})}function S(s){if(!Array.isArray(s)||s.length===0)return;const o=s.map(({webformatURL:t,largeImageURL:n,tags:e,likes:r,views:i,comments:d,downloads:f})=>`
        <li class="card">
          <a href="${n}">
            <img class="card-img" src="${t}" alt="${e||"photo"}" loading="lazy" />
          </a>
          <ul class="meta">
            <li><span class="label">Likes</span> ${r}</li>
            <li><span class="label">Views</span> ${i}</li>
            <li><span class="label">Comments</span> ${d}</li>
            <li><span class="label">Downloads</span> ${f}</li>
          </ul>
        </li>
      `).join("");c.innerHTML=o,b()}function A(){c.innerHTML="",a&&(a.destroy(),a=null)}function E(){u.classList.remove("hidden")}function w(){u.classList.add("hidden")}const P=document.querySelector(".form"),q=document.querySelector('[name="search-text"]');P.addEventListener("submit",s=>{s.preventDefault();const o=q.value.trim();if(!o){l.warning({title:"Warning",message:"Please enter a search word",position:"topRight"});return}E(),A(),L(o).then(t=>{const n=Array.isArray(t==null?void 0:t.hits)?t.hits:[];if(n.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432,backgroundColor:"#EF4040",messageColor:"#fff"});return}S(n)}).catch(t=>{l.error({title:"Error",message:(t==null?void 0:t.message)||"Something went wrong",position:"topRight"})}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
