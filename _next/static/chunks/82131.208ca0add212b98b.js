"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82131,74530],{45376:function(t,n,c){c.d(n,{jA:function(){return o}});var a=c(94293);let r=[{type:"address",name:"_address"}],e=[{type:"uint256"}];async function o(t){return(0,a.readContract)({contract:t.contract,method:["0x70a08231",r,e],params:[t.address]})}},73294:function(t,n,c){c.d(n,{uH:function(){return o}});var a=c(94293);let r=[],e=[{type:"uint8"}];async function o(t){return(0,a.readContract)({contract:t.contract,method:["0x313ce567",r,e],params:[]})}},82131:function(t,n,c){c.d(n,{getBalance:function(){return o}});var a=c(45890),r=c(45376),e=c(74530);async function o(t){let[n,c]=await Promise.all([(0,r.jA)(t),(0,e.getCurrencyMetadata)(t)]);return{...c,value:n,displayValue:(0,a.bb)(n,c.decimals)}}},74530:function(t,n,c){c.d(n,{getCurrencyMetadata:function(){return h}});var a=c(71548),r=c(97142),e=c(94293);let o=[],u=[{type:"string"}];async function s(t){return(0,e.readContract)({contract:t.contract,method:["0x06fdde03",o,u],params:[]})}async function i(t){return(0,r.D)(()=>s(t),{cacheKey:"".concat(t.contract.chain.id,":").concat(t.contract.address,":name"),cacheTime:Number.POSITIVE_INFINITY})}let d=[],m=[{type:"string"}];async function y(t){return(0,e.readContract)({contract:t.contract,method:["0x95d89b41",d,m],params:[]})}async function l(t){return(0,r.D)(()=>y(t),{cacheKey:"".concat(t.contract.chain.id,":").concat(t.contract.address,":symbol"),cacheTime:Number.POSITIVE_INFINITY})}var f=c(73294);async function h(t){if((0,a.qw)(t.contract.address))return{name:"Ether",symbol:"ETH",decimals:18,...t.contract.chain.nativeCurrency};try{let[n,c,a]=await Promise.all([i(t).catch(()=>""),l(t),(0,f.uH)(t)]);return{name:n,symbol:c,decimals:a}}catch(t){throw Error("Invalid currency token")}}}}]);