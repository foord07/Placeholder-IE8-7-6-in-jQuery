/* usage
<div class="div">
  <input type="text" id="textboxId"/>
	<button class="search-icon">Search</button>
</div>
$('#textboxId').searchBox();
*/
(function($){
  	$.fn.searchBox = function(options){
			var defaults = {
				iconClass : '.search-icon,.btn-type-ipad',
				defaultText : 'Search',
				searchCallback : true
			};
			var opts = $.extend(defaults, options);
			return this.each(function(){
				var _this = $(this);
				_this.val(opts.defaultText);
				bindEvents( _this, opts );
			});
		}
		
		var bindEvents = function(o, opt){
			i = o.parent().find(opt.iconClass);
			o.bind({
				'focus': function(e){
					if(o.val() == opt.defaultText){
						o.val('');
					}
				},
				'blur' : function(e){
					if(o.val().length ==0){
						o.val(opt.defaultText);	
					}
				}
			});
			i.bind({
				'click' : function(e){
					alert(o.val());
				}
			});
		}
})(jQuery);
