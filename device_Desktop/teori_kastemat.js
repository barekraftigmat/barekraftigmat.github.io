if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
textbutton50.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 60 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(30 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_383_40_33\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilV.png\" preserveAspectRatio=\"none\" href=\"images/PilV.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_383_40_33&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(30 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 714.9999999999999px; top: 600.0000000000001px; width: 60px; height: 45px; z-index: 5; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj50",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnPilV",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivLogMsg( 'Action [OnMClkGoTo on BtnPilV] fired!', 4 )
    trivExitPage('teori_matsvinn.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[714.9999999999999,600.0000000000001,60,45]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":715,"y":600,"width":60,"height":45},"imgDataNormal":"images/desktop_shape50.png","imgDataOver":"images/desktop_shape50.png","imgDataDown":"images/desktop_shape50.png","imgDataDisabled":"images/desktop_shape50_disabled.png","svgDataNormal":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_383_40_33\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilV.png\" preserveAspectRatio=\"none\" href=\"images/PilV.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_383_40_33&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_383_40_35\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilV.png\" preserveAspectRatio=\"none\" href=\"images/PilV.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_383_40_35&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_383_40_37\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilV.png\" preserveAspectRatio=\"none\" href=\"images/PilV.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_383_40_37&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_383_40_39\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilV.png\" preserveAspectRatio=\"none\" href=\"images/PilV.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_383_40_39&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"BtnPilV","titleValue":"BtnPilV","fallbackImg":"<img alt=\"BtnPilV\" title=\"BtnPilV\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton48.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 60 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(30 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_383_40_41\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilH.png\" preserveAspectRatio=\"none\" href=\"images/PilH.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_383_40_41&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(30 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 899.9999999999999px; top: 600.0000000000001px; width: 60px; height: 45px; z-index: 6; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj48",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnPilH",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivLogMsg( 'Action [OnMClkGoTo on BtnPilH] fired!', 4 )
    trivExitPage('teori_okologisk.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[899.9999999999999,600.0000000000001,60,45]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":900,"y":600,"width":60,"height":45},"imgDataNormal":"images/desktop_shape48.png","imgDataOver":"images/desktop_shape48.png","imgDataDown":"images/desktop_shape48.png","imgDataDisabled":"images/desktop_shape48_disabled.png","svgDataNormal":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_383_40_41\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilH.png\" preserveAspectRatio=\"none\" href=\"images/PilH.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_383_40_41&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_383_40_43\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilH.png\" preserveAspectRatio=\"none\" href=\"images/PilH.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_383_40_43&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_383_40_45\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilH.png\" preserveAspectRatio=\"none\" href=\"images/PilH.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_383_40_45&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_383_40_47\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilH.png\" preserveAspectRatio=\"none\" href=\"images/PilH.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_383_40_47&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"BtnPilH","titleValue":"BtnPilH","fallbackImg":"<img alt=\"BtnPilH\" title=\"BtnPilH\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton36.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 73 61\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(36.5 30.5)\" style=\"\">\n	<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_383_839_25\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_383_839_25&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(36.5 30.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 909.9999999999999px; top: 27.00000000000015px; width: 73px; height: 61px; z-index: 7; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj36",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnHjem",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivLogMsg( 'Action [OnMClkGoTo on BtnHjem] fired!', 4 )
    trivExitPage('hovedside.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[909.9999999999999,27.00000000000015,73,61]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":910,"y":27,"width":73,"height":61},"imgDataNormal":"images/desktop_shape36.png","imgDataOver":"images/desktop_shape36.png","imgDataDown":"images/desktop_shape36.png","imgDataDisabled":"images/desktop_shape36_disabled.png","svgDataNormal":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_383_839_25\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_383_839_25&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_383_839_27\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_383_839_27&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_383_839_29\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_383_839_29&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_383_839_31\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_383_839_31&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"BtnHjem","titleValue":"BtnHjem","fallbackImg":"<img alt=\"BtnHjem\" title=\"BtnHjem\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton384.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 101 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(50.5 21.5)\" style=\"\">\n	<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(50.5 21.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-39.13\" y=\"5.04\" fill=\"#333333\">Skjul meny</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 786.4999999999999px; top: 598.5000000000001px; width: 101px; height: 43px; z-index: 8; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj384",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnHideMeny",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnHideMeny] fired!', 4 )
    menu175.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnHideMeny] fired!', 4 )
    textbutton384.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on BtnHideMeny] fired!', 4 )
    textbutton182.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32832,0,[786.4999999999999,598.5000000000001,101,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":788,"y":600,"width":101,"height":43},"imgDataNormal":"images/desktop_shape384.png","imgDataOver":"images/desktop_shape384_over.png","imgDataDown":"images/desktop_shape384_down.png","imgDataDisabled":"images/desktop_shape384_disabled.png","svgDataNormal":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-39.13\" y=\"5.04\" fill=\"#333333\">Skjul meny</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(167, 198, 17); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-39.13\" y=\"5.04\" fill=\"#333333\">Skjul meny</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(98, 112, 31); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-39.13\" y=\"5.04\" fill=\"#333333\">Skjul meny</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-39.13\" y=\"5.04\" fill=\"#333333\">Skjul meny</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Skjul meny","titleValue":"Skjul meny","fallbackImg":"<img alt=\"BtnHideMeny\" title=\"BtnHideMeny\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton182.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 101 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(50.5 21.5)\" style=\"\">\n	<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(50.5 21.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-32.9\" y=\"5.04\" fill=\"#333333\">Vis meny</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 786.4999999999999px; top: 598.5000000000001px; width: 101px; height: 43px; z-index: 9; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj182",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnShowMeny",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on BtnShowMeny] fired!', 4 )
    menu175.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnShowMeny] fired!', 4 )
    textbutton182.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on BtnShowMeny] fired!', 4 )
    textbutton384.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[786.4999999999999,598.5000000000001,101,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":788,"y":600,"width":101,"height":43},"imgDataNormal":"images/desktop_shape182.png","imgDataOver":"images/desktop_shape182_over.png","imgDataDown":"images/desktop_shape182_down.png","imgDataDisabled":"images/desktop_shape182_disabled.png","svgDataNormal":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-32.9\" y=\"5.04\" fill=\"#333333\">Vis meny</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(167, 198, 17); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-32.9\" y=\"5.04\" fill=\"#333333\">Vis meny</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(98, 112, 31); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-32.9\" y=\"5.04\" fill=\"#333333\">Vis meny</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-32.9\" y=\"5.04\" fill=\"#333333\">Vis meny</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Vis meny","titleValue":"Vis meny","fallbackImg":"<img alt=\"BtnShowMeny\" title=\"BtnShowMeny\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
menu175.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"position: absolute; left: 0px; top: 0px; font-size: 10pt; font-family: Arial, sans-serif; color: rgb(51, 51, 51); background-color: rgb(255, 229, 153); width: 760px; height: 22px;\"><div id=\"item175_0\" style=\"position: absolute; cursor: pointer; left: 0px; top: 0px; height: 20px; width: 86px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 10px; text-align: left;\">Innledning</p></div><div id=\"item175_1\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_dyreriket.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 87px; top: 0px; height: 20px; width: 119px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 10px; text-align: left;\">Mat fra dyreriket</p></div><div id=\"item175_2\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_sjomat.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 207px; top: 0px; height: 20px; width: 135px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 10px; text-align: left;\">Bærekraftig sjømat</p></div><div id=\"item175_3\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_kortreist.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 343px; top: 0px; height: 20px; width: 99px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 10px; text-align: left;\">Kortreist mat</p></div><div id=\"item175_4\" style=\"position: absolute; cursor: pointer; left: 443px; top: 0px; height: 20px; width: 78px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 10px; text-align: left;\">Matsvinn</p></div><div id=\"item175_5\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_okologisk.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 522px; top: 0px; height: 20px; width: 108px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 10px; text-align: left;\">Økologisk mat</p></div><div id=\"item175_6\" style=\"position: absolute; cursor: pointer; left: 631px; top: 0px; height: 20px; width: 127px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 10px; text-align: left;\">Spise bærekraftig</p></div></div>",
	additionalHtml:	"<div id=\"tmenu175_0\" style=\"z-index: 9999; position: absolute; left: 40px; top: 41px; visibility: hidden; font-size: 10pt; font-family: Arial, sans-serif; color: rgb(51, 51, 51); background-color: rgb(131, 153, 27); width: 206px; height: 85px;\"><div id=\"item175_0_0\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_innledning.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 0px; top: 0px; height: 20px; width: 204px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 20px; text-align: center;\">Innledning</p></div><div id=\"item175_0_1\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_begreper.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 0px; top: 21px; height: 20px; width: 204px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 20px; text-align: center;\">Viktige begreper</p></div><div id=\"item175_0_2\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_testbegrep.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 0px; top: 42px; height: 20px; width: 204px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 20px; text-align: center;\">Test deg selv om begreper</p></div><div id=\"item175_0_3\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_butvikling.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 0px; top: 63px; height: 20px; width: 204px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 20px; text-align: center;\">Hva er bærekraftig utvikling</p></div></div><div id=\"tmenu175_4\" style=\"z-index: 9999; position: absolute; left: 483px; top: 41px; visibility: hidden; font-size: 10pt; font-family: Arial, sans-serif; color: rgb(51, 51, 51); background-color: rgb(131, 153, 27); width: 200px; height: 43px;\"><div id=\"item175_4_0\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_matsvinn.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 0px; top: 0px; height: 20px; width: 198px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 20px; text-align: center;\">Matsvinn</p></div><div id=\"item175_4_1\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    ObjLayerActionGoTo(\'#top\');\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 0px; top: 21px; height: 20px; width: 198px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 20px; text-align: center;\">Hvordan kaste mindre mat</p></div></div><div id=\"tmenu175_6\" style=\"z-index: 9999; position: absolute; left: 671px; top: 41px; visibility: hidden; font-size: 10pt; font-family: Arial, sans-serif; color: rgb(51, 51, 51); background-color: rgb(131, 153, 27); width: 207px; height: 43px;\"><div id=\"item175_6_0\" style=\"position: absolute; cursor: pointer; left: 0px; top: 0px; height: 20px; width: 205px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 20px; text-align: center;\">Merkeordninger</p></div><div id=\"item175_6_1\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_hvordanspise.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 0px; top: 21px; height: 20px; width: 205px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 20px; text-align: center;\">Hvordan spise bærekraftig?</p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 40px; top: 21px; width: 760px; height: 22px; z-index: 10; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj175",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu 1"
	},
	objData:	{"a":[0,64,0,[40,21,760,22]],"rcdOvr":{"res":0},"desktopRect":{"x":40,"y":21,"width":760,"height":22},"bgHLColor":"#83991b","textHLColor":"#333333","textColor":"#333333","bgColor":"#ffe599","resBgImg":0,"subBgHLColor":"#ffe599","subTextHLColor":"#333333","subTextColor":"#333333","subBgColor":"#83991b","subResBgImg":0}
};
og2540.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2540",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape2522.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 329 482\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(164.5 241)\" style=\"\">\n	<path d=\"M 0 0 L 328 0 L 328 481 L 0 481 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 229, 153); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-164, -240.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(164.5 241)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#333333\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 265.49999999999994px; top: 138.50000000000003px; width: 329px; height: 482px; z-index: 11; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2522",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,0,0,[265.49999999999994,138.50000000000003,329,482]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":266,"y":139,"width":329,"height":482},"btnState":"disabled","altValue":"Rectangle","titleValue":"Rectangle","fallbackImg":"<img src=\"images/desktop_shape2522.png\" alt=\"Rectangle\" title=\"Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text453.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 314px; min-height: 231px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 304px; min-height: 221px;\"><p style=\"text-align: left; line-height: 1.25; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">På grunn av faren for salmonella i andre land, har EØS en regel om at egg bare kan stemples med 28 dager fra verping. I Norge fins det ikke salmonella blant høns, men vi må likevel følge EØS-reglene. Norske egg holder seg friske og gode i flere måneder hvis de oppbevares i kjøleskap. Er du i tvil om eggene er for gamle, kan du sjekke ved å legge dem i en bolle med vann. Et ferskt egg vil synke, mens et gammelt vil flyte opp. </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 273px; top: 144px; width: 314px; height: 231px; z-index: 12;",
	cssClasses:	"",
	htmlId:		"tobj453",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Txt7"
	},
	objData:	{"a":[0,64,0,[273,144,314,231]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":273,"y":144,"width":314,"height":231},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
textbutton2523.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 62 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(31 15.5)\" style=\"\">\n	<path d=\"M 7.5 0 L 53.5 0 A 7.5 7.5 0 0 1 61 7.5 L 61 22.5 A 7.5 7.5 0 0 1 53.5 30 L 7.5 30 A 7.5 7.5 0 0 1 0 22.5 L 0 7.5 A 7.5 7.5 0 0 1 7.5 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -15) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(31 15.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-11.56\" y=\"5.04\" fill=\"#FFFFFF\">OK</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 399.5px; top: 579.5px; width: 62px; height: 31px; z-index: 13; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2523",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnOK",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnOK] fired!', 4 )
    og2540.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32832,0,[399.5,579.5,62,31]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":400,"y":580,"width":62,"height":31},"imgDataNormal":"images/desktop_shape2347.png","imgDataOver":"images/desktop_shape2347_over.png","imgDataDown":"images/desktop_shape2347_down.png","imgDataDisabled":"images/desktop_shape2347_disabled.png","svgDataNormal":"<g transform=\"translate(31 15.5)\" style=\"\">\n\t<path d=\"M 7.5 0 L 53.5 0 A 7.5 7.5 0 0 1 61 7.5 L 61 22.5 A 7.5 7.5 0 0 1 53.5 30 L 7.5 30 A 7.5 7.5 0 0 1 0 22.5 L 0 7.5 A 7.5 7.5 0 0 1 7.5 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -15) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(31 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-11.56\" y=\"5.04\" fill=\"#FFFFFF\">OK</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(31 15.5)\" style=\"\">\n\t<path d=\"M 7.5 0 L 53.5 0 A 7.5 7.5 0 0 1 61 7.5 L 61 22.5 A 7.5 7.5 0 0 1 53.5 30 L 7.5 30 A 7.5 7.5 0 0 1 0 22.5 L 0 7.5 A 7.5 7.5 0 0 1 7.5 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(44, 100, 15); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -15) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(31 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-11.56\" y=\"5.04\" fill=\"#FFFFFF\">OK</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(31 15.5)\" style=\"\">\n\t<path d=\"M 7.5 0 L 53.5 0 A 7.5 7.5 0 0 1 61 7.5 L 61 22.5 A 7.5 7.5 0 0 1 53.5 30 L 7.5 30 A 7.5 7.5 0 0 1 0 22.5 L 0 7.5 A 7.5 7.5 0 0 1 7.5 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 57, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -15) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(31 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-11.56\" y=\"5.04\" fill=\"#FFFFFF\">OK</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(31 15.5)\" style=\"\">\n\t<path d=\"M 7.5 0 L 53.5 0 A 7.5 7.5 0 0 1 61 7.5 L 61 22.5 A 7.5 7.5 0 0 1 53.5 30 L 7.5 30 A 7.5 7.5 0 0 1 0 22.5 L 0 7.5 A 7.5 7.5 0 0 1 7.5 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -15) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(31 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-11.56\" y=\"5.04\" fill=\"#FFFFFF\">OK</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"OK","titleValue":"OK","fallbackImg":"<img alt=\"BtnOK\" title=\"BtnOK\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
anim2538.rcdData.att_Desktop = 
{
	innerHtml:	"<img src=\"images/Egg2.gif\" alt=\"Egg2\" title=\"Egg2\" style=\"position: absolute; left: 0px; top: 0px; width: 309px; height: 182px; border-style: none;\">",
	cssText:	"visibility: hidden; position: absolute; left: 276px; top: 389px; width: 309px; height: 182px; z-index: 14;",
	cssClasses:	"",
	htmlId:		"tobj2538",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Egg2"
	},
	objData:	{"a":[0,131072,0,[276,389,309,182]],"rcdOvr":{"res":0},"desktopRect":{"x":276,"y":389,"width":309,"height":182},"__pubName":"anim2538","isFlash":false}
};
image553.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj553Img\" src=\"images/Bie.png\" alt=\"Bie\" title=\"Bie\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 147px; height: 107px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 8px; top: 541px; width: 147px; height: 107px; z-index: 0; cursor: pointer; transform: rotate(350deg) scaleX(-1);; behavior:url(-ms-transform.htc); -moz-transform:rotate(350deg)  ScaleX(-1); -webkit-transform:rotate(350deg)  ScaleX(-1); -o-transform:rotate(350deg)  ScaleX(-1); -ms-transform:rotate(350deg)  ScaleX(-1); filter: fliph progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.984807753012208, M12=0.1736481776669304, M21=-0.1736481776669304, M22=0.984807753012208) ; -ms-filter: fliph progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.984807753012208, M12=0.1736481776669304, M21=-0.1736481776669304, M22=0.984807753012208) ",
	cssClasses:	"",
	htmlId:		"tobj553",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Bie",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowMoveTo',actItem:function(){ trivLogMsg( 'Action [OnPageShowMoveTo on Bie] fired!', 4 )
    {   slideTo(image553, 265, 154, 9, 0);image553.bHasMoved = true;  }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkToggleVis',actItem:function(){ trivLogMsg( 'Action [OnMClkToggleVis on Bie] fired!', 4 )
    shape554.toggleVisibility(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[8,541,147,107]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":350,"anchorX":50,"anchorY":50},"desktopRect":{"x":8,"y":541,"width":147,"height":107}}
};
shape554.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 181 88\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(90.38 44)\" style=\"\">\n	<path d=\"M 22 0 L 129 0 A 22 22 0 0 1 151 22 L 151 65 A 22 22 0 0 1 129 87 L 22 87 A 22 22 0 0 1 2.95 76 L -29.25 61.69 L 0 47.85 L 0 22 A 22 22 0 0 1 22 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 229, 153); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-60.875, -43.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(105 44)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-28\" y=\"-26.42\" fill=\"#333333\">For mer</tspan>\n			<tspan x=\"-61.35\" y=\"-5.45\" fill=\"#333333\">informasjon, klikk</tspan>\n			<tspan x=\"-38.7\" y=\"15.53\" fill=\"#333333\">på de ulike</tspan>\n			<tspan x=\"-37.37\" y=\"36.5\" fill=\"#333333\">knappene.</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 409.5px; top: 151.50000000000003px; width: 181px; height: 88px; z-index: 1; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj554",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Callout Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[409.5,151.50000000000003,181,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":439,"y":152,"width":152,"height":88},"btnState":"disabled","altValue":"For mer informasjon, klikk på de ulike knappene.","titleValue":"For mer informasjon, klikk på de ulike knappene.","fallbackImg":"<img src=\"images/desktop_shape554.png\" alt=\"Callout Rounded Rectangle\" title=\"Callout Rounded Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text454.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 285px; min-height: 272px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 275px; min-height: 262px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"font-size:10pt; font-family: Arial; color: black;\"><span style=\"font-size:12pt; color: rgb(51, 51, 51);\">Selv om datostempelet er gått ut, kan melken fortsatt være god. Bruk lukt og smakssans. Melk, fløte og rømme som har gått ut på dato kan brukes i vaffelrøre eller middagsretter. Spesielt kan syrnede melkeprodukter som kefir, yoghurt og rømme holde seg godt ut over datostemplingen.</span>&nbsp;</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 288px; top: 179px; width: 285px; height: 272px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj454",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Txt8"
	},
	objData:	{"a":[0,64,0,[288,179,285,272]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":288,"y":179,"width":285,"height":272},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text452.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 311px; min-height: 256px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 301px; min-height: 246px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Arial;\">Varer med lang holdbarhet merkes \"Best før\". Er matvarene oppbevart uåpnet og ser normale ut, kan de spises lenge etter datostemplingen. Mat som lett blir dårlig, som fersk fisk, kylling og kjøttdeig, merkes med \"Siste forbruksdag\". Denne datoen bør man respektere, fordi maten kan bli helsefarlig etter siste forbruksdag. Hvis du ikke rekker å spise før datoen, så legg det i fryseren. Da forlenger du holdbarheten. </span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 275px; top: 191px; width: 311px; height: 256px; z-index: 16;",
	cssClasses:	"",
	htmlId:		"tobj452",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Txt6"
	},
	objData:	{"a":[0,64,0,[275,191,311,256]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":275,"y":191,"width":311,"height":256},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text451.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 297px; min-height: 181px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 287px; min-height: 171px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"font-size:12pt; font-family:arial; color:#000000\"><span style=\"color:#333333;\">Hold oversikt over hva du har i kjøleskap og fryser. Sjekk holdbarhetsdato og merk bokser og poser med innhold og dato hvis den ikke er i originalemballasjen. På den måten kan du unngå at maten blir stående til den er for gammel og må kastes.</span> </span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 282px; top: 207px; width: 297px; height: 181px; z-index: 17;",
	cssClasses:	"",
	htmlId:		"tobj451",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Txt5"
	},
	objData:	{"a":[0,64,0,[282,207,297,181]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":282,"y":207,"width":297,"height":181},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text448.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 294px; min-height: 193px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 284px; min-height: 183px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"color: rgb(51, 51, 51); font-size:12pt; font-family: Cambria;\"><span style=\"font-family: Arial;\">Sjekk hvordan de forskjellige matvarene skal oppbevares. Dette står vanligvis på emballasjen. Kjølevarer bør stå kortest mulig tid i romtemperatur. Pakk rester inn i lufttette bokser og kjøl ned. Fisk og kjøtt oppbevares på glassplaten nederst i kjøleskapet, for her er det kaldest.&nbsp;</span></span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 283px; top: 209px; width: 294px; height: 193px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj448",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Txt4"
	},
	objData:	{"a":[0,64,0,[283,209,294,193]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":283,"y":209,"width":294,"height":193},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text447.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 283px; min-height: 211px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 273px; min-height: 201px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Cambria;\"><span style=\"font-family: Arial;\">Med litt fantasi kan de fleste matrester bli til noe godt. Kokt pasta kan bli lunsjsalat, kjøtt og fisk kan brukes som pålegg, grønnsaker i omeletter og kokte poteter kan stekes. Husk bare på å oppbevare restene korrekt og bruk de så raskt som mulig.&nbsp;</span></span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 289px; top: 202px; width: 283px; height: 211px; z-index: 19;",
	cssClasses:	"",
	htmlId:		"tobj447",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Txt3"
	},
	objData:	{"a":[0,64,0,[289,202,283,211]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":289,"y":202,"width":283,"height":211},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text446.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 290px; min-height: 218px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 280px; min-height: 208px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size:12pt;\">Lag en handleliste hjemme før du går og handler. Der har du oversikt over hva som er i skuffer og skap. </span></p>\n\n<p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size:12pt;\">​</span></p>\n\n<p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"color: rgb(51, 51, 51); font-family: Cambria, sans-serif; font-size:12pt;\"><span style=\"font-family: Arial, sans-serif;\">Impulsinnkjøp fører ofte til at vi kjøper inn mer enn man klarer å spise opp.&nbsp;</span><span style=\"font-family: Arial, sans-serif;\">En handleliste gjør også butikkturen mer effektiv</span><span style=\"font-family: Arial, sans-serif;\">.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 285px; top: 202px; width: 290px; height: 218px; z-index: 20;",
	cssClasses:	"",
	htmlId:		"tobj446",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Txt2"
	},
	objData:	{"a":[0,64,0,[285,202,290,218]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":285,"y":202,"width":290,"height":218},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text444.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 289px; min-height: 162px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 279px; min-height: 152px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"color: rgb(51, 51, 51); font-size:12pt;\">Å kaste mindre mat er et viktig bidrag for å få ned våre klimagassutslipp og til å hindre matvaremangel i verden. Dessuten er det penger å spare på det.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 286px; top: 218px; width: 289px; height: 162px; z-index: 21;",
	cssClasses:	"",
	htmlId:		"tobj444",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Txt1"
	},
	objData:	{"a":[0,64,0,[286,218,289,162]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":286,"y":218,"width":289,"height":162},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text435.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 677px; min-height: 79px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 667px; min-height: 69px;\"><p style=\"text-align:left\"><span><b><span style=\"color: rgb(39, 78, 19); font-family: Arial, sans-serif; font-size:36pt;\">Hvordan kaste mindre mat?</span></b></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 40px; top: 70px; width: 677px; height: 79px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj435",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[40,70,677,79]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":40,"y":70,"width":677,"height":79},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
textbutton400.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 183 74\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(91.5 37)\" style=\"\">\n	<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(91.5 37)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-55.59\" y=\"5.04\" fill=\"#FFFFFF\">Spis opp maten</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 54.499999999999986px; top: 150.50000000000003px; width: 183px; height: 74px; z-index: 22; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj400",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Btn1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on Btn1] fired!', 4 )
    text444.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on Btn1] fired!', 4 )
    og443.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn1] fired!', 4 )
    text446.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn1] fired!', 4 )
    text447.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn1] fired!', 4 )
    text448.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn1] fired!', 4 )
    text451.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn1] fired!', 4 )
    text452.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn1] fired!', 4 )
    og2540.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn1] fired!', 4 )
    text454.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[54.499999999999986,150.50000000000003,183,74]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":55,"y":151,"width":183,"height":74},"imgDataNormal":"images/desktop_shape400.png","imgDataOver":"images/desktop_shape400_over.png","imgDataDown":"images/desktop_shape400_down.png","imgDataDisabled":"images/desktop_shape400_disabled.png","svgDataNormal":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-55.59\" y=\"5.04\" fill=\"#FFFFFF\">Spis opp maten</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(44, 100, 15); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-55.59\" y=\"5.04\" fill=\"#FFFFFF\">Spis opp maten</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 57, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-55.59\" y=\"5.04\" fill=\"#FFFFFF\">Spis opp maten</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-55.59\" y=\"5.04\" fill=\"#FFFFFF\">Spis opp maten</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Spis opp maten","titleValue":"Spis opp maten","fallbackImg":"<img alt=\"Btn1\" title=\"Btn1\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton430.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 183 74\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(91.5 37)\" style=\"\">\n	<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(91.5 37)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-72.5\" y=\"5.04\" fill=\"#FFFFFF\">Planlegg innkjøpene</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 54.499999999999986px; top: 253.50000000000003px; width: 183px; height: 74px; z-index: 23; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj430",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Btn2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on Btn2] fired!', 4 )
    text446.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on Btn2] fired!', 4 )
    og443.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn2] fired!', 4 )
    text444.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn2] fired!', 4 )
    text447.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn2] fired!', 4 )
    text448.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn2] fired!', 4 )
    text451.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn2] fired!', 4 )
    text452.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn2] fired!', 4 )
    og2540.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn2] fired!', 4 )
    text454.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[54.499999999999986,253.50000000000003,183,74]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":55,"y":254,"width":183,"height":74},"imgDataNormal":"images/desktop_shape430.png","imgDataOver":"images/desktop_shape430_over.png","imgDataDown":"images/desktop_shape430_down.png","imgDataDisabled":"images/desktop_shape430_disabled.png","svgDataNormal":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-72.5\" y=\"5.04\" fill=\"#FFFFFF\">Planlegg innkjøpene</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(44, 100, 15); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-72.5\" y=\"5.04\" fill=\"#FFFFFF\">Planlegg innkjøpene</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 57, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-72.5\" y=\"5.04\" fill=\"#FFFFFF\">Planlegg innkjøpene</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-72.5\" y=\"5.04\" fill=\"#FFFFFF\">Planlegg innkjøpene</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Planlegg innkjøpene","titleValue":"Planlegg innkjøpene","fallbackImg":"<img alt=\"Btn2\" title=\"Btn2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton398.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 183 74\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(91.5 37)\" style=\"\">\n	<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(91.5 37)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-67.15\" y=\"5.04\" fill=\"#FFFFFF\">Ta vare på restene</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 54.499999999999986px; top: 356.5px; width: 183px; height: 74px; z-index: 24; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj398",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Btn3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on Btn3] fired!', 4 )
    text447.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on Btn3] fired!', 4 )
    og443.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn3] fired!', 4 )
    text444.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn3] fired!', 4 )
    text446.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn3] fired!', 4 )
    text448.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn3] fired!', 4 )
    text451.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn3] fired!', 4 )
    text452.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn3] fired!', 4 )
    og2540.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn3] fired!', 4 )
    text454.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[54.499999999999986,356.5,183,74]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":55,"y":357,"width":183,"height":74},"imgDataNormal":"images/desktop_shape398.png","imgDataOver":"images/desktop_shape398_over.png","imgDataDown":"images/desktop_shape398_down.png","imgDataDisabled":"images/desktop_shape398_disabled.png","svgDataNormal":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-67.15\" y=\"5.04\" fill=\"#FFFFFF\">Ta vare på restene</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(44, 100, 15); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-67.15\" y=\"5.04\" fill=\"#FFFFFF\">Ta vare på restene</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 57, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-67.15\" y=\"5.04\" fill=\"#FFFFFF\">Ta vare på restene</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-67.15\" y=\"5.04\" fill=\"#FFFFFF\">Ta vare på restene</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Ta vare på restene","titleValue":"Ta vare på restene","fallbackImg":"<img alt=\"Btn3\" title=\"Btn3\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton425.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 183 74\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(91.5 37)\" style=\"\">\n	<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(91.5 37)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-78.7\" y=\"5.04\" fill=\"#FFFFFF\">Oppbevar maten riktig</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 54.499999999999986px; top: 459.5px; width: 183px; height: 74px; z-index: 25; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj425",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Btn4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on Btn4] fired!', 4 )
    text448.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on Btn4] fired!', 4 )
    og443.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn4] fired!', 4 )
    text444.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn4] fired!', 4 )
    text446.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn4] fired!', 4 )
    text447.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn4] fired!', 4 )
    text451.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn4] fired!', 4 )
    text452.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn4] fired!', 4 )
    og2540.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn4] fired!', 4 )
    text454.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[54.499999999999986,459.5,183,74]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":55,"y":460,"width":183,"height":74},"imgDataNormal":"images/desktop_shape425.png","imgDataOver":"images/desktop_shape425_over.png","imgDataDown":"images/desktop_shape425_down.png","imgDataDisabled":"images/desktop_shape425_disabled.png","svgDataNormal":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-78.7\" y=\"5.04\" fill=\"#FFFFFF\">Oppbevar maten riktig</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(44, 100, 15); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-78.7\" y=\"5.04\" fill=\"#FFFFFF\">Oppbevar maten riktig</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 57, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-78.7\" y=\"5.04\" fill=\"#FFFFFF\">Oppbevar maten riktig</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-78.7\" y=\"5.04\" fill=\"#FFFFFF\">Oppbevar maten riktig</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Oppbevar maten riktig","titleValue":"Oppbevar maten riktig","fallbackImg":"<img alt=\"Btn4\" title=\"Btn4\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton405.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 183 74\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(91.5 37)\" style=\"\">\n	<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(91.5 37)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-81.37\" y=\"-5.45\" fill=\"#FFFFFF\">Kontroller kjøleskap og</tspan>\n			<tspan x=\"-35.57\" y=\"15.53\" fill=\"#FFFFFF\">fryser ofte</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 621.5px; top: 150.50000000000003px; width: 183px; height: 74px; z-index: 26; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj405",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Btn5",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on Btn5] fired!', 4 )
    text451.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on Btn5] fired!', 4 )
    og443.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn5] fired!', 4 )
    text444.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn5] fired!', 4 )
    text446.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn5] fired!', 4 )
    text447.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn5] fired!', 4 )
    text448.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn5] fired!', 4 )
    text452.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn5] fired!', 4 )
    og2540.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn5] fired!', 4 )
    text454.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[621.5,150.50000000000003,183,74]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":622,"y":151,"width":183,"height":74},"imgDataNormal":"images/desktop_shape405.png","imgDataOver":"images/desktop_shape405_over.png","imgDataDown":"images/desktop_shape405_down.png","imgDataDisabled":"images/desktop_shape405_disabled.png","svgDataNormal":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-81.37\" y=\"-5.45\" fill=\"#FFFFFF\">Kontroller kjøleskap og</tspan>\n\t\t\t<tspan x=\"-35.57\" y=\"15.53\" fill=\"#FFFFFF\">fryser ofte</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(44, 100, 15); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-81.37\" y=\"-5.45\" fill=\"#FFFFFF\">Kontroller kjøleskap og</tspan>\n\t\t\t<tspan x=\"-35.57\" y=\"15.53\" fill=\"#FFFFFF\">fryser ofte</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 57, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-81.37\" y=\"-5.45\" fill=\"#FFFFFF\">Kontroller kjøleskap og</tspan>\n\t\t\t<tspan x=\"-35.57\" y=\"15.53\" fill=\"#FFFFFF\">fryser ofte</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-81.37\" y=\"-5.45\" fill=\"#FFFFFF\">Kontroller kjøleskap og</tspan>\n\t\t\t<tspan x=\"-35.57\" y=\"15.53\" fill=\"#FFFFFF\">fryser ofte</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Kontroller kjøleskap og fryser ofte","titleValue":"Kontroller kjøleskap og fryser ofte","fallbackImg":"<img alt=\"Btn5\" title=\"Btn5\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton410.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 183 74\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(91.5 37)\" style=\"\">\n	<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(91.5 37)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-81.27\" y=\"-5.45\" fill=\"#FFFFFF\">Kontroller \"Best før\" og</tspan>\n			<tspan x=\"-67.93\" y=\"15.53\" fill=\"#FFFFFF\">\"Siste forbruksdag\"</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 621.5px; top: 253.50000000000003px; width: 183px; height: 74px; z-index: 27; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj410",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Btn6",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on Btn6] fired!', 4 )
    text452.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on Btn6] fired!', 4 )
    og443.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn6] fired!', 4 )
    text444.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn6] fired!', 4 )
    text446.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn6] fired!', 4 )
    text447.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn6] fired!', 4 )
    text448.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn6] fired!', 4 )
    text451.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn6] fired!', 4 )
    og2540.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn6] fired!', 4 )
    text454.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[621.5,253.50000000000003,183,74]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":622,"y":254,"width":183,"height":74},"imgDataNormal":"images/desktop_shape410.png","imgDataOver":"images/desktop_shape410_over.png","imgDataDown":"images/desktop_shape410_down.png","imgDataDisabled":"images/desktop_shape410_disabled.png","svgDataNormal":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-81.27\" y=\"-5.45\" fill=\"#FFFFFF\">Kontroller \"Best før\" og</tspan>\n\t\t\t<tspan x=\"-67.93\" y=\"15.53\" fill=\"#FFFFFF\">\"Siste forbruksdag\"</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(44, 100, 15); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-81.27\" y=\"-5.45\" fill=\"#FFFFFF\">Kontroller \"Best før\" og</tspan>\n\t\t\t<tspan x=\"-67.93\" y=\"15.53\" fill=\"#FFFFFF\">\"Siste forbruksdag\"</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 57, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-81.27\" y=\"-5.45\" fill=\"#FFFFFF\">Kontroller \"Best før\" og</tspan>\n\t\t\t<tspan x=\"-67.93\" y=\"15.53\" fill=\"#FFFFFF\">\"Siste forbruksdag\"</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-81.27\" y=\"-5.45\" fill=\"#FFFFFF\">Kontroller \"Best før\" og</tspan>\n\t\t\t<tspan x=\"-67.93\" y=\"15.53\" fill=\"#FFFFFF\">\"Siste forbruksdag\"</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Kontroller \"Best før\" og \"Siste forbruksdag\"","titleValue":"Kontroller \"Best før\" og \"Siste forbruksdag\"","fallbackImg":"<img alt=\"Btn6\" title=\"Btn6\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton420.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 183 74\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(91.5 37)\" style=\"\">\n	<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(91.5 37)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-74.27\" y=\"-5.45\" fill=\"#FFFFFF\">Spis eggene selv om</tspan>\n			<tspan x=\"-76.06\" y=\"15.53\" fill=\"#FFFFFF\">de har gått ut på dato</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 621.5px; top: 356.5px; width: 183px; height: 74px; z-index: 28; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj420",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Btn7",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn7] fired!', 4 )
    og443.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on Btn7] fired!', 4 )
    og2540.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn7] fired!', 4 )
    text444.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn7] fired!', 4 )
    text446.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn7] fired!', 4 )
    text447.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn7] fired!', 4 )
    text448.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn7] fired!', 4 )
    text451.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn7] fired!', 4 )
    text452.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn7] fired!', 4 )
    text454.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[621.5,356.5,183,74]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":622,"y":357,"width":183,"height":74},"imgDataNormal":"images/desktop_shape420.png","imgDataOver":"images/desktop_shape420_over.png","imgDataDown":"images/desktop_shape420_down.png","imgDataDisabled":"images/desktop_shape420_disabled.png","svgDataNormal":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-74.27\" y=\"-5.45\" fill=\"#FFFFFF\">Spis eggene selv om</tspan>\n\t\t\t<tspan x=\"-76.06\" y=\"15.53\" fill=\"#FFFFFF\">de har gått ut på dato</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(44, 100, 15); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-74.27\" y=\"-5.45\" fill=\"#FFFFFF\">Spis eggene selv om</tspan>\n\t\t\t<tspan x=\"-76.06\" y=\"15.53\" fill=\"#FFFFFF\">de har gått ut på dato</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 57, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-74.27\" y=\"-5.45\" fill=\"#FFFFFF\">Spis eggene selv om</tspan>\n\t\t\t<tspan x=\"-76.06\" y=\"15.53\" fill=\"#FFFFFF\">de har gått ut på dato</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-74.27\" y=\"-5.45\" fill=\"#FFFFFF\">Spis eggene selv om</tspan>\n\t\t\t<tspan x=\"-76.06\" y=\"15.53\" fill=\"#FFFFFF\">de har gått ut på dato</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Spis eggene selv om de har gått ut på dato","titleValue":"Spis eggene selv om de har gått ut på dato","fallbackImg":"<img alt=\"Btn7\" title=\"Btn7\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton415.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 183 74\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(91.5 37)\" style=\"\">\n	<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(91.5 37)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-73.36\" y=\"-5.45\" fill=\"#FFFFFF\">Bruk melk også etter</tspan>\n			<tspan x=\"-45.8\" y=\"15.53\" fill=\"#FFFFFF\">datostemplet</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 621.5px; top: 459.5px; width: 183px; height: 74px; z-index: 29; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj415",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Btn8",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on Btn8] fired!', 4 )
    text454.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on Btn8] fired!', 4 )
    og443.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn8] fired!', 4 )
    text444.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn8] fired!', 4 )
    text446.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn8] fired!', 4 )
    text447.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn8] fired!', 4 )
    text448.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn8] fired!', 4 )
    text451.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn8] fired!', 4 )
    text452.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on Btn8] fired!', 4 )
    og2540.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[621.5,459.5,183,74]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":622,"y":460,"width":183,"height":74},"imgDataNormal":"images/desktop_shape415.png","imgDataOver":"images/desktop_shape415_over.png","imgDataDown":"images/desktop_shape415_down.png","imgDataDisabled":"images/desktop_shape415_disabled.png","svgDataNormal":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-73.36\" y=\"-5.45\" fill=\"#FFFFFF\">Bruk melk også etter</tspan>\n\t\t\t<tspan x=\"-45.8\" y=\"15.53\" fill=\"#FFFFFF\">datostemplet</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(44, 100, 15); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-73.36\" y=\"-5.45\" fill=\"#FFFFFF\">Bruk melk også etter</tspan>\n\t\t\t<tspan x=\"-45.8\" y=\"15.53\" fill=\"#FFFFFF\">datostemplet</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 57, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-73.36\" y=\"-5.45\" fill=\"#FFFFFF\">Bruk melk også etter</tspan>\n\t\t\t<tspan x=\"-45.8\" y=\"15.53\" fill=\"#FFFFFF\">datostemplet</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(91.5 37)\" style=\"\">\n\t<path d=\"M 18.25 0 L 163.75 0 A 18.25 18.25 0 0 1 182 18.25 L 182 54.75 A 18.25 18.25 0 0 1 163.75 73 L 18.25 73 A 18.25 18.25 0 0 1 0 54.75 L 0 18.25 A 18.25 18.25 0 0 1 18.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -36.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-73.36\" y=\"-5.45\" fill=\"#FFFFFF\">Bruk melk også etter</tspan>\n\t\t\t<tspan x=\"-45.8\" y=\"15.53\" fill=\"#FFFFFF\">datostemplet</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Bruk melk også etter datostemplet","titleValue":"Bruk melk også etter datostemplet","fallbackImg":"<img alt=\"Btn8\" title=\"Btn8\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image396.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj396Img\" src=\"images/Soplebotte.png\" alt=\"Soplebotte\" title=\"Soplebotte\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 300px; height: 294px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 280px; top: 244px; width: 300px; height: 294px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj396",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Soplebotte"
	},
	objData:	{"a":[0,288,0,[280,244,300,294]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":280,"y":244,"width":300,"height":294}}
};
og443.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og443",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape440.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 329 384\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(164.5 192)\" style=\"\">\n	<path d=\"M 0 0 L 328 0 L 328 383 L 0 383 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 229, 153); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-164, -191.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(164.5 192)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#333333\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 265.49999999999994px; top: 149.50000000000003px; width: 329px; height: 384px; z-index: 4; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj440",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,0,0,[265.49999999999994,149.50000000000003,329,384]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":266,"y":150,"width":329,"height":384},"btnState":"disabled","altValue":"Rectangle","titleValue":"Rectangle","fallbackImg":"<img src=\"images/desktop_shape440.png\" alt=\"Rectangle\" title=\"Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton441.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 62 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(31 15.5)\" style=\"\">\n	<path d=\"M 7.5 0 L 53.5 0 A 7.5 7.5 0 0 1 61 7.5 L 61 22.5 A 7.5 7.5 0 0 1 53.5 30 L 7.5 30 A 7.5 7.5 0 0 1 0 22.5 L 0 7.5 A 7.5 7.5 0 0 1 7.5 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -15) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(31 15.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-11.56\" y=\"5.04\" fill=\"#FFFFFF\">OK</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 399.5px; top: 487.5px; width: 62px; height: 31px; z-index: 30; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj441",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnOK",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnOK] fired!', 4 )
    og443.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnOK] fired!', 4 )
    text444.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnOK] fired!', 4 )
    text446.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnOK] fired!', 4 )
    text447.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnOK] fired!', 4 )
    text448.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnOK] fired!', 4 )
    text451.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnOK] fired!', 4 )
    text452.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnOK] fired!', 4 )
    text453.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnOK] fired!', 4 )
    text454.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32832,0,[399.5,487.5,62,31]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":400,"y":488,"width":62,"height":31},"imgDataNormal":"images/desktop_shape2347.png","imgDataOver":"images/desktop_shape2347_over.png","imgDataDown":"images/desktop_shape2347_down.png","imgDataDisabled":"images/desktop_shape2347_disabled.png","svgDataNormal":"<g transform=\"translate(31 15.5)\" style=\"\">\n\t<path d=\"M 7.5 0 L 53.5 0 A 7.5 7.5 0 0 1 61 7.5 L 61 22.5 A 7.5 7.5 0 0 1 53.5 30 L 7.5 30 A 7.5 7.5 0 0 1 0 22.5 L 0 7.5 A 7.5 7.5 0 0 1 7.5 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -15) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(31 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-11.56\" y=\"5.04\" fill=\"#FFFFFF\">OK</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(31 15.5)\" style=\"\">\n\t<path d=\"M 7.5 0 L 53.5 0 A 7.5 7.5 0 0 1 61 7.5 L 61 22.5 A 7.5 7.5 0 0 1 53.5 30 L 7.5 30 A 7.5 7.5 0 0 1 0 22.5 L 0 7.5 A 7.5 7.5 0 0 1 7.5 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(44, 100, 15); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -15) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(31 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-11.56\" y=\"5.04\" fill=\"#FFFFFF\">OK</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(31 15.5)\" style=\"\">\n\t<path d=\"M 7.5 0 L 53.5 0 A 7.5 7.5 0 0 1 61 7.5 L 61 22.5 A 7.5 7.5 0 0 1 53.5 30 L 7.5 30 A 7.5 7.5 0 0 1 0 22.5 L 0 7.5 A 7.5 7.5 0 0 1 7.5 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 57, 19); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -15) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(31 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-11.56\" y=\"5.04\" fill=\"#FFFFFF\">OK</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(31 15.5)\" style=\"\">\n\t<path d=\"M 7.5 0 L 53.5 0 A 7.5 7.5 0 0 1 61 7.5 L 61 22.5 A 7.5 7.5 0 0 1 53.5 30 L 7.5 30 A 7.5 7.5 0 0 1 0 22.5 L 0 7.5 A 7.5 7.5 0 0 1 7.5 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 78, 19); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -15) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(31 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-11.56\" y=\"5.04\" fill=\"#FFFFFF\">OK</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"OK","titleValue":"OK","fallbackImg":"<img alt=\"BtnOK\" title=\"BtnOK\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":1,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	15
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Bakgrunn%2C%201009x662.jpg","images/BtnHjem.png","images/PilH.png","images/PilV.png","images/Bie.png","images/Soplebotte.png","images/Egg2.gif"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; background-image: url("images/Bakgrunn%2C%201009x662.jpg"); background-size: auto; visibility: hidden; background-repeat: no-repeat;'
rcdObj.backgrd_Desktop = ["#FFFFFF","url(images/Bakgrunn%2C%201009x662.jpg)",1009,662,1];
