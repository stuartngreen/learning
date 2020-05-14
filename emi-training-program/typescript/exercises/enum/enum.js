var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Pending"] = 2] = "Pending";
    Status[Status["Deactivated"] = 3] = "Deactivated";
})(Status || (Status = {}));
var Subscriber = /** @class */ (function () {
    function Subscriber(id, status) {
        this.id = id;
        this.status = status;
    }
    return Subscriber;
}());
function getStatus(sub) {
    switch (sub.status) {
        case Status.Active: {
            return 'Active';
        }
        case Status.Pending: {
            return 'Pending';
        }
        case Status.Deactivated: {
            return 'Deactivated';
        }
        default: {
            return 'Subscriber has invalid status code.';
        }
    }
}
var john = new Subscriber(123, 1);
var jane = new Subscriber(234, 4);
console.log(getStatus(john));
console.log(getStatus(jane));
