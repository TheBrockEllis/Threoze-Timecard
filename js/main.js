var gui = require('nw.gui');

$(document).ready(function(){
    $("#changekiosk").click(function(){
      var elm = $(this);
      var kioskStatus = elm.data("kiosk");
      if(kioskStatus == 1){
        gui.Window.get().leaveKioskMode();
        elm.html("Enter Kiosk").data("kiosk", 0);
      }else{
        gui.Window.get().enterKioskMode();
        elm.html("Exit Kiosk").data("kiosk", 1);
      }
    });
    
    $("#exitapp").click(function(){
      gui.App.quit();
    });
    
    $("#numpad").numpad({
    	input: ".inputs"
    });
    
    $("#theForm").submit(function(event){
        event.preventDefault();
                
        var userid = $("#userid").val();
        var pin = $("#pin").val();
        
        if (userid == "" || pin == "") {
            alert("Please enter data");
            return;
        }
        
        var url = "Employee/"+userid+"/Timecard";
        var data = {
            "cid": "1000",
            "pin": pin,
            "userid": userid            
        };
        
        window.threoze.postData(url, data, "results");
        
        window.results = function(data){           
            var msg = $("#message");
            
            if(data.code == "400") {               
                msg.html("<div class='alert alert-danger'><strong>Submission failed</strong><br>"+data.description+"</div>")
                return;
            }
                        
            if (data.Action == "Out") {
                msg.html("<div class='alert alert-success'>You've been clocked out!</div>");
            }else if(data.Action == "In"){
                msg.html("<div class='alert alert-success'>You've been clocked in!</div>");
            }else{
                msg.html("<div class='alert alert-error'>Mistakes were made.</div>");
            }
            
            setTimeout(resetForm, 1500);
        }          
            
    }); //end form submit

    $("#reset").click(function(){
       resetForm(); 
    });
    
    function resetForm() {
        $("#userid").val("").focus();
        $("#pin").val("");
        $("#message").empty();
    }
    
    function displayClock(){
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      //console.log(s);
      $("#clock").html(h+":"+m+":"+s);
      var t = setTimeout(function(){displayClock()},1000);
    }
    
    function checkTime(i) {
      if (i < 10) i = "0" + i;  // add zero in front of numbers < 10
      return i;
    }
    
    displayClock();
    
}); //end document ready
