angular.module('selectMultiple').filter('multipleFilter', function ($filter) {
	return function(input, query) {
		if (input.length > 1){

			var _recursiveObjCheck = function(ipt,q,ref){

				for (fieldName in q){

					// ARRAY FILTER
				 	if (q[fieldName]['__proto__'].constructor.name === 'Array'){

				 		var tmp = [];
				 	 	for (var i = q[fieldName].length - 1; i >= 0; i--) {
				 	 		var objFilter = {};
				 	 		if (ref){
				 	 			objFilter = { [ref]: {[fieldName]: q[fieldName][i]}};
				 	 		}else{
				 	 			objFilter = {[fieldName]: q[fieldName][i]};
				 	 		}
						 	tmp = tmp.concat($filter('filter')(ipt, objFilter));
						}
						ipt = tmp;
				
					// OBJECT FILTER
					}else if(q[fieldName]['__proto__'].constructor.name === 'Object'){

						ipt = _recursiveObjCheck(ipt,q[fieldName],fieldName);
						//console.log('AA', aa);;


					// STRING FILTER
				 	}else if(q[fieldName]['__proto__'].constructor.name === 'String'){
				 		ipt = $filter('filter')(ipt, {[fieldName]: q[fieldName]});
				 	}

				}

				return ipt;
			}
	
			return _recursiveObjCheck(input,query)

		}
		return input;
	}
});

