"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63902],{63902:function(e,t,a){a.d(t,{autoConnectInjectedWallet:function(){return m},connectInjectedWallet:function(){return l}});var n=a(94237),r=a(85738),i=a(83286),o=a(14520),s=a(14649),c=a(30792),d=a(28266),u=a(24053);function h(e){let t=(0,d.injectedProvider)(e);if(!t)throw Error('No injected provider found for wallet: "'.concat(e,'"'));return t}async function l(e,t,a){let n=h(e),o=(await n.request({method:"eth_requestAccounts"}))[0];if(!o)throw Error("no accounts available");let s=(0,i.Kn)(o),d=await n.request({method:"eth_chainId"}).then(c.J),u=t.chain&&t.chain.id===d?t.chain:(0,r.XY)(d);return t.chain&&t.chain.id!==d&&(await f(n,t.chain),u=t.chain),v(n,s,u,a)}async function m(e,t,a){let n=h(e),o=(await n.request({method:"eth_accounts"}))[0];if(!o)throw Error("no accounts available");let s=(0,i.Kn)(o),d=await n.request({method:"eth_chainId"}).then(c.J);return v(n,s,a&&a.id===d?a:(0,r.XY)(d),t)}function w(e,t){let a={address:(0,i.Kn)(t),async sendTransaction(t){return{transactionHash:await e.request({method:"eth_sendTransaction",params:[{accessList:t.accessList,value:t.value?(0,o.eC)(t.value):void 0,gas:t.gas?(0,o.eC)(t.gas):void 0,from:this.address,to:t.to,data:t.data}]})}},async signMessage(t){let{message:n}=t;if(!a.address)throw Error("Provider not setup");let r="string"==typeof n?(0,o.$G)(n):n.raw instanceof Uint8Array?(0,o.dg)(n.raw):n.raw;return await e.request({method:"personal_sign",params:[r,a.address]})},async signTypedData(t){if(!e||!a.address)throw Error("Provider not setup");let r=(0,u.t)(t),{domain:i,message:o,primaryType:s}=r,c={EIP712Domain:(0,n.cj)({domain:i}),...r.types};(0,n.iC)({domain:i,message:o,primaryType:s,types:c});let d=(0,n.H6)({domain:null!=i?i:{},message:o,primaryType:s,types:c});return await e.request({method:"eth_signTypedData_v4",params:[a.address,d]})},watchAsset:async t=>await e.request({method:"wallet_watchAsset",params:t},{retryCount:0})};return a}async function v(e,t,a,n){let o=w(e,t);async function s(){e.removeListener("accountsChanged",u),e.removeListener("chainChanged",h),e.removeListener("disconnect",d)}async function d(){s(),n.emit("disconnect",void 0)}function u(t){if(t[0]){let a=w(e,(0,i.Kn)(t[0]));n.emit("accountChanged",a),n.emit("accountsChanged",t)}else d()}function h(e){let t=(0,r.XY)((0,c.J)(e));n.emit("chainChanged",t)}return e.on&&(e.on("accountsChanged",u),e.on("chainChanged",h),e.on("disconnect",d)),[o,a,d,t=>f(e,t)]}async function f(e,t){let a=(0,o.eC)(t.id);try{await e.request({method:"wallet_switchEthereumChain",params:[{chainId:a}]})}catch(o){var n,i,c;if((null==o?void 0:o.code)===4902||(null==o?void 0:null===(i=o.data)||void 0===i?void 0:null===(n=i.originalError)||void 0===n?void 0:n.code)===4902){let n=await (0,r.ZN)(t);await e.request({method:"wallet_addEthereumChain",params:[{chainId:a,chainName:n.name,nativeCurrency:n.nativeCurrency,rpcUrls:(0,s.w)(n),blockExplorerUrls:null===(c=n.explorers)||void 0===c?void 0:c.map(e=>e.url)}]})}else throw o}}}}]);