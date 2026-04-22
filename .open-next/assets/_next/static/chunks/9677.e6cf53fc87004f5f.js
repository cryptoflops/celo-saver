"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9677],{48342:(e,t,a)=>{a(88364)},59677:(e,t,a)=>{a.r(t),a.d(t,{W3mPayLoadingView:()=>en,W3mPayView:()=>J,arbitrumUSDC:()=>ew,arbitrumUSDT:()=>eP,baseETH:()=>ed,baseSepoliaETH:()=>em,baseUSDC:()=>ep,ethereumUSDC:()=>ey,ethereumUSDT:()=>eb,getExchanges:()=>es,getIsPaymentInProgress:()=>el,getPayError:()=>ec,getPayResult:()=>eo,openPay:()=>er,optimismUSDC:()=>eh,optimismUSDT:()=>ex,pay:()=>ei,polygonUSDC:()=>eg,polygonUSDT:()=>ev,solanaSOL:()=>eS,solanaUSDC:()=>ef,solanaUSDT:()=>eE});var n=a(88088),r=a(53227),i=a(40859),s=a(1024),o=a(24568),c=a(37056),l=a(44963),u=a(70106),d=a(59306);a(66449),a(74970),a(94548),a(92730),a(35787),a(48342),a(61327),a(66463),a(19341),a(52589),a(3658),a(18128);var p=a(92679),m=a(3125),y=a(34386),h=a(30840),w=a(43242),g=a(79954),f=a(44458);let b="INVALID_PAYMENT_CONFIG",x="INVALID_RECIPIENT",P="INVALID_ASSET",v="INVALID_AMOUNT",E="UNABLE_TO_INITIATE_PAYMENT",S="INVALID_CHAIN_NAMESPACE",I="GENERIC_PAYMENT_ERROR",k="UNABLE_TO_GET_EXCHANGES",A="ASSET_NOT_SUPPORTED",C="UNABLE_TO_GET_PAY_URL",N="UNABLE_TO_GET_BUY_STATUS",T={[b]:"Invalid payment configuration",[x]:"Invalid recipient address",[P]:"Invalid asset specified",[v]:"Invalid payment amount",UNKNOWN_ERROR:"Unknown payment error occurred",[E]:"Unable to initiate payment",[S]:"Invalid chain namespace",[I]:"Unable to process payment",[k]:"Unable to get exchanges",[A]:"Asset not supported by the selected exchange",[C]:"Unable to get payment URL",[N]:"Unable to get buy status"};class D extends Error{get message(){return T[this.code]}constructor(e,t){super(T[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,D)}}var U=a(11403);class $ extends Error{}async function W(e,t){let a,n=(a=U.H.getSnapshot().projectId,`https://rpc.walletconnect.org/v1/json-rpc?projectId=${a}`),{sdkType:r,sdkVersion:i,projectId:s}=U.H.getSnapshot(),o={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:r,sv:i,projectId:s}},c=await fetch(n,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}),l=await c.json();if(l.error)throw new $(l.error.message);return l}async function _(e){return(await W("reown_getExchanges",e)).result}async function R(e){return(await W("reown_getExchangePayUrl",e)).result}async function M(e){return(await W("reown_getExchangeBuyStatus",e)).result}let O=["eip155","solana"],L={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function z(e,t){let{chainNamespace:a,chainId:n}=h.C.parseCaipNetworkId(e),r=L[a];if(!r)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${a}`);let i=r.native.assetNamespace,s=r.native.assetReference;"native"!==t&&(i=r.defaultTokenNamespace,s=t);let o=`${a}:${n}`;return`${o}/${i}:${s}`}var q=a(92087);async function F(e){let{paymentAssetNetwork:t,activeCaipNetwork:a,approvedCaipNetworkIds:n,requestedCaipNetworks:r}=e,i=c.w.sortRequestedNetworks(n,r).find(e=>e.caipNetworkId===t);if(!i)throw new D(b);if(i.caipNetworkId===a.caipNetworkId)return;let o=s.W.getNetworkProp("supportsAllNetworks",i.chainNamespace);if(!(n?.includes(i.caipNetworkId)||o))throw new D(b);try{await s.W.switchActiveNetwork(i)}catch(e){throw new D(I,e)}}async function H(e,t,a){if(t!==y.o.CHAIN.EVM)throw new D(S);if(!a.fromAddress)throw new D(b,"fromAddress is required for native EVM payments.");let n="string"==typeof a.amount?parseFloat(a.amount):a.amount;if(isNaN(n))throw new D(b);let r=e.metadata?.decimals??18,i=u.x.parseUnits(n.toString(),r);if("bigint"!=typeof i)throw new D(I);return await u.x.sendTransaction({chainNamespace:t,to:a.recipient,address:a.fromAddress,value:i,data:"0x"})??void 0}async function Y(e,t){if(!t.fromAddress)throw new D(b,"fromAddress is required for ERC20 EVM payments.");let a=e.asset,n=t.recipient,r=Number(e.metadata.decimals),i=u.x.parseUnits(t.amount.toString(),r);if(void 0===i)throw new D(I);return await u.x.writeContract({fromAddress:t.fromAddress,tokenAddress:a,args:[n,i],method:"transfer",abi:q.v.getERC20Abi(a),chainNamespace:y.o.CHAIN.EVM})??void 0}async function B(e,t){if(e!==y.o.CHAIN.SOLANA)throw new D(S);if(!t.fromAddress)throw new D(b,"fromAddress is required for Solana payments.");let a="string"==typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(a)||a<=0)throw new D(b,"Invalid payment amount.");try{if(!g.G.getProvider(e))throw new D(I,"No Solana provider available.");let n=await u.x.sendTransaction({chainNamespace:y.o.CHAIN.SOLANA,to:t.recipient,value:a,tokenMint:t.tokenMint});if(!n)throw new D(I,"Transaction failed.");return n}catch(e){if(e instanceof D)throw e;throw new D(I,`Solana payment failed: ${e}`)}}let j="unknown",G=(0,p.BX)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0}),V={state:G,subscribe:e=>(0,p.B1)(G,()=>e(G)),subscribeKey:(e,t)=>(0,m.u$)(G,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.subscribeEvents(),this.initializeAnalytics(),G.isConfigured=!0,w.E.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:G.exchanges,configuration:{network:G.paymentAsset.network,asset:G.paymentAsset.asset,recipient:G.recipient,amount:G.amount}}}),await o.W.open({view:"Pay"})},resetState(){G.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},G.recipient="0x0",G.amount=0,G.isConfigured=!1,G.error=null,G.isPaymentInProgress=!1,G.isLoading=!1,G.currentPayment=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new D(b);try{G.paymentAsset=e.paymentAsset,G.recipient=e.recipient,G.amount=e.amount,G.openInNewTab=e.openInNewTab??!0,G.redirectUrl=e.redirectUrl,G.payWithExchange=e.payWithExchange,G.error=null}catch(e){throw new D(b,e.message)}},getPaymentAsset:()=>G.paymentAsset,getExchanges:()=>G.exchanges,async fetchExchanges(){try{G.isLoading=!0;let e=await _({page:0,asset:z(G.paymentAsset.network,G.paymentAsset.asset),amount:G.amount.toString()});G.exchanges=e.exchanges.slice(0,2)}catch(e){throw l.P.showError(T.UNABLE_TO_GET_EXCHANGES),new D(k)}finally{G.isLoading=!1}},async getAvailableExchanges(e){try{let t=e?.asset&&e?.network?z(e.network,e.asset):void 0;return await _({page:e?.page??0,asset:t,amount:e?.amount?.toString()})}catch(e){throw new D(k)}},async getPayUrl(e,t,a=!1){try{let n=Number(t.amount),r=await R({exchangeId:e,asset:z(t.network,t.asset),amount:n.toString(),recipient:`${t.network}:${t.recipient}`});return w.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:n},currentPayment:{type:"exchange",exchangeId:e},headless:a}}),a&&(this.initiatePayment(),w.E.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:G.paymentId||j,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:n},currentPayment:{type:"exchange",exchangeId:e}}})),r}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw new D(A);throw Error(e.message)}},async openPayUrl(e,t,a=!1){try{let n=await this.getPayUrl(e.exchangeId,t,a);if(!n)throw new D(C);let r=e.openInNewTab??!0;return c.w.openHref(n.url,r?"_blank":"_self"),n}catch(e){throw e instanceof D?G.error=e.message:G.error=T.GENERIC_PAYMENT_ERROR,new D(C)}},subscribeEvents(){G.isConfigured||(u.x.subscribeKey("connections",e=>{e.size>0&&this.handlePayment()}),s.W.subscribeChainProp("accountState",e=>{let t=u.x.hasAnyConnection(y.o.CONNECTOR_ID.WALLET_CONNECT);e?.caipAddress&&(t?setTimeout(()=>{this.handlePayment()},100):this.handlePayment())}))},async handlePayment(){G.currentPayment={type:"wallet",status:"IN_PROGRESS"};let e=s.W.getActiveCaipAddress();if(!e)return;let{chainId:t,address:a}=h.C.parseCaipAddress(e),n=s.W.state.activeChain;if(!a||!t||!n||!g.G.getProvider(n))return;let r=s.W.state.activeCaipNetwork;if(r&&!G.isPaymentInProgress)try{this.initiatePayment();let e=s.W.getAllRequestedCaipNetworks(),t=s.W.getAllApprovedCaipNetworkIds();switch(await F({paymentAssetNetwork:G.paymentAsset.network,activeCaipNetwork:r,approvedCaipNetworkIds:t,requestedCaipNetworks:e}),await o.W.open({view:"PayLoading"}),n){case y.o.CHAIN.EVM:"native"===G.paymentAsset.asset&&(G.currentPayment.result=await H(G.paymentAsset,n,{recipient:G.recipient,amount:G.amount,fromAddress:a})),G.paymentAsset.asset.startsWith("0x")&&(G.currentPayment.result=await Y(G.paymentAsset,{recipient:G.recipient,amount:G.amount,fromAddress:a})),G.currentPayment.status="SUCCESS";break;case y.o.CHAIN.SOLANA:G.currentPayment.result=await B(n,{recipient:G.recipient,amount:G.amount,fromAddress:a,tokenMint:"native"===G.paymentAsset.asset?void 0:G.paymentAsset.asset}),G.currentPayment.status="SUCCESS";break;default:throw new D(S)}}catch(e){e instanceof D?G.error=e.message:G.error=T.GENERIC_PAYMENT_ERROR,G.currentPayment.status="FAILED",l.P.showError(G.error)}finally{G.isPaymentInProgress=!1}},getExchangeById:e=>G.exchanges.find(t=>t.id===e),validatePayConfig(e){let{paymentAsset:t,recipient:a,amount:n}=e;if(!t)throw new D(b);if(!a)throw new D(x);if(!t.asset)throw new D(P);if(null==n||n<=0)throw new D(v)},handlePayWithWallet(){let e=s.W.getActiveCaipAddress();if(!e)return void f.I.push("Connect");let{chainId:t,address:a}=h.C.parseCaipAddress(e),n=s.W.state.activeChain;a&&t&&n?this.handlePayment():f.I.push("Connect")},async handlePayWithExchange(e){try{G.currentPayment={type:"exchange",exchangeId:e};let{network:t,asset:a}=G.paymentAsset,n={network:t,asset:a,amount:G.amount,recipient:G.recipient},r=await this.getPayUrl(e,n);if(!r)throw new D(E);return G.currentPayment.sessionId=r.sessionId,G.currentPayment.status="IN_PROGRESS",G.currentPayment.exchangeId=e,this.initiatePayment(),{url:r.url,openInNewTab:G.openInNewTab}}catch(e){return e instanceof D?G.error=e.message:G.error=T.GENERIC_PAYMENT_ERROR,G.isPaymentInProgress=!1,l.P.showError(G.error),null}},async getBuyStatus(e,t){try{let a=await M({sessionId:t,exchangeId:e});return("SUCCESS"===a.status||"FAILED"===a.status)&&w.E.sendEvent({type:"track",event:"SUCCESS"===a.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===a.status?c.w.parseError(G.error):void 0,source:"pay",paymentId:G.paymentId||j,configuration:{network:G.paymentAsset.network,asset:G.paymentAsset.asset,recipient:G.recipient,amount:G.amount},currentPayment:{type:"exchange",exchangeId:G.currentPayment?.exchangeId,sessionId:G.currentPayment?.sessionId,result:a.txHash}}}),a}catch(e){throw new D(N)}},async updateBuyStatus(e,t){try{let a=await this.getBuyStatus(e,t);G.currentPayment&&(G.currentPayment.status=a.status,G.currentPayment.result=a.txHash),("SUCCESS"===a.status||"FAILED"===a.status)&&(G.isPaymentInProgress=!1)}catch(e){throw new D(N)}},initiatePayment(){G.isPaymentInProgress=!0,G.paymentId=crypto.randomUUID()},initializeAnalytics(){G.analyticsSet||(G.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",e=>{if(G.currentPayment?.status&&"UNKNOWN"!==G.currentPayment.status){let e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[G.currentPayment.status];w.E.sendEvent({type:"track",event:e,properties:{message:"FAILED"===G.currentPayment.status?c.w.parseError(G.error):void 0,source:"pay",paymentId:G.paymentId||j,configuration:{network:G.paymentAsset.network,asset:G.paymentAsset.asset,recipient:G.recipient,amount:G.amount},currentPayment:{type:G.currentPayment.type,exchangeId:G.currentPayment.exchangeId,sessionId:G.currentPayment.sessionId,result:G.currentPayment.result}}})}}))}},K=(0,n.AH)`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }
`;var Z=function(e,t,a,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(i<3?r(s):i>3?r(t,a,s):r(t,a))||s);return i>3&&s&&Object.defineProperty(t,a,s),s};let J=class extends n.WF{constructor(){super(),this.unsubscribe=[],this.amount="",this.tokenSymbol="",this.networkName="",this.exchanges=V.state.exchanges,this.isLoading=V.state.isLoading,this.loadingExchangeId=null,this.connectedWalletInfo=s.W.getAccountData()?.connectedWalletInfo,this.initializePaymentDetails(),this.unsubscribe.push(V.subscribeKey("exchanges",e=>this.exchanges=e)),this.unsubscribe.push(V.subscribeKey("isLoading",e=>this.isLoading=e)),this.unsubscribe.push(s.W.subscribeChainProp("accountState",e=>{this.connectedWalletInfo=e?.connectedWalletInfo})),V.fetchExchanges()}get isWalletConnected(){let e=s.W.getAccountData();return e?.status==="connected"}render(){return(0,n.qy)`
      <wui-flex flexDirection="column">
        <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
          ${this.renderPaymentHeader()}

          <wui-flex flexDirection="column" gap="3">
            ${this.renderPayWithWallet()} ${this.renderExchangeOptions()}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}initializePaymentDetails(){let e=V.getPaymentAsset();this.networkName=e.network,this.tokenSymbol=e.metadata.symbol,this.amount=V.state.amount.toString()}renderPayWithWallet(){return!function(e){let{chainNamespace:t}=h.C.parseCaipNetworkId(e);return O.includes(t)}(this.networkName)?(0,n.qy)``:(0,n.qy)`<wui-flex flexDirection="column" gap="3">
        ${this.isWalletConnected?this.renderConnectedView():this.renderDisconnectedView()}
      </wui-flex>
      <wui-separator text="or"></wui-separator>`}renderPaymentHeader(){let e=this.networkName;if(this.networkName){let t=s.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.networkName);t&&(e=t.name)}return(0,n.qy)`
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex alignItems="center" gap="2">
          <wui-text variant="h1-regular" color="primary">${this.amount||"0.0000"}</wui-text>
          <wui-flex class="token-display" alignItems="center" gap="1">
            <wui-text variant="md-medium" color="primary">
              ${this.tokenSymbol||"Unknown Asset"}
            </wui-text>
            ${e?(0,n.qy)`
                  <wui-text variant="sm-medium" color="secondary">
                    on ${e}
                  </wui-text>
                `:""}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderConnectedView(){let e=this.connectedWalletInfo?.name||"connected wallet";return(0,n.qy)`
      <wui-list-item
        @click=${this.onWalletPayment}
        ?chevron=${!0}
        ?fullSize=${!0}
        ?rounded=${!0}
        data-testid="wallet-payment-option"
        imageSrc=${(0,i.J)(this.connectedWalletInfo?.icon)}
      >
        <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
      </wui-list-item>

      <wui-list-item
        icon="power"
        ?rounded=${!0}
        iconColor="error"
        @click=${this.onDisconnect}
        data-testid="disconnect-button"
        ?chevron=${!1}
      >
        <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
      </wui-list-item>
    `}renderDisconnectedView(){return(0,n.qy)`<wui-list-item
      variant="icon"
      iconVariant="overlay"
      icon="wallet"
      ?rounded=${!0}
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay from wallet</wui-text>
    </wui-list-item>`}renderExchangeOptions(){return this.isLoading?(0,n.qy)`<wui-flex justifyContent="center" alignItems="center">
        <wui-spinner size="md"></wui-spinner>
      </wui-flex>`:0===this.exchanges.length?(0,n.qy)`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:this.exchanges.map(e=>(0,n.qy)`
        <wui-list-item
          @click=${()=>this.onExchangePayment(e.id)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          ?disabled=${null!==this.loadingExchangeId}
          ?loading=${this.loadingExchangeId===e.id}
          imageSrc=${(0,i.J)(e.imageUrl)}
        >
          <wui-flex alignItems="center" gap="3">
            <wui-text flexGrow="1" variant="md-medium" color="primary"
              >Pay with ${e.name} <wui-spinner size="sm" color="secondary"></wui-spinner
            ></wui-text>
          </wui-flex>
        </wui-list-item>
      `)}onWalletPayment(){V.handlePayWithWallet()}async onExchangePayment(e){try{this.loadingExchangeId=e;let t=await V.handlePayWithExchange(e);t&&(await o.W.open({view:"PayLoading"}),c.w.openHref(t.url,t.openInNewTab?"_blank":"_self"))}catch(e){console.error("Failed to pay with exchange",e),l.P.showError("Failed to pay with exchange")}finally{this.loadingExchangeId=null}}async onDisconnect(e){e.stopPropagation();try{await u.x.disconnect()}catch{console.error("Failed to disconnect"),l.P.showError("Failed to disconnect")}}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}};J.styles=K,Z([(0,r.wk)()],J.prototype,"amount",void 0),Z([(0,r.wk)()],J.prototype,"tokenSymbol",void 0),Z([(0,r.wk)()],J.prototype,"networkName",void 0),Z([(0,r.wk)()],J.prototype,"exchanges",void 0),Z([(0,r.wk)()],J.prototype,"isLoading",void 0),Z([(0,r.wk)()],J.prototype,"loadingExchangeId",void 0),Z([(0,r.wk)()],J.prototype,"connectedWalletInfo",void 0),J=Z([(0,d.EM)("w3m-pay-view")],J);var X=a(69148),Q=a(11446),ee=a(48789);a(15762);let et=(0,n.AH)`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }
`;var ea=function(e,t,a,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(i<3?r(s):i>3?r(t,a,s):r(t,a))||s);return i>3&&s&&Object.defineProperty(t,a,s),s};let en=class extends n.WF{constructor(){super(),this.loadingMessage="",this.subMessage="",this.paymentState="in-progress",this.paymentState=V.state.isPaymentInProgress?"in-progress":"completed",this.updateMessages(),this.setupSubscription(),this.setupExchangeSubscription()}disconnectedCallback(){clearInterval(this.exchangeSubscription)}render(){return(0,n.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["7","5","5","5"]}
        gap="9"
      >
        <wui-flex justifyContent="center" alignItems="center"> ${this.getStateIcon()} </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary">
            ${this.loadingMessage}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">
            ${this.subMessage}
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}updateMessages(){switch(this.paymentState){case"completed":this.loadingMessage="Payment completed",this.subMessage="Your transaction has been successfully processed";break;case"error":this.loadingMessage="Payment failed",this.subMessage="There was an error processing your transaction";break;default:V.state.currentPayment?.type==="exchange"?(this.loadingMessage="Payment initiated",this.subMessage="Please complete the payment on the exchange"):(this.loadingMessage="Awaiting payment confirmation",this.subMessage="Please confirm the payment transaction in your wallet")}}getStateIcon(){switch(this.paymentState){case"completed":return this.successTemplate();case"error":return this.errorTemplate();default:return this.loaderTemplate()}}setupExchangeSubscription(){V.state.currentPayment?.type==="exchange"&&(this.exchangeSubscription=setInterval(async()=>{let e=V.state.currentPayment?.exchangeId,t=V.state.currentPayment?.sessionId;e&&t&&(await V.updateBuyStatus(e,t),V.state.currentPayment?.status==="SUCCESS"&&clearInterval(this.exchangeSubscription))},4e3))}setupSubscription(){V.subscribeKey("isPaymentInProgress",e=>{e||"in-progress"!==this.paymentState||(V.state.error||!V.state.currentPayment?.result?this.paymentState="error":this.paymentState="completed",this.updateMessages(),setTimeout(()=>{"disconnected"!==u.x.state.status&&o.W.close()},3e3))}),V.subscribeKey("error",e=>{e&&"in-progress"===this.paymentState&&(this.paymentState="error",this.updateMessages())})}loaderTemplate(){let e=X.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4,a=this.getPaymentIcon();return(0,n.qy)`
      <wui-flex justifyContent="center" alignItems="center" style="position: relative;">
        ${a?(0,n.qy)`<wui-wallet-image size="lg" imageSrc=${a}></wui-wallet-image>`:null}
        <wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>
      </wui-flex>
    `}getPaymentIcon(){let e=V.state.currentPayment;if(e){if("exchange"===e.type){let t=e.exchangeId;if(t){let e=V.getExchangeById(t);return e?.imageUrl}}if("wallet"===e.type){let e=s.W.getAccountData()?.connectedWalletInfo?.icon;if(e)return e;let t=s.W.state.activeChain;if(!t)return;let a=Q.a.getConnectorId(t);if(!a)return;let n=Q.a.getConnectorById(a);if(!n)return;return ee.$.getConnectorImage(n)}}}successTemplate(){return(0,n.qy)`<wui-icon size="xl" color="success" name="checkmark"></wui-icon>`}errorTemplate(){return(0,n.qy)`<wui-icon size="xl" color="error" name="close"></wui-icon>`}};async function er(e){return V.handleOpenPay(e)}async function ei(e,t=3e5){if(t<=0)throw new D(b,"Timeout must be greater than 0");try{await er(e)}catch(e){if(e instanceof D)throw e;throw new D(E,e.message)}return new Promise((e,a)=>{var n;let r=!1,i=setTimeout(()=>{r||(r=!0,o(),a(new D(I,"Payment timeout")))},t);function s(){if(r)return;let t=V.state.currentPayment,a=V.state.error,n=V.state.isPaymentInProgress;if(t?.status==="SUCCESS"){r=!0,o(),clearTimeout(i),e({success:!0,result:t.result});return}if(t?.status==="FAILED"){r=!0,o(),clearTimeout(i),e({success:!1,error:a||"Payment failed"});return}!a||n||t||(r=!0,o(),clearTimeout(i),e({success:!1,error:a}))}let o=(n=[eu("currentPayment",s),eu("error",s),eu("isPaymentInProgress",s)],()=>{n.forEach(e=>{try{e()}catch{}})});s()})}function es(){return V.getExchanges()}function eo(){return V.state.currentPayment?.result}function ec(){return V.state.error}function el(){return V.state.isPaymentInProgress}function eu(e,t){return V.subscribeKey(e,t)}en.styles=et,ea([(0,r.wk)()],en.prototype,"loadingMessage",void 0),ea([(0,r.wk)()],en.prototype,"subMessage",void 0),ea([(0,r.wk)()],en.prototype,"paymentState",void 0),en=ea([(0,d.EM)("w3m-pay-loading-view")],en);let ed={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ep={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},em={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ey={network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},eh={network:"eip155:10",asset:"0x0b2c639c533813f4aa9d7837caf62653d097ff85",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ew={network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},eg={network:"eip155:137",asset:"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ef={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},eb={network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ex={network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},eP={network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ev={network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},eE={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},eS={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}},92730:(e,t,a)=>{var n=a(88088),r=a(53227),i=a(40859);a(56729);var s=a(94895),o=a(69428),c=a(34175);let l=(0,c.AH)`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var u=function(e,t,a,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(i<3?r(s):i>3?r(t,a,s):r(t,a))||s);return i>3&&s&&Object.defineProperty(t,a,s),s};let d=class extends n.WF{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return(0,n.qy)`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,i.J)(this.iconSize)}></wui-icon>
    </button>`}};d.styles=[s.W5,s.fD,l],u([(0,r.MZ)()],d.prototype,"icon",void 0),u([(0,r.MZ)()],d.prototype,"variant",void 0),u([(0,r.MZ)()],d.prototype,"type",void 0),u([(0,r.MZ)()],d.prototype,"size",void 0),u([(0,r.MZ)()],d.prototype,"iconSize",void 0),u([(0,r.MZ)({type:Boolean})],d.prototype,"fullWidth",void 0),u([(0,r.MZ)({type:Boolean})],d.prototype,"disabled",void 0),d=u([(0,o.E)("wui-icon-button")],d)}}]);