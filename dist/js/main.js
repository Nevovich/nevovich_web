$(function(){$('.header__nav a[href^="#"]').click(function(){var t=$(this).attr("href"),t=$(t).offset().top;return jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop:t},800),!1})});