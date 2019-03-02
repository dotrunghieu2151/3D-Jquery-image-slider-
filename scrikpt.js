$(document).ready(function(){
    let getWidth = $(window).width();
    const wrapperWidth = 0.7;
    const slider = $('.inner');
    $('.wrapper').css({
        width:wrapperWidth*100 + '%',
        perspective:2*wrapperWidth*getWidth + 'px'      
    });
    $('.div1').css({
        transform:'translateZ(' + 0.5*wrapperWidth*getWidth + 'px)'
    });
    $('.div2').css({
        transform:'translateZ(' + (-0.5*wrapperWidth*getWidth)+ 'px) rotateY(90deg)'
    });
    $('.div3').css({
        transform:'translateZ(' + (-0.5*wrapperWidth*getWidth) + 'px) rotateY(-90deg)'
    });
    $('.div4').css({
        transform:'translateZ(' + (-0.5*wrapperWidth*getWidth) + 'px) rotateY(180deg)'
    });
    $(window).on('resize',function(){
        getWidth = $(window).width();
        $('.wrapper').css({
            perspective:2*wrapperWidth*getWidth + 'px'      
        });
        $('.div1').css({
        transform:'translateZ(' + 0.5*wrapperWidth*getWidth + 'px)'
        });
        $('.div2').css({
            transform:'translateZ(' + (-0.5*wrapperWidth*getWidth)+ 'px) rotateY(90deg)'
        });
        $('.div3').css({
            transform:'translateZ(' + (-0.5*wrapperWidth*getWidth) + 'px) rotateY(-90deg)'
        });
        $('.div4').css({
            transform:'translateZ(' + (-0.5*wrapperWidth*getWidth) + 'px) rotateY(180deg)'
        });
        });
     
      let currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 90;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 90;
  }
  slider.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}
});