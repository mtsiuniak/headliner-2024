import{a as S,i as E,A as w,S as p}from"./assets/vendor-c7e898a2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();let q=async e=>await S.post("https://portfolio-js.b.goit.study/api/requests",e).then(o=>o.data);const y=document.querySelector("#hero-section");function P(){const e=["red","pink","blue","green"];setInterval(function(){y.className="";const s=Math.floor(Math.random()*e.length),r=e[s];y.classList.add(r)},4e3)}function B(e){return e.map(({_id:o,avatar_url:s,author:r,review:t})=>`
      <li class="reviews-list-item"id="${o}">
                            <img class="item-img "src="${s}" alt="${r}"
                            width="48"
                            height="48"
                            loading="lazy"
                            />
                            <div class="opinion">
                            <h3 class="author">${r}</h3>
                            <p class="review">${t}</p>
                                </div>
                        </li>`).join("")}P();const f=document.querySelector(".menu-box"),C=document.querySelector(".button-menu"),x=document.querySelector(".button-mob-menu"),L=document.querySelector(".menu-under"),M=document.querySelector(".menu-tablet-deck");C.addEventListener("click",function(){f.classList.toggle("visually-hidden")});x.addEventListener("click",function(){f.classList.toggle("visually-hidden")});M.addEventListener("click",function(){L.classList.toggle("visually-hidden")});document.addEventListener("click",function(e){(e.target.classList.contains("anchor-header-menu")||e.target.classList.contains("order-btn-menu-mob"))&&f.classList.add("visually-hidden")});document.addEventListener("click",function(e){if(e.target.classList.contains("anchor-menu")){e.preventDefault();const o=e.target.getAttribute("href").substring(1);document.getElementById(o).scrollIntoView({behavior:"smooth"}),L.classList.toggle("visually-hidden")}});const l=document.querySelector(".modal-background"),k=document.querySelector(".modal-close"),j=document.querySelector(".modal");k.addEventListener("click",c);function c(e){(e.type==="click"&&e.currentTarget===k||e.keyCode===27||e.type==="click"&&!j.contains(e.target))&&(l.classList.add("visually-hidden"),document.removeEventListener("keydown",c))}const i=document.querySelector(".footer-form"),m=document.querySelector('input[name="email"]');i.addEventListener("submit",I);function I(e){e.preventDefault();const o=e.target.email.value.trim(),s=e.target.comments.value.trim();(o||s)&&q({email:o,comment:s}).then(t=>{i.reset(),l.classList.remove("visually-hidden"),document.addEventListener("keydown",c),l.addEventListener("click",c)}).catch(t=>{E.error({title:"Oops!",message:"Something went wrong",progressBar:!1,position:"topCenter",color:"#1c1d20",messageColor:"#fafafa",titleColor:"#fafafa"})})}m.addEventListener("focus",()=>{i.classList.contains("success-email")&&i.classList.remove("success-email"),i.classList.contains("failed-email")&&i.classList.remove("failed-email")});m.addEventListener("blur",()=>{m.checkValidity()?i.classList.add("success-email"):i.classList.add("failed-email")});const V=new w("#accordion1",{showMultiple:!0});V.open(0);new p("#swiper1",{centeredSlides:!1,grabCursor:!0,loop:!0,keyboard:{enabled:!0},mousewheel:!0,touch:!0,navigation:{nextEl:".swiper-button-next"},slidesPerView:2,spaceBetween:0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});new w("#accordion2",{showMultiple:!0});const h=document.querySelector(".projects-btn-prev"),a=document.querySelector("#btn-prev"),b=document.querySelector(".projects-btn-next"),d=document.querySelector("#btn-next"),v=new p("#swiper2",{direction:"horizontal",on:{slideChange:function(){g()}},slidesPerView:1,freeMode:!0,swipeHandler:".project-swiper-slide",slidesPerGroup:1,navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"}});g();function g(){v.isBeginning?(h.disabled=!0,a.style.backgroundColor=" rgb(42, 38, 38)",a.style.cursor="not-allowed"):(h.disabled=!1,a.style.backgroundColor="transparent",a.style.cursor="pointer"),v.isEnd?(b.disabled=!0,d.style.cursor="not-allowed",d.style.backgroundColor=" rgb(42, 38, 38)"):(b.disabled=!1,d.style.cursor="pointer",d.style.backgroundColor="transparent")}const O="https://portfolio-js.b.goit.study/api/reviews",A=document.querySelector("#review-swiper-list");fetch(O).then(e=>{if(!e.ok)throw new Error("Not found");return e.json()}).then(e=>{const o=B(e);A.insertAdjacentHTML("beforeend",o),new p("swiper3",{on:{slideChange:function(){g()}},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}).catch(e=>console.log(e));
//# sourceMappingURL=commonHelpers.js.map
