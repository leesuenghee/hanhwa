// header clik
$(document).ready(function(){
    $(".Translation a:nth-child(3)").click(function(){
        $("#menu2").slideDown();
        return false
    });

    $("#menu2 .close_btn").click(function(){
      $("#menu2").slideUp();
      return false
    });



 //footer menu click
 $(".right_footer .Cooperation .head").click(function(){
  var $open = $("#footer1 .Cooperation .body").hasClass("open");
  if($open == false){
    $("#footer1 .Cooperation .body").addClass("open");
  }else{
      $("#footer1 .Cooperation .body").removeClass("open")
  }

 });

  //메인 슬라이드

  $("#slide_section .slide .butten .prev").click(function(){
    var $last = $("#slide_section .slide li").last();
    $("#slide_section .slide").stop().animate({"translatransform": "translate(0);"}, 500, function(){
      $("#slide_section .slide").prepend($last).css("transform","translate", "-100vw");

      

    });

    return false;
  });

  $("#slide_section .slide .butten .next").click(function(){
    var $last = $("#slide_section .slide li").last();
    $("#slide_section .slide").stop().animate({"translatransform": "translate(-100vw);"}, 500, function(){
      $("#slide_section .slide").prepend($last).css("transform","translate", "100vw");

      

    });

    return false;
  });


  var $lastSlide = $("#slide_section .slide li").last();
  //console.log($lastSlide);
  $("#slide_section .slide").prepend($lastSlide); 



  setInterval(function(){
    var $hover = $("#slide_section").hasClass("hover");

    var $stop = $("#slide_section .slider_play").hasClass("stop");

    if($hover == true || $stop == true){
    
    }else{
      var $first = $("#slide_section .slide li").first();
      $("#slide_section .slide").stop().animate({"translatransform": "translate(-100vw);"}, 1000, function(){
        $("#slide_section .slide").append($first).css("transform","translate", "100vw");

      

      });
    }
  }, 4000);


  // 재생 / 정지 버튼 기능
  $("#slide_section .slider_play").click(function(){
    var $stop = $(this).hasClass("stop");

    if($stop == false){  //(현재)재생중 -> 정지상태
      $(this).addClass("stop");  
      $(this).find("img").attr("src", `../img/btn_play.png`);
    }else{  //(현재)정지중 -> 재생상태
      $(this).removeClass("stop");
      $(this).find("img").attr("src", `../img/btn_stop.png`);
    }

  });



  //business slide
  $(".set3 .set3_1 .button .prve").click(function(){
    var $last = $("section .set3 .total_slide .slide1").last();
    $("section .set3 .set3_1 .total_slide").stop().animate({"translatransform": "translate(0);"}, 500, function(){
      $("section .set3 .set3_1 .total_slide").prepend($last).css("transform","translate", "-100%");

      

    });

    return false;
  });

  $(".set3 .set3_1 .button .next").click(function(){
    var $last = $("section .set3 .total_slide .slide1").last();
    $("section .set3 .set3_1 .total_slide").stop().animate({"translatransform": "translate(-100%);"}, 500, function(){
      $("section .set3 .set3_1 .total_slide").prepend($last).css("transform","translate", "0");

      

    });

    return false;
  });


  var $lastSlide = $("section .set3 .total_slide .slide1").last();
  //console.log($lastSlide);
  $("section .set3 .set3_1 .total_slide").prepend($lastSlide); 



    setInterval(function(){
      var $hover = $(".total_slide").hasClass("hover");

    

      if($hover == true ){
        
      }else{
        var $first = $("section .set3 .total_slide .slide1").first();
        $("section .set3 .total_slide").stop().animate({"translatransform": "translate(-100vw);"}, 500, function(){
          $("section .set3 .total_slide").append($first).css("transform","translate", "100vw");

        

        });
      }
    }, 4000);





    //careers slide


    $("section .set5 .set5_2 .warp2 .much_slide .slide1 .icon .plus").click(function(){
      var $active = $(this).closest(".slide1").hasClass("active");
      console.log("a")
      if($active == false){
        $("section .set5 .set5_2 .warp2 .much_slide .slide1").removeClass("active");
        $(this).closest(".slide1").addClass("active");
        $("section .set5 .set5_2 .warp2 .much_slide .slide1 .slide_all").slideUp();

        $(this).closest(".slide1").find(".slide_all").slideDown();
        $("section .set5 .set5_2 .warp2 .much_slide .slide1 .icon .plus img").attr("src", "./img/careers/btn_on.png");
        $(this).find("img").attr("src", "./img/careers/btn_off.png");
      }else{
        $(this).closest(".slide1").removeClass("active");
        $(this).closest(".slide1").find(".slide_all").slideUp();
        $(this).find("img").attr("src", "./img/careers/btn_on.png");
      }
      //return false;
    });

      
      



});























