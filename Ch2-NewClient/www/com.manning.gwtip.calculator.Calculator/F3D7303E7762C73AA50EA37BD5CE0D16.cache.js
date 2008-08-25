(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,yv='com.google.gwt.core.client.',zv='com.google.gwt.lang.',Av='com.google.gwt.user.client.',Bv='com.google.gwt.user.client.impl.',Cv='com.google.gwt.user.client.ui.',Dv='com.google.gwt.user.client.ui.impl.',Ev='com.manning.gwtip.calculator.client.',Fv='com.manning.gwtip.calculator.client.controller.',aw='com.manning.gwtip.calculator.client.model.',bw='com.manning.gwtip.calculator.client.model.operator.',cw='com.manning.gwtip.calculator.client.view.',dw='com.manning.gwtip.calculator.client.view.button.',ew='java.lang.',fw='java.util.';function xv(){}
function Dp(a){return this===a;}
function Ep(){return Aq(this);}
function Fp(){return this.tN+'@'+this.hC();}
function Bp(){}
_=Bp.prototype={};_.eQ=Dp;_.hC=Ep;_.tS=Fp;_.toString=function(){return this.tS();};_.tN=ew+'Object';_.tI=1;function D(a){return a==null?null:a.tN;}
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
_=fb.prototype=new Bp();_.eQ=mb;_.hC=nb;_.tS=pb;_.tN=yv+'JavaScriptObject';_.tI=7;function rb(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function tb(a,b,c){return a[b]=c;}
function ub(b,a){return b[a];}
function vb(a){return a.length;}
function xb(e,d,c,b,a){return wb(e,d,c,b,0,vb(b),a);}
function wb(j,i,g,c,e,a,b){var d,f,h;if((f=ub(c,e))<0){throw new pp();}h=rb(new qb(),f,ub(i,e),ub(g,e),j);++e;if(e<a){j=qq(j,1);for(d=0;d<f;++d){tb(h,d,wb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){tb(h,d,b);}}return h;}
function yb(a,b,c){if(c!==null&&a.b!=0&& !Db(c,a.b)){throw new uo();}return tb(a,b,c);}
function qb(){}
_=qb.prototype=new Bp();_.tN=zv+'Array';_.tI=0;function Bb(b,a){return !(!(b&&ac[b][a]));}
function Cb(b,a){if(b!=null)Bb(b.tI,a)||Fb();return b;}
function Db(b,a){return b!=null&&Bb(b.tI,a);}
function Fb(){throw new xo();}
function Eb(a){if(a!==null){throw new xo();}return a;}
function bc(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var ac;function fc(){fc=xv;Fc=it(new gt());{Ac=new he();oe(Ac);}}
function gc(b,a){fc();se(Ac,b,a);}
function hc(a,b){fc();return je(Ac,a,b);}
function ic(){fc();return ue(Ac,'button');}
function jc(){fc();return ue(Ac,'div');}
function kc(a){fc();return ue(Ac,a);}
function lc(){fc();return ve(Ac,'text');}
function mc(){fc();return ue(Ac,'tbody');}
function nc(){fc();return ue(Ac,'td');}
function oc(){fc();return ue(Ac,'tr');}
function pc(){fc();return ue(Ac,'table');}
function sc(b,a,d){fc();var c;c=E;{rc(b,a,d);}}
function rc(b,a,c){fc();var d;if(a===Ec){if(uc(b)==8192){Ec=null;}}d=qc;qc=b;try{c.C(b);}finally{qc=d;}}
function tc(b,a){fc();we(Ac,b,a);}
function uc(a){fc();return xe(Ac,a);}
function vc(a){fc();ke(Ac,a);}
function wc(a){fc();return le(Ac,a);}
function xc(a){fc();return ye(Ac,a);}
function yc(a){fc();return me(Ac,a);}
function zc(a){fc();return ne(Ac,a);}
function Bc(c,a,b){fc();pe(Ac,c,a,b);}
function Cc(a){fc();var b,c;c=true;if(Fc.b>0){b=Eb(mt(Fc,Fc.b-1));if(!(c=null.ib())){tc(a,true);vc(a);}}return c;}
function Dc(b,a){fc();ze(Ac,b,a);}
function ad(a,b,c){fc();Ae(Ac,a,b,c);}
function bd(a,b){fc();Be(Ac,a,b);}
function cd(a,b){fc();Ce(Ac,a,b);}
function dd(b,a,c){fc();De(Ac,b,a,c);}
function ed(a,b){fc();qe(Ac,a,b);}
function fd(a){fc();return Ee(Ac,a);}
var qc=null,Ac=null,Ec=null,Fc;function id(a){if(Db(a,4)){return hc(this,Cb(a,4));}return hb(bc(this,gd),a);}
function jd(){return ib(bc(this,gd));}
function kd(){return fd(this);}
function gd(){}
_=gd.prototype=new fb();_.eQ=id;_.hC=jd;_.tS=kd;_.tN=Av+'Element';_.tI=8;function od(a){return hb(bc(this,ld),a);}
function pd(){return ib(bc(this,ld));}
function qd(){return wc(this);}
function ld(){}
_=ld.prototype=new fb();_.eQ=od;_.hC=pd;_.tS=qd;_.tN=Av+'Event';_.tI=9;function wd(){wd=xv;yd=it(new gt());{xd();}}
function xd(){wd();Cd(new sd());}
var yd;function ud(){while((wd(),yd).b>0){Eb(mt((wd(),yd),0)).ib();}}
function vd(){return null;}
function sd(){}
_=sd.prototype=new Bp();_.ab=ud;_.bb=vd;_.tN=Av+'Timer$1';_.tI=10;function Bd(){Bd=xv;Dd=it(new gt());fe=it(new gt());{be();}}
function Cd(a){Bd();jt(Dd,a);}
function Ed(){Bd();var a,b;for(a=tr(Dd);mr(a);){b=Cb(nr(a),5);b.ab();}}
function Fd(){Bd();var a,b,c,d;d=null;for(a=tr(Dd);mr(a);){b=Cb(nr(a),5);c=b.bb();{d=c;}}return d;}
function ae(){Bd();var a,b;for(a=tr(fe);mr(a);){b=Eb(nr(a));null.ib();}}
function be(){Bd();__gwt_initHandlers(function(){ee();},function(){return de();},function(){ce();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ce(){Bd();var a;a=E;{Ed();}}
function de(){Bd();var a;a=E;{return Fd();}}
function ee(){Bd();var a;a=E;{ae();}}
var Dd,fe;function se(c,b,a){b.appendChild(a);}
function ue(b,a){return $doc.createElement(a);}
function ve(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function we(c,b,a){b.cancelBubble=a;}
function xe(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function ye(b,a){return a.__eventBits||0;}
function ze(c,b,a){b.removeChild(a);}
function Ae(c,a,b,d){a[b]=d;}
function Be(c,a,b){a.__listener=b;}
function Ce(c,a,b){if(!b){b='';}a.innerHTML=b;}
function De(c,b,a,d){b.style[a]=d;}
function Ee(b,a){return a.outerHTML;}
function ge(){}
_=ge.prototype=new Bp();_.tN=Bv+'DOMImpl';_.tI=0;function je(c,a,b){if(!a&& !b)return true;else if(!a|| !b)return false;return a.uniqueID==b.uniqueID;}
function ke(b,a){a.returnValue=false;}
function le(b,a){if(a.toString)return a.toString();return '[object Event]';}
function me(c,b){var a=b.firstChild;return a||null;}
function ne(c,a){var b=a.parentElement;return b||null;}
function oe(d){try{$doc.execCommand('BackgroundImageCache',false,true);}catch(a){}$wnd.__dispatchEvent=function(){var c=re;re=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!Cc($wnd.event)){re=c;return;}}var b,a=this;while(a&& !(b=a.__listener))a=a.parentElement;if(b)sc($wnd.event,a,b);re=c;};$wnd.__dispatchDblClickEvent=function(){var a=$doc.createEventObject();this.fireEvent('onclick',a);if(this.__eventBits&2)$wnd.__dispatchEvent.call(this);};$doc.body.onclick=$doc.body.onmousedown=$doc.body.onmouseup=$doc.body.onmousemove=$doc.body.onmousewheel=$doc.body.onkeydown=$doc.body.onkeypress=$doc.body.onkeyup=$doc.body.onfocus=$doc.body.onblur=$doc.body.ondblclick=$wnd.__dispatchEvent;}
function pe(d,c,a,b){if(b>=c.children.length)c.appendChild(a);else c.insertBefore(a,c.children[b]);}
function qe(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&(1|2)?$wnd.__dispatchDblClickEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function he(){}
_=he.prototype=new ge();_.tN=Bv+'DOMImplIE6';_.tI=0;var re=null;function gk(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function hk(b,a){if(b.k!==null){gk(b,b.k,a);}b.k=a;}
function ik(b,a){kk(b.k,a);}
function jk(b,a){ed(b.k,a|xc(b.k));}
function kk(a,b){ad(a,'className',b);}
function lk(){if(this.k===null){return '(null handle)';}return fd(this.k);}
function ek(){}
_=ek.prototype=new Bp();_.tS=lk;_.tN=Cv+'UIObject';_.tI=0;_.k=null;function el(a){if(a.i){throw fp(new ep(),"Should only call onAttach when the widget is detached from the browser's document");}a.i=true;bd(a.k,a);a.q();a.E();}
function fl(a){if(!a.i){throw fp(new ep(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.F();}finally{a.r();bd(a.k,null);a.i=false;}}
function gl(a){if(a.j!==null){a.j.eb(a);}else if(a.j!==null){throw fp(new ep(),"This widget's parent does not implement HasWidgets");}}
function hl(b,a){if(b.i){bd(b.k,null);}hk(b,a);if(b.i){bd(a,b);}}
function il(c,b){var a;a=c.j;if(b===null){if(a!==null&&a.i){fl(c);}c.j=null;}else{if(a!==null){throw fp(new ep(),'Cannot set a new parent without first clearing the old parent');}c.j=b;if(b.i){el(c);}}}
function jl(){}
function kl(){}
function ll(a){}
function ml(){}
function nl(){}
function ol(a){hl(this,a);}
function uk(){}
_=uk.prototype=new ek();_.q=jl;_.r=kl;_.C=ll;_.E=ml;_.F=nl;_.fb=ol;_.tN=Cv+'Widget';_.tI=11;_.i=false;_.j=null;function Ei(b,a){il(a,b);}
function aj(b,a){il(a,null);}
function bj(){var a,b;for(b=this.y();b.x();){a=Cb(b.A(),7);el(a);}}
function cj(){var a,b;for(b=this.y();b.x();){a=Cb(b.A(),7);fl(a);}}
function dj(){}
function ej(){}
function Di(){}
_=Di.prototype=new uk();_.q=bj;_.r=cj;_.E=dj;_.F=ej;_.tN=Cv+'Panel';_.tI=12;function Af(a){a.f=Bk(new vk(),a);}
function Bf(a){Af(a);return a;}
function Cf(c,a,b){gl(a);Ck(c.f,a);gc(b,a.k);Ei(c,a);}
function Ef(b,c){var a;if(c.j!==b){return false;}aj(b,c);a=c.k;Dc(zc(a),a);cl(b.f,c);return true;}
function Ff(){return al(this.f);}
function ag(a){return Ef(this,a);}
function zf(){}
_=zf.prototype=new Di();_.y=Ff;_.eb=ag;_.tN=Cv+'ComplexPanel';_.tI=13;function af(a){Bf(a);a.fb(jc());dd(a.k,'position','relative');dd(a.k,'overflow','hidden');return a;}
function bf(a,b){Cf(a,b,a.k);}
function df(a){dd(a,'left','');dd(a,'top','');dd(a,'position','');}
function ef(b){var a;a=Ef(this,b);if(a){df(b.k);}return a;}
function Fe(){}
_=Fe.prototype=new zf();_.eb=ef;_.tN=Cv+'AbsolutePanel';_.tI=14;function dg(){dg=xv;ul(),wl;}
function cg(b,a){ul(),wl;fg(b,a);return b;}
function eg(b,a){switch(uc(a)){case 1:if(b.b!==null){xf(b.b,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function fg(b,a){hl(b,a);jk(b,7041);}
function gg(a){if(this.b===null){this.b=vf(new uf());}jt(this.b,a);}
function hg(a){eg(this,a);}
function ig(a){fg(this,a);}
function bg(){}
_=bg.prototype=new uk();_.l=gg;_.C=hg;_.fb=ig;_.tN=Cv+'FocusWidget';_.tI=15;_.b=null;function jf(){jf=xv;ul(),wl;}
function hf(b,a){ul(),wl;cg(b,a);return b;}
function kf(b,a){cd(b.k,a);}
function gf(){}
_=gf.prototype=new bg();_.tN=Cv+'ButtonBase';_.tI=16;function nf(){nf=xv;ul(),wl;}
function lf(a){ul(),wl;hf(a,ic());of(a.k);ik(a,'gwt-Button');return a;}
function mf(b,a){ul(),wl;lf(b);kf(b,a);return b;}
function of(b){nf();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function ff(){}
_=ff.prototype=new gf();_.tN=Cv+'Button';_.tI=17;function qf(a){Bf(a);a.e=pc();a.d=mc();gc(a.e,a.d);a.fb(a.e);return a;}
function sf(c,b,a){ad(b,'align',a.a);}
function tf(c,b,a){dd(b,'verticalAlign',a.a);}
function pf(){}
_=pf.prototype=new zf();_.tN=Cv+'CellPanel';_.tI=18;_.d=null;_.e=null;function dr(d,a,b){var c;while(a.x()){c=a.A();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function fr(a){throw ar(new Fq(),'add');}
function gr(b){var a;a=dr(this,this.y(),b);return a!==null;}
function hr(){var a,b,c;c=fq(new eq());a=null;gq(c,'[');b=this.y();while(b.x()){if(a!==null){gq(c,a);}else{a=', ';}gq(c,xq(b.A()));}gq(c,']');return kq(c);}
function cr(){}
_=cr.prototype=new Bp();_.n=fr;_.p=gr;_.tS=hr;_.tN=fw+'AbstractCollection';_.tI=0;function sr(b,a){throw ip(new hp(),'Index: '+a+', Size: '+b.b);}
function tr(a){return kr(new jr(),a);}
function ur(b,a){throw ar(new Fq(),'add');}
function vr(a){this.m(this.gb(),a);return true;}
function wr(e){var a,b,c,d,f;if(e===this){return true;}if(!Db(e,14)){return false;}f=Cb(e,14);if(this.gb()!=f.gb()){return false;}c=tr(this);d=f.y();while(mr(c)){a=nr(c);b=nr(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function xr(){var a,b,c,d;c=1;a=31;b=tr(this);while(mr(b)){d=nr(b);c=31*c+(d===null?0:d.hC());}return c;}
function yr(){return tr(this);}
function zr(a){throw ar(new Fq(),'remove');}
function ir(){}
_=ir.prototype=new cr();_.m=ur;_.n=vr;_.eQ=wr;_.hC=xr;_.y=yr;_.db=zr;_.tN=fw+'AbstractList';_.tI=19;function ht(a){{kt(a);}}
function it(a){ht(a);return a;}
function jt(b,a){At(b.a,b.b++,a);return true;}
function kt(a){a.a=jb();a.b=0;}
function mt(b,a){if(a<0||a>=b.b){sr(b,a);}return wt(b.a,a);}
function nt(b,a){return ot(b,a,0);}
function ot(c,b,a){if(a<0){sr(c,a);}for(;a<c.b;++a){if(vt(b,wt(c.a,a))){return a;}}return (-1);}
function pt(c,a){var b;b=mt(c,a);yt(c.a,a,1);--c.b;return b;}
function qt(d,a,b){var c;c=mt(d,a);At(d.a,a,b);return c;}
function st(a,b){if(a<0||a>this.b){sr(this,a);}rt(this.a,a,b);++this.b;}
function tt(a){return jt(this,a);}
function rt(a,b,c){a.splice(b,0,c);}
function ut(a){return nt(this,a)!=(-1);}
function vt(a,b){return a===b||a!==null&&a.eQ(b);}
function xt(a){return mt(this,a);}
function wt(a,b){return a[b];}
function zt(a){return pt(this,a);}
function yt(a,c,b){a.splice(c,b);}
function At(a,b,c){a[b]=c;}
function Bt(){return this.b;}
function gt(){}
_=gt.prototype=new ir();_.m=st;_.n=tt;_.p=ut;_.v=xt;_.db=zt;_.gb=Bt;_.tN=fw+'ArrayList';_.tI=20;_.a=null;_.b=0;function vf(a){it(a);return a;}
function xf(d,c){var a,b;for(a=tr(d);mr(a);){b=Cb(nr(a),6);b.D(c);}}
function uf(){}
_=uf.prototype=new gt();_.tN=Cv+'ClickListenerCollection';_.tI=21;function yh(a){a.h=oh(new jh());}
function zh(a){yh(a);a.g=pc();a.c=mc();gc(a.g,a.c);a.fb(a.g);jk(a,1);return a;}
function Ah(d,c,b){var a;Bh(d,c);if(b<0){throw ip(new hp(),'Column '+b+' must be non-negative: '+b);}a=d.a;if(a<=b){throw ip(new hp(),'Column index: '+b+', Column size: '+d.a);}}
function Bh(c,a){var b;b=c.b;if(a>=b||a<0){throw ip(new hp(),'Row index: '+a+', Row size: '+b);}}
function Ch(e,c,b,a){var d;d=bh(e.d,c,b);ai(e,d,a);return d;}
function Eh(a){return nc();}
function Fh(d,b,a){var c,e;e=ih(d.f,d.c,b);c=ng(d);Bc(e,c,a);}
function ai(d,c,a){var b,e;b=yc(c);e=null;if(b!==null){e=qh(d.h,b);}if(e!==null){di(d,e);return true;}else{if(a){cd(c,'');}return false;}}
function di(b,c){var a;if(c.j!==b){return false;}aj(b,c);a=c.k;Dc(zc(a),a);th(b.h,a);return true;}
function bi(d,b,a){var c,e;Ah(d,b,a);c=Ch(d,b,a,false);e=ih(d.f,d.c,b);Dc(e,c);}
function ci(d,c){var a,b;b=d.a;for(a=0;a<b;++a){Ch(d,c,a,false);}Dc(d.c,ih(d.f,d.c,c));}
function ei(b,a){b.d=a;}
function fi(b,a){b.e=a;fh(b.e);}
function gi(b,a){b.f=a;}
function hi(d,b,a,e){var c;og(d,b,a);if(e!==null){gl(e);c=Ch(d,b,a,true);rh(d.h,e);gc(c,e.k);Ei(d,e);}}
function ii(){return uh(this.h);}
function ji(a){switch(uc(a)){case 1:{break;}default:}}
function ki(a){return di(this,a);}
function ug(){}
_=ug.prototype=new Di();_.y=ii;_.C=ji;_.eb=ki;_.tN=Cv+'HTMLTable';_.tI=22;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;function kg(a){zh(a);ei(a,Eg(new Dg(),a));gi(a,new gh());fi(a,dh(new ch(),a));return a;}
function lg(c,b,a){kg(c);sg(c,b,a);return c;}
function ng(b){var a;a=Eh(b);cd(a,'&nbsp;');return a;}
function og(c,b,a){pg(c,b);if(a<0){throw ip(new hp(),'Cannot access a column with a negative index: '+a);}if(a>=c.a){throw ip(new hp(),'Column index: '+a+', Column size: '+c.a);}}
function pg(b,a){if(a<0){throw ip(new hp(),'Cannot access a row with a negative index: '+a);}if(a>=b.b){throw ip(new hp(),'Row index: '+a+', Row size: '+b.b);}}
function sg(c,b,a){qg(c,a);rg(c,b);}
function qg(d,a){var b,c;if(d.a==a){return;}if(a<0){throw ip(new hp(),'Cannot set number of columns to '+a);}if(d.a>a){for(b=0;b<d.b;b++){for(c=d.a-1;c>=a;c--){bi(d,b,c);}}}else{for(b=0;b<d.b;b++){for(c=d.a;c<a;c++){Fh(d,b,c);}}}d.a=a;}
function rg(b,a){if(b.b==a){return;}if(a<0){throw ip(new hp(),'Cannot set number of rows to '+a);}if(b.b<a){tg(b.c,a-b.b,b.a);b.b=a;}else{while(b.b>a){ci(b,--b.b);}}}
function tg(g,f,c){var h=$doc.createElement('td');h.innerHTML='&nbsp;';var d=$doc.createElement('tr');for(var b=0;b<c;b++){var a=h.cloneNode(true);d.appendChild(a);}g.appendChild(d);for(var e=1;e<f;e++){g.appendChild(d.cloneNode(true));}}
function jg(){}
_=jg.prototype=new ug();_.tN=Cv+'Grid';_.tI=23;_.a=0;_.b=0;function wg(a){{zg(a);}}
function xg(b,a){b.b=a;wg(b);return b;}
function zg(a){while(++a.a<a.b.b.b){if(mt(a.b.b,a.a)!==null){return;}}}
function Ag(a){return a.a<a.b.b.b;}
function Bg(){return Ag(this);}
function Cg(){var a;if(!Ag(this)){throw new tv();}a=mt(this.b.b,this.a);zg(this);return a;}
function vg(){}
_=vg.prototype=new Bp();_.x=Bg;_.A=Cg;_.tN=Cv+'HTMLTable$1';_.tI=0;_.a=(-1);function Eg(b,a){b.a=a;return b;}
function ah(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function bh(c,b,a){return ah(c,c.a.c,b,a);}
function Dg(){}
_=Dg.prototype=new Bp();_.tN=Cv+'HTMLTable$CellFormatter';_.tI=0;function dh(b,a){b.b=a;return b;}
function fh(a){if(a.a===null){a.a=kc('colgroup');Bc(a.b.g,a.a,0);gc(a.a,kc('col'));}}
function ch(){}
_=ch.prototype=new Bp();_.tN=Cv+'HTMLTable$ColumnFormatter';_.tI=0;_.a=null;function ih(c,a,b){return a.rows[b];}
function gh(){}
_=gh.prototype=new Bp();_.tN=Cv+'HTMLTable$RowFormatter';_.tI=0;function nh(a){a.b=it(new gt());}
function oh(a){nh(a);return a;}
function qh(c,a){var b;b=wh(a);if(b<0){return null;}return Cb(mt(c.b,b),7);}
function rh(b,c){var a;if(b.a===null){a=b.b.b;jt(b.b,c);}else{a=b.a.a;qt(b.b,a,c);b.a=b.a.b;}xh(c.k,a);}
function sh(c,a,b){vh(a);qt(c.b,b,null);c.a=lh(new kh(),b,c.a);}
function th(c,a){var b;b=wh(a);sh(c,a,b);}
function uh(a){return xg(new vg(),a);}
function vh(a){a['__widgetID']=null;}
function wh(a){var b=a['__widgetID'];return b==null?-1:b;}
function xh(a,b){a['__widgetID']=b;}
function jh(){}
_=jh.prototype=new Bp();_.tN=Cv+'HTMLTable$WidgetMapper';_.tI=0;_.a=null;function lh(c,a,b){c.a=a;c.b=b;return c;}
function kh(){}
_=kh.prototype=new Bp();_.tN=Cv+'HTMLTable$WidgetMapper$FreeNode';_.tI=0;_.a=0;_.b=null;function ri(){ri=xv;pi(new oi(),'center');si=pi(new oi(),'left');ti=pi(new oi(),'right');}
var si,ti;function pi(b,a){b.a=a;return b;}
function oi(){}
_=oi.prototype=new Bp();_.tN=Cv+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=0;_.a=null;function zi(){zi=xv;xi(new wi(),'bottom');xi(new wi(),'middle');Ai=xi(new wi(),'top');}
var Ai;function xi(a,b){a.a=b;return a;}
function wi(){}
_=wi.prototype=new Bp();_.tN=Cv+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=0;_.a=null;function lj(){lj=xv;qj=yu(new Et());}
function kj(b,a){lj();af(b);if(a===null){a=mj();}b.fb(a);el(b);return b;}
function nj(){lj();return oj(null);}
function oj(c){lj();var a,b;b=Cb(Eu(qj,c),8);if(b!==null){return b;}a=null;if(qj.c==0){pj();}Fu(qj,c,b=kj(new fj(),a));return b;}
function mj(){lj();return $doc.body;}
function pj(){lj();Cd(new gj());}
function fj(){}
_=fj.prototype=new Fe();_.tN=Cv+'RootPanel';_.tI=24;var qj;function ij(){var a,b;for(b=ms(As((lj(),qj)));ts(b);){a=Cb(us(b),8);if(a.i){fl(a);}}}
function jj(){return null;}
function gj(){}
_=gj.prototype=new Bp();_.ab=ij;_.bb=jj;_.tN=Cv+'RootPanel$1';_.tI=25;function Cj(){Cj=xv;ul(),wl;zj(new yj(),'center');zj(new yj(),'justify');zj(new yj(),'left');Fj=zj(new yj(),'right');}
function Bj(b,a){Cj();cg(b,a);jk(b,1024);return b;}
function Ej(b,a){ad(b.k,'value',a!==null?a:'');}
function Dj(b,a){dd(b.k,'textAlign',a.a);}
function ak(a){if(this.a===null){this.a=vf(new uf());}jt(this.a,a);}
function bk(a){var b;eg(this,a);b=uc(a);if(b==1){if(this.a!==null){xf(this.a,this);}}else{}}
function xj(){}
_=xj.prototype=new bg();_.l=ak;_.C=bk;_.tN=Cv+'TextBoxBase';_.tI=26;_.a=null;var Fj;function dk(){dk=xv;Cj();}
function ck(a){dk();Bj(a,lc());ik(a,'gwt-TextBox');return a;}
function wj(){}
_=wj.prototype=new xj();_.tN=Cv+'TextBox';_.tI=27;function zj(b,a){b.a=a;return b;}
function yj(){}
_=yj.prototype=new Bp();_.tN=Cv+'TextBoxBase$TextAlignConstant';_.tI=0;_.a=null;function nk(a){a.b=(ri(),si);a.c=(zi(),Ai);}
function ok(a){qf(a);nk(a);ad(a.e,'cellSpacing','0');ad(a.e,'cellPadding','0');return a;}
function pk(b,d){var a,c;c=oc();a=rk(b);gc(c,a);gc(b.d,c);Cf(b,d,a);}
function rk(b){var a;a=nc();sf(b,a,b.b);tf(b,a,b.c);return a;}
function sk(b,a){b.b=a;}
function tk(c){var a,b;b=zc(c.k);a=Ef(this,c);if(a){Dc(this.d,zc(b));}return a;}
function mk(){}
_=mk.prototype=new pf();_.eb=tk;_.tN=Cv+'VerticalPanel';_.tI=28;function Bk(b,a){b.a=xb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[7],[4],null);return b;}
function Ck(a,b){Fk(a,b,a.b);}
function Ek(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function Fk(d,e,a){var b,c;if(a<0||a>d.b){throw new hp();}if(d.b==d.a.a){c=xb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[7],[d.a.a*2],null);for(b=0;b<d.a.a;++b){yb(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){yb(d.a,b,d.a[b-1]);}yb(d.a,a,e);}
function al(a){return xk(new wk(),a);}
function bl(c,b){var a;if(b<0||b>=c.b){throw new hp();}--c.b;for(a=b;a<c.b;++a){yb(c.a,a,c.a[a+1]);}yb(c.a,c.b,null);}
function cl(b,c){var a;a=Ek(b,c);if(a==(-1)){throw new tv();}bl(b,a);}
function vk(){}
_=vk.prototype=new Bp();_.tN=Cv+'WidgetCollection';_.tI=0;_.a=null;_.b=0;function xk(b,a){b.b=a;return b;}
function zk(){return this.a<this.b.b-1;}
function Ak(){if(this.a>=this.b.b){throw new tv();}return this.b.a[++this.a];}
function wk(){}
_=wk.prototype=new Bp();_.x=zk;_.A=Ak;_.tN=Cv+'WidgetCollection$WidgetIterator';_.tI=0;_.a=(-1);function ul(){ul=xv;vl=rl(new ql());wl=vl;}
function tl(a){ul();return a;}
function pl(){}
_=pl.prototype=new Bp();_.tN=Dv+'FocusImpl';_.tI=0;var vl,wl;function sl(){sl=xv;ul();}
function rl(a){sl();tl(a);return a;}
function ql(){}
_=ql.prototype=new pl();_.tN=Dv+'FocusImplIE6';_.tI=0;function zl(a){bf(nj(),co(new vn(),'calculator'));}
function xl(){}
_=xl.prototype=new Bp();_.tN=Ev+'Calculator';_.tI=0;function Bl(b,a){b.a=a;return b;}
function Dl(a){gm(a.a);mm(a.a,null);}
function El(b,a){if(b.a.d){mm(b.a,null);}if(b.a.c){if(b.a.d){im(b.a,0.0);}else{im(b.a,Do(b.a.b));}jm(b.a,a);km(b.a,false);}else{if(pq(b.a.b,'.')==(-1)){jm(b.a,b.a.b+a);}else if(!oq(a,'.')){jm(b.a,b.a.b+a);}}lm(b.a,false);}
function Fl(a){if(a.a.e!==null){if(!a.a.d){a.b=Do(a.a.b);}a.a.e.cb(a.a);im(a.a,a.b);lm(a.a,true);}}
function am(b,a){if(Db(a,12)){if(b.a.e===null||b.a.d){im(b.a,Do(b.a.b));km(b.a,true);mm(b.a,a);}else{b.a.e.cb(b.a);mm(b.a,a);}}else if(Db(a,13)){a.cb(b.a);}lm(b.a,false);}
function Al(){}
_=Al.prototype=new Bp();_.tN=Fv+'CalculatorController';_.tI=0;_.a=null;_.b=0.0;function em(a){a.b='0';return a;}
function fm(b,a){b.f=a;}
function gm(a){a.b='0';a.a=0.0;a.c=true;a.d=false;bo(a.f,a);}
function im(b,a){b.a=a;bo(b.f,b);}
function jm(b,a){b.b=a;bo(b.f,b);}
function km(b,a){b.c=a;bo(b.f,b);}
function lm(b,a){b.d=a;bo(b.f,b);}
function mm(b,a){b.e=a;}
function nm(){var a;a=fq(new eq());gq(a,'***CalculatorData***\n');gq(a,'display = '+this.b+'\n');gq(a,'buffer = '+this.a+'\n');return kq(a);}
function dm(){}
_=dm.prototype=new Bp();_.tS=nm;_.tN=aw+'CalculatorData';_.tI=0;_.a=0.0;_.b=null;_.c=true;_.d=false;_.e=null;_.f=null;function pm(b,a){b.a=a;return b;}
function rm(){return 'Operator:'+this.a;}
function om(){}
_=om.prototype=new Bp();_.tS=rm;_.tN=bw+'AbstractOperator';_.tI=0;_.a=null;function tm(b,a){pm(b,a);return b;}
function sm(){}
_=sm.prototype=new om();_.tN=bw+'BinaryOperator';_.tI=29;function wm(a){tm(a,'+');return a;}
function ym(a){jm(a,wq(a.a+Do(a.b)));km(a,true);}
function vm(){}
_=vm.prototype=new sm();_.cb=ym;_.tN=bw+'OperatorAdd';_.tI=30;function Am(a){tm(a,'/');return a;}
function Cm(a){if(a.d){jm(a,wq(Do(a.b)/a.a));}else{jm(a,wq(a.a/Do(a.b)));}km(a,true);}
function zm(){}
_=zm.prototype=new sm();_.cb=Cm;_.tN=bw+'OperatorDivide';_.tI=31;function tn(b,a){pm(b,a);return b;}
function sn(){}
_=sn.prototype=new om();_.tN=bw+'UnaryOperator';_.tI=32;function Em(a){tn(a,'\xB1');return a;}
function an(a){var b;b=Do(a.b);if(b<0){jm(a,wq(mp(b)));}else{jm(a,wq(-b));}}
function Dm(){}
_=Dm.prototype=new sn();_.cb=an;_.tN=bw+'OperatorInvert';_.tI=33;function cn(a){tm(a,'x');return a;}
function en(a){jm(a,wq(a.a*Do(a.b)));km(a,true);}
function bn(){}
_=bn.prototype=new sm();_.cb=en;_.tN=bw+'OperatorMultiply';_.tI=34;function gn(a){tm(a,'^');return a;}
function jn(a){jm(a,wq(np(a.a,Do(a.b))));km(a,true);}
function fn(){}
_=fn.prototype=new sm();_.cb=jn;_.tN=bw+'OperatorPower';_.tI=35;function ln(a){tn(a,'\u221A');return a;}
function nn(a){jm(a,wq(op(Do(a.b))));}
function kn(){}
_=kn.prototype=new sn();_.cb=nn;_.tN=bw+'OperatorSqrt';_.tI=36;function pn(a){tm(a,'-');return a;}
function rn(a){if(a.d){jm(a,wq(Do(a.b)-a.a));}else{jm(a,wq(a.a-Do(a.b)));}km(a,true);}
function on(){}
_=on.prototype=new sm();_.cb=rn;_.tN=bw+'OperatorSubtract';_.tI=37;function co(v,x){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,w,y,z;ok(v);d=em(new dm());c=Bl(new Al(),d);o=ok(new mk());sk(o,(ri(),ti));ik(o,'calc-Panel');j=lg(new jg(),4,5);ik(j,'calc-Grid');z=ko(new fo(),c,'0');hi(j,3,0,z);n=ko(new fo(),c,'1');hi(j,2,0,n);y=ko(new fo(),c,'2');hi(j,2,1,y);w=ko(new fo(),c,'3');hi(j,2,2,w);i=ko(new fo(),c,'4');hi(j,1,0,i);h=ko(new fo(),c,'5');hi(j,1,1,h);s=ko(new fo(),c,'6');hi(j,1,2,s);r=ko(new fo(),c,'7');hi(j,0,0,r);f=ko(new fo(),c,'8');hi(j,0,1,f);m=ko(new fo(),c,'9');hi(j,0,2,m);p=ko(new fo(),c,'.');hi(j,3,2,p);e=ro(new mo(),c,Am(new zm()));hi(j,0,3,e);l=ro(new mo(),c,cn(new bn()));hi(j,1,3,l);u=ro(new mo(),c,pn(new on()));hi(j,2,3,u);a=ro(new mo(),c,wm(new vm()));hi(j,3,3,a);t=ro(new mo(),c,ln(new kn()));hi(j,0,4,t);q=ro(new mo(),c,gn(new fn()));hi(j,1,4,q);k=ro(new mo(),c,Em(new Dm()));hi(j,3,1,k);b=mf(new ff(),'C');b.l(xn(new wn(),v,c));ik(b,'calc-Button');hi(j,2,4,b);g=mf(new ff(),'=');g.l(Bn(new An(),v,c));ik(g,'calc-Button');hi(j,3,4,g);v.a=ck(new wj());fm(d,Fn(new En(),v));Ej(v.a,'0');Dj(v.a,(Cj(),Fj));pk(o,v.a);pk(o,j);pk(v,o);return v;}
function vn(){}
_=vn.prototype=new mk();_.tN=cw+'CalculatorWidget';_.tI=38;_.a=null;function xn(b,a,c){b.a=c;return b;}
function zn(a){Dl(this.a);}
function wn(){}
_=wn.prototype=new Bp();_.D=zn;_.tN=cw+'CalculatorWidget$1';_.tI=39;function Bn(b,a,c){b.a=c;return b;}
function Dn(a){Fl(this.a);}
function An(){}
_=An.prototype=new Bp();_.D=Dn;_.tN=cw+'CalculatorWidget$2';_.tI=40;function Fn(b,a){b.a=a;return b;}
function bo(b,a){Ej(b.a.a,xq(a.b));}
function En(){}
_=En.prototype=new Bp();_.tN=cw+'CalculatorWidget$3';_.tI=0;function lo(){lo=xv;ul(),wl;}
function ko(c,a,b){ul(),wl;mf(c,b);c.l(ho(new go(),c,a,b));ik(c,'calc-Button');return c;}
function fo(){}
_=fo.prototype=new ff();_.tN=dw+'ButtonDigit';_.tI=41;function ho(b,a,c,d){b.a=c;b.b=d;return b;}
function jo(a){El(this.a,this.b);}
function go(){}
_=go.prototype=new Bp();_.D=jo;_.tN=dw+'ButtonDigit$1';_.tI=42;function so(){so=xv;ul(),wl;}
function ro(c,a,b){ul(),wl;mf(c,b.a);c.l(oo(new no(),c,a,b));ik(c,'calc-Button');return c;}
function mo(){}
_=mo.prototype=new ff();_.tN=dw+'ButtonOperator';_.tI=43;function oo(b,a,c,d){b.a=c;b.b=d;return b;}
function qo(a){am(this.a,this.b);}
function no(){}
_=no.prototype=new Bp();_.D=qo;_.tN=dw+'ButtonOperator$1';_.tI=44;function Cq(b,a){b.a=a;return b;}
function Eq(){var a,b;a=D(this);b=this.a;if(b!==null){return a+': '+b;}else{return a;}}
function Bq(){}
_=Bq.prototype=new Bp();_.tS=Eq;_.tN=ew+'Throwable';_.tI=3;_.a=null;function Fo(b,a){Cq(b,a);return b;}
function Eo(){}
_=Eo.prototype=new Bq();_.tN=ew+'Exception';_.tI=4;function bq(b,a){Fo(b,a);return b;}
function aq(){}
_=aq.prototype=new Eo();_.tN=ew+'RuntimeException';_.tI=5;function uo(){}
_=uo.prototype=new aq();_.tN=ew+'ArrayStoreException';_.tI=45;function xo(){}
_=xo.prototype=new aq();_.tN=ew+'ClassCastException';_.tI=46;function vp(){vp=xv;{Ap();}}
function wp(a){vp();return isNaN(a);}
function xp(a){vp();var b;b=yp(a);if(wp(b)){throw tp(new sp(),'Unable to parse '+a);}return b;}
function yp(a){vp();if(zp.test(a)){return parseFloat(a);}else{return Number.NaN;}}
function Ap(){vp();zp=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var zp=null;function Co(){Co=xv;vp();}
function Do(a){Co();return xp(a);}
function cp(b,a){bq(b,a);return b;}
function bp(){}
_=bp.prototype=new aq();_.tN=ew+'IllegalArgumentException';_.tI=47;function fp(b,a){bq(b,a);return b;}
function ep(){}
_=ep.prototype=new aq();_.tN=ew+'IllegalStateException';_.tI=48;function ip(b,a){bq(b,a);return b;}
function hp(){}
_=hp.prototype=new aq();_.tN=ew+'IndexOutOfBoundsException';_.tI=49;function mp(a){return a<0?-a:a;}
function np(b,a){return Math.pow(b,a);}
function op(a){return Math.sqrt(a);}
function pp(){}
_=pp.prototype=new aq();_.tN=ew+'NegativeArraySizeException';_.tI=50;function tp(b,a){cp(b,a);return b;}
function sp(){}
_=sp.prototype=new bp();_.tN=ew+'NumberFormatException';_.tI=51;function oq(b,a){if(!Db(a,1))return false;return rq(b,a);}
function pq(b,a){return b.indexOf(a);}
function qq(b,a){return b.substr(a,b.length-a);}
function rq(a,b){return String(a)==b;}
function sq(a){return oq(this,a);}
function uq(){var a=tq;if(!a){a=tq={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function vq(){return this;}
function wq(a){return ''+a;}
function xq(a){return a!==null?a.tS():'null';}
_=String.prototype;_.eQ=sq;_.hC=uq;_.tS=vq;_.tN=ew+'String';_.tI=2;var tq=null;function fq(a){hq(a);return a;}
function gq(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function hq(a){iq(a,'');}
function iq(b,a){b.js=[a];b.length=a.length;}
function kq(a){a.B();return a.js[0];}
function lq(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function mq(){return kq(this);}
function eq(){}
_=eq.prototype=new Bp();_.B=lq;_.tS=mq;_.tN=ew+'StringBuffer';_.tI=0;function Aq(a){return cb(a);}
function ar(b,a){bq(b,a);return b;}
function Fq(){}
_=Fq.prototype=new aq();_.tN=ew+'UnsupportedOperationException';_.tI=52;function kr(b,a){b.c=a;return b;}
function mr(a){return a.a<a.c.gb();}
function nr(a){if(!mr(a)){throw new tv();}return a.c.v(a.b=a.a++);}
function or(a){if(a.b<0){throw new ep();}a.c.db(a.b);a.a=a.b;a.b=(-1);}
function pr(){return mr(this);}
function qr(){return nr(this);}
function jr(){}
_=jr.prototype=new Bp();_.x=pr;_.A=qr;_.tN=fw+'AbstractList$IteratorImpl';_.tI=0;_.a=0;_.b=(-1);function ys(f,d,e){var a,b,c;for(b=tu(f.s());mu(b);){a=nu(b);c=a.t();if(d===null?c===null:d.eQ(c)){if(e){ou(b);}return a;}}return null;}
function zs(b){var a;a=b.s();return Cr(new Br(),b,a);}
function As(b){var a;a=Du(b);return ks(new js(),b,a);}
function Bs(a){return ys(this,a,false)!==null;}
function Cs(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!Db(d,15)){return false;}f=Cb(d,15);c=zs(this);e=f.z();if(!dt(c,e)){return false;}for(a=Er(c);fs(a);){b=gs(a);h=this.w(b);g=f.w(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function Ds(b){var a;a=ys(this,b,false);return a===null?null:a.u();}
function Es(){var a,b,c;b=0;for(c=tu(this.s());mu(c);){a=nu(c);b+=a.hC();}return b;}
function Fs(){return zs(this);}
function at(){var a,b,c,d;d='{';a=false;for(c=tu(this.s());mu(c);){b=nu(c);if(a){d+=', ';}else{a=true;}d+=xq(b.t());d+='=';d+=xq(b.u());}return d+'}';}
function Ar(){}
_=Ar.prototype=new Bp();_.o=Bs;_.eQ=Cs;_.w=Ds;_.hC=Es;_.z=Fs;_.tS=at;_.tN=fw+'AbstractMap';_.tI=53;function dt(e,b){var a,c,d;if(b===e){return true;}if(!Db(b,16)){return false;}c=Cb(b,16);if(c.gb()!=e.gb()){return false;}for(a=c.y();a.x();){d=a.A();if(!e.p(d)){return false;}}return true;}
function et(a){return dt(this,a);}
function ft(){var a,b,c;a=0;for(b=this.y();b.x();){c=b.A();if(c!==null){a+=c.hC();}}return a;}
function bt(){}
_=bt.prototype=new cr();_.eQ=et;_.hC=ft;_.tN=fw+'AbstractSet';_.tI=54;function Cr(b,a,c){b.a=a;b.b=c;return b;}
function Er(b){var a;a=tu(b.b);return ds(new cs(),b,a);}
function Fr(a){return this.a.o(a);}
function as(){return Er(this);}
function bs(){return this.b.a.c;}
function Br(){}
_=Br.prototype=new bt();_.p=Fr;_.y=as;_.gb=bs;_.tN=fw+'AbstractMap$1';_.tI=55;function ds(b,a,c){b.a=c;return b;}
function fs(a){return a.a.x();}
function gs(b){var a;a=b.a.A();return a.t();}
function hs(){return fs(this);}
function is(){return gs(this);}
function cs(){}
_=cs.prototype=new Bp();_.x=hs;_.A=is;_.tN=fw+'AbstractMap$2';_.tI=0;function ks(b,a,c){b.a=a;b.b=c;return b;}
function ms(b){var a;a=tu(b.b);return rs(new qs(),b,a);}
function ns(a){return Cu(this.a,a);}
function os(){return ms(this);}
function ps(){return this.b.a.c;}
function js(){}
_=js.prototype=new cr();_.p=ns;_.y=os;_.gb=ps;_.tN=fw+'AbstractMap$3';_.tI=0;function rs(b,a,c){b.a=c;return b;}
function ts(a){return a.a.x();}
function us(a){var b;b=a.a.A().u();return b;}
function vs(){return ts(this);}
function ws(){return us(this);}
function qs(){}
_=qs.prototype=new Bp();_.x=vs;_.A=ws;_.tN=fw+'AbstractMap$4';_.tI=0;function Au(){Au=xv;bv=hv();}
function xu(a){{zu(a);}}
function yu(a){Au();xu(a);return a;}
function zu(a){a.a=jb();a.d=kb();a.b=bc(bv,fb);a.c=0;}
function Bu(b,a){if(Db(a,1)){return lv(b.d,Cb(a,1))!==bv;}else if(a===null){return b.b!==bv;}else{return kv(b.a,a,a.hC())!==bv;}}
function Cu(a,b){if(a.b!==bv&&jv(a.b,b)){return true;}else if(gv(a.d,b)){return true;}else if(ev(a.a,b)){return true;}return false;}
function Du(a){return ru(new iu(),a);}
function Eu(c,a){var b;if(Db(a,1)){b=lv(c.d,Cb(a,1));}else if(a===null){b=c.b;}else{b=kv(c.a,a,a.hC());}return b===bv?null:b;}
function Fu(c,a,d){var b;{b=c.b;c.b=d;}if(b===bv){++c.c;return null;}else{return b;}}
function av(c,a){var b;if(Db(a,1)){b=ov(c.d,Cb(a,1));}else if(a===null){b=c.b;c.b=bc(bv,fb);}else{b=nv(c.a,a,a.hC());}if(b===bv){return null;}else{--c.c;return b;}}
function cv(e,c){Au();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.n(a[f]);}}}}
function dv(d,a){Au();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=cu(c.substring(1),e);a.n(b);}}}
function ev(f,h){Au();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.u();if(jv(h,d)){return true;}}}}return false;}
function fv(a){return Bu(this,a);}
function gv(c,d){Au();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(jv(d,a)){return true;}}}return false;}
function hv(){Au();}
function iv(){return Du(this);}
function jv(a,b){Au();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function mv(a){return Eu(this,a);}
function kv(f,h,e){Au();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(jv(h,d)){return c.u();}}}}
function lv(b,a){Au();return b[':'+a];}
function nv(f,h,e){Au();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(jv(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.u();}}}}
function ov(c,a){Au();a=':'+a;var b=c[a];delete c[a];return b;}
function Et(){}
_=Et.prototype=new Ar();_.o=fv;_.s=iv;_.w=mv;_.tN=fw+'HashMap';_.tI=56;_.a=null;_.b=null;_.c=0;_.d=null;var bv;function au(b,a,c){b.a=a;b.b=c;return b;}
function cu(a,b){return au(new Ft(),a,b);}
function du(b){var a;if(Db(b,17)){a=Cb(b,17);if(jv(this.a,a.t())&&jv(this.b,a.u())){return true;}}return false;}
function eu(){return this.a;}
function fu(){return this.b;}
function gu(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function hu(){return this.a+'='+this.b;}
function Ft(){}
_=Ft.prototype=new Bp();_.eQ=du;_.t=eu;_.u=fu;_.hC=gu;_.tS=hu;_.tN=fw+'HashMap$EntryImpl';_.tI=57;_.a=null;_.b=null;function ru(b,a){b.a=a;return b;}
function tu(a){return ku(new ju(),a.a);}
function uu(c){var a,b,d;if(Db(c,17)){a=Cb(c,17);b=a.t();if(Bu(this.a,b)){d=Eu(this.a,b);return jv(a.u(),d);}}return false;}
function vu(){return tu(this);}
function wu(){return this.a.c;}
function iu(){}
_=iu.prototype=new bt();_.p=uu;_.y=vu;_.gb=wu;_.tN=fw+'HashMap$EntrySet';_.tI=58;function ku(c,b){var a;c.c=b;a=it(new gt());if(c.c.b!==(Au(),bv)){jt(a,au(new Ft(),null,c.c.b));}dv(c.c.d,a);cv(c.c.a,a);c.a=tr(a);return c;}
function mu(a){return mr(a.a);}
function nu(a){return a.b=Cb(nr(a.a),17);}
function ou(a){if(a.b===null){throw fp(new ep(),'Must call next() before remove().');}else{or(a.a);av(a.c,a.b.t());a.b=null;}}
function pu(){return mu(this);}
function qu(){return nu(this);}
function ju(){}
_=ju.prototype=new Bp();_.x=pu;_.A=qu;_.tN=fw+'HashMap$EntrySetIterator';_.tI=0;_.a=null;_.b=null;function tv(){}
_=tv.prototype=new aq();_.tN=fw+'NoSuchElementException';_.tI=59;function to(){zl(new xl());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{to();}catch(a){b(d);}else{to();}}
var ac=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1,4:1},{2:1},{5:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{14:1},{14:1},{14:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,8:1,9:1,10:1,11:1},{5:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{12:1},{12:1},{12:1},{13:1},{13:1},{12:1},{12:1},{13:1},{12:1},{7:1,9:1,10:1,11:1},{6:1},{6:1},{7:1,9:1,10:1,11:1},{6:1},{7:1,9:1,10:1,11:1},{6:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{15:1},{16:1},{16:1},{15:1},{17:1},{16:1},{3:1}];if (com_manning_gwtip_calculator_Calculator) {  var __gwt_initHandlers = com_manning_gwtip_calculator_Calculator.__gwt_initHandlers;  com_manning_gwtip_calculator_Calculator.onScriptLoad(gwtOnLoad);}})();