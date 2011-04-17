/*
    Title: Should Node

        See README on github project page for usage instructions, examples, and license
        
        Released under the MIT license
*/

var assert = require('assert');


/*
    Class: Should
    
    Function: Should
        
        Should object constructor
        
    Parameters:

        firstOp - {Object} The object on which 'should' was called on.
        
    Returns:
        
        The type of the specified object
*/
var Should = function (firstOp) {
    this.firstOperand = firstOp;
    this.secondOperand;
    this.operation;
    this.negation = false;
};

Should.prototype = {


    /*
        Function: be
        
            Getter &  Syntax sugar.
        
        Returns:
        
            'this' object for chainability
    */
    get be() {
        return this;
    },


    /*
        Function: a
        
            Getter &  Syntax sugar.
        
        Returns:
        
            'this' object for chainability
    */
    get a() {
        return this;
    },


    /*
        Function: an
        
            Getter &  Syntax sugar.
        
        Returns:
        
            'this' object for chainability
    */
    get an() {
        return this;
    },


    /*
        Function: not
        
            Getter &  Syntax sugar. Also sets the 'negation' flag
        
        Returns:
        
            'this' object for chainability
    */
    get not() {
        this.negation = true;
        return this;
    },


    /*
        Function: a
        
            Getter &  Syntax sugar. Also resets the 'negation' flag
        
        Returns:
        
            'this' object for chainability
    */
    get and() {
        this.negation = false;
        return this;
    },


    /*
        Function: it
        
            Getter &  Syntax sugar.
        
        Returns:
        
            'this' object for chainability
    */
    get it() {
        return this;
    },


    /*
        Function: have
        
            Getter &  Syntax sugar.
        
        Returns:
        
            'this' object for chainability
    */
    get have() {
        return this;
    },


    /*
        Function: properties
        
            Getter &  Syntax sugar.
        
        Returns:
        
            'this' object for chainability
    */
    get properties() {
        return this;
    },


    /*
        Function: elements
        
            Getter &  Syntax sugar.
        
        Returns:
        
            'this' object for chainability
    */
    get elements() {
        return this;
    },


    /*
        Function: object
        
            Getter &  Checks whether or not the 'firstOperand' is an object
        
        Returns:
        
            'this' object for chainability
    */
    get object() {
        this.eval(
            this.is('object', this.firstOperand),
            'Variable is not a type \'object\'', 
            'Variable is a type \'object\''
        );
        return this;
    },


    /*
        Function: function
        
            Getter &  Checks whether or not the 'firstOperand' is a function
        
        Returns:
        
            'this' object for chainability
    */
    get function() {
        this.eval(
            this.is('function', this.firstOperand),
            'Variable is not a type \'function\'', 
            'Variable is a type \'function\''
        );
        return this;
    },


    /*
        Function: string
        
            Getter &  Checks whether or not the 'firstOperand' is a string
        
        Returns:
        
            'this' object for chainability
    */
    get string() {
        this.eval(
            this.is('string', this.firstOperand),
            'Variable is not a type \'string\'', 
            'Variable is a type \'string\''
        );
        return this;
    },


    /*
        Function: number
        
            Getter &  Checks whether or not the 'firstOperand' is a number
        
        Returns:
        
            'this' object for chainability
    */
    get number() {
        this.eval(
            this.is('number', this.firstOperand),
            'Variable is not a type \'number\'', 
            'Variable is a type \'number\''
        );
        return this;
    },


    /*
        Function: boolean
        
            Getter &  Checks whether or not the 'firstOperand' is a boolean
        
        Returns:
        
            'this' object for chainability
    */
    get boolean() {
        this.eval(
            this.is('boolean', this.firstOperand),
            'Variable is not a type \'boolean\'', 
            'Variable is a type \'boolean\''
        );
        return this;
    },


    /*
        Function: array
        
            Getter &  Checks whether or not the 'firstOperand' is an array
        
        Returns:
        
            'this' object for chainability
    */
    get array() {
        this.eval(
         this.is('array', this.firstOperand),
            'Variable is not a type \'Array\'', 
            'Variable is a type \'Array\''
        );
        return this;
    },


    /*
        Function: nan
        
            Getter &  Checks whether or not the 'firstOperand' is a nan
        
        Returns:
        
            'this' object for chainability
    */
    get nan() {
        this.eval(
        isNaN(this.firstOperand), 
            'Variable is not \'NaN\'', 
            'Variable is \'NaN\''
        );
        return this;
    },


    /*
        Function: empty
        
            Getter &  Checks whether or not the 'firstOperand' is an empty array
        
        Returns:
        
            'this' object for chainability
    */
    get empty() {
        if (this.firstOperand instanceof Array) {
            this.eval(
                this.firstOperand.length === 0, 
                'The array is not empty', 
                'The array is empty'
            );
        }
        return this;
    }
};


/*
    Function: empty
        
        Checks whether or not 'obj' is of type 'type'
        
    Parameters:

        type - {String} Type name to test against
        obj - {object} Object to test
        
    Returns:
        
        {Boolean}
*/
Should.prototype.is = function func_is(type, obj) {
    return this.objectType(obj) == type;
};


/*
    Function: eval
        
        Perform logical test on the specified 'expression' and throw a new AssertionErro if it fails
        
    Parameters:

        expression - {Boolean} The expression to test for
        msg - {String} Error message when the 'negation' flag isn't set
        negated_msg - {String} Error message when the 'negation' flag is set

*/
Should.prototype.eval = function func_eval(expression, msg, negated_msg) {
    msg = this.negation ? negated_msg : msg;
    var pass = this.negation ? !expression : expression;

    if (!pass) {
        throw new assert.AssertionError({
            message: msg,
            stackStartFunction: eval.caller.caller
        });
    }
};


/*
    Function: null
        
        Checks whether or not 'obj' is null
        
    Parameters:

        obj - {object} Object to test
        
    Returns:
        
        'this' object for chainability
*/
Should.prototype.null = function func_null(obj) {
    this.firstOperand = obj
    this.eval(
        this.is('null', this.firstOperand), 
        'Variable is not null', 
        'Variable is null'
    );
    return this;
};


/*
    Function: typeof
        
        Checks whether or not 'obj' is null
        
    Parameters:

        obj - {String} Name of the type to test against
        
    Returns:
        
        'this' object for chainability
*/
Should.prototype.typeof = function func_typeof(obj) {
    this.secondOperand = obj;
    this.eval(
    this.is(this.secondOperand, this.firstOperand), 
        'Types do not match', 
        'Types match'
    );
    return this;
};


/*
    Function: defined
        
        Checks whether or not 'obj' is defined
        
    Parameters:

        obj - {object} Object to test
        
    Returns:
        
        'this' object for chainability
*/
Should.prototype.defined = function func_defined(obj) {
    this.firstOperand = obj;
    this.eval(
    typeof(this.firstOperand) !== 'undefined', 
        'Variable is not defined', 
        'Variable is a defined'
    );
    return this;
};


/*
    Function: undefined
        
        Checks whether or not 'obj' is undefined
        
    Parameters:

        obj - {object} Object to test
        
    Returns:
        
        'this' object for chainability
*/
Should.prototype.undefined = function func_undefined(obj) {
    this.firstOperand = obj;
    this.eval(
        typeof(this.firstOperand) === 'undefined', 
        'Variable is not a type \'undefined\'', 
        'Variable is a type \'undefined\''
    );
    return this;
};


/*
    Function: instanceof
        
        Checks whether or not 'firstOperand' is an instanceof 'obj'
        
    Parameters:

        obj - {object} Object to test against
        
    Returns:
        
        'this' object for chainability
*/
Should.prototype.instanceof = function func_instanceof(obj) {
    this.secondOperand = obj;
    this.eval(
        this.firstOperand instanceof this.secondOperand, 
        'Variable is not an instance of the specified object', 
        'Variable is an instance of the specified object'
    );
    return this;
};


/*
    Function: property
        
        Checks whether or not 'obj' is an property of 'firstOperand'
        
    Parameters:

        obj - {object} Object to test against
        
    Returns:
        
        'this' object for chainability
*/
Should.prototype.property = function func_property(obj) {
    this.secondOperand = obj;
    this.eval(
        this.secondOperand in this.firstOperand, 
        'Objeect doesn not have the specified property', 
        'Objeect doesn has the specified property'
    );
    return this;
};


/*
    Function: ownProperty
        
        Checks whether or not 'obj' is an ownProperty of 'firstOperand'
        
    Parameters:

        obj - {object} Object to test against
        
    Returns:
        
        'this' object for chainability
*/
Should.prototype.ownProperty = function func_ownProperty(obj) {
    this.secondOperand = obj;
    this.eval(
        this.firstOperand.hasOwnProperty(this.secondOperand), 
        'The property is not the object\'s own property', 
        'The property is the object\'s own property'
    );
    return this;
};


/*
    Function: value
        
        Checks whether or not 'firstOperand' has a value of 'arg'
        
    Parameters:

        arg - {object} Object to test
        
    Returns:
        
        'this' object for chainability
*/
Should.prototype.value = function func_value(arg) {
    this.secondOperand = arg;
    if (this.firstOperand instanceof Array) {
        this.eval(
            (function () {
                if (this.firstOperand.indexOf(this.secondOperand) == -1) {
                    return false;
                } else {
                    return true
                }
            }).call(this), 
            'Array did not contain the specified value', 
            'Array contained the specified value'
         );
    }
    return this;
};


/*
    Function: key
        
        Checks whether or not object 'firstOperand' has a key 'obj'
        
    Parameters:

        obj - {String} String for which to test the existance of as a key
        
    Returns:
        
        'this' object for chainability
*/
Should.prototype.key = function func_key(obj) {
    this.secondOperand = obj
    if (this.firstOperand instanceof Array || this.firstOperand instanceof Object) {
        this.eval(
            this.secondOperand in this.firstOperand,
            'Object does not contain the specified key', 
            'Object contains the specified key'
        );
    }
    return this;
};


/*
    Function: exactly
        
        Checks whether or not object 'firstOperand' has the number of elements/properties as passed
        
    Parameters:

        arg - {Number} Number of elements/properties to test for existance
        
    Returns:
        
        'this' object for chainability
*/
Should.prototype.exactly = function func_exactly(arg) {
    this.secondOperand = arg;
    if (this.firstOperand instanceof Array) {
        this.eval(
            this.firstOperand.length === this.secondOperand, 
            'Array does not have the exact specified number of elements',
            'Array has the exact specified number of elements'
        );
    } else if (this.firstOperand instanceof Object) {
        this.eval(
            Object.keys(this.firstOperand).length === this.secondOperand, 
            'Object does not have the exact specified number of properties', 
            'Object has the exact specified number of properties'
        );
    }
    return this;
};


/*
    Function: lessthan
        
        Checks whether or not object 'firstOperand' has less than the number of elements/properties as passed
        
    Parameters:

        arg - {Number} Number of elements/properties to test for existance
        
    Returns:
        
        'this' object for chainability
*/
Should.prototype.lessthan = function func_lessthan(arg) {
    this.secondOperand = arg;
    if (this.firstOperand instanceof Array) {
        this.eval(
            this.firstOperand.length < this.secondOperand, 
            'Array does not have less than specified number of elements', 
            'Array has less than the specified number of elements'
        );
    } else if (this.firstOperand instanceof Object) {
        this.eval(
            Object.keys(this.firstOperand).length < this.secondOperand, 
            'Object does not have less than the specified number of properties', 
            'Object has less than the specified number of properties'
        );
    }
    return this;
};


/*
    Function: morethan
        
        Checks whether or not object 'firstOperand' has more than the number of elements/properties as passed
        
    Parameters:

        arg - {Number} Number of elements/properties to test for existance
        
    Returns:
        
        'this' object for chainability
*/
Should.prototype.morethan = function func_morethan(arg) {
    this.secondOperand = arg;
    if (this.firstOperand instanceof Array) {
        this.eval(
            this.firstOperand.length > this.secondOperand, 
            'Array does not have more than specified number of elements', 
            'Array has more than the specified number of elements'
        );
    } else if (this.firstOperand instanceof Object) {
        this.eval(
            Object.keys(this.firstOperand).length > this.secondOperand, 
            'Object does not have more than the specified number of properties', 
            'Object has more than the specified number of properties'
        );
    }
    return this;
};


/*
    Function: false
        
        Checks whether or not object 'firstOperand' is false
        
    Parameters:

        arg - {Boolean} The Boolean expression to be tested
        
    Returns:
        
        'this' object for chainability
*/
Should.prototype.false = function func_false(arg) {
    this.firstOperand = arg;
    this.eval(
        this.firstOperand == false, 
        'Value is not false', 
        'Value is false'
    );
    return this;
};


/*
    Function: true
        
        Checks whether or not object 'firstOperand' is true
        
    Parameters:

        arg - {Boolean} The Boolean expression to be tested
        
    Returns:
        
        'this' object for chainability
*/
Should.prototype.true = function func_true(arg) {
    this.firstOperand = arg;
    this.eval(
        this.firstOperand == true, 
        'Value is not true', 
        'Value is true'
    );
    return this;
};


/*
    Function: equal
        
        Checks whether or not object 'firstOperand' is equal to the specified object
        
    Parameters:

        obj - {object} The object to compare 'firstOperand' to
        
    Returns:
        
        'this' object for chainability
*/
Should.prototype.equal = function func_equal(obj) {
    this.secondOperand = obj;
    this.eval(
        this._equiv(this.firstOperand, this.secondOperand), 
        'Specified values are not equal', 
        'Specified values are equal'
    );
    return this;
};


/*
 * This bit is taken from QUnit. 
 * 
 * http://docs.jquery.com/QUnit
 *
 * Copyright (c) 2011 John Resig, Jörn Zaefferer
 * Dual licensed under the MIT
 * or GPL licenses.
 */
/*
    Function: objectType
        
        Find the type of a specified object
        
    Parameters:

        obj - {object} The object for which to find the type of
        
    Returns:
        
        The type of the specified object
*/
Should.prototype.objectType = function func_objectType(obj) {
    if (typeof obj === "undefined") {
        return "undefined";

        // consider: typeof null === object
    }
    if (obj === null) {
        return "null";
    }

    var type = Object.prototype.toString.call(obj).match(/^\[object\s(.*)\]$/)[1] || '';

    switch (type) {
    case 'Number':
        if (isNaN(obj)) {
            return "nan";
        } else {
            return "number";
        }
    case 'String':
    case 'Boolean':
    case 'Array':
    case 'Date':
    case 'RegExp':
    case 'Function':
        return type.toLowerCase();
    }
    if (typeof obj === "object") {
        return "object";
    }
    return undefined;
},


/*      Discussions and reference (at) <http://philrathe.com/articles/equiv>
		Test suites (at) <http://philrathe.com/tests/equiv>
		Author: Philippe Rathé prathe@gmail.com
*/
/*
    Function: _equiv
        
        Test for equality any JavaScript type
        
    Parameters:

        obj - {object} The object for which to find the type of
        
    Returns:
        
        The type of the specified object
*/
Should.prototype._equiv = function () {
    var innerEquiv; // the real equiv function
    var callers = []; // stack to decide between skip/abort functions
    var parents = []; // stack to avoiding loops from circular referencing
    // Call the o related callback with the given arguments.


    function bindCallbacks(o, callbacks, args) {
        var prop = Should.prototype.objectType(o);
        if (prop) {
            if (Should.prototype.objectType(callbacks[prop]) === "function") {
                return callbacks[prop].apply(callbacks, args);
            } else {
                return callbacks[prop]; // or undefined
            }
        }
    }

    var callbacks = function () {

        // for string, boolean, number and null


        function useStrictEquality(b, a) {
            if (b instanceof a.constructor || a instanceof b.constructor) {
                // to catch short annotaion VS 'new' annotation of a declaration
                // e.g. var i = 1;
                //      var j = new Number(1);
                return a == b;
            } else {
                return a === b;
            }
        }

        return {
            "string": useStrictEquality,
            "boolean": useStrictEquality,
            "number": useStrictEquality,
            "null": useStrictEquality,
            "undefined": useStrictEquality,

            "nan": function (b) {
                return isNaN(b);
            },

            "date": function (b, a) {
                return Should.prototype.objectType(b) === "date" && a.valueOf() === b.valueOf();
            },

            "regexp": function (b, a) {
                return Should.prototype.objectType(b) === "regexp" && a.source === b.source && // the regex itself
                a.global === b.global && // and its modifers (gmi) ...
                a.ignoreCase === b.ignoreCase && a.multiline === b.multiline;
            },

            // - skip when the property is a method of an instance (OOP)
            // - abort otherwise,
            //   initial === would have catch identical references anyway
            "function": function () {
                var caller = callers[callers.length - 1];
                return caller !== Object && typeof caller !== "undefined";
            },

            "array": function (b, a) {
                var i, j, loop;
                var len;

                // b could be an object literal here
                if (!(Should.prototype.objectType(b) === "array")) {
                    return false;
                }

                len = a.length;
                if (len !== b.length) { // safe and faster
                    return false;
                }

                //track reference to avoid circular references
                parents.push(a);
                for (i = 0; i < len; i++) {
                    loop = false;
                    for (j = 0; j < parents.length; j++) {
                        if (parents[j] === a[i]) {
                            loop = true; //dont rewalk array
                        }
                    }
                    if (!loop && !innerEquiv(a[i], b[i])) {
                        parents.pop();
                        return false;
                    }
                }
                parents.pop();
                return true;
            },

            "object": function (b, a) {
                var i, j, loop;
                var eq = true; // unless we can proove it
                var aProperties = [],
                    bProperties = []; // collection of strings
                // comparing constructors is more strict than using instanceof
                if (a.constructor !== b.constructor) {
                    return false;
                }

                // stack constructor before traversing properties
                callers.push(a.constructor);
                //track reference to avoid circular references
                parents.push(a);

                for (i in a) { // be strict: don't ensures hasOwnProperty and go deep
                    loop = false;
                    for (j = 0; j < parents.length; j++) {
                        if (parents[j] === a[i]) loop = true; //don't go down the same path twice
                    }
                    aProperties.push(i); // collect a's properties
                    if (!loop && !innerEquiv(a[i], b[i])) {
                        eq = false;
                        break;
                    }
                }

                callers.pop(); // unstack, we are done
                parents.pop();

                for (i in b) {
                    bProperties.push(i); // collect b's properties
                }

                // Ensures identical properties name
                return eq && innerEquiv(aProperties.sort(), bProperties.sort());
            }
        };
    }();

    innerEquiv = function () { // can take multiple arguments
        var args = Array.prototype.slice.apply(arguments);
        if (args.length < 2) {
            return true; // end transition
        }

        return (function (a, b) {
            if (a === b) {
                return true; // catch the most you can
            } else if (a === null || b === null || typeof a === "undefined" || typeof b === "undefined" || Should.prototype.objectType(a) !== Should.prototype.objectType(b)) {
                return false; // don't lose time with error prone cases
            } else {
                return bindCallbacks(a, callbacks, [b, a]);
            }

            // apply transition with (1..n) arguments
        })(args[0], args[1]) && arguments.callee.apply(this, args.splice(1, args.length - 1));
    };

    return innerEquiv;

}();


/*
    Add 'should' as a property of Object and on every call of Object.should return a new instance of 'Should'
*/
Object.defineProperty(Object.prototype, 'should', {
    set: function () {},
    get: function () {
        return new Should(this);
    }
});


/*
    Function: setAlias
        
        Set an alias for 'should'
        Caution: The more aliases added the more polluted Object is going to get!
        
    Parameters:

        name - {String} An alias for should to be added as a property of Object
*/
module.exports.setAlias = function(name) {
    if(typeof name == 'string') {
        Object.defineProperty(Object.prototype, name, {
            set: function () {},
            get: function () {
                return new Should(this);
            }
        });
    }
};

