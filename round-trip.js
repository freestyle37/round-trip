$(document).ready(function() {


		
	$(".block-plugin-id--footer-icons .block__content>.tel").on('click',function() {
		$(".pr-footer__footer .footer-tel").slideDown();
	});
	$(".pr-footer__footer .footer-tel .block__content .footer-arrow").on('click',function() {
		$(".pr-footer__footer .footer-tel").hide("slow");
	});

	$(".block-plugin-id--footer-icons .block__content>.mail").on('click',function() {
		$(".pr-footer__footer .footerlanguage").slideDown();
	});

}); 
