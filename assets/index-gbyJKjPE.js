(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function u(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=u(e);fetch(e.href,o)}})();document.querySelector("#app").innerHTML=`
    <button class="show-modal">Show modal 1</button>
    <button class="show-modal">Show modal 2</button>
    <button class="show-modal">Show modal 3</button>
    <div class="modal hidden">
      <button class="close-modal">&times;</button>
      <h1>I'm a modal window :ojos_de_corazón:</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div class="overlay hidden"></div>
`;const n=document.querySelector(".modal"),t=document.querySelector(".overlay"),r=document.querySelector(".close-modal"),l=document.querySelectorAll(".show-modal");console.log(n,t,r,l);const i=function(){n.classList.add("hidden"),t.classList.add("hidden")},m=function(){n.classList.remove("hidden"),t.classList.remove("hidden")};l.forEach(s=>{s.addEventListener("click",m)});r.addEventListener("click",i);t.addEventListener("click",i);r.addEventListener("click",i);t.addEventListener("click",i);console.log(n,t,r,l);const p=s=>{s.key==="Escape"&&!n.classList.contains("hidden")&&i()};document.addEventListener("keydown",p);
