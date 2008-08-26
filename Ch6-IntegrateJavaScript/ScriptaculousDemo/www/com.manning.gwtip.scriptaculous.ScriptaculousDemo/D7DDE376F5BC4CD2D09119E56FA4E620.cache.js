(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,gq='com.google.gwt.core.client.',hq='com.google.gwt.lang.',iq='com.google.gwt.user.client.',jq='com.google.gwt.user.client.impl.',kq='com.google.gwt.user.client.ui.',lq='com.manning.gwtip.javascript.scriptaculous.client.',mq='com.manning.gwtip.scriptaculous.client.',nq='java.lang.',oq='java.util.';function fq(){}
function rk(a){return this===a;}
function sk(){return Fk(this);}
function pk(){}
_=pk.prototype={};_.eQ=rk;_.hC=sk;_.tI=1;var o=null;function r(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
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
_=v.prototype=new pk();_.eQ=C;_.hC=D;_.tI=7;function F(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function bb(a,b,c){return a[b]=c;}
function cb(b,a){return b[a];}
function eb(b,a){return b[a];}
function db(a){return a.length;}
function gb(e,d,c,b,a){return fb(e,d,c,b,0,db(b),a);}
function fb(j,i,g,c,e,a,b){var d,f,h;if((f=cb(c,e))<0){throw new nk();}h=F(new E(),f,cb(i,e),cb(g,e),j);++e;if(e<a){j=yk(j,1);for(d=0;d<f;++d){bb(h,d,fb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){bb(h,d,b);}}return h;}
function hb(f,e,c,g){var a,b,d;b=db(g);d=F(new E(),b,e,c,f);for(a=0;a<b;++a){bb(d,a,eb(g,a));}return d;}
function ib(a,b,c){if(c!==null&&a.b!=0&& !nb(c,a.b)){throw new vj();}return bb(a,b,c);}
function E(){}
_=E.prototype=new pk();_.tI=0;function lb(b,a){return !(!(b&&qb[b][a]));}
function mb(b,a){if(b!=null)lb(b.tI,a)||pb();return b;}
function nb(b,a){return b!=null&&lb(b.tI,a);}
function pb(){throw new ak();}
function ob(a){if(a!==null){throw new ak();}return a;}
function rb(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var qb;function vb(){vb=fq;lc=ln(new jn());{hc=new rd();yd(hc);}}
function wb(b,a){vb();Ad(hc,b,a);}
function xb(a,b){vb();return vd(hc,a,b);}
function yb(){vb();return Cd(hc,'div');}
function zb(){vb();return Cd(hc,'img');}
function Ab(){vb();return Cd(hc,'tbody');}
function Bb(){vb();return Cd(hc,'td');}
function Cb(){vb();return Cd(hc,'tr');}
function Db(){vb();return Cd(hc,'table');}
function ac(b,a,d){vb();var c;c=o;{Fb(b,a,d);}}
function Fb(b,a,c){vb();var d;if(a===kc){if(cc(b)==8192){kc=null;}}d=Eb;Eb=b;try{c.y(b);}finally{Eb=d;}}
function bc(b,a){vb();Dd(hc,b,a);}
function cc(a){vb();return Ed(hc,a);}
function dc(a){vb();wd(hc,a);}
function ec(a){vb();return Fd(hc,a);}
function fc(a){vb();return ae(hc,a);}
function gc(a){vb();return xd(hc,a);}
function ic(a){vb();var b,c;c=true;if(lc.b>0){b=ob(pn(lc,lc.b-1));if(!(c=null.hb())){bc(a,true);dc(a);}}return c;}
function jc(b,a){vb();be(hc,b,a);}
function mc(a,b,c){vb();ce(hc,a,b,c);}
function nc(a,b){vb();de(hc,a,b);}
function oc(a,b){vb();ee(hc,a,b);}
function pc(a,b){vb();fe(hc,a,b);}
function qc(b,a,c){vb();ge(hc,b,a,c);}
function rc(a,b){vb();zd(hc,a,b);}
var Eb=null,hc=null,kc=null,lc;function uc(a){if(nb(a,4)){return xb(this,mb(a,4));}return x(rb(this,sc),a);}
function vc(){return y(rb(this,sc));}
function sc(){}
_=sc.prototype=new v();_.eQ=uc;_.hC=vc;_.tI=8;function zc(a){return x(rb(this,wc),a);}
function Ac(){return y(rb(this,wc));}
function wc(){}
_=wc.prototype=new v();_.eQ=zc;_.hC=Ac;_.tI=9;function ad(){ad=fq;cd=ln(new jn());{bd();}}
function bd(){ad();gd(new Cc());}
var cd;function Ec(){while((ad(),cd).b>0){ob(pn((ad(),cd),0)).hb();}}
function Fc(){return null;}
function Cc(){}
_=Cc.prototype=new pk();_.ab=Ec;_.bb=Fc;_.tI=10;function fd(){fd=fq;hd=ln(new jn());pd=ln(new jn());{ld();}}
function gd(a){fd();mn(hd,a);}
function id(){fd();var a,b;for(a=wl(hd);pl(a);){b=mb(ql(a),5);b.ab();}}
function jd(){fd();var a,b,c,d;d=null;for(a=wl(hd);pl(a);){b=mb(ql(a),5);c=b.bb();{d=c;}}return d;}
function kd(){fd();var a,b;for(a=wl(pd);pl(a);){b=ob(ql(a));null.hb();}}
function ld(){fd();__gwt_initHandlers(function(){od();},function(){return nd();},function(){md();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function md(){fd();var a;a=o;{id();}}
function nd(){fd();var a;a=o;{return jd();}}
function od(){fd();var a;a=o;{kd();}}
var hd,pd;function Ad(c,b,a){b.appendChild(a);}
function Cd(b,a){return $doc.createElement(a);}
function Dd(c,b,a){b.cancelBubble=a;}
function Ed(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function Fd(b,a){return a.__eventBits||0;}
function ae(b,a){return a.src;}
function be(c,b,a){b.removeChild(a);}
function ce(c,a,b,d){a[b]=d;}
function de(c,a,b){a.__listener=b;}
function ee(c,a,b){a.src=b;}
function fe(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function ge(c,b,a,d){b.style[a]=d;}
function qd(){}
_=qd.prototype=new pk();_.tI=0;function vd(c,a,b){return a==b;}
function wd(b,a){a.preventDefault();}
function xd(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function yd(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){ac(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!ic(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)ac(b,a,c);};$wnd.__captureElem=null;}
function zd(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function td(){}
_=td.prototype=new qd();_.tI=0;function rd(){}
_=rd.prototype=new td();_.tI=0;function Fg(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function ah(b,a){if(b.i!==null){Fg(b,b.i,a);}b.i=a;}
function bh(b,a){dh(b.i,a);}
function ch(b,a){rc(b.i,a|ec(b.i));}
function dh(a,b){mc(a,'className',b);}
function Dg(){}
_=Dg.prototype=new pk();_.tI=11;_.i=null;function Dh(a){if(a.g){throw ik(new hk(),"Should only call onAttach when the widget is detached from the browser's document");}a.g=true;nc(a.i,a);a.n();a.D();}
function Eh(a){if(!a.g){throw ik(new hk(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.F();}finally{a.o();nc(a.i,null);a.g=false;}}
function Fh(a){if(a.h!==null){a.h.db(a);}else if(a.h!==null){throw ik(new hk(),"This widget's parent does not implement HasWidgets");}}
function ai(b,a){if(b.g){nc(b.i,null);}ah(b,a);if(b.g){nc(a,b);}}
function bi(c,b){var a;a=c.h;if(b===null){if(a!==null&&a.g){Eh(c);}c.h=null;}else{if(a!==null){throw ik(new hk(),'Cannot set a new parent without first clearing the old parent');}c.h=b;if(b.g){Dh(c);}}}
function ci(){}
function di(){}
function ei(a){}
function fi(){}
function gi(){}
function lh(){}
_=lh.prototype=new Dg();_.n=ci;_.o=di;_.y=ei;_.D=fi;_.F=gi;_.tI=12;_.g=false;_.h=null;function gg(b,a){bi(a,b);}
function ig(b,a){bi(a,null);}
function jg(){var a,b;for(b=this.v();qh(b);){a=rh(b);Dh(a);}}
function kg(){var a,b;for(b=this.v();qh(b);){a=rh(b);Eh(a);}}
function lg(){}
function mg(){}
function fg(){}
_=fg.prototype=new lh();_.n=jg;_.o=kg;_.D=lg;_.F=mg;_.tI=13;function te(a){a.f=uh(new mh(),a);}
function ue(a){te(a);return a;}
function ve(c,a,b){Fh(a);vh(c.f,a);wb(b,a.i);gg(c,a);}
function xe(b,c){var a;if(c.h!==b){return false;}ig(b,c);a=c.i;jc(gc(a),a);Bh(b.f,c);return true;}
function ye(){return zh(this.f);}
function ze(a){return xe(this,a);}
function se(){}
_=se.prototype=new fg();_.v=ye;_.db=ze;_.tI=14;function ie(a){ue(a);ai(a,yb());qc(a.i,'position','relative');qc(a.i,'overflow','hidden');return a;}
function je(a,b){ve(a,b,a.i);}
function le(a){qc(a,'left','');qc(a,'top','');qc(a,'position','');}
function me(b){var a;a=xe(this,b);if(a){le(b.i);}return a;}
function he(){}
_=he.prototype=new se();_.db=me;_.tI=15;function oe(a){ue(a);a.e=Db();a.d=Ab();wb(a.e,a.d);ai(a,a.e);return a;}
function qe(c,b,a){mc(b,'align',a.a);}
function re(c,b,a){qc(b,'verticalAlign',a.a);}
function ne(){}
_=ne.prototype=new se();_.tI=16;_.d=null;_.e=null;function Ee(){Ee=fq;Ce(new Be(),'center');Fe=Ce(new Be(),'left');Ce(new Be(),'right');}
var Fe;function Ce(b,a){b.a=a;return b;}
function Be(){}
_=Be.prototype=new pk();_.tI=0;_.a=null;function ef(){ef=fq;cf(new bf(),'bottom');cf(new bf(),'middle');ff=cf(new bf(),'top');}
var ff;function cf(a,b){a.a=b;return a;}
function bf(){}
_=bf.prototype=new pk();_.tI=0;_.a=null;function kf(a){a.a=(Ee(),Fe);a.c=(ef(),ff);}
function lf(a){oe(a);kf(a);a.b=Cb();wb(a.d,a.b);mc(a.e,'cellSpacing','0');mc(a.e,'cellPadding','0');return a;}
function mf(b,c){var a;a=of(b);wb(b.b,a);ve(b,c,a);}
function of(b){var a;a=Bb();qe(b,a,b.a);re(b,a,b.c);return a;}
function pf(c){var a,b;b=gc(c.i);a=xe(this,c);if(a){jc(this.b,b);}return a;}
function jf(){}
_=jf.prototype=new ne();_.db=pf;_.tI=17;_.b=null;function Bf(){Bf=fq;Bo(new ao());}
function zf(a,b){Bf();Af(a,vf(new tf(),a,b));bh(a,'gwt-Image');return a;}
function Af(b,a){b.b=a;}
function Cf(a){return xf(a.b,a);}
function Df(a){switch(cc(a)){case 1:{break;}case 4:case 8:case 64:case 16:case 32:{break;}case 131072:break;case 32768:{break;}case 65536:{break;}}}
function qf(){}
_=qf.prototype=new lh();_.y=Df;_.tI=18;_.b=null;function rf(){}
_=rf.prototype=new pk();_.tI=0;function uf(b,a){ai(a,zb());ch(a,229501);return b;}
function vf(b,a,c){uf(b,a);yf(b,a,c);return b;}
function xf(b,a){return fc(a.i);}
function yf(b,a,c){oc(a.i,c);}
function tf(){}
_=tf.prototype=new rf();_.tI=0;function ag(a){ai(a,yb());ch(a,131197);bh(a,'gwt-Label');return a;}
function bg(b,a){ag(b);dg(b,a);return b;}
function dg(b,a){pc(b.i,a);}
function eg(a){switch(cc(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function Ff(){}
_=Ff.prototype=new lh();_.y=eg;_.tI=19;function tg(){tg=fq;yg=Bo(new ao());}
function sg(b,a){tg();ie(b);if(a===null){a=ug();}ai(b,a);Dh(b);return b;}
function vg(){tg();return wg(null);}
function wg(c){tg();var a,b;b=mb(bp(yg,c),6);if(b!==null){return b;}a=null;if(yg.c==0){xg();}cp(yg,c,b=sg(new ng(),a));return b;}
function ug(){tg();return $doc.body;}
function xg(){tg();gd(new og());}
function ng(){}
_=ng.prototype=new he();_.tI=20;var yg;function qg(){var a,b;for(b=pm(Dm((tg(),yg)));wm(b);){a=mb(xm(b),6);if(a.g){Eh(a);}}}
function rg(){return null;}
function og(){}
_=og.prototype=new pk();_.ab=qg;_.bb=rg;_.tI=21;function fh(a){a.a=(Ee(),Fe);a.b=(ef(),ff);}
function gh(a){oe(a);fh(a);mc(a.e,'cellSpacing','0');mc(a.e,'cellPadding','0');return a;}
function hh(b,d){var a,c;c=Cb();a=jh(b);wb(c,a);wb(b.d,c);ve(b,d,a);}
function jh(b){var a;a=Bb();qe(b,a,b.a);re(b,a,b.b);return a;}
function kh(c){var a,b;b=gc(c.i);a=xe(this,c);if(a){jc(this.d,gc(b));}return a;}
function eh(){}
_=eh.prototype=new ne();_.db=kh;_.tI=22;function uh(b,a){b.a=gb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[4],null);return b;}
function vh(a,b){yh(a,b,a.b);}
function xh(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function yh(d,e,a){var b,c;if(a<0||a>d.b){throw new kk();}if(d.b==d.a.a){c=gb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ib(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ib(d.a,b,d.a[b-1]);}ib(d.a,a,e);}
function zh(a){return oh(new nh(),a);}
function Ah(c,b){var a;if(b<0||b>=c.b){throw new kk();}--c.b;for(a=b;a<c.b;++a){ib(c.a,a,c.a[a+1]);}ib(c.a,c.b,null);}
function Bh(b,c){var a;a=xh(b,c);if(a==(-1)){throw new bq();}Ah(b,a);}
function mh(){}
_=mh.prototype=new pk();_.tI=0;_.a=null;_.b=0;function oh(b,a){b.b=a;return b;}
function qh(a){return a.a<a.b.b-1;}
function rh(a){if(a.a>=a.b.b){throw new bq();}return a.b.a[++a.a];}
function sh(){return qh(this);}
function th(){return rh(this);}
function nh(){}
_=nh.prototype=new pk();_.u=sh;_.x=th;_.tI=0;_.a=(-1);function ii(){ii=fq;ri=vp(new up());qi=Bo(new ao());pi=Bo(new ao());Bo(new ao());si=Bo(new ao());oi=ln(new jn());{yi();}}
function ji(a){ii();mn(oi,a);}
function ki(c,a){ii();var b;b=mb(bp(qi,c),11);if(b===null){b=ln(new jn());cp(qi,c,b);}mn(b,a);}
function li(a,b){ii();if(a==null)a=new Array();a.push(b);return a;}
function mi(a,b){ii();if(a==null)a=new Array();a.push(b);return a;}
function ni(a){ii();a.destroy();}
function ti(c,a){ii();var b;for(b=wl(oi);pl(b);){mb(ql(b),13).z(c,mb(bp(si,rb(a,sc)),7));}}
function ui(e,a){ii();var b,c,d;b=mb(bp(si,rb(a,sc)),7);d=mb(bp(qi,e),11);for(c=0;d!==null&&c<d.b;c++){mb(pn(d,c),12).A(e,b);}}
function vi(c,a){ii();var b;for(b=wl(oi);pl(b);){mb(ql(b),13).B(c,mb(bp(si,rb(a,sc)),7));}}
function wi(e,a){ii();var b,c,d;b=mb(bp(si,rb(a,sc)),7);d=mb(bp(qi,e),11);for(c=0;d!==null&&c<d.b;c++){mb(pn(d,c),12).C(e,b);}}
function xi(c,a){ii();var b;for(b=wl(oi);pl(b);){mb(ql(b),13).E(c,mb(bp(si,rb(a,sc)),7));}}
function yi(){ii();var d={'onStart':function(c,a,b){xi(c,a.element);},'onEnd':function(c,a,b){vi(c,a.element);},'onDrag':function(c,a,b){ti(c,a.element);}};$wnd.Draggables.addObserver(d);}
function zi(a){ii();var b,c;c=null;for(b=0;a!==null&&b<a.a;b++){if(a[b]!==null){c=mi(c,a[b]);}else{c=li(c,ob(a[b]));}}return c;}
function Bi(f,d,e,g,a,c){ii();var b;if(bp(pi,f)!==null){Ei(f);}b=Ai(rb(f.i,sc),null,e,g,a,c);cp(pi,f,rb(b,v));cp(si,rb(f.i,sc),f);}
function Ai(b,d,e,f,a,c){ii();return new ($wnd.Draggable)(b,{'handle':d,'revert':e,'zindex':f,'constraint':a,'ghosting':c});}
function Di(h,a,c,f,g,e){ii();var b,d;b=zi(a);d=null;wp(ri,h);Ci(h.i,b,d,f,g,e,h);}
function Ci(i,d,e,g,h,f,j){ii();$wnd.Droppables.add(i,{'accept':d,'containment':e,'hoverclass':g,'overlap':h,'greedy':f,'onDrop':function(a,b,c){ui(j,a);},'onHover':function(a,b){wi(j,a);}});}
function Ei(b){ii();var a;if(bp(pi,b)!==null){a=mb(dp(pi,b),2);if(!yp(ri,b))dp(si,rb(b.i,sc));ni(a);}}
var oi,pi,qi,ri,si;function dj(){dj=fq;Bf();}
function cj(b,a,c){dj();zf(b,c);b.a=a;return b;}
function bj(){}
_=bj.prototype=new qf();_.tI=23;_.a=null;function qj(a){a.c=gh(new eh());a.a=lf(new jf());a.b=gh(new eh());}
function rj(a){qj(a);return a;}
function tj(c){var a,b,d;d=zf(new qf(),'trash.png');a=hb('[Ljava.lang.String;',0,1,['file']);Di(d,a,null,null,null,true);ki(d,gj(new fj(),c));mf(c.a,c.c);mf(c.a,d);b=cj(new bj(),'foo','webpage.png');bh(b,'file');hh(c.c,b);Bi(b,null,false,1000,null,true);b=cj(new bj(),'bar','webpage.png');bh(b,'file');hh(c.c,b);Bi(b,null,false,1000,null,true);b=cj(new bj(),'baz','webpage.png');bh(b,'file');hh(c.c,b);Bi(b,null,false,1000,null,true);ji(lj(new kj(),c));je(vg(),c.a);je(vg(),c.b);}
function ej(){}
_=ej.prototype=new pk();_.tI=0;function gj(b,a){b.a=a;return b;}
function ij(b,a){hh(this.a.b,bg(new Ff(),'Drop file '+mb(a,14).a));}
function jj(b,a){hh(this.a.b,bg(new Ff(),'Hover '+mb(a,14).a));}
function fj(){}
_=fj.prototype=new pk();_.A=ij;_.C=jj;_.tI=24;function lj(b,a){b.a=a;return b;}
function nj(a,b){hh(this.a.b,bg(new Ff(),a+' '+Cf(mb(b,15))));}
function oj(a,b){hh(this.a.b,bg(new Ff(),a+' '+Cf(mb(b,15))));}
function pj(a,b){hh(this.a.b,bg(new Ff(),a+' '+Cf(mb(b,15))));}
function kj(){}
_=kj.prototype=new pk();_.z=nj;_.B=oj;_.E=pj;_.tI=25;function bl(b,a){a;return b;}
function al(){}
_=al.prototype=new pk();_.tI=3;function fk(b,a){bl(b,a);return b;}
function ek(){}
_=ek.prototype=new al();_.tI=4;function uk(b,a){fk(b,a);return b;}
function tk(){}
_=tk.prototype=new ek();_.tI=5;function vj(){}
_=vj.prototype=new tk();_.tI=26;function zj(){zj=fq;Aj=yj(new xj(),false);Bj=yj(new xj(),true);}
function yj(a,b){zj();a.a=b;return a;}
function Cj(a){return nb(a,16)&&mb(a,16).a==this.a;}
function Dj(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function Ej(a){zj();return a?Bj:Aj;}
function xj(){}
_=xj.prototype=new pk();_.eQ=Cj;_.hC=Dj;_.tI=27;_.a=false;var Aj,Bj;function ak(){}
_=ak.prototype=new tk();_.tI=28;function ik(b,a){uk(b,a);return b;}
function hk(){}
_=hk.prototype=new tk();_.tI=29;function lk(b,a){uk(b,a);return b;}
function kk(){}
_=kk.prototype=new tk();_.tI=30;function nk(){}
_=nk.prototype=new tk();_.tI=31;function yk(b,a){return b.substr(a,b.length-a);}
function zk(a,b){return String(a)==b;}
function Ak(a){if(!nb(a,1))return false;return zk(this,a);}
function Ck(){var a=Bk;if(!a){a=Bk={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
_=String.prototype;_.eQ=Ak;_.hC=Ck;_.tI=2;var Bk=null;function Fk(a){return s(a);}
function el(b,a){uk(b,a);return b;}
function dl(){}
_=dl.prototype=new tk();_.tI=32;function hl(d,a,b){var c;while(a.u()){c=a.x();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function jl(a){throw el(new dl(),'add');}
function kl(b){var a;a=hl(this,this.v(),b);return a!==null;}
function gl(){}
_=gl.prototype=new pk();_.k=jl;_.m=kl;_.tI=0;function vl(b,a){throw lk(new kk(),'Index: '+a+', Size: '+b.b);}
function wl(a){return nl(new ml(),a);}
function xl(b,a){throw el(new dl(),'add');}
function yl(a){this.j(this.fb(),a);return true;}
function zl(e){var a,b,c,d,f;if(e===this){return true;}if(!nb(e,17)){return false;}f=mb(e,17);if(this.fb()!=f.fb()){return false;}c=wl(this);d=f.v();while(pl(c)){a=ql(c);b=ql(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function Al(){var a,b,c,d;c=1;a=31;b=wl(this);while(pl(b)){d=ql(b);c=31*c+(d===null?0:d.hC());}return c;}
function Bl(){return wl(this);}
function Cl(a){throw el(new dl(),'remove');}
function ll(){}
_=ll.prototype=new gl();_.j=xl;_.k=yl;_.eQ=zl;_.hC=Al;_.v=Bl;_.cb=Cl;_.tI=33;function nl(b,a){b.c=a;return b;}
function pl(a){return a.a<a.c.fb();}
function ql(a){if(!pl(a)){throw new bq();}return a.c.s(a.b=a.a++);}
function rl(a){if(a.b<0){throw new hk();}a.c.cb(a.b);a.a=a.b;a.b=(-1);}
function sl(){return pl(this);}
function tl(){return ql(this);}
function ml(){}
_=ml.prototype=new pk();_.u=sl;_.x=tl;_.tI=0;_.a=0;_.b=(-1);function Bm(f,d,e){var a,b,c;for(b=wo(f.p());po(b);){a=qo(b);c=a.q();if(d===null?c===null:d.eQ(c)){if(e){ro(b);}return a;}}return null;}
function Cm(b){var a;a=b.p();return Fl(new El(),b,a);}
function Dm(b){var a;a=ap(b);return nm(new mm(),b,a);}
function Em(a){return Bm(this,a,false)!==null;}
function Fm(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!nb(d,18)){return false;}f=mb(d,18);c=Cm(this);e=f.w();if(!fn(c,e)){return false;}for(a=bm(c);im(a);){b=jm(a);h=this.t(b);g=f.t(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function an(b){var a;a=Bm(this,b,false);return a===null?null:a.r();}
function bn(){var a,b,c;b=0;for(c=wo(this.p());po(c);){a=qo(c);b+=a.hC();}return b;}
function cn(){return Cm(this);}
function Dl(){}
_=Dl.prototype=new pk();_.l=Em;_.eQ=Fm;_.t=an;_.hC=bn;_.w=cn;_.tI=34;function fn(e,b){var a,c,d;if(b===e){return true;}if(!nb(b,19)){return false;}c=mb(b,19);if(c.fb()!=e.fb()){return false;}for(a=c.v();a.u();){d=a.x();if(!e.m(d)){return false;}}return true;}
function gn(a){return fn(this,a);}
function hn(){var a,b,c;a=0;for(b=this.v();b.u();){c=b.x();if(c!==null){a+=c.hC();}}return a;}
function dn(){}
_=dn.prototype=new gl();_.eQ=gn;_.hC=hn;_.tI=35;function Fl(b,a,c){b.a=a;b.b=c;return b;}
function bm(b){var a;a=wo(b.b);return gm(new fm(),b,a);}
function cm(a){return this.a.l(a);}
function dm(){return bm(this);}
function em(){return this.b.a.c;}
function El(){}
_=El.prototype=new dn();_.m=cm;_.v=dm;_.fb=em;_.tI=36;function gm(b,a,c){b.a=c;return b;}
function im(a){return a.a.u();}
function jm(b){var a;a=b.a.x();return a.q();}
function km(){return im(this);}
function lm(){return jm(this);}
function fm(){}
_=fm.prototype=new pk();_.u=km;_.x=lm;_.tI=0;function nm(b,a,c){b.a=a;b.b=c;return b;}
function pm(b){var a;a=wo(b.b);return um(new tm(),b,a);}
function qm(a){return Fo(this.a,a);}
function rm(){return pm(this);}
function sm(){return this.b.a.c;}
function mm(){}
_=mm.prototype=new gl();_.m=qm;_.v=rm;_.fb=sm;_.tI=0;function um(b,a,c){b.a=c;return b;}
function wm(a){return a.a.u();}
function xm(a){var b;b=a.a.x().r();return b;}
function ym(){return wm(this);}
function zm(){return xm(this);}
function tm(){}
_=tm.prototype=new pk();_.u=ym;_.x=zm;_.tI=0;function kn(a){{nn(a);}}
function ln(a){kn(a);return a;}
function mn(b,a){Cn(b.a,b.b++,a);return true;}
function nn(a){a.a=z();a.b=0;}
function pn(b,a){if(a<0||a>=b.b){vl(b,a);}return yn(b.a,a);}
function qn(b,a){return rn(b,a,0);}
function rn(c,b,a){if(a<0){vl(c,a);}for(;a<c.b;++a){if(xn(b,yn(c.a,a))){return a;}}return (-1);}
function sn(c,a){var b;b=pn(c,a);An(c.a,a,1);--c.b;return b;}
function un(a,b){if(a<0||a>this.b){vl(this,a);}tn(this.a,a,b);++this.b;}
function vn(a){return mn(this,a);}
function tn(a,b,c){a.splice(b,0,c);}
function wn(a){return qn(this,a)!=(-1);}
function xn(a,b){return a===b||a!==null&&a.eQ(b);}
function zn(a){return pn(this,a);}
function yn(a,b){return a[b];}
function Bn(a){return sn(this,a);}
function An(a,c,b){a.splice(c,b);}
function Cn(a,b,c){a[b]=c;}
function Dn(){return this.b;}
function jn(){}
_=jn.prototype=new ll();_.j=un;_.k=vn;_.m=wn;_.s=zn;_.cb=Bn;_.fb=Dn;_.tI=37;_.a=null;_.b=0;function Do(){Do=fq;ep=kp();}
function Ao(a){{Co(a);}}
function Bo(a){Do();Ao(a);return a;}
function Co(a){a.a=z();a.d=A();a.b=rb(ep,v);a.c=0;}
function Eo(b,a){if(nb(a,1)){return op(b.d,mb(a,1))!==ep;}else if(a===null){return b.b!==ep;}else{return np(b.a,a,a.hC())!==ep;}}
function Fo(a,b){if(a.b!==ep&&mp(a.b,b)){return true;}else if(jp(a.d,b)){return true;}else if(hp(a.a,b)){return true;}return false;}
function ap(a){return uo(new lo(),a);}
function bp(c,a){var b;if(nb(a,1)){b=op(c.d,mb(a,1));}else if(a===null){b=c.b;}else{b=np(c.a,a,a.hC());}return b===ep?null:b;}
function cp(c,a,d){var b;if(nb(a,1)){b=rp(c.d,mb(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=qp(c.a,a,d,a.hC());}if(b===ep){++c.c;return null;}else{return b;}}
function dp(c,a){var b;if(nb(a,1)){b=tp(c.d,mb(a,1));}else if(a===null){b=c.b;c.b=rb(ep,v);}else{b=sp(c.a,a,a.hC());}if(b===ep){return null;}else{--c.c;return b;}}
function fp(e,c){Do();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.k(a[f]);}}}}
function gp(d,a){Do();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=fo(c.substring(1),e);a.k(b);}}}
function hp(f,h){Do();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(mp(h,d)){return true;}}}}return false;}
function ip(a){return Eo(this,a);}
function jp(c,d){Do();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(mp(d,a)){return true;}}}return false;}
function kp(){Do();}
function lp(){return ap(this);}
function mp(a,b){Do();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function pp(a){return bp(this,a);}
function np(f,h,e){Do();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.q();if(mp(h,d)){return c.r();}}}}
function op(b,a){Do();return b[':'+a];}
function qp(f,h,j,e){Do();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.q();if(mp(h,d)){var i=c.r();c.eb(j);return i;}}}else{a=f[e]=[];}var c=fo(h,j);a.push(c);}
function rp(c,a,d){Do();a=':'+a;var b=c[a];c[a]=d;return b;}
function sp(f,h,e){Do();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.q();if(mp(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.r();}}}}
function tp(c,a){Do();a=':'+a;var b=c[a];delete c[a];return b;}
function ao(){}
_=ao.prototype=new Dl();_.l=ip;_.p=lp;_.t=pp;_.tI=38;_.a=null;_.b=null;_.c=0;_.d=null;var ep;function co(b,a,c){b.a=a;b.b=c;return b;}
function fo(a,b){return co(new bo(),a,b);}
function go(b){var a;if(nb(b,20)){a=mb(b,20);if(mp(this.a,a.q())&&mp(this.b,a.r())){return true;}}return false;}
function ho(){return this.a;}
function io(){return this.b;}
function jo(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function ko(a){var b;b=this.b;this.b=a;return b;}
function bo(){}
_=bo.prototype=new pk();_.eQ=go;_.q=ho;_.r=io;_.hC=jo;_.eb=ko;_.tI=39;_.a=null;_.b=null;function uo(b,a){b.a=a;return b;}
function wo(a){return no(new mo(),a.a);}
function xo(c){var a,b,d;if(nb(c,20)){a=mb(c,20);b=a.q();if(Eo(this.a,b)){d=bp(this.a,b);return mp(a.r(),d);}}return false;}
function yo(){return wo(this);}
function zo(){return this.a.c;}
function lo(){}
_=lo.prototype=new dn();_.m=xo;_.v=yo;_.fb=zo;_.tI=40;function no(c,b){var a;c.c=b;a=ln(new jn());if(c.c.b!==(Do(),ep)){mn(a,co(new bo(),null,c.c.b));}gp(c.c.d,a);fp(c.c.a,a);c.a=wl(a);return c;}
function po(a){return pl(a.a);}
function qo(a){return a.b=mb(ql(a.a),20);}
function ro(a){if(a.b===null){throw ik(new hk(),'Must call next() before remove().');}else{rl(a.a);dp(a.c,a.b.q());a.b=null;}}
function so(){return po(this);}
function to(){return qo(this);}
function mo(){}
_=mo.prototype=new pk();_.u=so;_.x=to;_.tI=0;_.a=null;_.b=null;function vp(a){a.a=Bo(new ao());return a;}
function wp(c,a){var b;b=cp(c.a,a,Ej(true));return b===null;}
function yp(b,a){return Eo(b.a,a);}
function zp(a){return wp(this,a);}
function Ap(a){return yp(this,a);}
function Bp(){return bm(Cm(this.a));}
function Cp(){return this.a.c;}
function up(){}
_=up.prototype=new dn();_.k=zp;_.m=Ap;_.v=Bp;_.fb=Cp;_.tI=41;_.a=null;function bq(){}
_=bq.prototype=new tk();_.tI=42;function uj(){tj(rj(new ej()));}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{uj();}catch(a){b(d);}else{uj();}}
var qb=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1,4:1},{2:1},{5:1},{7:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1,15:1},{7:1,8:1,9:1,10:1},{6:1,7:1,8:1,9:1,10:1},{5:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1,14:1,15:1},{12:1},{13:1},{3:1},{16:1},{3:1},{3:1},{3:1},{3:1},{3:1},{17:1},{18:1},{19:1},{19:1},{11:1,17:1},{18:1},{20:1},{19:1},{19:1},{3:1}];if (com_manning_gwtip_scriptaculous_ScriptaculousDemo) {  var __gwt_initHandlers = com_manning_gwtip_scriptaculous_ScriptaculousDemo.__gwt_initHandlers;  com_manning_gwtip_scriptaculous_ScriptaculousDemo.onScriptLoad(gwtOnLoad);}})();