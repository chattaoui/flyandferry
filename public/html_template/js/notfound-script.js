// reveal your real identity!
navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

// print your dirty secrets on the box
$('.box .version').html(navigator.sayswho);


// high end monitor software
var text = ['404', 'Not Found'];
var counter = 0;
var elem = $('.monitor');

function scanning() {
	elem.html('Not Found');
	var inst = setInterval(change, 1000);
}

function change() {
  elem.html(text[counter]);
	elem.toggleClass('text');
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}

// high end conveyor belt functionality
var box = '.box';
var tl = gsap.timeline();

tl.to(box, { duration: 4, right: '0', ease: "none" });

tl.call(function() {
  $(box).addClass('scanned');
  $('.scan-window').addClass('scanning');
  scanning();
}, null, null, 2.5);