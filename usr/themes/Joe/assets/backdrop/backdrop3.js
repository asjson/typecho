function animate(a=0){const t=a>=finish+arcStagger*colors.length;let e=window.innerWidth*DPR,n=window.innerHeight*DPR;const o=.5*n/colors.length,i=e/2,r=n+o*rainbowHeight+(n-colors.length*o)/3,l=e/2+colors.length*o*2,s=n;let c=document.getElementById("rainbow").getContext("2d");c.clearRect(0,0,e,n),c.globalAlpha=1,c.lineWidth=o;for(let e=colors.length-1;e>-1;e--){const[n,d]=colors[e],h=r+e*(o/2-1),m=l-e*o/2,g=s-e*o/2,p=tau*(a-e*arcStagger)+start,u=clamp(start,tau*finish+start,p);if(c.beginPath(),c.shadowColor=n,c.strokeStyle=n,c.ellipse(i,h,m,g,0,start,u,!1),c.lineCap="round",c.stroke(),c.closePath(),t)sparkles.push(makeSparkle({cx:i,cy:h,radiusX:m,radiusY:g,endAngle:Math.random()*Math.PI+Math.PI,lineWidth:o,color:boolRandom()?"#fff":d}));else for(let a=0;a<sparklesInPerStripe;a++)sparkles.push(makeSparkle({cx:i,cy:h,radiusX:m,radiusY:g,endAngle:u,lineWidth:o,color:n}))}const d=[];for(let a=0,t=sparkles.length;a<t;a++){const{x:t,y:e,opacity:n,color:o,rad:i}=sparkles[a];c.beginPath(),c.globalAlpha=n,c.fillStyle=o,c.arc(t-i,e-i,i,0,Math.PI/2),c.arc(t-i,e+i,i,3*Math.PI/2,2*Math.PI),c.arc(t+i,e+i,i,Math.PI,3*Math.PI/2),c.arc(t+i,e-i,i,Math.PI/2,Math.PI),c.fill(),n>.2&&i>.2&&d.push({x:t,y:e,opacity:n-.03,rad:i-.2,color:o})}sparkles=d,t?requestAnimationFrame(function(){animate(finish+colors.length*arcStagger)}):requestAnimationFrame(function(){animate(a+inc)})}let canvasDom=document.createElement("canvas");canvasDom.setAttribute("id","rainbow"),canvasDom.setAttribute("style","z-index: -510;position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;"),document.body.appendChild(canvasDom);const DPR=window.devicePixelRatio,colors=[["#EC008C","#f957b6"],["#EF4136","#ff7972"],["yellow","#fff"],["lime","#7aff7a"],["#27AAE1","#5ec8f2"],["#662D91","#a158d8"]],tau=2*Math.PI,start=Math.PI,finish=.5,inc=.007,rainbowHeight=.5,arcStagger=.05,sparklesInPerStripe=3;let sparkles=[];const clamp=(a,t,e)=>Math.min(Math.max(a,e),t),boolRandom=()=>!Math.round(Math.random()),sizeCanvas=()=>{radius=clamp(15,50,window.innerWidth/60/DPR);const a=document.getElementById("rainbow");a.width=window.innerWidth*DPR,a.height=window.innerHeight*DPR},addRandom=function(a){return(boolRandom()?-1:1)*Math.random()*a},makeSparkle=({cx:a,cy:t,radiusX:e,radiusY:n,endAngle:o,lineWidth:i,color:r})=>({x:a+e*Math.cos(o)+addRandom(i),y:t+n*Math.sin(o)+addRandom(i),opacity:1,color:r,rad:Math.max(radius*Math.random()*DPR,15)});sizeCanvas(),requestAnimationFrame(function(){animate()}),window.addEventListener("resize",sizeCanvas);