$(function(){
    // scroll
    $('#headerNavbar a[href^="#"]').click(function (){
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    $('.contacts-form').not('.partner-form').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
          url:"tg-form.php",
          type: 'POST',
          data: $(this).serialize(),
          success: function(data) {
            alert('Спасибо за заявку, скоро мы вам перезвоним.');
            console.log(data);
            $('.contacts-form').not('.partner-form')[0].reset();
          },
        });
    });
});