(function () {
    "use strict";
    angular
        .module("common.services")
        .factory("memberShipTypeResource",
        [
            "$resource",
            "appSettings", memberShipTypeResource
        ]);

    function memberShipTypeResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "/api/MemberShipTypes/:id");
    }
}());