(()=>{"use strict";var e,t={686(e,t,o){o(50904),o(86087)},38516(e,t,o){o.d(t,{EO:()=>i.Ay});var i=o(64553),n=(o(73445),o(1368),o(73655),o(68856)),a=o(95231),r=o(86087);o(10790),(0,r.createContext)(void 0),(0,a.I)(n.Ay,{shouldForwardProp:e=>"$isHint"!==e})`
	${({$isHint:e,theme:t})=>e&&`\n\t\tbackground-color: #2d2d2d;\n\t\tcolor: ${t.palette.common.white};\n\n\t\t& .MuiAlert-action {\n\t\t\tcolor: ${t.palette.common.white};\n\t\t}\n\n\t\t& a {\n\t\t\tcolor: #3F8CFF;\n\t\t\ttext-decoration: underline;\n\t\t}\n\t`}
`,o(19258),o(686),window.wp.coreData,window.wp.data,o(2364)},2364(e,t,o){o(76751),o(70528),o(13315)},927(e,t,o){var i=o(95123),n=o(25066);const a=window.wp.domReady;var r=o.n(a),s=o(86087),l=o(4639),c=o(50602),d=o(77374),h=o(74456),p=o(76656),u=o(23136),w=o(93248),m=o(73916),v=o(55984),x=o(84162),g=o(75260),k=o(85848),_=o(95231);const b=window.wp.i18n;var f=o(38516),y=o(8354);let z=function(e){return e.NoLongerNeeded="no_longer_needed",e.TooExpensive="too_expensive",e.DidNotWork="did_not_work",e.UnclearHowToUse="unclear_how_to_use",e.TechnicalIssues="technical_issues",e.SwitchedSolution="switched_solution",e.Other="other",e}({});const j=[z.UnclearHowToUse,z.SwitchedSolution,z.Other],O=[z.UnclearHowToUse,z.Other],S=y.Ikc({reason:y.YjP(),additional_data:y.YjP().optional()}),$={[z.NoLongerNeeded]:(0,b.__)("I no longer need this plugin","cookiez"),[z.TooExpensive]:(0,b.__)("It's too expensive","cookiez"),[z.DidNotWork]:(0,b.__)("The plugin didn't provide the results I was hoping for","cookiez"),[z.UnclearHowToUse]:(0,b.__)("I wasn't sure how to use the plugin","cookiez"),[z.TechnicalIssues]:(0,b.__)("I had technical issues or conflicts with my site","cookiez"),[z.SwitchedSolution]:(0,b.__)("I switched to a different solution","cookiez"),[z.Other]:(0,b.__)("Other","cookiez")},A={[z.UnclearHowToUse]:(0,b.__)("Optional: Was anything unclear or confusing?","cookiez"),[z.SwitchedSolution]:(0,b.__)("Optional: Please share which solution:","cookiez"),[z.Other]:(0,b.__)("Optional: Please share the reason:","cookiez")},I={[z.UnclearHowToUse]:(0,b.__)("Please share details…","cookiez"),[z.SwitchedSolution]:(0,b.__)("Solution name…","cookiez"),[z.Other]:(0,b.__)("Please explain…","cookiez")};var D=o(10790);const C=(0,_.I)(w.A)`
	margin-inline-start: 0;
	margin-block-end: ${({theme:e})=>e.spacing(.5)};
`,T=(0,_.I)("div")`
	padding-inline-start: ${({theme:e})=>e.spacing(4.75)};
	margin-block-end: ${({theme:e})=>e.spacing(1)};
`,U=(0,_.I)("textarea")`
	width: 100%;
	padding: ${({theme:e})=>e.spacing(1)};
	font-size: 14px;
	border: 1px solid ${({theme:e})=>e.palette.text.secondary};
	border-radius: ${({theme:e})=>e.shape.borderRadius}px;
	resize: vertical;
	font-family: inherit;
	min-height: 78px;
	outline: none;
	color: ${({theme:e})=>e.palette.text.primary};
	background-color: initial;

	&:focus {
		border-color: ${({theme:e})=>e.palette.primary.main};
		box-shadow: none;
		outline: 1px solid ${({theme:e})=>e.palette.primary.main};
	}
`,P=(0,_.I)(g.A)`
	input[type='text'] {
		color: ${({theme:e})=>e.palette.text.primary};
		background-color: initial;
		width: 100%;
		font-size: 14px;
		border: 1px solid ${({theme:e})=>e.palette.text.secondary};
		border-radius: ${({theme:e})=>e.shape.borderRadius}px;
		font-family: inherit;

		&:focus {
			border-color: ${({theme:e})=>e.palette.primary.main};
			box-shadow: none;
			outline: none;
		}
	}
`,E=(0,_.I)(k.A)`
	font-size: 12px;
	color: ${({theme:e})=>e.palette.text.secondary};
	margin-block-end: ${({theme:e})=>e.spacing(.5)};
`,R=(0,_.I)(u.A)`
	position: relative;
	padding-inline-end: ${({theme:e})=>e.spacing(6)};
`,F=(0,_.I)(m.A)`
	position: absolute;
	inset-inline-end: ${({theme:e})=>e.spacing(1)};
	inset-block-start: ${({theme:e})=>e.spacing(1)};
`,H=({isOpen:e,onClose:t})=>{const[o,i]=(0,s.useState)(null),[n,a]=(0,s.useState)(""),[r,u]=(0,s.useState)(!1),w=window.cookiezDeactivationData?.deactivateUrl??"",m=()=>{w&&(window.location.href=w)};return(0,D.jsxs)(d.A,{open:e,onClose:t,maxWidth:"sm",fullWidth:!0,children:[(0,D.jsxs)(R,{children:[(0,D.jsx)(k.A,{variant:"h6",color:"text.primary",children:(0,b.__)("Quick Feedback","cookiez")}),(0,D.jsx)(F,{size:"small",onClick:t,"aria-label":(0,b.__)("Close","cookiez"),children:(0,D.jsx)(l.A,{})})]}),(0,D.jsxs)(p.A,{children:[(0,D.jsx)(k.A,{variant:"body2",color:"text.secondary",sx:{marginBlockEnd:2},children:(0,b.__)("If you have a moment, please share why you are deactivating Cookie Consent:","cookiez")}),(0,D.jsx)(x.A,{value:o??"",onChange:e=>i(e.target.value),children:Object.values(z).map(e=>{const t=o===e&&j.includes(e),i=O.includes(e);return(0,D.jsxs)(s.Fragment,{children:[(0,D.jsx)(C,{value:e,control:(0,D.jsx)(v.A,{size:"small"}),label:$[e]}),t&&(0,D.jsxs)(T,{children:[(0,D.jsx)(E,{children:A[e]}),i?(0,D.jsx)(U,{rows:3,placeholder:I[e],value:n,onChange:e=>a(e.target.value)}):(0,D.jsx)(P,{fullWidth:!0,placeholder:I[e],value:n,onChange:e=>a(e.target.value),size:"small"})]})]},e)})})]}),(0,D.jsxs)(h.A,{sx:{justifyContent:"space-between",paddingInline:3,paddingBlockEnd:2},children:[(0,D.jsx)(c.A,{variant:"text",color:"inherit",onClick:()=>{m()},disabled:r,children:(0,b.__)("Skip & Deactivate","cookiez")}),(0,D.jsx)(c.A,{variant:"contained",onClick:async()=>{if(o){u(!0);try{await(async e=>{const t=S.parse(e);return f.EO.request({method:"POST",path:"/cookiez/v1/deactivation/feedback",data:t})})({reason:o,additional_data:n||void 0})}catch{}m()}else m()},disabled:r,children:r?(0,b.__)("Submitting…","cookiez"):(0,b.__)("Submit & Deactivate","cookiez")})]})]})};let N=null;const M=()=>{const[e,t]=(0,s.useState)(!1),o=window.cookiezDeactivationData?.isRTL??!1,a=window.cookiezDeactivationData?.isDevelopment?s.StrictMode:s.Fragment;return N={open:()=>t(!0)},(0,D.jsx)(a,{children:(0,D.jsx)(i.A,{rtl:o,children:(0,D.jsx)(n.NP,{colorScheme:"auto",children:(0,D.jsx)(H,{isOpen:e,onClose:()=>t(!1)})})})})};r()(()=>{const e=document.getElementById("deactivation-app");if(!e)return;(0,s.createRoot)(e).render((0,D.jsx)(M,{}));const t=document.querySelector('tr[data-plugin="cookiez/cookiez.php"] .deactivate a, tr[data-slug="cookiez"] .deactivate a');if(t){const e=t.getAttribute("href")??"";window.cookiezDeactivationData&&(window.cookiezDeactivationData.deactivateUrl=e),t.addEventListener("click",e=>{e.preventDefault(),N?.open()})}})},51609(e){e.exports=window.React},75795(e){e.exports=window.ReactDOM},10790(e){e.exports=window.ReactJSXRuntime},1455(e){e.exports=window.wp.apiFetch},86087(e){e.exports=window.wp.element},93832(e){e.exports=window.wp.url}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.m=t,e=[],i.O=(t,o,n,a)=>{if(!o){var r=1/0;for(d=0;d<e.length;d++){for(var[o,n,a]=e[d],s=!0,l=0;l<o.length;l++)(!1&a||r>=a)&&Object.keys(i.O).every(e=>i.O[e](o[l]))?o.splice(l--,1):(s=!1,a<r&&(r=a));if(s){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,n,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.j=6790,(()=>{var e={6790:0};i.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[r,s,l]=o,c=0;if(r.some(t=>0!==e[t])){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(l)var d=l(i)}for(t&&t(o);c<r.length;c++)a=r[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(d)},o=globalThis.webpackChunkcookiez=globalThis.webpackChunkcookiez||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=i.O(void 0,[6219,6806,5952,5387,4377,662,6135,9106,4753,286,4036,1514,3840,7522,6876,6934,4807,8937,4143,7514],()=>i(927));n=i.O(n)})();