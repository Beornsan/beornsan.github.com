
$(function(){
	
	Portfolio_OK.enhanceTabs();
	Portfolio_OK.hideTabsContents();
	Portfolio_OK.showTabContent();
  Portfolio_OK.showPreviewBtn();
  Portfolio_OK.getWindowLoadTime();
  $('a.lightbox').lightBox();
  
});


var Portfolio_OK = {

  enhanceTabs : function() { // 	
    $(".b-container").addClass("enhanced");
		$(".b-container").find(".tab-header:eq(1)").addClass("active");
	},
	
	hideTabsContents : function() {
	
		$(".b-container").find(".tab-content").hide();
		$(".b-container").find(".tab-content:eq(1)").show();
		
	},
  
	showTabContent : function() {
		
		$(".b-container").find(".tab-header").click(function(){
		
			if (!($(this).hasClass("active"))) {
				$(this).siblings(".tab-header").removeClass("active");
				$(this).siblings(".tab-content").hide();
				$(this).addClass("active");
				$(this).next(".tab-content").fadeIn();	
			}
		
		});
	},

  showPreviewBtn : function() {
  
		$(".preview-cue").hide();    
    
    $(".portfolio-item").hover(  
      function() {
        $(this).find(".preview-cue").show();
      },
      function() {
        $(this).find(".preview-cue").hide();
      }
    );
  },

    getWindowLoadTime: function () {
        var time = "";
        var label = "";
        var windowLoadEnd = new Date();
        var windowLoadTime = windowLoadEnd.getTime() - windowLoadStart.getTime();

        if (windowLoadTime < 2000) label = "Very Fast";
        else if (windowLoadTime < 5000) label = "Fast";
        else if (windowLoadTime < 10000) label = "Medium";
        else if (windowLoadTime < 30000) label = "Slow";
        else time = "Very Slow";
        var path = document.location.pathname;
        if (document.location.search) path += document.location.search;

        time = Math.round(windowLoadTime / 1000);
        try {
            _gaq.push(["_trackEvent", "Page Load", label + " Page Load", path, time]);
        } catch (err) { }
    }  


}