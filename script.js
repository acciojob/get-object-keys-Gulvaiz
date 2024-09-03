//your JS code here. If required.
const student = {
     name: xyz
}

Object.prototype.getKeys = function() {
    return Object.keys(this);
};

const result = student.getKeys()
console.log(result)