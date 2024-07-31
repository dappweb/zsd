"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68230],{21096:function(t,r,e){e.d(r,{C:function(){return a}});class a{overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}constructor(t){this.contractWrapper=t}}},33270:function(t,r,e){e.d(r,{C:function(){return c}});var a=e(21325),n=e(89586);class c{async get(){let[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return n.bH.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}constructor(t){this.featureName=n.du.name,this.set=(0,a.f)(async t=>{let r=await n.bH.parseAsync(t);return a.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})}),this.contractWrapper=t}}},36575:function(t,r,e){e.d(r,{C:function(){return c}});var a=e(21325),n=e(89586);class c{async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}constructor(t){this.featureName=n.d7.name,this.setRecipient=(0,a.f)(async t=>a.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]})),this.contractWrapper=t}}},36898:function(t,r,e){e.d(r,{S:function(){return s}});var a=e(89586),n=e(21325),c=e(67826);class s{get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t,r){return t&&(t=await (0,a.aL)(t)),this.erc721.getOwned(t,r)}async getOwnedTokenIds(t){return t&&(t=await (0,a.aL)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}constructor(t,r,e){this.transfer=(0,n.f)(async(t,r)=>this.erc721.transfer.prepare(t,r)),this.setApprovalForAll=(0,n.f)(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r)),this.setApprovalForToken=(0,n.f)(async(t,r)=>n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await (0,a.aL)(t),r]})),this.contractWrapper=t,this.storage=r,this.erc721=new c.E(this.contractWrapper,this.storage,e),this._chainId=e}}},68230:function(t,r,e){e.r(r),e.d(r,{NFTDrop:function(){return g}});var a=e(61501),n=e(83531),c=e(73853),s=e(89586),i=e(21325),o=e(13545),p=e(12158),h=e(21096),l=e(51445),u=e(33270),d=e(13957),m=e(36575),f=e(33676),y=e(36898),w=e(63897);e(12016),e(98430),e(32942),e(50144);class g extends y.S{onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async totalSupply(){let[t,r]=await Promise.all([this.totalClaimedSupply(),this.totalUnclaimedSupply()]);return t.add(r)}async getAllClaimed(t){let r=a.O$.from((null==t?void 0:t.start)||0).toNumber(),e=a.O$.from((null==t?void 0:t.count)||c.D).toNumber(),n=Math.min((await this.contractWrapper.read("nextTokenIdToClaim",[])).toNumber(),r+e);return await Promise.all(Array.from(Array(n).keys()).map(t=>this.get(t.toString())))}async getAllUnclaimed(t){let r=a.O$.from((null==t?void 0:t.start)||0).toNumber(),e=a.O$.from((null==t?void 0:t.count)||c.D).toNumber(),n=a.O$.from(Math.max((await this.contractWrapper.read("nextTokenIdToClaim",[])).toNumber(),r)),s=a.O$.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint",[])).toNumber(),n.toNumber()+e));return await Promise.all(Array.from(Array(s.sub(n).toNumber()).keys()).map(t=>this.erc721.getTokenMetadata(n.add(t).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[(0,s.H)("transfer"),n.d])}async getClaimTransaction(t,r){let e=!(arguments.length>2)||void 0===arguments[2]||arguments[2];return this.erc721.getClaimTransaction(t,r,{checkERC20Allowance:e})}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}async prepare(t,r,e){return i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}constructor(t,r,e){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,y=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new s.cs(t,r,n,a,e);super(y,e,c),this.createBatch=(0,i.f)(async(t,r)=>this.erc721.lazyMint.prepare(t,r)),this.claimTo=(0,i.f)((()=>{var t=this;return async function(r,e){let a=!(arguments.length>2)||void 0===arguments[2]||arguments[2];return t.erc721.claimTo.prepare(r,e,{checkERC20Allowance:a})}})()),this.claim=(0,i.f)((()=>{var t=this;return async function(r){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,e)}})()),this.burn=(0,i.f)(async t=>this.erc721.burn.prepare(t)),this.transfer=(0,i.f)(async(t,r)=>this.erc721.transfer.prepare(t,r)),this.setApprovalForAll=(0,i.f)(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r)),this.setApprovalForToken=(0,i.f)(async(t,r)=>i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[t,r]})),this.abi=s.bj.parse(n||[]),this.metadata=new o.C(this.contractWrapper,s.bT,this.storage),this.app=new o.b(this.contractWrapper,this.metadata,this.storage),this.roles=new d.C(this.contractWrapper,g.contractRoles),this.royalties=new l.C(this.contractWrapper,this.metadata),this.sales=new m.C(this.contractWrapper),this.claimConditions=new f.D(this.contractWrapper,this.metadata,this.storage),this.encoder=new p.C(this.contractWrapper),this.estimator=new o.G(this.contractWrapper),this.events=new o.a(this.contractWrapper),this.platformFees=new u.C(this.contractWrapper),this.revealer=new l.D(this.contractWrapper,this.storage,s.cQ.name,()=>this.erc721.nextTokenIdToMint()),this.interceptor=new h.C(this.contractWrapper),this.owner=new l.a(this.contractWrapper),this.checkout=new w.P(this.contractWrapper)}}g.contractRoles=s.dG},63897:function(t,r,e){e.d(r,{P:function(){return h}});var a=e(89586),n=e(45094);let c="".concat("https://paper.xyz/api","/").concat("2022-08-12","/platform/thirdweb"),s={[a.aS.Mainnet]:"Ethereum",[a.aS.Goerli]:"Goerli",[a.aS.Polygon]:"Polygon",[a.aS.Mumbai]:"Mumbai",[a.aS.Avalanche]:"Avalanche"};async function i(t,r){let e=((0,n.Z)(r in s,"chainId not supported by paper: ".concat(r)),s[r]),a=await fetch("".concat(c,"/register-contract?contractAddress=").concat(t,"&chain=").concat(e)),i=await a.json();return(0,n.Z)(i.result.id,"Contract is not registered with paper"),i.result.id}let o={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};async function p(t,r){let e=await fetch("".concat(c,"/checkout-link-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contractId:t,...o,...r,metadata:{...r.metadata,via_platform:"thirdweb"},hideNativeMint:!0,hidePaperWallet:!!r.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1})}),a=await e.json();return(0,n.Z)(a.checkoutLinkIntentUrl,"Failed to create checkout link intent"),a.checkoutLinkIntentUrl}class h{async getCheckoutId(){return i(this.contractWrapper.address,await this.contractWrapper.getChainID())}async isEnabled(){try{return!!await this.getCheckoutId()}catch(t){return!1}}async createLinkIntent(t){return await p(await this.getCheckoutId(),t)}constructor(t){this.contractWrapper=t}}}}]);