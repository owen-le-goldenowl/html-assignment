$(document).ready(function () {
    // handle navbar background color change when start scrolling
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $('.navbar').css('background-color', '#292525cc');
        } else if (scroll_pos == 0) {
            $('.navbar').css('background-color', 'rgba(41, 37, 37, 0)');
        }
    });

    //handle image drag effect
    $(".carousel").swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
        },
        allowPageScroll: "vertical"
    });

    // handle image preview
    $('#image-preview #image-input').change(function (e) {
        e.preventDefault();
        if (this.files.length>0){
           var imgFile=this.files[0];
           var fileType=imgFile.type;
           var validFileTypes=["image/gif","image/png","image/jpg","image/jpeg"];
           if (validFileTypes.includes(fileType)){
                var reader=new FileReader();
                reader.readAsDataURL(imgFile);
                reader.onload=function(){
                    $('#image-show').attr('src',reader.result);
                }
           }else{
               alert('Not an image!');
           }
        }
    });
});
