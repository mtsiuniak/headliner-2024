import{A as f,a as E,S as g,i as h}from"./assets/vendor-c7e898a2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();new f(".accordion-container",{showMultiple:!0});let k=async e=>await E.post("https://portfolio-js.b.goit.study/api/requests",e).then(s=>s.data);const w=document.querySelector("#hero-section");function S(){const e=["red","pink","blue","green"];setInterval(function(){w.className="";const n=Math.floor(Math.random()*e.length),i=e[n];w.classList.add(i)},4e3)}S();const y=document.querySelector(".menu-box"),P=document.querySelector(".button-menu"),B=document.querySelector(".button-mob-menu");P.addEventListener("click",function(){y.classList.toggle("visually-hidden")});B.addEventListener("click",function(){y.classList.toggle("visually-hidden")});const v=document.querySelector(".menu-under"),q=document.querySelector(".menu-tablet-deck");q.addEventListener("click",function(){v.classList.toggle("visually-hidden")});document.addEventListener("click",function(e){(e.target.classList.contains("anchor-header-menu")||e.target.classList.contains("order-btn-menu-mob"))&&y.classList.add("visually-hidden")});document.addEventListener("click",function(e){if(e.target.classList.contains("anchor-menu")){e.preventDefault();const s=e.target.getAttribute("href").substring(1);document.getElementById(s).scrollIntoView({behavior:"smooth"}),v.classList.toggle("visually-hidden")}});const x="https://portfolio-js.b.goit.study/api/reviews",M=document.querySelector(".reviews-list");fetch(x).then(e=>{if(!e.ok)throw new Error("Not found");return e.json()}).then(e=>{const s=V(e);console.log(s),M.insertAdjacentHTML("beforeend",s);const n=new g("#swiper3",{direction:"horizontal",speed:300,slidesPerView:1,spaceBetween:16,on:{slideChange:function(){o()}},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{nextEl:".my-swiper-button-next",prevEl:"my-swiper-button-prev"}}),i=document.querySelector(".my-swiper-button-prev"),t=document.querySelector(".my-swiper-button-next");o();function o(){n.isBeginning?i.disabled=!0:i.disabled=!1,n.isEnd?t.disabled=!0:t.disabled=!1}i.addEventListener("click",()=>{n.slidePrev()}),t.addEventListener("click",()=>{n.slideNext()})}).catch(e=>{h.error({title:"Error",message:"Sorry, reviews not found.",position:"center"})});function V(e){return e.map(({_id:s,avatar_url:n,author:i,review:t})=>`
      <li class="reviews-list-item"id="${s}">
                            <img class="item-img "src="${n}" alt="${i}"
                            width="48"
                            height="48"
                            loading="lazy"
                            />
                            <div class="opinion">
                            <h3 class="author">${i}</h3>
                            <p class="review">${t}</p>
                                </div>
                        </li>`).join("")}const l=document.querySelector(".modal-background"),b=document.querySelector(".modal-close"),C=document.querySelector(".modal");b.addEventListener("click",c);function c(e){(e.type==="click"&&e.currentTarget===b||e.keyCode===27||e.type==="click"&&!C.contains(e.target))&&(l.classList.add("visually-hidden"),document.removeEventListener("keydown",c))}const r=document.querySelector(".footer-form"),u=document.querySelector('input[name="email"]');r.addEventListener("submit",j);function j(e){e.preventDefault();const s=e.target.email.value.trim(),n=e.target.comments.value.trim();(s||n)&&k({email:s,comment:n}).then(t=>{r.reset(),l.classList.remove("visually-hidden"),document.addEventListener("keydown",c),l.addEventListener("click",c)}).catch(t=>{h.error({title:"Oops!",message:"Something went wrong",progressBar:!1,position:"topCenter",color:"#1c1d20",messageColor:"#fafafa",titleColor:"#fafafa"})})}u.addEventListener("focus",()=>{r.classList.contains("success-email")&&r.classList.remove("success-email"),r.classList.contains("failed-email")&&r.classList.remove("failed-email")});u.addEventListener("blur",()=>{u.checkValidity()?r.classList.add("success-email"):r.classList.add("failed-email")});const I=new f("#accordion1",{showMultiple:!0});I.open(0);new g("#swiper1",{centeredSlides:!1,grabCursor:!0,loop:!0,keyboard:{enabled:!0},mousewheel:!0,touch:!0,navigation:{nextEl:".swiper-button-next"},slidesPerView:2,spaceBetween:0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});new f("#accordion2",{showMultiple:!0});const a=new g("#swiper2",{direction:"horizontal",on:{slideChange:function(){L()}},slidesPerView:1,freeMode:!0,swipeHandler:".project-swiper-slide",slidesPerGroup:1,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:1,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:1,slidesPerGroup:1,spaceBetween:18}},navigation:{nextEl:".projects-btn-prev",prevEl:".projects-btn-next"}}),m=document.querySelector(".projects-btn-prev"),p=document.querySelector(".projects-btn-next");L();function L(){a.isBeginning?m.disabled=!0:m.disabled=!1,a.isEnd?p.disabled=!0:p.disabled=!1}m.addEventListener("click",()=>{a.slidePrev()});p.addEventListener("click",()=>{a.slideNext()});
//# sourceMappingURL=commonHelpers.js.map
