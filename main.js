(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){"Escape"===e.key&&o(document.querySelector(".popup_opened"))}function n(e){e.classList.add("popup_opened"),document.addEventListener("keydown",t)}function o(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",t)}function r(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}e.d({},{i8:()=>j,T1:()=>p,cH:()=>y,G5:()=>v,lx:()=>f,OP:()=>_,EG:()=>C,lv:()=>A,bj:()=>S,KM:()=>z,O9:()=>w,oi:()=>D,di:()=>J,tz:()=>E,ED:()=>g,rC:()=>q,z_:()=>O,Ju:()=>N,Ii:()=>b,Zg:()=>d});var c={baseUrl:"https://nomoreparties.co/v1/plus-cohort-12",headers:{authorization:"c2ce2dee-bf82-4d66-8d2d-d2557a6d7d18","Content-Type":"application/json"}},a=function(e,t,n){!function(e,t){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(n.inactiveButtonClass),t.setAttribute("disabled",!0))};function i(e){f.prepend(e)}function u(e,t,o,a,i){var u=_.querySelector(".card").cloneNode(!0),l=u.querySelector(".card__like-number"),s=u.querySelector(".card__image"),f=u.querySelector(".card__heart");return s.src=e,s.alt=t,u.querySelector(".card__name").textContent=t,l.textContent=o.length,f.addEventListener("click",(function(e){e.target.classList.contains("card__heart_active")?function(e){return fetch("".concat(c.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:c.headers.authorization}}).then(r)}(i).then((function(t){l.textContent=t.likes.length,e.target.classList.toggle("card__heart_active")})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(c.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:c.headers.authorization}}).then(r)}(i).then((function(t){l.textContent=t.likes.length,e.target.classList.toggle("card__heart_active")})).catch((function(e){console.log(e)}))})),o.some((function(e){return e._id===d}))&&(f.classList.contains("card__heart_active")||f.classList.add("card__heart_active")),a===d?u.querySelector(".card__delete").addEventListener("click",(function(e){(function(e){return fetch("".concat(c.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:c.headers.authorization}}).then(r)})(i).then((function(t){e.target.closest(".card").remove()})).catch((function(e){console.log(e)}))})):u.querySelector(".card__delete").remove(),s.addEventListener("click",(function(){y.src=e,y.alt=t,v.textContent=t,n(p)})),u}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var d,s,_=document.querySelector(".card__template").content,f=document.querySelector(".photos"),p=document.querySelector(".popup_type_photo"),y=p.querySelector(".card-opened__image"),v=p.querySelector(".card-opened__text"),h=p.querySelector(".window__close-button_type_photo"),m=document.querySelector(".window__form_type_profile"),w=m.querySelector(".window__input_type_name"),S=m.querySelector(".window__input_type_info"),b=m.querySelector(".window__save-button"),q=document.querySelector(".profile__name"),g=document.querySelector(".profile__text"),E=document.querySelector(".profile__image"),L=document.querySelector(".profile__edit-button"),C=document.querySelector(".popup_type_edit"),k=document.querySelector(".window__close-button_type_edit"),x=document.querySelector(".window__form_type_add"),A=x.querySelector(".window__input_type_name"),z=x.querySelector(".window__input_type_info"),O=x.querySelector(".window__save-button"),U=document.querySelector(".profile__add-button"),j=document.querySelector(".popup_type_add"),P=document.querySelector(".window__close-button_type_add"),T=document.querySelector(".profile__image_state_hover"),D=document.querySelector(".popup_type_profile-photo"),B=document.querySelector(".window__close-button_type_profile-photo"),I=document.querySelector(".window__form_type_profile-photo"),J=I.querySelector(".window__input_type_info"),N=I.querySelector(".window__save-button"),H={formSelector:".window__form",inputSelector:".window__input",submitButtonSelector:".window__save-button",inactiveButtonClass:"window__save-button_inactive",inputErrorClass:"window__input_type_error",errorClass:"window__input-error_active"};Promise.all([fetch("".concat(c.baseUrl,"/users/me"),{headers:{authorization:c.headers.authorization}}).then(r),fetch("".concat(c.baseUrl,"/cards"),{headers:{authorization:c.headers.authorization}}).then(r)]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(c.push(o.value),!t||c.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw r}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],c=o[1];q.textContent=r.name,g.textContent=r.about,E.src=r.avatar,E.alt=r.name,d=r._id,c.reverse().forEach((function(e){i(u(e.link,e.name,e.likes,e.owner._id,d))}))})).catch((function(e){console.log(e)})),L.addEventListener("click",(function(){n(C),w.value=q.textContent,S.value=g.textContent})),k.addEventListener("click",(function(){o(C)})),C.addEventListener("mousedown",(function(e){var t=e.target;t.closest(".window")||t.closest(".window__form")||o(C)})),m.addEventListener("submit",(function(e){var t,n;b.textContent="Сохранение...",e.preventDefault(),(t=w.value,n=S.value,fetch("".concat(c.baseUrl,"/users/me"),{method:"PATCH",headers:c.headers,body:JSON.stringify({name:t,about:n})}).then(r)).then((function(){q.textContent=w.value,g.textContent=S.value,o(C)})).catch((function(e){console.log(e)})).finally((function(){b.textContent="Сохранить"}))})),U.addEventListener("click",(function(){n(j),x.reset();var e=Array.from(j.querySelectorAll(".window__input")),t=j.querySelector(".window__save-button");a(e,t,H)})),P.addEventListener("click",(function(){o(j)})),j.addEventListener("mousedown",(function(e){var t=e.target;t.closest(".window")||t.closest(".window__form")||o(j)})),x.addEventListener("submit",(function(e){var t,n;O.textContent="Создание...",e.preventDefault(),(t=A.value,n=z.value,fetch("".concat(c.baseUrl,"/cards"),{method:"POST",headers:c.headers,body:JSON.stringify({name:t,link:n})}).then(r)).then((function(e){i(u(e.link,e.name,e.likes,e.owner._id,e._id)),o(j)})).catch((function(e){console.log(e)})).finally((function(){O.textContent="Создать"}))})),h.addEventListener("click",(function(){o(p)})),p.addEventListener("mousedown",(function(e){e.target.closest(".card-opened")||o(p)})),I.addEventListener("submit",(function(e){var t;N.textContent="Сохранение...",e.preventDefault(),(t=J.value,fetch("".concat(c.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:c.headers,body:JSON.stringify({avatar:t})}).then(r)).then((function(){E.src=J.value,E.alt=q,o(D)})).catch((function(e){console.log(e)})).finally((function(){N.textContent="Сохранить"}))})),T.addEventListener("click",(function(){n(D),I.reset();var e=Array.from(D.querySelectorAll(".window__input")),t=D.querySelector(".window__save-button");a(e,t,H)})),B.addEventListener("click",(function(){o(D)})),D.addEventListener("mousedown",(function(e){var t=e.target;t.closest(".window")||t.closest(".window__form")||o(D)})),s=H,Array.from(document.querySelectorAll(s.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);a(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.textContent="",o.classList.remove(n.errorClass)}(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)}(e,r,t),a(n,o,t)}))}))}(e,s)}))})();