(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[341],{7483:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en/game",function(){return t(8434)}])},8029:function(e,s,t){"use strict";t.d(s,{Z:function(){return p}});var a=t(5893),n=t(7294);let r=e=>{let s,t;switch(e){case 1:s=1260,t=1620;break;case 2:s=1620,t=1440;break;case 3:s=1980,t=1170;break;case 4:s=1440,t=1530;break;case 5:s=1710,t=1260;break;case 6:s=1530,t=1530;break;default:s=0,t=0}return[s,t]},o=e=>{let{outcome:s,showDice:t,rollable:o,onClick:l}=e,i=(0,n.useRef)(null),c=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(!1===t||o||void 0===i.current||void 0===c.current)return;let[e,a]=r(s);c.current.style.transition="transform 4s",i.current.id="die-container-on",c.current.style.transform="rotateX("+e+"deg) rotateY("+a+"deg)",setTimeout(()=>{void 0!==i.current&&void 0!==c.current&&(i.current.id="die-container-off",[e,a]=[0,0],c.current.style.transition="transform 0s",c.current.style.transform="rotateX("+e+"deg) rotateY("+a+"deg)")},4300)}),(0,a.jsx)("div",{className:"die-container",id:"die-container-off",ref:i,onClick:l,children:(0,a.jsxs)("div",{id:"cube",ref:c,children:[(0,a.jsx)("div",{className:"front",children:(0,a.jsx)("span",{className:"dot dot1"})}),(0,a.jsxs)("div",{className:"back",children:[(0,a.jsx)("span",{className:"dot dot1"}),(0,a.jsx)("span",{className:"dot dot2"})]}),(0,a.jsxs)("div",{className:"right",children:[(0,a.jsx)("span",{className:"dot dot1"}),(0,a.jsx)("span",{className:"dot dot2"}),(0,a.jsx)("span",{className:"dot dot3"})]}),(0,a.jsxs)("div",{className:"left",children:[(0,a.jsx)("span",{className:"dot dot1"}),(0,a.jsx)("span",{className:"dot dot2"}),(0,a.jsx)("span",{className:"dot dot3"}),(0,a.jsx)("span",{className:"dot dot4"})]}),(0,a.jsxs)("div",{className:"top",children:[(0,a.jsx)("span",{className:"dot dot1"}),(0,a.jsx)("span",{className:"dot dot2"}),(0,a.jsx)("span",{className:"dot dot3"}),(0,a.jsx)("span",{className:"dot dot4"}),(0,a.jsx)("span",{className:"dot dot5"})]}),(0,a.jsxs)("div",{className:"bottom",children:[(0,a.jsx)("span",{className:"dot dot1"}),(0,a.jsx)("span",{className:"dot dot2"}),(0,a.jsx)("span",{className:"dot dot3"}),(0,a.jsx)("span",{className:"dot dot4"}),(0,a.jsx)("span",{className:"dot dot5"}),(0,a.jsx)("span",{className:"dot dot6"})]})]})})},l=e=>{let{id:s,implement:t,posture:n,zone:r,strikeCount:o,extra:l,currentPosition:i,lang:c}=e,d=i===s?"Cell-current":"Cell";return 0===s?"en"==c?(0,a.jsx)("div",{className:d,id:"cell"+s,children:" *Start* "}):(0,a.jsx)("div",{className:d,id:"cell"+s,children:" *始发机场* "}):47===s?"en"==c?(0,a.jsx)("div",{className:d,id:"cell"+s,children:" *DESTINATION* "}):(0,a.jsx)("div",{className:d,id:"cell"+s,children:" *到达机场* "}):""===l?(0,a.jsxs)("div",{className:d,id:"cell"+s,children:[" ",o," ",t," ",(0,a.jsx)("br",{})," ",r," ",(0,a.jsx)("br",{})," ",n]}):(0,a.jsx)("div",{className:d+"-extras",id:"cell"+s,children:l})};var i=t(815),c=t.n(i);let d=e=>{let{diceOutcome:s,isTakeOff:t,task:n,diceRollable:r,currentPosition:o}=e;return(0===o&&(n={implement:"Warm-up smacks",posture:"Whatever you like",strikeCount:20,zone:"buttocks"}),47===o)?(0,a.jsx)("div",{className:c()["state-pane"],children:"Congratulations! You aced the game."}):0===s?(0,a.jsx)("div",{className:c()["state-pane"],children:"Click anywhere to roll a dice and start the game!"}):r?(0,a.jsxs)("div",{className:c()["state-pane"],children:["You've got ",s,". ",(0,a.jsx)("br",{}),"Your status: ",t?"In flight ✈️":"Not yet Taken off ⛽️",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"What's happening next: ",(0,a.jsx)("br",{}),n.strikeCount," ",n.implement," on ",n.zone,". ",(0,a.jsx)("br",{})," Posture: ",n.posture,"."]}):(0,a.jsx)("div",{className:c()["state-pane"]})},u=e=>{let{diceOutcome:s,isTakeOff:t,task:n,diceRollable:r,currentPosition:o}=e;return(0===o&&(n={implement:"热身巴掌或轻工具",posture:"任意你喜欢的",strikeCount:20,zone:"臀部"}),0===s)?(0,a.jsx)("div",{className:c()["state-pane"],children:"点击屏幕任意位置开始游戏!"}):r?(0,a.jsxs)("div",{className:c()["state-pane"],children:["你摇到的点数是 ",s,"。 ",(0,a.jsx)("br",{}),"状态：",t?"飞行中 ✈️":"还没起飞哦 ⛽️",(0,a.jsx)("br",{}),"接下来的任务：  ",(0,a.jsx)("br",{}),n.strikeCount,"下",n.implement,"。 ",(0,a.jsx)("br",{})," 部位：",n.zone,"。 ",(0,a.jsx)("br",{})," 姿势：",n.posture,"。"]}):(0,a.jsx)("div",{className:c()["state-pane"]})};var m=t(4703),x=t.n(m);let j=e=>{let{cells:s,lang:t}=e,[r,i]=(0,n.useState)(!0),[c,m]=(0,n.useState)(0),[j,p]=(0,n.useState)(0),[h,f]=(0,n.useState)(0),[N,v]=(0,n.useState)(!1),[k,g]=(0,n.useState)(0),b=()=>{if(!r)return;i(!1);let e=Math.floor(6*Math.random())+1;j>=5&&0===k&&(e=6),h>=4&&(e=47-k),m(e),p(j+1),setTimeout(()=>{0!==k||N?k+e>47?(g(94-k-e),f(h+1)):k+e===47?(g(47),setTimeout(()=>{g(0),m(0),p(0),f(0),v(!1)},4e3)):g(k+e):6===e&&v(!0),i(!0)},4300)},_={diceOutcome:c,isTakeOff:N,task:s[k],diceRollable:r,currentPosition:k};return(0,a.jsxs)("div",{className:x()["game-container"],children:[(0,a.jsx)("div",{onClick:b,onKeyUp:b,className:x()["dice-trigger"]}),(0,a.jsx)(o,{showDice:0!==j,outcome:c,rollable:r,onClick:b}),(0,a.jsx)("div",{className:"Board",children:s.map(e=>{let s={id:e.id,implement:e.implement,posture:e.posture,zone:e.zone,strikeCount:e.strikeCount,extra:e.extra,currentPosition:k,lang:t};return(0,a.jsx)(l,{...s},s.id)})}),"en"===t&&(0,a.jsx)(d,{..._}),"zh"===t&&(0,a.jsx)(u,{..._})]})};var p=j},8434:function(e,s,t){"use strict";t.r(s);var a=t(5893),n=t(9008),r=t.n(n),o=t(7294),l=t(7704),i=t(6904),c=t(8029),d=t(1163);let u=()=>{let e=(0,o.useContext)(l.N),s=(0,i.Z)(null==e?void 0:e.settings),t=(0,d.useRouter)();return(0,o.useEffect)(()=>{0===s.length&&t.push("/")}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"SP Ludo game - have fun!"}),(0,a.jsx)("meta",{name:"description",content:"A Spanking Ludo Game (aka. SP Ludo) for Spankos with a rollable dice."}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(c.Z,{cells:s,lang:"en"})]})};s.default=u},6904:function(e,s){"use strict";let t=e=>{try{if(void 0===e)return[];let s=e.implements.length,t=e.zones.length,a=e.postures.length,n=e.extras.length,r=e.range[0],o=e.range[1],l=[];for(let i=0;i<48;i++){let c=e.implements[Math.floor(Math.random()*s)],d=e.postures[Math.floor(Math.random()*a)],u=e.zones[Math.floor(Math.random()*t)],m=(o-r)/10+1,x=10*Math.floor(Math.random()*m)+r,j=Math.ceil(Math.random()*(s+t+a+1.5*n)),p="";j<=1.5*n&&(p=e.extras[Math.floor(Math.random()*n)]),l.push({id:i,implement:c,posture:d,zone:u,strikeCount:x,extra:p})}return l}catch(h){return[]}};s.Z=t},4703:function(e){e.exports={"dice-trigger":"Game_dice-trigger__Ht1Gm"}},815:function(e){e.exports={"state-pane":"statePane_state-pane__eHTRt"}},9008:function(e,s,t){e.exports=t(3121)},1163:function(e,s,t){e.exports=t(880)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7483)}),_N_E=e.O()}]);