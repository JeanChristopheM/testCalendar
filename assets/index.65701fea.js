import{r as u,j as r,a as l,C as v,F as b,R as y,b as N}from"./vendor.8ff7a426.js";const E=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};E();const f=[{date:new Date(2022,6,8),label:"fin de bail",id:1},{date:new Date(2022,6,12),label:"d\xE9but de location",id:2},{date:new Date(2022,6,19),label:"facture \xE0 payer",id:3},{date:new Date(2022,6,19),label:"fin de bail",id:4}];function w(){const[a,i]=u.exports.useState(new Date),[o,c]=u.exports.useState("-dark"),[e,t]=u.exports.useState([]),s=()=>{c(n=>n==="-dark"?"-light":"-dark")},h=n=>{i(n),console.log(n)},p=n=>{const{date:g}=n,m=f.filter(d=>d.date.getTime()===g.getTime());if(!(!m||m.length===0))return r("div",{className:"event",children:[l("div",{className:"blip"}),l("div",{className:"popup",children:l("ul",{className:"event--labels",children:m.map(d=>l("li",{children:d.label},d.id))})})]})};return u.exports.useEffect(()=>{t(a?f.filter(n=>n.date.getTime()===a.getTime()):[])},[a,t]),r("div",{className:"App",children:[l("div",{className:"toggle",children:r("button",{onClick:s,children:["Switch ",o," theme"]})}),l("div",{className:`calendarContainer theme${o}`,children:l(v,{onChange:h,locale:"fr-FR",minDetail:"year",tileContent:p,defaultValue:new Date})}),l("div",{className:"resultsContainer",children:e.length!==0&&r(b,{children:[r("p",{children:["Le ",a.toLocaleString().slice(0,10)," vous avez comme t\xE2ches :"," "]}),l("ul",{children:e.map(n=>r("li",{children:[n.label," :"," ",r("a",{href:`entityType/${n.id}/details`,children:["taskId=",n.id]})]}))})]})})]})}y.render(l(N.StrictMode,{children:l(w,{})}),document.getElementById("root"));
