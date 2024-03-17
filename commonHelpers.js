import"./assets/vendor-ae31d905.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const c=document.querySelector("#hero-section");function u(){const t=["red","pink","blue","green"];setInterval(function(){c.className="";const s=Math.floor(Math.random()*t.length),o=t[s];c.classList.add(o)},4e3)}u();const l=document.querySelector(".menu-box"),d=document.querySelector(".button-menu"),a=document.querySelector(".button-mob-menu");d.addEventListener("click",function(){l.classList.toggle("visually-hidden")});a.addEventListener("click",function(){l.classList.toggle("visually-hidden")});const m=document.querySelector(".menu-under"),f=document.querySelector(".menu-tablet-deck");f.addEventListener("click",function(){m.classList.toggle("visually-hidden")});const g="https://portfolio-js.b.goit.study/api/reviews",h=document.querySelector(".reviews-list");fetch(g).then(t=>{if(!t.ok)throw new Error("Not found");return t.json()}).then(t=>{h.innerHTML=y(t)}).catch(t=>console.log(t));function y(t){return t.map(({_id:r,avatar_url:s,author:o,review:e})=>`
      <li class="reviews-list-item"id="${r}">
                            <img class="item-img "src="${s}" alt="${o}"
                            width="48"
                            height="48"
                            loading="lazy"
                            />
                            <div class="opinion">
                            <h3 class="author">${o}</h3>
                            <p class="review">${e}</p>
                                </div>
                        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
