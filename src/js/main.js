$(function(){
    // scroll
    $('#headerNavbar a[href^="#"]').click(function (){
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });


    // Phone validation
    $(".phone-validate").mask("+7 (999) 999-99-99");


    // AJAX form sender
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
    $('.partner-form').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
          url:"tg-partner.php",
          type: 'POST',
          data: $(this).serialize(),
          success: function(data) {
            alert('Спасибо за заявку, клиент принят в обработку)');
            console.log(data);
            $('.contacts-form').not('.partner-form')[0].reset();
          },
        });
        $(this).closest('.modal').modal('hide');
    });
});