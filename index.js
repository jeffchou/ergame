var ref$,w,h,patw,path,of1x,of1y,dpw,dph,x$,touchflag,touch;ref$=[1170,658],w=ref$[0],h=ref$[1],ref$=[193,278],patw=ref$[0],path=ref$[1],ref$=[298,273],of1x=ref$[0],of1y=ref$[1],ref$=[59,20],dpw=ref$[0],dph=ref$[1],x$=angular.module("ERGame",[]),x$.config(["$compileProvider"].concat(function(t){return t.imgSrcSanitizationWhitelist(/^\s*(blob):|http:\/\/localhost:9998\/|http:\/\/0media.tw\/|http:\/\/reporter.tw\//)})),x$.controller("ERGame",["$scope","$interval","$timeout","$http","$sce"].concat(function(t,e,n,i,r){var a,o,s,u,c,p,g,d,l;for(a=[],o=0;12>o;++o)s=o,a.push([s%4,parseInt(s/4)]);return t.list=a,t.danger=!1,t.pixel={scene:{w:1170,h:658},sprite:{size:[{w:0,h:0},{w:101,h:142},{w:108,h:229},{w:108,h:229},{w:291,h:245},{w:316,h:269},{w:105,h:196},{w:146,h:239},{w:98,h:60},{w:306,h:298},{w:191,h:240},{w:104,h:136},{w:238,h:184}],points:[{x:591,y:-19,type:6}].concat([{x:317,y:2,type:5}],[{x:687,y:-36,type:7}],[{x:507,y:54,type:9,variant:1}],[{x:249,y:184,type:11}],function(){var t,e,n=[];for(t=0;3>t;++t)for(u=t,e=0;4>e;++e)c=e,n.push({x:293+59*c+-127*u,y:222+20*c+47*u,type:1,variant:0,active:1});return n}(),[{x:857,y:100,type:4,variant:0,active:1}],[{x:870,y:272,type:12}],function(){var t,e=[];for(t=0;5>t;++t)s=t,e.push({x:749+66*s,y:227+24*s,type:2,variant:0,active:1});return e}(),[{x:623,y:279,type:3,variant:0,active:1},{x:520,y:341,type:10},{x:730,y:387,type:4,variant:0,active:1},{x:335,y:387,type:4,variant:0,active:1},{x:493,y:418,type:3,variant:0,active:1},{x:678,y:418,type:2,variant:0,active:1}])}},t.percent={sprite:{size:function(){var e,n,i,r=[];for(e=0,i=(n=t.pixel.sprite.size).length;i>e;++e)p=n[e],r.push({w:100*p.w/t.pixel.scene.w,h:100*p.h/t.pixel.scene.h});return r}(),points:function(){var e,n,i,r=[];for(e=0,i=(n=t.pixel.sprite.points).length;i>e;++e)p=n[e],r.push({x:100*p.x/t.pixel.scene.w,y:100*p.y/t.pixel.scene.h,type:p.type,variant:p.variant,active:p.active});return r}()}},t.rebuild=function(e){var n,i,r,a=[];for(n=0,r=(i=t.percent.sprite.points).length;r>n;++n)e=i[n],a.push(e.cls=["it-"+e.type+"-"+(e.variant||0)+"-"+(e.active||0)]);return a},t.game={state:0,over:function(){return this.setState(4),n(function(){var e;return e=parseInt(t.doctor.score.value/10),e>=6&&e--,t.doctor.rank=e},500)},setState:function(t){return this.state=t},tutorial:function(){return this.setState(3),t.audio.bkloop(0,!0),t.audio.bk.pause(!0)},pause:function(){return this.setState(1),t.audio.bk.pause()},start:function(){return this.setState(2),t.audio.bkloop.pause(!0),t.audio.bk()},reset:function(){return $("#wheel").css({display:"none"}),t.danger=!1,t.patient.reset(),t.doctor.reset(),t.supply.reset(),t.mouse.reset(),t.audio.reset(),t.dialog.reset(),t.rebuild(),t.madmax=0,t.dialog.toggle(null,!1),this.state=0},countdown:{handler:null,value:0,count:function(){var e=this;return this.value=this.value-1,this.value>0?(t.audio["count"+(1===this.value?2:1)](),n(function(){return e.count()},650)):(t.game.setState(2),t.audio.bkloop.pause(!0),t.audio.bk())},start:function(){return t.game.setState(5),this.value=5,this.count()}}},t.doctor={sprite:t.percent.sprite.points.filter(function(t){return 9===t.type})[0],handler:null,energy:1,faint:!1,demading:0,chance:5,hurting:0,draining:0,rank:0,drain:function(){var e;return e=this,e.energy-=.2,e.energy>=0||(e.energy=0),e.draining=1,t.doctor.energy<=1e-4?(t.doctor.faint=!0,t.doctor.demading=0):void 0},fail:function(){var e;return e=this,e.setMood(7),e.chance-=1,e.chance>=0||(e.chance=0),e.hurting=1,this.chance<=0&&t.game.over(),t.audio.die()},reset:function(){return this.rank=0,this.energy=1,this.faint=!1,this.chance=5,this.hurting=0,this.draining=0,this.handler&&n.cancel(this.handler),this.score.value=0,this.score.digit=[0,0,0,0],this.setMood(1)},score:{digit:[0,0,0,0],value:0},resetLater:function(){var e=this;return this.handler&&n.cancel(this.handler),this.handler=n(function(){return e.setMood(1),e.handler=null,t.rebuild()},1e3)},setMood:function(t){return this.sprite.variant=t,t>1?this.resetLater():void 0}},t.$watch("doctor.score.value",function(){var e,n,i,r=[];for(e=t.doctor.score,n=0;4>n;++n)i=n,r.push(e.digit[3-i]=parseInt(e.value/Math.pow(10,i))%Math.pow(10,i+1));return r}),t.supply={sprite:t.percent.sprite.points.filter(function(t){var e;return 5===(e=t.type)||6===e||7===e}),reset:function(){var t,e,n,i,r=[];for(t=0,n=(e=this.sprite).length;n>t;++t)i=e[t],r.push((i.active=0,i.countdown=-1,i));return r},active:function(t,e){var n,i,r;return null==e&&(e=!0),n=null==t?parseInt(Math.random()*this.sprite.length):t,e?this.sprite[n].active?void 0:(this.sprite[n].active=1,this.sprite[n].countdown=1):(this.sprite[n].active=0,r=(i=this.sprite[n]).countdown,delete i.countdown,r)}},t.patient={urgent:0,updateUrgent:function(){return this.urgent=t.percent.sprite.points.filter(function(t){return 1===t.type&&3===t.variant}).length},reset:function(){var e,n,i,r;for(e=t.percent.sprite.points.filter(function(t){return t.type>=1&&t.type<=4}),n=0,i=e.length;i>n;++n)r=e[n],r.variant=0,r.mad=0,r.life=1;return this.urgent=0},add:function(e,n,i){var r,a,o,s,u,c;return r=t.percent.sprite.points.filter(function(t){return t.type===e&&0===t.variant}),0!==r.length?(a=parseInt(3*Math.random()+1),1===e?(o=Math.random(),a=o<t.config.cur.prob.pat[1]?1:o<t.config.cur.prob.pat[2]?2:3,t.audio.born()):a=parseInt(2*Math.random()+1),e>1&&(2>=a||(a=2)),null!=n&&(a=n),s=null!=i?i:parseInt(Math.random()*r.length),u=r[s],u.variant=a,1===u.type&&3===u.variant&&this.urgent++,1===u.type&&(u.life=1),(2===(c=u.type)||3===c||4===c)&&(u.mad=0),t.rebuild()):void 0}},t.mode="easy",t.config={cur:{prob:{pat:[.05,.6,.95],sup:.01,stay:.1},decay:{life:.001,sup:.001,mad:.001}},mode:{trivial:[{prob:{pat:[0,.6,.95],sup:.01,stay:.1},decay:{life:.001,sup:.001,mad:.001}},{prob:{pat:[0,.6,.95],sup:.01,stay:.1},decay:{life:.001,sup:.001,mad:.001}},{prob:{pat:[0,.6,.95],sup:.01,stay:.1},decay:{life:.001,sup:.001,mad:.001}},{prob:{pat:[0,.6,.95],sup:.01,stay:.1},decay:{life:.001,sup:.001,mad:.001}}],easy:[{prob:{pat:[.02,.6,.95],sup:.01,stay:.1},decay:{life:.001,sup:.005,mad:.001}},{prob:{pat:[.04,.5,.82],sup:.02,stay:.2},decay:{life:.002,sup:.008,mad:.002}},{prob:{pat:[.08,.4,.7],sup:.04,stay:.4},decay:{life:.003,sup:.011,mad:.003}},{prob:{pat:[.12,.3,.6],sup:.1,stay:.5},decay:{life:.006,sup:.014,mad:.006}}],normal:[{prob:{pat:[.02,.45,.95],sup:.01,stay:.1},decay:{life:.002,sup:.005,mad:.001}},{prob:{pat:[.06,.4,.8],sup:.03,stay:.3},decay:{life:.003,sup:.015,mad:.003}},{prob:{pat:[.14,.3,.5],sup:.09,stay:.5},decay:{life:.005,sup:.02,mad:.005}},{prob:{pat:[.22,.1,.2],sup:.15,stay:.6},decay:{life:.006,sup:.025,mad:.007}}]}},t.mouse={x:0,y:0,target:null,reset:function(){return this.target=null},lock:function(){return this.isLocked=!0},unlock:function(){return this.isLocked=!1},timestamp:0,isPalOn:!1,down:function(e,n){var i,r,a,o,s,u,c,p,d,l,h,m,f,y;if(null==n&&(n=!1),(!touchflag||n)&&!g()){if(t.madmax||t.doctor.faint)return t.demad(e);if(!this.isLocked&&!this.isPalOn&&($("#finger-tap").css({display:"none"}),i=$("#wrapper").offset(),r=[e.clientX||e.pageX,e.clientY||e.pageY],a=r[0],o=r[1],a||o||(r=[e.touches[0].clientX,e.touches[0].clientY],a=r[0],o=r[1]),r=this.last||(this.last={}),r.x=a,r.y=o,r=[a-i.left,o-i.top],this.x=r[0],this.y=r[1],r=r,s=r[0],u=r[1],c=1024*s/$("#wrapper").width(),p=576*u/$("#wrapper").height(),d=t.hitmask.resolve(c,p))){if(1===d.type){if(0===d.variant)return;for(l=t.percent.sprite.points.filter(function(t){return 1===t.type}),h=0,m=0,f=l.length;f>m;++m)y=l[m],y.variant>h&&(h=y.variant);if(3===h&&d.variant<h)return void(this.target=null)}if(this.target=d,d&&1===d.type)return $("#wheel").css({display:"block",top:u+"px",left:s+"px"}),t.audio.blop(),t.rebuild(),this.timestamp=(new Date).getTime(),this.isPalOn=!0,e.preventDefault()}}},move:function(t){var e,n,i;return e=[t.clientX||t.pageX||t.touches[0].clientX,t.clientY||t.pageY||t.touches[0].clientY],n=e[0],i=e[1],e=this.last||(this.last={}),e.x=n,e.y=i,e},up:function(e,n){var i,r,a,o,s=this;return null==n&&(n=!1),touchflag&&!n||g()||this.isLocked||t.madmax||t.doctor.faint||(i=(new Date).getTime(),r=[e.clientX||e.pageX,e.clientY||e.pageY],a=r[0],o=r[1],a||o||(null!=e.touches&&e.touches.length?(r=[e.touches[0].clientX,e.touches[0].clientY],a=r[0],o=r[1]):null!=e.changedTouches&&e.changedTouches.length&&(r=[e.changedTouches[0].clientX,e.changedTouches[0].clientY],a=r[0],o=r[1])),a||o||(r=[this.last.x,this.last.y],a=r[0],o=r[1]),this.target&&1===this.target.type&&(Math.pow(a-this.last.x,2)+Math.pow(o-this.last.y,2)<18||i-this.timestamp<100))?void 0:setTimeout(function(){var e,n,i,r,u,c,p;return s.isPalOn=!1,$("#wheel").css({display:"none"}),e=$("#wrapper").offset(),n=[a-s.x-e.left,o-s.y-e.top],i=n[0],r=n[1],u=360*Math.acos(i/Math.sqrt(Math.pow(i,2)+Math.pow(r,2)))/(2*Math.PI),r>0&&(u=360-u),(u>=320||10>=u)&&(c=3),u>10&&61>=u&&(c=2),u>61&&112>u&&(c=1),s.target&&(1===s.target.type?(s.target.variant===c?(1===s.target.variant?(p=Math.random()<.5?2:4+parseInt(3*Math.random()),null!=s.forceMood&&(p=s.forceMood),t.doctor.setMood(p),t.audio.dindon(),2===p&&(t.doctor.score.value+=1)):(null==s.forceStay&&Math.random()<t.config.cur.prob.stay?(t.doctor.setMood(3),t.patient.add(parseInt(3*Math.random()+2))):s.forceStay?(t.doctor.setMood(3),t.patient.add(4,2,0)):t.doctor.setMood(2),t.audio.dindon(),t.doctor.score.value+=1),3===c&&(s.target.variant=0)):t.doctor.fail(),3===c&&t.patient.updateUrgent(),s.target.variant=0,t.rebuild()):s.target.type>=2&&s.target.type<=4&&s.target.variant?(s.target.mad>.8&&(s.target.mad=.8),(n=s.target).mad<=.8||(n.mad=.8),s.target.mad-=.2,(n=s.target).mad>=0||(n.mad=0),t.audio.click2()):s.target.type>=5&&s.target.type<=8&&s.target.active&&(t.doctor.energy+=.1,(n=t.doctor).energy<=1||(n.energy=1),t.doctor.setMood(2),t.rebuild(),s.target.active=0,s.target.countdown=1,t.audio.click2())),s.target=null},0)}},t.madmax=0,t.demad=function(e){var n,i,r,a,o,s;return $("#finger-tap").css({display:"none"}),n=100,i=t.percent.sprite.points.filter(function(t){return t.ismad}),i.length||(t.madmax=0),i.length?((r=i[0]).mad<=.8||(r.mad=.8),i[0].mad-=.1,(r=i[0]).mad>=0||(r.mad=0),i[0].mad<=0&&delete i[0].ismad,a=i.map(function(t){return 1-t.mad}).reduce(function(t,e){return t+e},0),o=i.length,n=100*a/o):t.doctor.faint&&(s=t.doctor,s.energy+=.1,s.energy<=1||(s.energy=1),t.doctor.energy>=.9999&&(t.doctor.faint=!1),n=100*t.doctor.energy),e.preventDefault(),t.audio.click2(),t.doctor.demading=n,!1},t.rebuild(),g=function(){return 2!==t.game.state&&3!==t.game.state||t.dialog.show===!0?!0:t.danger?!0:!1},t.madspeed=.002,t.$watch("madmax",function(t){return t?$("#wheel").css({display:"none"}):void 0}),t.hitmask={ready:!1,get:function(t,e){return!this.ready||null==t||null==e||isNaN(t)||isNaN(e)?[0,0,0,0]:this.ctx.getImageData(t,e,1,1).data},resolve:function(e,n){var i,r,a;return i=this.get(e,n),r=i[0],8===r&&(r=5),0===r?null:(a=1===r?4*i[1]+i[2]:i[2],t.percent.sprite.points.filter(function(t){return t.type===r})[a])},init:function(){var t,e=this;return t=this.canvas=document.createElement("canvas"),t.height=576,t.width=1024,this.ctx=this.canvas.getContext("2d"),this.img=new Image,this.img.src="mask.png",this.img.onload=function(){return e.ctx.drawImage(e.img,0,0,1024,576),e.ready=!0}}},t.hitmask.init(),t.dialog={tut:!0,show:!1,idx:0,next:function(){var t=this;return n(function(){return t.main(!0)},200)},type:"",h:{i:[],t:[]},reset:function(){var t,e,n,i,r=[];for(this.tut=!0,this.show=!1,this.idx=0,this.type="",t=0,n=(e=this.step).length;n>t;++t)i=e[t],i.fired=!1,i.reset&&r.push(i.reset());return r},skip:function(t){var i,r,a,o;for(null==t&&(t=!1),$("#finger-slide").css({display:"none"}),$("#finger-tap").css({display:"none"}),i=0,a=(r=this.h.i).length;a>i;++i)o=r[i],e.cancel(o);for(i=0,a=(r=this.h.t).length;a>i;++i)o=r[i],n.cancel(o);return t||this.clean(),this.idx===this.step.length-2?this.next():(this.type="",t?(this.idx=this.step.length-2,this.toggle(0,!0)):void 0)},interval:function(t,n){var i;return i=e(t,n),this.h.i.push(i),i},timeout:function(t,e){var i;return i=n(t,e),this.h.t.push(i),i},clean:function(){var e,n;return delete t.mouse.forceStay,delete t.mouse.forceMood,t.game.reset(),e=t.dialog,e.tut=!1,e.idx=this.step.length-1,t.mouse.unlock(),$("#score").removeClass("hint"),n=t.doctor,n.chance=5,n.hurting=0,n.faint=!1,n.energy=1,n.setMood(2),t.game.setState(2),t.game.countdown.start()},step:[{},{ready:!1,reset:function(){return this.ready=!1},check:function(){return this.ready||3!==t.game.state||(this.ready=!0),this.ready},fire:function(){return t.mouse.forceStay=!1,t.mouse.forceMood=1,t.mouse.lock(),t.dialog.timeout(function(){return t.patient.add(1,1,0)},1e3),t.dialog.timeout(function(){return t.patient.add(1,2,0)},2e3),t.dialog.timeout(function(){return t.patient.add(1,3,0)},3e3)}},{ready:!1,reset:function(){return this.ready=!1},check:function(){var e=this;return this.ready?!0:(t.percent.sprite.points.filter(function(t){return 1===t.type&&3===t.variant}).length>0&&t.dialog.timeout(function(){return e.ready=!0},1e3),!1)}},{check:function(){return!0}},{check:function(){return!0},fire:function(){return $("#finger-slide").css({display:"block",top:"33%",left:"22%"}),setTimeout(function(){return $("#finger-slide").css({display:"none"}),t.mouse.unlock()},3e3)}},{reset:function(){return this.handler=null,this},check:function(){var e,n=this;return t.doctor.chance<5&&($("#oops").css({display:"block"}),t.doctor.chance=5,t.patient.reset(),t.patient.add(1,1,0),t.patient.add(1,2,0),t.patient.add(1,3,0),setTimeout(function(){return $("#oops").css({display:"none"})},1e3)),e=0===t.percent.sprite.points.filter(function(t){return 1===t.type&&0!==t.variant}).length,e&&5===t.doctor.chance&&(t.dialog.type="mini",this.handler=t.dialog.timeout(function(){return t.doctor.hurting=1,n.handler=null},500)),e},fire:function(){var e;return e=t.doctor,e.chance=5,e.hurting=0,this.handler?n.cancel(this.handler):void 0}},{check:function(){return $("#score").addClass("hint"),!0},fire:function(){return $("#score").removeClass("hint")}},{mood:0,reset:function(){return this.handler=null,this.mood=0,this},check:function(){var e=this;return null==this.handler&&(this.handler=t.dialog.interval(function(){return t.doctor.setMood(e.mood+4),t.rebuild(),e.mood=(e.mood+1)%3},500)),!0},fire:function(){return t.doctor.setMood(1),t.rebuild(),e.cancel(this.handler),t.mouse.forceStay=!0,t.patient.add(1,2,0)}},{mood:3,ready:!1,handler:null,moodHandler:null,reset:function(){return this.handler=null,this.moodHandler=null,this.ready=!1,this.mood=3,this},check:function(){var e,n,i=this;return e=t.percent.sprite.points.filter(function(t){return 4===t.type&&t.variant>0}).length>0,n=t.percent.sprite.points.filter(function(t){return 1===t.type&&2===t.variant}).length>0,e&&null==this.handler&&(this.handler=t.dialog.timeout(function(){return i.ready=!0},1e3)),e||n||t.patient.add(1,2,parseInt(1+4*Math.random())),this.ready&&!this.moodHandler&&(this.moodHandler=t.dialog.interval(function(){return t.doctor.setMood(i.mood),t.rebuild(),i.mood=4-i.mood},500)),this.ready},fire:function(){return e.cancel(this.moodHandler),$("#finger-tap").css({display:"block",top:"22%",left:"68%"}),t.madspeed=.015}},{ready:!1,handler:null,reset:function(){return this.handler=null,this.ready=!1,this},check:function(){var e=this;return.015!==t.madspeed||"none"!==$("#finger-tap").css("display")||this.handler||(this.handler=t.dialog.timeout(function(){return e.ready=!0},2e3)),this.ready},fire:function(){return t.madspeed=.04,t.mouse.lock()}},{ready:!1,reset:function(){return this.ready=!1},check:function(){var e=this;return t.dialog.timeout(function(){return e.ready=!0},1700),this.ready}},{launched:0,supply:0,ready:!1,reset:function(){return this.launched=0,this.supply=0,this.ready=!1,this.handler=null,this},check:function(){var e=this;return t.madmax>=1&&0===this.launched&&(this.launched=1,$("#finger-tap").css({display:"block",top:"30%",left:"30%"}),t.madspeed=.002),.002===t.madspeed&&t.madmax<1&&1===this.launched&&(this.launched=2,t.percent.sprite.points.filter(function(t){return 4===t.type})[0].mad=0,t.dialog.timeout(function(){return e.handler=t.dialog.interval(function(){return t.supply.active(e.supply,!1),e.supply=(e.supply+1)%3,t.supply.active(e.supply)},500),$("#arrow").css({display:"block",top:"25%",left:"35%"}),e.ready=!0},1e3)),this.ready},fire:function(){return e.cancel(this.handler),t.supply.active(0,!1),t.supply.active(1,!0),t.supply.active(2,!1),$("#arrow").css({display:"none"}),$("#finger-tap").css({display:"block",top:"7%",left:"20%"}),t.dialog.timeout(function(){return t.mouse.unlock()},1e3)}},{ready:!1,handler:!1,reset:function(){return this.handler=null,this.ready=!1,this},check:function(){var e=this;return this.handler||(this.handler=t.dialog.timeout(function(){return e.ready=!0,t.supply.active(1,!1),t.doctor.setMood(7),t.rebuild(),t.doctor.energy-=.1,$("#arrow").css({display:"block",top:"10%",left:"31%"})},3e3)),this.ready},fire:function(){}},{check:function(){return!0},fire:function(){return $("#arrow").css({display:"none"}),t.doctor.energy=0,t.doctor.faint=!0,t.doctor.demading=0,$("#finger-tap").css({display:"block",top:"20%",left:"30%"})}},{ready:!1,reset:function(){return this.ready=!1,this.handler=null,this},check:function(){var e=this;return null==this.handler&&t.doctor.energy>=.999&&t.doctor.faint===!1&&(this.handler=t.dialog.timeout(function(){return t.dialog.type="",e.ready=!0},1e3)),this.ready}},{check:function(){return!0},fire:function(){return t.dialog.clean()}},{check:function(){return!1}}],main:function(t){return null==t&&(t=!1),t&&this.step[this.idx]&&this.step[this.idx].fire&&!this.step[this.idx].fired&&(this.step[this.idx].fire(),this.step[this.idx].fired=!0),!this.show||t?this.step[this.idx+1]&&this.step[this.idx+1].check()?this.toggle(this.idx+1,!0):this.toggle(0,!1):void 0},toggle:function(e,n){var i=this;return e&&(this.idx=e),setTimeout(function(){return i.show=null==n?!i.show:n,i.show?($("#dialog").fadeIn(),t.audio.menu()):$("#dialog").fadeOut()},0)}},t.scream=gajus.Scream({width:{portrait:320,landscape:480}}),t.dimension={update:function(){var e,n,i,r,a,o,s,u,c,p,g;return e=[$(window).width(),$(window).height()],n=e[0],i=e[1],e=[1024,576],r=e[0],a=e[1],e=1024>n?[n,576*n/1024]:[1024,576],o=e[0],s=e[1],e=576>i?[1024*i/576,i]:[1024,576],u=e[0],c=e[1],e=s>i?[u,c]:[o,s],p=e[0],g=e[1],$("#frame").css({width:p+"px",height:g+"px"}),$("#container").css({width:p+"px"}),$("body").css({overflow:"hidden"}),i>n?(this.portrait=!0,2===t.game.state&&t.game.pause()):this.portrait=!1,this.portrait?($("#frame").css({padding:0,position:"absolute",top:0,left:0,height:"100%",width:"100%"}),$("#wrapper").css({width:"100%",height:"100%",top:"0",left:"0"})):110>=i-g?($("#frame").css({padding:"0",position:"fixed",top:(i-g)/2+"px",left:(n-p)/2+"px"}),$("#wrapper").css({width:p+"px",height:g+"px",top:"0",left:"0"}),$("#head").css({display:"none"}),$("#foot").css({display:"none"})):($("#frame").css({padding:"10px",position:"relative",top:"auto",left:"auto",height:g+10+"px"}),$("#wrapper").css({width:p-20+"px",height:g-10+"px",top:"10px",left:"10px"}),$("#head").css({display:"block"}),$("#foot").css({display:"block"}))},portrait:!1,rotate:function(){}},t.dimension.update(),window.onresize=function(){return t.$apply(function(){return t.dimension.update()})},document.ontouchmove=function(e){return t.isPad||t.ismin?e.preventDefault():void 0},t.audio={s:{},buf:{},names:["click","count1","count2","blop","die","menu","dindon","born","click2","bkloop","bk"],reset:function(){var t,e,n,i,r;for(t=0,n=(e=this.names).length;n>t;++t)i=e[t],this[i].pause(!0);return this.bkt=0,this.bk?(delete this.bk.pausetime,r=(e=this.bk).starttime,delete e.starttime,r):void 0},n:{},bkt:0,isMute:!1,toggleMute:function(){return this.isMute=!this.isMute,this.gain.gain.value=this.isMute?0:1},player:function(t){var e,n=this;return e=function(i,r){var a;return null==r&&(r=!1),n.buf[t]?(n.n[t]&&n.n[t].disconnect(),n.n[t]=a=n.context.createBufferSource(),a.buffer=n.buf[t],a.connect(n.gain),e.pausetime&&(i=e.pausetime-e.starttime,delete e.pausetime),e.starttime=parseInt((new Date).getTime()/1e3)-(null!=i?i:0),r&&(a.loop=!0),null!=i?a.start(0,i):a.start(0),"bk"===t?n.bkt=e.starttime:void 0):void 0},e.pause=function(i){var r;if(null==i&&(i=!1),n.n[t])try{n.n[t].stop(0)}catch(a){r=a}return i?void 0:e.pausetime=parseInt((new Date).getTime()/1e3)},e},load:function(e,n){var i,r=this;return i=new XMLHttpRequest,i.open("GET",n,!0),i.responseType="arraybuffer",i.onload=function(){return r.context.decodeAudioData(i.response,function(n){return r.buf[e]=n,setTimeout(function(){return t.$apply(function(){return t.progress.current+=1})},500)},function(){return console.log("fail")})},i.send()},init:function(){function e(){}function n(){}function i(){}var r,a,o,s,u,c;if(r=window.AudioContext||window.webkitAudioContext,!r){for(a=0,s=(o=this.names).length;s>a;++a)u=o[a],this[u]=e,this[u].pause=n,this.s[u]={pause:i};return void(t.loading=!1)}for(this.context=new r,this.gain=this.context.createGain(),this.gain.connect(this.context.destination),a=0,s=(o=this.names).length;s>a;++a)u=o[a],c=this.s[u]=new Audio,c.src="snd/"+u+".mp3",this[u]=this.player(u),this.load(u,"snd/"+u+".mp3");return t.progress.total+=this.names.length}},t.progress={value:100,total:0,current:0,update:function(){return this.value=parseInt(100*this.current/this.total),this.value>=100?t.loading=!1:void 0}},t.$watch("progress.total",function(){return t.progress.update()}),t.$watch("progress.current",function(){return t.progress.update()}),t.debug={d1:0,d2:0},d={spawn:function(){var e,n,i;if(!(t.dialog.tut||1!==(e=t.game.state)&&2!==e&&4!==e||(n=(new Date).getTime()/1e3-t.audio.bkt,t.config.cur=60>=n?t.config.mode[t.mode][0]:98>=n?t.config.mode[t.mode][1]:120>=n?t.config.mode[t.mode][2]:t.config.mode[t.mode][3],t.debug.d2=n,t.debug.d3=t.config.cur.prob.pat[2],n>=98&&101>=n&&2===t.game.state?t.danger=!0:120>=n&&(t.danger=!1),g())))return i=Math.random(),i<t.config.cur.prob.pat[0]&&t.patient.add(1),Math.random()<t.config.cur.prob.sup&&t.supply.active(),0===t.percent.sprite.points.filter(function(t){return 1===t.type&&0!==t.variant}).length&&Math.random()>.8&&t.patient.add(1),t.madspeed=t.config.cur.decay.mad},drain:function(e){var n,i,r,a,o,s,u=[];if(!g()){for(t.doctor.hurting&&(t.doctor.hurting-=.2,(n=t.doctor).hurting>=0||(n.hurting=0)),t.doctor.draining&&(t.doctor.draining-=.2,(n=t.doctor).draining>=0||(n.draining=0)),i=t.percent.sprite.points.filter(function(t){return 1===t.type&&t.variant>0}),r=!1,a=0,o=i.length;o>a;++a)e=i[a],e.life-=t.config.cur.decay.life*e.variant,e.life<=0&&(e.life=0,t.doctor.fail(),e.variant=0,r=!0);for(r&&t.patient.updateUrgent(),i=t.percent.sprite.points.filter(function(t){var e;return(2===(e=t.type)||3===e||4===e)&&t.variant>0}),s=0,a=0,o=i.length;o>a;++a)e=i[a],null==e.mad&&(e.mad=0),e.mad+=t.madspeed,e.mad>=.8&&(e.mad=1,e.ismad=!0,s=1);if(s&&!t.madmax&&(t.madmax=parseInt(2*Math.random()+1),t.doctor.demading=0),!t.doctor.faint){for(i=t.percent.sprite.points.filter(function(t){var e;return(5===(e=t.type)||6===e||7===e||8===e)&&t.active}),a=0,o=i.length;o>a;++a)e=i[a],(null==e.countdown||e.countdown<=0)&&(e.countdown=1),e.countdown-=t.config.cur.decay.sup,e.countdown<=0&&(e.countdown=1,e.active=0,u.push(t.doctor.drain()));return u}}},tweak:function(){var e,n,i,r,a;e=[$(window).width(),$(window).height()],n=e[0],i=e[1],3===t.game.state&&t.dialog.main(),r=/iPad/.exec(navigator.platform)?!0:!1;try{a=t.scream.isMinimalView(),t.debug.d1=a}catch(o){}return!t.ismin||a||r||(document.body.scrollTop=0,$("#minimal-fix").css({display:"block"})),(r||a)&&$("#minimal-fix").css({display:"none"}),t.ismin=a,t.isPad=r,(n!==this.w||i!==this.h)&&t.dimension.update(),e={w:this.w,h:this.h},e.w=n,e.h=i,e}},e(function(){return d.spawn(),d.drain(),d.tweak()},100),t.loading=!0,t.audio.init(),l=document.body,l.ontouchstart=window.touch.down,l.ontouchmove=window.touch.move,l.ontouchend=window.touch.up,t.images={list:["img/tutorial/0.png","img/gauge/1s.png","img/fb.png","img/gauge/7s.png","img/gauge/4s.png","img/gauge/5s.png","img/gauge/2s.png","img/gauge/0s.png","img/gauge/3s.png","img/twt.png","img/gauge/6s.png","img/gauge/9s.png","img/gauge/8s.png","img/about.png","img/game/pause-1.png","img/game/pause-0.png","img/gauge/energy-0.png","img/game/start-1.png","img/game/skip-1.png","img/game/start-0.png","img/game/skip-0.png","img/pause/fb-1.png","img/gauge/energy-5.png","img/game/cont-1.png","img/arrow.png","img/mute/o1.png","img/github.png","img/game/landing-1.png","img/gauge/counting.png","img/game/cont-0.png","img/mute/o0.png","img/game/landing-0.png","img/tutorial/finger1.png","img/it-1-0-0.png","img/it-1-0-1.png","img/pause/reporter-1.png","img/favicon.png","img/mad/click-2.png","img/mad/click-1.png","img/pause/fb-0.png","img/load/shadow.png","img/pause/tutorial-1.png","img/gauge/chance-o.png","img/mute/x1.png","img/cover/over-share-1.png","img/gauge/chance-x.png","img/pause/reporter-0.png","img/mute/x0.png","img/cover/over-share-0.png","img/pause/link-1.png","img/cover/over-report-1.png","img/pause/tutorial-0.png","img/cover/over-report-0.png","img/tutorial/finger2.png","img/countdown/2.png","img/pause/tm.png","img/pause/restart-0.png","img/pause/replay-0.png","img/pause/restart-1.png","img/pause/replay-1.png","img/pause/link-0.png","img/countdown/1.png","img/countdown/3.png","img/cover/landing-skip-1.png","img/cover/landing-reporter-1.png","img/tutorial/6.png","img/it-1-1-0.png","img/it-1-3-0.png","img/it-1-2-0.png","img/it-9-0-0.png","img/it-2-0-0.png","img/it-2-0-1.png","img/it-3-0-1.png","img/it-3-0-0.png","img/tutorial/11.png","img/tutorial/10.png","img/tutorial/13.png","img/it-7-0-1.png","img/cover/landing-start-1.png","img/it-1-1-1.png","img/it-9-1-0.png","img/it-11-0-0.png","img/it-1-2-1.png","img/it-1-3-1.png","img/tutorial/doctor.png","img/tutorial/12.png","img/countdown/go.png","img/wheel.png","img/tutorial/9.png","img/it-6-0-1.png","img/it-9-7-0.png","img/load/doctor.png","img/it-9-2-0.png","img/it-9-3-0.png","img/it-9-6-0.png","img/tutorial/8.png","img/tutorial/7.png","img/it-9-4-0.png","img/it-9-5-0.png","img/it-10-0-0.png","img/it-2-1-0.png","img/it-2-2-0.png","img/it-3-2-0.png","img/it-3-1-0.png","img/tutorial/1.png","img/tutorial/5.png","img/danger.png","img/it-2-2-1.png","img/it-2-1-1.png","img/it-3-1-1.png","img/it-3-2-1.png","img/load/text.png","img/tutorial/14.png","img/tutorial/2.png","img/tutorial/4.png","img/mad/hungry2.png","img/mad/hungry1.png","img/mad/hysteria2.png","img/mad/hysteria1.png","img/mad/gangster2.png","img/mad/gangster1.png","img/it-4-0-0.png","img/it-4-0-1.png","img/tutorial/3.png","img/logo.png","img/lv/8.png","img/it-12-0-0.png","img/it-5-0-0.png","img/cover/it-5-0-0.png","img/cover/landing-reporter-0.png","img/it-4-2-0.png","img/lv/0.png","img/it-4-1-0.png","img/cover/landing-skip-0.png","img/cover/landing-start-0.png","img/tutorial/15.png","img/it-5-0-1.png","img/urgency.png","img/cover/it-5-0-1.png","img/it-6-0-0.png","img/cover/landingscene.png","img/cover/exitscene.png","img/it-4-2-1.png","img/it-4-1-1.png","img/it-7-0-0.png","img/scenario.png","img/tutorial/oops.png"],load:function(){function e(){return t.$apply(function(){return t.progress.current+=1})}var n,i,r,a,o,s;for(n=document.getElementById("img-preloader"),i=0,a=(r=this.list).length;a>i;++i)o=r[i],s=new Image,s.src=o,s.onload=e,n.appendChild(s);return t.progress.total+=this.list.length}},t.images.load(),t.blah=function(){return t.debug.d2=(new Date).getTime()},t.sce=r,t.image={url:{},init:function(){var t=this;return i({url:"imgs.json",method:"GET"}).success(function(e){var n,i,a,o,s,u,c,p,g,d;n=(new Date).getTime();for(i in e){for(a=e[i],o=atob(a),s=new Uint8Array(o.length),u=0,c=o.length;c>u;++u)p=u,s[p]=o.charCodeAt(p);g=new Blob([s],{type:"image/png"}),t.url[i]=r.trustAsResourceUrl(URL.createObjectURL(g))}return d=(new Date).getTime(),console.log("image unpack and blob time: "+(d-n)),t.update()})},update:function(){var t,e,n,i,r,a,o=[];for(t=$("img"),e=t.length,n=0;e>n;++n)i=n,r=t[i].src,a=this.url[r.replace(/^.+\/img\//,"img/")],null!=a&&o.push(t[i].src=a);return o}},t.image.init()})),window.ctrl={_s:null,scope:function(){var t;return(t=this._s)?t:this._s=angular.element("body").scope()},wrap:function(t,e){if(t||!touchflag)return this.scope().$apply(function(){return e()})},next:function(t){var e=this;return null==t&&(t=!1),this.wrap(t,function(){return e.scope().dialog.next(),e.scope().audio.click()})},skip:function(t,e,n){var i=this;return null==t&&(t=!1),null==n&&(n=!0),this.wrap(t,function(){return i.scope().dialog.skip(n),i.scope().audio.click(),e.preventDefault()})},pause:function(t,e){var n=this;return null==t&&(t=!1),this.wrap(t,function(){return n.scope().game.pause(),n.scope().audio.click(),e.preventDefault()})},mute:function(t,e){var n=this;return null==t&&(t=!1),this.wrap(t,function(){return n.scope().audio.toggleMute(),e.preventDefault(),e.cancelBubble=!0})},replay:function(t){var e=this;return null==t&&(t=!1),this.wrap(t,function(){return e.scope().game.reset(),e.scope().audio.click()})},tutorial:function(t){var e=this;return null==t&&(t=!1),this.wrap(t,function(){return e.scope().game.tutorial(),e.scope().audio.click()})},cont:function(t){var e=this;return null==t&&(t=!1),this.wrap(t,function(){return e.scope().game.setState(2),e.scope().audio.click(),e.scope().audio.bk()})}},touchflag=!1,window.touch=touch={down:function(t){return touchflag=!0,angular.element("#wrapper").scope().mouse.down(t,!0)},up:function(t){return touchflag=!0,angular.element("#wrapper").scope().mouse.up(t,!0)},move:function(t){return angular.element("#wrapper").scope().mouse.move(t,!0)}};