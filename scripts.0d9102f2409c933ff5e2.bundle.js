!function(e,n,t){function s(e,n){return typeof e===n}var o=[],a=[],r={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){a.push({name:e,fn:n,options:t})},addAsyncTest:function(e){a.push({name:null,fn:e})}},i=function(){};i.prototype=r,i=new i,i.addTest("eventlistener","addEventListener"in e),i.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}),i.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(e){return!1}});var l=n.documentElement,c="svg"===l.nodeName.toLowerCase();i.addTest("queryselector","querySelector"in n&&"querySelectorAll"in n),function(){var e,n,t,r,l,c,f;for(var u in a)if(a.hasOwnProperty(u)){if(e=[],n=a[u],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=s(n.fn,"function")?n.fn():n.fn,l=0;l<e.length;l++)c=e[l],f=c.split("."),1===f.length?i[f[0]]=r:(!i[f[0]]||i[f[0]]instanceof Boolean||(i[f[0]]=new Boolean(i[f[0]])),i[f[0]][f[1]]=r),o.push((r?"":"no-")+f.join("-"))}}(),function(e){var n=l.className,t=i._config.classPrefix||"";if(c&&(n=n.baseVal),i._config.enableJSClass){var s=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(s,"$1"+t+"js$2")}i._config.enableClasses&&(n+=" "+t+e.join(" "+t),c?l.className.baseVal=n:l.className=n)}(o),delete r.addTest,delete r.addAsyncTest;for(var f=0;f<i._q.length;f++)i._q[f]();e.Modernizr=i}(window,document),function(e,n,t,s,o){e[s]=e[s]||[],e[s].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var a=n.getElementsByTagName(t)[0],r=n.createElement(t);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-TF7QP5M",a.parentNode.insertBefore(r,a)}(window,document,"script","dataLayer");