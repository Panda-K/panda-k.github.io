/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//-----libs-begin-----
loadLib("libs/laya.core.js")
loadLib("libs/laya.spine.js")
loadLib("libs/laya.ani.js")
loadLib("libs/laya.html.js")
loadLib("libs/laya.particle.js")
loadLib("libs/laya.ui.js")
loadLib("libs/spine-core-4.0.js")
//-----libs-end-------

!function(f,b,e,v,n,t,s) {
    if(f.fbq) return;
    n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)
    };
    if(!f._fbq) f._fbq=n;
    n.push=n;
    n.loaded=!0;
    n.version='2.0';
    n.queue=[];
    t=b.createElement(e);
    t.async=!0;
    t.src=v;
    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s);
  }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
  
  let pixelID = getPixelID() || '0';
  fbq('init', pixelID);
  fbq('track', 'PageView');

loadLib("js/bundle.js");
