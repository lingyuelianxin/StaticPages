$(function(){

    var d=1;
    var d2=1;
    var d3=1;
    var d4=1;
$("#dianji1").click(
    function () {


        if(d==1) {

            $("#dianji1").html("-");
            d = 0;
            $("#xia1").height(170);
        }
        else
        {
            $("#dianji1").html("+ ");
            d = 1;
            $("#xia1").height(50);
        }
        
    })

    $("#dianji2").click(
        function () {
    
    
            if(d2==1) {
    
                $("#dianji2").html("-");
                d2 = 0;
                $("#xia2").height(145);
            }
            else
            {
                $("#dianji2").html("+");
                d2 = 1;
                $("#xia2").height(50);
            }
            
        })

        $("#dianji3").click(
            function () {
        
        
                if(d3==1) {
        
                    $("#dianji3").html("-");
                    d3 = 0;
                    $("#xia3").height(235);
                }
                else
                {
                    $("#dianji3").html("+");
                    d3 = 1;
                    $("#xia3").height(50);
                }
                
            })



            $("#dianji4").click(
                function () {
            
            
                    if(d4==1) {
            
                        $("#dianji4").html("-");
                        d4= 0;
                        $("#xia4").height(235);
                    }
                    else
                    {
                        $("#dianji4").html("+");
                        d4 = 1;
                        $("#xia4").height(50);
                    }
                    
                })
      
                $("#dizhi").click(
                    function () {
                
                      $(".neilian").height(300);
                       
                        
                    })
            
                $("#gerenziliao").click(
                        function () {
                    
                          $(".neilian").height(750);
                           
                            
                        })
            



})



