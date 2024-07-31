"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38838],{38838:function(e){e.exports=JSON.parse('[{"type":"constructor","inputs":[{"name":"_nativeTokenWrapper","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},{"type":"receive","stateMutability":"payable"},{"type":"function","name":"DEFAULT_ADMIN_ROLE","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"MAX_BPS","inputs":[],"outputs":[{"name":"","type":"uint64","internalType":"uint64"}],"stateMutability":"view"},{"type":"function","name":"acceptOffer","inputs":[{"name":"_listingId","type":"uint256","internalType":"uint256"},{"name":"_offeror","type":"address","internalType":"address"},{"name":"_currency","type":"address","internalType":"address"},{"name":"_pricePerToken","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"bidBufferBps","inputs":[],"outputs":[{"name":"","type":"uint64","internalType":"uint64"}],"stateMutability":"view"},{"type":"function","name":"buy","inputs":[{"name":"_listingId","type":"uint256","internalType":"uint256"},{"name":"_buyFor","type":"address","internalType":"address"},{"name":"_quantityToBuy","type":"uint256","internalType":"uint256"},{"name":"_currency","type":"address","internalType":"address"},{"name":"_totalPrice","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"payable"},{"type":"function","name":"cancelDirectListing","inputs":[{"name":"_listingId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"closeAuction","inputs":[{"name":"_listingId","type":"uint256","internalType":"uint256"},{"name":"_closeFor","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"contractType","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"pure"},{"type":"function","name":"contractURI","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"contractVersion","inputs":[],"outputs":[{"name":"","type":"uint8","internalType":"uint8"}],"stateMutability":"pure"},{"type":"function","name":"createListing","inputs":[{"name":"_params","type":"tuple","internalType":"struct IMarketplace.ListingParameters","components":[{"name":"assetContract","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"startTime","type":"uint256","internalType":"uint256"},{"name":"secondsUntilEndTime","type":"uint256","internalType":"uint256"},{"name":"quantityToList","type":"uint256","internalType":"uint256"},{"name":"currencyToAccept","type":"address","internalType":"address"},{"name":"reservePricePerToken","type":"uint256","internalType":"uint256"},{"name":"buyoutPricePerToken","type":"uint256","internalType":"uint256"},{"name":"listingType","type":"uint8","internalType":"enum IMarketplace.ListingType"}]}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"getPlatformFeeInfo","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint16","internalType":"uint16"}],"stateMutability":"view"},{"type":"function","name":"getRoleAdmin","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"}],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"getRoleMember","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"index","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"getRoleMemberCount","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"grantRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"hasRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"initialize","inputs":[{"name":"_defaultAdmin","type":"address","internalType":"address"},{"name":"_contractURI","type":"string","internalType":"string"},{"name":"_trustedForwarders","type":"address[]","internalType":"address[]"},{"name":"_platformFeeRecipient","type":"address","internalType":"address"},{"name":"_platformFeeBps","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"isTrustedForwarder","inputs":[{"name":"forwarder","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"listings","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"listingId","type":"uint256","internalType":"uint256"},{"name":"tokenOwner","type":"address","internalType":"address"},{"name":"assetContract","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"startTime","type":"uint256","internalType":"uint256"},{"name":"endTime","type":"uint256","internalType":"uint256"},{"name":"quantity","type":"uint256","internalType":"uint256"},{"name":"currency","type":"address","internalType":"address"},{"name":"reservePricePerToken","type":"uint256","internalType":"uint256"},{"name":"buyoutPricePerToken","type":"uint256","internalType":"uint256"},{"name":"tokenType","type":"uint8","internalType":"enum IMarketplace.TokenType"},{"name":"listingType","type":"uint8","internalType":"enum IMarketplace.ListingType"}],"stateMutability":"view"},{"type":"function","name":"multicall","inputs":[{"name":"data","type":"bytes[]","internalType":"bytes[]"}],"outputs":[{"name":"results","type":"bytes[]","internalType":"bytes[]"}],"stateMutability":"nonpayable"},{"type":"function","name":"offer","inputs":[{"name":"_listingId","type":"uint256","internalType":"uint256"},{"name":"_quantityWanted","type":"uint256","internalType":"uint256"},{"name":"_currency","type":"address","internalType":"address"},{"name":"_pricePerToken","type":"uint256","internalType":"uint256"},{"name":"_expirationTimestamp","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"payable"},{"type":"function","name":"offers","inputs":[{"name":"","type":"uint256","internalType":"uint256"},{"name":"","type":"address","internalType":"address"}],"outputs":[{"name":"listingId","type":"uint256","internalType":"uint256"},{"name":"offeror","type":"address","internalType":"address"},{"name":"quantityWanted","type":"uint256","internalType":"uint256"},{"name":"currency","type":"address","internalType":"address"},{"name":"pricePerToken","type":"uint256","internalType":"uint256"},{"name":"expirationTimestamp","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"onERC1155BatchReceived","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint256[]","internalType":"uint256[]"},{"name":"","type":"uint256[]","internalType":"uint256[]"},{"name":"","type":"bytes","internalType":"bytes"}],"outputs":[{"name":"","type":"bytes4","internalType":"bytes4"}],"stateMutability":"nonpayable"},{"type":"function","name":"onERC1155Received","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint256","internalType":"uint256"},{"name":"","type":"uint256","internalType":"uint256"},{"name":"","type":"bytes","internalType":"bytes"}],"outputs":[{"name":"","type":"bytes4","internalType":"bytes4"}],"stateMutability":"nonpayable"},{"type":"function","name":"onERC721Received","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint256","internalType":"uint256"},{"name":"","type":"bytes","internalType":"bytes"}],"outputs":[{"name":"","type":"bytes4","internalType":"bytes4"}],"stateMutability":"pure"},{"type":"function","name":"renounceRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"revokeRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setAuctionBuffers","inputs":[{"name":"_timeBuffer","type":"uint256","internalType":"uint256"},{"name":"_bidBufferBps","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setContractURI","inputs":[{"name":"_uri","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setPlatformFeeInfo","inputs":[{"name":"_platformFeeRecipient","type":"address","internalType":"address"},{"name":"_platformFeeBps","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"supportsInterface","inputs":[{"name":"interfaceId","type":"bytes4","internalType":"bytes4"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"timeBuffer","inputs":[],"outputs":[{"name":"","type":"uint64","internalType":"uint64"}],"stateMutability":"view"},{"type":"function","name":"totalListings","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"updateListing","inputs":[{"name":"_listingId","type":"uint256","internalType":"uint256"},{"name":"_quantityToList","type":"uint256","internalType":"uint256"},{"name":"_reservePricePerToken","type":"uint256","internalType":"uint256"},{"name":"_buyoutPricePerToken","type":"uint256","internalType":"uint256"},{"name":"_currencyToAccept","type":"address","internalType":"address"},{"name":"_startTime","type":"uint256","internalType":"uint256"},{"name":"_secondsUntilEndTime","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"winningBid","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"listingId","type":"uint256","internalType":"uint256"},{"name":"offeror","type":"address","internalType":"address"},{"name":"quantityWanted","type":"uint256","internalType":"uint256"},{"name":"currency","type":"address","internalType":"address"},{"name":"pricePerToken","type":"uint256","internalType":"uint256"},{"name":"expirationTimestamp","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"event","name":"AuctionBuffersUpdated","inputs":[{"name":"timeBuffer","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"bidBufferBps","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"AuctionClosed","inputs":[{"name":"listingId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"closer","type":"address","indexed":true,"internalType":"address"},{"name":"cancelled","type":"bool","indexed":true,"internalType":"bool"},{"name":"auctionCreator","type":"address","indexed":false,"internalType":"address"},{"name":"winningBidder","type":"address","indexed":false,"internalType":"address"}],"anonymous":false},{"type":"event","name":"FlatPlatformFeeUpdated","inputs":[{"name":"platformFeeRecipient","type":"address","indexed":false,"internalType":"address"},{"name":"flatFee","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Initialized","inputs":[{"name":"version","type":"uint8","indexed":false,"internalType":"uint8"}],"anonymous":false},{"type":"event","name":"ListingAdded","inputs":[{"name":"listingId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"assetContract","type":"address","indexed":true,"internalType":"address"},{"name":"lister","type":"address","indexed":true,"internalType":"address"},{"name":"listing","type":"tuple","indexed":false,"internalType":"struct IMarketplace.Listing","components":[{"name":"listingId","type":"uint256","internalType":"uint256"},{"name":"tokenOwner","type":"address","internalType":"address"},{"name":"assetContract","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"startTime","type":"uint256","internalType":"uint256"},{"name":"endTime","type":"uint256","internalType":"uint256"},{"name":"quantity","type":"uint256","internalType":"uint256"},{"name":"currency","type":"address","internalType":"address"},{"name":"reservePricePerToken","type":"uint256","internalType":"uint256"},{"name":"buyoutPricePerToken","type":"uint256","internalType":"uint256"},{"name":"tokenType","type":"uint8","internalType":"enum IMarketplace.TokenType"},{"name":"listingType","type":"uint8","internalType":"enum IMarketplace.ListingType"}]}],"anonymous":false},{"type":"event","name":"ListingRemoved","inputs":[{"name":"listingId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"listingCreator","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"ListingUpdated","inputs":[{"name":"listingId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"listingCreator","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"NewOffer","inputs":[{"name":"listingId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"offeror","type":"address","indexed":true,"internalType":"address"},{"name":"listingType","type":"uint8","indexed":true,"internalType":"enum IMarketplace.ListingType"},{"name":"quantityWanted","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"totalOfferAmount","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"currency","type":"address","indexed":false,"internalType":"address"}],"anonymous":false},{"type":"event","name":"NewSale","inputs":[{"name":"listingId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"assetContract","type":"address","indexed":true,"internalType":"address"},{"name":"lister","type":"address","indexed":true,"internalType":"address"},{"name":"buyer","type":"address","indexed":false,"internalType":"address"},{"name":"quantityBought","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"totalPricePaid","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"PlatformFeeInfoUpdated","inputs":[{"name":"platformFeeRecipient","type":"address","indexed":true,"internalType":"address"},{"name":"platformFeeBps","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"PlatformFeeTypeUpdated","inputs":[{"name":"feeType","type":"uint8","indexed":false,"internalType":"enum IPlatformFee.PlatformFeeType"}],"anonymous":false},{"type":"event","name":"RoleAdminChanged","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"previousAdminRole","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"newAdminRole","type":"bytes32","indexed":true,"internalType":"bytes32"}],"anonymous":false},{"type":"event","name":"RoleGranted","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"sender","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"RoleRevoked","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"sender","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"error","name":"CurrencyTransferLibMismatchedValue","inputs":[{"name":"expected","type":"uint256","internalType":"uint256"},{"name":"actual","type":"uint256","internalType":"uint256"}]}]')}}]);