const s=document.getElementById("arrow-left"),e=document.getElementById("arrow-right"),l=document.getElementById("slides");function d(s){let e=l.className;switch(!0){case e.includes(1)&&"right"===s:l.classList.remove("slider__slides--1-slide"),l.classList.add("slider__slides--2-slide");break;case e.includes(2)&&"right"===s:l.classList.remove("slider__slides--2-slide"),l.classList.add("slider__slides--3-slide");break;case e.includes(2)&&"left"===s:l.classList.remove("slider__slides--2-slide"),l.classList.add("slider__slides--1-slide");break;case e.includes(3)&&"left"===s:l.classList.remove("slider__slides--3-slide"),l.classList.add("slider__slides--2-slide")}}s.addEventListener("click",()=>d("left")),e.addEventListener("click",()=>d("right"));
//# sourceMappingURL=index.b8e60e7f.js.map
