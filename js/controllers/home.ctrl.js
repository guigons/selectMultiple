angular.module('selectMultiple').controller('main.ctrl',function($scope, $rootScope){

    // INITIALIZE QUERY
    $scope.query = {"city":["São Paulo","Curitiba","Rio de Janeiro","Manaus","Recife"],
                    "eyesColor":["Blue","Brown","Green","Black"],
                    "profession":["autonomos","teacher","mechanic","engineer","manager","doctor"]}

    $scope.pessoas = [
        {name: 'Ana', city: 'Curitiba', eyesColor: 'Blue', profession: 'teacher'},
        {name: 'Roberto', city: 'São Paulo', eyesColor: 'Black', profession: 'autonomos'},
        {name: 'Carlos', city: 'Curitiba', eyesColor: 'Green', profession: 'teacher'},
        {name: 'Lucia', city: 'Rio de Janeiro', eyesColor: 'Green', profession: 'engineer'},
        {name: 'Claudia', city: 'São Paulo', eyesColor: 'Black', profession: 'doctor'},
        {name: 'Sergio', city: 'Curitiba', eyesColor: 'Brown', profession: 'engineer'},
        {name: 'Robin', city: 'Rio de Janeiro', eyesColor: 'Blue', profession: 'manager'},
        {name: 'Erica', city: 'Curitiba', eyesColor: 'Brown', profession: 'mechanic'},
        {name: 'Debora', city: 'Rio de Janeiro', eyesColor: 'Blue', profession: 'engineer'},
        {name: 'João', city: 'Manaus', eyesColor: 'Brown', profession: 'doctor'},
        {name: 'André', city: 'Rio de Janeiro', eyesColor: 'Blue', profession: 'mechanic'},
        {name: 'Natalia', city: 'Recife', eyesColor: 'Green', profession: 'engineer'},
        {name: 'Rosana', city: 'Recife', eyesColor: 'Blue', profession: 'mechanic'},
        {name: 'Marta', city: 'Curitiba', eyesColor: 'Brown', profession: 'engineer'},
        {name: 'Guilherme', city: 'Manaus', eyesColor: 'Green', profession: 'teacher'},
        {name: 'Marcos', city: 'Curitiba', eyesColor: 'Brown', profession: 'manager'},
        {name: 'Thiago', city: 'Recife', eyesColor: 'Black', profession: 'autonomos'}
    ]

    $scope.filter = {
        city: ['São Paulo','Curitiba','Rio de Janeiro','Manaus','Recife'],
        eyesColor: ['Blue','Brown','Green','Black'],
        profession: {autonomos: 1, teacher: 2, mechanic: 3, engineer: 1, manager: 2, doctor: 3}

    }

});
