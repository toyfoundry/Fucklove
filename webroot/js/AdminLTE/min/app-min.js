function fix_sidebar(){$("body").hasClass("fixed")&&$(".sidebar").slimscroll({height:$(window).height()-$(".header").height()+"px",color:"rgba(0,0,0,0.2)"})}var left_side_width=220;$(function(){"use strict";function e(){var e=$(window).height()-$("body > .header").height()-($("body > .footer").outerHeight()||0);$(".wrapper").css("min-height",e+"px");var t=$(".wrapper").height();t>e?$(".left-side, html, body").css("min-height",t+"px"):$(".left-side, html, body").css("min-height",e+"px")}$("[data-toggle='offcanvas']").click(function(e){e.preventDefault(),$(window).width()<=992?($(".row-offcanvas").toggleClass("active"),$(".left-side").removeClass("collapse-left"),$(".right-side").removeClass("strech"),$(".row-offcanvas").toggleClass("relative")):($(".left-side").toggleClass("collapse-left"),$(".right-side").toggleClass("strech"))}),$(".btn").bind("touchstart",function(){$(this).addClass("hover")}).bind("touchend",function(){$(this).removeClass("hover")}),$("[data-toggle='tooltip']").tooltip(),$("[data-widget='collapse']").click(function(){var e=$(this).parents(".box").first(),t=e.find(".box-body, .box-footer");e.hasClass("collapsed-box")?(e.removeClass("collapsed-box"),$(this).children(".fa-plus").removeClass("fa-plus").addClass("fa-minus"),t.slideDown()):(e.addClass("collapsed-box"),$(this).children(".fa-minus").removeClass("fa-minus").addClass("fa-plus"),t.slideUp())}),$(".navbar .menu").slimscroll({height:"125px",alwaysVisible:!1,size:"3px"}).css("width","100%"),$('.btn-group[data-toggle="btn-toggle"]').each(function(){var e=$(this);$(this).find(".btn").click(function(t){e.find(".btn.active").removeClass("active"),$(this).addClass("active"),t.preventDefault()})}),$("[data-widget='remove']").click(function(){var e=$(this).parents(".box").first();e.slideUp()}),$(".sidebar .treeview").tree(),e(),$(".wrapper").resize(function(){e(),fix_sidebar()}),fix_sidebar(),$("input[type='checkbox']:not(.simple), input[type='radio']:not(.simple)").iCheck({checkboxClass:"icheckbox_minimal",radioClass:"iradio_minimal"})}),function($){"use strict";$.fn.tree=function(){return this.each(function(){var e=$(this).children("a").first(),t=$(this).children(".treeview-menu").first(),i=$(this).hasClass("active");i&&(t.show(),e.children(".fa-angle-left").first().removeClass("fa-angle-left").addClass("fa-angle-down")),e.click(function(a){a.preventDefault(),i?(t.slideUp(),i=!1,e.children(".fa-angle-down").first().removeClass("fa-angle-down").addClass("fa-angle-left"),e.parent("li").removeClass("active")):(t.slideDown(),i=!0,e.children(".fa-angle-left").first().removeClass("fa-angle-left").addClass("fa-angle-down"),e.parent("li").addClass("active"))}),t.find("li > a").each(function(){var e=parseInt($(this).css("margin-left"))+10;$(this).css({"margin-left":e+"px"})})})}}(jQuery),function($,e,t){function i(){o=e[r](function(){a.each(function(){var e=$(this),t=e.width(),i=e.height(),a=$.data(this,l);(t!==a.w||i!==a.h)&&e.trigger(n,[a.w=t,a.h=i])}),i()},s[c])}var a=$([]),s=$.resize=$.extend($.resize,{}),o,r="setTimeout",n="resize",l=n+"-special-event",c="delay",d="throttleWindow";s[c]=250,s[d]=!0,$.event.special[n]={setup:function(){if(!s[d]&&this[r])return!1;var e=$(this);a=a.add(e),$.data(this,l,{w:e.width(),h:e.height()}),1===a.length&&i()},teardown:function(){if(!s[d]&&this[r])return!1;var e=$(this);a=a.not(e),e.removeData(l),a.length||clearTimeout(o)},add:function(e){function i(e,i,s){var o=$(this),r=$.data(this,l);r.w=i!==t?i:o.width(),r.h=s!==t?s:o.height(),a.apply(this,arguments)}if(!s[d]&&this[r])return!1;var a;return $.isFunction(e)?(a=e,i):(a=e.handler,void(e.handler=i))}}}(jQuery,this),function(e){jQuery.fn.extend({slimScroll:function(i){var a=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"0px",railBorderRadius:"0px"},i);return this.each(function(){function s(t){if(d){t=t||window.event;var i=0;t.wheelDelta&&(i=-t.wheelDelta/120),t.detail&&(i=t.detail/3),e(t.target||t.srcTarget||t.srcElement).closest("."+a.wrapperClass).is(C.parent())&&o(i,!0),t.preventDefault&&!w&&t.preventDefault(),w||(t.returnValue=!1)}}function o(e,t,i){w=!1;var s=e,o=C.outerHeight()-x.outerHeight();t&&(s=parseInt(x.css("top"))+e*parseInt(a.wheelStep)/100*x.outerHeight(),s=Math.min(Math.max(s,0),o),s=e>0?Math.ceil(s):Math.floor(s),x.css({top:s+"px"})),v=parseInt(x.css("top"))/(C.outerHeight()-x.outerHeight()),s=v*(C[0].scrollHeight-C.outerHeight()),i&&(s=e,e=s/C[0].scrollHeight*C.outerHeight(),e=Math.min(Math.max(e,0),o),x.css({top:e+"px"})),C.scrollTop(s),C.trigger("slimscrolling",~~s),l(),c()}function r(){window.addEventListener?(this.addEventListener("DOMMouseScroll",s,!1),this.addEventListener("mousewheel",s,!1),this.addEventListener("MozMousePixelScroll",s,!1)):document.attachEvent("onmousewheel",s)}function n(){g=Math.max(C.outerHeight()/C[0].scrollHeight*C.outerHeight(),m),x.css({height:g+"px"});var e=g==C.outerHeight()?"none":"block";x.css({display:e})}function l(){n(),clearTimeout(f),v==~~v?(w=a.allowPageScroll,b!=v&&C.trigger("slimscroll",0==~~v?"top":"bottom")):w=!1,b=v,g>=C.outerHeight()?w=!0:(x.stop(!0,!0).fadeIn("fast"),a.railVisible&&k.stop(!0,!0).fadeIn("fast"))}function c(){a.alwaysVisible||(f=setTimeout(function(){a.disableFadeOut&&d||h||u||(x.fadeOut("slow"),k.fadeOut("slow"))},1e3))}var d,h,u,f,p,g,v,b,m=30,w=!1,C=e(this);if(C.parent().hasClass(a.wrapperClass)){var y=C.scrollTop(),x=C.parent().find("."+a.barClass),k=C.parent().find("."+a.railClass);if(n(),e.isPlainObject(i)){if("height"in i&&"auto"==i.height){C.parent().css("height","auto"),C.css("height","auto");var H=C.parent().parent().height();C.parent().css("height",H),C.css("height",H)}if("scrollTo"in i)y=parseInt(a.scrollTo);else if("scrollBy"in i)y+=parseInt(a.scrollBy);else if("destroy"in i)return x.remove(),k.remove(),void C.unwrap();o(y,!1,!0)}}else{a.height="auto"==a.height?C.parent().height():a.height,y=e("<div></div>").addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height}),C.css({overflow:"hidden",width:a.width,height:a.height});var k=e("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),x=e("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),H="right"==a.position?{right:a.distance}:{left:a.distance};k.css(H),x.css(H),C.wrap(y),C.parent().append(x),C.parent().append(k),a.railDraggable&&x.bind("mousedown",function(i){var a=e(document);return u=!0,t=parseFloat(x.css("top")),pageY=i.pageY,a.bind("mousemove.slimscroll",function(e){currTop=t+e.pageY-pageY,x.css("top",currTop),o(0,x.position().top,!1)}),a.bind("mouseup.slimscroll",function(e){u=!1,c(),a.unbind(".slimscroll")}),!1}).bind("selectstart.slimscroll",function(e){return e.stopPropagation(),e.preventDefault(),!1}),k.hover(function(){l()},function(){c()}),x.hover(function(){h=!0},function(){h=!1}),C.hover(function(){d=!0,l(),c()},function(){d=!1,c()}),C.bind("touchstart",function(e,t){e.originalEvent.touches.length&&(p=e.originalEvent.touches[0].pageY)}),C.bind("touchmove",function(e){w||e.originalEvent.preventDefault(),e.originalEvent.touches.length&&(o((p-e.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),p=e.originalEvent.touches[0].pageY)}),n(),"bottom"===a.start?(x.css({top:C.outerHeight()-x.outerHeight()}),o(0,!0)):"top"!==a.start&&(o(e(a.start).position().top,null,!0),a.alwaysVisible||x.hide()),r()}}),this}}),jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})}(jQuery),function(e){function t(e,t,s){var o=e[0],r=/er/.test(s)?g:/bl/.test(s)?f:h,n=s==v?{checked:o[h],disabled:o[f],indeterminate:"true"==e.attr(g)||"false"==e.attr(p)}:o[r];if(/^(ch|di|in)/.test(s)&&!n)i(e,r);else if(/^(un|en|de)/.test(s)&&n)a(e,r);else if(s==v)for(r in n)n[r]?i(e,r,!0):a(e,r,!0);else t&&"toggle"!=s||(t||e[C]("ifClicked"),n?o[b]!==d&&a(e,r):i(e,r))}function i(t,i,s){var v=t[0],C=t.parent(),y=i==h,k=i==g,H=i==f,D=k?p:y?u:"enabled",S=o(t,D+r(v[b])),M=o(t,i+r(v[b]));if(!0!==v[i]){if(!s&&i==h&&v[b]==d&&v.name){var T=t.closest("form"),z='input[name="'+v.name+'"]',z=T.length?T.find(z):e(z);z.each(function(){this!==v&&e(this).data(l)&&a(e(this),i)})}k?(v[i]=!0,v[h]&&a(t,h,"force")):(s||(v[i]=!0),y&&v[g]&&a(t,g,!1)),n(t,y,i,s)}v[f]&&o(t,x,!0)&&C.find("."+c).css(x,"default"),C[m](M||o(t,i)||""),H?C.attr("aria-disabled","true"):C.attr("aria-checked",k?"mixed":"true"),C[w](S||o(t,D)||"")}function a(e,t,i){var a=e[0],s=e.parent(),l=t==h,d=t==g,v=t==f,C=d?p:l?u:"enabled",y=o(e,C+r(a[b])),k=o(e,t+r(a[b]));!1!==a[t]&&((d||!i||"force"==i)&&(a[t]=!1),n(e,l,C,i)),!a[f]&&o(e,x,!0)&&s.find("."+c).css(x,"pointer"),s[w](k||o(e,t)||""),v?s.attr("aria-disabled","false"):s.attr("aria-checked","false"),s[m](y||o(e,C)||"")}function s(t,i){t.data(l)&&(t.parent().html(t.attr("style",t.data(l).s||"")),i&&t[C](i),t.off(".i").unwrap(),e(y+'[for="'+t[0].id+'"]').add(t.closest(y)).off(".i"))}function o(e,t,i){return e.data(l)?e.data(l).o[t+(i?"":"Class")]:void 0}function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}function n(e,t,i,a){a||(t&&e[C]("ifToggled"),e[C]("ifChanged")[C]("if"+r(i)))}var l="iCheck",c=l+"-helper",d="radio",h="checked",u="un"+h,f="disabled",p="determinate",g="in"+p,v="update",b="type",m="addClass",w="removeClass",C="trigger",y="label",x="cursor",k=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);e.fn[l]=function(o,r){var n='input[type="checkbox"], input[type="'+d+'"]',u=e(),p=function(t){t.each(function(){var t=e(this);u=u.add(t.is(n)?t:t.find(n))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(o))return o=o.toLowerCase(),p(this),u.each(function(){var i=e(this);"destroy"==o?s(i,"ifDestroyed"):t(i,!0,o),e.isFunction(r)&&r()});if("object"!=typeof o&&o)return this;var x=e.extend({checkedClass:h,disabledClass:f,indeterminateClass:g,labelHover:!0,aria:!1},o),H=x.handle,D=x.hoverClass||"hover",S=x.focusClass||"focus",M=x.activeClass||"active",T=!!x.labelHover,z=x.labelHoverClass||"hover",E=0|(""+x.increaseArea).replace("%","");return("checkbox"==H||H==d)&&(n='input[type="'+H+'"]'),-50>E&&(E=-50),p(this),u.each(function(){var o=e(this);s(o);var r=this,n=r.id,u=-E+"%",p=100+2*E+"%",p={position:"absolute",top:u,left:u,display:"block",width:p,height:p,margin:0,padding:0,background:"#fff",border:0,opacity:0},u=k?{position:"absolute",visibility:"hidden"}:E?p:{position:"absolute",opacity:0},g="checkbox"==r[b]?x.checkboxClass||"icheckbox":x.radioClass||"i"+d,H=e(y+'[for="'+n+'"]').add(o.closest(y)),I=!!x.aria,R=l+"-"+Math.random().toString(36).replace("0.",""),V='<div class="'+g+'" '+(I?'role="'+r[b]+'" ':"");H.length&&I&&H.each(function(){V+='aria-labelledby="',this.id?V+=this.id:(this.id=R,V+=R),V+='"'}),V=o.wrap(V+"/>")[C]("ifCreated").parent().append(x.insert),p=e('<ins class="'+c+'"/>').css(p).appendTo(V),o.data(l,{o:x,s:o.attr("style")}).css(u),x.inheritClass&&V[m](r.className||""),x.inheritID&&n&&V.attr("id",l+"-"+n),"static"==V.css("position")&&V.css("position","relative"),t(o,!0,v),H.length&&H.on("click.i mouseover.i mouseout.i touchbegin.i touchend.i",function(i){var a=i[b],s=e(this);if(!r[f]){if("click"==a){if(e(i.target).is("a"))return;t(o,!1,!0)}else T&&(/ut|nd/.test(a)?(V[w](D),s[w](z)):(V[m](D),s[m](z)));if(!k)return!1;i.stopPropagation()}}),o.on("click.i focus.i blur.i keyup.i keydown.i keypress.i",function(e){var t=e[b];return e=e.keyCode,"click"==t?!1:"keydown"==t&&32==e?(r[b]==d&&r[h]||(r[h]?a(o,h):i(o,h)),!1):void("keyup"==t&&r[b]==d?!r[h]&&i(o,h):/us|ur/.test(t)&&V["blur"==t?w:m](S))}),p.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i",function(e){var i=e[b],a=/wn|up/.test(i)?M:D;if(!r[f]){if("click"==i?t(o,!1,!0):(/wn|er|in/.test(i)?V[m](a):V[w](a+" "+M),H.length&&T&&a==D&&H[/ut|nd/.test(i)?w:m](z)),!k)return!1;e.stopPropagation()}})})}}(window.jQuery||window.Zepto);