function ProfessorService($http) {

    this.getClass = function () {
        //var def = $q.defer();
        return $http.get('http://localhost:64325/api/Admin/GetAllClass');
        //    .success(function (data) {
        //        service.albums = data;
        //    def.resolve(data);
        //})
        //    .error(function () {
        //        def.reject("Failed to get albums");
        //    });
        //return def.promise;
    };

    this.postSubject = function (classID,subject) {
        return $http.post("http://localhost:64325/api/Admin/PostSubject/" + classID + "", subject);
    }
    this.putSubject = function (subject) {
        return $http.put("http://localhost:64325/api/Admin/UpdateSubject", subject);
    }
    this.deleteSubject = function (subject) {
        return $http.delete("http://localhost:64325/api/Admin/DeleteSubject", { "headers": { "Content-Type": "application/json", "Accept": "application/json, text/plain, */*" }, "data": JSON.stringify(subject) });
    }
    this.getSubjects = function (classID) {
        return $http.get("http://localhost:64325/api/Admin/GetAllSubjects/" + classID + "");
    };

    this.postConcept = function (classID, subjectID, concept) {
        return $http.post("http://localhost:64325/api/Admin/PostConcept/" + classID + "/" + subjectID + "", concept);
    }
    this.putConcept = function (concept) {
        return $http.put("http://localhost:64325/api/Admin/UpdateConcept/", concept);
    }
    this.deleteConcept = function (concept) {
        return $http.delete("http://localhost:64325/api/Admin/DeleteConcept/", { "headers": { "Content-Type": "application/json", "Accept": "application/json, text/plain, */*" }, "data": JSON.stringify(concept) });
    }
    this.getConcepts = function (classID,subjectID) {
        return $http.get("http://localhost:64325/api/Admin/GetAllConcepts/" + classID + "/" + subjectID+"");
    };
    this.getQuestions = function (classID, subjectID, conceptID) {
        return $http.get("http://localhost:64325/api/Admin/GetAllQuestions/" + classID + "/" + subjectID + "/" + conceptID+"");
    };
    
}