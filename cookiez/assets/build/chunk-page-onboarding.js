"use strict";(globalThis.webpackChunkcookiez=globalThis.webpackChunkcookiez||[]).push([[4404],{93777(e,t,n){n.d(t,{K:()=>r});var i=n(3072),a=n(86087),o=n(10790);const r=(0,a.forwardRef)((e,t)=>(0,o.jsxs)(i.A,{viewBox:"0 0 122 86",...e,ref:t,children:[(0,o.jsx)("rect",{width:"122",height:"86",rx:"4",fill:"#EFF5FE"}),(0,o.jsx)("path",{d:"M103.849 16H18.1579C16.9737 16 16.0137 16.8456 16.0137 17.8887V68.096C16.0137 69.1391 16.9737 69.9847 18.1579 69.9847H103.849C105.033 69.9847 105.993 69.1391 105.993 68.096V17.8887C105.993 16.8456 105.033 16 103.849 16Z",fill:"#515962"}),(0,o.jsx)("rect",{width:"85.3245",height:"49.6355",transform:"translate(18 18)",fill:"#F3F3F4"}),(0,o.jsx)("rect",{x:"20.1624",y:"55.6357",width:"81",height:"9",fill:"#D9D9D9"})]}))},2306(e,t,n){n.d(t,{v:()=>r});var i=n(3072),a=n(86087),o=n(10790);const r=(0,a.forwardRef)((e,t)=>(0,o.jsxs)(i.A,{viewBox:"0 0 122 86",...e,ref:t,children:[(0,o.jsx)("rect",{width:"122",height:"86",rx:"4",fill:"#EFF5FE"}),(0,o.jsx)("path",{d:"M103.849 16H18.1579C16.9737 16 16.0137 16.8456 16.0137 17.8887V68.096C16.0137 69.1391 16.9737 69.9847 18.1579 69.9847H103.849C105.033 69.9847 105.993 69.1391 105.993 68.096V17.8887C105.993 16.8456 105.033 16 103.849 16Z",fill:"#515962"}),(0,o.jsx)("rect",{width:"85.3245",height:"49.6355",transform:"translate(18 18)",fill:"#F3F3F4"}),(0,o.jsx)("rect",{x:"21.25",y:"46",width:"28",height:"18",fill:"#D9D9D9"})]}))},93752(e,t,n){n.r(t),n.d(t,{default:()=>Ve});var i=n(78048),a=n(95231),o=n(86905),r=n(49614),s=n(85047),c=n(50602),l=n(72608),d=n(8617),p=n(27723),h=n(10790);const x=(0,a.I)(i.A)`
	width: 100%;

	flex-shrink: 0;

	padding: ${({theme:e})=>e.spacing(2,3)};

	border-end-start-radius: ${({theme:e})=>3*e.shape.borderRadius}px;
	background-color: ${({theme:e})=>e.palette.background.paper};
	border-end-end-radius: ${({theme:e})=>3*e.shape.borderRadius}px;
	box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08);
`,m=(0,a.I)(i.A)`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;
`,u=(0,a.I)(i.A)`
	display: flex;
	align-items: center;

	gap: ${({theme:e})=>e.spacing(1)};
`,g=(0,a.I)(c.A)`
	border-radius: ${({theme:e})=>2*e.shape.borderRadius}px;
`,b=(0,a.I)(c.A)`
	border-radius: ${({theme:e})=>2*e.shape.borderRadius}px;
	background: #1f2124;
`,y=({currentStep:e,disabled:t=!1,isContinueDisabled:n,onBack:a,onContinue:r,onSkip:y})=>{const{isRTL:j}=(0,d.F)(),f=e===o.A.StepThree,k=f?(0,p.__)("Start scan","cookiez"):(0,p.__)("Continue","cookiez"),v=e!==o.A.StepOne,w=(0,h.jsx)(b,{color:"secondary",disabled:t||n,onClick:r,size:"medium",variant:"contained",children:k});return(0,h.jsx)(x,{children:(0,h.jsxs)(m,{children:[v?(0,h.jsx)(c.A,{sx:{color:"#1F2124"},color:"secondary",onClick:a,disabled:t,size:"medium",startIcon:(0,h.jsx)(l.A,{in:Boolean(j),from:0,to:180,children:(0,h.jsx)(s.A,{})}),variant:"text",children:(0,p.__)("Back","cookiez")}):(0,h.jsx)(i.A,{}),f?(0,h.jsxs)(u,{children:[(0,h.jsx)(g,{color:"secondary",disabled:t||n,onClick:y,size:"medium",variant:"outlined",children:(0,p.__)("Skip for now","cookiez")}),w]}):w]})})};var j=n(38516),f=n(94926),k=n(59141),v=n(45404),w=n(22863);const A="cookiez-onboarding-title";var _=n(92810),C=n(85848),S=n(24279);const $=(0,a.I)(i.A)`
	display: flex;
	flex-direction: column;
	align-items: start;

	gap: ${({theme:e})=>e.spacing(2)};
`,z=(0,a.I)(i.A)`
	display: flex;
	flex-direction: column;

	margin-block-start: ${({theme:e})=>e.spacing(.625)};
`,I=(0,a.I)(i.A)`
	align-items: center;
	display: flex;
	flex-wrap: wrap;

	gap: ${({theme:e})=>e.spacing(.75)};
`,B=(0,a.I)(C.A)`
	color: ${({theme:e})=>e.palette.text.primary};
`,F=(0,a.I)(i.A)`
	width: 100%;
	min-height: 120px;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${({theme:e})=>(0,S.X4)(e.palette.info.main,.08)};
	border-radius: ${({theme:e})=>1.5*e.shape.borderRadius}px;
`,T=()=>(0,h.jsxs)($,{children:[(0,h.jsx)(_.A,{label:(0,p.__)("Strictest Standard","cookiez"),size:"small",color:"warning",variant:"standard"}),(0,h.jsxs)(C.A,{component:"span",variant:"subtitle1",color:"text.primary",children:[(0,p.__)("Opt-in","cookiez"),(0,h.jsx)(C.A,{component:"p",variant:"body1",color:"text.primary",children:(0,p.__)("Visitors must accept cookies to enable them","cookiez")})]}),(0,h.jsxs)(z,{children:[(0,h.jsx)(C.A,{color:"text.tertiary",variant:"caption",children:(0,p.__)("Recommended for:","cookiez")}),(0,h.jsxs)(I,{children:[(0,h.jsx)(B,{component:"span",variant:"caption",children:(0,p.__)("GDPR","cookiez")}),"🇪🇺 🇬🇧 🇨🇭 🌍",(0,h.jsx)(B,{component:"span",variant:"caption",children:(0,p.__)("(EER)","cookiez")})]})]})]}),O=()=>(0,h.jsxs)($,{children:[(0,h.jsx)(_.A,{label:(0,p.__)("Flexible Compliance","cookiez"),size:"small",color:"info",variant:"standard"}),(0,h.jsxs)(C.A,{component:"span",variant:"subtitle1",color:"text.primary",children:[(0,p.__)("Opt-out","cookiez"),(0,h.jsx)(C.A,{component:"p",variant:"body1",color:"text.primary",children:(0,p.__)("Cookies are enabled until visitors decline","cookiez")})]}),(0,h.jsxs)(z,{children:[(0,h.jsx)(C.A,{color:"text.tertiary",variant:"caption",children:(0,p.__)("Recommended for:","cookiez")}),(0,h.jsxs)(I,{children:[(0,h.jsx)(B,{component:"span",variant:"caption",children:(0,p.__)("CCPA","cookiez")}),"🇺🇸 🇧🇷 🌏",(0,h.jsx)(B,{component:"span",variant:"caption",children:(0,p.__)("(APAC)","cookiez")})]})]})]});var D=n(13220),R=n(59700);const L=n.p+"images/opt-in-banner.8ae1d8bb.png",P=n.p+"images/opt-in-box.e8699c18.png",E=n.p+"images/opt-out-banner.46a3d4ff.png",M=n.p+"images/opt-out-box.1344d8f2.png",V=n.p+"images/scan.fada6504.png";let Y=function(e){return e.Consent="consent",e.Layout="layout",e.Scan="scan",e}({});const H={[f.Ay.OptIn]:P,[f.Ay.OptOut]:M},K={[f.Ay.OptIn]:{[R.x.Banner]:L,[R.x.Box]:P},[f.Ay.OptOut]:{[R.x.Banner]:E,[R.x.Box]:M}},q=e=>{switch(e.phase){case Y.Scan:return V;case Y.Consent:return H[e.consentBranch];case Y.Layout:return K[e.consentBranch][e.bannerType]}},W=e=>(0,h.jsx)(D.A,{alt:"",decoding:"async",src:q(e),sx:{height:"100%",maxWidth:"80%",objectFit:"contain"},variant:"rounded"});var G=n(93248),X=n(55984),Z=n(84162);const Q=(0,a.I)(Z.A)`
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: ${({theme:e})=>e.spacing(2)};
`,U=(0,a.I)(X.A)`
	border: 0;
	clip-path: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`,J=(0,a.I)(G.A,{shouldForwardProp:e=>"$isSelected"!==e})`
	box-sizing: border-box;

	position: relative;
	width: 323px;

	align-items: flex-start;

	margin: 0;
	padding: ${({theme:e})=>e.spacing(2.5)};

	background-color: ${({theme:e})=>e.palette.background.paper};
	border-radius: ${({theme:e})=>2.5*e.shape.borderRadius}px;
	box-shadow: ${({theme:e,$isSelected:t})=>t?`inset 0 0 0 1px ${e.palette.divider}, inset 0 0 0 2px ${e.palette.text.primary}`:`inset 0 0 0 1px ${e.palette.divider}`};
	transition: 300ms ease-in-out;

	&:has(input:focus-visible) {
		box-shadow: ${({theme:e,$isSelected:t})=>[t?`inset 0 0 0 1px ${e.palette.divider}, inset 0 0 0 2px ${e.palette.text.primary}`:`inset 0 0 0 1px ${e.palette.divider}`,`inset 0 0 0 3px ${e.palette.text.primary}`].join(", ")};
	}

	& .MuiFormControlLabel-label {
		width: 100%;
	}
`,N=({ariaLabelledBy:e,name:t,onChange:n,options:i,value:a})=>{const o=new Set(i.map(e=>e.value));return(0,h.jsx)(Q,{"aria-labelledby":e,name:t,onChange:(e,t)=>{o.has(t)&&n(t)},value:a,children:i.map(e=>(0,h.jsx)(J,{$isSelected:a===e.value,control:(0,h.jsx)(U,{color:"secondary",size:"small"}),label:e.label,value:e.value},e.value))})},ee=(0,a.I)(C.A)`
	margin-block-end: ${({theme:e})=>e.spacing(1)};

	font-weight: ${({theme:e})=>e.typography.fontWeightMedium};
	text-align: center;
	color: ${({theme:e})=>e.palette.text.primary};
`,te=(0,a.I)(C.A)`
	margin-block-end: ${({theme:e})=>e.spacing(6)};

	text-align: center;
	color: ${({theme:e})=>e.palette.text.primary};
`,ne=({title:e,subtitle:t})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(ee,{component:"h1",id:A,variant:"h5",children:e}),(0,h.jsx)(te,{component:"p",variant:"body1",children:t})]});var ie=n(20026),ae=n(1852),oe=n(50310),re=n(86087);const se=(0,a.I)(i.A)`
	display: flex;
	flex: 1;
	flex-direction: column;
	min-height: 0;
	padding: ${({theme:e})=>e.spacing(3)};
	width: 100%;
`,ce=(0,a.I)(i.A)`
	display: flex;
	flex: 1;
	flex-direction: column;
	gap: ${({theme:e})=>e.spacing(3)};
	min-height: 0;

	${({theme:e})=>e.breakpoints.up("md")} {
		align-items: stretch;
		flex-direction: row;
	}
`,le=(0,a.I)(i.A)`
	min-width: 0;

	display: flex;
	flex: 1.3;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	padding-block-start: ${({theme:e})=>e.spacing(4)};
	gap: ${({theme:e})=>e.spacing(2)};
`,de=(0,a.I)(i.A)`
	width: 512px;

	display: flex;
	flex-direction: column;
	align-items: center;
`,pe=(0,a.I)(ie.A)`
	width: 75%;

	border-radius: ${({theme:e})=>2*e.shape.borderRadius}px;

	.MuiLinearProgress-bar {
		background-color: ${({theme:e})=>e.palette.common.black};
	}
`,he=(0,a.I)(i.A)`
	overflow: hidden;
	position: relative;
	width: 100%;
`,xe=(0,a.I)(i.A)`
	align-items: start;
	display: flex;
	flex: 1;
	justify-content: end;
	min-height: 0;
	min-width: 0;
`,me=({content:e,preview:t})=>{const{slideDirection:n,progressValue:a,stepIndex:o}=(0,oe.PX)(),r=(0,re.useRef)(null);return(0,h.jsx)(se,{children:(0,h.jsxs)(ce,{children:[(0,h.jsx)(le,{children:(0,h.jsxs)(de,{children:[(0,h.jsx)(pe,{"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":a,color:"secondary",sx:{marginBlockEnd:7},value:a,variant:"determinate"}),(0,h.jsx)(he,{ref:r,children:(0,h.jsx)(ae.A,{container:r.current,direction:n,in:!0,timeout:300,children:(0,h.jsx)(i.A,{children:e})},o)})]})}),(0,h.jsx)(xe,{children:t})]})})},ue=[{label:(0,h.jsx)(T,{}),value:f.Ay.OptIn},{label:(0,h.jsx)(O,{}),value:f.Ay.OptOut}],ge=()=>{const{settings:e,updateSettings:t}=(0,w.t0)(),n=(0,f.Lz)(e.templateType);return(0,h.jsx)(me,{content:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(ne,{title:(0,p.__)("Choose your consent template","cookiez"),subtitle:(0,p.__)("You can update this anytime","cookiez")}),(0,h.jsx)(N,{ariaLabelledBy:A,name:"cookiez-onboarding-consent-template",onChange:e=>{t({templateType:e}),j.KY.sendEvent(j.mk.templateChanged,{...v.f1,window_name:k.Q.Onboarding,interaction_desc:"User selects a consent template (opt-in or opt-out) during onboarding to set the initial consent collection mode",type:e})},options:ue,value:n})]}),preview:(0,h.jsx)(W,{consentBranch:n,phase:Y.Consent})})};var be=n(38645);const ye=(0,a.I)(i.A)`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-block-start: ${({theme:e})=>e.spacing(7)};
`,je=(0,a.I)(c.A)`
	border-radius: ${({theme:e})=>2*e.shape.borderRadius}px;
	background-color: #1f2124;
`,fe=(0,a.I)(C.A)`
	display: inline-flex;

	gap: ${({theme:e})=>e.spacing(.5)};
	margin-block-start: ${({theme:e})=>e.spacing(8)};

	color: ${({theme:e})=>e.palette.text.secondary};
`,ke=({onStartScan:e})=>(0,h.jsx)(me,{content:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(ne,{title:(0,p.__)("Let's find your cookies","cookiez"),subtitle:(0,p.__)("We'll scan your homepage to detect cookies and help you stay compliant.","cookiez")}),(0,h.jsxs)(ye,{children:[(0,h.jsx)(je,{variant:"contained",color:"secondary",size:"large",onClick:e,children:(0,p.__)("Start scan","cookiez")}),(0,h.jsxs)(fe,{variant:"body2",component:"p",alignItems:"center",children:[(0,h.jsx)(be.A,{fontSize:"small"}),(0,p.__)("This scan uses 1 credit from your quota","cookiez")]})]})]}),preview:(0,h.jsx)(W,{phase:Y.Scan})});var ve=n(93927),we=n(93777);const Ae=()=>(0,h.jsxs)($,{children:[(0,h.jsx)(C.A,{component:"span",variant:"subtitle1",color:"text.primary",children:(0,p.__)("Banner","cookiez")}),(0,h.jsx)(F,{children:(0,h.jsx)(we.K,{sx:{width:122,height:86}})})]});var _e=n(2306);const Ce=()=>(0,h.jsxs)($,{children:[(0,h.jsx)(C.A,{component:"span",variant:"subtitle1",color:"text.primary",children:(0,p.__)("Box","cookiez")}),(0,h.jsx)(F,{children:(0,h.jsx)(_e.v,{sx:{width:122,height:86}})})]}),Se=[{label:(0,h.jsx)(Ce,{}),value:ve.x1.Box},{label:(0,h.jsx)(Ae,{}),value:ve.x1.Banner}],$e=()=>{const{settings:e}=(0,w.t0)(),{design:t,updateDesign:n}=(0,w.cY)(),i=(0,f.Lz)(e.templateType);return(0,h.jsx)(me,{content:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(ne,{title:(0,p.__)("Choose your preferred layout","cookiez"),subtitle:(0,p.__)("You can update this anytime","cookiez")}),(0,h.jsx)(N,{ariaLabelledBy:A,name:"cookiez-onboarding-banner-type",onChange:e=>n({bannerType:e}),options:Se,value:t.bannerType})]}),preview:(0,h.jsx)(W,{bannerType:t.bannerType,consentBranch:i,phase:Y.Layout})})};var ze=n(27531),Ie=n(31151),Be=n(17304),Fe=n(19384),Te=n(9879),Oe=n(73794),De=n(91065),Re=n(94696),Le=n(95830);const Pe=(e,t)=>{switch(e){case o.A.StepOne:return(0,h.jsx)(ge,{});case o.A.StepTwo:return(0,h.jsx)($e,{});case o.A.StepThree:return(0,h.jsx)(ke,{onStartScan:t})}},Ee=(0,a.I)(i.A)`
	background-color: ${({theme:e})=>e.palette.background.default};
	display: flex;
	flex: 1;
	flex-direction: column;
	min-height: 0;
	width: 100%;
`,Me=(0,a.I)(i.A)`
	display: flex;
	flex: 1;
	flex-direction: column;
	min-height: 0;
	overflow: auto;
`,Ve=()=>{const{currentStep:e,completeOnboarding:t,handleBack:n,handleContinue:i,isPersisting:a}=(()=>{const{error:e}=(0,j.mu)(),{design:t,updateDesign:n}=(0,Fe.c)(),{settings:i,updateSettings:a}=(0,Te.t)(),{isPersisting:o,stepIndex:s}=(0,oe.PX)(),{setSlideDirection:c,setIsPersisting:l,setProgressValue:d,setStepIndex:h}=(0,oe.lj)(),{startScan:x}=(0,r.Bm)(),m=(0,re.useCallback)(async t=>{l(!0);try{await async function(e,t){await Le.A.updatePluginSettings(e),window.cookiezSettingsData?.settings&&Object.assign(window.cookiezSettingsData.settings,e);const{bannerType:n,...i}=e;Object.keys(i).length>0&&t.updateSettings(i),void 0!==n&&t.updateDesign({bannerType:n})}(t,{updateDesign:n,updateSettings:a})}catch{throw e((0,p.__)("Failed to save settings.","cookiez")),new Error("persist failed")}finally{l(!1)}},[l,e,n,a]),u=(0,re.useCallback)(async()=>{j.KY.sendEvent(j.mk.skipButtonClicked,{...v.Mh});const e=function(e){const t={isOnboardingCompleted:!0};return e&&"supportGcm"in e||(t.supportGcm=!0),t}(window.cookiezSettingsData?.settings);try{await m(e)}catch{}},[m]),g=(0,re.useCallback)(async()=>{if(j.KY.sendEvent(j.mk.continueButtonClicked,{...v.Sr,target_value:String(s+1)}),s>=Re.I5.length-1){try{await x(ze.ay.Homepage,Ie.xW.Onboarding)}catch(t){console.error("Scan starting error: ",t),e((0,p.__)("Scan starting error","cookiez"))}return await u(),void(0,De.HT)(Be.A.CookieManagement)}const n=Re.I5[s+1],a=function(e,t,n,i){const a={onboardingCurrentStep:t};return 0===e&&(a.templateType=(0,f._o)(n)),1===e&&(a.bannerType=i),a}(s,n,i.templateType,t.bannerType);try{await m(a),c(Oe.f.Left),h(e=>e+1),requestAnimationFrame(()=>{d((0,Re._5)(s+1))})}catch{}},[u,t.bannerType,m,c,d,i.templateType,h,s]),b=(0,re.useCallback)(async()=>{if(s<=0)return;j.KY.sendEvent(j.mk.backButtonClicked,{...v.s1,target_value:String(s+1)});const e=Re.I5[s-1];try{await m({onboardingCurrentStep:e}),c(Oe.f.Right),h(e=>e-1),requestAnimationFrame(()=>{d((0,Re._5)(s-1))})}catch{}},[m,c,d,h,s]),y=Re.I5[s];return{completeOnboarding:u,currentStep:y,handleBack:b,handleContinue:g,isPersisting:o}})(),{createScanRequest:o}=(0,r.Bm)(),{isLoading:s}=o;return(0,h.jsxs)(Ee,{"aria-labelledby":A,role:"main",children:[(0,h.jsx)(Me,{children:Pe(e,i)}),(0,h.jsx)(y,{currentStep:e,disabled:s,isContinueDisabled:a,onBack:n,onContinue:i,onSkip:t})]})}}}]);