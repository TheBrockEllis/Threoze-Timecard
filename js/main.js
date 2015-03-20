$(document).ready(function(){
    
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
    
}); //end document ready