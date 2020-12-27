/***************************************
Property Descriptors Methods and Usage
Object.defineProperty(obj, propName, {} )
Object.defineProperties(obj, props)
Object.getOwnPropertyNames(obj)
Object.getOwnPropertyDescriptor(obj, prop)
Object.getOwnPropertyDescriptors(obj)
Object.keys(obj) - list of enumerable properties
Object.values(obj) - list of enumerable prop values
obj.propertyIsEnumerable(prop)
obj.hasOwnProperty(prop)
Objects can be
1. Extensible - new properties added
2. Frozen - props cannot be changed in any way
3. Sealed - props can't be deleted or configured
          but are still writable
Object PROPERTIES can be 
1. Writable - change the value
2. Enumerable - seen through a for...in loop
3. Configurable - change the property descriptors
Object.isExtensible(obj)
Object.isFrozen(obj)
Object.isSealed(obj)
Object.preventExtensions(obj)
Object.freeze(obj)
Object.seal(obj)
Descriptor Groups
DATA            ACCESSOR          
value           get
writable        set
configurable    configurable
enumerable      enumerable
****************************************/
let log = console.log;
let obj = {
    name: "Bob",
    age: 45,
};
Object.defineProperty(obj, "test", {
    value: "madrid",
    writable: true,
    configurable: true,
    enumerable: false,
});
for (let prop in obj) {
    log(prop);
}
log(obj, obj.test);