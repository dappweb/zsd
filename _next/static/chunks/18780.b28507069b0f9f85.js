"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18780],{91129:function(t,r,e){e.d(r,{S:function(){return s}});var a=e(21325),n=e(69953);class s{get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){return this.erc1155.get(t)}async totalSupply(t){return this.erc1155.totalSupply(t)}async balanceOf(t,r){return this.erc1155.balanceOf(t,r)}async balance(t){return this.erc1155.balance(t)}async isApproved(t,r){return this.erc1155.isApproved(t,r)}constructor(t,r,e){this.transfer=(0,a.f)((()=>{var t=this;return async function(r,e,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return t.erc1155.transfer.prepare(r,e,a,n)}})()),this.transferBatch=(0,a.f)((()=>{var t=this;return async function(r,e,a,n){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0];return t.erc1155.transferBatch.prepare(r,e,a,n,s)}})()),this.setApprovalForAll=(0,a.f)(async(t,r)=>this.erc1155.setApprovalForAll.prepare(t,r)),this.airdrop=(0,a.f)((()=>{var t=this;return async function(r,e,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return t.erc1155.airdrop.prepare(r,e,a,n)}})()),this.contractWrapper=t,this.storage=r,this.erc1155=new n.E(this.contractWrapper,this.storage,e),this._chainId=e}}},4681:function(t,r,e){e.d(r,{h:function(){return n}});var a=e(89586);async function n(t,r,n){let s=t.getProvider(),o=(await Promise.resolve().then(e.t.bind(e,54497,19))).default,c=new a.cs(s,r,o,{},t.storage),i=await t.getSignerAddress(),d=t.address;return(await c.read("allowance",[i,d])).gte(n)}},72762:function(t,r,e){e.d(r,{a:function(){return h},g:function(){return g},h:function(){return p},i:function(){return d},m:function(){return u},v:function(){return l}});var a=e(8400),n=e(61501),s=e(45094),o=e(73853),c=e(89586),i=e(12158);async function d(t,r,n,s,c){try{let i=(await e.e(31787).then(e.t.bind(e,31787,19))).default,d=new a.CH(n,i,t),[p,l]=await Promise.all([d.supportsInterface(o.I),d.supportsInterface(o.a)]);if(p){let o;let i=(await Promise.resolve().then(e.t.bind(e,32557,19))).default,d=new a.CH(n,i,t);if(await d.isApprovedForAll(c,r))return!0;try{o=await d.getApproved(s)}catch(t){}return(null==o?void 0:o.toLowerCase())===r.toLowerCase()}if(!l)return console.error("Contract does not implement ERC 1155 or ERC 721."),!1;{let s=(await Promise.resolve().then(e.t.bind(e,10506,19))).default,o=new a.CH(n,s,t);return await o.isApprovedForAll(c,r)}}catch(t){return console.error("Failed to check if token is approved",t),!1}}async function p(t,r,a,n,s){let i=(await e.e(31787).then(e.t.bind(e,31787,19))).default,d=new c.cs(t.getSignerOrProvider(),a,i,t.options,t.storage),[p,l]=await Promise.all([d.read("supportsInterface",[o.I]),d.read("supportsInterface",[o.a])]);if(p){let o=(await Promise.resolve().then(e.t.bind(e,32557,19))).default,i=new c.cs(t.getSignerOrProvider(),a,o,t.options,t.storage);await i.read("isApprovedForAll",[s,r])||(await i.read("getApproved",[n])).toLowerCase()===r.toLowerCase()||await i.sendTransaction("setApprovalForAll",[r,!0])}else if(l){let n=(await Promise.resolve().then(e.t.bind(e,10506,19))).default,o=new c.cs(t.getSignerOrProvider(),a,n,t.options,t.storage);await o.read("isApprovedForAll",[s,r])||await o.sendTransaction("setApprovalForAll",[r,!0])}else throw Error("Contract must implement ERC 1155 or ERC 721.")}function l(t){(0,s.Z)(void 0!==t.assetContractAddress&&null!==t.assetContractAddress,"Asset contract address is required"),(0,s.Z)(void 0!==t.buyoutPricePerToken&&null!==t.buyoutPricePerToken,"Buyout price is required"),(0,s.Z)(void 0!==t.listingDurationInSeconds&&null!==t.listingDurationInSeconds,"Listing duration is required"),(0,s.Z)(void 0!==t.startTimestamp&&null!==t.startTimestamp,"Start time is required"),(0,s.Z)(void 0!==t.tokenId&&null!==t.tokenId,"Token ID is required"),(0,s.Z)(void 0!==t.quantity&&null!==t.quantity,"Quantity is required"),"NewAuctionListing"===t.type&&(0,s.Z)(void 0!==t.reservePricePerToken&&null!==t.reservePricePerToken,"Reserve price is required")}async function u(t,r,e){return{quantity:e.quantityDesired,pricePerToken:e.pricePerToken,currencyContractAddress:e.currency,buyerAddress:e.offeror,quantityDesired:e.quantityWanted,currencyValue:await (0,i.a)(t,e.currency,e.quantityWanted.mul(e.pricePerToken)),listingId:r}}function h(t,r,e){return e=n.O$.from(e),t=n.O$.from(t),r=n.O$.from(r),!t.eq(n.O$.from(0))&&r.sub(t).mul(c.dE).div(t).gte(e)}async function g(t,r,e){let a=[];for(;r-t>o.D;)a.push(e(t,t+o.D-1)),t+=o.D;return a.push(e(t,r-1)),await Promise.all(a)}},18780:function(t,r,e){e.r(r),e.d(r,{Pack:function(){return F}});var a=e(73877),n=e(61501),s=e(83531),o=e(12158),c=e(4681),i=e(78680),d=e(89586),p=e(11454),l=e(13545),u=e(72762),h=e(73853),g=e(21325),f=e(21096),w=e(51445),v=e(13957),k=e(91129),y=e(75581),m=e(15451),A=e(15418),P=e(30248);let W=P.z.object({contractAddress:d.b9}),C=W.extend({quantity:d.cw}),I=W.extend({tokenId:d.b6}),b=W.extend({tokenId:d.b6,quantity:d.b6}),R=C.omit({quantity:!0}).extend({quantityPerReward:d.cw}),S=b.omit({quantity:!0}).extend({quantityPerReward:d.b6}),T=R.extend({totalRewards:d.b6.default("1")}),O=S.extend({totalRewards:d.b6.default("1")}),q=P.z.object({erc20Rewards:P.z.array(T).default([]),erc721Rewards:P.z.array(I).default([]),erc1155Rewards:P.z.array(O).default([])}),E=q.extend({packMetadata:A.N,rewardsPerPack:d.b6.default("1"),openStartTime:p.R.default(new Date)});e(12016),e(98430),e(32942),e(50144);class L{onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async parseRewards(t){let r=[],e=[],n=[];for(let s of t)switch(s.tokenType){case 0:{let t=await (0,o.f)(this.contractWrapper.getProvider(),s.assetContract);r.push({contractAddress:s.assetContract,quantityPerReward:a.formatUnits(s.totalAmount,t.decimals).toString()});break}case 1:e.push({contractAddress:s.assetContract,tokenId:s.tokenId.toString()});break;case 2:n.push({contractAddress:s.assetContract,tokenId:s.tokenId.toString(),quantityPerReward:s.totalAmount.toString()})}return{erc20Rewards:r,erc721Rewards:e,erc1155Rewards:n}}async addPackOpenEventListener(t){return this.events.addEventListener("PackOpened",async r=>{t(r.data.packId.toString(),r.data.opener,await this.parseRewards(r.data.rewardUnitsDistributed))})}async canClaimRewards(t){let r=await (0,d.aL)(t||await this.contractWrapper.getSignerAddress());return await this.contractWrapper.read("canClaimRewards",[r])}async openAndClaim(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e5,a=await this.contractWrapper.sendTransaction("openPackAndClaimRewards",[t,r,e],{gasLimit:n.O$.from(5e5)}),s=n.O$.from(0);try{s=this.contractWrapper.parseLogs("PackOpenRequested",null==a?void 0:a.logs)[0].args.requestId}catch(t){}return{receipt:a,id:s}}async getLinkBalance(){let t=(await Promise.resolve().then(e.t.bind(e,54497,19))).default;return this.getLinkContract(t).balanceOf(this.contractWrapper.address)}async transferLink(t){let r=(await Promise.resolve().then(e.t.bind(e,54497,19))).default;await this.getLinkContract(r).transfer(this.contractWrapper.address,t)}getLinkContract(t){let r=d.aY[this.chainId];if(!r)throw Error("No LINK token address found for chainId ".concat(this.chainId));let e=new d.cs(this.contractWrapper.getSignerOrProvider(),r,t,this.contractWrapper.options,this.storage);return new m.E(e,this.storage,this.chainId)}constructor(t,r,e,a,s){this.featureName=d.dK.name,this.open=(0,g.f)((()=>{var t=this;return async function(r){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e5;return g.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"openPack",args:[r,e],overrides:{gasLimit:a},parse:r=>{let e=n.O$.from(0);try{e=t.contractWrapper.parseLogs("PackOpenRequested",null==r?void 0:r.logs)[0].args.requestId}catch(t){}return{receipt:r,id:e}}})}})()),this.claimRewards=(0,g.f)((()=>{var t=this;return async function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5e5;return g.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"claimRewards",args:[],overrides:{gasLimit:r},parse:async r=>{let e=t.contractWrapper.parseLogs("PackOpened",null==r?void 0:r.logs);if(0===e.length)throw Error("PackOpened event not found");let a=e[0].args.rewardUnitsDistributed;return await t.parseRewards(a)}})}})());let o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:new d.cs(t,r,y,a,e);this.contractWrapper=o,this.storage=e,this.chainId=s,this.events=new l.a(this.contractWrapper)}}class F extends k.S{get vrf(){return(0,p.a)(this._vrf,d.dK)}onNetworkUpdated(t){var r;this.contractWrapper.updateSignerOrProvider(t),null===(r=this._vrf)||void 0===r||r.onNetworkUpdated(t)}getAddress(){return this.contractWrapper.address}async get(t){return this.erc1155.get(t)}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[(0,d.H)("transfer"),s.d])}async getPackContents(t){let{contents:r,perUnitAmounts:e}=await this.contractWrapper.read("getPackContents",[t]),s=[],c=[],i=[];for(let t=0;t<r.length;t++){let d=r[t],p=e[t];switch(d.tokenType){case 0:{let t=await (0,o.f)(this.contractWrapper.getProvider(),d.assetContract),r=a.formatUnits(p,t.decimals),e=a.formatUnits(n.O$.from(d.totalAmount).div(p),t.decimals);s.push({contractAddress:d.assetContract,quantityPerReward:r,totalRewards:e});break}case 1:c.push({contractAddress:d.assetContract,tokenId:d.tokenId.toString()});break;case 2:i.push({contractAddress:d.assetContract,tokenId:d.tokenId.toString(),quantityPerReward:p.toString(),totalRewards:n.O$.from(d.totalAmount).div(p).toString()})}}return{erc20Rewards:s,erc721Rewards:c,erc1155Rewards:i}}async toPackContentArgs(t){let r=[],e=[],{erc20Rewards:a,erc721Rewards:s,erc1155Rewards:o}=t,d=this.contractWrapper.getProvider(),p=await this.contractWrapper.getSignerAddress();for(let t of a){let a=(await (0,i.n)(d,t.quantityPerReward,t.contractAddress)).mul(t.totalRewards);if(!await (0,c.h)(this.contractWrapper,t.contractAddress,a))throw Error('ERC20 token with contract address "'.concat(t.contractAddress,'" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("').concat(t.contractAddress,'").setAllowance("').concat(this.getAddress(),'", ').concat(a,");\n\n"));e.push(t.totalRewards),r.push({assetContract:t.contractAddress,tokenType:0,totalAmount:a,tokenId:0})}for(let t of s){if(!await (0,u.i)(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,p))throw Error('ERC721 token "'.concat(t.tokenId,'" with contract address "').concat(t.contractAddress,'" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("').concat(t.contractAddress,'").setApprovalForToken("').concat(this.getAddress(),'", ').concat(t.tokenId,");\n\n"));e.push("1"),r.push({assetContract:t.contractAddress,tokenType:1,totalAmount:1,tokenId:t.tokenId})}for(let t of o){if(!await (0,u.i)(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,p))throw Error('ERC1155 token "'.concat(t.tokenId,'" with contract address "').concat(t.contractAddress,'" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("').concat(t.contractAddress,'").setApprovalForAll("').concat(this.getAddress(),'", true);\n\n'));e.push(t.totalRewards),r.push({assetContract:t.contractAddress,tokenType:2,totalAmount:n.O$.from(t.quantityPerReward).mul(n.O$.from(t.totalRewards)),tokenId:t.tokenId})}return{contents:r,numOfRewardUnits:e}}async prepare(t,r,e){return g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}detectVrf(){if((0,l.d)(this.contractWrapper,"PackVRF"))return new L(this.contractWrapper.getSignerOrProvider(),this.contractWrapper.address,this.storage,this.contractWrapper.options,this.chainId)}constructor(t,r,e){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new d.cs(t,r,s,n.gasless&&"openzeppelin"in n.gasless?{...n,gasless:{...n.gasless,openzeppelin:{...n.gasless.openzeppelin,useEOAForwarder:!0}}}:n,e);super(i,e,c),this.create=(0,g.f)(async t=>{let r=await this.contractWrapper.getSignerAddress();return this.createTo.prepare(r,t)}),this.addPackContents=(0,g.f)(async(t,r)=>{let[e,a]=await Promise.all([this.contractWrapper.getSignerAddress(),q.parseAsync(r)]),{contents:n,numOfRewardUnits:s}=await this.toPackContentArgs(a);return g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"addPackContents",args:[t,n,s,e],parse:t=>{let r=this.contractWrapper.parseLogs("PackUpdated",null==t?void 0:t.logs);if(0===r.length)throw Error("PackUpdated event not found");let e=r[0].args.packId;return{id:e,receipt:t,data:()=>this.erc1155.get(e)}}})}),this.createTo=(0,g.f)(async(t,r)=>{let[e,a,n]=await Promise.all([(0,h.b)(r.packMetadata,this.storage),E.parseAsync(r),(0,d.aL)(t)]),{erc20Rewards:s,erc721Rewards:o,erc1155Rewards:c}=a,{contents:i,numOfRewardUnits:p}=await this.toPackContentArgs({erc20Rewards:s,erc721Rewards:o,erc1155Rewards:c});return g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createPack",args:[i,p,e,a.openStartTime,a.rewardsPerPack,n],parse:t=>{let r=this.contractWrapper.parseLogs("PackCreated",null==t?void 0:t.logs);if(0===r.length)throw Error("PackCreated event not found");let e=r[0].args.packId;return{id:e,receipt:t,data:()=>this.erc1155.get(e)}}})}),this.open=(0,g.f)((()=>{var t=this;return async function(r){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e5;if(t._vrf)throw Error("This contract is using Chainlink VRF, use `contract.vrf.open()` or `contract.vrf.openAndClaim()` instead");return g.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"openPack",args:[r,e],overrides:{gasLimit:n},parse:async r=>{let e=t.contractWrapper.parseLogs("PackOpened",null==r?void 0:r.logs);if(0===e.length)throw Error("PackOpened event not found");let n=e[0].args.rewardUnitsDistributed,s=[],c=[],i=[];for(let r of n)switch(r.tokenType){case 0:{let e=await (0,o.f)(t.contractWrapper.getProvider(),r.assetContract);s.push({contractAddress:r.assetContract,quantityPerReward:a.formatUnits(r.totalAmount,e.decimals).toString()});break}case 1:c.push({contractAddress:r.assetContract,tokenId:r.tokenId.toString()});break;case 2:i.push({contractAddress:r.assetContract,tokenId:r.tokenId.toString(),quantityPerReward:r.totalAmount.toString()})}return{erc20Rewards:s,erc721Rewards:c,erc1155Rewards:i}}})}})()),this.abi=d.bj.parse(s||[]),this.metadata=new l.C(this.contractWrapper,d.c3,this.storage),this.app=new l.b(this.contractWrapper,this.metadata,this.storage),this.roles=new v.C(this.contractWrapper,F.contractRoles),this.royalties=new w.C(this.contractWrapper,this.metadata),this.encoder=new o.C(this.contractWrapper),this.estimator=new l.G(this.contractWrapper),this.events=new l.a(this.contractWrapper),this.interceptor=new f.C(this.contractWrapper),this.owner=new w.a(this.contractWrapper),this._vrf=this.detectVrf()}}F.contractRoles=d.dL}}]);