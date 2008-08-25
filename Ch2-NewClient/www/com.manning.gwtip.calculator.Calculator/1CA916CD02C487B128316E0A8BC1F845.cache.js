(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,dw='com.google.gwt.core.client.',ew='com.google.gwt.lang.',fw='com.google.gwt.user.client.',gw='com.google.gwt.user.client.impl.',hw='com.google.gwt.user.client.ui.',iw='com.google.gwt.user.client.ui.impl.',jw='com.manning.gwtip.calculator.client.',kw='com.manning.gwtip.calculator.client.controller.',lw='com.manning.gwtip.calculator.client.model.',mw='com.manning.gwtip.calculator.client.model.operator.',nw='com.manning.gwtip.calculator.client.view.',ow='com.manning.gwtip.calculator.client.view.button.',pw='java.lang.',qw='java.util.';function cw(){}
function iq(a){return this===a;}
function jq(){return fr(this);}
function kq(){return this.tN+'@'+this.hC();}
function gq(){}
_=gq.prototype={};_.eQ=iq;_.hC=jq;_.tS=kq;_.toString=function(){return this.tS();};_.tN=pw+'Object';_.tI=1;function D(a){return a==null?null:a.tN;}
var E=null;function bb(a){return a==null?0:a.$H?a.$H:(a.$H=db());}
function cb(a){return a==null?0:a.$H?a.$H:(a.$H=db());}
function db(){return ++eb;}
var eb=0;function hb(b,a){if(!Db(a,2)){return false;}return lb(b,Cb(a,2));}
function ib(a){return bb(a);}
function jb(){return [];}
function kb(){return {};}
function mb(a){return hb(this,a);}
function lb(a,b){return a===b;}
function nb(){return ib(this);}
function pb(){return ob(this);}
function ob(a){if(a.toString)return a.toString();return '[object]';}
function fb(){}
_=fb.prototype=new gq();_.eQ=mb;_.hC=nb;_.tS=pb;_.tN=dw+'JavaScriptObject';_.tI=7;function rb(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function tb(a,b,c){return a[b]=c;}
function ub(b,a){return b[a];}
function vb(a){return a.length;}
function xb(e,d,c,b,a){return wb(e,d,c,b,0,vb(b),a);}
function wb(j,i,g,c,e,a,b){var d,f,h;if((f=ub(c,e))<0){throw new Ap();}h=rb(new qb(),f,ub(i,e),ub(g,e),j);++e;if(e<a){j=Bq(j,1);for(d=0;d<f;++d){tb(h,d,wb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){tb(h,d,b);}}return h;}
function yb(a,b,c){if(c!==null&&a.b!=0&& !Db(c,a.b)){throw new Fo();}return tb(a,b,c);}
function qb(){}
_=qb.prototype=new gq();_.tN=ew+'Array';_.tI=0;function Bb(b,a){return !(!(b&&ac[b][a]));}
function Cb(b,a){if(b!=null)Bb(b.tI,a)||Fb();return b;}
function Db(b,a){return b!=null&&Bb(b.tI,a);}
function Fb(){throw new cp();}
function Eb(a){if(a!==null){throw new cp();}return a;}
function bc(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var ac;function fc(){fc=cw;Fc=tt(new rt());{Ac=new ie();ne(Ac);}}
function gc(b,a){fc();Ae(Ac,b,a);}
function hc(a,b){fc();return le(Ac,a,b);}
function ic(){fc();return Ce(Ac,'button');}
function jc(){fc();return Ce(Ac,'div');}
function kc(a){fc();return Ce(Ac,a);}
function lc(){fc();return De(Ac,'text');}
function mc(){fc();return Ce(Ac,'tbody');}
function nc(){fc();return Ce(Ac,'td');}
function oc(){fc();return Ce(Ac,'tr');}
function pc(){fc();return Ce(Ac,'table');}
function sc(b,a,d){fc();var c;c=E;{rc(b,a,d);}}
function rc(b,a,c){fc();var d;if(a===Ec){if(uc(b)==8192){Ec=null;}}d=qc;qc=b;try{c.C(b);}finally{qc=d;}}
function tc(b,a){fc();Ee(Ac,b,a);}
function uc(a){fc();return Fe(Ac,a);}
function vc(a){fc();te(Ac,a);}
function wc(a){fc();return ue(Ac,a);}
function xc(a){fc();return af(Ac,a);}
function yc(a){fc();return ve(Ac,a);}
function zc(a){fc();return we(Ac,a);}
function Bc(c,a,b){fc();ye(Ac,c,a,b);}
function Cc(a){fc();var b,c;c=true;if(Fc.b>0){b=Eb(xt(Fc,Fc.b-1));if(!(c=null.ib())){tc(a,true);vc(a);}}return c;}
function Dc(b,a){fc();bf(Ac,b,a);}
function ad(a,b,c){fc();cf(Ac,a,b,c);}
function bd(a,b){fc();df(Ac,a,b);}
function cd(a,b){fc();ef(Ac,a,b);}
function dd(b,a,c){fc();ff(Ac,b,a,c);}
function ed(a,b){fc();pe(Ac,a,b);}
function fd(a){fc();return qe(Ac,a);}
var qc=null,Ac=null,Ec=null,Fc;function id(a){if(Db(a,4)){return hc(this,Cb(a,4));}return hb(bc(this,gd),a);}
function jd(){return ib(bc(this,gd));}
function kd(){return fd(this);}
function gd(){}
_=gd.prototype=new fb();_.eQ=id;_.hC=jd;_.tS=kd;_.tN=fw+'Element';_.tI=8;function od(a){return hb(bc(this,ld),a);}
function pd(){return ib(bc(this,ld));}
function qd(){return wc(this);}
function ld(){}
_=ld.prototype=new fb();_.eQ=od;_.hC=pd;_.tS=qd;_.tN=fw+'Event';_.tI=9;function wd(){wd=cw;yd=tt(new rt());{xd();}}
function xd(){wd();Cd(new sd());}
var yd;function ud(){while((wd(),yd).b>0){Eb(xt((wd(),yd),0)).ib();}}
function vd(){return null;}
function sd(){}
_=sd.prototype=new gq();_.ab=ud;_.bb=vd;_.tN=fw+'Timer$1';_.tI=10;function Bd(){Bd=cw;Dd=tt(new rt());fe=tt(new rt());{be();}}
function Cd(a){Bd();ut(Dd,a);}
function Ed(){Bd();var a,b;for(a=Er(Dd);xr(a);){b=Cb(yr(a),5);b.ab();}}
function Fd(){Bd();var a,b,c,d;d=null;for(a=Er(Dd);xr(a);){b=Cb(yr(a),5);c=b.bb();{d=c;}}return d;}
function ae(){Bd();var a,b;for(a=Er(fe);xr(a);){b=Eb(yr(a));null.ib();}}
function be(){Bd();__gwt_initHandlers(function(){ee();},function(){return de();},function(){ce();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ce(){Bd();var a;a=E;{Ed();}}
function de(){Bd();var a;a=E;{return Fd();}}
function ee(){Bd();var a;a=E;{ae();}}
var Dd,fe;function Ae(c,b,a){b.appendChild(a);}
function Ce(b,a){return $doc.createElement(a);}
function De(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function Ee(c,b,a){b.cancelBubble=a;}
function Fe(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function af(b,a){return a.__eventBits||0;}
function bf(c,b,a){b.removeChild(a);}
function cf(c,a,b,d){a[b]=d;}
function df(c,a,b){a.__listener=b;}
function ef(c,a,b){if(!b){b='';}a.innerHTML=b;}
function ff(c,b,a,d){b.style[a]=d;}
function ge(){}
_=ge.prototype=new gq();_.tN=gw+'DOMImpl';_.tI=0;function te(b,a){a.preventDefault();}
function ue(b,a){return a.toString();}
function ve(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function we(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function xe(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){sc(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!Cc(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)sc(b,a,c);};$wnd.__captureElem=null;}
function ye(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function ze(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function re(){}
_=re.prototype=new ge();_.tN=gw+'DOMImplStandard';_.tI=0;function le(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function ne(a){xe(a);me(a);}
function me(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function pe(c,b,a){ze(c,b,a);oe(c,b,a);}
function oe(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function qe(d,a){var b=a.cloneNode(true);var c=$doc.createElement('DIV');c.appendChild(b);outer=c.innerHTML;b.innerHTML='';return outer;}
function he(){}
_=he.prototype=new re();_.tN=gw+'DOMImplMozilla';_.tI=0;function ie(){}
_=ie.prototype=new he();_.tN=gw+'DOMImplMozillaOld';_.tI=0;function nk(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function ok(b,a){if(b.k!==null){nk(b,b.k,a);}b.k=a;}
function pk(b,a){rk(b.k,a);}
function qk(b,a){ed(b.k,a|xc(b.k));}
function rk(a,b){ad(a,'className',b);}
function sk(){if(this.k===null){return '(null handle)';}return fd(this.k);}
function lk(){}
_=lk.prototype=new gq();_.tS=sk;_.tN=hw+'UIObject';_.tI=0;_.k=null;function ll(a){if(a.i){throw qp(new pp(),"Should only call onAttach when the widget is detached from the browser's document");}a.i=true;bd(a.k,a);a.q();a.E();}
function ml(a){if(!a.i){throw qp(new pp(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.F();}finally{a.r();bd(a.k,null);a.i=false;}}
function nl(a){if(a.j!==null){a.j.eb(a);}else if(a.j!==null){throw qp(new pp(),"This widget's parent does not implement HasWidgets");}}
function ol(b,a){if(b.i){bd(b.k,null);}ok(b,a);if(b.i){bd(a,b);}}
function pl(c,b){var a;a=c.j;if(b===null){if(a!==null&&a.i){ml(c);}c.j=null;}else{if(a!==null){throw qp(new pp(),'Cannot set a new parent without first clearing the old parent');}c.j=b;if(b.i){ll(c);}}}
function ql(){}
function rl(){}
function sl(a){}
function tl(){}
function ul(){}
function vl(a){ol(this,a);}
function Bk(){}
_=Bk.prototype=new lk();_.q=ql;_.r=rl;_.C=sl;_.E=tl;_.F=ul;_.fb=vl;_.tN=hw+'Widget';_.tI=11;_.i=false;_.j=null;function fj(b,a){pl(a,b);}
function hj(b,a){pl(a,null);}
function ij(){var a,b;for(b=this.y();b.x();){a=Cb(b.A(),7);ll(a);}}
function jj(){var a,b;for(b=this.y();b.x();){a=Cb(b.A(),7);ml(a);}}
function kj(){}
function lj(){}
function ej(){}
_=ej.prototype=new Bk();_.q=ij;_.r=jj;_.E=kj;_.F=lj;_.tN=hw+'Panel';_.tI=12;function bg(a){a.f=cl(new Ck(),a);}
function cg(a){bg(a);return a;}
function dg(c,a,b){nl(a);dl(c.f,a);gc(b,a.k);fj(c,a);}
function fg(b,c){var a;if(c.j!==b){return false;}hj(b,c);a=c.k;Dc(zc(a),a);jl(b.f,c);return true;}
function gg(){return hl(this.f);}
function hg(a){return fg(this,a);}
function ag(){}
_=ag.prototype=new ej();_.y=gg;_.eb=hg;_.tN=hw+'ComplexPanel';_.tI=13;function hf(a){cg(a);a.fb(jc());dd(a.k,'position','relative');dd(a.k,'overflow','hidden');return a;}
function jf(a,b){dg(a,b,a.k);}
function lf(a){dd(a,'left','');dd(a,'top','');dd(a,'position','');}
function mf(b){var a;a=fg(this,b);if(a){lf(b.k);}return a;}
function gf(){}
_=gf.prototype=new ag();_.eb=mf;_.tN=hw+'AbsolutePanel';_.tI=14;function kg(){kg=cw;Fl(),bm;}
function jg(b,a){Fl(),bm;mg(b,a);return b;}
function lg(b,a){switch(uc(a)){case 1:if(b.b!==null){Ef(b.b,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function mg(b,a){ol(b,a);qk(b,7041);}
function ng(a){if(this.b===null){this.b=Cf(new Bf());}ut(this.b,a);}
function og(a){lg(this,a);}
function pg(a){mg(this,a);}
function ig(){}
_=ig.prototype=new Bk();_.l=ng;_.C=og;_.fb=pg;_.tN=hw+'FocusWidget';_.tI=15;_.b=null;function qf(){qf=cw;Fl(),bm;}
function pf(b,a){Fl(),bm;jg(b,a);return b;}
function rf(b,a){cd(b.k,a);}
function of(){}
_=of.prototype=new ig();_.tN=hw+'ButtonBase';_.tI=16;function uf(){uf=cw;Fl(),bm;}
function sf(a){Fl(),bm;pf(a,ic());vf(a.k);pk(a,'gwt-Button');return a;}
function tf(b,a){Fl(),bm;sf(b);rf(b,a);return b;}
function vf(b){uf();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function nf(){}
_=nf.prototype=new of();_.tN=hw+'Button';_.tI=17;function xf(a){cg(a);a.e=pc();a.d=mc();gc(a.e,a.d);a.fb(a.e);return a;}
function zf(c,b,a){ad(b,'align',a.a);}
function Af(c,b,a){dd(b,'verticalAlign',a.a);}
function wf(){}
_=wf.prototype=new ag();_.tN=hw+'CellPanel';_.tI=18;_.d=null;_.e=null;function or(d,a,b){var c;while(a.x()){c=a.A();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function qr(a){throw lr(new kr(),'add');}
function rr(b){var a;a=or(this,this.y(),b);return a!==null;}
function sr(){var a,b,c;c=qq(new pq());a=null;rq(c,'[');b=this.y();while(b.x()){if(a!==null){rq(c,a);}else{a=', ';}rq(c,cr(b.A()));}rq(c,']');return vq(c);}
function nr(){}
_=nr.prototype=new gq();_.n=qr;_.p=rr;_.tS=sr;_.tN=qw+'AbstractCollection';_.tI=0;function Dr(b,a){throw tp(new sp(),'Index: '+a+', Size: '+b.b);}
function Er(a){return vr(new ur(),a);}
function Fr(b,a){throw lr(new kr(),'add');}
function as(a){this.m(this.gb(),a);return true;}
function bs(e){var a,b,c,d,f;if(e===this){return true;}if(!Db(e,14)){return false;}f=Cb(e,14);if(this.gb()!=f.gb()){return false;}c=Er(this);d=f.y();while(xr(c)){a=yr(c);b=yr(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function cs(){var a,b,c,d;c=1;a=31;b=Er(this);while(xr(b)){d=yr(b);c=31*c+(d===null?0:d.hC());}return c;}
function ds(){return Er(this);}
function es(a){throw lr(new kr(),'remove');}
function tr(){}
_=tr.prototype=new nr();_.m=Fr;_.n=as;_.eQ=bs;_.hC=cs;_.y=ds;_.db=es;_.tN=qw+'AbstractList';_.tI=19;function st(a){{vt(a);}}
function tt(a){st(a);return a;}
function ut(b,a){fu(b.a,b.b++,a);return true;}
function vt(a){a.a=jb();a.b=0;}
function xt(b,a){if(a<0||a>=b.b){Dr(b,a);}return bu(b.a,a);}
function yt(b,a){return zt(b,a,0);}
function zt(c,b,a){if(a<0){Dr(c,a);}for(;a<c.b;++a){if(au(b,bu(c.a,a))){return a;}}return (-1);}
function At(c,a){var b;b=xt(c,a);du(c.a,a,1);--c.b;return b;}
function Bt(d,a,b){var c;c=xt(d,a);fu(d.a,a,b);return c;}
function Dt(a,b){if(a<0||a>this.b){Dr(this,a);}Ct(this.a,a,b);++this.b;}
function Et(a){return ut(this,a);}
function Ct(a,b,c){a.splice(b,0,c);}
function Ft(a){return yt(this,a)!=(-1);}
function au(a,b){return a===b||a!==null&&a.eQ(b);}
function cu(a){return xt(this,a);}
function bu(a,b){return a[b];}
function eu(a){return At(this,a);}
function du(a,c,b){a.splice(c,b);}
function fu(a,b,c){a[b]=c;}
function gu(){return this.b;}
function rt(){}
_=rt.prototype=new tr();_.m=Dt;_.n=Et;_.p=Ft;_.v=cu;_.db=eu;_.gb=gu;_.tN=qw+'ArrayList';_.tI=20;_.a=null;_.b=0;function Cf(a){tt(a);return a;}
function Ef(d,c){var a,b;for(a=Er(d);xr(a);){b=Cb(yr(a),6);b.D(c);}}
function Bf(){}
_=Bf.prototype=new rt();_.tN=hw+'ClickListenerCollection';_.tI=21;function Fh(a){a.h=vh(new qh());}
function ai(a){Fh(a);a.g=pc();a.c=mc();gc(a.g,a.c);a.fb(a.g);qk(a,1);return a;}
function bi(d,c,b){var a;ci(d,c);if(b<0){throw tp(new sp(),'Column '+b+' must be non-negative: '+b);}a=d.a;if(a<=b){throw tp(new sp(),'Column index: '+b+', Column size: '+d.a);}}
function ci(c,a){var b;b=c.b;if(a>=b||a<0){throw tp(new sp(),'Row index: '+a+', Row size: '+b);}}
function di(e,c,b,a){var d;d=ih(e.d,c,b);hi(e,d,a);return d;}
function fi(a){return nc();}
function gi(d,b,a){var c,e;e=ph(d.f,d.c,b);c=ug(d);Bc(e,c,a);}
function hi(d,c,a){var b,e;b=yc(c);e=null;if(b!==null){e=xh(d.h,b);}if(e!==null){ki(d,e);return true;}else{if(a){cd(c,'');}return false;}}
function ki(b,c){var a;if(c.j!==b){return false;}hj(b,c);a=c.k;Dc(zc(a),a);Ah(b.h,a);return true;}
function ii(d,b,a){var c,e;bi(d,b,a);c=di(d,b,a,false);e=ph(d.f,d.c,b);Dc(e,c);}
function ji(d,c){var a,b;b=d.a;for(a=0;a<b;++a){di(d,c,a,false);}Dc(d.c,ph(d.f,d.c,c));}
function li(b,a){b.d=a;}
function mi(b,a){b.e=a;mh(b.e);}
function ni(b,a){b.f=a;}
function oi(d,b,a,e){var c;vg(d,b,a);if(e!==null){nl(e);c=di(d,b,a,true);yh(d.h,e);gc(c,e.k);fj(d,e);}}
function pi(){return Bh(this.h);}
function qi(a){switch(uc(a)){case 1:{break;}default:}}
function ri(a){return ki(this,a);}
function Bg(){}
_=Bg.prototype=new ej();_.y=pi;_.C=qi;_.eb=ri;_.tN=hw+'HTMLTable';_.tI=22;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;function rg(a){ai(a);li(a,fh(new eh(),a));ni(a,new nh());mi(a,kh(new jh(),a));return a;}
function sg(c,b,a){rg(c);zg(c,b,a);return c;}
function ug(b){var a;a=fi(b);cd(a,'&nbsp;');return a;}
function vg(c,b,a){wg(c,b);if(a<0){throw tp(new sp(),'Cannot access a column with a negative index: '+a);}if(a>=c.a){throw tp(new sp(),'Column index: '+a+', Column size: '+c.a);}}
function wg(b,a){if(a<0){throw tp(new sp(),'Cannot access a row with a negative index: '+a);}if(a>=b.b){throw tp(new sp(),'Row index: '+a+', Row size: '+b.b);}}
function zg(c,b,a){xg(c,a);yg(c,b);}
function xg(d,a){var b,c;if(d.a==a){return;}if(a<0){throw tp(new sp(),'Cannot set number of columns to '+a);}if(d.a>a){for(b=0;b<d.b;b++){for(c=d.a-1;c>=a;c--){ii(d,b,c);}}}else{for(b=0;b<d.b;b++){for(c=d.a;c<a;c++){gi(d,b,c);}}}d.a=a;}
function yg(b,a){if(b.b==a){return;}if(a<0){throw tp(new sp(),'Cannot set number of rows to '+a);}if(b.b<a){Ag(b.c,a-b.b,b.a);b.b=a;}else{while(b.b>a){ji(b,--b.b);}}}
function Ag(g,f,c){var h=$doc.createElement('td');h.innerHTML='&nbsp;';var d=$doc.createElement('tr');for(var b=0;b<c;b++){var a=h.cloneNode(true);d.appendChild(a);}g.appendChild(d);for(var e=1;e<f;e++){g.appendChild(d.cloneNode(true));}}
function qg(){}
_=qg.prototype=new Bg();_.tN=hw+'Grid';_.tI=23;_.a=0;_.b=0;function Dg(a){{ah(a);}}
function Eg(b,a){b.b=a;Dg(b);return b;}
function ah(a){while(++a.a<a.b.b.b){if(xt(a.b.b,a.a)!==null){return;}}}
function bh(a){return a.a<a.b.b.b;}
function ch(){return bh(this);}
function dh(){var a;if(!bh(this)){throw new Ev();}a=xt(this.b.b,this.a);ah(this);return a;}
function Cg(){}
_=Cg.prototype=new gq();_.x=ch;_.A=dh;_.tN=hw+'HTMLTable$1';_.tI=0;_.a=(-1);function fh(b,a){b.a=a;return b;}
function hh(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function ih(c,b,a){return hh(c,c.a.c,b,a);}
function eh(){}
_=eh.prototype=new gq();_.tN=hw+'HTMLTable$CellFormatter';_.tI=0;function kh(b,a){b.b=a;return b;}
function mh(a){if(a.a===null){a.a=kc('colgroup');Bc(a.b.g,a.a,0);gc(a.a,kc('col'));}}
function jh(){}
_=jh.prototype=new gq();_.tN=hw+'HTMLTable$ColumnFormatter';_.tI=0;_.a=null;function ph(c,a,b){return a.rows[b];}
function nh(){}
_=nh.prototype=new gq();_.tN=hw+'HTMLTable$RowFormatter';_.tI=0;function uh(a){a.b=tt(new rt());}
function vh(a){uh(a);return a;}
function xh(c,a){var b;b=Dh(a);if(b<0){return null;}return Cb(xt(c.b,b),7);}
function yh(b,c){var a;if(b.a===null){a=b.b.b;ut(b.b,c);}else{a=b.a.a;Bt(b.b,a,c);b.a=b.a.b;}Eh(c.k,a);}
function zh(c,a,b){Ch(a);Bt(c.b,b,null);c.a=sh(new rh(),b,c.a);}
function Ah(c,a){var b;b=Dh(a);zh(c,a,b);}
function Bh(a){return Eg(new Cg(),a);}
function Ch(a){a['__widgetID']=null;}
function Dh(a){var b=a['__widgetID'];return b==null?-1:b;}
function Eh(a,b){a['__widgetID']=b;}
function qh(){}
_=qh.prototype=new gq();_.tN=hw+'HTMLTable$WidgetMapper';_.tI=0;_.a=null;function sh(c,a,b){c.a=a;c.b=b;return c;}
function rh(){}
_=rh.prototype=new gq();_.tN=hw+'HTMLTable$WidgetMapper$FreeNode';_.tI=0;_.a=0;_.b=null;function yi(){yi=cw;wi(new vi(),'center');zi=wi(new vi(),'left');Ai=wi(new vi(),'right');}
var zi,Ai;function wi(b,a){b.a=a;return b;}
function vi(){}
_=vi.prototype=new gq();_.tN=hw+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=0;_.a=null;function aj(){aj=cw;Ei(new Di(),'bottom');Ei(new Di(),'middle');bj=Ei(new Di(),'top');}
var bj;function Ei(a,b){a.a=b;return a;}
function Di(){}
_=Di.prototype=new gq();_.tN=hw+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=0;_.a=null;function sj(){sj=cw;xj=dv(new ju());}
function rj(b,a){sj();hf(b);if(a===null){a=tj();}b.fb(a);ll(b);return b;}
function uj(){sj();return vj(null);}
function vj(c){sj();var a,b;b=Cb(jv(xj,c),8);if(b!==null){return b;}a=null;if(xj.c==0){wj();}kv(xj,c,b=rj(new mj(),a));return b;}
function tj(){sj();return $doc.body;}
function wj(){sj();Cd(new nj());}
function mj(){}
_=mj.prototype=new gf();_.tN=hw+'RootPanel';_.tI=24;var xj;function pj(){var a,b;for(b=xs(ft((sj(),xj)));Es(b);){a=Cb(Fs(b),8);if(a.i){ml(a);}}}
function qj(){return null;}
function nj(){}
_=nj.prototype=new gq();_.ab=pj;_.bb=qj;_.tN=hw+'RootPanel$1';_.tI=25;function dk(){dk=cw;Fl(),bm;ak(new Fj(),'center');ak(new Fj(),'justify');ak(new Fj(),'left');gk=ak(new Fj(),'right');}
function ck(b,a){dk();jg(b,a);qk(b,1024);return b;}
function fk(b,a){ad(b.k,'value',a!==null?a:'');}
function ek(b,a){dd(b.k,'textAlign',a.a);}
function hk(a){if(this.a===null){this.a=Cf(new Bf());}ut(this.a,a);}
function ik(a){var b;lg(this,a);b=uc(a);if(b==1){if(this.a!==null){Ef(this.a,this);}}else{}}
function Ej(){}
_=Ej.prototype=new ig();_.l=hk;_.C=ik;_.tN=hw+'TextBoxBase';_.tI=26;_.a=null;var gk;function kk(){kk=cw;dk();}
function jk(a){kk();ck(a,lc());pk(a,'gwt-TextBox');return a;}
function Dj(){}
_=Dj.prototype=new Ej();_.tN=hw+'TextBox';_.tI=27;function ak(b,a){b.a=a;return b;}
function Fj(){}
_=Fj.prototype=new gq();_.tN=hw+'TextBoxBase$TextAlignConstant';_.tI=0;_.a=null;function uk(a){a.b=(yi(),zi);a.c=(aj(),bj);}
function vk(a){xf(a);uk(a);ad(a.e,'cellSpacing','0');ad(a.e,'cellPadding','0');return a;}
function wk(b,d){var a,c;c=oc();a=yk(b);gc(c,a);gc(b.d,c);dg(b,d,a);}
function yk(b){var a;a=nc();zf(b,a,b.b);Af(b,a,b.c);return a;}
function zk(b,a){b.b=a;}
function Ak(c){var a,b;b=zc(c.k);a=fg(this,c);if(a){Dc(this.d,zc(b));}return a;}
function tk(){}
_=tk.prototype=new wf();_.eb=Ak;_.tN=hw+'VerticalPanel';_.tI=28;function cl(b,a){b.a=xb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[7],[4],null);return b;}
function dl(a,b){gl(a,b,a.b);}
function fl(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function gl(d,e,a){var b,c;if(a<0||a>d.b){throw new sp();}if(d.b==d.a.a){c=xb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[7],[d.a.a*2],null);for(b=0;b<d.a.a;++b){yb(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){yb(d.a,b,d.a[b-1]);}yb(d.a,a,e);}
function hl(a){return Ek(new Dk(),a);}
function il(c,b){var a;if(b<0||b>=c.b){throw new sp();}--c.b;for(a=b;a<c.b;++a){yb(c.a,a,c.a[a+1]);}yb(c.a,c.b,null);}
function jl(b,c){var a;a=fl(b,c);if(a==(-1)){throw new Ev();}il(b,a);}
function Ck(){}
_=Ck.prototype=new gq();_.tN=hw+'WidgetCollection';_.tI=0;_.a=null;_.b=0;function Ek(b,a){b.b=a;return b;}
function al(){return this.a<this.b.b-1;}
function bl(){if(this.a>=this.b.b){throw new Ev();}return this.b.a[++this.a];}
function Dk(){}
_=Dk.prototype=new gq();_.x=al;_.A=bl;_.tN=hw+'WidgetCollection$WidgetIterator';_.tI=0;_.a=(-1);function Fl(){Fl=cw;am=zl(new xl());bm=am!==null?El(new wl()):am;}
function El(a){Fl();return a;}
function wl(){}
_=wl.prototype=new gq();_.tN=iw+'FocusImpl';_.tI=0;var am,bm;function Al(){Al=cw;Fl();}
function yl(a){Bl(a);Cl(a);Dl(a);}
function zl(a){Al();El(a);yl(a);return a;}
function Bl(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function Cl(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function Dl(a){return function(){this.firstChild.focus();};}
function xl(){}
_=xl.prototype=new wl();_.tN=iw+'FocusImplOld';_.tI=0;function em(a){jf(uj(),oo(new ao(),'calculator'));}
function cm(){}
_=cm.prototype=new gq();_.tN=jw+'Calculator';_.tI=0;function gm(b,a){b.a=a;return b;}
function im(a){rm(a.a);xm(a.a,null);}
function jm(b,a){if(b.a.d){xm(b.a,null);}if(b.a.c){if(b.a.d){tm(b.a,0.0);}else{tm(b.a,ip(b.a.b));}um(b.a,a);vm(b.a,false);}else{if(Aq(b.a.b,'.')==(-1)){um(b.a,b.a.b+a);}else if(!zq(a,'.')){um(b.a,b.a.b+a);}}wm(b.a,false);}
function km(a){if(a.a.e!==null){if(!a.a.d){a.b=ip(a.a.b);}a.a.e.cb(a.a);tm(a.a,a.b);wm(a.a,true);}}
function lm(b,a){if(Db(a,12)){if(b.a.e===null||b.a.d){tm(b.a,ip(b.a.b));vm(b.a,true);xm(b.a,a);}else{b.a.e.cb(b.a);xm(b.a,a);}}else if(Db(a,13)){a.cb(b.a);}wm(b.a,false);}
function fm(){}
_=fm.prototype=new gq();_.tN=kw+'CalculatorController';_.tI=0;_.a=null;_.b=0.0;function pm(a){a.b='0';return a;}
function qm(b,a){b.f=a;}
function rm(a){a.b='0';a.a=0.0;a.c=true;a.d=false;no(a.f,a);}
function tm(b,a){b.a=a;no(b.f,b);}
function um(b,a){b.b=a;no(b.f,b);}
function vm(b,a){b.c=a;no(b.f,b);}
function wm(b,a){b.d=a;no(b.f,b);}
function xm(b,a){b.e=a;}
function ym(){var a;a=qq(new pq());rq(a,'***CalculatorData***\n');rq(a,'display = '+this.b+'\n');rq(a,'buffer = '+this.a+'\n');return vq(a);}
function om(){}
_=om.prototype=new gq();_.tS=ym;_.tN=lw+'CalculatorData';_.tI=0;_.a=0.0;_.b=null;_.c=true;_.d=false;_.e=null;_.f=null;function Am(b,a){b.a=a;return b;}
function Cm(){return 'Operator:'+this.a;}
function zm(){}
_=zm.prototype=new gq();_.tS=Cm;_.tN=mw+'AbstractOperator';_.tI=0;_.a=null;function Em(b,a){Am(b,a);return b;}
function Dm(){}
_=Dm.prototype=new zm();_.tN=mw+'BinaryOperator';_.tI=29;function bn(a){Em(a,'+');return a;}
function dn(a){um(a,br(a.a+ip(a.b)));vm(a,true);}
function an(){}
_=an.prototype=new Dm();_.cb=dn;_.tN=mw+'OperatorAdd';_.tI=30;function fn(a){Em(a,'/');return a;}
function hn(a){if(a.d){um(a,br(ip(a.b)/a.a));}else{um(a,br(a.a/ip(a.b)));}vm(a,true);}
function en(){}
_=en.prototype=new Dm();_.cb=hn;_.tN=mw+'OperatorDivide';_.tI=31;function En(b,a){Am(b,a);return b;}
function Dn(){}
_=Dn.prototype=new zm();_.tN=mw+'UnaryOperator';_.tI=32;function kn(a){En(a,'\xB1');return a;}
function mn(a){var b;b=ip(a.b);if(b<0){um(a,br(xp(b)));}else{um(a,br(-b));}}
function jn(){}
_=jn.prototype=new Dn();_.cb=mn;_.tN=mw+'OperatorInvert';_.tI=33;function on(a){Em(a,'x');return a;}
function qn(a){um(a,br(a.a*ip(a.b)));vm(a,true);}
function nn(){}
_=nn.prototype=new Dm();_.cb=qn;_.tN=mw+'OperatorMultiply';_.tI=34;function sn(a){Em(a,'^');return a;}
function un(a){um(a,br(yp(a.a,ip(a.b))));vm(a,true);}
function rn(){}
_=rn.prototype=new Dm();_.cb=un;_.tN=mw+'OperatorPower';_.tI=35;function wn(a){En(a,'\u221A');return a;}
function yn(a){um(a,br(zp(ip(a.b))));}
function vn(){}
_=vn.prototype=new Dn();_.cb=yn;_.tN=mw+'OperatorSqrt';_.tI=36;function An(a){Em(a,'-');return a;}
function Cn(a){if(a.d){um(a,br(ip(a.b)-a.a));}else{um(a,br(a.a-ip(a.b)));}vm(a,true);}
function zn(){}
_=zn.prototype=new Dm();_.cb=Cn;_.tN=mw+'OperatorSubtract';_.tI=37;function oo(v,x){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,w,y,z;vk(v);d=pm(new om());c=gm(new fm(),d);o=vk(new tk());zk(o,(yi(),Ai));pk(o,'calc-Panel');j=sg(new qg(),4,5);pk(j,'calc-Grid');z=vo(new qo(),c,'0');oi(j,3,0,z);n=vo(new qo(),c,'1');oi(j,2,0,n);y=vo(new qo(),c,'2');oi(j,2,1,y);w=vo(new qo(),c,'3');oi(j,2,2,w);i=vo(new qo(),c,'4');oi(j,1,0,i);h=vo(new qo(),c,'5');oi(j,1,1,h);s=vo(new qo(),c,'6');oi(j,1,2,s);r=vo(new qo(),c,'7');oi(j,0,0,r);f=vo(new qo(),c,'8');oi(j,0,1,f);m=vo(new qo(),c,'9');oi(j,0,2,m);p=vo(new qo(),c,'.');oi(j,3,2,p);e=Co(new xo(),c,fn(new en()));oi(j,0,3,e);l=Co(new xo(),c,on(new nn()));oi(j,1,3,l);u=Co(new xo(),c,An(new zn()));oi(j,2,3,u);a=Co(new xo(),c,bn(new an()));oi(j,3,3,a);t=Co(new xo(),c,wn(new vn()));oi(j,0,4,t);q=Co(new xo(),c,sn(new rn()));oi(j,1,4,q);k=Co(new xo(),c,kn(new jn()));oi(j,3,1,k);b=tf(new nf(),'C');b.l(co(new bo(),v,c));pk(b,'calc-Button');oi(j,2,4,b);g=tf(new nf(),'=');g.l(ho(new go(),v,c));pk(g,'calc-Button');oi(j,3,4,g);v.a=jk(new Dj());qm(d,lo(new ko(),v));fk(v.a,'0');ek(v.a,(dk(),gk));wk(o,v.a);wk(o,j);wk(v,o);return v;}
function ao(){}
_=ao.prototype=new tk();_.tN=nw+'CalculatorWidget';_.tI=38;_.a=null;function co(b,a,c){b.a=c;return b;}
function fo(a){im(this.a);}
function bo(){}
_=bo.prototype=new gq();_.D=fo;_.tN=nw+'CalculatorWidget$1';_.tI=39;function ho(b,a,c){b.a=c;return b;}
function jo(a){km(this.a);}
function go(){}
_=go.prototype=new gq();_.D=jo;_.tN=nw+'CalculatorWidget$2';_.tI=40;function lo(b,a){b.a=a;return b;}
function no(b,a){fk(b.a.a,cr(a.b));}
function ko(){}
_=ko.prototype=new gq();_.tN=nw+'CalculatorWidget$3';_.tI=0;function wo(){wo=cw;Fl(),bm;}
function vo(c,a,b){Fl(),bm;tf(c,b);c.l(so(new ro(),c,a,b));pk(c,'calc-Button');return c;}
function qo(){}
_=qo.prototype=new nf();_.tN=ow+'ButtonDigit';_.tI=41;function so(b,a,c,d){b.a=c;b.b=d;return b;}
function uo(a){jm(this.a,this.b);}
function ro(){}
_=ro.prototype=new gq();_.D=uo;_.tN=ow+'ButtonDigit$1';_.tI=42;function Do(){Do=cw;Fl(),bm;}
function Co(c,a,b){Fl(),bm;tf(c,b.a);c.l(zo(new yo(),c,a,b));pk(c,'calc-Button');return c;}
function xo(){}
_=xo.prototype=new nf();_.tN=ow+'ButtonOperator';_.tI=43;function zo(b,a,c,d){b.a=c;b.b=d;return b;}
function Bo(a){lm(this.a,this.b);}
function yo(){}
_=yo.prototype=new gq();_.D=Bo;_.tN=ow+'ButtonOperator$1';_.tI=44;function hr(b,a){b.a=a;return b;}
function jr(){var a,b;a=D(this);b=this.a;if(b!==null){return a+': '+b;}else{return a;}}
function gr(){}
_=gr.prototype=new gq();_.tS=jr;_.tN=pw+'Throwable';_.tI=3;_.a=null;function kp(b,a){hr(b,a);return b;}
function jp(){}
_=jp.prototype=new gr();_.tN=pw+'Exception';_.tI=4;function mq(b,a){kp(b,a);return b;}
function lq(){}
_=lq.prototype=new jp();_.tN=pw+'RuntimeException';_.tI=5;function Fo(){}
_=Fo.prototype=new lq();_.tN=pw+'ArrayStoreException';_.tI=45;function cp(){}
_=cp.prototype=new lq();_.tN=pw+'ClassCastException';_.tI=46;function aq(){aq=cw;{fq();}}
function bq(a){aq();return isNaN(a);}
function cq(a){aq();var b;b=dq(a);if(bq(b)){throw Ep(new Dp(),'Unable to parse '+a);}return b;}
function dq(a){aq();if(eq.test(a)){return parseFloat(a);}else{return Number.NaN;}}
function fq(){aq();eq=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var eq=null;function hp(){hp=cw;aq();}
function ip(a){hp();return cq(a);}
function np(b,a){mq(b,a);return b;}
function mp(){}
_=mp.prototype=new lq();_.tN=pw+'IllegalArgumentException';_.tI=47;function qp(b,a){mq(b,a);return b;}
function pp(){}
_=pp.prototype=new lq();_.tN=pw+'IllegalStateException';_.tI=48;function tp(b,a){mq(b,a);return b;}
function sp(){}
_=sp.prototype=new lq();_.tN=pw+'IndexOutOfBoundsException';_.tI=49;function xp(a){return a<0?-a:a;}
function yp(b,a){return Math.pow(b,a);}
function zp(a){return Math.sqrt(a);}
function Ap(){}
_=Ap.prototype=new lq();_.tN=pw+'NegativeArraySizeException';_.tI=50;function Ep(b,a){np(b,a);return b;}
function Dp(){}
_=Dp.prototype=new mp();_.tN=pw+'NumberFormatException';_.tI=51;function zq(b,a){if(!Db(a,1))return false;return Cq(b,a);}
function Aq(b,a){return b.indexOf(a);}
function Bq(b,a){return b.substr(a,b.length-a);}
function Cq(a,b){return String(a)==b;}
function Dq(a){return zq(this,a);}
function Fq(){var a=Eq;if(!a){a=Eq={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function ar(){return this;}
function br(a){return ''+a;}
function cr(a){return a!==null?a.tS():'null';}
_=String.prototype;_.eQ=Dq;_.hC=Fq;_.tS=ar;_.tN=pw+'String';_.tI=2;var Eq=null;function qq(a){sq(a);return a;}
function rq(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function sq(a){tq(a,'');}
function tq(b,a){b.js=[a];b.length=a.length;}
function vq(a){a.B();return a.js[0];}
function wq(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function xq(){return vq(this);}
function pq(){}
_=pq.prototype=new gq();_.B=wq;_.tS=xq;_.tN=pw+'StringBuffer';_.tI=0;function fr(a){return cb(a);}
function lr(b,a){mq(b,a);return b;}
function kr(){}
_=kr.prototype=new lq();_.tN=pw+'UnsupportedOperationException';_.tI=52;function vr(b,a){b.c=a;return b;}
function xr(a){return a.a<a.c.gb();}
function yr(a){if(!xr(a)){throw new Ev();}return a.c.v(a.b=a.a++);}
function zr(a){if(a.b<0){throw new pp();}a.c.db(a.b);a.a=a.b;a.b=(-1);}
function Ar(){return xr(this);}
function Br(){return yr(this);}
function ur(){}
_=ur.prototype=new gq();_.x=Ar;_.A=Br;_.tN=qw+'AbstractList$IteratorImpl';_.tI=0;_.a=0;_.b=(-1);function dt(f,d,e){var a,b,c;for(b=Eu(f.s());xu(b);){a=yu(b);c=a.t();if(d===null?c===null:d.eQ(c)){if(e){zu(b);}return a;}}return null;}
function et(b){var a;a=b.s();return hs(new gs(),b,a);}
function ft(b){var a;a=iv(b);return vs(new us(),b,a);}
function gt(a){return dt(this,a,false)!==null;}
function ht(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!Db(d,15)){return false;}f=Cb(d,15);c=et(this);e=f.z();if(!ot(c,e)){return false;}for(a=js(c);qs(a);){b=rs(a);h=this.w(b);g=f.w(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function it(b){var a;a=dt(this,b,false);return a===null?null:a.u();}
function jt(){var a,b,c;b=0;for(c=Eu(this.s());xu(c);){a=yu(c);b+=a.hC();}return b;}
function kt(){return et(this);}
function lt(){var a,b,c,d;d='{';a=false;for(c=Eu(this.s());xu(c);){b=yu(c);if(a){d+=', ';}else{a=true;}d+=cr(b.t());d+='=';d+=cr(b.u());}return d+'}';}
function fs(){}
_=fs.prototype=new gq();_.o=gt;_.eQ=ht;_.w=it;_.hC=jt;_.z=kt;_.tS=lt;_.tN=qw+'AbstractMap';_.tI=53;function ot(e,b){var a,c,d;if(b===e){return true;}if(!Db(b,16)){return false;}c=Cb(b,16);if(c.gb()!=e.gb()){return false;}for(a=c.y();a.x();){d=a.A();if(!e.p(d)){return false;}}return true;}
function pt(a){return ot(this,a);}
function qt(){var a,b,c;a=0;for(b=this.y();b.x();){c=b.A();if(c!==null){a+=c.hC();}}return a;}
function mt(){}
_=mt.prototype=new nr();_.eQ=pt;_.hC=qt;_.tN=qw+'AbstractSet';_.tI=54;function hs(b,a,c){b.a=a;b.b=c;return b;}
function js(b){var a;a=Eu(b.b);return os(new ns(),b,a);}
function ks(a){return this.a.o(a);}
function ls(){return js(this);}
function ms(){return this.b.a.c;}
function gs(){}
_=gs.prototype=new mt();_.p=ks;_.y=ls;_.gb=ms;_.tN=qw+'AbstractMap$1';_.tI=55;function os(b,a,c){b.a=c;return b;}
function qs(a){return a.a.x();}
function rs(b){var a;a=b.a.A();return a.t();}
function ss(){return qs(this);}
function ts(){return rs(this);}
function ns(){}
_=ns.prototype=new gq();_.x=ss;_.A=ts;_.tN=qw+'AbstractMap$2';_.tI=0;function vs(b,a,c){b.a=a;b.b=c;return b;}
function xs(b){var a;a=Eu(b.b);return Cs(new Bs(),b,a);}
function ys(a){return hv(this.a,a);}
function zs(){return xs(this);}
function As(){return this.b.a.c;}
function us(){}
_=us.prototype=new nr();_.p=ys;_.y=zs;_.gb=As;_.tN=qw+'AbstractMap$3';_.tI=0;function Cs(b,a,c){b.a=c;return b;}
function Es(a){return a.a.x();}
function Fs(a){var b;b=a.a.A().u();return b;}
function at(){return Es(this);}
function bt(){return Fs(this);}
function Bs(){}
_=Bs.prototype=new gq();_.x=at;_.A=bt;_.tN=qw+'AbstractMap$4';_.tI=0;function fv(){fv=cw;mv=sv();}
function cv(a){{ev(a);}}
function dv(a){fv();cv(a);return a;}
function ev(a){a.a=jb();a.d=kb();a.b=bc(mv,fb);a.c=0;}
function gv(b,a){if(Db(a,1)){return wv(b.d,Cb(a,1))!==mv;}else if(a===null){return b.b!==mv;}else{return vv(b.a,a,a.hC())!==mv;}}
function hv(a,b){if(a.b!==mv&&uv(a.b,b)){return true;}else if(rv(a.d,b)){return true;}else if(pv(a.a,b)){return true;}return false;}
function iv(a){return Cu(new tu(),a);}
function jv(c,a){var b;if(Db(a,1)){b=wv(c.d,Cb(a,1));}else if(a===null){b=c.b;}else{b=vv(c.a,a,a.hC());}return b===mv?null:b;}
function kv(c,a,d){var b;{b=c.b;c.b=d;}if(b===mv){++c.c;return null;}else{return b;}}
function lv(c,a){var b;if(Db(a,1)){b=zv(c.d,Cb(a,1));}else if(a===null){b=c.b;c.b=bc(mv,fb);}else{b=yv(c.a,a,a.hC());}if(b===mv){return null;}else{--c.c;return b;}}
function nv(e,c){fv();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.n(a[f]);}}}}
function ov(d,a){fv();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=nu(c.substring(1),e);a.n(b);}}}
function pv(f,h){fv();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.u();if(uv(h,d)){return true;}}}}return false;}
function qv(a){return gv(this,a);}
function rv(c,d){fv();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(uv(d,a)){return true;}}}return false;}
function sv(){fv();}
function tv(){return iv(this);}
function uv(a,b){fv();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function xv(a){return jv(this,a);}
function vv(f,h,e){fv();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(uv(h,d)){return c.u();}}}}
function wv(b,a){fv();return b[':'+a];}
function yv(f,h,e){fv();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(uv(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.u();}}}}
function zv(c,a){fv();a=':'+a;var b=c[a];delete c[a];return b;}
function ju(){}
_=ju.prototype=new fs();_.o=qv;_.s=tv;_.w=xv;_.tN=qw+'HashMap';_.tI=56;_.a=null;_.b=null;_.c=0;_.d=null;var mv;function lu(b,a,c){b.a=a;b.b=c;return b;}
function nu(a,b){return lu(new ku(),a,b);}
function ou(b){var a;if(Db(b,17)){a=Cb(b,17);if(uv(this.a,a.t())&&uv(this.b,a.u())){return true;}}return false;}
function pu(){return this.a;}
function qu(){return this.b;}
function ru(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function su(){return this.a+'='+this.b;}
function ku(){}
_=ku.prototype=new gq();_.eQ=ou;_.t=pu;_.u=qu;_.hC=ru;_.tS=su;_.tN=qw+'HashMap$EntryImpl';_.tI=57;_.a=null;_.b=null;function Cu(b,a){b.a=a;return b;}
function Eu(a){return vu(new uu(),a.a);}
function Fu(c){var a,b,d;if(Db(c,17)){a=Cb(c,17);b=a.t();if(gv(this.a,b)){d=jv(this.a,b);return uv(a.u(),d);}}return false;}
function av(){return Eu(this);}
function bv(){return this.a.c;}
function tu(){}
_=tu.prototype=new mt();_.p=Fu;_.y=av;_.gb=bv;_.tN=qw+'HashMap$EntrySet';_.tI=58;function vu(c,b){var a;c.c=b;a=tt(new rt());if(c.c.b!==(fv(),mv)){ut(a,lu(new ku(),null,c.c.b));}ov(c.c.d,a);nv(c.c.a,a);c.a=Er(a);return c;}
function xu(a){return xr(a.a);}
function yu(a){return a.b=Cb(yr(a.a),17);}
function zu(a){if(a.b===null){throw qp(new pp(),'Must call next() before remove().');}else{zr(a.a);lv(a.c,a.b.t());a.b=null;}}
function Au(){return xu(this);}
function Bu(){return yu(this);}
function uu(){}
_=uu.prototype=new gq();_.x=Au;_.A=Bu;_.tN=qw+'HashMap$EntrySetIterator';_.tI=0;_.a=null;_.b=null;function Ev(){}
_=Ev.prototype=new lq();_.tN=qw+'NoSuchElementException';_.tI=59;function Eo(){em(new cm());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{Eo();}catch(a){b(d);}else{Eo();}}
var ac=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1,4:1},{2:1},{5:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{14:1},{14:1},{14:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,8:1,9:1,10:1,11:1},{5:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{12:1},{12:1},{12:1},{13:1},{13:1},{12:1},{12:1},{13:1},{12:1},{7:1,9:1,10:1,11:1},{6:1},{6:1},{7:1,9:1,10:1,11:1},{6:1},{7:1,9:1,10:1,11:1},{6:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{15:1},{16:1},{16:1},{15:1},{17:1},{16:1},{3:1}];if (com_manning_gwtip_calculator_Calculator) {  var __gwt_initHandlers = com_manning_gwtip_calculator_Calculator.__gwt_initHandlers;  com_manning_gwtip_calculator_Calculator.onScriptLoad(gwtOnLoad);}})();