app.factory('dataService', function itemsService($http, $q) {
    return {
        getPersons: function () {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'persons.json'
            }).then(function successCallback(response) {
                deferred.resolve(response.data)
            }, function errorCallback(response) {
                deferred.reject(response.status)
            });

            return deferred.promise;
        }
    }
});