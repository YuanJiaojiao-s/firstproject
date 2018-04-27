
$(function(){
		$("#first-tab").addClass('tab-select-a-btnHover');
	});
	
	function navigate_tabs(container, tab){
		$(".tab-box2").css('display' , 'none');
		$(".tab-box3").css('display' , 'none');
		$(".tab-box1").css('display' , 'none');
		
		$("#first-tab").removeClass('tab-select-a-btnHover');
		$("#second-tab").removeClass('tab-select-a-btnHover');
		$("#third-tab").removeClass('tab-select-a-btnHover');
		
		$("#"+tab).addClass('tab-select-a-btnHover');
		$("."+container).show();
	}