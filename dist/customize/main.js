/*jquery.meanmenu.js*/
(function($){"use strict";$.fn.meanmenu=function(options){var defaults={meanMenuTarget:jQuery(this),meanMenuContainer:'.mobile-menu-area .container',meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanScreenWidth:"991",meanNavPush:"",meanShowChildren:true,meanExpandableChildren:true,meanExpand:"+",meanContract:"-",meanRemoveAttrs:false,onePage:false,meanDisplay:"block",removeElements:""};options=$.extend(defaults,options);var currentWidth=window.innerWidth||document.documentElement.clientWidth;return this.each(function(){var meanMenu=options.meanMenuTarget;var meanContainer=options.meanMenuContainer;var meanMenuClose=options.meanMenuClose;var meanMenuCloseSize=options.meanMenuCloseSize;var meanMenuOpen=options.meanMenuOpen;var meanRevealPosition=options.meanRevealPosition;var meanRevealPositionDistance=options.meanRevealPositionDistance;var meanRevealColour=options.meanRevealColour;var meanScreenWidth=options.meanScreenWidth;var meanNavPush=options.meanNavPush;var meanRevealClass=".meanmenu-reveal";var meanShowChildren=options.meanShowChildren;var meanExpandableChildren=options.meanExpandableChildren;var meanExpand=options.meanExpand;var meanContract=options.meanContract;var meanRemoveAttrs=options.meanRemoveAttrs;var onePage=options.onePage;var meanDisplay=options.meanDisplay;var removeElements=options.removeElements;var isMobile=false;if((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/iPad/i))||(navigator.userAgent.match(/Android/i))||(navigator.userAgent.match(/Blackberry/i))||(navigator.userAgent.match(/Windows Phone/i))){isMobile=true;}if((navigator.userAgent.match(/MSIE 8/i))||(navigator.userAgent.match(/MSIE 7/i))){jQuery('html').css("overflow-y","scroll");}var meanRevealPos="";var meanCentered=function(){if(meanRevealPosition==="center"){var newWidth=window.innerWidth||document.documentElement.clientWidth;var meanCenter=((newWidth/2)-22)+"px";meanRevealPos="left:"+meanCenter+";right:auto;";if(!isMobile){jQuery('.meanmenu-reveal').css("left",meanCenter);}else{jQuery('.meanmenu-reveal').animate({left:meanCenter});}}};var menuOn=false;var meanMenuExist=false;if(meanRevealPosition==="right"){meanRevealPos="right:"+meanRevealPositionDistance+";left:auto;";}if(meanRevealPosition==="left"){meanRevealPos="left:"+meanRevealPositionDistance+";right:auto;";}meanCentered();var $navreveal="";var meanInner=function(){if(jQuery($navreveal).is(".meanmenu-reveal.meanclose")){$navreveal.html(meanMenuClose);}else{$navreveal.html(meanMenuOpen);}};var meanOriginal=function(){jQuery('.mean-bar,.mean-push').remove();jQuery(meanContainer).removeClass("mean-container");jQuery(meanMenu).css('display',meanDisplay);menuOn=false;meanMenuExist=false;jQuery(removeElements).removeClass('mean-remove');};var showMeanMenu=function(){var meanStyles="background:"+meanRevealColour+";color:"+meanRevealColour+";"+meanRevealPos;if(currentWidth<=meanScreenWidth){jQuery(removeElements).addClass('mean-remove');meanMenuExist=true;jQuery(meanContainer).addClass("mean-container");jQuery('.mean-container').prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+meanStyles+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var meanMenuContents=jQuery(meanMenu).html();jQuery('.mean-nav').html(meanMenuContents);if(meanRemoveAttrs){jQuery('nav.mean-nav ul, nav.mean-nav ul *').each(function(){if(jQuery(this).is('.mean-remove')){jQuery(this).attr('class','mean-remove');}else{jQuery(this).removeAttr("class");}jQuery(this).removeAttr("id");});}jQuery(meanMenu).before('<div class="mean-push" />');jQuery('.mean-push').css("margin-top",meanNavPush);jQuery(meanMenu).hide();jQuery(".meanmenu-reveal").show();jQuery(meanRevealClass).html(meanMenuOpen);$navreveal=jQuery(meanRevealClass);jQuery('.mean-nav ul').hide();if(meanShowChildren){if(meanExpandableChildren){jQuery('.mean-nav ul ul').each(function(){if(jQuery(this).children().length){jQuery(this,'li:first').parent().append('<a class="mean-expand" href="#" style="font-size: '+meanMenuCloseSize+'">'+meanExpand+'</a>');}});jQuery('.mean-expand').on("click",function(e){e.preventDefault();if(jQuery(this).hasClass("mean-clicked")){jQuery(this).text(meanExpand);jQuery(this).prev('ul').slideUp(300,function(){});}else{jQuery(this).text(meanContract);jQuery(this).prev('ul').slideDown(300,function(){});}jQuery(this).toggleClass("mean-clicked");});}else{jQuery('.mean-nav ul ul').show();}}else{jQuery('.mean-nav ul ul').hide();}jQuery('.mean-nav ul li').last().addClass('mean-last');$navreveal.removeClass("meanclose");jQuery($navreveal).click(function(e){e.preventDefault();if(menuOn===false){$navreveal.css("text-align","center");$navreveal.css("text-indent","0");$navreveal.css("font-size",meanMenuCloseSize);jQuery('.mean-nav ul:first').slideDown();menuOn=true;}else{jQuery('.mean-nav ul:first').slideUp();menuOn=false;}$navreveal.toggleClass("meanclose");meanInner();jQuery(removeElements).addClass('mean-remove');});if(onePage){jQuery('.mean-nav ul > li > a:first-child').on("click",function(){jQuery('.mean-nav ul:first').slideUp();menuOn=false;jQuery($navreveal).toggleClass("meanclose").html(meanMenuOpen);});}}else{meanOriginal();}};if(!isMobile){jQuery(window).resize(function(){currentWidth=window.innerWidth||document.documentElement.clientWidth;if(currentWidth>meanScreenWidth){meanOriginal();}else{meanOriginal();}if(currentWidth<=meanScreenWidth){showMeanMenu();meanCentered();}else{meanOriginal();}});}jQuery(window).resize(function(){currentWidth=window.innerWidth||document.documentElement.clientWidth;if(!isMobile){meanOriginal();if(currentWidth<=meanScreenWidth){showMeanMenu();meanCentered();}}else{meanCentered();if(currentWidth<=meanScreenWidth){if(meanMenuExist===false){showMeanMenu();}}else{meanOriginal();}}});showMeanMenu();});};})(jQuery);

/*jquery.viewportchecker.js*/
(function($){$.fn.viewportChecker=function(useroptions){var options={classToAdd:'visible',classToRemove:'invisible',classToAddForFullView:'full-visible',removeClassAfterAnimation:false,offset:100,repeat:false,invertBottomOffset:true,callbackFunction:function(elem,action){},scrollHorizontal:false,scrollBox:window};$.extend(options,useroptions);var $elem=this,boxSize={height:$(options.scrollBox).height(),width:$(options.scrollBox).width()};this.checkElements=function(){var viewportStart,viewportEnd;if(!options.scrollHorizontal){viewportStart=Math.max($('html').scrollTop(),$('body').scrollTop(),$(window).scrollTop());viewportEnd=(viewportStart+boxSize.height);}
else{viewportStart=Math.max($('html').scrollLeft(),$('body').scrollLeft(),$(window).scrollLeft());viewportEnd=(viewportStart+boxSize.width);}
$elem.each(function(){var $obj=$(this),objOptions={},attrOptions={};if($obj.data('vp-add-class'))
attrOptions.classToAdd=$obj.data('vp-add-class');if($obj.data('vp-remove-class'))
attrOptions.classToRemove=$obj.data('vp-remove-class');if($obj.data('vp-add-class-full-view'))
attrOptions.classToAddForFullView=$obj.data('vp-add-class-full-view');if($obj.data('vp-keep-add-class'))
attrOptions.removeClassAfterAnimation=$obj.data('vp-remove-after-animation');if($obj.data('vp-offset'))
attrOptions.offset=$obj.data('vp-offset');if($obj.data('vp-repeat'))
attrOptions.repeat=$obj.data('vp-repeat');if($obj.data('vp-scrollHorizontal'))
attrOptions.scrollHorizontal=$obj.data('vp-scrollHorizontal');if($obj.data('vp-invertBottomOffset'))
attrOptions.scrollHorizontal=$obj.data('vp-invertBottomOffset');$.extend(objOptions,options);$.extend(objOptions,attrOptions);if($obj.data('vp-animated')&&!objOptions.repeat){return;}
if(String(objOptions.offset).indexOf("%")>0)
objOptions.offset=(parseInt(objOptions.offset)/100)*boxSize.height;var rawStart=(!objOptions.scrollHorizontal)?$obj.offset().top:$obj.offset().left,rawEnd=(!objOptions.scrollHorizontal)?rawStart+$obj.height():rawStart+$obj.width();var elemStart=Math.round(rawStart)+objOptions.offset,elemEnd=(!objOptions.scrollHorizontal)?elemStart+$obj.height():elemStart+$obj.width();if(objOptions.invertBottomOffset)
elemEnd-=(objOptions.offset*2);if((elemStart<viewportEnd)&&(elemEnd>viewportStart)){$obj.removeClass(objOptions.classToRemove);$obj.addClass(objOptions.classToAdd);objOptions.callbackFunction($obj,"add");if(rawEnd<=viewportEnd&&rawStart>=viewportStart)
$obj.addClass(objOptions.classToAddForFullView);else
$obj.removeClass(objOptions.classToAddForFullView);$obj.data('vp-animated',true);if(objOptions.removeClassAfterAnimation){$obj.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){$obj.removeClass(objOptions.classToAdd);});}}else if($obj.hasClass(objOptions.classToAdd)&&(objOptions.repeat)){$obj.removeClass(objOptions.classToAdd+" "+objOptions.classToAddForFullView);objOptions.callbackFunction($obj,"remove");$obj.data('vp-animated',false);}});};if('ontouchstart'in window||'onmsgesturechange'in window){$(document).bind("touchmove MSPointerMove pointermove",this.checkElements);}
$(options.scrollBox).bind("load scroll",this.checkElements);$(window).resize(function(e){boxSize={height:$(options.scrollBox).height(),width:$(options.scrollBox).width()};$elem.checkElements();});this.checkElements();return this;};})(jQuery);

$('.mb_search').click(function(e) {
    $('.mb_searchbar').slideToggle('slow');
});

$(document).ready(function() {
	$('.post').addClass("hidden1").viewportChecker({
		classToAdd: 'visible animated fadeInUp',
		offset: 100
	});
	$('.rightin').addClass("hidden1").viewportChecker({
		classToAdd: 'visible animated fadeInRight',
		offset: 100
	});
	$('.leftin').addClass("hidden1").viewportChecker({
		classToAdd: 'visible animated fadeInLeft',
		offset: 100
	});
});

document.addEventListener(
	"DOMContentLoaded", () => {
		new Mmenu( "#menu", {
			extensions	: [ 'theme-dark', 'shadow-page' ],
			setSelected	: true,
			counters	: true,
			"navbars": [
				{
					content		: [ 'prev', 'breadcrumbs', 'close' ]
				}
			]
		});
	}
);

(function($) {
    "use strict";
    jQuery('nav#dropdown').meanmenu();
    $.scrollUp({
        scrollText: '<i class="fas fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
})(jQuery);

$('.banner_silder').owlCarousel({
  loop:true,
  margin:10,
  autoHeight:false,
  nav:true,
  autoplay:true,
  autoplayTimeout:10000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
})

$('.product_list').owlCarousel({
  loop:true,
  margin:30,
  autoHeight:true,
  nav:false,
  autoplay:false,
  autoplayTimeout:8000,
  responsiveClass:true,
  responsive:{
      0:{
          items:2,
      },
      600:{
          items:2,
      },
      1000:{
          items:4,
      }
  }
})

$('.productNextBtn').click(function() {
  $('.product_list').trigger('next.owl.carousel');
})

$('.productPrevBtn').click(function() {
  $('.product_list').trigger('prev.owl.carousel', [300]);
})

$('.picture_list').owlCarousel({
    loop:true,
    margin:0,
	autoHeight:true,
    nav:false,
    autoplay:false,
    autoplayTimeout:8000,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:2,
        },
        1000:{
            items:5,
        }
    }
})
$('.pictureNextBtn').click(function() {
  $('.picture_list').trigger('next.owl.carousel');
})

$('.picturePrevBtn').click(function() {
  $('.picture_list').trigger('prev.owl.carousel', [300]);
})

$('.profile_btn').click(function() {
	var d = $(this).attr('data');
	var is_open = $(this).attr('data_open');
	console.log(is_open);
	var d_name = '#work_display'+d;
	if(is_open=="0"){
		$(this).attr('data_open','1');
		$('.profile_work').css('transform','scaleY(0)'); 
		$('.profile_card').css('margin-bottom','450px');
		$(d_name).css('transform','scaleY(1)');  
	}else{
		$(this).attr('data_open','0');
		$('.profile_work').css('transform','scaleY(0)'); 
		$('.profile_card').css('margin-bottom','0px');
	}
	
});

$('.product_smallPic').click(function() {
  var click = this.getAttribute('data');
  console.log(click);
  $('.product_bigPic')[0].setAttribute('src',click);
});


$("[data-fancybox]").fancybox({
  animationEffect : 'fade'
});

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item'
});

// store filter for each group
var filters = {};
$('.filters').on( 'change', function( event ) {
  var $select = $( event.target );
  // get group key
  var filterGroup = $select.attr('value-group');
  // set filter for group
  filters[ filterGroup ] = event.target.value;
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

// init Masonry
var $grids = $('.grids').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-item'
});
// layout Masonry after each image loads
$grids.imagesLoaded().progress( function() {
  $grids.masonry();
});  

if ( jQuery().hoverdir ) {
	jQuery( '.grids .grid-item' ).each( function() {
		jQuery( this ).hoverdir();
	} );
} // /hoverdir

/*$(document).ready(function() {
	$("a[rel=example_group]").fancybox({
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
});*/