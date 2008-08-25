(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,Av='com.google.gwt.core.client.',Bv='com.google.gwt.lang.',Cv='com.google.gwt.user.client.',Dv='com.google.gwt.user.client.impl.',Ev='com.google.gwt.user.client.ui.',Fv='com.google.gwt.user.client.ui.impl.',aw='com.manning.gwtip.calculator.client.',bw='com.manning.gwtip.calculator.client.controller.',cw='com.manning.gwtip.calculator.client.model.',dw='com.manning.gwtip.calculator.client.model.operator.',ew='com.manning.gwtip.calculator.client.view.',fw='com.manning.gwtip.calculator.client.view.button.',gw='java.lang.',hw='java.util.';function zv(){}
function Fp(a){return this===a;}
function aq(){return Cq(this);}
function bq(){return this.tN+'@'+this.hC();}
function Dp(){}
_=Dp.prototype={};_.eQ=Fp;_.hC=aq;_.tS=bq;_.toString=function(){return this.tS();};_.tN=gw+'Object';_.tI=1;function D(a){return a==null?null:a.tN;}
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
_=fb.prototype=new Dp();_.eQ=mb;_.hC=nb;_.tS=pb;_.tN=Av+'JavaScriptObject';_.tI=7;function rb(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function tb(a,b,c){return a[b]=c;}
function ub(b,a){return b[a];}
function vb(a){return a.length;}
function xb(e,d,c,b,a){return wb(e,d,c,b,0,vb(b),a);}
function wb(j,i,g,c,e,a,b){var d,f,h;if((f=ub(c,e))<0){throw new rp();}h=rb(new qb(),f,ub(i,e),ub(g,e),j);++e;if(e<a){j=sq(j,1);for(d=0;d<f;++d){tb(h,d,wb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){tb(h,d,b);}}return h;}
function yb(a,b,c){if(c!==null&&a.b!=0&& !Db(c,a.b)){throw new wo();}return tb(a,b,c);}
function qb(){}
_=qb.prototype=new Dp();_.tN=Bv+'Array';_.tI=0;function Bb(b,a){return !(!(b&&ac[b][a]));}
function Cb(b,a){if(b!=null)Bb(b.tI,a)||Fb();return b;}
function Db(b,a){return b!=null&&Bb(b.tI,a);}
function Fb(){throw new zo();}
function Eb(a){if(a!==null){throw new zo();}return a;}
function bc(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var ac;function fc(){fc=zv;Fc=kt(new it());{Ac=new he();le(Ac);}}
function gc(b,a){fc();ye(Ac,b,a);}
function hc(a,b){fc();return je(Ac,a,b);}
function ic(){fc();return Ae(Ac,'button');}
function jc(){fc();return Ae(Ac,'div');}
function kc(a){fc();return Ae(Ac,a);}
function lc(){fc();return Be(Ac,'text');}
function mc(){fc();return Ae(Ac,'tbody');}
function nc(){fc();return Ae(Ac,'td');}
function oc(){fc();return Ae(Ac,'tr');}
function pc(){fc();return Ae(Ac,'table');}
function sc(b,a,d){fc();var c;c=E;{rc(b,a,d);}}
function rc(b,a,c){fc();var d;if(a===Ec){if(uc(b)==8192){Ec=null;}}d=qc;qc=b;try{c.C(b);}finally{qc=d;}}
function tc(b,a){fc();Ce(Ac,b,a);}
function uc(a){fc();return De(Ac,a);}
function vc(a){fc();re(Ac,a);}
function wc(a){fc();return se(Ac,a);}
function xc(a){fc();return Ee(Ac,a);}
function yc(a){fc();return te(Ac,a);}
function zc(a){fc();return ue(Ac,a);}
function Bc(c,a,b){fc();we(Ac,c,a,b);}
function Cc(a){fc();var b,c;c=true;if(Fc.b>0){b=Eb(ot(Fc,Fc.b-1));if(!(c=null.ib())){tc(a,true);vc(a);}}return c;}
function Dc(b,a){fc();Fe(Ac,b,a);}
function ad(a,b,c){fc();af(Ac,a,b,c);}
function bd(a,b){fc();bf(Ac,a,b);}
function cd(a,b){fc();cf(Ac,a,b);}
function dd(b,a,c){fc();df(Ac,b,a,c);}
function ed(a,b){fc();ne(Ac,a,b);}
function fd(a){fc();return oe(Ac,a);}
var qc=null,Ac=null,Ec=null,Fc;function id(a){if(Db(a,4)){return hc(this,Cb(a,4));}return hb(bc(this,gd),a);}
function jd(){return ib(bc(this,gd));}
function kd(){return fd(this);}
function gd(){}
_=gd.prototype=new fb();_.eQ=id;_.hC=jd;_.tS=kd;_.tN=Cv+'Element';_.tI=8;function od(a){return hb(bc(this,ld),a);}
function pd(){return ib(bc(this,ld));}
function qd(){return wc(this);}
function ld(){}
_=ld.prototype=new fb();_.eQ=od;_.hC=pd;_.tS=qd;_.tN=Cv+'Event';_.tI=9;function wd(){wd=zv;yd=kt(new it());{xd();}}
function xd(){wd();Cd(new sd());}
var yd;function ud(){while((wd(),yd).b>0){Eb(ot((wd(),yd),0)).ib();}}
function vd(){return null;}
function sd(){}
_=sd.prototype=new Dp();_.ab=ud;_.bb=vd;_.tN=Cv+'Timer$1';_.tI=10;function Bd(){Bd=zv;Dd=kt(new it());fe=kt(new it());{be();}}
function Cd(a){Bd();lt(Dd,a);}
function Ed(){Bd();var a,b;for(a=vr(Dd);or(a);){b=Cb(pr(a),5);b.ab();}}
function Fd(){Bd();var a,b,c,d;d=null;for(a=vr(Dd);or(a);){b=Cb(pr(a),5);c=b.bb();{d=c;}}return d;}
function ae(){Bd();var a,b;for(a=vr(fe);or(a);){b=Eb(pr(a));null.ib();}}
function be(){Bd();__gwt_initHandlers(function(){ee();},function(){return de();},function(){ce();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ce(){Bd();var a;a=E;{Ed();}}
function de(){Bd();var a;a=E;{return Fd();}}
function ee(){Bd();var a;a=E;{ae();}}
var Dd,fe;function ye(c,b,a){b.appendChild(a);}
function Ae(b,a){return $doc.createElement(a);}
function Be(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function Ce(c,b,a){b.cancelBubble=a;}
function De(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function Ee(b,a){return a.__eventBits||0;}
function Fe(c,b,a){b.removeChild(a);}
function af(c,a,b,d){a[b]=d;}
function bf(c,a,b){a.__listener=b;}
function cf(c,a,b){if(!b){b='';}a.innerHTML=b;}
function df(c,b,a,d){b.style[a]=d;}
function ge(){}
_=ge.prototype=new Dp();_.tN=Dv+'DOMImpl';_.tI=0;function re(b,a){a.preventDefault();}
function se(b,a){return a.toString();}
function te(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function ue(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function ve(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){sc(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!Cc(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)sc(b,a,c);};$wnd.__captureElem=null;}
function we(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function xe(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function pe(){}
_=pe.prototype=new ge();_.tN=Dv+'DOMImplStandard';_.tI=0;function je(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function le(a){ve(a);ke(a);}
function ke(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function ne(c,b,a){xe(c,b,a);me(c,b,a);}
function me(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function oe(d,a){var b=a.cloneNode(true);var c=$doc.createElement('DIV');c.appendChild(b);outer=c.innerHTML;b.innerHTML='';return outer;}
function he(){}
_=he.prototype=new pe();_.tN=Dv+'DOMImplMozilla';_.tI=0;function lk(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function mk(b,a){if(b.k!==null){lk(b,b.k,a);}b.k=a;}
function nk(b,a){pk(b.k,a);}
function ok(b,a){ed(b.k,a|xc(b.k));}
function pk(a,b){ad(a,'className',b);}
function qk(){if(this.k===null){return '(null handle)';}return fd(this.k);}
function jk(){}
_=jk.prototype=new Dp();_.tS=qk;_.tN=Ev+'UIObject';_.tI=0;_.k=null;function jl(a){if(a.i){throw hp(new gp(),"Should only call onAttach when the widget is detached from the browser's document");}a.i=true;bd(a.k,a);a.q();a.E();}
function kl(a){if(!a.i){throw hp(new gp(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.F();}finally{a.r();bd(a.k,null);a.i=false;}}
function ll(a){if(a.j!==null){a.j.eb(a);}else if(a.j!==null){throw hp(new gp(),"This widget's parent does not implement HasWidgets");}}
function ml(b,a){if(b.i){bd(b.k,null);}mk(b,a);if(b.i){bd(a,b);}}
function nl(c,b){var a;a=c.j;if(b===null){if(a!==null&&a.i){kl(c);}c.j=null;}else{if(a!==null){throw hp(new gp(),'Cannot set a new parent without first clearing the old parent');}c.j=b;if(b.i){jl(c);}}}
function ol(){}
function pl(){}
function ql(a){}
function rl(){}
function sl(){}
function tl(a){ml(this,a);}
function zk(){}
_=zk.prototype=new jk();_.q=ol;_.r=pl;_.C=ql;_.E=rl;_.F=sl;_.fb=tl;_.tN=Ev+'Widget';_.tI=11;_.i=false;_.j=null;function dj(b,a){nl(a,b);}
function fj(b,a){nl(a,null);}
function gj(){var a,b;for(b=this.y();b.x();){a=Cb(b.A(),7);jl(a);}}
function hj(){var a,b;for(b=this.y();b.x();){a=Cb(b.A(),7);kl(a);}}
function ij(){}
function jj(){}
function cj(){}
_=cj.prototype=new zk();_.q=gj;_.r=hj;_.E=ij;_.F=jj;_.tN=Ev+'Panel';_.tI=12;function Ff(a){a.f=al(new Ak(),a);}
function ag(a){Ff(a);return a;}
function bg(c,a,b){ll(a);bl(c.f,a);gc(b,a.k);dj(c,a);}
function dg(b,c){var a;if(c.j!==b){return false;}fj(b,c);a=c.k;Dc(zc(a),a);hl(b.f,c);return true;}
function eg(){return fl(this.f);}
function fg(a){return dg(this,a);}
function Ef(){}
_=Ef.prototype=new cj();_.y=eg;_.eb=fg;_.tN=Ev+'ComplexPanel';_.tI=13;function ff(a){ag(a);a.fb(jc());dd(a.k,'position','relative');dd(a.k,'overflow','hidden');return a;}
function gf(a,b){bg(a,b,a.k);}
function jf(a){dd(a,'left','');dd(a,'top','');dd(a,'position','');}
function kf(b){var a;a=dg(this,b);if(a){jf(b.k);}return a;}
function ef(){}
_=ef.prototype=new Ef();_.eb=kf;_.tN=Ev+'AbsolutePanel';_.tI=14;function ig(){ig=zv;wl(),yl;}
function hg(b,a){wl(),yl;kg(b,a);return b;}
function jg(b,a){switch(uc(a)){case 1:if(b.b!==null){Cf(b.b,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function kg(b,a){ml(b,a);ok(b,7041);}
function lg(a){if(this.b===null){this.b=Af(new zf());}lt(this.b,a);}
function mg(a){jg(this,a);}
function ng(a){kg(this,a);}
function gg(){}
_=gg.prototype=new zk();_.l=lg;_.C=mg;_.fb=ng;_.tN=Ev+'FocusWidget';_.tI=15;_.b=null;function of(){of=zv;wl(),yl;}
function nf(b,a){wl(),yl;hg(b,a);return b;}
function pf(b,a){cd(b.k,a);}
function mf(){}
_=mf.prototype=new gg();_.tN=Ev+'ButtonBase';_.tI=16;function sf(){sf=zv;wl(),yl;}
function qf(a){wl(),yl;nf(a,ic());tf(a.k);nk(a,'gwt-Button');return a;}
function rf(b,a){wl(),yl;qf(b);pf(b,a);return b;}
function tf(b){sf();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function lf(){}
_=lf.prototype=new mf();_.tN=Ev+'Button';_.tI=17;function vf(a){ag(a);a.e=pc();a.d=mc();gc(a.e,a.d);a.fb(a.e);return a;}
function xf(c,b,a){ad(b,'align',a.a);}
function yf(c,b,a){dd(b,'verticalAlign',a.a);}
function uf(){}
_=uf.prototype=new Ef();_.tN=Ev+'CellPanel';_.tI=18;_.d=null;_.e=null;function fr(d,a,b){var c;while(a.x()){c=a.A();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function hr(a){throw cr(new br(),'add');}
function ir(b){var a;a=fr(this,this.y(),b);return a!==null;}
function jr(){var a,b,c;c=hq(new gq());a=null;iq(c,'[');b=this.y();while(b.x()){if(a!==null){iq(c,a);}else{a=', ';}iq(c,zq(b.A()));}iq(c,']');return mq(c);}
function er(){}
_=er.prototype=new Dp();_.n=hr;_.p=ir;_.tS=jr;_.tN=hw+'AbstractCollection';_.tI=0;function ur(b,a){throw kp(new jp(),'Index: '+a+', Size: '+b.b);}
function vr(a){return mr(new lr(),a);}
function wr(b,a){throw cr(new br(),'add');}
function xr(a){this.m(this.gb(),a);return true;}
function yr(e){var a,b,c,d,f;if(e===this){return true;}if(!Db(e,14)){return false;}f=Cb(e,14);if(this.gb()!=f.gb()){return false;}c=vr(this);d=f.y();while(or(c)){a=pr(c);b=pr(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function zr(){var a,b,c,d;c=1;a=31;b=vr(this);while(or(b)){d=pr(b);c=31*c+(d===null?0:d.hC());}return c;}
function Ar(){return vr(this);}
function Br(a){throw cr(new br(),'remove');}
function kr(){}
_=kr.prototype=new er();_.m=wr;_.n=xr;_.eQ=yr;_.hC=zr;_.y=Ar;_.db=Br;_.tN=hw+'AbstractList';_.tI=19;function jt(a){{mt(a);}}
function kt(a){jt(a);return a;}
function lt(b,a){Ct(b.a,b.b++,a);return true;}
function mt(a){a.a=jb();a.b=0;}
function ot(b,a){if(a<0||a>=b.b){ur(b,a);}return yt(b.a,a);}
function pt(b,a){return qt(b,a,0);}
function qt(c,b,a){if(a<0){ur(c,a);}for(;a<c.b;++a){if(xt(b,yt(c.a,a))){return a;}}return (-1);}
function rt(c,a){var b;b=ot(c,a);At(c.a,a,1);--c.b;return b;}
function st(d,a,b){var c;c=ot(d,a);Ct(d.a,a,b);return c;}
function ut(a,b){if(a<0||a>this.b){ur(this,a);}tt(this.a,a,b);++this.b;}
function vt(a){return lt(this,a);}
function tt(a,b,c){a.splice(b,0,c);}
function wt(a){return pt(this,a)!=(-1);}
function xt(a,b){return a===b||a!==null&&a.eQ(b);}
function zt(a){return ot(this,a);}
function yt(a,b){return a[b];}
function Bt(a){return rt(this,a);}
function At(a,c,b){a.splice(c,b);}
function Ct(a,b,c){a[b]=c;}
function Dt(){return this.b;}
function it(){}
_=it.prototype=new kr();_.m=ut;_.n=vt;_.p=wt;_.v=zt;_.db=Bt;_.gb=Dt;_.tN=hw+'ArrayList';_.tI=20;_.a=null;_.b=0;function Af(a){kt(a);return a;}
function Cf(d,c){var a,b;for(a=vr(d);or(a);){b=Cb(pr(a),6);b.D(c);}}
function zf(){}
_=zf.prototype=new it();_.tN=Ev+'ClickListenerCollection';_.tI=21;function Dh(a){a.h=th(new oh());}
function Eh(a){Dh(a);a.g=pc();a.c=mc();gc(a.g,a.c);a.fb(a.g);ok(a,1);return a;}
function Fh(d,c,b){var a;ai(d,c);if(b<0){throw kp(new jp(),'Column '+b+' must be non-negative: '+b);}a=d.a;if(a<=b){throw kp(new jp(),'Column index: '+b+', Column size: '+d.a);}}
function ai(c,a){var b;b=c.b;if(a>=b||a<0){throw kp(new jp(),'Row index: '+a+', Row size: '+b);}}
function bi(e,c,b,a){var d;d=gh(e.d,c,b);fi(e,d,a);return d;}
function di(a){return nc();}
function ei(d,b,a){var c,e;e=nh(d.f,d.c,b);c=sg(d);Bc(e,c,a);}
function fi(d,c,a){var b,e;b=yc(c);e=null;if(b!==null){e=vh(d.h,b);}if(e!==null){ii(d,e);return true;}else{if(a){cd(c,'');}return false;}}
function ii(b,c){var a;if(c.j!==b){return false;}fj(b,c);a=c.k;Dc(zc(a),a);yh(b.h,a);return true;}
function gi(d,b,a){var c,e;Fh(d,b,a);c=bi(d,b,a,false);e=nh(d.f,d.c,b);Dc(e,c);}
function hi(d,c){var a,b;b=d.a;for(a=0;a<b;++a){bi(d,c,a,false);}Dc(d.c,nh(d.f,d.c,c));}
function ji(b,a){b.d=a;}
function ki(b,a){b.e=a;kh(b.e);}
function li(b,a){b.f=a;}
function mi(d,b,a,e){var c;tg(d,b,a);if(e!==null){ll(e);c=bi(d,b,a,true);wh(d.h,e);gc(c,e.k);dj(d,e);}}
function ni(){return zh(this.h);}
function oi(a){switch(uc(a)){case 1:{break;}default:}}
function pi(a){return ii(this,a);}
function zg(){}
_=zg.prototype=new cj();_.y=ni;_.C=oi;_.eb=pi;_.tN=Ev+'HTMLTable';_.tI=22;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;function pg(a){Eh(a);ji(a,dh(new ch(),a));li(a,new lh());ki(a,ih(new hh(),a));return a;}
function qg(c,b,a){pg(c);xg(c,b,a);return c;}
function sg(b){var a;a=di(b);cd(a,'&nbsp;');return a;}
function tg(c,b,a){ug(c,b);if(a<0){throw kp(new jp(),'Cannot access a column with a negative index: '+a);}if(a>=c.a){throw kp(new jp(),'Column index: '+a+', Column size: '+c.a);}}
function ug(b,a){if(a<0){throw kp(new jp(),'Cannot access a row with a negative index: '+a);}if(a>=b.b){throw kp(new jp(),'Row index: '+a+', Row size: '+b.b);}}
function xg(c,b,a){vg(c,a);wg(c,b);}
function vg(d,a){var b,c;if(d.a==a){return;}if(a<0){throw kp(new jp(),'Cannot set number of columns to '+a);}if(d.a>a){for(b=0;b<d.b;b++){for(c=d.a-1;c>=a;c--){gi(d,b,c);}}}else{for(b=0;b<d.b;b++){for(c=d.a;c<a;c++){ei(d,b,c);}}}d.a=a;}
function wg(b,a){if(b.b==a){return;}if(a<0){throw kp(new jp(),'Cannot set number of rows to '+a);}if(b.b<a){yg(b.c,a-b.b,b.a);b.b=a;}else{while(b.b>a){hi(b,--b.b);}}}
function yg(g,f,c){var h=$doc.createElement('td');h.innerHTML='&nbsp;';var d=$doc.createElement('tr');for(var b=0;b<c;b++){var a=h.cloneNode(true);d.appendChild(a);}g.appendChild(d);for(var e=1;e<f;e++){g.appendChild(d.cloneNode(true));}}
function og(){}
_=og.prototype=new zg();_.tN=Ev+'Grid';_.tI=23;_.a=0;_.b=0;function Bg(a){{Eg(a);}}
function Cg(b,a){b.b=a;Bg(b);return b;}
function Eg(a){while(++a.a<a.b.b.b){if(ot(a.b.b,a.a)!==null){return;}}}
function Fg(a){return a.a<a.b.b.b;}
function ah(){return Fg(this);}
function bh(){var a;if(!Fg(this)){throw new vv();}a=ot(this.b.b,this.a);Eg(this);return a;}
function Ag(){}
_=Ag.prototype=new Dp();_.x=ah;_.A=bh;_.tN=Ev+'HTMLTable$1';_.tI=0;_.a=(-1);function dh(b,a){b.a=a;return b;}
function fh(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function gh(c,b,a){return fh(c,c.a.c,b,a);}
function ch(){}
_=ch.prototype=new Dp();_.tN=Ev+'HTMLTable$CellFormatter';_.tI=0;function ih(b,a){b.b=a;return b;}
function kh(a){if(a.a===null){a.a=kc('colgroup');Bc(a.b.g,a.a,0);gc(a.a,kc('col'));}}
function hh(){}
_=hh.prototype=new Dp();_.tN=Ev+'HTMLTable$ColumnFormatter';_.tI=0;_.a=null;function nh(c,a,b){return a.rows[b];}
function lh(){}
_=lh.prototype=new Dp();_.tN=Ev+'HTMLTable$RowFormatter';_.tI=0;function sh(a){a.b=kt(new it());}
function th(a){sh(a);return a;}
function vh(c,a){var b;b=Bh(a);if(b<0){return null;}return Cb(ot(c.b,b),7);}
function wh(b,c){var a;if(b.a===null){a=b.b.b;lt(b.b,c);}else{a=b.a.a;st(b.b,a,c);b.a=b.a.b;}Ch(c.k,a);}
function xh(c,a,b){Ah(a);st(c.b,b,null);c.a=qh(new ph(),b,c.a);}
function yh(c,a){var b;b=Bh(a);xh(c,a,b);}
function zh(a){return Cg(new Ag(),a);}
function Ah(a){a['__widgetID']=null;}
function Bh(a){var b=a['__widgetID'];return b==null?-1:b;}
function Ch(a,b){a['__widgetID']=b;}
function oh(){}
_=oh.prototype=new Dp();_.tN=Ev+'HTMLTable$WidgetMapper';_.tI=0;_.a=null;function qh(c,a,b){c.a=a;c.b=b;return c;}
function ph(){}
_=ph.prototype=new Dp();_.tN=Ev+'HTMLTable$WidgetMapper$FreeNode';_.tI=0;_.a=0;_.b=null;function wi(){wi=zv;ui(new ti(),'center');xi=ui(new ti(),'left');yi=ui(new ti(),'right');}
var xi,yi;function ui(b,a){b.a=a;return b;}
function ti(){}
_=ti.prototype=new Dp();_.tN=Ev+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=0;_.a=null;function Ei(){Ei=zv;Ci(new Bi(),'bottom');Ci(new Bi(),'middle');Fi=Ci(new Bi(),'top');}
var Fi;function Ci(a,b){a.a=b;return a;}
function Bi(){}
_=Bi.prototype=new Dp();_.tN=Ev+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=0;_.a=null;function qj(){qj=zv;vj=Au(new au());}
function pj(b,a){qj();ff(b);if(a===null){a=rj();}b.fb(a);jl(b);return b;}
function sj(){qj();return tj(null);}
function tj(c){qj();var a,b;b=Cb(av(vj,c),8);if(b!==null){return b;}a=null;if(vj.c==0){uj();}bv(vj,c,b=pj(new kj(),a));return b;}
function rj(){qj();return $doc.body;}
function uj(){qj();Cd(new lj());}
function kj(){}
_=kj.prototype=new ef();_.tN=Ev+'RootPanel';_.tI=24;var vj;function nj(){var a,b;for(b=os(Cs((qj(),vj)));vs(b);){a=Cb(ws(b),8);if(a.i){kl(a);}}}
function oj(){return null;}
function lj(){}
_=lj.prototype=new Dp();_.ab=nj;_.bb=oj;_.tN=Ev+'RootPanel$1';_.tI=25;function bk(){bk=zv;wl(),yl;Ej(new Dj(),'center');Ej(new Dj(),'justify');Ej(new Dj(),'left');ek=Ej(new Dj(),'right');}
function ak(b,a){bk();hg(b,a);ok(b,1024);return b;}
function dk(b,a){ad(b.k,'value',a!==null?a:'');}
function ck(b,a){dd(b.k,'textAlign',a.a);}
function fk(a){if(this.a===null){this.a=Af(new zf());}lt(this.a,a);}
function gk(a){var b;jg(this,a);b=uc(a);if(b==1){if(this.a!==null){Cf(this.a,this);}}else{}}
function Cj(){}
_=Cj.prototype=new gg();_.l=fk;_.C=gk;_.tN=Ev+'TextBoxBase';_.tI=26;_.a=null;var ek;function ik(){ik=zv;bk();}
function hk(a){ik();ak(a,lc());nk(a,'gwt-TextBox');return a;}
function Bj(){}
_=Bj.prototype=new Cj();_.tN=Ev+'TextBox';_.tI=27;function Ej(b,a){b.a=a;return b;}
function Dj(){}
_=Dj.prototype=new Dp();_.tN=Ev+'TextBoxBase$TextAlignConstant';_.tI=0;_.a=null;function sk(a){a.b=(wi(),xi);a.c=(Ei(),Fi);}
function tk(a){vf(a);sk(a);ad(a.e,'cellSpacing','0');ad(a.e,'cellPadding','0');return a;}
function uk(b,d){var a,c;c=oc();a=wk(b);gc(c,a);gc(b.d,c);bg(b,d,a);}
function wk(b){var a;a=nc();xf(b,a,b.b);yf(b,a,b.c);return a;}
function xk(b,a){b.b=a;}
function yk(c){var a,b;b=zc(c.k);a=dg(this,c);if(a){Dc(this.d,zc(b));}return a;}
function rk(){}
_=rk.prototype=new uf();_.eb=yk;_.tN=Ev+'VerticalPanel';_.tI=28;function al(b,a){b.a=xb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[7],[4],null);return b;}
function bl(a,b){el(a,b,a.b);}
function dl(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function el(d,e,a){var b,c;if(a<0||a>d.b){throw new jp();}if(d.b==d.a.a){c=xb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[7],[d.a.a*2],null);for(b=0;b<d.a.a;++b){yb(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){yb(d.a,b,d.a[b-1]);}yb(d.a,a,e);}
function fl(a){return Ck(new Bk(),a);}
function gl(c,b){var a;if(b<0||b>=c.b){throw new jp();}--c.b;for(a=b;a<c.b;++a){yb(c.a,a,c.a[a+1]);}yb(c.a,c.b,null);}
function hl(b,c){var a;a=dl(b,c);if(a==(-1)){throw new vv();}gl(b,a);}
function Ak(){}
_=Ak.prototype=new Dp();_.tN=Ev+'WidgetCollection';_.tI=0;_.a=null;_.b=0;function Ck(b,a){b.b=a;return b;}
function Ek(){return this.a<this.b.b-1;}
function Fk(){if(this.a>=this.b.b){throw new vv();}return this.b.a[++this.a];}
function Bk(){}
_=Bk.prototype=new Dp();_.x=Ek;_.A=Fk;_.tN=Ev+'WidgetCollection$WidgetIterator';_.tI=0;_.a=(-1);function wl(){wl=zv;xl=vl(new ul());yl=xl;}
function vl(a){wl();return a;}
function ul(){}
_=ul.prototype=new Dp();_.tN=Fv+'FocusImpl';_.tI=0;var xl,yl;function Bl(a){gf(sj(),fo(new xn(),'calculator'));}
function zl(){}
_=zl.prototype=new Dp();_.tN=aw+'Calculator';_.tI=0;function Dl(b,a){b.a=a;return b;}
function Fl(a){im(a.a);om(a.a,null);}
function am(b,a){if(b.a.d){om(b.a,null);}if(b.a.c){if(b.a.d){km(b.a,0.0);}else{km(b.a,Fo(b.a.b));}lm(b.a,a);mm(b.a,false);}else{if(rq(b.a.b,'.')==(-1)){lm(b.a,b.a.b+a);}else if(!qq(a,'.')){lm(b.a,b.a.b+a);}}nm(b.a,false);}
function bm(a){if(a.a.e!==null){if(!a.a.d){a.b=Fo(a.a.b);}a.a.e.cb(a.a);km(a.a,a.b);nm(a.a,true);}}
function cm(b,a){if(Db(a,12)){if(b.a.e===null||b.a.d){km(b.a,Fo(b.a.b));mm(b.a,true);om(b.a,a);}else{b.a.e.cb(b.a);om(b.a,a);}}else if(Db(a,13)){a.cb(b.a);}nm(b.a,false);}
function Cl(){}
_=Cl.prototype=new Dp();_.tN=bw+'CalculatorController';_.tI=0;_.a=null;_.b=0.0;function gm(a){a.b='0';return a;}
function hm(b,a){b.f=a;}
function im(a){a.b='0';a.a=0.0;a.c=true;a.d=false;eo(a.f,a);}
function km(b,a){b.a=a;eo(b.f,b);}
function lm(b,a){b.b=a;eo(b.f,b);}
function mm(b,a){b.c=a;eo(b.f,b);}
function nm(b,a){b.d=a;eo(b.f,b);}
function om(b,a){b.e=a;}
function pm(){var a;a=hq(new gq());iq(a,'***CalculatorData***\n');iq(a,'display = '+this.b+'\n');iq(a,'buffer = '+this.a+'\n');return mq(a);}
function fm(){}
_=fm.prototype=new Dp();_.tS=pm;_.tN=cw+'CalculatorData';_.tI=0;_.a=0.0;_.b=null;_.c=true;_.d=false;_.e=null;_.f=null;function rm(b,a){b.a=a;return b;}
function tm(){return 'Operator:'+this.a;}
function qm(){}
_=qm.prototype=new Dp();_.tS=tm;_.tN=dw+'AbstractOperator';_.tI=0;_.a=null;function vm(b,a){rm(b,a);return b;}
function um(){}
_=um.prototype=new qm();_.tN=dw+'BinaryOperator';_.tI=29;function ym(a){vm(a,'+');return a;}
function Am(a){lm(a,yq(a.a+Fo(a.b)));mm(a,true);}
function xm(){}
_=xm.prototype=new um();_.cb=Am;_.tN=dw+'OperatorAdd';_.tI=30;function Cm(a){vm(a,'/');return a;}
function Em(a){if(a.d){lm(a,yq(Fo(a.b)/a.a));}else{lm(a,yq(a.a/Fo(a.b)));}mm(a,true);}
function Bm(){}
_=Bm.prototype=new um();_.cb=Em;_.tN=dw+'OperatorDivide';_.tI=31;function vn(b,a){rm(b,a);return b;}
function un(){}
_=un.prototype=new qm();_.tN=dw+'UnaryOperator';_.tI=32;function an(a){vn(a,'\xB1');return a;}
function cn(a){var b;b=Fo(a.b);if(b<0){lm(a,yq(op(b)));}else{lm(a,yq(-b));}}
function Fm(){}
_=Fm.prototype=new un();_.cb=cn;_.tN=dw+'OperatorInvert';_.tI=33;function en(a){vm(a,'x');return a;}
function gn(a){lm(a,yq(a.a*Fo(a.b)));mm(a,true);}
function dn(){}
_=dn.prototype=new um();_.cb=gn;_.tN=dw+'OperatorMultiply';_.tI=34;function jn(a){vm(a,'^');return a;}
function ln(a){lm(a,yq(pp(a.a,Fo(a.b))));mm(a,true);}
function hn(){}
_=hn.prototype=new um();_.cb=ln;_.tN=dw+'OperatorPower';_.tI=35;function nn(a){vn(a,'\u221A');return a;}
function pn(a){lm(a,yq(qp(Fo(a.b))));}
function mn(){}
_=mn.prototype=new un();_.cb=pn;_.tN=dw+'OperatorSqrt';_.tI=36;function rn(a){vm(a,'-');return a;}
function tn(a){if(a.d){lm(a,yq(Fo(a.b)-a.a));}else{lm(a,yq(a.a-Fo(a.b)));}mm(a,true);}
function qn(){}
_=qn.prototype=new um();_.cb=tn;_.tN=dw+'OperatorSubtract';_.tI=37;function fo(v,x){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,w,y,z;tk(v);d=gm(new fm());c=Dl(new Cl(),d);o=tk(new rk());xk(o,(wi(),yi));nk(o,'calc-Panel');j=qg(new og(),4,5);nk(j,'calc-Grid');z=mo(new ho(),c,'0');mi(j,3,0,z);n=mo(new ho(),c,'1');mi(j,2,0,n);y=mo(new ho(),c,'2');mi(j,2,1,y);w=mo(new ho(),c,'3');mi(j,2,2,w);i=mo(new ho(),c,'4');mi(j,1,0,i);h=mo(new ho(),c,'5');mi(j,1,1,h);s=mo(new ho(),c,'6');mi(j,1,2,s);r=mo(new ho(),c,'7');mi(j,0,0,r);f=mo(new ho(),c,'8');mi(j,0,1,f);m=mo(new ho(),c,'9');mi(j,0,2,m);p=mo(new ho(),c,'.');mi(j,3,2,p);e=to(new oo(),c,Cm(new Bm()));mi(j,0,3,e);l=to(new oo(),c,en(new dn()));mi(j,1,3,l);u=to(new oo(),c,rn(new qn()));mi(j,2,3,u);a=to(new oo(),c,ym(new xm()));mi(j,3,3,a);t=to(new oo(),c,nn(new mn()));mi(j,0,4,t);q=to(new oo(),c,jn(new hn()));mi(j,1,4,q);k=to(new oo(),c,an(new Fm()));mi(j,3,1,k);b=rf(new lf(),'C');b.l(zn(new yn(),v,c));nk(b,'calc-Button');mi(j,2,4,b);g=rf(new lf(),'=');g.l(Dn(new Cn(),v,c));nk(g,'calc-Button');mi(j,3,4,g);v.a=hk(new Bj());hm(d,bo(new ao(),v));dk(v.a,'0');ck(v.a,(bk(),ek));uk(o,v.a);uk(o,j);uk(v,o);return v;}
function xn(){}
_=xn.prototype=new rk();_.tN=ew+'CalculatorWidget';_.tI=38;_.a=null;function zn(b,a,c){b.a=c;return b;}
function Bn(a){Fl(this.a);}
function yn(){}
_=yn.prototype=new Dp();_.D=Bn;_.tN=ew+'CalculatorWidget$1';_.tI=39;function Dn(b,a,c){b.a=c;return b;}
function Fn(a){bm(this.a);}
function Cn(){}
_=Cn.prototype=new Dp();_.D=Fn;_.tN=ew+'CalculatorWidget$2';_.tI=40;function bo(b,a){b.a=a;return b;}
function eo(b,a){dk(b.a.a,zq(a.b));}
function ao(){}
_=ao.prototype=new Dp();_.tN=ew+'CalculatorWidget$3';_.tI=0;function no(){no=zv;wl(),yl;}
function mo(c,a,b){wl(),yl;rf(c,b);c.l(jo(new io(),c,a,b));nk(c,'calc-Button');return c;}
function ho(){}
_=ho.prototype=new lf();_.tN=fw+'ButtonDigit';_.tI=41;function jo(b,a,c,d){b.a=c;b.b=d;return b;}
function lo(a){am(this.a,this.b);}
function io(){}
_=io.prototype=new Dp();_.D=lo;_.tN=fw+'ButtonDigit$1';_.tI=42;function uo(){uo=zv;wl(),yl;}
function to(c,a,b){wl(),yl;rf(c,b.a);c.l(qo(new po(),c,a,b));nk(c,'calc-Button');return c;}
function oo(){}
_=oo.prototype=new lf();_.tN=fw+'ButtonOperator';_.tI=43;function qo(b,a,c,d){b.a=c;b.b=d;return b;}
function so(a){cm(this.a,this.b);}
function po(){}
_=po.prototype=new Dp();_.D=so;_.tN=fw+'ButtonOperator$1';_.tI=44;function Eq(b,a){b.a=a;return b;}
function ar(){var a,b;a=D(this);b=this.a;if(b!==null){return a+': '+b;}else{return a;}}
function Dq(){}
_=Dq.prototype=new Dp();_.tS=ar;_.tN=gw+'Throwable';_.tI=3;_.a=null;function bp(b,a){Eq(b,a);return b;}
function ap(){}
_=ap.prototype=new Dq();_.tN=gw+'Exception';_.tI=4;function dq(b,a){bp(b,a);return b;}
function cq(){}
_=cq.prototype=new ap();_.tN=gw+'RuntimeException';_.tI=5;function wo(){}
_=wo.prototype=new cq();_.tN=gw+'ArrayStoreException';_.tI=45;function zo(){}
_=zo.prototype=new cq();_.tN=gw+'ClassCastException';_.tI=46;function xp(){xp=zv;{Cp();}}
function yp(a){xp();return isNaN(a);}
function zp(a){xp();var b;b=Ap(a);if(yp(b)){throw vp(new up(),'Unable to parse '+a);}return b;}
function Ap(a){xp();if(Bp.test(a)){return parseFloat(a);}else{return Number.NaN;}}
function Cp(){xp();Bp=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var Bp=null;function Eo(){Eo=zv;xp();}
function Fo(a){Eo();return zp(a);}
function ep(b,a){dq(b,a);return b;}
function dp(){}
_=dp.prototype=new cq();_.tN=gw+'IllegalArgumentException';_.tI=47;function hp(b,a){dq(b,a);return b;}
function gp(){}
_=gp.prototype=new cq();_.tN=gw+'IllegalStateException';_.tI=48;function kp(b,a){dq(b,a);return b;}
function jp(){}
_=jp.prototype=new cq();_.tN=gw+'IndexOutOfBoundsException';_.tI=49;function op(a){return a<0?-a:a;}
function pp(b,a){return Math.pow(b,a);}
function qp(a){return Math.sqrt(a);}
function rp(){}
_=rp.prototype=new cq();_.tN=gw+'NegativeArraySizeException';_.tI=50;function vp(b,a){ep(b,a);return b;}
function up(){}
_=up.prototype=new dp();_.tN=gw+'NumberFormatException';_.tI=51;function qq(b,a){if(!Db(a,1))return false;return tq(b,a);}
function rq(b,a){return b.indexOf(a);}
function sq(b,a){return b.substr(a,b.length-a);}
function tq(a,b){return String(a)==b;}
function uq(a){return qq(this,a);}
function wq(){var a=vq;if(!a){a=vq={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function xq(){return this;}
function yq(a){return ''+a;}
function zq(a){return a!==null?a.tS():'null';}
_=String.prototype;_.eQ=uq;_.hC=wq;_.tS=xq;_.tN=gw+'String';_.tI=2;var vq=null;function hq(a){jq(a);return a;}
function iq(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function jq(a){kq(a,'');}
function kq(b,a){b.js=[a];b.length=a.length;}
function mq(a){a.B();return a.js[0];}
function nq(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function oq(){return mq(this);}
function gq(){}
_=gq.prototype=new Dp();_.B=nq;_.tS=oq;_.tN=gw+'StringBuffer';_.tI=0;function Cq(a){return cb(a);}
function cr(b,a){dq(b,a);return b;}
function br(){}
_=br.prototype=new cq();_.tN=gw+'UnsupportedOperationException';_.tI=52;function mr(b,a){b.c=a;return b;}
function or(a){return a.a<a.c.gb();}
function pr(a){if(!or(a)){throw new vv();}return a.c.v(a.b=a.a++);}
function qr(a){if(a.b<0){throw new gp();}a.c.db(a.b);a.a=a.b;a.b=(-1);}
function rr(){return or(this);}
function sr(){return pr(this);}
function lr(){}
_=lr.prototype=new Dp();_.x=rr;_.A=sr;_.tN=hw+'AbstractList$IteratorImpl';_.tI=0;_.a=0;_.b=(-1);function As(f,d,e){var a,b,c;for(b=vu(f.s());ou(b);){a=pu(b);c=a.t();if(d===null?c===null:d.eQ(c)){if(e){qu(b);}return a;}}return null;}
function Bs(b){var a;a=b.s();return Er(new Dr(),b,a);}
function Cs(b){var a;a=Fu(b);return ms(new ls(),b,a);}
function Ds(a){return As(this,a,false)!==null;}
function Es(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!Db(d,15)){return false;}f=Cb(d,15);c=Bs(this);e=f.z();if(!ft(c,e)){return false;}for(a=as(c);hs(a);){b=is(a);h=this.w(b);g=f.w(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function Fs(b){var a;a=As(this,b,false);return a===null?null:a.u();}
function at(){var a,b,c;b=0;for(c=vu(this.s());ou(c);){a=pu(c);b+=a.hC();}return b;}
function bt(){return Bs(this);}
function ct(){var a,b,c,d;d='{';a=false;for(c=vu(this.s());ou(c);){b=pu(c);if(a){d+=', ';}else{a=true;}d+=zq(b.t());d+='=';d+=zq(b.u());}return d+'}';}
function Cr(){}
_=Cr.prototype=new Dp();_.o=Ds;_.eQ=Es;_.w=Fs;_.hC=at;_.z=bt;_.tS=ct;_.tN=hw+'AbstractMap';_.tI=53;function ft(e,b){var a,c,d;if(b===e){return true;}if(!Db(b,16)){return false;}c=Cb(b,16);if(c.gb()!=e.gb()){return false;}for(a=c.y();a.x();){d=a.A();if(!e.p(d)){return false;}}return true;}
function gt(a){return ft(this,a);}
function ht(){var a,b,c;a=0;for(b=this.y();b.x();){c=b.A();if(c!==null){a+=c.hC();}}return a;}
function dt(){}
_=dt.prototype=new er();_.eQ=gt;_.hC=ht;_.tN=hw+'AbstractSet';_.tI=54;function Er(b,a,c){b.a=a;b.b=c;return b;}
function as(b){var a;a=vu(b.b);return fs(new es(),b,a);}
function bs(a){return this.a.o(a);}
function cs(){return as(this);}
function ds(){return this.b.a.c;}
function Dr(){}
_=Dr.prototype=new dt();_.p=bs;_.y=cs;_.gb=ds;_.tN=hw+'AbstractMap$1';_.tI=55;function fs(b,a,c){b.a=c;return b;}
function hs(a){return a.a.x();}
function is(b){var a;a=b.a.A();return a.t();}
function js(){return hs(this);}
function ks(){return is(this);}
function es(){}
_=es.prototype=new Dp();_.x=js;_.A=ks;_.tN=hw+'AbstractMap$2';_.tI=0;function ms(b,a,c){b.a=a;b.b=c;return b;}
function os(b){var a;a=vu(b.b);return ts(new ss(),b,a);}
function ps(a){return Eu(this.a,a);}
function qs(){return os(this);}
function rs(){return this.b.a.c;}
function ls(){}
_=ls.prototype=new er();_.p=ps;_.y=qs;_.gb=rs;_.tN=hw+'AbstractMap$3';_.tI=0;function ts(b,a,c){b.a=c;return b;}
function vs(a){return a.a.x();}
function ws(a){var b;b=a.a.A().u();return b;}
function xs(){return vs(this);}
function ys(){return ws(this);}
function ss(){}
_=ss.prototype=new Dp();_.x=xs;_.A=ys;_.tN=hw+'AbstractMap$4';_.tI=0;function Cu(){Cu=zv;dv=jv();}
function zu(a){{Bu(a);}}
function Au(a){Cu();zu(a);return a;}
function Bu(a){a.a=jb();a.d=kb();a.b=bc(dv,fb);a.c=0;}
function Du(b,a){if(Db(a,1)){return nv(b.d,Cb(a,1))!==dv;}else if(a===null){return b.b!==dv;}else{return mv(b.a,a,a.hC())!==dv;}}
function Eu(a,b){if(a.b!==dv&&lv(a.b,b)){return true;}else if(iv(a.d,b)){return true;}else if(gv(a.a,b)){return true;}return false;}
function Fu(a){return tu(new ku(),a);}
function av(c,a){var b;if(Db(a,1)){b=nv(c.d,Cb(a,1));}else if(a===null){b=c.b;}else{b=mv(c.a,a,a.hC());}return b===dv?null:b;}
function bv(c,a,d){var b;{b=c.b;c.b=d;}if(b===dv){++c.c;return null;}else{return b;}}
function cv(c,a){var b;if(Db(a,1)){b=qv(c.d,Cb(a,1));}else if(a===null){b=c.b;c.b=bc(dv,fb);}else{b=pv(c.a,a,a.hC());}if(b===dv){return null;}else{--c.c;return b;}}
function ev(e,c){Cu();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.n(a[f]);}}}}
function fv(d,a){Cu();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=eu(c.substring(1),e);a.n(b);}}}
function gv(f,h){Cu();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.u();if(lv(h,d)){return true;}}}}return false;}
function hv(a){return Du(this,a);}
function iv(c,d){Cu();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(lv(d,a)){return true;}}}return false;}
function jv(){Cu();}
function kv(){return Fu(this);}
function lv(a,b){Cu();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function ov(a){return av(this,a);}
function mv(f,h,e){Cu();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(lv(h,d)){return c.u();}}}}
function nv(b,a){Cu();return b[':'+a];}
function pv(f,h,e){Cu();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(lv(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.u();}}}}
function qv(c,a){Cu();a=':'+a;var b=c[a];delete c[a];return b;}
function au(){}
_=au.prototype=new Cr();_.o=hv;_.s=kv;_.w=ov;_.tN=hw+'HashMap';_.tI=56;_.a=null;_.b=null;_.c=0;_.d=null;var dv;function cu(b,a,c){b.a=a;b.b=c;return b;}
function eu(a,b){return cu(new bu(),a,b);}
function fu(b){var a;if(Db(b,17)){a=Cb(b,17);if(lv(this.a,a.t())&&lv(this.b,a.u())){return true;}}return false;}
function gu(){return this.a;}
function hu(){return this.b;}
function iu(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function ju(){return this.a+'='+this.b;}
function bu(){}
_=bu.prototype=new Dp();_.eQ=fu;_.t=gu;_.u=hu;_.hC=iu;_.tS=ju;_.tN=hw+'HashMap$EntryImpl';_.tI=57;_.a=null;_.b=null;function tu(b,a){b.a=a;return b;}
function vu(a){return mu(new lu(),a.a);}
function wu(c){var a,b,d;if(Db(c,17)){a=Cb(c,17);b=a.t();if(Du(this.a,b)){d=av(this.a,b);return lv(a.u(),d);}}return false;}
function xu(){return vu(this);}
function yu(){return this.a.c;}
function ku(){}
_=ku.prototype=new dt();_.p=wu;_.y=xu;_.gb=yu;_.tN=hw+'HashMap$EntrySet';_.tI=58;function mu(c,b){var a;c.c=b;a=kt(new it());if(c.c.b!==(Cu(),dv)){lt(a,cu(new bu(),null,c.c.b));}fv(c.c.d,a);ev(c.c.a,a);c.a=vr(a);return c;}
function ou(a){return or(a.a);}
function pu(a){return a.b=Cb(pr(a.a),17);}
function qu(a){if(a.b===null){throw hp(new gp(),'Must call next() before remove().');}else{qr(a.a);cv(a.c,a.b.t());a.b=null;}}
function ru(){return ou(this);}
function su(){return pu(this);}
function lu(){}
_=lu.prototype=new Dp();_.x=ru;_.A=su;_.tN=hw+'HashMap$EntrySetIterator';_.tI=0;_.a=null;_.b=null;function vv(){}
_=vv.prototype=new cq();_.tN=hw+'NoSuchElementException';_.tI=59;function vo(){Bl(new zl());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{vo();}catch(a){b(d);}else{vo();}}
var ac=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1,4:1},{2:1},{5:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{14:1},{14:1},{14:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,8:1,9:1,10:1,11:1},{5:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{12:1},{12:1},{12:1},{13:1},{13:1},{12:1},{12:1},{13:1},{12:1},{7:1,9:1,10:1,11:1},{6:1},{6:1},{7:1,9:1,10:1,11:1},{6:1},{7:1,9:1,10:1,11:1},{6:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{15:1},{16:1},{16:1},{15:1},{17:1},{16:1},{3:1}];if (com_manning_gwtip_calculator_Calculator) {  var __gwt_initHandlers = com_manning_gwtip_calculator_Calculator.__gwt_initHandlers;  com_manning_gwtip_calculator_Calculator.onScriptLoad(gwtOnLoad);}})();