"use strict";(globalThis.webpackChunkcookiez=globalThis.webpackChunkcookiez||[]).push([[8101],{56603(e,o,i){i.r(o),i.d(o,{default:()=>f});var t=i(4639),n=i(50602),s=i(77374),a=i(74456),r=i(76656),c=i(27957),l=i(73916),d=i(33022),h=i(95726),u=i(57936),g=i(62646),k=i(85848),m=i(95231),p=i(38516),_=i(95830),b=i(96914),y=i(86087),x=i(27723),C=i(10790);const z=(0,m.I)(c.A)`
	position: relative;

	> div {
		padding: ${({theme:e})=>`\n\t\t\t${e.spacing(2)} \n\t\t\t${e.spacing(4.5)}\n\t\t\t${e.spacing(2)}\n\t\t\t${e.spacing(2.75)}\n\t\t`};
		min-height: auto;
	}
`,j=(0,m.I)(k.A)`
	line-height: 1.5;
`,w=(0,m.I)(l.A)`
	position: absolute;
	right: ${({theme:e})=>e.spacing(1)};
	top: ${({theme:e})=>e.spacing(1)};
`,A=(0,m.I)(h.A)`
	padding-inline-start: ${({theme:e})=>e.spacing(2)};
	list-style-type: disc;
`,v=(0,m.I)(u.A)`
	padding-block: 0;
	min-height: auto;
`,$=(0,m.I)(g.A)`
	display: list-item;
	color: ${({theme:e})=>e.palette.text.secondary};
	margin: 0;
`,O=(0,m.I)(a.A)`
	padding: ${({theme:e})=>e.spacing(2,3)};
`,f=({onClose:e})=>{const o=(0,p.mu)(),[i,a]=(0,y.useState)(!1),c=()=>{(()=>{const e={isMigrationPopupDismissed:!0};window.cookiezSettingsData?.settings&&Object.assign(window.cookiezSettingsData.settings,e),_.A.updatePluginSettings(e)})(),e(),o.hint((0,C.jsxs)(C.Fragment,{children:[(0,x.__)("You can always migrate your subscriptions from the","cookiez")," ",(0,C.jsx)(d.A,{href:b.$5,underline:"always",children:(0,x.__)("Tool Manager","cookiez")}),"."]}))};return(0,C.jsxs)(s.A,{open:!0,onClose:c,maxWidth:"sm",fullWidth:!0,"aria-labelledby":"migration-dialog-title",children:[(0,C.jsxs)(z,{logo:!1,children:[(0,C.jsx)(j,{variant:"subtitle1",component:"h2",fontWeight:600,id:"migration-dialog-title",children:(0,x.__)("Move Cookie Consent to Elementor One","cookiez")}),(0,C.jsx)(w,{size:"small",onClick:c,"aria-label":(0,x.__)("Close","cookiez"),children:(0,C.jsx)(t.A,{})})]}),(0,C.jsxs)(r.A,{children:[(0,C.jsx)(k.A,{variant:"body2",color:"text.secondary",marginBlockEnd:2,children:(0,x.__)("Cookie Consent is currently active with its own subscription. You also have an Elementor One subscription for this site.","cookiez")}),(0,C.jsx)(k.A,{variant:"body2",color:"text.secondary",marginBlockEnd:1,children:(0,x.__)("If you switch to Elementor One:","cookiez")}),(0,C.jsxs)(A,{dense:!0,disablePadding:!0,children:[(0,C.jsx)(v,{disableGutters:!0,children:(0,C.jsx)($,{primary:(0,x.__)("Your current Cookie Consent subscription will be deactivated","cookiez")})}),(0,C.jsx)(v,{disableGutters:!0,children:(0,C.jsx)($,{primary:(0,x.__)("Cookie Consent will use your shared Elementor One credits","cookiez")})})]})]}),(0,C.jsxs)(O,{children:[(0,C.jsx)(n.A,{color:"secondary",variant:"outlined",onClick:c,disabled:i,children:(0,x.__)("Not now","cookiez")}),(0,C.jsx)(n.A,{variant:"contained",onClick:async()=>{a(!0);try{const i=await _.A.migrateToOne();i?.isMigrated?(e(),o.success((0,x.__)("Cookie Consent has successfully moved to your One subscription.","cookiez")),setTimeout(()=>{window.location.reload()},1500)):(a(!1),o.error((0,x.__)("Cookie Consent could not move to your One subscription. Please try again.","cookiez")))}catch(e){a(!1);const i=e,t=i?.message??(0,x.__)("Unknown error","cookiez");o.error(`${(0,x.__)("Cookie Consent could not move to your One subscription.","cookiez")} ${(0,x.__)("Error:","cookiez")} ${t}`)}},disabled:i,children:(0,x.__)("Move to One","cookiez")})]})]})}}}]);