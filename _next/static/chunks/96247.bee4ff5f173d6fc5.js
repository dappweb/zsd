"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96247],{33270:function(t,r,e){e.d(r,{C:function(){return c}});var a=e(21325),n=e(89586);class c{async get(){let[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return n.bH.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}constructor(t){this.featureName=n.du.name,this.set=(0,a.f)(async t=>{let r=await n.bH.parseAsync(t);return a.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})}),this.contractWrapper=t}}},36575:function(t,r,e){e.d(r,{C:function(){return c}});var a=e(21325),n=e(89586);class c{async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}constructor(t){this.featureName=n.d7.name,this.setRecipient=(0,a.f)(async t=>a.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]})),this.contractWrapper=t}}},96247:function(t,r,e){e.r(r),e.d(r,{EditionDrop:function(){return w}});var a=e(61501),n=e(83531),c=e(89586),s=e(21325),i=e(13545),o=e(12158),p=e(21096),h=e(51445),l=e(33270),d=e(13957),u=e(36575),f=e(69953),y=e(91129),g=e(63897);e(12016),e(98430),e(32942),e(50144);class m{async getAllClaimerAddresses(t){let r=(await this.events.getEvents("TokensClaimed")).filter(r=>!!(r.data&&a.O$.isBigNumber(r.data.tokenId))&&r.data.tokenId.eq(t));return Array.from(new Set(r.filter(t=>{var r;return"string"==typeof(null===(r=t.data)||void 0===r?void 0:r.claimer)}).map(t=>t.data.claimer)))}constructor(t){this.events=t}}class w extends y.S{onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t,r){return this.erc1155.getOwned(t,r)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[(0,c.H)("transfer"),n.d])}async getClaimTransaction(t,r,e){let a=!(arguments.length>3)||void 0===arguments[3]||arguments[3];return this.erc1155.getClaimTransaction(t,r,e,{checkERC20Allowance:a})}async prepare(t,r,e){return s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}constructor(t,r,e){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,y=arguments.length>5?arguments[5]:void 0,W=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new c.cs(t,r,n,a,e);super(W,e,y),this.createBatch=(0,s.f)(async(t,r)=>this.erc1155.lazyMint.prepare(t,r)),this.claimTo=(0,s.f)((()=>{var t=this;return async function(r,e,a){let n=!(arguments.length>3)||void 0===arguments[3]||arguments[3];return t.erc1155.claimTo.prepare(r,e,a,{checkERC20Allowance:n})}})()),this.claim=(0,s.f)((()=>{var t=this;return async function(r,e){let a=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=await t.contractWrapper.getSignerAddress();return t.claimTo.prepare(n,r,e,a)}})()),this.burnTokens=(0,s.f)(async(t,r)=>this.erc1155.burn.prepare(t,r)),this.abi=c.bj.parse(n),this.metadata=new i.C(this.contractWrapper,c.bX,this.storage),this.app=new i.b(this.contractWrapper,this.metadata,this.storage),this.roles=new d.C(this.contractWrapper,w.contractRoles),this.royalties=new h.C(this.contractWrapper,this.metadata),this.sales=new u.C(this.contractWrapper),this.claimConditions=new f.D(this.contractWrapper,this.metadata,this.storage),this.events=new i.a(this.contractWrapper),this.history=new m(this.events),this.encoder=new o.C(this.contractWrapper),this.estimator=new i.G(this.contractWrapper),this.platformFees=new l.C(this.contractWrapper),this.interceptor=new p.C(this.contractWrapper),this.checkout=new g.P(this.contractWrapper),this.owner=new h.a(this.contractWrapper)}}w.contractRoles=c.dG},91129:function(t,r,e){e.d(r,{S:function(){return c}});var a=e(21325),n=e(69953);class c{get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){return this.erc1155.get(t)}async totalSupply(t){return this.erc1155.totalSupply(t)}async balanceOf(t,r){return this.erc1155.balanceOf(t,r)}async balance(t){return this.erc1155.balance(t)}async isApproved(t,r){return this.erc1155.isApproved(t,r)}constructor(t,r,e){this.transfer=(0,a.f)((()=>{var t=this;return async function(r,e,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return t.erc1155.transfer.prepare(r,e,a,n)}})()),this.transferBatch=(0,a.f)((()=>{var t=this;return async function(r,e,a,n){let c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0];return t.erc1155.transferBatch.prepare(r,e,a,n,c)}})()),this.setApprovalForAll=(0,a.f)(async(t,r)=>this.erc1155.setApprovalForAll.prepare(t,r)),this.airdrop=(0,a.f)((()=>{var t=this;return async function(r,e,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return t.erc1155.airdrop.prepare(r,e,a,n)}})()),this.contractWrapper=t,this.storage=r,this.erc1155=new n.E(this.contractWrapper,this.storage,e),this._chainId=e}}},63897:function(t,r,e){e.d(r,{P:function(){return h}});var a=e(89586),n=e(45094);let c="".concat("https://paper.xyz/api","/").concat("2022-08-12","/platform/thirdweb"),s={[a.aS.Mainnet]:"Ethereum",[a.aS.Goerli]:"Goerli",[a.aS.Polygon]:"Polygon",[a.aS.Mumbai]:"Mumbai",[a.aS.Avalanche]:"Avalanche"};async function i(t,r){let e=((0,n.Z)(r in s,"chainId not supported by paper: ".concat(r)),s[r]),a=await fetch("".concat(c,"/register-contract?contractAddress=").concat(t,"&chain=").concat(e)),i=await a.json();return(0,n.Z)(i.result.id,"Contract is not registered with paper"),i.result.id}let o={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};async function p(t,r){let e=await fetch("".concat(c,"/checkout-link-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contractId:t,...o,...r,metadata:{...r.metadata,via_platform:"thirdweb"},hideNativeMint:!0,hidePaperWallet:!!r.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1})}),a=await e.json();return(0,n.Z)(a.checkoutLinkIntentUrl,"Failed to create checkout link intent"),a.checkoutLinkIntentUrl}class h{async getCheckoutId(){return i(this.contractWrapper.address,await this.contractWrapper.getChainID())}async isEnabled(){try{return!!await this.getCheckoutId()}catch(t){return!1}}async createLinkIntent(t){return await p(await this.getCheckoutId(),t)}constructor(t){this.contractWrapper=t}}}}]);