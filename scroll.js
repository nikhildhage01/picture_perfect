$(document).on('click', 'a[href^="#btn"]', function(e)
{
    var id = $(this).attr('href');
    var $id =$(id);
    if($id.length === 0){
        return;
    }
    e.preventDefault();
    var pos =$id.offset().top;
    $('body, html').animate({scrollTop: pos},2000);
}
);