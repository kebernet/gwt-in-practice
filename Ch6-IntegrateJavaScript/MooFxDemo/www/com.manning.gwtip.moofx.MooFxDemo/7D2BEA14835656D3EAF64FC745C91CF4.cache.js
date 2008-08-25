(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,kp='com.google.gwt.core.client.',lp='com.google.gwt.lang.',mp='com.google.gwt.user.client.',np='com.google.gwt.user.client.impl.',op='com.google.gwt.user.client.ui.',pp='com.google.gwt.user.client.ui.impl.',qp='com.manning.gwtip.javascript.moofx.client.',rp='com.manning.gwtip.moofx.client.',sp='java.lang.',tp='java.util.';function jp(){}
function bk(a){return this===a;}
function ck(){return pk(this);}
function Fj(){}
_=Fj.prototype={};_.eQ=bk;_.hC=ck;_.tI=1;function o(){return u();}
var p=null;function s(a){return a==null?0:a.$H?a.$H:(a.$H=v());}
function t(a){return a==null?0:a.$H?a.$H:(a.$H=v());}
function u(){return $moduleBase;}
function v(){return ++w;}
var w=0;function z(b,a){if(!nb(a,2)){return false;}return D(b,mb(a,2));}
function A(a){return s(a);}
function B(){return [];}
function C(){return {};}
function E(a){return z(this,a);}
function D(a,b){return a===b;}
function F(){return A(this);}
function x(){}
_=x.prototype=new Fj();_.eQ=E;_.hC=F;_.tI=7;function bb(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function db(a,b,c){return a[b]=c;}
function eb(b,a){return b[a];}
function fb(a){return a.length;}
function hb(e,d,c,b,a){return gb(e,d,c,b,0,fb(b),a);}
function gb(j,i,g,c,e,a,b){var d,f,h;if((f=eb(c,e))<0){throw new Dj();}h=bb(new ab(),f,eb(i,e),eb(g,e),j);++e;if(e<a){j=ik(j,1);for(d=0;d<f;++d){db(h,d,gb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){db(h,d,b);}}return h;}
function ib(a,b,c){if(c!==null&&a.b!=0&& !nb(c,a.b)){throw new nj();}return db(a,b,c);}
function ab(){}
_=ab.prototype=new Fj();_.tI=0;function lb(b,a){return !(!(b&&qb[b][a]));}
function mb(b,a){if(b!=null)lb(b.tI,a)||pb();return b;}
function nb(b,a){return b!=null&&lb(b.tI,a);}
function pb(){throw new qj();}
function ob(a){if(a!==null){throw new qj();}return a;}
function rb(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var qb;function vb(){vb=jp;hc=Am(new ym());{dc=new od();sd(dc);}}
function wb(b,a){vb();Bd(dc,b,a);}
function xb(a,b){vb();return qd(dc,a,b);}
function yb(){vb();return Dd(dc,'button');}
function zb(){vb();return Dd(dc,'div');}
function Ab(){vb();return Dd(dc,'img');}
function Db(b,a,d){vb();var c;c=p;{Cb(b,a,d);}}
function Cb(b,a,c){vb();var d;if(a===gc){if(Fb(b)==8192){gc=null;}}d=Bb;Bb=b;try{c.u(b);}finally{Bb=d;}}
function Eb(b,a){vb();Ed(dc,b,a);}
function Fb(a){vb();return Fd(dc,a);}
function ac(a){vb();xd(dc,a);}
function bc(a){vb();return ae(dc,a);}
function cc(a){vb();return yd(dc,a);}
function ec(a){vb();var b,c;c=true;if(hc.b>0){b=ob(Em(hc,hc.b-1));if(!(c=null.F())){Eb(a,true);ac(a);}}return c;}
function fc(b,a){vb();be(dc,b,a);}
function ic(a,b,c){vb();ce(dc,a,b,c);}
function jc(a,b){vb();de(dc,a,b);}
function kc(a,b){vb();ee(dc,a,b);}
function lc(a,b){vb();fe(dc,a,b);}
function mc(b,a,c){vb();ge(dc,b,a,c);}
function nc(a,b){vb();ud(dc,a,b);}
var Bb=null,dc=null,gc=null,hc;function qc(a){if(nb(a,4)){return xb(this,mb(a,4));}return z(rb(this,oc),a);}
function rc(){return A(rb(this,oc));}
function oc(){}
_=oc.prototype=new x();_.eQ=qc;_.hC=rc;_.tI=8;function vc(a){return z(rb(this,sc),a);}
function wc(){return A(rb(this,sc));}
function sc(){}
_=sc.prototype=new x();_.eQ=vc;_.hC=wc;_.tI=9;function Cc(){Cc=jp;Ec=Am(new ym());{Dc();}}
function Dc(){Cc();cd(new yc());}
var Ec;function Ac(){while((Cc(),Ec).b>0){ob(Em((Cc(),Ec),0)).F();}}
function Bc(){return null;}
function yc(){}
_=yc.prototype=new Fj();_.z=Ac;_.A=Bc;_.tI=10;function bd(){bd=jp;ed=Am(new ym());md=Am(new ym());{id();}}
function cd(a){bd();Bm(ed,a);}
function dd(a){bd();$wnd.alert(a);}
function fd(){bd();var a,b;for(a=gl(ed);Fk(a);){b=mb(al(a),5);b.z();}}
function gd(){bd();var a,b,c,d;d=null;for(a=gl(ed);Fk(a);){b=mb(al(a),5);c=b.A();{d=c;}}return d;}
function hd(){bd();var a,b;for(a=gl(md);Fk(a);){b=ob(al(a));null.F();}}
function id(){bd();__gwt_initHandlers(function(){ld();},function(){return kd();},function(){jd();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function jd(){bd();var a;a=p;{fd();}}
function kd(){bd();var a;a=p;{return gd();}}
function ld(){bd();var a;a=p;{hd();}}
var ed,md;function Bd(c,b,a){b.appendChild(a);}
function Dd(b,a){return $doc.createElement(a);}
function Ed(c,b,a){b.cancelBubble=a;}
function Fd(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function ae(b,a){return a.__eventBits||0;}
function be(c,b,a){b.removeChild(a);}
function ce(c,a,b,d){a[b]=d;}
function de(c,a,b){a.__listener=b;}
function ee(c,a,b){a.src=b;}
function fe(c,a,b){if(!b){b='';}a.innerHTML=b;}
function ge(c,b,a,d){b.style[a]=d;}
function nd(){}
_=nd.prototype=new Fj();_.tI=0;function xd(b,a){a.preventDefault();}
function yd(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function zd(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){Db(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!ec(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)Db(b,a,c);};$wnd.__captureElem=null;}
function Ad(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function vd(){}
_=vd.prototype=new nd();_.tI=0;function qd(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function sd(a){zd(a);rd(a);}
function rd(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function ud(c,b,a){Ad(c,b,a);td(c,b,a);}
function td(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function od(){}
_=od.prototype=new vd();_.tI=0;function xg(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function yg(b,a){if(b.d!==null){xg(b,b.d,a);}b.d=a;}
function zg(b,a){Bg(b.d,a);}
function Ag(b,a){nc(b.d,a|bc(b.d));}
function Bg(a,b){ic(a,'className',b);}
function vg(){}
_=vg.prototype=new Fj();_.tI=0;_.d=null;function oh(a){if(a.b){throw yj(new xj(),"Should only call onAttach when the widget is detached from the browser's document");}a.b=true;jc(a.d,a);a.j();a.x();}
function ph(a){if(!a.b){throw yj(new xj(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.y();}finally{a.k();jc(a.d,null);a.b=false;}}
function qh(a){if(a.c!==null){le(a.c,a);}else if(a.c!==null){throw yj(new xj(),"This widget's parent does not implement HasWidgets");}}
function rh(b,a){if(b.b){jc(b.d,null);}yg(b,a);if(b.b){jc(a,b);}}
function sh(c,b){var a;a=c.c;if(b===null){if(a!==null&&a.b){ph(c);}c.c=null;}else{if(a!==null){throw yj(new xj(),'Cannot set a new parent without first clearing the old parent');}c.c=b;if(b.b){oh(c);}}}
function th(){}
function uh(){}
function vh(a){}
function wh(){}
function xh(){}
function yh(a){rh(this,a);}
function Cg(){}
_=Cg.prototype=new vg();_.j=th;_.k=uh;_.u=vh;_.x=wh;_.y=xh;_.C=yh;_.tI=11;_.b=false;_.c=null;function Cf(b,a){sh(a,b);}
function Ef(b,a){sh(a,null);}
function Ff(){var a,b;for(b=this.r();bh(b);){a=ch(b);oh(a);}}
function ag(){var a,b;for(b=this.r();bh(b);){a=ch(b);ph(a);}}
function bg(){}
function cg(){}
function Bf(){}
_=Bf.prototype=new Cg();_.j=Ff;_.k=ag;_.x=bg;_.y=cg;_.tI=12;function De(a){a.a=fh(new Dg(),a);}
function Ee(a){De(a);return a;}
function Fe(c,a,b){qh(a);gh(c.a,a);wb(b,a.d);Cf(c,a);}
function bf(b,c){var a;if(c.c!==b){return false;}Ef(b,c);a=c.d;fc(cc(a),a);mh(b.a,c);return true;}
function cf(){return kh(this.a);}
function Ce(){}
_=Ce.prototype=new Bf();_.r=cf;_.tI=13;function ie(a){Ee(a);a.C(zb());mc(a.d,'position','relative');mc(a.d,'overflow','hidden');return a;}
function je(a,b){Fe(a,b,a.d);}
function le(b,c){var a;a=bf(b,c);if(a){me(c.d);}return a;}
function me(a){mc(a,'left','');mc(a,'top','');mc(a,'position','');}
function he(){}
_=he.prototype=new Ce();_.tI=14;function gf(){gf=jp;Bh(),Dh;}
function ef(b,a){Bh(),Dh;hf(b,a);return b;}
function ff(b,a){if(b.a===null){b.a=ye(new xe());}Bm(b.a,a);}
function hf(b,a){rh(b,a);Ag(b,7041);}
function jf(a){switch(Fb(a)){case 1:if(this.a!==null){Ae(this.a,this);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function kf(a){hf(this,a);}
function df(){}
_=df.prototype=new Cg();_.u=jf;_.C=kf;_.tI=15;_.a=null;function qe(){qe=jp;Bh(),Dh;}
function pe(b,a){Bh(),Dh;ef(b,a);return b;}
function re(b,a){lc(b.d,a);}
function oe(){}
_=oe.prototype=new df();_.tI=16;function ve(){ve=jp;Bh(),Dh;}
function se(a){Bh(),Dh;pe(a,yb());we(a.d);zg(a,'gwt-Button');return a;}
function te(b,a){Bh(),Dh;se(b);re(b,a);return b;}
function ue(c,a,b){Bh(),Dh;te(c,a);ff(c,b);return c;}
function we(b){ve();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function ne(){}
_=ne.prototype=new oe();_.tI=17;function xk(d,a,b){var c;while(a.q()){c=a.t();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function zk(a){throw uk(new tk(),'add');}
function Ak(b){var a;a=xk(this,this.r(),b);return a!==null;}
function wk(){}
_=wk.prototype=new Fj();_.g=zk;_.i=Ak;_.tI=0;function fl(b,a){throw Bj(new Aj(),'Index: '+a+', Size: '+b.b);}
function gl(a){return Dk(new Ck(),a);}
function hl(b,a){throw uk(new tk(),'add');}
function il(a){this.f(this.D(),a);return true;}
function jl(e){var a,b,c,d,f;if(e===this){return true;}if(!nb(e,12)){return false;}f=mb(e,12);if(this.D()!=f.D()){return false;}c=gl(this);d=f.r();while(Fk(c)){a=al(c);b=al(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function kl(){var a,b,c,d;c=1;a=31;b=gl(this);while(Fk(b)){d=al(b);c=31*c+(d===null?0:d.hC());}return c;}
function ll(){return gl(this);}
function ml(a){throw uk(new tk(),'remove');}
function Bk(){}
_=Bk.prototype=new wk();_.f=hl;_.g=il;_.eQ=jl;_.hC=kl;_.r=ll;_.B=ml;_.tI=18;function zm(a){{Cm(a);}}
function Am(a){zm(a);return a;}
function Bm(b,a){mn(b.a,b.b++,a);return true;}
function Cm(a){a.a=B();a.b=0;}
function Em(b,a){if(a<0||a>=b.b){fl(b,a);}return hn(b.a,a);}
function Fm(b,a){return an(b,a,0);}
function an(c,b,a){if(a<0){fl(c,a);}for(;a<c.b;++a){if(gn(b,hn(c.a,a))){return a;}}return (-1);}
function bn(c,a){var b;b=Em(c,a);kn(c.a,a,1);--c.b;return b;}
function dn(a,b){if(a<0||a>this.b){fl(this,a);}cn(this.a,a,b);++this.b;}
function en(a){return Bm(this,a);}
function cn(a,b,c){a.splice(b,0,c);}
function fn(a){return Fm(this,a)!=(-1);}
function gn(a,b){return a===b||a!==null&&a.eQ(b);}
function jn(a){return Em(this,a);}
function hn(a,b){return a[b];}
function ln(a){return bn(this,a);}
function kn(a,c,b){a.splice(c,b);}
function mn(a,b,c){a[b]=c;}
function nn(){return this.b;}
function ym(){}
_=ym.prototype=new Bk();_.f=dn;_.g=en;_.i=fn;_.o=jn;_.B=ln;_.D=nn;_.tI=19;_.a=null;_.b=0;function ye(a){Am(a);return a;}
function Ae(d,c){var a,b;for(a=gl(d);Fk(a);){b=mb(al(a),6);b.v(c);}}
function xe(){}
_=xe.prototype=new ym();_.tI=20;function yf(){yf=jp;ko(new qn());}
function xf(a,b){yf();uf(new sf(),a,b);zg(a,'gwt-Image');return a;}
function zf(a){switch(Fb(a)){case 1:{break;}case 4:case 8:case 64:case 16:case 32:{break;}case 131072:break;case 32768:{break;}case 65536:{break;}}}
function pf(){}
_=pf.prototype=new Cg();_.u=zf;_.tI=21;function qf(){}
_=qf.prototype=new Fj();_.tI=0;function tf(b,a){a.C(Ab());Ag(a,229501);return b;}
function uf(b,a,c){tf(b,a);wf(b,a,c);return b;}
function wf(b,a,c){kc(a.d,c);}
function sf(){}
_=sf.prototype=new qf();_.tI=0;function jg(){jg=jp;og=ko(new qn());}
function ig(b,a){jg();ie(b);if(a===null){a=kg();}b.C(a);oh(b);return b;}
function lg(){jg();return mg(null);}
function mg(c){jg();var a,b;b=mb(qo(og,c),7);if(b!==null){return b;}a=null;if(og.c==0){ng();}ro(og,c,b=ig(new dg(),a));return b;}
function kg(){jg();return $doc.body;}
function ng(){jg();cd(new eg());}
function dg(){}
_=dg.prototype=new he();_.tI=22;var og;function gg(){var a,b;for(b=Fl(nm((jg(),og)));gm(b);){a=mb(hm(b),7);if(a.b){ph(a);}}}
function hg(){return null;}
function eg(){}
_=eg.prototype=new Fj();_.z=gg;_.A=hg;_.tI=23;function fh(b,a){b.a=hb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[4],null);return b;}
function gh(a,b){jh(a,b,a.b);}
function ih(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function jh(d,e,a){var b,c;if(a<0||a>d.b){throw new Aj();}if(d.b==d.a.a){c=hb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ib(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ib(d.a,b,d.a[b-1]);}ib(d.a,a,e);}
function kh(a){return Fg(new Eg(),a);}
function lh(c,b){var a;if(b<0||b>=c.b){throw new Aj();}--c.b;for(a=b;a<c.b;++a){ib(c.a,a,c.a[a+1]);}ib(c.a,c.b,null);}
function mh(b,c){var a;a=ih(b,c);if(a==(-1)){throw new fp();}lh(b,a);}
function Dg(){}
_=Dg.prototype=new Fj();_.tI=0;_.a=null;_.b=0;function Fg(b,a){b.b=a;return b;}
function bh(a){return a.a<a.b.b-1;}
function ch(a){if(a.a>=a.b.b){throw new fp();}return a.b.a[++a.a];}
function dh(){return bh(this);}
function eh(){return ch(this);}
function Eg(){}
_=Eg.prototype=new Fj();_.q=dh;_.t=eh;_.tI=0;_.a=(-1);function Bh(){Bh=jp;Ch=Ah(new zh());Dh=Ch;}
function Ah(a){Bh();return a;}
function zh(){}
_=zh.prototype=new Fj();_.tI=0;var Ch,Dh;function bi(a){ci(a,a.a);}
function ci(b,a){a.toggle();}
function Eh(){}
_=Eh.prototype=new Fj();_.tI=0;_.a=null;function ei(c,e,b,a,d){c.a=gi(c,rb(e.d,oc),a,b,d);return c;}
function gi(d,b,e,c,f){var a=function(){if(c!=null){c.w();}};return new ($wnd.fx.Height)(b,{'duration':e,'transition':f,'onComplete':a});}
function di(){}
_=di.prototype=new Eh();_.tI=0;function ii(c,e,b,a,d){c.a=ki(c,rb(e.d,oc),a,b,d);return c;}
function ki(d,b,e,c,f){var a=function(){if(c!=null){c.w();}};return new ($wnd.fx.Opacity)(b,{'duration':e,'transition':f,'onComplete':a});}
function hi(){}
_=hi.prototype=new Eh();_.tI=0;function mi(){mi=jp;pi=ti();oi=si();ri();ni=qi();}
function qi(){mi();return $wnd.fx.circ;}
function ri(){mi();return $wnd.fx.cubic;}
function si(){mi();return $wnd.fx.linear;}
function ti(){mi();return $wnd.fx.sinoidal;}
var ni,oi,pi;function vi(c,e,b,a,d){c.a=xi(c,rb(e.d,oc),a,b,d);return c;}
function xi(d,b,e,c,f){var a=function(){if(c!=null){c.w();}};return new ($wnd.fx.Width)(b,{'duration':e,'transition':f,'onComplete':a});}
function ui(){}
_=ui.prototype=new Eh();_.tI=0;function ij(a){a.b=xf(new pf(),o()+'/fireworks.jpg');a.c=new zi();}
function jj(a){ij(a);return a;}
function lj(b){var a;a=ue(new ne(),'Toggle Height',Di(new Ci(),b));je(lg(),a);a=ue(new ne(),'Toggle Width',bj(new aj(),b));je(lg(),a);a=ue(new ne(),'Toggle Opacity',fj(new ej(),b));je(lg(),a);je(lg(),b.b);}
function yi(){}
_=yi.prototype=new Fj();_.tI=0;_.a=null;_.d=null;_.e=null;function Bi(){dd('complete');}
function zi(){}
_=zi.prototype=new Fj();_.w=Bi;_.tI=0;function Di(b,a){b.a=a;return b;}
function Fi(a){this.a.a=this.a.a===null?ei(new di(),this.a.b,this.a.c,500,(mi(),pi)):this.a.a;bi(this.a.a);}
function Ci(){}
_=Ci.prototype=new Fj();_.v=Fi;_.tI=24;function bj(b,a){b.a=a;return b;}
function dj(a){this.a.e=this.a.e===null?vi(new ui(),this.a.b,this.a.c,500,(mi(),oi)):this.a.e;bi(this.a.e);}
function aj(){}
_=aj.prototype=new Fj();_.v=dj;_.tI=25;function fj(b,a){b.a=a;return b;}
function hj(a){this.a.d=this.a.d===null?ii(new hi(),this.a.b,this.a.c,5000,(mi(),ni)):this.a.d;bi(this.a.d);}
function ej(){}
_=ej.prototype=new Fj();_.v=hj;_.tI=26;function rk(b,a){a;return b;}
function qk(){}
_=qk.prototype=new Fj();_.tI=3;function vj(b,a){rk(b,a);return b;}
function uj(){}
_=uj.prototype=new qk();_.tI=4;function ek(b,a){vj(b,a);return b;}
function dk(){}
_=dk.prototype=new uj();_.tI=5;function nj(){}
_=nj.prototype=new dk();_.tI=27;function qj(){}
_=qj.prototype=new dk();_.tI=28;function yj(b,a){ek(b,a);return b;}
function xj(){}
_=xj.prototype=new dk();_.tI=29;function Bj(b,a){ek(b,a);return b;}
function Aj(){}
_=Aj.prototype=new dk();_.tI=30;function Dj(){}
_=Dj.prototype=new dk();_.tI=31;function ik(b,a){return b.substr(a,b.length-a);}
function jk(a,b){return String(a)==b;}
function kk(a){if(!nb(a,1))return false;return jk(this,a);}
function mk(){var a=lk;if(!a){a=lk={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
_=String.prototype;_.eQ=kk;_.hC=mk;_.tI=2;var lk=null;function pk(a){return t(a);}
function uk(b,a){ek(b,a);return b;}
function tk(){}
_=tk.prototype=new dk();_.tI=32;function Dk(b,a){b.c=a;return b;}
function Fk(a){return a.a<a.c.D();}
function al(a){if(!Fk(a)){throw new fp();}return a.c.o(a.b=a.a++);}
function bl(a){if(a.b<0){throw new xj();}a.c.B(a.b);a.a=a.b;a.b=(-1);}
function cl(){return Fk(this);}
function dl(){return al(this);}
function Ck(){}
_=Ck.prototype=new Fj();_.q=cl;_.t=dl;_.tI=0;_.a=0;_.b=(-1);function lm(f,d,e){var a,b,c;for(b=fo(f.l());Dn(b);){a=En(b);c=a.m();if(d===null?c===null:d.eQ(c)){if(e){Fn(b);}return a;}}return null;}
function mm(b){var a;a=b.l();return pl(new ol(),b,a);}
function nm(b){var a;a=po(b);return Dl(new Cl(),b,a);}
function om(a){return lm(this,a,false)!==null;}
function pm(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!nb(d,13)){return false;}f=mb(d,13);c=mm(this);e=f.s();if(!vm(c,e)){return false;}for(a=rl(c);yl(a);){b=zl(a);h=this.p(b);g=f.p(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function qm(b){var a;a=lm(this,b,false);return a===null?null:a.n();}
function rm(){var a,b,c;b=0;for(c=fo(this.l());Dn(c);){a=En(c);b+=a.hC();}return b;}
function sm(){return mm(this);}
function nl(){}
_=nl.prototype=new Fj();_.h=om;_.eQ=pm;_.p=qm;_.hC=rm;_.s=sm;_.tI=33;function vm(e,b){var a,c,d;if(b===e){return true;}if(!nb(b,14)){return false;}c=mb(b,14);if(c.D()!=e.D()){return false;}for(a=c.r();a.q();){d=a.t();if(!e.i(d)){return false;}}return true;}
function wm(a){return vm(this,a);}
function xm(){var a,b,c;a=0;for(b=this.r();b.q();){c=b.t();if(c!==null){a+=c.hC();}}return a;}
function tm(){}
_=tm.prototype=new wk();_.eQ=wm;_.hC=xm;_.tI=34;function pl(b,a,c){b.a=a;b.b=c;return b;}
function rl(b){var a;a=fo(b.b);return wl(new vl(),b,a);}
function sl(a){return this.a.h(a);}
function tl(){return rl(this);}
function ul(){return this.b.a.c;}
function ol(){}
_=ol.prototype=new tm();_.i=sl;_.r=tl;_.D=ul;_.tI=35;function wl(b,a,c){b.a=c;return b;}
function yl(a){return a.a.q();}
function zl(b){var a;a=b.a.t();return a.m();}
function Al(){return yl(this);}
function Bl(){return zl(this);}
function vl(){}
_=vl.prototype=new Fj();_.q=Al;_.t=Bl;_.tI=0;function Dl(b,a,c){b.a=a;b.b=c;return b;}
function Fl(b){var a;a=fo(b.b);return em(new dm(),b,a);}
function am(a){return oo(this.a,a);}
function bm(){return Fl(this);}
function cm(){return this.b.a.c;}
function Cl(){}
_=Cl.prototype=new wk();_.i=am;_.r=bm;_.D=cm;_.tI=0;function em(b,a,c){b.a=c;return b;}
function gm(a){return a.a.q();}
function hm(a){var b;b=a.a.t().n();return b;}
function im(){return gm(this);}
function jm(){return hm(this);}
function dm(){}
_=dm.prototype=new Fj();_.q=im;_.t=jm;_.tI=0;function mo(){mo=jp;to=zo();}
function jo(a){{lo(a);}}
function ko(a){mo();jo(a);return a;}
function lo(a){a.a=B();a.d=C();a.b=rb(to,x);a.c=0;}
function no(b,a){if(nb(a,1)){return Do(b.d,mb(a,1))!==to;}else if(a===null){return b.b!==to;}else{return Co(b.a,a,a.hC())!==to;}}
function oo(a,b){if(a.b!==to&&Bo(a.b,b)){return true;}else if(yo(a.d,b)){return true;}else if(wo(a.a,b)){return true;}return false;}
function po(a){return co(new zn(),a);}
function qo(c,a){var b;if(nb(a,1)){b=Do(c.d,mb(a,1));}else if(a===null){b=c.b;}else{b=Co(c.a,a,a.hC());}return b===to?null:b;}
function ro(c,a,d){var b;{b=c.b;c.b=d;}if(b===to){++c.c;return null;}else{return b;}}
function so(c,a){var b;if(nb(a,1)){b=ap(c.d,mb(a,1));}else if(a===null){b=c.b;c.b=rb(to,x);}else{b=Fo(c.a,a,a.hC());}if(b===to){return null;}else{--c.c;return b;}}
function uo(e,c){mo();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.g(a[f]);}}}}
function vo(d,a){mo();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=un(c.substring(1),e);a.g(b);}}}
function wo(f,h){mo();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.n();if(Bo(h,d)){return true;}}}}return false;}
function xo(a){return no(this,a);}
function yo(c,d){mo();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(Bo(d,a)){return true;}}}return false;}
function zo(){mo();}
function Ao(){return po(this);}
function Bo(a,b){mo();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function Eo(a){return qo(this,a);}
function Co(f,h,e){mo();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.m();if(Bo(h,d)){return c.n();}}}}
function Do(b,a){mo();return b[':'+a];}
function Fo(f,h,e){mo();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.m();if(Bo(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.n();}}}}
function ap(c,a){mo();a=':'+a;var b=c[a];delete c[a];return b;}
function qn(){}
_=qn.prototype=new nl();_.h=xo;_.l=Ao;_.p=Eo;_.tI=36;_.a=null;_.b=null;_.c=0;_.d=null;var to;function sn(b,a,c){b.a=a;b.b=c;return b;}
function un(a,b){return sn(new rn(),a,b);}
function vn(b){var a;if(nb(b,15)){a=mb(b,15);if(Bo(this.a,a.m())&&Bo(this.b,a.n())){return true;}}return false;}
function wn(){return this.a;}
function xn(){return this.b;}
function yn(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function rn(){}
_=rn.prototype=new Fj();_.eQ=vn;_.m=wn;_.n=xn;_.hC=yn;_.tI=37;_.a=null;_.b=null;function co(b,a){b.a=a;return b;}
function fo(a){return Bn(new An(),a.a);}
function go(c){var a,b,d;if(nb(c,15)){a=mb(c,15);b=a.m();if(no(this.a,b)){d=qo(this.a,b);return Bo(a.n(),d);}}return false;}
function ho(){return fo(this);}
function io(){return this.a.c;}
function zn(){}
_=zn.prototype=new tm();_.i=go;_.r=ho;_.D=io;_.tI=38;function Bn(c,b){var a;c.c=b;a=Am(new ym());if(c.c.b!==(mo(),to)){Bm(a,sn(new rn(),null,c.c.b));}vo(c.c.d,a);uo(c.c.a,a);c.a=gl(a);return c;}
function Dn(a){return Fk(a.a);}
function En(a){return a.b=mb(al(a.a),15);}
function Fn(a){if(a.b===null){throw yj(new xj(),'Must call next() before remove().');}else{bl(a.a);so(a.c,a.b.m());a.b=null;}}
function ao(){return Dn(this);}
function bo(){return En(this);}
function An(){}
_=An.prototype=new Fj();_.q=ao;_.t=bo;_.tI=0;_.a=null;_.b=null;function fp(){}
_=fp.prototype=new dk();_.tI=39;function mj(){lj(jj(new yi()));}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{mj();}catch(a){b(d);}else{mj();}}
var qb=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1,4:1},{2:1},{5:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{12:1},{12:1},{12:1},{8:1,9:1,10:1,11:1},{7:1,8:1,9:1,10:1,11:1},{5:1},{6:1},{6:1},{6:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{13:1},{14:1},{14:1},{13:1},{15:1},{14:1},{3:1}];if (com_manning_gwtip_moofx_MooFxDemo) {  var __gwt_initHandlers = com_manning_gwtip_moofx_MooFxDemo.__gwt_initHandlers;  com_manning_gwtip_moofx_MooFxDemo.onScriptLoad(gwtOnLoad);}})();