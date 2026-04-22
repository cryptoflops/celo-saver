"use strict";exports.id=1414,exports.ids=[1414],exports.modules={9059:(a,b,c)=>{var d=c(53478),e=c(96313),f=c(42353);c(49263);var g=c(58003),h=c(33440),i=c(38051);let j=(0,i.AH)`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:a})=>a[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:a})=>a.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:a})=>a.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:a})=>a.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:a})=>a.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:a})=>a.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:a})=>a[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:a})=>a[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:a})=>a[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:a})=>a[2]};
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
      background-color: ${({tokens:a})=>a.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:a})=>a.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:a})=>a.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent020};
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
`;var k=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let l=class extends d.WF{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return(0,d.qy)`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,f.J)(this.iconSize)}></wui-icon>
    </button>`}};l.styles=[g.W5,g.fD,j],k([(0,e.MZ)()],l.prototype,"icon",void 0),k([(0,e.MZ)()],l.prototype,"variant",void 0),k([(0,e.MZ)()],l.prototype,"type",void 0),k([(0,e.MZ)()],l.prototype,"size",void 0),k([(0,e.MZ)()],l.prototype,"iconSize",void 0),k([(0,e.MZ)({type:Boolean})],l.prototype,"fullWidth",void 0),k([(0,e.MZ)({type:Boolean})],l.prototype,"disabled",void 0),l=k([(0,h.E)("wui-icon-button")],l)},25786:(a,b,c)=>{c(87922)},81414:(a,b,c)=>{c.r(b),c.d(b,{W3mPayLoadingView:()=>ad,W3mPayView:()=>Z,arbitrumUSDC:()=>aq,arbitrumUSDT:()=>av,baseETH:()=>al,baseSepoliaETH:()=>an,baseUSDC:()=>am,ethereumUSDC:()=>ao,ethereumUSDT:()=>at,getExchanges:()=>ag,getIsPaymentInProgress:()=>aj,getPayError:()=>ai,getPayResult:()=>ah,openPay:()=>ae,optimismUSDC:()=>ap,optimismUSDT:()=>au,pay:()=>af,polygonUSDC:()=>ar,polygonUSDT:()=>aw,solanaSOL:()=>ay,solanaUSDC:()=>as,solanaUSDT:()=>ax});var d=c(53478),e=c(96313),f=c(42353),g=c(37662),h=c(40702),i=c(63860),j=c(99257),k=c(70447),l=c(96214);c(85087),c(64436),c(52958),c(9059),c(95767),c(25786),c(72715),c(23155),c(49774),c(8547),c(82268),c(80282);var m=c(71579),n=c(45149),o=c(33198),p=c(38912),q=c(85126),r=c(28410),s=c(62970);let t="INVALID_PAYMENT_CONFIG",u="INVALID_RECIPIENT",v="INVALID_ASSET",w="INVALID_AMOUNT",x="UNABLE_TO_INITIATE_PAYMENT",y="INVALID_CHAIN_NAMESPACE",z="GENERIC_PAYMENT_ERROR",A="UNABLE_TO_GET_EXCHANGES",B="ASSET_NOT_SUPPORTED",C="UNABLE_TO_GET_PAY_URL",D="UNABLE_TO_GET_BUY_STATUS",E={[t]:"Invalid payment configuration",[u]:"Invalid recipient address",[v]:"Invalid asset specified",[w]:"Invalid payment amount",UNKNOWN_ERROR:"Unknown payment error occurred",[x]:"Unable to initiate payment",[y]:"Invalid chain namespace",[z]:"Unable to process payment",[A]:"Unable to get exchanges",[B]:"Asset not supported by the selected exchange",[C]:"Unable to get payment URL",[D]:"Unable to get buy status"};class F extends Error{get message(){return E[this.code]}constructor(a,b){super(E[a]),this.name="AppKitPayError",this.code=a,this.details=b,Error.captureStackTrace&&Error.captureStackTrace(this,F)}}var G=c(5645);class H extends Error{}async function I(a,b){let c,d=(c=G.H.getSnapshot().projectId,`https://rpc.walletconnect.org/v1/json-rpc?projectId=${c}`),{sdkType:e,sdkVersion:f,projectId:g}=G.H.getSnapshot(),h={jsonrpc:"2.0",id:1,method:a,params:{...b||{},st:e,sv:f,projectId:g}},i=await fetch(d,{method:"POST",body:JSON.stringify(h),headers:{"Content-Type":"application/json"}}),j=await i.json();if(j.error)throw new H(j.error.message);return j}async function J(a){return(await I("reown_getExchanges",a)).result}async function K(a){return(await I("reown_getExchangePayUrl",a)).result}async function L(a){return(await I("reown_getExchangeBuyStatus",a)).result}let M=["eip155","solana"],N={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function O(a,b){let{chainNamespace:c,chainId:d}=p.C.parseCaipNetworkId(a),e=N[c];if(!e)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${c}`);let f=e.native.assetNamespace,g=e.native.assetReference;"native"!==b&&(f=e.defaultTokenNamespace,g=b);let h=`${c}:${d}`;return`${h}/${f}:${g}`}var P=c(89e3);async function Q(a){let{paymentAssetNetwork:b,activeCaipNetwork:c,approvedCaipNetworkIds:d,requestedCaipNetworks:e}=a,f=i.w.sortRequestedNetworks(d,e).find(a=>a.caipNetworkId===b);if(!f)throw new F(t);if(f.caipNetworkId===c.caipNetworkId)return;let h=g.W.getNetworkProp("supportsAllNetworks",f.chainNamespace);if(!(d?.includes(f.caipNetworkId)||h))throw new F(t);try{await g.W.switchActiveNetwork(f)}catch(a){throw new F(z,a)}}async function R(a,b,c){if(b!==o.o.CHAIN.EVM)throw new F(y);if(!c.fromAddress)throw new F(t,"fromAddress is required for native EVM payments.");let d="string"==typeof c.amount?parseFloat(c.amount):c.amount;if(isNaN(d))throw new F(t);let e=a.metadata?.decimals??18,f=k.x.parseUnits(d.toString(),e);if("bigint"!=typeof f)throw new F(z);return await k.x.sendTransaction({chainNamespace:b,to:c.recipient,address:c.fromAddress,value:f,data:"0x"})??void 0}async function S(a,b){if(!b.fromAddress)throw new F(t,"fromAddress is required for ERC20 EVM payments.");let c=a.asset,d=b.recipient,e=Number(a.metadata.decimals),f=k.x.parseUnits(b.amount.toString(),e);if(void 0===f)throw new F(z);return await k.x.writeContract({fromAddress:b.fromAddress,tokenAddress:c,args:[d,f],method:"transfer",abi:P.v.getERC20Abi(c),chainNamespace:o.o.CHAIN.EVM})??void 0}async function T(a,b){if(a!==o.o.CHAIN.SOLANA)throw new F(y);if(!b.fromAddress)throw new F(t,"fromAddress is required for Solana payments.");let c="string"==typeof b.amount?parseFloat(b.amount):b.amount;if(isNaN(c)||c<=0)throw new F(t,"Invalid payment amount.");try{if(!r.G.getProvider(a))throw new F(z,"No Solana provider available.");let d=await k.x.sendTransaction({chainNamespace:o.o.CHAIN.SOLANA,to:b.recipient,value:c,tokenMint:b.tokenMint});if(!d)throw new F(z,"Transaction failed.");return d}catch(a){if(a instanceof F)throw a;throw new F(z,`Solana payment failed: ${a}`)}}let U="unknown",V=(0,m.BX)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0}),W={state:V,subscribe:a=>(0,m.B1)(V,()=>a(V)),subscribeKey:(a,b)=>(0,n.u$)(V,a,b),async handleOpenPay(a){this.resetState(),this.setPaymentConfig(a),this.subscribeEvents(),this.initializeAnalytics(),V.isConfigured=!0,q.E.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:V.exchanges,configuration:{network:V.paymentAsset.network,asset:V.paymentAsset.asset,recipient:V.recipient,amount:V.amount}}}),await h.W.open({view:"Pay"})},resetState(){V.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},V.recipient="0x0",V.amount=0,V.isConfigured=!1,V.error=null,V.isPaymentInProgress=!1,V.isLoading=!1,V.currentPayment=void 0},setPaymentConfig(a){if(!a.paymentAsset)throw new F(t);try{V.paymentAsset=a.paymentAsset,V.recipient=a.recipient,V.amount=a.amount,V.openInNewTab=a.openInNewTab??!0,V.redirectUrl=a.redirectUrl,V.payWithExchange=a.payWithExchange,V.error=null}catch(a){throw new F(t,a.message)}},getPaymentAsset:()=>V.paymentAsset,getExchanges:()=>V.exchanges,async fetchExchanges(){try{V.isLoading=!0;let a=await J({page:0,asset:O(V.paymentAsset.network,V.paymentAsset.asset),amount:V.amount.toString()});V.exchanges=a.exchanges.slice(0,2)}catch(a){throw j.P.showError(E.UNABLE_TO_GET_EXCHANGES),new F(A)}finally{V.isLoading=!1}},async getAvailableExchanges(a){try{let b=a?.asset&&a?.network?O(a.network,a.asset):void 0;return await J({page:a?.page??0,asset:b,amount:a?.amount?.toString()})}catch(a){throw new F(A)}},async getPayUrl(a,b,c=!1){try{let d=Number(b.amount),e=await K({exchangeId:a,asset:O(b.network,b.asset),amount:d.toString(),recipient:`${b.network}:${b.recipient}`});return q.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:a},configuration:{network:b.network,asset:b.asset,recipient:b.recipient,amount:d},currentPayment:{type:"exchange",exchangeId:a},headless:c}}),c&&(this.initiatePayment(),q.E.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:V.paymentId||U,configuration:{network:b.network,asset:b.asset,recipient:b.recipient,amount:d},currentPayment:{type:"exchange",exchangeId:a}}})),e}catch(a){if(a instanceof Error&&a.message.includes("is not supported"))throw new F(B);throw Error(a.message)}},async openPayUrl(a,b,c=!1){try{let d=await this.getPayUrl(a.exchangeId,b,c);if(!d)throw new F(C);let e=a.openInNewTab??!0;return i.w.openHref(d.url,e?"_blank":"_self"),d}catch(a){throw a instanceof F?V.error=a.message:V.error=E.GENERIC_PAYMENT_ERROR,new F(C)}},subscribeEvents(){V.isConfigured||(k.x.subscribeKey("connections",a=>{a.size>0&&this.handlePayment()}),g.W.subscribeChainProp("accountState",a=>{let b=k.x.hasAnyConnection(o.o.CONNECTOR_ID.WALLET_CONNECT);a?.caipAddress&&(b?setTimeout(()=>{this.handlePayment()},100):this.handlePayment())}))},async handlePayment(){V.currentPayment={type:"wallet",status:"IN_PROGRESS"};let a=g.W.getActiveCaipAddress();if(!a)return;let{chainId:b,address:c}=p.C.parseCaipAddress(a),d=g.W.state.activeChain;if(!c||!b||!d||!r.G.getProvider(d))return;let e=g.W.state.activeCaipNetwork;if(e&&!V.isPaymentInProgress)try{this.initiatePayment();let a=g.W.getAllRequestedCaipNetworks(),b=g.W.getAllApprovedCaipNetworkIds();switch(await Q({paymentAssetNetwork:V.paymentAsset.network,activeCaipNetwork:e,approvedCaipNetworkIds:b,requestedCaipNetworks:a}),await h.W.open({view:"PayLoading"}),d){case o.o.CHAIN.EVM:"native"===V.paymentAsset.asset&&(V.currentPayment.result=await R(V.paymentAsset,d,{recipient:V.recipient,amount:V.amount,fromAddress:c})),V.paymentAsset.asset.startsWith("0x")&&(V.currentPayment.result=await S(V.paymentAsset,{recipient:V.recipient,amount:V.amount,fromAddress:c})),V.currentPayment.status="SUCCESS";break;case o.o.CHAIN.SOLANA:V.currentPayment.result=await T(d,{recipient:V.recipient,amount:V.amount,fromAddress:c,tokenMint:"native"===V.paymentAsset.asset?void 0:V.paymentAsset.asset}),V.currentPayment.status="SUCCESS";break;default:throw new F(y)}}catch(a){a instanceof F?V.error=a.message:V.error=E.GENERIC_PAYMENT_ERROR,V.currentPayment.status="FAILED",j.P.showError(V.error)}finally{V.isPaymentInProgress=!1}},getExchangeById:a=>V.exchanges.find(b=>b.id===a),validatePayConfig(a){let{paymentAsset:b,recipient:c,amount:d}=a;if(!b)throw new F(t);if(!c)throw new F(u);if(!b.asset)throw new F(v);if(null==d||d<=0)throw new F(w)},handlePayWithWallet(){let a=g.W.getActiveCaipAddress();if(!a)return void s.I.push("Connect");let{chainId:b,address:c}=p.C.parseCaipAddress(a),d=g.W.state.activeChain;c&&b&&d?this.handlePayment():s.I.push("Connect")},async handlePayWithExchange(a){try{V.currentPayment={type:"exchange",exchangeId:a};let{network:b,asset:c}=V.paymentAsset,d={network:b,asset:c,amount:V.amount,recipient:V.recipient},e=await this.getPayUrl(a,d);if(!e)throw new F(x);return V.currentPayment.sessionId=e.sessionId,V.currentPayment.status="IN_PROGRESS",V.currentPayment.exchangeId=a,this.initiatePayment(),{url:e.url,openInNewTab:V.openInNewTab}}catch(a){return a instanceof F?V.error=a.message:V.error=E.GENERIC_PAYMENT_ERROR,V.isPaymentInProgress=!1,j.P.showError(V.error),null}},async getBuyStatus(a,b){try{let c=await L({sessionId:b,exchangeId:a});return("SUCCESS"===c.status||"FAILED"===c.status)&&q.E.sendEvent({type:"track",event:"SUCCESS"===c.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===c.status?i.w.parseError(V.error):void 0,source:"pay",paymentId:V.paymentId||U,configuration:{network:V.paymentAsset.network,asset:V.paymentAsset.asset,recipient:V.recipient,amount:V.amount},currentPayment:{type:"exchange",exchangeId:V.currentPayment?.exchangeId,sessionId:V.currentPayment?.sessionId,result:c.txHash}}}),c}catch(a){throw new F(D)}},async updateBuyStatus(a,b){try{let c=await this.getBuyStatus(a,b);V.currentPayment&&(V.currentPayment.status=c.status,V.currentPayment.result=c.txHash),("SUCCESS"===c.status||"FAILED"===c.status)&&(V.isPaymentInProgress=!1)}catch(a){throw new F(D)}},initiatePayment(){V.isPaymentInProgress=!0,V.paymentId=crypto.randomUUID()},initializeAnalytics(){V.analyticsSet||(V.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",a=>{if(V.currentPayment?.status&&"UNKNOWN"!==V.currentPayment.status){let a={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[V.currentPayment.status];q.E.sendEvent({type:"track",event:a,properties:{message:"FAILED"===V.currentPayment.status?i.w.parseError(V.error):void 0,source:"pay",paymentId:V.paymentId||U,configuration:{network:V.paymentAsset.network,asset:V.paymentAsset.asset,recipient:V.recipient,amount:V.amount},currentPayment:{type:V.currentPayment.type,exchangeId:V.currentPayment.exchangeId,sessionId:V.currentPayment.sessionId,result:V.currentPayment.result}}})}}))}},X=(0,d.AH)`
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
`;var Y=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let Z=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.amount="",this.tokenSymbol="",this.networkName="",this.exchanges=W.state.exchanges,this.isLoading=W.state.isLoading,this.loadingExchangeId=null,this.connectedWalletInfo=g.W.getAccountData()?.connectedWalletInfo,this.initializePaymentDetails(),this.unsubscribe.push(W.subscribeKey("exchanges",a=>this.exchanges=a)),this.unsubscribe.push(W.subscribeKey("isLoading",a=>this.isLoading=a)),this.unsubscribe.push(g.W.subscribeChainProp("accountState",a=>{this.connectedWalletInfo=a?.connectedWalletInfo})),W.fetchExchanges()}get isWalletConnected(){let a=g.W.getAccountData();return a?.status==="connected"}render(){return(0,d.qy)`
      <wui-flex flexDirection="column">
        <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
          ${this.renderPaymentHeader()}

          <wui-flex flexDirection="column" gap="3">
            ${this.renderPayWithWallet()} ${this.renderExchangeOptions()}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}initializePaymentDetails(){let a=W.getPaymentAsset();this.networkName=a.network,this.tokenSymbol=a.metadata.symbol,this.amount=W.state.amount.toString()}renderPayWithWallet(){return!function(a){let{chainNamespace:b}=p.C.parseCaipNetworkId(a);return M.includes(b)}(this.networkName)?(0,d.qy)``:(0,d.qy)`<wui-flex flexDirection="column" gap="3">
        ${this.isWalletConnected?this.renderConnectedView():this.renderDisconnectedView()}
      </wui-flex>
      <wui-separator text="or"></wui-separator>`}renderPaymentHeader(){let a=this.networkName;if(this.networkName){let b=g.W.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===this.networkName);b&&(a=b.name)}return(0,d.qy)`
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex alignItems="center" gap="2">
          <wui-text variant="h1-regular" color="primary">${this.amount||"0.0000"}</wui-text>
          <wui-flex class="token-display" alignItems="center" gap="1">
            <wui-text variant="md-medium" color="primary">
              ${this.tokenSymbol||"Unknown Asset"}
            </wui-text>
            ${a?(0,d.qy)`
                  <wui-text variant="sm-medium" color="secondary">
                    on ${a}
                  </wui-text>
                `:""}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderConnectedView(){let a=this.connectedWalletInfo?.name||"connected wallet";return(0,d.qy)`
      <wui-list-item
        @click=${this.onWalletPayment}
        ?chevron=${!0}
        ?fullSize=${!0}
        ?rounded=${!0}
        data-testid="wallet-payment-option"
        imageSrc=${(0,f.J)(this.connectedWalletInfo?.icon)}
      >
        <wui-text variant="lg-regular" color="primary">Pay with ${a}</wui-text>
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
    `}renderDisconnectedView(){return(0,d.qy)`<wui-list-item
      variant="icon"
      iconVariant="overlay"
      icon="wallet"
      ?rounded=${!0}
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay from wallet</wui-text>
    </wui-list-item>`}renderExchangeOptions(){return this.isLoading?(0,d.qy)`<wui-flex justifyContent="center" alignItems="center">
        <wui-spinner size="md"></wui-spinner>
      </wui-flex>`:0===this.exchanges.length?(0,d.qy)`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:this.exchanges.map(a=>(0,d.qy)`
        <wui-list-item
          @click=${()=>this.onExchangePayment(a.id)}
          data-testid="exchange-option-${a.id}"
          ?chevron=${!0}
          ?disabled=${null!==this.loadingExchangeId}
          ?loading=${this.loadingExchangeId===a.id}
          imageSrc=${(0,f.J)(a.imageUrl)}
        >
          <wui-flex alignItems="center" gap="3">
            <wui-text flexGrow="1" variant="md-medium" color="primary"
              >Pay with ${a.name} <wui-spinner size="sm" color="secondary"></wui-spinner
            ></wui-text>
          </wui-flex>
        </wui-list-item>
      `)}onWalletPayment(){W.handlePayWithWallet()}async onExchangePayment(a){try{this.loadingExchangeId=a;let b=await W.handlePayWithExchange(a);b&&(await h.W.open({view:"PayLoading"}),i.w.openHref(b.url,b.openInNewTab?"_blank":"_self"))}catch(a){console.error("Failed to pay with exchange",a),j.P.showError("Failed to pay with exchange")}finally{this.loadingExchangeId=null}}async onDisconnect(a){a.stopPropagation();try{await k.x.disconnect()}catch{console.error("Failed to disconnect"),j.P.showError("Failed to disconnect")}}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}};Z.styles=X,Y([(0,e.wk)()],Z.prototype,"amount",void 0),Y([(0,e.wk)()],Z.prototype,"tokenSymbol",void 0),Y([(0,e.wk)()],Z.prototype,"networkName",void 0),Y([(0,e.wk)()],Z.prototype,"exchanges",void 0),Y([(0,e.wk)()],Z.prototype,"isLoading",void 0),Y([(0,e.wk)()],Z.prototype,"loadingExchangeId",void 0),Y([(0,e.wk)()],Z.prototype,"connectedWalletInfo",void 0),Z=Y([(0,l.EM)("w3m-pay-view")],Z);var $=c(67090),_=c(89608),aa=c(78743);c(91802);let ab=(0,d.AH)`
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
`;var ac=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ad=class extends d.WF{constructor(){super(),this.loadingMessage="",this.subMessage="",this.paymentState="in-progress",this.paymentState=W.state.isPaymentInProgress?"in-progress":"completed",this.updateMessages(),this.setupSubscription(),this.setupExchangeSubscription()}disconnectedCallback(){clearInterval(this.exchangeSubscription)}render(){return(0,d.qy)`
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
    `}updateMessages(){switch(this.paymentState){case"completed":this.loadingMessage="Payment completed",this.subMessage="Your transaction has been successfully processed";break;case"error":this.loadingMessage="Payment failed",this.subMessage="There was an error processing your transaction";break;default:W.state.currentPayment?.type==="exchange"?(this.loadingMessage="Payment initiated",this.subMessage="Please complete the payment on the exchange"):(this.loadingMessage="Awaiting payment confirmation",this.subMessage="Please confirm the payment transaction in your wallet")}}getStateIcon(){switch(this.paymentState){case"completed":return this.successTemplate();case"error":return this.errorTemplate();default:return this.loaderTemplate()}}setupExchangeSubscription(){W.state.currentPayment?.type==="exchange"&&(this.exchangeSubscription=setInterval(async()=>{let a=W.state.currentPayment?.exchangeId,b=W.state.currentPayment?.sessionId;a&&b&&(await W.updateBuyStatus(a,b),W.state.currentPayment?.status==="SUCCESS"&&clearInterval(this.exchangeSubscription))},4e3))}setupSubscription(){W.subscribeKey("isPaymentInProgress",a=>{a||"in-progress"!==this.paymentState||(W.state.error||!W.state.currentPayment?.result?this.paymentState="error":this.paymentState="completed",this.updateMessages(),setTimeout(()=>{"disconnected"!==k.x.state.status&&h.W.close()},3e3))}),W.subscribeKey("error",a=>{a&&"in-progress"===this.paymentState&&(this.paymentState="error",this.updateMessages())})}loaderTemplate(){let a=$.W.state.themeVariables["--w3m-border-radius-master"],b=a?parseInt(a.replace("px",""),10):4,c=this.getPaymentIcon();return(0,d.qy)`
      <wui-flex justifyContent="center" alignItems="center" style="position: relative;">
        ${c?(0,d.qy)`<wui-wallet-image size="lg" imageSrc=${c}></wui-wallet-image>`:null}
        <wui-loading-thumbnail radius=${9*b}></wui-loading-thumbnail>
      </wui-flex>
    `}getPaymentIcon(){let a=W.state.currentPayment;if(a){if("exchange"===a.type){let b=a.exchangeId;if(b){let a=W.getExchangeById(b);return a?.imageUrl}}if("wallet"===a.type){let a=g.W.getAccountData()?.connectedWalletInfo?.icon;if(a)return a;let b=g.W.state.activeChain;if(!b)return;let c=_.a.getConnectorId(b);if(!c)return;let d=_.a.getConnectorById(c);if(!d)return;return aa.$.getConnectorImage(d)}}}successTemplate(){return(0,d.qy)`<wui-icon size="xl" color="success" name="checkmark"></wui-icon>`}errorTemplate(){return(0,d.qy)`<wui-icon size="xl" color="error" name="close"></wui-icon>`}};async function ae(a){return W.handleOpenPay(a)}async function af(a,b=3e5){if(b<=0)throw new F(t,"Timeout must be greater than 0");try{await ae(a)}catch(a){if(a instanceof F)throw a;throw new F(x,a.message)}return new Promise((a,c)=>{var d;let e=!1,f=setTimeout(()=>{e||(e=!0,h(),c(new F(z,"Payment timeout")))},b);function g(){if(e)return;let b=W.state.currentPayment,c=W.state.error,d=W.state.isPaymentInProgress;if(b?.status==="SUCCESS"){e=!0,h(),clearTimeout(f),a({success:!0,result:b.result});return}if(b?.status==="FAILED"){e=!0,h(),clearTimeout(f),a({success:!1,error:c||"Payment failed"});return}!c||d||b||(e=!0,h(),clearTimeout(f),a({success:!1,error:c}))}let h=(d=[ak("currentPayment",g),ak("error",g),ak("isPaymentInProgress",g)],()=>{d.forEach(a=>{try{a()}catch{}})});g()})}function ag(){return W.getExchanges()}function ah(){return W.state.currentPayment?.result}function ai(){return W.state.error}function aj(){return W.state.isPaymentInProgress}function ak(a,b){return W.subscribeKey(a,b)}ad.styles=ab,ac([(0,e.wk)()],ad.prototype,"loadingMessage",void 0),ac([(0,e.wk)()],ad.prototype,"subMessage",void 0),ac([(0,e.wk)()],ad.prototype,"paymentState",void 0),ad=ac([(0,l.EM)("w3m-pay-loading-view")],ad);let al={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},am={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},an={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ao={network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ap={network:"eip155:10",asset:"0x0b2c639c533813f4aa9d7837caf62653d097ff85",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},aq={network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ar={network:"eip155:137",asset:"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},as={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},at={network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},au={network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},av={network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},aw={network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ax={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ay={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}}};