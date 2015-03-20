window.threoze = new function(){
    
    base = "http://dev.threoze.com/api/v1/",

    get = function(key){
        //console.log("Getting " + key);
        return localStorage.getItem(key);
    },

    set = function(key, value){
        //console.log("Setting " + key + " => " + value);
        return localStorage.setItem(key, value);
    },
    
    getData = function(endpoint, params){
        //console.log("Attempting to call API - get");
        //console.log("Endpoint: " + endpoint);
        return  $.getJSON(base + endpoint, params);
    },
    
    postData = function(endpoint, data, callback){
        //console.log("Attempting to call API - post");
        //console.log("Endpoint: " + endpoint);
        //console.log("Callback: " + callback);
        $.post(base + endpoint, JSON.stringify(data))
            .done(function(data, statusText, xhr){
                //console.log("data: " + data);
                //console.log("status text: " + statusText);
                //console.log("xhrs: " + xhr);
                window[callback](data);
            })
            .fail(function(xhr, textStatus, errorThrown) {
                //console.log(xhr);
                //console.log(textStatus);
                //console.log(errorThrown);
                window[callback]( JSON.parse(xhr.responseText) );
            });
    }
    
    return {
        get: get,
        set: set,
        getData: getData,
        postData: postData
    };
    
} ();