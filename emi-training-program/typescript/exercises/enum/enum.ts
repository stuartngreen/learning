enum Status {
    Active = 1,
    Pending,
    Deactivated
}

class Subscriber {
    constructor(
        public id: number,
        public status: Status
    ) {
    }
}

function getStatus(sub: Subscriber): string {
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

let john: Subscriber = new Subscriber(123, 1);
let jane: Subscriber = new Subscriber(234, 4);

console.log(getStatus(john));
console.log(getStatus(jane));
