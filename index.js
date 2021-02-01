// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(object, key, value) {
    const newDriver = Object.assign({}, object);
    newDriver[key] = value
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value;
}

function deleteFromDriverByKey(object, key) {
    const newObject = object
    delete newObject[key];
    return newObject
}

function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key];
}

