let $cpn={defaultFont:"NEXON-Lv1-Gothic-Light",make_menu(e){let{disable_touchable_out:t,bottom:i,margin:o,menu:r,group:n,parent:a,opacity:h,size:d,close_default_event:c}=e;void 0===d&&(d=$pxi.ccc(80)),void 0===o&&(o=d/2),void 0===h&&(h=.7);let l=0,s=[],p=new PIXI.Container;p.x=0,p.y=0,p.parentGroup=n,a.addChild(p);let u=$pxi.image_sprite(xk.res_list.white);u.tint=0,u.width=$pxi.ccc(GAME_VIRTUAL_WIDTH),u.height=$pxi.ccc(GAME_VIRTUAL_HEIGHT),u.x=0,u.y=0,u.alpha=h,u.parentGroup=p.parentGroup,p.addChild(u),u.alpha=0,u.interactive=!0,t||(u.mousedown=u.touchstart=e=>{y()});let g=commonutil.animation((e,t)=>{u.alpha=e*h},300,constvalue.easing.easeOutQuad);r.forEach(e=>{let t=new PixiText({style:{fontFamily:$cpn.defaultFont,fill:"#ffffff",stroke:"#000000",strokeThickness:0,dropShadow:!0,dropShadowColor:"#ffffff",dropShadowBlur:0,dropShadowAngle:Math.PI/6,dropShadowDistance:0}}),i=t.getNode();i.alpha=0,i.interactive=!0,i.mousedown=i.touchstart=e.exec,i.tint=16777215,t.text=e.label,t.size=d,t.x=t.width/2+($pxi.ccc(GAME_VIRTUAL_WIDTH)-t.width)/2,t.y=t.height/2,i.parentGroup=p.parentGroup,p.addChild(i),l+=t.height+o,s.push(t)}),l-=o;let x,f,_=($pxi.ccc(GAME_VIRTUAL_HEIGHT)-l)/2;if(s.forEach((e,t)=>{e.y=void 0===x?_+e.height/2:x,x=_+(e.y-_)+e.height+o,t===s.length-1&&(f=e.y+e.height/2)}),i){let e=$pxi.ccc(GAME_VIRTUAL_HEIGHT)-f;s.forEach(t=>{t.y+=e-i})}let w=[];s.forEach((e,t)=>{let i=e.y-.04*$pxi.ccc(GAME_VIRTUAL_HEIGHT),o=e.y;e.y=i,(async()=>{await commonutil.delay(100*t),m||w.push([e,commonutil.animation((t,r)=>{e.y=i+(o-i)*t,e.getNode().alpha=t},300,constvalue.easing.easeOutQuad)])})()});let m=!1;function y(e){if(!m){m=!0,w.forEach(e=>{let t=e[1].stop(),i=e[0],o=1*t.ratio;commonutil.animation((e,t)=>{i.getNode().alpha=o-e*o},t.ratio*t.time,constvalue.easing.easeOutQuad)});{let e=g.stop(),t=u.alpha;commonutil.animation((e,i)=>{u.alpha=t-e*t,i&&p.parent.removeChild(p)},e.ratio*e.time,constvalue.easing.easeOutQuad)}e?e():c&&c()}}return{close:y}},dialogbox(e){if(void 0===e){let e=[{name:"OK",exe:e=>{}}],t=$pxi.ccc(15),i=.01*$pxi.ccc(GAME_VIRTUAL_WIDTH),o={width:.8*$pxi.ccc(GAME_VIRTUAL_WIDTH),height:$pxi.ccc(GAME_VIRTUAL_HEIGHT)},r=$pxi.ccc(60),n=$pxi.ccc(150),a=1.5,h="그것이 약속이니까",d=[9531405,16760576,3355443],c=[5592405,16777215,3355443],l=null,s=$pxi.get_group("OFFICELAYER"),p=.3;return{fontFamily:$cpn.defaultFont,backopacity:p,parent:l,group:s,list:e,btn_height:n,margin:t,radius:i,size:o,font_size:r,line_height:a,text:h,btn_color:d,box_color:c}}let{fontFamily:t,parent:i,group:o,list:r,btn_height:n,margin:a,radius:h,size:d,font_size:c,line_height:l,text:s,btn_color:p,box_color:u,backopacity:g}=e,x=new PIXI.Container;x.x=$pxi.ccc(0),x.y=$pxi.ccc(0),x.parentGroup=o,i.addChild(x);{let e=$pxi.image_sprite(xk.res_list.white);e.tint=0,e.x=0,e.y=0,e.width=$pxi.ccc(GAME_VIRTUAL_WIDTH),e.height=$pxi.ccc(GAME_VIRTUAL_HEIGHT),e.alpha=g,e.parentGroup=o,x.addChild(e),e.interactive=!0,e.mousedown=e.touchstart=e=>{}}let f=new PIXI.Container;f.x=$pxi.ccc(0),f.y=$pxi.ccc(0),f.parentGroup=o,x.addChild(f);let _=$cpn.make_rounded_box({group:f.parentGroup,parent:f,tickness:.005*$pxi.ccc(GAME_VIRTUAL_WIDTH),radius:h,color:16777215,bordercolor:16711680,size:d});_.border_color=u[0],_.surface_color=u[1];let w=new PixiText({style:{fontFamily:t||$cpn.defaultFont,fill:"#ffffff",stroke:"#000000",strokeThickness:0,dropShadow:!0,dropShadowColor:"#ffffff",dropShadowBlur:0,dropShadowAngle:Math.PI/6,dropShadowDistance:0,lineHeight:$pxi.ccx(c)*l,align:"center"}}),m=w.getNode();w.text=s,w.size=c,w.width_limit=d.width-2*h-2*a,w.scale=1,m.tint=u[2],f.addChild(m),m.parentGroup=f.parentGroup,w.fit_width_by_newline(),m.y=w.height/2,m.x=m.width/2,m.y+=h+a,m.x+=h+a;let y=0,k=(f.width-2*a-2*h-(r.length-1)*(2*h))/r.length;return r.forEach((e,i)=>{let r=$cpn.make_button({radius:h,font_size:c,fontFamily:t,tickness:.005*$pxi.ccc(GAME_VIRTUAL_WIDTH),color:p,label:e.name,parent:f,group:o,margin:.003*$pxi.ccc(GAME_VIRTUAL_WIDTH),size:{width:k,height:n},onclick:e.exe});r.element.y+=h+a+w.height+a,r.element.x+=h+a+(k+2*h)*i,y=r.element.y+r.element.height+a+h}),_.height=y,f.x=($pxi.ccc(GAME_VIRTUAL_WIDTH)-f.width)/2,f.y=($pxi.ccc(GAME_VIRTUAL_HEIGHT)-f.height)/2,{element:x,remove:function(){x.parent.removeChild(x)}}},make_button({fontFamily:e,radius:t,parent:i,group:o,margin:r,font_size:n,size:a,label:h,color:d,tickness:c,onclick:l,line_height:s}){e=e||$cpn.defaultFont;let p=new PIXI.Container;p.x=$pxi.ccc(0),p.y=$pxi.ccc(0),p.parentGroup=o,i.addChild(p);let u=$cpn.make_rounded_box({group:p.parentGroup,parent:p,tickness:c,radius:t,color:16777215,bordercolor:16777215,size:a});u.border_color=d[0],u.surface_color=d[1],u.width=a.width,u.height=a.height;let g=new PixiText({style:{fontFamily:e,fill:"#ffffff",stroke:"#000000",strokeThickness:0,dropShadow:!0,dropShadowColor:"#ffffff",dropShadowBlur:0,dropShadowAngle:Math.PI/6,dropShadowDistance:0,lineHeight:0*$pxi.ccx(n),align:"center"}}),x=g.getNode();g.text=h,g.size=n,g.scale=1,x.tint=d[2],p.addChild(x),x.parentGroup=p.parentGroup,p.interactive=!0,p.mousedown=p.touchstart=l;let f={element:p,remove:function(){p.parent.removeChild(p)},set width(e){u.width=e,x.x=g.width/2+(u.width-g.width)/2},set height(e){u.height=e,x.y=g.height/2+(u.height-g.height)/2},get width(){return u.width},get height(){return u.height},fit_height(){f.height=g.height},fit_width(){f.width=g.width},get x(){return p.x},get y(){return p.y},set x(e){p.x=e},set y(e){p.y=e}};return f.width=a.width,f.height=a.height,f},make_rounded_box({radius:e,color:t,group:i,parent:o,size:r,internal:n,tickness:a,bordercolor:h}){if(i||(i=o.parentGroup),n){let n,a,h,s,p=new PIXI.Container;function d(){let i=new PIXI.Graphics;return i.clear(),i.beginFill(16777215),i.tint=t,i.drawCircle(0,0,e),i.endFill(),i.parentGroup=p.parentGroup,p.addChild(i),i.x=e,i.y=e,i}p.x=0,p.y=0,p.parentGroup=i,o.addChild(p);{let e=d();e.x+=0,n=e}{let t=d();t.x+=r.width-2*e,a=t}{let t=d();t.x+=0,t.y+=r.height-2*e,h=t}{let t=d();t.x+=r.width-2*e,t.y+=r.height-2*e,s=t}let u=[];{let i=$pxi.image_sprite(xk.res_list.white);i.tint=t,i.x=e,i.y=0,i.width=r.width-2*e,i.height=r.height-2*e+2*e,i.alpha=1,i.parentGroup=p.parentGroup,p.addChild(i),u.push(i)}{let i=$pxi.image_sprite(xk.res_list.white);i.tint=t,i.x=0,i.y=e,i.width=r.width,i.height=r.height-2*e,i.alpha=1,i.parentGroup=p.parentGroup,p.addChild(i),u.push(i)}function c(e){h.y+=e,s.y+=e,u.forEach(t=>{t.height+=e})}function l(e){a.x+=e,s.x+=e,u.forEach(t=>{t.width+=e})}return{addHeight:c,addWidth:l,element:p,set x(e){p.x=e},set y(e){p.y=e},get x(){return p.x},get y(){return p.y}}}{let n,d,s=r.width,p=r.height,u=e,g=u-a,x=2*(u-g),f=new PIXI.Container;f.x=0,f.y=0,f.parentGroup=i,o.addChild(f);let _=[];{let e=$cpn.make_rounded_box({internal:!0,parent:f,radius:u,color:h,size:r});_.push(e),n=e}{let e=$cpn.make_rounded_box({internal:!0,parent:f,radius:g,color:t,size:{width:r.width-x,height:r.height-x}});e.y+=x/2,e.x+=x/2,_.push(e),d=e}function c(e){_.forEach(t=>{t.addHeight(e)})}function l(e){_.forEach(t=>{t.addWidth(e)})}let w={destroy:function(){f.parent.removeChild(f)},addHeight:c,addWidth:l,element:f,set x(e){f.x=e},set y(e){f.y=e},get x(){return f.x},get y(){return f.y},set width(e){let t=e-s;s=e,w.addWidth(t)},set height(e){let t=e-p;p=e,w.addHeight(t)},get width(){return s},get height(){return p},set border_color(e){n.element.children.forEach(t=>{t.tint=e})},get border_color(){return n.element.children[0].tint},set surface_color(e){d.element.children.forEach(t=>{t.tint=e})},get surface_color(){return d.element.children[0].tint}};return w}},make_keyboard(e){function t(t){let i=$pxi.image_sprite(xk.res_list.white);return i.parentGroup=e.group,i.interactive=!0,i.width=2*$pxi.ccc(GAME_VIRTUAL_WIDTH),i.height=$pxi.ccc(GAME_VIRTUAL_HEIGHT),i.alpha=0,i.x=-$pxi.ccc(GAME_VIRTUAL_WIDTH),i.mousedown=i.touchstart=o,i.mouseup=i.touchend=r,i.y=t,a.addChild(i),i}let i;function o(e){n()}function r(e){if(p[e.data.identifier]){let{element:t,res:i,txt:o}=p[e.data.identifier];o&&(o.getNode().tint=8947848),t.texture=i.white.texture,delete p[e.data.identifier]}}function n(){a.parent.removeChild(a),e.onblur&&e.onblur()}let a=new PIXI.Container;a.x=0,a.y=0,e.container.addChild(a),a.parentGroup=e.group;let h,d={minus:"-",equal:"=",plus:"+",comma:",",dot:".",slash:"/",gt:">",lt:"<",question:"?",semicolon:";",colon:":",back:null,close:null},c={x:0,y:0},l={txt:e.area?Array.from(e.area.text):[]},s=0,p={};return["1","2","3","4","5","6","7","8","9","0","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","back","z","x","c","v","b","n","m","minus","equal","plus","comma","dot","slash","gt","lt","question","semicolon","colon","close"].forEach((t,o)=>{let u=d[t]?d[t]:t,g={white:xk.res_list["keyboard_white_"+t],pressed:xk.res_list["keyboard_pressed_"+t]};g="back"===u||"close"===u?{white:xk.res_list["keyboard_white_"+t],pressed:xk.res_list["keyboard_pressed_"+t]}:{white:xk.res_list.keyboard_white,pressed:xk.res_list.keyboard_pressed};let x=$pxi.image_sprite(g.white);x.parentGroup=e.group,x.interactive=!0;let f,_=function(t){function i(){let t=l.txt.join("");if(e.area){e.area.text;e.area.text=t}e.down(u,t),l.txt=Array.from(t)}"back"===u?(l.txt.splice(l.txt.length-1,1),i()):"close"===u?n():(l.txt.push(u.toUpperCase()),i()),a.parent&&(x.texture=g.pressed.texture,f&&(f.getNode().tint=0),p[t.data.identifier]={element:x,res:g,txt:f},e.onchange&&e.onchange(l.txt.join("")))};x.mousedown=x.touchstart=_,x.mouseup=x.touchend=r,a.addChild(x),o%10==0&&(c.y+=x.height,c.x=0,s++),x.x=c.x,x.y=c.y-x.height,c.x+=x.width,void 0===h&&(h={width:x.width,height:x.height}),f=function(t,o,n){let h;if("close"===t||"back"===t);else{h=new PixiText({style:{fontFamily:$cpn.defaultFont,fill:"#ffffff",stroke:"#000000",strokeThickness:0,dropShadow:!0,dropShadowColor:"#ffffff",dropShadowBlur:0,dropShadowAngle:Math.PI/6,dropShadowDistance:0}}),h&&(h.node.tint=8947848);let d=h.getNode();d.parentGroup=e.group,d.interactive=!0,h.text=t.toUpperCase(),h.size=i||$pxi.ccc(40),h.scale=1,a.addChild(d),void 0===i&&(h.fitfit(.8*o.height,!1),i=h.size),d.y=o.y+d.height/2+(o.height-d.height)/2,d.x=o.x+d.width/2+(o.width-d.width)/2,d.mousedown=d.touchstart=n,d.mouseup=d.touchend=r}return h}(u,x,_)}),t(-$pxi.ccc(GAME_VIRTUAL_HEIGHT)),t(h.height*s),e.onfocus&&e.onfocus(),{element:a,pressed_key:l,size:{width:10*h.width,height:h.height*s}}},make_edit_text({placeholder:e,container:t,group:i,onblur:o,onfocus:r,onchange:n,secure:a}){let h=0,d=0,c=0,l=0,s=0,p="",u=0,g=a,x=new PIXI.Container;x.x=$pxi.ccc(0),x.y=$pxi.ccc(0),t.addChild(x),x.parentGroup=i;let f=function(){let e=$cpn.make_keyboard({group:i,container:t,area:G,down:(e,t)=>{},onfocus:e=>{_.border_color=6710886,_.surface_color=16777215,r(e)},onchange:e=>{n(e)},onblur:e=>{_.border_color=11184810,_.surface_color=16777215,o(e)}}),a=$pxi.ccc(150);e.element.x=($pxi.ccc(GAME_VIRTUAL_WIDTH)-e.size.width)/2,e.element.y=$pxi.ccc(GAME_VIRTUAL_HEIGHT)-(e.size.height+a)},_=$cpn.make_rounded_box({parent:x,tickness:.005*$pxi.ccc(1080),radius:.02*$pxi.ccc(1080),color:16777215,bordercolor:16711680,size:{width:$pxi.ccc(GAME_VIRTUAL_WIDTH)/2,height:$pxi.ccc(GAME_VIRTUAL_HEIGHT)/2}});function w(){let e=new PixiText({style:{fontFamily:$cpn.defaultFont,fill:"#ffffff",stroke:"#000000",strokeThickness:0,dropShadow:!0,dropShadowColor:"#ffffff",dropShadowBlur:0,dropShadowAngle:Math.PI/6,dropShadowDistance:0}});return e.text="",e.scale=1,e.getNode().mask=(e=>{let t=new PIXI.Graphics;return t.beginFill(16777215),t.drawRect(0,0,1,1),t.endFill(),x.addChild(t),t})(),x.addChild(e.getNode()),e.getNode().tint=0,e.getNode().parentGroup=i,e.getNode().mask.interactive=!0,e.getNode().interactive=!0,e.getNode().mask.mousedown=e.getNode().mask.touchstart=f,e.getNode().mousedown=e.getNode().touchstart=f,e}function m(e){let t=e.getNode(),i=1.5*t.height;i>l&&(_.height=i,G.height=i);let o=(i-t.height)/2,r=(_.height-t.height)/2,n=_.x+t.width/2,a=_.y+t.height/2;t.y=a+r,0===u&&(t.x=n+r),1===u&&(t.x=n+(_.width-t.width)/2),t.mask.x=_.x+o,t.mask.width=_.width-2*o}function y(){m(k),I&&(I.text=e,m(I),k.text?(I.getNode().alpha=0,I.getNode().mask.alpha=0):(I.getNode().tint=11184810,I.getNode().alpha=1,I.getNode().mask.alpha=1))}_.y=0,_.x=0,_.border_color=11184810,_.surface_color=16777215;let k=w(),I=e?w():null;_.interactive=!0,_.mousedown=_.touchstart=f;let G={set_focus:f,element:k,set x(e){h=e,_.x=e,I&&(I.getNode().mask.x=e),k.getNode().mask.x=e,y()},set y(e){d=e,_.y=e,I&&(I.getNode().mask.y=e),k.getNode().mask.y=e,y()},set width(e){c=e,_.width=e,I&&(I.getNode().mask.width=e),k.getNode().mask.width=e,y()},set height(e){l=e,_.height=e,I&&(I.getNode().mask.height=e),k.getNode().mask.height=e,y()},set size(e){s=e,I&&(I.size=e),k.size=e,y()},set text(e){p=e,k.text=g?"*".repeat(e.length):e,y()},set align(e){u=e,y()},get y(){return d},get x(){return h},get size(){return s},get text(){return p},get width(){return c},get height(){return l},get align(){return u},get secure(){return g}};return y(),G}};