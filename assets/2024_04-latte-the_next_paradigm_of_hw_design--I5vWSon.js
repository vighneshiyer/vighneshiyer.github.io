import{$ as l,B as m,N as u,a as g,t as h,b as f}from"./reveal.esm-CKcfOcds.js";/* empty css                         */l.on("fragmentshown",n=>{var e=n.fragment.dataset.lineNumbers,t=document.getElementById("special1"),s=document.getElementById("special2");e&&e=="8,13,14,15,18,19"&&(t.style.opacity=1,t.style.visibility="inherit"),e&&e=="42"&&(t.style.opacity=0,t.style.visibility="hidden",s.style.opacity=1,s.style.visibility="inherit")});l.on("fragmenthidden",n=>{var e=n.fragment.dataset.lineNumbers,t=document.getElementById("special1"),s=document.getElementById("special2");e&&e=="8,13,14,15,18,19"&&(t.style.opacity=0,t.style.visibility="hidden"),e&&e=="42"&&(t.style.opacity=1,t.style.visibility="inherit",s.style.opacity=0,s.style.visibility="hidden")});l.initialize({controls:!0,progress:!0,center:!0,hash:!0,slideNumber:!0,plugins:[m,u,g,h,f.KaTeX]});l.configure({pdfSeparateFragments:!1});(function(n,e){const y={position:"absolute",float:"left",borderRadius:"50%",width:"30px",height:"30px",backgroundColor:"rgba(255, 0, 0, 0.5)",zIndex:20,display:"none"};let o=!1;const a=n.getElementsByTagName("body")[0];let i=n.createElement("div");i.classList.add("laser-pointer");function p(){o?(i.style.width="30px",i.style.height="30px",a.style.cursor="none",document.addEventListener("mousemove",r)):(document.removeEventListener("mousemove",r),i.style.display="none",a.style.cursor="auto")}function c(){Object.assign(i.style,y),a.appendChild(i),l.addKeyBinding({keyCode:81,key:"Q",description:"toggle laser"},()=>{o=!o,p()})}function r(d){i.style.display="block",i.style.left=d.pageX-15+"px",i.style.top=d.pageY-15+"px"}c()})(document);
