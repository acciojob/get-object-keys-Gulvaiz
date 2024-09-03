// Create the student object with a property called name
const student = {
    name: 'xyz'
};

// Add a method to the Object prototype called getKeys
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Call the getKeys method on the student object
const keys = student.getKeys();
console.log(keys); // Output: ["name"]
