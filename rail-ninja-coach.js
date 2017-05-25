$(document).ready(function() {

		
	$(".select-seat.btn-yellow").on('click',function() {
		($(this).closest(".train-wrapper").find(".coach-classes-wrapper")).show(); /*show window*/
		($(this).closest(".train-wrapper").find(".select-seat.btn-yellow")).hide(); /*hide button*/
		($(this).closest(".train-wrapper")).css("border", "1px solid #acacad"); /*border for window show*/
	});

	$("#block-userblock").on('click',function() {
		$("#block-userblock>.block__inner").toggle(); /*shesterenka*/
		$("#block-userblock::after").toggle();
	});
	$(".close").on('click',function() {
		($(this).closest(".train-wrapper").find(".coach-classes-wrapper")).hide(); /*hide window*/
		($(this).closest(".train-wrapper").find(".select-seat.btn-yellow")).show(); /*show button*/
		($(this).closest(".train-wrapper")).css("border", "none"); /*border for window hide*/
	});
	


}); 