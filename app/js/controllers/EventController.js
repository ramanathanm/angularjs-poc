"use strict";

define(['filters/DifficultyFilter', 'services/EventData', 'directives/Vote'], function () {
    eventsApp.register.controller('EventController', function($scope, eventData, $routeParams, $route) {
        $scope.sortField = 'name';
        $scope.ascOrDsc = '+';
        $scope.sortorder = '+name';
        $scope.difficultyLevel = '';

        eventData.getEvent($route.current.pathParams.eventId).$promise.then(function (e) {
            $scope.event = e;    
        });

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

        $scope.toggleSortField = function(sortField) {
            this.sortField = sortField;
            this.sortorder = this.ascOrDsc + this.sortField;
        };

        $scope.isSelectedSortField = function(sortField) {
            return this.sortField === sortField;
        };

        $scope.isSelectedAscOrDsc = function(ascOrDsc) {
            return this.ascOrDsc == ascOrDsc;
        };

        $scope.toggleAscOrDsc = function(ascOrDsc) {
            this.ascOrDsc = ascOrDsc;
            this.sortorder = this.ascOrDsc + this.sortField;
        };

        $scope.setDifficultyLevel = function(level) {
            this.difficultyLevel = level;
        };

        $scope.isSelectedDifficultyLevel = function(level) {
            return this.difficultyLevel === level;
        };
    });
});