(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,mq='com.google.gwt.core.client.',nq='com.google.gwt.lang.',oq='com.google.gwt.user.client.',pq='com.google.gwt.user.client.impl.',qq='com.google.gwt.user.client.ui.',rq='com.manning.gwtip.javascript.scriptaculous.client.',sq='com.manning.gwtip.scriptaculous.client.',tq='java.lang.',uq='java.util.';function lq(){}
function xk(a){return this===a;}
function yk(){return fl(this);}
function vk(){}
_=vk.prototype={};_.eQ=xk;_.hC=yk;_.tI=1;var o=null;function r(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
function s(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
function t(){return ++u;}
var u=0;function x(b,a){if(!nb(a,2)){return false;}return B(b,mb(a,2));}
function y(a){return r(a);}
function z(){return [];}
function A(){return {};}
function C(a){return x(this,a);}
function B(a,b){return a===b;}
function D(){return y(this);}
function v(){}
_=v.prototype=new vk();_.eQ=C;_.hC=D;_.tI=7;function F(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function bb(a,b,c){return a[b]=c;}
function cb(b,a){return b[a];}
function eb(b,a){return b[a];}
function db(a){return a.length;}
function gb(e,d,c,b,a){return fb(e,d,c,b,0,db(b),a);}
function fb(j,i,g,c,e,a,b){var d,f,h;if((f=cb(c,e))<0){throw new tk();}h=F(new E(),f,cb(i,e),cb(g,e),j);++e;if(e<a){j=Ek(j,1);for(d=0;d<f;++d){bb(h,d,fb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){bb(h,d,b);}}return h;}
function hb(f,e,c,g){var a,b,d;b=db(g);d=F(new E(),b,e,c,f);for(a=0;a<b;++a){bb(d,a,eb(g,a));}return d;}
function ib(a,b,c){if(c!==null&&a.b!=0&& !nb(c,a.b)){throw new Bj();}return bb(a,b,c);}
function E(){}
_=E.prototype=new vk();_.tI=0;function lb(b,a){return !(!(b&&qb[b][a]));}
function mb(b,a){if(b!=null)lb(b.tI,a)||pb();return b;}
function nb(b,a){return b!=null&&lb(b.tI,a);}
function pb(){throw new gk();}
function ob(a){if(a!==null){throw new gk();}return a;}
function rb(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var qb;function vb(){vb=lq;lc=rn(new pn());{hc=new sd();xd(hc);}}
function wb(b,a){vb();ae(hc,b,a);}
function xb(a,b){vb();return vd(hc,a,b);}
function yb(){vb();return ce(hc,'div');}
function zb(){vb();return ce(hc,'img');}
function Ab(){vb();return ce(hc,'tbody');}
function Bb(){vb();return ce(hc,'td');}
function Cb(){vb();return ce(hc,'tr');}
function Db(){vb();return ce(hc,'table');}
function ac(b,a,d){vb();var c;c=o;{Fb(b,a,d);}}
function Fb(b,a,c){vb();var d;if(a===kc){if(cc(b)==8192){kc=null;}}d=Eb;Eb=b;try{c.y(b);}finally{Eb=d;}}
function bc(b,a){vb();de(hc,b,a);}
function cc(a){vb();return ee(hc,a);}
function dc(a){vb();Cd(hc,a);}
function ec(a){vb();return fe(hc,a);}
function fc(a){vb();return ge(hc,a);}
function gc(a){vb();return Dd(hc,a);}
function ic(a){vb();var b,c;c=true;if(lc.b>0){b=ob(vn(lc,lc.b-1));if(!(c=null.hb())){bc(a,true);dc(a);}}return c;}
function jc(b,a){vb();he(hc,b,a);}
function mc(a,b,c){vb();ie(hc,a,b,c);}
function nc(a,b){vb();je(hc,a,b);}
function oc(a,b){vb();ke(hc,a,b);}
function pc(a,b){vb();le(hc,a,b);}
function qc(b,a,c){vb();me(hc,b,a,c);}
function rc(a,b){vb();zd(hc,a,b);}
var Eb=null,hc=null,kc=null,lc;function uc(a){if(nb(a,4)){return xb(this,mb(a,4));}return x(rb(this,sc),a);}
function vc(){return y(rb(this,sc));}
function sc(){}
_=sc.prototype=new v();_.eQ=uc;_.hC=vc;_.tI=8;function zc(a){return x(rb(this,wc),a);}
function Ac(){return y(rb(this,wc));}
function wc(){}
_=wc.prototype=new v();_.eQ=zc;_.hC=Ac;_.tI=9;function ad(){ad=lq;cd=rn(new pn());{bd();}}
function bd(){ad();gd(new Cc());}
var cd;function Ec(){while((ad(),cd).b>0){ob(vn((ad(),cd),0)).hb();}}
function Fc(){return null;}
function Cc(){}
_=Cc.prototype=new vk();_.ab=Ec;_.bb=Fc;_.tI=10;function fd(){fd=lq;hd=rn(new pn());pd=rn(new pn());{ld();}}
function gd(a){fd();sn(hd,a);}
function id(){fd();var a,b;for(a=Cl(hd);vl(a);){b=mb(wl(a),5);b.ab();}}
function jd(){fd();var a,b,c,d;d=null;for(a=Cl(hd);vl(a);){b=mb(wl(a),5);c=b.bb();{d=c;}}return d;}
function kd(){fd();var a,b;for(a=Cl(pd);vl(a);){b=ob(wl(a));null.hb();}}
function ld(){fd();__gwt_initHandlers(function(){od();},function(){return nd();},function(){md();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function md(){fd();var a;a=o;{id();}}
function nd(){fd();var a;a=o;{return jd();}}
function od(){fd();var a;a=o;{kd();}}
var hd,pd;function ae(c,b,a){b.appendChild(a);}
function ce(b,a){return $doc.createElement(a);}
function de(c,b,a){b.cancelBubble=a;}
function ee(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function fe(b,a){return a.__eventBits||0;}
function ge(b,a){return a.src;}
function he(c,b,a){b.removeChild(a);}
function ie(c,a,b,d){a[b]=d;}
function je(c,a,b){a.__listener=b;}
function ke(c,a,b){a.src=b;}
function le(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function me(c,b,a,d){b.style[a]=d;}
function qd(){}
_=qd.prototype=new vk();_.tI=0;function Cd(b,a){a.preventDefault();}
function Dd(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function Ed(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){ac(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!ic(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)ac(b,a,c);};$wnd.__captureElem=null;}
function Fd(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function Ad(){}
_=Ad.prototype=new qd();_.tI=0;function vd(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function xd(a){Ed(a);wd(a);}
function wd(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function zd(c,b,a){Fd(c,b,a);yd(c,b,a);}
function yd(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function rd(){}
_=rd.prototype=new Ad();_.tI=0;function sd(){}
_=sd.prototype=new rd();_.tI=0;function fh(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function gh(b,a){if(b.i!==null){fh(b,b.i,a);}b.i=a;}
function hh(b,a){jh(b.i,a);}
function ih(b,a){rc(b.i,a|ec(b.i));}
function jh(a,b){mc(a,'className',b);}
function dh(){}
_=dh.prototype=new vk();_.tI=11;_.i=null;function di(a){if(a.g){throw ok(new nk(),"Should only call onAttach when the widget is detached from the browser's document");}a.g=true;nc(a.i,a);a.n();a.D();}
function ei(a){if(!a.g){throw ok(new nk(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.F();}finally{a.o();nc(a.i,null);a.g=false;}}
function fi(a){if(a.h!==null){a.h.db(a);}else if(a.h!==null){throw ok(new nk(),"This widget's parent does not implement HasWidgets");}}
function gi(b,a){if(b.g){nc(b.i,null);}gh(b,a);if(b.g){nc(a,b);}}
function hi(c,b){var a;a=c.h;if(b===null){if(a!==null&&a.g){ei(c);}c.h=null;}else{if(a!==null){throw ok(new nk(),'Cannot set a new parent without first clearing the old parent');}c.h=b;if(b.g){di(c);}}}
function ii(){}
function ji(){}
function ki(a){}
function li(){}
function mi(){}
function rh(){}
_=rh.prototype=new dh();_.n=ii;_.o=ji;_.y=ki;_.D=li;_.F=mi;_.tI=12;_.g=false;_.h=null;function mg(b,a){hi(a,b);}
function og(b,a){hi(a,null);}
function pg(){var a,b;for(b=this.v();wh(b);){a=xh(b);di(a);}}
function qg(){var a,b;for(b=this.v();wh(b);){a=xh(b);ei(a);}}
function rg(){}
function sg(){}
function lg(){}
_=lg.prototype=new rh();_.n=pg;_.o=qg;_.D=rg;_.F=sg;_.tI=13;function ze(a){a.f=Ah(new sh(),a);}
function Ae(a){ze(a);return a;}
function Be(c,a,b){fi(a);Bh(c.f,a);wb(b,a.i);mg(c,a);}
function De(b,c){var a;if(c.h!==b){return false;}og(b,c);a=c.i;jc(gc(a),a);bi(b.f,c);return true;}
function Ee(){return Fh(this.f);}
function Fe(a){return De(this,a);}
function ye(){}
_=ye.prototype=new lg();_.v=Ee;_.db=Fe;_.tI=14;function oe(a){Ae(a);gi(a,yb());qc(a.i,'position','relative');qc(a.i,'overflow','hidden');return a;}
function pe(a,b){Be(a,b,a.i);}
function re(a){qc(a,'left','');qc(a,'top','');qc(a,'position','');}
function se(b){var a;a=De(this,b);if(a){re(b.i);}return a;}
function ne(){}
_=ne.prototype=new ye();_.db=se;_.tI=15;function ue(a){Ae(a);a.e=Db();a.d=Ab();wb(a.e,a.d);gi(a,a.e);return a;}
function we(c,b,a){mc(b,'align',a.a);}
function xe(c,b,a){qc(b,'verticalAlign',a.a);}
function te(){}
_=te.prototype=new ye();_.tI=16;_.d=null;_.e=null;function ef(){ef=lq;cf(new bf(),'center');ff=cf(new bf(),'left');cf(new bf(),'right');}
var ff;function cf(b,a){b.a=a;return b;}
function bf(){}
_=bf.prototype=new vk();_.tI=0;_.a=null;function lf(){lf=lq;jf(new hf(),'bottom');jf(new hf(),'middle');mf=jf(new hf(),'top');}
var mf;function jf(a,b){a.a=b;return a;}
function hf(){}
_=hf.prototype=new vk();_.tI=0;_.a=null;function qf(a){a.a=(ef(),ff);a.c=(lf(),mf);}
function rf(a){ue(a);qf(a);a.b=Cb();wb(a.d,a.b);mc(a.e,'cellSpacing','0');mc(a.e,'cellPadding','0');return a;}
function sf(b,c){var a;a=uf(b);wb(b.b,a);Be(b,c,a);}
function uf(b){var a;a=Bb();we(b,a,b.a);xe(b,a,b.c);return a;}
function vf(c){var a,b;b=gc(c.i);a=De(this,c);if(a){jc(this.b,b);}return a;}
function pf(){}
_=pf.prototype=new te();_.db=vf;_.tI=17;_.b=null;function bg(){bg=lq;bp(new ho());}
function Ff(a,b){bg();ag(a,Bf(new zf(),a,b));hh(a,'gwt-Image');return a;}
function ag(b,a){b.b=a;}
function cg(a){return Df(a.b,a);}
function dg(a){switch(cc(a)){case 1:{break;}case 4:case 8:case 64:case 16:case 32:{break;}case 131072:break;case 32768:{break;}case 65536:{break;}}}
function wf(){}
_=wf.prototype=new rh();_.y=dg;_.tI=18;_.b=null;function xf(){}
_=xf.prototype=new vk();_.tI=0;function Af(b,a){gi(a,zb());ih(a,229501);return b;}
function Bf(b,a,c){Af(b,a);Ef(b,a,c);return b;}
function Df(b,a){return fc(a.i);}
function Ef(b,a,c){oc(a.i,c);}
function zf(){}
_=zf.prototype=new xf();_.tI=0;function gg(a){gi(a,yb());ih(a,131197);hh(a,'gwt-Label');return a;}
function hg(b,a){gg(b);jg(b,a);return b;}
function jg(b,a){pc(b.i,a);}
function kg(a){switch(cc(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function fg(){}
_=fg.prototype=new rh();_.y=kg;_.tI=19;function zg(){zg=lq;Eg=bp(new ho());}
function yg(b,a){zg();oe(b);if(a===null){a=Ag();}gi(b,a);di(b);return b;}
function Bg(){zg();return Cg(null);}
function Cg(c){zg();var a,b;b=mb(hp(Eg,c),6);if(b!==null){return b;}a=null;if(Eg.c==0){Dg();}ip(Eg,c,b=yg(new tg(),a));return b;}
function Ag(){zg();return $doc.body;}
function Dg(){zg();gd(new ug());}
function tg(){}
_=tg.prototype=new ne();_.tI=20;var Eg;function wg(){var a,b;for(b=vm(dn((zg(),Eg)));Cm(b);){a=mb(Dm(b),6);if(a.g){ei(a);}}}
function xg(){return null;}
function ug(){}
_=ug.prototype=new vk();_.ab=wg;_.bb=xg;_.tI=21;function lh(a){a.a=(ef(),ff);a.b=(lf(),mf);}
function mh(a){ue(a);lh(a);mc(a.e,'cellSpacing','0');mc(a.e,'cellPadding','0');return a;}
function nh(b,d){var a,c;c=Cb();a=ph(b);wb(c,a);wb(b.d,c);Be(b,d,a);}
function ph(b){var a;a=Bb();we(b,a,b.a);xe(b,a,b.b);return a;}
function qh(c){var a,b;b=gc(c.i);a=De(this,c);if(a){jc(this.d,gc(b));}return a;}
function kh(){}
_=kh.prototype=new te();_.db=qh;_.tI=22;function Ah(b,a){b.a=gb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[4],null);return b;}
function Bh(a,b){Eh(a,b,a.b);}
function Dh(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function Eh(d,e,a){var b,c;if(a<0||a>d.b){throw new qk();}if(d.b==d.a.a){c=gb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ib(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ib(d.a,b,d.a[b-1]);}ib(d.a,a,e);}
function Fh(a){return uh(new th(),a);}
function ai(c,b){var a;if(b<0||b>=c.b){throw new qk();}--c.b;for(a=b;a<c.b;++a){ib(c.a,a,c.a[a+1]);}ib(c.a,c.b,null);}
function bi(b,c){var a;a=Dh(b,c);if(a==(-1)){throw new hq();}ai(b,a);}
function sh(){}
_=sh.prototype=new vk();_.tI=0;_.a=null;_.b=0;function uh(b,a){b.b=a;return b;}
function wh(a){return a.a<a.b.b-1;}
function xh(a){if(a.a>=a.b.b){throw new hq();}return a.b.a[++a.a];}
function yh(){return wh(this);}
function zh(){return xh(this);}
function th(){}
_=th.prototype=new vk();_.u=yh;_.x=zh;_.tI=0;_.a=(-1);function oi(){oi=lq;xi=Bp(new Ap());wi=bp(new ho());vi=bp(new ho());bp(new ho());yi=bp(new ho());ui=rn(new pn());{Ei();}}
function pi(a){oi();sn(ui,a);}
function qi(c,a){oi();var b;b=mb(hp(wi,c),11);if(b===null){b=rn(new pn());ip(wi,c,b);}sn(b,a);}
function ri(a,b){oi();if(a==null)a=new Array();a.push(b);return a;}
function si(a,b){oi();if(a==null)a=new Array();a.push(b);return a;}
function ti(a){oi();a.destroy();}
function zi(c,a){oi();var b;for(b=Cl(ui);vl(b);){mb(wl(b),13).z(c,mb(hp(yi,rb(a,sc)),7));}}
function Ai(e,a){oi();var b,c,d;b=mb(hp(yi,rb(a,sc)),7);d=mb(hp(wi,e),11);for(c=0;d!==null&&c<d.b;c++){mb(vn(d,c),12).A(e,b);}}
function Bi(c,a){oi();var b;for(b=Cl(ui);vl(b);){mb(wl(b),13).B(c,mb(hp(yi,rb(a,sc)),7));}}
function Ci(e,a){oi();var b,c,d;b=mb(hp(yi,rb(a,sc)),7);d=mb(hp(wi,e),11);for(c=0;d!==null&&c<d.b;c++){mb(vn(d,c),12).C(e,b);}}
function Di(c,a){oi();var b;for(b=Cl(ui);vl(b);){mb(wl(b),13).E(c,mb(hp(yi,rb(a,sc)),7));}}
function Ei(){oi();var d={'onStart':function(c,a,b){Di(c,a.element);},'onEnd':function(c,a,b){Bi(c,a.element);},'onDrag':function(c,a,b){zi(c,a.element);}};$wnd.Draggables.addObserver(d);}
function Fi(a){oi();var b,c;c=null;for(b=0;a!==null&&b<a.a;b++){if(a[b]!==null){c=si(c,a[b]);}else{c=ri(c,ob(a[b]));}}return c;}
function bj(f,d,e,g,a,c){oi();var b;if(hp(vi,f)!==null){ej(f);}b=aj(rb(f.i,sc),null,e,g,a,c);ip(vi,f,rb(b,v));ip(yi,rb(f.i,sc),f);}
function aj(b,d,e,f,a,c){oi();return new ($wnd.Draggable)(b,{'handle':d,'revert':e,'zindex':f,'constraint':a,'ghosting':c});}
function dj(h,a,c,f,g,e){oi();var b,d;b=Fi(a);d=null;Cp(xi,h);cj(h.i,b,d,f,g,e,h);}
function cj(i,d,e,g,h,f,j){oi();$wnd.Droppables.add(i,{'accept':d,'containment':e,'hoverclass':g,'overlap':h,'greedy':f,'onDrop':function(a,b,c){Ai(j,a);},'onHover':function(a,b){Ci(j,a);}});}
function ej(b){oi();var a;if(hp(vi,b)!==null){a=mb(jp(vi,b),2);if(!Ep(xi,b))jp(yi,rb(b.i,sc));ti(a);}}
var ui,vi,wi,xi,yi;function jj(){jj=lq;bg();}
function ij(b,a,c){jj();Ff(b,c);b.a=a;return b;}
function hj(){}
_=hj.prototype=new wf();_.tI=23;_.a=null;function wj(a){a.c=mh(new kh());a.a=rf(new pf());a.b=mh(new kh());}
function xj(a){wj(a);return a;}
function zj(c){var a,b,d;d=Ff(new wf(),'trash.png');a=hb('[Ljava.lang.String;',0,1,['file']);dj(d,a,null,null,null,true);qi(d,mj(new lj(),c));sf(c.a,c.c);sf(c.a,d);b=ij(new hj(),'foo','webpage.png');hh(b,'file');nh(c.c,b);bj(b,null,false,1000,null,true);b=ij(new hj(),'bar','webpage.png');hh(b,'file');nh(c.c,b);bj(b,null,false,1000,null,true);b=ij(new hj(),'baz','webpage.png');hh(b,'file');nh(c.c,b);bj(b,null,false,1000,null,true);pi(rj(new qj(),c));pe(Bg(),c.a);pe(Bg(),c.b);}
function kj(){}
_=kj.prototype=new vk();_.tI=0;function mj(b,a){b.a=a;return b;}
function oj(b,a){nh(this.a.b,hg(new fg(),'Drop file '+mb(a,14).a));}
function pj(b,a){nh(this.a.b,hg(new fg(),'Hover '+mb(a,14).a));}
function lj(){}
_=lj.prototype=new vk();_.A=oj;_.C=pj;_.tI=24;function rj(b,a){b.a=a;return b;}
function tj(a,b){nh(this.a.b,hg(new fg(),a+' '+cg(mb(b,15))));}
function uj(a,b){nh(this.a.b,hg(new fg(),a+' '+cg(mb(b,15))));}
function vj(a,b){nh(this.a.b,hg(new fg(),a+' '+cg(mb(b,15))));}
function qj(){}
_=qj.prototype=new vk();_.z=tj;_.B=uj;_.E=vj;_.tI=25;function hl(b,a){a;return b;}
function gl(){}
_=gl.prototype=new vk();_.tI=3;function lk(b,a){hl(b,a);return b;}
function kk(){}
_=kk.prototype=new gl();_.tI=4;function Ak(b,a){lk(b,a);return b;}
function zk(){}
_=zk.prototype=new kk();_.tI=5;function Bj(){}
_=Bj.prototype=new zk();_.tI=26;function Fj(){Fj=lq;ak=Ej(new Dj(),false);bk=Ej(new Dj(),true);}
function Ej(a,b){Fj();a.a=b;return a;}
function ck(a){return nb(a,16)&&mb(a,16).a==this.a;}
function dk(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function ek(a){Fj();return a?bk:ak;}
function Dj(){}
_=Dj.prototype=new vk();_.eQ=ck;_.hC=dk;_.tI=27;_.a=false;var ak,bk;function gk(){}
_=gk.prototype=new zk();_.tI=28;function ok(b,a){Ak(b,a);return b;}
function nk(){}
_=nk.prototype=new zk();_.tI=29;function rk(b,a){Ak(b,a);return b;}
function qk(){}
_=qk.prototype=new zk();_.tI=30;function tk(){}
_=tk.prototype=new zk();_.tI=31;function Ek(b,a){return b.substr(a,b.length-a);}
function Fk(a,b){return String(a)==b;}
function al(a){if(!nb(a,1))return false;return Fk(this,a);}
function cl(){var a=bl;if(!a){a=bl={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
_=String.prototype;_.eQ=al;_.hC=cl;_.tI=2;var bl=null;function fl(a){return s(a);}
function kl(b,a){Ak(b,a);return b;}
function jl(){}
_=jl.prototype=new zk();_.tI=32;function nl(d,a,b){var c;while(a.u()){c=a.x();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function pl(a){throw kl(new jl(),'add');}
function ql(b){var a;a=nl(this,this.v(),b);return a!==null;}
function ml(){}
_=ml.prototype=new vk();_.k=pl;_.m=ql;_.tI=0;function Bl(b,a){throw rk(new qk(),'Index: '+a+', Size: '+b.b);}
function Cl(a){return tl(new sl(),a);}
function Dl(b,a){throw kl(new jl(),'add');}
function El(a){this.j(this.fb(),a);return true;}
function Fl(e){var a,b,c,d,f;if(e===this){return true;}if(!nb(e,17)){return false;}f=mb(e,17);if(this.fb()!=f.fb()){return false;}c=Cl(this);d=f.v();while(vl(c)){a=wl(c);b=wl(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function am(){var a,b,c,d;c=1;a=31;b=Cl(this);while(vl(b)){d=wl(b);c=31*c+(d===null?0:d.hC());}return c;}
function bm(){return Cl(this);}
function cm(a){throw kl(new jl(),'remove');}
function rl(){}
_=rl.prototype=new ml();_.j=Dl;_.k=El;_.eQ=Fl;_.hC=am;_.v=bm;_.cb=cm;_.tI=33;function tl(b,a){b.c=a;return b;}
function vl(a){return a.a<a.c.fb();}
function wl(a){if(!vl(a)){throw new hq();}return a.c.s(a.b=a.a++);}
function xl(a){if(a.b<0){throw new nk();}a.c.cb(a.b);a.a=a.b;a.b=(-1);}
function yl(){return vl(this);}
function zl(){return wl(this);}
function sl(){}
_=sl.prototype=new vk();_.u=yl;_.x=zl;_.tI=0;_.a=0;_.b=(-1);function bn(f,d,e){var a,b,c;for(b=Co(f.p());vo(b);){a=wo(b);c=a.q();if(d===null?c===null:d.eQ(c)){if(e){xo(b);}return a;}}return null;}
function cn(b){var a;a=b.p();return fm(new em(),b,a);}
function dn(b){var a;a=gp(b);return tm(new sm(),b,a);}
function en(a){return bn(this,a,false)!==null;}
function fn(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!nb(d,18)){return false;}f=mb(d,18);c=cn(this);e=f.w();if(!mn(c,e)){return false;}for(a=hm(c);om(a);){b=pm(a);h=this.t(b);g=f.t(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function gn(b){var a;a=bn(this,b,false);return a===null?null:a.r();}
function hn(){var a,b,c;b=0;for(c=Co(this.p());vo(c);){a=wo(c);b+=a.hC();}return b;}
function jn(){return cn(this);}
function dm(){}
_=dm.prototype=new vk();_.l=en;_.eQ=fn;_.t=gn;_.hC=hn;_.w=jn;_.tI=34;function mn(e,b){var a,c,d;if(b===e){return true;}if(!nb(b,19)){return false;}c=mb(b,19);if(c.fb()!=e.fb()){return false;}for(a=c.v();a.u();){d=a.x();if(!e.m(d)){return false;}}return true;}
function nn(a){return mn(this,a);}
function on(){var a,b,c;a=0;for(b=this.v();b.u();){c=b.x();if(c!==null){a+=c.hC();}}return a;}
function kn(){}
_=kn.prototype=new ml();_.eQ=nn;_.hC=on;_.tI=35;function fm(b,a,c){b.a=a;b.b=c;return b;}
function hm(b){var a;a=Co(b.b);return mm(new lm(),b,a);}
function im(a){return this.a.l(a);}
function jm(){return hm(this);}
function km(){return this.b.a.c;}
function em(){}
_=em.prototype=new kn();_.m=im;_.v=jm;_.fb=km;_.tI=36;function mm(b,a,c){b.a=c;return b;}
function om(a){return a.a.u();}
function pm(b){var a;a=b.a.x();return a.q();}
function qm(){return om(this);}
function rm(){return pm(this);}
function lm(){}
_=lm.prototype=new vk();_.u=qm;_.x=rm;_.tI=0;function tm(b,a,c){b.a=a;b.b=c;return b;}
function vm(b){var a;a=Co(b.b);return Am(new zm(),b,a);}
function wm(a){return fp(this.a,a);}
function xm(){return vm(this);}
function ym(){return this.b.a.c;}
function sm(){}
_=sm.prototype=new ml();_.m=wm;_.v=xm;_.fb=ym;_.tI=0;function Am(b,a,c){b.a=c;return b;}
function Cm(a){return a.a.u();}
function Dm(a){var b;b=a.a.x().r();return b;}
function Em(){return Cm(this);}
function Fm(){return Dm(this);}
function zm(){}
_=zm.prototype=new vk();_.u=Em;_.x=Fm;_.tI=0;function qn(a){{tn(a);}}
function rn(a){qn(a);return a;}
function sn(b,a){co(b.a,b.b++,a);return true;}
function tn(a){a.a=z();a.b=0;}
function vn(b,a){if(a<0||a>=b.b){Bl(b,a);}return En(b.a,a);}
function wn(b,a){return xn(b,a,0);}
function xn(c,b,a){if(a<0){Bl(c,a);}for(;a<c.b;++a){if(Dn(b,En(c.a,a))){return a;}}return (-1);}
function yn(c,a){var b;b=vn(c,a);ao(c.a,a,1);--c.b;return b;}
function An(a,b){if(a<0||a>this.b){Bl(this,a);}zn(this.a,a,b);++this.b;}
function Bn(a){return sn(this,a);}
function zn(a,b,c){a.splice(b,0,c);}
function Cn(a){return wn(this,a)!=(-1);}
function Dn(a,b){return a===b||a!==null&&a.eQ(b);}
function Fn(a){return vn(this,a);}
function En(a,b){return a[b];}
function bo(a){return yn(this,a);}
function ao(a,c,b){a.splice(c,b);}
function co(a,b,c){a[b]=c;}
function eo(){return this.b;}
function pn(){}
_=pn.prototype=new rl();_.j=An;_.k=Bn;_.m=Cn;_.s=Fn;_.cb=bo;_.fb=eo;_.tI=37;_.a=null;_.b=0;function dp(){dp=lq;kp=qp();}
function ap(a){{cp(a);}}
function bp(a){dp();ap(a);return a;}
function cp(a){a.a=z();a.d=A();a.b=rb(kp,v);a.c=0;}
function ep(b,a){if(nb(a,1)){return up(b.d,mb(a,1))!==kp;}else if(a===null){return b.b!==kp;}else{return tp(b.a,a,a.hC())!==kp;}}
function fp(a,b){if(a.b!==kp&&sp(a.b,b)){return true;}else if(pp(a.d,b)){return true;}else if(np(a.a,b)){return true;}return false;}
function gp(a){return Ao(new ro(),a);}
function hp(c,a){var b;if(nb(a,1)){b=up(c.d,mb(a,1));}else if(a===null){b=c.b;}else{b=tp(c.a,a,a.hC());}return b===kp?null:b;}
function ip(c,a,d){var b;if(nb(a,1)){b=xp(c.d,mb(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=wp(c.a,a,d,a.hC());}if(b===kp){++c.c;return null;}else{return b;}}
function jp(c,a){var b;if(nb(a,1)){b=zp(c.d,mb(a,1));}else if(a===null){b=c.b;c.b=rb(kp,v);}else{b=yp(c.a,a,a.hC());}if(b===kp){return null;}else{--c.c;return b;}}
function lp(e,c){dp();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.k(a[f]);}}}}
function mp(d,a){dp();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=lo(c.substring(1),e);a.k(b);}}}
function np(f,h){dp();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(sp(h,d)){return true;}}}}return false;}
function op(a){return ep(this,a);}
function pp(c,d){dp();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(sp(d,a)){return true;}}}return false;}
function qp(){dp();}
function rp(){return gp(this);}
function sp(a,b){dp();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function vp(a){return hp(this,a);}
function tp(f,h,e){dp();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.q();if(sp(h,d)){return c.r();}}}}
function up(b,a){dp();return b[':'+a];}
function wp(f,h,j,e){dp();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.q();if(sp(h,d)){var i=c.r();c.eb(j);return i;}}}else{a=f[e]=[];}var c=lo(h,j);a.push(c);}
function xp(c,a,d){dp();a=':'+a;var b=c[a];c[a]=d;return b;}
function yp(f,h,e){dp();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.q();if(sp(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.r();}}}}
function zp(c,a){dp();a=':'+a;var b=c[a];delete c[a];return b;}
function ho(){}
_=ho.prototype=new dm();_.l=op;_.p=rp;_.t=vp;_.tI=38;_.a=null;_.b=null;_.c=0;_.d=null;var kp;function jo(b,a,c){b.a=a;b.b=c;return b;}
function lo(a,b){return jo(new io(),a,b);}
function mo(b){var a;if(nb(b,20)){a=mb(b,20);if(sp(this.a,a.q())&&sp(this.b,a.r())){return true;}}return false;}
function no(){return this.a;}
function oo(){return this.b;}
function po(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function qo(a){var b;b=this.b;this.b=a;return b;}
function io(){}
_=io.prototype=new vk();_.eQ=mo;_.q=no;_.r=oo;_.hC=po;_.eb=qo;_.tI=39;_.a=null;_.b=null;function Ao(b,a){b.a=a;return b;}
function Co(a){return to(new so(),a.a);}
function Do(c){var a,b,d;if(nb(c,20)){a=mb(c,20);b=a.q();if(ep(this.a,b)){d=hp(this.a,b);return sp(a.r(),d);}}return false;}
function Eo(){return Co(this);}
function Fo(){return this.a.c;}
function ro(){}
_=ro.prototype=new kn();_.m=Do;_.v=Eo;_.fb=Fo;_.tI=40;function to(c,b){var a;c.c=b;a=rn(new pn());if(c.c.b!==(dp(),kp)){sn(a,jo(new io(),null,c.c.b));}mp(c.c.d,a);lp(c.c.a,a);c.a=Cl(a);return c;}
function vo(a){return vl(a.a);}
function wo(a){return a.b=mb(wl(a.a),20);}
function xo(a){if(a.b===null){throw ok(new nk(),'Must call next() before remove().');}else{xl(a.a);jp(a.c,a.b.q());a.b=null;}}
function yo(){return vo(this);}
function zo(){return wo(this);}
function so(){}
_=so.prototype=new vk();_.u=yo;_.x=zo;_.tI=0;_.a=null;_.b=null;function Bp(a){a.a=bp(new ho());return a;}
function Cp(c,a){var b;b=ip(c.a,a,ek(true));return b===null;}
function Ep(b,a){return ep(b.a,a);}
function Fp(a){return Cp(this,a);}
function aq(a){return Ep(this,a);}
function bq(){return hm(cn(this.a));}
function cq(){return this.a.c;}
function Ap(){}
_=Ap.prototype=new kn();_.k=Fp;_.m=aq;_.v=bq;_.fb=cq;_.tI=41;_.a=null;function hq(){}
_=hq.prototype=new zk();_.tI=42;function Aj(){zj(xj(new kj()));}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{Aj();}catch(a){b(d);}else{Aj();}}
var qb=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1,4:1},{2:1},{5:1},{7:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1,15:1},{7:1,8:1,9:1,10:1},{6:1,7:1,8:1,9:1,10:1},{5:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1,14:1,15:1},{12:1},{13:1},{3:1},{16:1},{3:1},{3:1},{3:1},{3:1},{3:1},{17:1},{18:1},{19:1},{19:1},{11:1,17:1},{18:1},{20:1},{19:1},{19:1},{3:1}];if (com_manning_gwtip_scriptaculous_ScriptaculousDemo) {  var __gwt_initHandlers = com_manning_gwtip_scriptaculous_ScriptaculousDemo.__gwt_initHandlers;  com_manning_gwtip_scriptaculous_ScriptaculousDemo.onScriptLoad(gwtOnLoad);}})();