import{_ as o,M as p,N as u,H as c,Z as g,a as h}from"./reveal.esm-ef56d187.js";o.initialize({controls:!0,progress:!0,center:!0,hash:!0,slideNumber:!0,plugins:[p,u,c,g,h.KaTeX]});o.configure({pdfSeparateFragments:!1});(function(n,y){const a={position:"absolute",float:"left",borderRadius:"50%",width:"25px",height:"25px",backgroundColor:"rgba(255, 0, 0, 0.5)",zIndex:20,display:"none"};let t=!1;const i=n.getElementsByTagName("body")[0];let e=n.createElement("div");function l(){t?(e.style.width="25px",e.style.height="25px",i.style.cursor="none",document.addEventListener("mousemove",s)):(document.removeEventListener("mousemove",s),e.style.display="none",i.style.cursor="auto")}function d(){Object.assign(e.style,a),i.appendChild(e),o.addKeyBinding({keyCode:81,key:"Q",description:"toggle laser"},()=>{t=!t,l()})}function s(r){e.style.display="block",e.style.left=r.pageX-12.5+"px",e.style.top=r.pageY-12.5+"px"}d()})(document);
