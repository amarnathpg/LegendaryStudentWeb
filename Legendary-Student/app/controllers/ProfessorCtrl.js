(function (angular) {
    'use strict';
    angular.module('ngIISO', ['ngRoute', 'ngAnimate']).service('ProfessorService', ProfessorService)
        .config(['$routeProvider', '$locationProvider',
            function ($routeProvider, $locationProvider) {
                $routeProvider
                    .when('/Professor/professor/', {
                        templateUrl: '../Professor/professor.html',
                        controller: 'ProfessorCtrl',
                        controllerAs: 'professor'
                    })
                    .when('/Book/:bookId', {
                        templateUrl: 'book.html',
                        controller: 'BookCtrl',
                        controllerAs: 'book'
                    })
                    .when('/Book/:bookId/ch/:chapterId', {
                        templateUrl: 'chapter.html',
                        controller: 'ChapterCtrl',
                        controllerAs: 'chapter'
                    });

                $locationProvider.html5Mode(true);
            }])
        .controller('ProfessorCtrl', ['$route', '$routeParams', '$location', '$q', 'ProfessorService', 
            function ProfessorCtrl($route, $routeParams, $location, $q, ProfessorService) {
                var vm = this;
                vm.$route = $route;
                vm.$location = $location;
                vm.$routeParams = $routeParams;

                //default values for onload
                var classID = 1;
                var SubjectID = 1;

                //scope variables
                vm.classesArray = [];
                vm.subjectsArray = [];
                vm.conceptsArray = [];
                vm.questionsArray = [];

                //onload services
                ProfessorService
                    .getClass()
                    .then(function (response) {
                        vm.classesArray = response.data;
                        console.log(vm.classesArray);
                    });
                ProfessorService
                    .getSubjects(classID)
                    .then(function (response) {
                        vm.subjectsArray = response.data;
                        console.log(vm.classesArray);
                    });
                ProfessorService
                    .getConcepts(classID,SubjectID)
                    .then(function (response) {
                        vm.conceptsArray = response.data;
                        console.log(vm.classesArray);
                    });

                vm.GetTodayDate = function () {
                    var today = new Date();
                    var dd = today.getDate();
                    var mm = today.getMonth() + 1; //January is 0!
                    var yyyy = today.getFullYear();

                    if (dd < 10) {
                        dd = '0' + dd
                    }

                    if (mm < 10) {
                        mm = '0' + mm
                    }

                    today = mm + '/' + dd + '/' + yyyy;
                    return today;
                }

                vm.AddSubject = function () {
                    var name = vm.sasubjectName;
                    var classid = vm.saclassID;
                    var subject = {};
                    subject.subjectID = 0;
                    subject.subjectName = name;
                    subject.description = "testintegr";
                    subject.createdBy = "Amar";
                    subject.createdDate = vm.GetTodayDate();
                    subject.modifiedBy = "Amar";
                    subject.modifiedDate = vm.GetTodayDate();
                    subject.isActive = true;
                    ProfessorService.postSubject(classid, subject).then(function (responce) {
                        alert("success");
                    })
                }
                vm.UpdateSubject = function () {
                    var subject = {};
                    subject.subjectID = vm.susubjectID;
                    subject.subjectName = vm.sutxtsubject;
                    subject.description = "testintegr";
                    subject.createdBy = "Amar";
                    subject.createdDate = vm.GetTodayDate();
                    subject.modifiedBy = "Amar";
                    subject.modifiedDate = vm.GetTodayDate();
                    subject.isActive = true;
                    ProfessorService.putSubject(subject).then(function (responce) {
                        alert("success");
                    })
                }
                vm.DeleteSubject = function () {
                    var subject = {};
                    subject.subjectID = vm.sdsubjectID;
                    subject.subjectName = "testsubject";
                    subject.description = "testintegr";
                    subject.createdBy = "Amar";
                    subject.createdDate = vm.GetTodayDate();
                    subject.modifiedBy = "Amar";
                    subject.modifiedDate = vm.GetTodayDate();
                    subject.isActive = false;
                    ProfessorService.deleteSubject(subject).then(function (responce) {
                        alert("success");
                    })
                }
                vm.GetSubject = function () {
                    ProfessorService
                        .getSubjects(vm.suclassID)
                        .then(function (response) {
                            vm.subjectsArray = response.data;
                            vm.sutxtsubject = "";
                            console.log(vm.classesArray);
                        });
                }
                vm.GetSubjectName = function () {
                    for (var i = 0; i <= vm.subjectsArray.data.length; i++) {
                        if (vm.subjectsArray.data[i].subjectID == vm.susubjectID) {
                            vm.sutxtsubject = vm.subjectsArray.data[i].subjectName;
                            break;
                        }
                    }
                }
                vm.GetDeleteSubject = function () {
                    ProfessorService
                        .getSubjects(vm.sdclassID)
                        .then(function (response) {
                            vm.subjectsArray = response.data;
                            console.log(vm.classesArray);
                        });
                }

                vm.AddConcept = function () {
                    var concept = {};
                    concept.subjectID = vm.casubjectID;
                    concept.conceptID = 0;
                    concept.conceptName = vm.caconceptName;
                    concept.description = "testintegration";
                    concept.createdBy = "Amar";
                    concept.createdDate = vm.GetTodayDate();
                    concept.ModifiedBy = "Amar";
                    concept.ModifiedDate = vm.GetTodayDate();
                    concept.IsActive = true;
                    ProfessorService.postConcept(vm.caclassID, vm.casubjectID, concept).then(function (responce) {
                        alert("success");
                    })
                }
                vm.UpdateConcept = function () {
                    var concept = {};
                    concept.subjectID = vm.cusubjectID;
                    concept.conceptID = vm.cuconceptID;
                    concept.conceptName = vm.cuconceptName;
                    concept.description = "testintegration";
                    concept.createdBy = "Amar";
                    concept.createdDate = vm.GetTodayDate();
                    concept.ModifiedBy = "Amar";
                    concept.ModifiedDate = vm.GetTodayDate();
                    concept.IsActive = true;
                    ProfessorService.putConcept(concept).then(function (responce) {
                        alert("success");
                    })
                }
                vm.DeleteConcept = function () {
                    var concept = {};
                    concept.subjectID = vm.cdsubjectID;
                    concept.conceptID = vm.cdconceptID;
                    concept.conceptName = "testintegration";
                    concept.description = "testintegration";
                    concept.createdBy = "Amar";
                    concept.createdDate = vm.GetTodayDate();
                    concept.ModifiedBy = "Amar";
                    concept.ModifiedDate = vm.GetTodayDate();
                    concept.IsActive = false;
                    ProfessorService.deleteConcept(concept).then(function (responce) {
                        alert("success");
                    })
                }
                
                vm.GetSubjectsConcept = function () {
                    ProfessorService
                        .getSubjects(vm.cuclassID)
                        .then(function (response) {
                            vm.conceptsArray = response.data;
                            console.log(vm.classesArray);
                        });
                }
                vm.GetConcept = function () {
                    ProfessorService
                        .getConcepts(vm.cuclassID,vm.cusubjectID)
                        .then(function (response) {
                            vm.conceptsArray = response.data;
                            vm.cuconceptName = "";
                            console.log(vm.conceptsArray);
                        });
                }
                vm.GetConceptName = function () {
                    for (var i = 0; i <= vm.conceptsArray.data.length; i++) {
                        if (vm.conceptsArray.data[i].conceptID == vm.cuconceptID) {
                            vm.cuconceptName = vm.conceptsArray.data[i].conceptName;
                            break;
                        }
                    }
                }

                vm.AddQuestion = function () {
                    var question = {};
                    var option1 = {};
                    var option2 = {};
                    var option3 = {};
                    var option4 = {};
                    question.questionID = 0;
                    question.conceptID = 0;
                    question.questionName = vm.txtQuestion;
                    question.description = "test";
                    question.createdBy = "Amar";
                    question.createdDate = vm.GetTodayDate();
                    question.modifiedBy = "Amar";
                    question.modifiedDate = vm.GetTodayDate();
                    question.isActive = true;
                    question.options = new Array();

                    var tempOptions = new Array();

                    option1.optionID = 0;
                    option1.QuestionID = 0;
                    option1.OptionName = vm.txtOptionA;
                    option1.Description = "testintegration";
                    option1.IsAnswer = vm.chkAnswerA;

                    tempOptions.push(option1);

                    option2.optionID = 0;
                    option2.QuestionID = 0;
                    option2.OptionName = vm.txtOptionB;
                    option2.Description = "testintegration";
                    option2.IsAnswer = vm.chkAnswerB;

                    question.Options.push(option2);

                    option3.optionID = 0;
                    option3.QuestionID = 0;
                    option3.OptionName = vm.txtOptionC;
                    option3.Description = "testintegration";
                    option3.IsAnswer = vm.chkAnswerC;

                    question.Options.push(option3);

                    option4.optionID = 0;
                    option4.QuestionID = 0;
                    option4.OptionName = vm.txtOptionD;
                    option4.Description = "testintegration";
                    option4.IsAnswer = vm.chkAnswerD;

                    question.Options.push(option4);
                }
                vm.qGetQuestions = function () {
                    ProfessorService
                        .getQuestions(vm.qclassID, vm.qsubjectID, vm.qconceptID)
                        .then(function (response) {
                            vm.questionsArray = response.data;
                            console.log(vm.questionsArray);
                        });
                }
                vm.qGetConcept = function () {
                    ProfessorService
                        .getConcepts(vm.qclassID, vm.qsubjectID)
                        .then(function (response) {
                            vm.conceptsArray = response.data;
                            vm.cuconceptName = "";
                            console.log(vm.conceptsArray);
                        });
                }
                vm.qGetSubject = function () {
                    ProfessorService
                        .getSubjects(vm.qclassID)
                        .then(function (response) {
                            vm.subjectsArray = response.data;
                            vm.sutxtsubject = "";
                            console.log(vm.classesArray);
                        });
                }
            }])
        .controller('BookCtrl', ['$routeParams', function BookCtrl($routeParams) {
            this.name = 'BookCtrl';
            this.params = $routeParams;
        }])
        .controller('ChapterCtrl', ['$routeParams', function ChapterCtrl($routeParams) {
            this.name = 'ChapterCtrl';
            this.params = $routeParams;
        }]);
})(window.angular);

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/