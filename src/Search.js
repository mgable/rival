import $ from 'jquery';

var exports = {}

var domain = "https://dog.ceo/api/",
	$http =  $.get;


function getData(){
	return _http("breeds/list/all", {}).then((response) => {
		return response.message;
	});
}

function _http(endpoint, params){
	return $http(domain + endpoint, {params:params}, (response) =>{
		return response;
	});
}


exports.getData = getData;

export default exports;

