'use strict';

/**
 * @ngdoc function
 * @name calendarAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calendarAngularApp
 */
app.controller('CalendarController', function ($scope) {
    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    //SHOW HIDE LISTS
    $scope.isHidingList = true;
    $scope.toggleList = function() {
        $scope.isHidingList = !$scope.isHidingList;
    };



    //SHOW HIDE FORM FOR NEW EVENTS
    $scope.isHidingForm = true;
    $scope.toggleForm = function() {
        $scope.isHidingForm = !$scope.isHidingForm;

    };


    var today = moment();

    //LISTS
    $scope.lists = ["Webprogrammieren", "Familie", "Beste Freunde"];
    $scope.listenName = $scope.lists[0];

    //MONTHS
    var monthNumber = (today.week() / 4) - 1;
    $scope.month = today.month(monthNumber).format("MMMM, YYYY");

    //WEEKs + DAYS
    var weekOfYear = today.week();

    $scope.days = [
        { weekDay: today.day(1).format("ddd"),
            dayNumber: today.day(1).week(weekOfYear).format('DD')
        },
        { weekDay: today.day(2).format("ddd"),
            dayNumber: today.day(2).week(today.week()).format('DD')
        },
        { weekDay: today.day(3).format("ddd"),
            dayNumber: today.day(3).week(today.week()).format('DD')
        },
        { weekDay: today.day(4).format("ddd"),
            dayNumber: today.day(4).week(today.week()).format('DD')
        },
        { weekDay: today.day(5).format("ddd"),
            dayNumber: today.day(5).week(today.week()).format('DD')
        },
        { weekDay: today.day(6).format("ddd"),
            dayNumber: today.day(6).week(today.week()).format('DD')
        },
        { weekDay: today.day(7).format("ddd"),
            dayNumber: today.day(0).week(today.week()).format('DD')
        }
    ];

    /*$scope.nextMonth = function() {
        $scope.nextWeek(4);

        monthNumber = (weekOfYear / 4) - 1;
        $scope.month = today.month(monthNumber).format("MMMM, YYYY");

    };

    $scope.prevMonth = function() {
        $scope.prevWeek(4);

        monthNumber = (weekOfYear / 4) - 1;
        $scope.month = today.month(monthNumber).format("MMMM, YYYY");
    }; */

    $scope.next = function(numOfWeeks) {
        weekOfYear = today.add(numOfWeeks, 'week').format("W");
        $scope.setDays(weekOfYear);
    };


    $scope.prev = function(numOfWeeks) {
        weekOfYear = today.subtract(numOfWeeks, 'week').format("W");
        $scope.setDays(weekOfYear);
    };

    $scope.setDays = function(weekOfYear) {

            $scope.days = [
                { weekDay: today.day(1).format("ddd"),
                    dayNumber: today.day(1).week(weekOfYear).format('DD')
                },
                { weekDay: today.day(2).format("ddd"),
                    dayNumber: today.day(2).week(today.week()).format('DD')
                },
                { weekDay: today.day(3).format("ddd"),
                    dayNumber: today.day(3).week(today.week()).format('DD')
                },
                { weekDay: today.day(4).format("ddd"),
                    dayNumber: today.day(4).week(today.week()).format('DD')
                },
                { weekDay: today.day(5).format("ddd"),
                    dayNumber: today.day(5).week(today.week()).format('DD')
                },
                { weekDay: today.day(6).format("ddd"),
                    dayNumber: today.day(6).week(today.week()).format('DD')
                },
                { weekDay: today.day(7).format("ddd"),
                    dayNumber: today.day(0).week(today.week()).format('DD')
                }

            ];

        monthNumber = (weekOfYear / 4) - 1;
        $scope.month = today.month(monthNumber).format("MMMM, YYYY");

    }

    $scope.users = [
        { Username: "Ulli",
            Eintraege: 5,
            pic: "../../images/Mayschnee.jpg"
        },
        { Username: "Lorenz",
            Eintraege: 1,
            pic: "../../images/Mayschnee.jpg"
        },
        { Username: "Jacky",
            Eintraege: 0,
            pic: "../../images/Mayschnee.jpg"
        },
        { Username: "Christoph",
            Eintraege: 3,
            pic: "../../images/Mayschnee.jpg"
        },
    ];

    $scope.currentUser = $scope.users[0];

    //EVENTS


    $scope.events = [
        {
            Titel: "IPad zurückgeben",
            Datum: new Date('2015', '09', '01'),
            User: "Ulli"

        },

        {
            Titel: "eCampus Abgabe",
            Datum: new Date("2015", "09", "24"),
            User: "Christoph"
        }

    ];

    //Löschen eines E
    $scope.delEvent = function() {



    }


});
