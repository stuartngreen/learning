
function deepEqual(a, b) {

    if (typeof a === 'object' && typeof b === 'object' &&
        a !== null && b !== null) {
        
        if (Object.keys(a).length != Object.keys(b).length) {
            console.log('Different number of properties.')
            return false;
        }

        for (let key of Object.keys(a)) {
            return deepEqual(a[key], b[key]);
        }
    }
    else if (a === b) {
        return true;
    }

    return false;
}

function callDeepEqual() {

    let obj1 = { colour: 'red', length: 50, wheels: { front: 1, back: 2 } }
    let obj2 = { colour: 'blue', length: 50, wheels: { front: 1, back: 2 } }
    let obj3 = { colour: 'blue', wheels: { front: 2, back: 2 } }

    let objects = 'obj1: ' + JSON.stringify(obj1) +
        '\nobj2: ' + JSON.stringify(obj2) +
        '\nobj3: ' + JSON.stringify(obj3);

    let comparisons = 'obj1 = obj1? ' + deepEqual(obj1, obj1) +
        '\nobj1 = obj2? ' + deepEqual(obj1, obj2) +
        '\nobj2 = obj3? ' + deepEqual(obj2, obj3) +
        '\nobj1 = 123? ' + deepEqual(obj2, 123) +
        '\n5 = \'5\'? ' + deepEqual(5, '5');

    let output = objects + '\n\n' + comparisons;

    document.getElementById('output').innerHTML = output;
}
