(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[174],{9458:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en/settings",function(){return s(1635)}])},4115:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var n=s(5893),a=s(3416);s(7294);var r=s(8744),i=s.n(r);let l=e=>{let{content:t,onClick:s}=e;return(0,n.jsx)("div",{className:i().bubble,onClick:s,children:t})},o=e=>{let{classname:t,text:s,items:r,placeholder:o,onSettingDelete:c,onSettingAdd:d}=e,u=e=>{c(t,e.target.innerHTML)},g=e=>{if("Enter"===e.key){let s=e.target.value;""!==s&&(e.target.value="",d(t,s))}};return(0,n.jsxs)("div",{className:i()[t],children:[s,(0,n.jsx)("input",{placeholder:o,onKeyUp:g}),(0,n.jsx)("br",{}),r.map(e=>{let t={content:e,key:(0,a.x0)(),onClick:u};return(0,n.jsx)(l,{...t})})]})};var c=o},1635:function(e,t,s){"use strict";s.r(t);var n=s(5893),a=s(9008),r=s.n(a),i=s(7294),l=s(1163),o=s(7937),c=s(7704),d=s(4115),u=s(8744),g=s.n(u);let h=()=>{let[e,t]=(0,i.useState)(["Bath Brush","Belt","Cane","Crop","Flogger","Hair Brush","Hand","Leather Paddle","Ruler","Whip","Wooden Paddle"]),[s,a]=(0,i.useState)(["Bend Over","Chair Kneeling","Diaper Position","Hands and Knees","Head and Knees","Kneeling","Over the Knee","Standing and Leaning","Touching Toes","Under the Arm","Wheelbarrow"]),[u,h]=(0,i.useState)(["Back","Breasts","Buttocks","Feet","Inner Buttocks","Inner Thighs","Palm","Tender Sit","Upper Thighs"]),[p,m]=(0,i.useState)(["Enema","Figging","Short break","Wax Play"]),[x,_]=(0,i.useState)([20,50]),b=(0,l.useRouter)(),k=(0,i.useContext)(c.N),j=(e,t)=>{_(t)},v=(n,r)=>{let i;switch(n){case"implements":(i=e.indexOf(r))>-1&&(e.splice(i,1),t([...e]));break;case"postures":(i=s.indexOf(r))>-1&&(s.splice(i,1),a([...s]));break;case"zones":(i=u.indexOf(r))>-1&&(u.splice(i,1),h([...u]));break;case"extras":(i=p.indexOf(r))>-1&&(p.splice(i,1),m([...p]));break;default:return}},f=(n,r)=>{switch(n){case"implements":e.push(r),t([...e.sort()]);break;case"postures":s.push(r),a([...s.sort()]);break;case"zones":u.push(r),h([...u.sort()]);break;case"extras":p.push(r),m([...p.sort()]);break;default:return}},S=e=>{e.target.src="/images/die_hover.png"},N=e=>{e.target.src="/images/die.png"},w=()=>{if(0===e.length||0===s.length||0===u.length){alert("Sorry, but you have left some necessary pool empty :-(");return}null==k||k.setSettings({implements:e,postures:s,zones:u,extras:p,range:x}),b.push("./game")};return(0,n.jsxs)("div",{className:g().container,children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:"Settings"}),(0,n.jsx)("meta",{name:"description",content:"A Spanking Ludo Game (aka. SP Ludo) for Spankos with a rollable dice."}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("div",{className:g().title,children:"Settings"}),(0,n.jsxs)("div",{className:g().intro,children:["The game board will be generated using the pools below.",(0,n.jsx)("br",{}),"Let's tailor them as you like before the game starts!"]}),(0,n.jsxs)("div",{className:g().pools,children:[(0,n.jsx)(d.Z,{classname:"implements",text:"Implements Pool: ",placeholder:"ENTER an implement",items:e,onSettingDelete:v,onSettingAdd:f}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(d.Z,{classname:"postures",text:"Postures Pool: ",placeholder:"ENTER a posture",items:s,onSettingDelete:v,onSettingAdd:f}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(d.Z,{classname:"zones",text:"Zones Pool: ",placeholder:"ENTER a target zone",items:u,onSettingDelete:v,onSettingAdd:f})]}),(0,n.jsxs)("div",{className:g()["other-settings"],children:[(0,n.jsxs)("div",{className:g().slider,children:[(0,n.jsxs)("div",{children:[" Strike# Range: ",x[0]," to ",x[1]," "]}),(0,n.jsx)(o.ZP,{value:x,onChange:j,valueLabelDisplay:"auto",min:10,max:100,step:10})]}),(0,n.jsx)("br",{}),(0,n.jsx)(d.Z,{classname:"extras",text:"Optional Task: ",placeholder:"ENTER a new task",items:p,onSettingDelete:v,onSettingAdd:f})]}),(0,n.jsxs)("div",{className:g()["start-kits-container"],children:[(0,n.jsx)("img",{src:"/images/arrow.png",alt:"arrow",className:g()["arrow-pic"]}),(0,n.jsx)("img",{src:"/images/die.png",alt:"start",className:g()["starting-die"],onClick:w,onMouseEnter:S,onMouseLeave:N})]})]})};t.default=h},8744:function(e){e.exports={container:"setting_container__hpYKA",slider:"setting_slider__U2_B2",bubble:"setting_bubble__I5myF",title:"setting_title__mIomo",intro:"setting_intro__kH1eM",pools:"setting_pools__3BcF8","other-settings":"setting_other-settings__aLMPi","arrow-pic":"setting_arrow-pic__BIh2E","starting-die":"setting_starting-die__1vqsg","start-kits-container":"setting_start-kits-container__FM2aL"}}},function(e){e.O(0,[520,934,774,888,179],function(){return e(e.s=9458)}),_N_E=e.O()}]);