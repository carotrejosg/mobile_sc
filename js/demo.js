var addEvent = function addEvent(element, eventName, func) {
	if (element.addEventListener) {
    	return element.addEventListener(eventName, func, false);
    } else if (element.attachEvent) {
        return element.attachEvent("on" + eventName, func);
    }
};

addEvent(document.getElementById('open-left'), 'click', function(){
	var header=document.getElementById('slogan');
    if(document.getElementsByTagName('body')[0].className==""){
		snapper.open('left');
    header.style.display = 'block';
	}
	else{
		snapper.close();
		document.getElementsByTagName('body')[0].className="";
        header.style.display = 'none';	
    }
});



function showHeader(slogan) {
   // var header=document.getElementById('slogan');
   // if(header.style.display == 'block') {
   //    header.style.display = 'none';
   // } else {
   //    header.style.display = 'block';
   // }
}




/* Prevent Safari opening links when viewing as a Mobile App */
(function (a, b, c) {
    if(c in b && b[c]) {
        var d, e = a.location,
            f = /^(a|html)$/i;
        a.addEventListener("click", function (a) {
            d = a.target;
            while(!f.test(d.nodeName)) d = d.parentNode;
            "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
        }, !1)
    }
})(document, window.navigator, "standalone");