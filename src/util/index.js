import { SERVER } from './constants.js';

export function isNullOrEmpty(value){
    if(value){
        return value.trim() == '';
    } else {
        return true;
    }
}

export function apiPostCall(options){
    var data = {
    };
    for(var param of options.params){
        data[param.key] = param.value;
    }
    var url = SERVER + options.url;
    fetch(url, {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(function(response) {
         return response.json();
    }).then(function(responseJSON) {
        options.success(responseJSON);
    }).catch(function(exception){
        options.failure(exception);
    });
}