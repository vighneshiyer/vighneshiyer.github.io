import{$ as o,B as p,N as u,a as c,t as g,b as h}from"./reveal.esm-CKcfOcds.js";/* empty css                   *//* empty css                */o.initialize({controls:!0,progress:!0,center:!1,hash:!0,slideNumber:!0,plugins:[p,u,c,g,h.KaTeX]});o.configure({pdfSeparateFragments:!1});(function(n,y){const l={position:"absolute",float:"left",borderRadius:"50%",width:"25px",height:"25px",backgroundColor:"rgba(255, 0, 0, 0.5)",zIndex:20,display:"none"};let t=!1;const i=n.getElementsByTagName("body")[0];let e=n.createElement("div");function a(){t?(e.style.width="25px",e.style.height="25px",i.style.cursor="none",document.addEventListener("mousemove",s)):(document.removeEventListener("mousemove",s),e.style.display="none",i.style.cursor="auto")}function d(){Object.assign(e.style,l),i.appendChild(e),o.addKeyBinding({keyCode:81,key:"Q",description:"toggle laser"},()=>{t=!t,a()})}function s(r){e.style.display="block",e.style.left=r.pageX-12.5+"px",e.style.top=r.pageY-12.5+"px"}d()})(document);
