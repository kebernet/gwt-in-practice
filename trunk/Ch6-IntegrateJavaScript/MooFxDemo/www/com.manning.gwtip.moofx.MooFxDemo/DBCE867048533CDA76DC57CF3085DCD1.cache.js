(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,vp='com.google.gwt.core.client.',wp='com.google.gwt.lang.',xp='com.google.gwt.user.client.',yp='com.google.gwt.user.client.impl.',zp='com.google.gwt.user.client.ui.',Ap='com.google.gwt.user.client.ui.impl.',Bp='com.manning.gwtip.javascript.moofx.client.',Cp='com.manning.gwtip.moofx.client.',Dp='java.lang.',Ep='java.util.';function up(){}
function lk(a){return this===a;}
function mk(){return Ak(this);}
function jk(){}
_=jk.prototype={};_.eQ=lk;_.hC=mk;_.tI=1;function o(){return u();}
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
_=x.prototype=new jk();_.eQ=E;_.hC=F;_.tI=7;function bb(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function db(a,b,c){return a[b]=c;}
function eb(b,a){return b[a];}
function fb(a){return a.length;}
function hb(e,d,c,b,a){return gb(e,d,c,b,0,fb(b),a);}
function gb(j,i,g,c,e,a,b){var d,f,h;if((f=eb(c,e))<0){throw new hk();}h=bb(new ab(),f,eb(i,e),eb(g,e),j);++e;if(e<a){j=tk(j,1);for(d=0;d<f;++d){db(h,d,gb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){db(h,d,b);}}return h;}
function ib(a,b,c){if(c!==null&&a.b!=0&& !nb(c,a.b)){throw new xj();}return db(a,b,c);}
function ab(){}
_=ab.prototype=new jk();_.tI=0;function lb(b,a){return !(!(b&&qb[b][a]));}
function mb(b,a){if(b!=null)lb(b.tI,a)||pb();return b;}
function nb(b,a){return b!=null&&lb(b.tI,a);}
function pb(){throw new Aj();}
function ob(a){if(a!==null){throw new Aj();}return a;}
function rb(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var qb;function vb(){vb=up;hc=fn(new dn());{dc=new pd();ud(dc);}}
function wb(b,a){vb();yd(dc,b,a);}
function xb(a,b){vb();return rd(dc,a,b);}
function yb(){vb();return Ad(dc,'button');}
function zb(){vb();return Ad(dc,'div');}
function Ab(){vb();return Ad(dc,'img');}
function Db(b,a,d){vb();var c;c=p;{Cb(b,a,d);}}
function Cb(b,a,c){vb();var d;if(a===gc){if(Fb(b)==8192){gc=null;}}d=Bb;Bb=b;try{c.u(b);}finally{Bb=d;}}
function Eb(b,a){vb();Bd(dc,b,a);}
function Fb(a){vb();return Cd(dc,a);}
function ac(a){vb();sd(dc,a);}
function bc(a){vb();return Dd(dc,a);}
function cc(a){vb();return td(dc,a);}
function ec(a){vb();var b,c;c=true;if(hc.b>0){b=ob(kn(hc,hc.b-1));if(!(c=null.F())){Eb(a,true);ac(a);}}return c;}
function fc(b,a){vb();Ed(dc,b,a);}
function ic(a,b,c){vb();Fd(dc,a,b,c);}
function jc(a,b){vb();ae(dc,a,b);}
function kc(a,b){vb();vd(dc,a,b);}
function lc(a,b){vb();be(dc,a,b);}
function mc(b,a,c){vb();ce(dc,b,a,c);}
function nc(a,b){vb();wd(dc,a,b);}
var Bb=null,dc=null,gc=null,hc;function qc(b,a){if(nb(a,4)){return xb(b,mb(a,4));}return z(rb(b,oc),a);}
function rc(a){return qc(this,a);}
function sc(){return A(rb(this,oc));}
function oc(){}
_=oc.prototype=new x();_.eQ=rc;_.hC=sc;_.tI=8;function wc(a){return z(rb(this,tc),a);}
function xc(){return A(rb(this,tc));}
function tc(){}
_=tc.prototype=new x();_.eQ=wc;_.hC=xc;_.tI=9;function Dc(){Dc=up;Fc=fn(new dn());{Ec();}}
function Ec(){Dc();dd(new zc());}
var Fc;function Bc(){while((Dc(),Fc).b>0){ob(kn((Dc(),Fc),0)).F();}}
function Cc(){return null;}
function zc(){}
_=zc.prototype=new jk();_.z=Bc;_.A=Cc;_.tI=10;function cd(){cd=up;fd=fn(new dn());nd=fn(new dn());{jd();}}
function dd(a){cd();gn(fd,a);}
function ed(a){cd();$wnd.alert(a);}
function gd(){cd();var a,b;for(a=rl(fd);kl(a);){b=mb(ll(a),5);b.z();}}
function hd(){cd();var a,b,c,d;d=null;for(a=rl(fd);kl(a);){b=mb(ll(a),5);c=b.A();{d=c;}}return d;}
function id(){cd();var a,b;for(a=rl(nd);kl(a);){b=ob(ll(a));null.F();}}
function jd(){cd();__gwt_initHandlers(function(){md();},function(){return ld();},function(){kd();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function kd(){cd();var a;a=p;{gd();}}
function ld(){cd();var a;a=p;{return hd();}}
function md(){cd();var a;a=p;{id();}}
var fd,nd;function yd(c,b,a){b.appendChild(a);}
function Ad(b,a){return $doc.createElement(a);}
function Bd(c,b,a){b.cancelBubble=a;}
function Cd(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function Dd(b,a){return a.__eventBits||0;}
function Ed(c,b,a){b.removeChild(a);}
function Fd(c,a,b,d){a[b]=d;}
function ae(c,a,b){a.__listener=b;}
function be(c,a,b){if(!b){b='';}a.innerHTML=b;}
function ce(c,b,a,d){b.style[a]=d;}
function od(){}
_=od.prototype=new jk();_.tI=0;function rd(c,a,b){if(!a&& !b)return true;else if(!a|| !b)return false;return a.uniqueID==b.uniqueID;}
function sd(b,a){a.returnValue=false;}
function td(c,a){var b=a.parentElement;return b||null;}
function ud(d){try{$doc.execCommand('BackgroundImageCache',false,true);}catch(a){}$wnd.__dispatchEvent=function(){var c=xd;xd=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!ec($wnd.event)){xd=c;return;}}var b,a=this;while(a&& !(b=a.__listener))a=a.parentElement;if(b)Db($wnd.event,a,b);xd=c;};$wnd.__dispatchDblClickEvent=function(){var a=$doc.createEventObject();this.fireEvent('onclick',a);if(this.__eventBits&2)$wnd.__dispatchEvent.call(this);};$doc.body.onclick=$doc.body.onmousedown=$doc.body.onmouseup=$doc.body.onmousemove=$doc.body.onmousewheel=$doc.body.onkeydown=$doc.body.onkeypress=$doc.body.onkeyup=$doc.body.onfocus=$doc.body.onblur=$doc.body.ondblclick=$wnd.__dispatchEvent;}
function vd(c,a,b){me(a,b);}
function wd(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&(1|2)?$wnd.__dispatchDblClickEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function pd(){}
_=pd.prototype=new od();_.tI=0;var xd=null;function fe(b,a){b.__kids.push(a);a.__pendingSrc=b.__pendingSrc;}
function ge(k,i,j){i.src=j;if(i.complete){return;}i.__kids=[];i.__pendingSrc=j;k[j]=i;var g=i.onload,f=i.onerror,e=i.onabort;function h(c){var d=i.__kids;i.__cleanup();window.setTimeout(function(){for(var a=0;a<d.length;++a){var b=d[a];if(b.__pendingSrc==j){b.src=j;b.__pendingSrc=null;}}},0);c&&c.call(i);}
i.onload=function(){h(g);};i.onerror=function(){h(f);};i.onabort=function(){h(e);};i.__cleanup=function(){i.onload=g;i.onerror=f;i.onabort=e;i.__cleanup=i.__pendingSrc=i.__kids=null;delete k[j];};}
function he(a){return a.__pendingSrc||a.src;}
function ie(a){return a.__pendingSrc||null;}
function je(b,a){return b[a]||null;}
function ke(e,b){var f=b.uniqueID;var d=e.__kids;for(var c=0,a=d.length;c<a;++c){if(d[c].uniqueID==f){d.splice(c,1);b.__pendingSrc=null;return;}}}
function le(f,c){var e=c.__pendingSrc;var d=c.__kids;c.__cleanup();if(c=d[0]){c.__pendingSrc=null;ge(f,c,e);if(c.__pendingSrc){d.splice(0,1);c.__kids=d;}else{for(var b=1,a=d.length;b<a;++b){d[b].src=e;d[b].__pendingSrc=null;}}}}
function me(a,c){var b,d;if(sk(he(a),c)){return;}if(ne===null){ne=C();}b=ie(a);if(b!==null){d=je(ne,b);if(qc(d,rb(a,oc))){le(ne,d);}else{ke(d,a);}}d=je(ne,c);if(d===null){ge(ne,a,c);}else{fe(d,a);}}
var ne=null;function Eg(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function Fg(b,a){if(b.d!==null){Eg(b,b.d,a);}b.d=a;}
function ah(b,a){ch(b.d,a);}
function bh(b,a){nc(b.d,a|bc(b.d));}
function ch(a,b){ic(a,'className',b);}
function Cg(){}
_=Cg.prototype=new jk();_.tI=0;_.d=null;function vh(a){if(a.b){throw ck(new bk(),"Should only call onAttach when the widget is detached from the browser's document");}a.b=true;jc(a.d,a);a.j();a.x();}
function wh(a){if(!a.b){throw ck(new bk(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.y();}finally{a.k();jc(a.d,null);a.b=false;}}
function xh(a){if(a.c!==null){se(a.c,a);}else if(a.c!==null){throw ck(new bk(),"This widget's parent does not implement HasWidgets");}}
function yh(b,a){if(b.b){jc(b.d,null);}Fg(b,a);if(b.b){jc(a,b);}}
function zh(c,b){var a;a=c.c;if(b===null){if(a!==null&&a.b){wh(c);}c.c=null;}else{if(a!==null){throw ck(new bk(),'Cannot set a new parent without first clearing the old parent');}c.c=b;if(b.b){vh(c);}}}
function Ah(){}
function Bh(){}
function Ch(a){}
function Dh(){}
function Eh(){}
function Fh(a){yh(this,a);}
function dh(){}
_=dh.prototype=new Cg();_.j=Ah;_.k=Bh;_.u=Ch;_.x=Dh;_.y=Eh;_.C=Fh;_.tI=11;_.b=false;_.c=null;function dg(b,a){zh(a,b);}
function fg(b,a){zh(a,null);}
function gg(){var a,b;for(b=this.r();ih(b);){a=jh(b);vh(a);}}
function hg(){var a,b;for(b=this.r();ih(b);){a=jh(b);wh(a);}}
function ig(){}
function jg(){}
function cg(){}
_=cg.prototype=new dh();_.j=gg;_.k=hg;_.x=ig;_.y=jg;_.tI=12;function ef(a){a.a=mh(new eh(),a);}
function ff(a){ef(a);return a;}
function gf(c,a,b){xh(a);nh(c.a,a);wb(b,a.d);dg(c,a);}
function jf(b,c){var a;if(c.c!==b){return false;}fg(b,c);a=c.d;fc(cc(a),a);th(b.a,c);return true;}
function kf(){return rh(this.a);}
function df(){}
_=df.prototype=new cg();_.r=kf;_.tI=13;function pe(a){ff(a);a.C(zb());mc(a.d,'position','relative');mc(a.d,'overflow','hidden');return a;}
function qe(a,b){gf(a,b,a.d);}
function se(b,c){var a;a=jf(b,c);if(a){te(c.d);}return a;}
function te(a){mc(a,'left','');mc(a,'top','');mc(a,'position','');}
function oe(){}
_=oe.prototype=new df();_.tI=14;function of(){of=up;fi(),hi;}
function mf(b,a){fi(),hi;pf(b,a);return b;}
function nf(b,a){if(b.a===null){b.a=Fe(new Ee());}gn(b.a,a);}
function pf(b,a){yh(b,a);bh(b,7041);}
function qf(a){switch(Fb(a)){case 1:if(this.a!==null){bf(this.a,this);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function rf(a){pf(this,a);}
function lf(){}
_=lf.prototype=new dh();_.u=qf;_.C=rf;_.tI=15;_.a=null;function xe(){xe=up;fi(),hi;}
function we(b,a){fi(),hi;mf(b,a);return b;}
function ye(b,a){lc(b.d,a);}
function ve(){}
_=ve.prototype=new lf();_.tI=16;function Ce(){Ce=up;fi(),hi;}
function ze(a){fi(),hi;we(a,yb());De(a.d);ah(a,'gwt-Button');return a;}
function Ae(b,a){fi(),hi;ze(b);ye(b,a);return b;}
function Be(c,a,b){fi(),hi;Ae(c,a);nf(c,b);return c;}
function De(b){Ce();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function ue(){}
_=ue.prototype=new ve();_.tI=17;function cl(d,a,b){var c;while(a.q()){c=a.t();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function el(a){throw Fk(new Ek(),'add');}
function fl(b){var a;a=cl(this,this.r(),b);return a!==null;}
function bl(){}
_=bl.prototype=new jk();_.g=el;_.i=fl;_.tI=0;function ql(b,a){throw fk(new ek(),'Index: '+a+', Size: '+b.b);}
function rl(a){return il(new hl(),a);}
function sl(b,a){throw Fk(new Ek(),'add');}
function tl(a){this.f(this.D(),a);return true;}
function ul(e){var a,b,c,d,f;if(e===this){return true;}if(!nb(e,12)){return false;}f=mb(e,12);if(this.D()!=f.D()){return false;}c=rl(this);d=f.r();while(kl(c)){a=ll(c);b=ll(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function vl(){var a,b,c,d;c=1;a=31;b=rl(this);while(kl(b)){d=ll(b);c=31*c+(d===null?0:d.hC());}return c;}
function wl(){return rl(this);}
function xl(a){throw Fk(new Ek(),'remove');}
function gl(){}
_=gl.prototype=new bl();_.f=sl;_.g=tl;_.eQ=ul;_.hC=vl;_.r=wl;_.B=xl;_.tI=18;function en(a){{hn(a);}}
function fn(a){en(a);return a;}
function gn(b,a){xn(b.a,b.b++,a);return true;}
function hn(a){a.a=B();a.b=0;}
function kn(b,a){if(a<0||a>=b.b){ql(b,a);}return tn(b.a,a);}
function ln(b,a){return mn(b,a,0);}
function mn(c,b,a){if(a<0){ql(c,a);}for(;a<c.b;++a){if(sn(b,tn(c.a,a))){return a;}}return (-1);}
function nn(c,a){var b;b=kn(c,a);vn(c.a,a,1);--c.b;return b;}
function pn(a,b){if(a<0||a>this.b){ql(this,a);}on(this.a,a,b);++this.b;}
function qn(a){return gn(this,a);}
function on(a,b,c){a.splice(b,0,c);}
function rn(a){return ln(this,a)!=(-1);}
function sn(a,b){return a===b||a!==null&&a.eQ(b);}
function un(a){return kn(this,a);}
function tn(a,b){return a[b];}
function wn(a){return nn(this,a);}
function vn(a,c,b){a.splice(c,b);}
function xn(a,b,c){a[b]=c;}
function yn(){return this.b;}
function dn(){}
_=dn.prototype=new gl();_.f=pn;_.g=qn;_.i=rn;_.o=un;_.B=wn;_.D=yn;_.tI=19;_.a=null;_.b=0;function Fe(a){fn(a);return a;}
function bf(d,c){var a,b;for(a=rl(d);kl(a);){b=mb(ll(a),6);b.v(c);}}
function Ee(){}
_=Ee.prototype=new dn();_.tI=20;function Ff(){Ff=up;vo(new Bn());}
function Ef(a,b){Ff();Bf(new zf(),a,b);ah(a,'gwt-Image');return a;}
function ag(a){switch(Fb(a)){case 1:{break;}case 4:case 8:case 64:case 16:case 32:{break;}case 131072:break;case 32768:{break;}case 65536:{break;}}}
function wf(){}
_=wf.prototype=new dh();_.u=ag;_.tI=21;function xf(){}
_=xf.prototype=new jk();_.tI=0;function Af(b,a){a.C(Ab());bh(a,229501);return b;}
function Bf(b,a,c){Af(b,a);Df(b,a,c);return b;}
function Df(b,a,c){kc(a.d,c);}
function zf(){}
_=zf.prototype=new xf();_.tI=0;function qg(){qg=up;vg=vo(new Bn());}
function pg(b,a){qg();pe(b);if(a===null){a=rg();}b.C(a);vh(b);return b;}
function sg(){qg();return tg(null);}
function tg(c){qg();var a,b;b=mb(Bo(vg,c),7);if(b!==null){return b;}a=null;if(vg.c==0){ug();}Co(vg,c,b=pg(new kg(),a));return b;}
function rg(){qg();return $doc.body;}
function ug(){qg();dd(new lg());}
function kg(){}
_=kg.prototype=new oe();_.tI=22;var vg;function ng(){var a,b;for(b=km(ym((qg(),vg)));rm(b);){a=mb(sm(b),7);if(a.b){wh(a);}}}
function og(){return null;}
function lg(){}
_=lg.prototype=new jk();_.z=ng;_.A=og;_.tI=23;function mh(b,a){b.a=hb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[4],null);return b;}
function nh(a,b){qh(a,b,a.b);}
function ph(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function qh(d,e,a){var b,c;if(a<0||a>d.b){throw new ek();}if(d.b==d.a.a){c=hb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ib(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ib(d.a,b,d.a[b-1]);}ib(d.a,a,e);}
function rh(a){return gh(new fh(),a);}
function sh(c,b){var a;if(b<0||b>=c.b){throw new ek();}--c.b;for(a=b;a<c.b;++a){ib(c.a,a,c.a[a+1]);}ib(c.a,c.b,null);}
function th(b,c){var a;a=ph(b,c);if(a==(-1)){throw new qp();}sh(b,a);}
function eh(){}
_=eh.prototype=new jk();_.tI=0;_.a=null;_.b=0;function gh(b,a){b.b=a;return b;}
function ih(a){return a.a<a.b.b-1;}
function jh(a){if(a.a>=a.b.b){throw new qp();}return a.b.a[++a.a];}
function kh(){return ih(this);}
function lh(){return jh(this);}
function fh(){}
_=fh.prototype=new jk();_.q=kh;_.t=lh;_.tI=0;_.a=(-1);function fi(){fi=up;gi=ci(new bi());hi=gi;}
function ei(a){fi();return a;}
function ai(){}
_=ai.prototype=new jk();_.tI=0;var gi,hi;function di(){di=up;fi();}
function ci(a){di();ei(a);return a;}
function bi(){}
_=bi.prototype=new ai();_.tI=0;function li(a){mi(a,a.a);}
function mi(b,a){a.toggle();}
function ii(){}
_=ii.prototype=new jk();_.tI=0;_.a=null;function oi(c,e,b,a,d){c.a=qi(c,rb(e.d,oc),a,b,d);return c;}
function qi(d,b,e,c,f){var a=function(){if(c!=null){c.w();}};return new ($wnd.fx.Height)(b,{'duration':e,'transition':f,'onComplete':a});}
function ni(){}
_=ni.prototype=new ii();_.tI=0;function si(c,e,b,a,d){c.a=ui(c,rb(e.d,oc),a,b,d);return c;}
function ui(d,b,e,c,f){var a=function(){if(c!=null){c.w();}};return new ($wnd.fx.Opacity)(b,{'duration':e,'transition':f,'onComplete':a});}
function ri(){}
_=ri.prototype=new ii();_.tI=0;function wi(){wi=up;zi=Di();yi=Ci();Bi();xi=Ai();}
function Ai(){wi();return $wnd.fx.circ;}
function Bi(){wi();return $wnd.fx.cubic;}
function Ci(){wi();return $wnd.fx.linear;}
function Di(){wi();return $wnd.fx.sinoidal;}
var xi,yi,zi;function Fi(c,e,b,a,d){c.a=bj(c,rb(e.d,oc),a,b,d);return c;}
function bj(d,b,e,c,f){var a=function(){if(c!=null){c.w();}};return new ($wnd.fx.Width)(b,{'duration':e,'transition':f,'onComplete':a});}
function Ei(){}
_=Ei.prototype=new ii();_.tI=0;function sj(a){a.b=Ef(new wf(),o()+'/fireworks.jpg');a.c=new dj();}
function tj(a){sj(a);return a;}
function vj(b){var a;a=Be(new ue(),'Toggle Height',hj(new gj(),b));qe(sg(),a);a=Be(new ue(),'Toggle Width',lj(new kj(),b));qe(sg(),a);a=Be(new ue(),'Toggle Opacity',pj(new oj(),b));qe(sg(),a);qe(sg(),b.b);}
function cj(){}
_=cj.prototype=new jk();_.tI=0;_.a=null;_.d=null;_.e=null;function fj(){ed('complete');}
function dj(){}
_=dj.prototype=new jk();_.w=fj;_.tI=0;function hj(b,a){b.a=a;return b;}
function jj(a){this.a.a=this.a.a===null?oi(new ni(),this.a.b,this.a.c,500,(wi(),zi)):this.a.a;li(this.a.a);}
function gj(){}
_=gj.prototype=new jk();_.v=jj;_.tI=24;function lj(b,a){b.a=a;return b;}
function nj(a){this.a.e=this.a.e===null?Fi(new Ei(),this.a.b,this.a.c,500,(wi(),yi)):this.a.e;li(this.a.e);}
function kj(){}
_=kj.prototype=new jk();_.v=nj;_.tI=25;function pj(b,a){b.a=a;return b;}
function rj(a){this.a.d=this.a.d===null?si(new ri(),this.a.b,this.a.c,5000,(wi(),xi)):this.a.d;li(this.a.d);}
function oj(){}
_=oj.prototype=new jk();_.v=rj;_.tI=26;function Ck(b,a){a;return b;}
function Bk(){}
_=Bk.prototype=new jk();_.tI=3;function Fj(b,a){Ck(b,a);return b;}
function Ej(){}
_=Ej.prototype=new Bk();_.tI=4;function ok(b,a){Fj(b,a);return b;}
function nk(){}
_=nk.prototype=new Ej();_.tI=5;function xj(){}
_=xj.prototype=new nk();_.tI=27;function Aj(){}
_=Aj.prototype=new nk();_.tI=28;function ck(b,a){ok(b,a);return b;}
function bk(){}
_=bk.prototype=new nk();_.tI=29;function fk(b,a){ok(b,a);return b;}
function ek(){}
_=ek.prototype=new nk();_.tI=30;function hk(){}
_=hk.prototype=new nk();_.tI=31;function sk(b,a){if(!nb(a,1))return false;return uk(b,a);}
function tk(b,a){return b.substr(a,b.length-a);}
function uk(a,b){return String(a)==b;}
function vk(a){return sk(this,a);}
function xk(){var a=wk;if(!a){a=wk={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
_=String.prototype;_.eQ=vk;_.hC=xk;_.tI=2;var wk=null;function Ak(a){return t(a);}
function Fk(b,a){ok(b,a);return b;}
function Ek(){}
_=Ek.prototype=new nk();_.tI=32;function il(b,a){b.c=a;return b;}
function kl(a){return a.a<a.c.D();}
function ll(a){if(!kl(a)){throw new qp();}return a.c.o(a.b=a.a++);}
function ml(a){if(a.b<0){throw new bk();}a.c.B(a.b);a.a=a.b;a.b=(-1);}
function nl(){return kl(this);}
function ol(){return ll(this);}
function hl(){}
_=hl.prototype=new jk();_.q=nl;_.t=ol;_.tI=0;_.a=0;_.b=(-1);function wm(f,d,e){var a,b,c;for(b=qo(f.l());jo(b);){a=ko(b);c=a.m();if(d===null?c===null:d.eQ(c)){if(e){lo(b);}return a;}}return null;}
function xm(b){var a;a=b.l();return Al(new zl(),b,a);}
function ym(b){var a;a=Ao(b);return im(new hm(),b,a);}
function zm(a){return wm(this,a,false)!==null;}
function Am(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!nb(d,13)){return false;}f=mb(d,13);c=xm(this);e=f.s();if(!an(c,e)){return false;}for(a=Cl(c);dm(a);){b=em(a);h=this.p(b);g=f.p(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function Bm(b){var a;a=wm(this,b,false);return a===null?null:a.n();}
function Cm(){var a,b,c;b=0;for(c=qo(this.l());jo(c);){a=ko(c);b+=a.hC();}return b;}
function Dm(){return xm(this);}
function yl(){}
_=yl.prototype=new jk();_.h=zm;_.eQ=Am;_.p=Bm;_.hC=Cm;_.s=Dm;_.tI=33;function an(e,b){var a,c,d;if(b===e){return true;}if(!nb(b,14)){return false;}c=mb(b,14);if(c.D()!=e.D()){return false;}for(a=c.r();a.q();){d=a.t();if(!e.i(d)){return false;}}return true;}
function bn(a){return an(this,a);}
function cn(){var a,b,c;a=0;for(b=this.r();b.q();){c=b.t();if(c!==null){a+=c.hC();}}return a;}
function Em(){}
_=Em.prototype=new bl();_.eQ=bn;_.hC=cn;_.tI=34;function Al(b,a,c){b.a=a;b.b=c;return b;}
function Cl(b){var a;a=qo(b.b);return bm(new am(),b,a);}
function Dl(a){return this.a.h(a);}
function El(){return Cl(this);}
function Fl(){return this.b.a.c;}
function zl(){}
_=zl.prototype=new Em();_.i=Dl;_.r=El;_.D=Fl;_.tI=35;function bm(b,a,c){b.a=c;return b;}
function dm(a){return a.a.q();}
function em(b){var a;a=b.a.t();return a.m();}
function fm(){return dm(this);}
function gm(){return em(this);}
function am(){}
_=am.prototype=new jk();_.q=fm;_.t=gm;_.tI=0;function im(b,a,c){b.a=a;b.b=c;return b;}
function km(b){var a;a=qo(b.b);return pm(new om(),b,a);}
function lm(a){return zo(this.a,a);}
function mm(){return km(this);}
function nm(){return this.b.a.c;}
function hm(){}
_=hm.prototype=new bl();_.i=lm;_.r=mm;_.D=nm;_.tI=0;function pm(b,a,c){b.a=c;return b;}
function rm(a){return a.a.q();}
function sm(a){var b;b=a.a.t().n();return b;}
function tm(){return rm(this);}
function um(){return sm(this);}
function om(){}
_=om.prototype=new jk();_.q=tm;_.t=um;_.tI=0;function xo(){xo=up;Eo=ep();}
function uo(a){{wo(a);}}
function vo(a){xo();uo(a);return a;}
function wo(a){a.a=B();a.d=C();a.b=rb(Eo,x);a.c=0;}
function yo(b,a){if(nb(a,1)){return ip(b.d,mb(a,1))!==Eo;}else if(a===null){return b.b!==Eo;}else{return hp(b.a,a,a.hC())!==Eo;}}
function zo(a,b){if(a.b!==Eo&&gp(a.b,b)){return true;}else if(dp(a.d,b)){return true;}else if(bp(a.a,b)){return true;}return false;}
function Ao(a){return oo(new fo(),a);}
function Bo(c,a){var b;if(nb(a,1)){b=ip(c.d,mb(a,1));}else if(a===null){b=c.b;}else{b=hp(c.a,a,a.hC());}return b===Eo?null:b;}
function Co(c,a,d){var b;{b=c.b;c.b=d;}if(b===Eo){++c.c;return null;}else{return b;}}
function Do(c,a){var b;if(nb(a,1)){b=lp(c.d,mb(a,1));}else if(a===null){b=c.b;c.b=rb(Eo,x);}else{b=kp(c.a,a,a.hC());}if(b===Eo){return null;}else{--c.c;return b;}}
function Fo(e,c){xo();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.g(a[f]);}}}}
function ap(d,a){xo();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=Fn(c.substring(1),e);a.g(b);}}}
function bp(f,h){xo();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.n();if(gp(h,d)){return true;}}}}return false;}
function cp(a){return yo(this,a);}
function dp(c,d){xo();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(gp(d,a)){return true;}}}return false;}
function ep(){xo();}
function fp(){return Ao(this);}
function gp(a,b){xo();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function jp(a){return Bo(this,a);}
function hp(f,h,e){xo();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.m();if(gp(h,d)){return c.n();}}}}
function ip(b,a){xo();return b[':'+a];}
function kp(f,h,e){xo();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.m();if(gp(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.n();}}}}
function lp(c,a){xo();a=':'+a;var b=c[a];delete c[a];return b;}
function Bn(){}
_=Bn.prototype=new yl();_.h=cp;_.l=fp;_.p=jp;_.tI=36;_.a=null;_.b=null;_.c=0;_.d=null;var Eo;function Dn(b,a,c){b.a=a;b.b=c;return b;}
function Fn(a,b){return Dn(new Cn(),a,b);}
function ao(b){var a;if(nb(b,15)){a=mb(b,15);if(gp(this.a,a.m())&&gp(this.b,a.n())){return true;}}return false;}
function bo(){return this.a;}
function co(){return this.b;}
function eo(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function Cn(){}
_=Cn.prototype=new jk();_.eQ=ao;_.m=bo;_.n=co;_.hC=eo;_.tI=37;_.a=null;_.b=null;function oo(b,a){b.a=a;return b;}
function qo(a){return ho(new go(),a.a);}
function ro(c){var a,b,d;if(nb(c,15)){a=mb(c,15);b=a.m();if(yo(this.a,b)){d=Bo(this.a,b);return gp(a.n(),d);}}return false;}
function so(){return qo(this);}
function to(){return this.a.c;}
function fo(){}
_=fo.prototype=new Em();_.i=ro;_.r=so;_.D=to;_.tI=38;function ho(c,b){var a;c.c=b;a=fn(new dn());if(c.c.b!==(xo(),Eo)){gn(a,Dn(new Cn(),null,c.c.b));}ap(c.c.d,a);Fo(c.c.a,a);c.a=rl(a);return c;}
function jo(a){return kl(a.a);}
function ko(a){return a.b=mb(ll(a.a),15);}
function lo(a){if(a.b===null){throw ck(new bk(),'Must call next() before remove().');}else{ml(a.a);Do(a.c,a.b.m());a.b=null;}}
function mo(){return jo(this);}
function no(){return ko(this);}
function go(){}
_=go.prototype=new jk();_.q=mo;_.t=no;_.tI=0;_.a=null;_.b=null;function qp(){}
_=qp.prototype=new nk();_.tI=39;function wj(){vj(tj(new cj()));}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{wj();}catch(a){b(d);}else{wj();}}
var qb=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1,4:1},{2:1},{5:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{12:1},{12:1},{12:1},{8:1,9:1,10:1,11:1},{7:1,8:1,9:1,10:1,11:1},{5:1},{6:1},{6:1},{6:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{13:1},{14:1},{14:1},{13:1},{15:1},{14:1},{3:1}];if (com_manning_gwtip_moofx_MooFxDemo) {  var __gwt_initHandlers = com_manning_gwtip_moofx_MooFxDemo.__gwt_initHandlers;  com_manning_gwtip_moofx_MooFxDemo.onScriptLoad(gwtOnLoad);}})();