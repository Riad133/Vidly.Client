(function() {
    "use strict";
    angular
        .module("vidly")
        .controller("CustomerListCtrl", ["customerResource", "memberShipTypeResource","_",CustomerListCtrl]);

    function CustomerListCtrl(customerResource, memberShipTypeResource,_) {
        var vm = this;
        vm.searchCriteria = 'Riad';
        customerResource.query(function(data) {
            vm.customers = data;
            console.log(vm.customers);
        });
        memberShipTypeResource.query(function(data) {
            vm.memberShipTypes = data;
        });

        vm.MemberShipTypeFun = function (tid) {
            var found = _.find(vm.memberShipTypes,
                function(member) {
                    return member.id === tid;
                });
            //console.log(found);
            return found.name;
        }

    }

}());