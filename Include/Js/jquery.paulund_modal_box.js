/**
 * JQuery Plugin for a modal box
 * Will create a simple modal box with all HTML and styling
 * 
 * Author: Paul Underwood
 * URL: http://www.paulund.co.uk
 * 
 * Available for free download from http://www.paulund.co.uk
 */

(function($){
	// Defining our jQuery plugin

	$.fn.paulund_modal_box = function(prop){

		// Default parameters

		var options = $.extend({
			height : "80",
			width : "250",
			title:"비밀번호 확인",
			description: "비밀번호를 입력하세요.",
			top: "45%",
			left: "45%"
		},prop);
				
		//Click event on element
		return this.click(function(e){
			var x;
			var y;
			if (e.pageX || e.pageY) { 
			  x = e.pageX;
			  y = e.pageY;
			}
			else { 
			  x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
			  y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
			} 

			$('.paulund_block_page').fadeOut().remove();	
			add_block_page();
			add_popup_box();
			add_styles(x, y);
			
			$('.paulund_modal_box').fadeIn();
		});
		
		/**
		 * Add styles to the html markup
		 */
		 function add_styles(x, y){			
			$('.paulund_modal_box').css({ 
				'position':'absolute', 
				//'left':options.left,
				//'top':options.top,
				'left':x - 240,
				'top':y,
				'display':'none',
				'height': options.height + 'px',
				'width': options.width + 'px',
				'border':'1px solid #fff',
				'box-shadow': '0px 2px 7px #292929',
				'-moz-box-shadow': '0px 2px 7px #292929',
				'-webkit-box-shadow': '0px 2px 7px #292929',
				'border-radius':'10px',
				'-moz-border-radius':'10px',
				'-webkit-border-radius':'10px',
				'background': '#f2f2f2', 
				'z-index':'50'
			});
			$('.paulund_modal_close').css({
				'position':'relative',
				'top':'-25px',
				'left':'20px',
				'float':'right',
				'display':'block',
				'height':'50px',
				'width':'50px',
				'background': 'url(images/close.png) no-repeat'
			});
			//$('.paulund_block_page').css({
				//'position':'absolute',
				////'top':'0',
				//'top':document.body.scrollTop,
				//'left':'0',
				//'background-color':'rgba(0,0,0,0.6)', 
				//'height':'100%',
				//'width':'100%',
				//'z-index':'10'
			//});
			$('.paulund_inner_modal_box').css({
				'background-color':'#fff',
				'height':(options.height - 50) + 'px',
				'width':(options.width - 50) + 'px',
				'padding':'10px',
				'margin':'15px',
				'border-radius':'10px',
				'-moz-border-radius':'10px',
				'-webkit-border-radius':'10px'
			});
		}
		
		 /**
		  * Create the block page div
		  */
		 function add_block_page(){
			var block_page = $('<div class="paulund_block_page"></div>');
						
			$(block_page).appendTo('body');
		}
		 	
		 /**
		  * Creates the modal box
		  */
		 function add_popup_box(){
			 var pop_up = $('<div class="paulund_modal_box"><span class="paulund_modal_close" style="cursor:pointer;"></span><div class="paulund_inner_modal_box"><table width="200px" height="30px" style="position:absolute;"><tr><td style="font-weight:bold;">비밀번호&nbsp;<input type="password" name="passwd" id="passwd" size="10" maxlength="20"></td><td><img src="/images/btn_confirm.gif" onclick="pwConfirm();" valign="absmiddle" style="cursor:pointer;"></td></tr></table></div></div>');
			 $(pop_up).appendTo('.paulund_block_page');
			 			 
			 $('.paulund_modal_close').click(function(){
				$(this).parent().fadeOut().remove();
				$('.paulund_block_page').fadeOut().remove();				 
			 });
		}

		return this;
	};
	
})(jQuery);