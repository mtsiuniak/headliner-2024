import{a as M,A as q,S as f,i as E}from"./assets/vendor-c7e898a2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();let N=async e=>await M.post("https://portfolio-js.b.goit.study/api/requests",e).then(o=>o.data);const w=document.querySelector("#hero-section");function I(){const e=["red","pink","blue","green"];setInterval(function(){w.className="";const r=Math.floor(Math.random()*e.length),s=e[r];w.classList.add(s)},4e3)}function R(e){return e.map(({_id:o,avatar_url:r,author:s,review:t})=>`
      <li class="reviews-list-item swiper-slide" id="${o}">
                            <img class="item-img "src="${r}" alt="${s}"
                            width="48"
                            height="48"
                            loading="lazy"
                            />
                            <div class="opinion">
                            <h3 class="author">${s}</h3>
                            <p class="review">${t}</p>
                                </div>
                        </li>`).join("")}const v=document.querySelector(".menu-box"),V=document.querySelector(".button-menu"),O=document.querySelector(".button-mob-menu"),F=document.querySelector(".menu-under"),$=document.querySelector(".menu-tablet-deck");V.addEventListener("click",function(){v.classList.toggle("visually-hidden")});O.addEventListener("click",function(){v.classList.toggle("visually-hidden")});$.addEventListener("click",function(){F.classList.toggle("visually-hidden")});document.addEventListener("click",function(e){(e.target.classList.contains("anchor-header-menu")||e.target.classList.contains("order-btn-menu-mob"))&&v.classList.add("visually-hidden")});document.addEventListener("click",function(e){if(e.target.classList.contains("anchor-menu")){e.preventDefault();const o=e.target.getAttribute("href").substring(1);document.getElementById(o).scrollIntoView({behavior:"smooth"}),F.classList.toggle("visually-hidden")}});I();const z=new q("#accordion1",{showMultiple:!0});z.open(0);new f("#swiper1",{centeredSlides:!1,grabCursor:!0,loop:!0,keyboard:{enabled:!0},mousewheel:!0,touch:!0,navigation:{nextEl:".swiper-button-next"},slidesPerView:2,spaceBetween:0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});new q("#accordion2",{showMultiple:!0});const g=document.querySelector(".projects-btn-prev"),d=document.querySelector(".btn-prev"),b=document.querySelector(".projects-arrow-prev"),h=document.querySelector(".projects-btn-next"),a=document.querySelector(".btn-next"),B=document.querySelector(".projects-arrow-next"),L=new f("#swiper2",{direction:"horizontal",on:{slideChange:function(){P()}},navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"}});P();function P(){L.isBeginning?(g.disabled=!0,d.style.border="1px solid #3B3B3B",d.style.cursor="not-allowed",b.style.stroke="#3B3B3B"):(g.disabled=!1,d.style.border="1px solid #FAFAFA",d.style.cursor="pointer",b.style.stroke="#FAFAFA"),L.isEnd?(h.disabled=!0,a.style.cursor="not-allowed",a.style.border="1px solid #3B3B3B",B.style.stroke="#3B3B3B"):(h.disabled=!1,a.style.cursor="pointer",a.style.border="1px solid #FAFAFA",B.style.stroke="#FAFAFA")}const j="https://portfolio-js.b.goit.study/api/reviews",D=document.querySelector("#review-swiper-list"),A=document.querySelector(".review-btn-prev"),u=document.querySelector(".btn-prev-review"),S=document.querySelector(".review-arrow-prev"),k=document.querySelector(".review-btn-next"),m=document.querySelector(".btn-next-review"),x=document.querySelector(".review-arrow-next");fetch(j);fetch(j).then(e=>{if(!e.ok)throw E.error({title:"Error",message:"Sorry, reviews not found.",position:"bottomLeft"}),new Error("Network response was not ok.");return e.json()}).then(e=>{const o=R(e);D.insertAdjacentHTML("beforeend",o);const r=new f("#swiper3",{direction:"horizontal",on:{slideChange:function(){s()}},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{nextEl:".my-swiper-button-next",prevEl:".my-swiper-button-prev"}});s();function s(){r.isBeginning?(A.disabled=!0,u.style.border="1px solid #3B3B3B",u.style.cursor="not-allowed",S.style.stroke="#3B3B3B"):(A.disabled=!1,u.style.border="1px solid #FAFAFA",u.style.cursor="pointer",S.style.stroke="#FAFAFA"),r.isEnd?(k.disabled=!0,m.style.cursor="not-allowed",m.style.border="1px solid #3B3B3B",x.style.stroke="#3B3B3B"):(k.disabled=!1,m.style.cursor="pointer",m.style.border="1px solid #FAFAFA",x.style.stroke="#FAFAFA")}}).catch(e=>console.log(e));const l=document.querySelector(".modal-background"),C=document.querySelector(".modal-close"),T=document.querySelector(".modal");C.addEventListener("click",c);function c(e){(e.type==="click"&&e.currentTarget===C||e.keyCode===27||e.type==="click"&&!T.contains(e.target))&&(l.classList.add("visually-hidden"),document.removeEventListener("keydown",c))}const i=document.querySelector(".footer-form"),y=document.querySelector('input[name="email"]');i.addEventListener("submit",U);function U(e){e.preventDefault();const o=e.target.email.value.trim(),r=e.target.comments.value.trim();(o||r)&&N({email:o,comment:r}).then(t=>{i.reset(),l.classList.remove("visually-hidden"),document.addEventListener("keydown",c),l.addEventListener("click",c)}).catch(t=>{E.error({title:"Oops!",message:"Something went wrong",progressBar:!1,position:"topCenter",color:"#1c1d20",messageColor:"#fafafa",titleColor:"#fafafa"})})}y.addEventListener("focus",()=>{i.classList.contains("success-email")&&i.classList.remove("success-email"),i.classList.contains("failed-email")&&i.classList.remove("failed-email")});y.addEventListener("blur",()=>{y.checkValidity()?i.classList.add("success-email"):i.classList.add("failed-email")});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(o){o.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});
//# sourceMappingURL=commonHelpers.js.map
