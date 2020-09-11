

function cleanCache(param) {
	document.cookie = "abc=" + new Date();
    document.cookie = "desde=" + param;
    
}



$(window).on("onunload", function() { 
    cleanCache("onunload");
})



$(window).on("beforeunload", function() { 
    cleanCache("beforeunload");
})



console.info(document.cookie);

