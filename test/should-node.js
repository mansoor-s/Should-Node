var assert = require('assert'),
    vows = require('vows'),
    util = require('util');
    
require('../index.js').setAlias('must');
    


var no_errors = [
    
    function checkInstantiation() {
        var obj = new Object;
        var could = obj.must;
        could.must.be.an.instanceof(Object);
    },
    
    function shouldNotBeNull() {
        this.should.not.be.null({});
    },
    
    function shouldBeNull() {
        this.should.be.null(null);
    },
    
    function shouldBeATypeof() {
        var obj = [];
        obj.should.be.a.typeof('array');
    },
    
    function shouldNotBeATypeof() {
        var obj = 'hello';
        obj.should.not.be.a.typeof('object');
    },
    
    function shouldBeAnObject() {
        var obj = {};
        obj.should.be.an.object;
    },
    
    function shouldBeAObject() {
        var obj = new Object;
        obj.should.be.a.object;
    },
    
    function shouldNotBeAnObject() {
        var obj = "hello";
        obj.should.not.be.an.object;
    },
    
    function shouldNotBeAObject() {
        var obj = "world";
        obj.should.not.be.a.object;
    },
    
    function shouldBeAFunction() {
        var func = function() {};
        func.should.be.a.function;
    },
    
    function shouldNotBeAFunction() {
        var func = 'robot';
        func.should.not.be.a.function;
    },
    
    function shouldBeAString() {
        var string = 'theory';
        string.should.be.a.string;
    },
    
    function shouldNotBeAString() {
        var string = 123;
        string.should.not.be.a.string;
    },
    
    function shouldBeANumber() {
        var num = 567;
        num.should.be.a.number;
    },
    
    function shouldNotBeANumber() {
        var str = 'orange';
        str.should.not.be.a.number;
    },
    
    function shouldBeABoolean() {
        var bool = true;
        bool.should.be.a.boolean;
    },
    
    function shouldNotBeABoolean() {
        var obj = {};
        obj.should.not.be.a.boolean;
    },
    
    function shouldBeDefined() {
        var obj = {};
        this.should.be.defined(obj);
    },
    
    function shouldNotBeDefined() {
        var obj;
        this.should.not.be.defined(obj);
    },
    
    function shouldBeUndefined() {
        var obj;
        this.should.be.undefined(obj);
    },
    
    function shouldNotBeUndefined() {
        var obj = {};
        this.should.not.be.undefined(obj);
    },
    
    function shouldBeAnArray() {
        var obj = [];
        obj.should.be.an.array;
    },
    
    function shouldBeAArray() {
        var obj = [];
        obj.should.be.a.array;
    },
    
    function shouldNotBeAnArray() {
        var obj = 'greets';
        obj.should.not.be.an.array;
    },
    
    function shouldNotBeAArray() {
        var obj = 'greets';
        obj.should.not.be.a.array;
    },
    
    function shouldBeNan() {
        var str = 'earth';
        str.should.be.nan;
    },
    
    function shouldBeANan() {
        var str = "oranges";
        str.should.be.a.nan;
    },
    
    function shouldNotBeNan() {
        var num = "123";
        num.should.not.be.nan;
    },
    
    function shouldNotBeANan() {
        var num = "";
        num.should.not.be.nan;
    },
    
    function shouldBeAnInstanceof() {
        var Obj = function() { this.foo = "bar"; };
        var obj = new Obj();
        
        obj.should.be.an.instanceof(Obj);
    },
    
    function shouldBeAInstanceof() {
        var Obj = function() { this.foo = "bar"; };
        var obj = new Obj();
        
        obj.should.be.an.instanceof(Obj);
    },
    
    function shouldNotBeAnInstanceof() {
        var Obj = function() { this.foo = "bar"; };
        var obj = new Array();
        
        obj.should.not.be.an.instanceof(Obj);
    },
    
    function shouldNotBeAInstanceof() {
        var Obj = function() { this.foo = "bar"; };
        var obj = new Array();
        
        obj.should.not.be.a.instanceof(Obj);
    },
    
    function shouldHaveProperty() {
        var obj = { foo: "bar" };
        obj.should.have.property('foo');
    },
    
    function shouldNotHaveProperty() {
        var obj = { foo: "bar" };
        obj.should.not.have.property('moo');
    },
    
    function shouldHaveOwnproperty() {
        var Obj = function() {
            this.foo = 'bar';
        };
        
        Obj.prototype.earth = 'planet';
        
        var obj = new Obj;
        
        obj.should.have.ownProperty('foo');
    },
    
    function shouldNotHaveOwnproperty() {
        var Obj = function() {
            this.foo = 'bar';
        };
        
        Obj.prototype.earth = 'planet';
        
        var obj = new Obj;
        
        obj.should.not.have.ownProperty('earth');
    },
    
    function shouldBeEmpty() {
        var array = [];
        array.should.be.empty;
    },
    
    function shouldNotBeEmpty() {
        var array = [1,2];
        array.should.not.be.empty;
    },

    function shouldHaveValue() {
        var array = [1,2];
        array.should.have.value(2);
    },
    
    function shouldNotHaveValue() {
        var array = [1,3];
        array.should.not.have.value(2);
    },
    
    function obj_shouldHaveKey() {
        var obj = {aKey: 'unlock'};
        obj.should.have.key('aKey');
    },
    
    function array_shouldHaveKey() {
        var array = [];
        array['some_key'] = "some value";
        array.should.have.key('some_key');
    },
    
    function obj_shouldNotHaveKey() {
        var obj = {aKey: 'unlock'};
        obj.should.not.have.key('a_fake_key');
    },
    
    function array_shouldNotHaveKey() {
        var array = [];
        array['some_key'] = "some value";
        array.should.not.have.key('some_other_key');
    },
    
    function shouldHaveExactly() {
        var array = [1,32,23,32];
        array.should.have.exactly(4).elements;
    },
    
    function shouldNotHaveExactly() {
        var array = [1,32,23,32];
        array.should.not.have.exactly(9).elements;
    },
    
    function obj_shouldHaveExactly() {
        var obj = {a: 'abc', b: 123};
        obj.should.have.exactly(2).properties;
    },
    
    function obj_shouldNotHaveExactly() {
        var obj = {hello: 'world'};
        obj.should.not.have.exactly(9).properties;
    },
    
    function shouldHaveLessthan() {
        var array = [1,32,23,32];
        array.should.have.lessthan(20).elements;
    },
    
    function shouldNotHaveLessthan() {
        var array = [1,32,23,32];
        array.should.not.have.lessthan(3).elements;
    },
    
    function obj_shouldHaveLessthan() {
        var obj = {a: 'abc', b: 123};
        obj.should.have.lessthan(5).properties;
    },
    
    function obj_shouldNotHaveLessthan() {
        var obj = {hello: 'world'};
        obj.should.not.have.lessthan(1).properties;
    },
    
    function shouldHaveMorethan() {
        var array = [1,32,23,32];
        array.should.have.morethan(2).elements;
    },
    
    function shouldNotHaveMorethan() {
        var array = [1,32,23,32];
        array.should.not.have.morethan(6).elements;
    },
    
    function obj_shouldHaveMorethan() {
        var obj = {a: 'abc', b: 123};
        obj.should.have.morethan(0).properties;
    },
    
    function obj_shouldNotHaveMorethan() {
        var obj = {hello: 'world', 'bye': 'thanks for all the fish'};
        obj.should.not.have.morethan(2).properties;
    },
    
    function shouldBeFalse() {
        this.should.be.false(false);
    },
    
    function shouldNotBeFalse() {
        this.should.not.be.false(true);
    },
    
    function shouldBeTrue() {
        this.should.be.true(true);
    },
    
    function shouldNotBeTrue() {
        this.should.not.be.true(false);
    },
    
    function obj_shouldEqual() {
        var obj1 = {propAlpha: 55, propBeta: 'green'};
        var obj2 = {propAlpha: 55, propBeta: 'green'};
        
        obj1.should.equal(obj2);
    },
    
    function obj_shouldNotEqual() {
        var obj1 = {propAlpha: 55, propBeta: 'green'};
        var obj2 = {propAlpha: 1, propBeta: 'yellow'};
        
        obj1.should.not.equal(obj2);
    },
    
    function array_shouldEqual() {
        var array1 = [55,'green'];
        var array2 = [55, 'green'];
        
        array1.should.equal(array2);
    },
    
    function array_shouldNotEqual() {
        var array1 = ['green'];
        var array2 = [55, 'green'];
        
        array1.should.not.equal(array2);
    },
    
    function str_shouldEqual() {
        ('FOOO').should.equal('FOOO');
    },
    
    function str_shouldNotEqual() {
        ('FOOO').should.not.equal('BAAR');
    },
    
    function num_shouldEqual() {
        (66).should.equal(66);
    },
    
    function num_shouldNotEqual() {
        (66).should.not.equal(33);
    },
    
    function nan_shouldEqual() {
        Number.NaN.should.equal(NaN);
    },
    
    function nan_shouldNotEqual() {
        Number.NaN.should.not.equal(2);
    },
    
    function regexp_shouldEqual() {
        /[a-z]/.should.equal(/[a-z]/);
    },
    
    function regexp_shouldNotEqual() {
        /[a-z]/.should.not.equal(/[1-9]/);
    }
  
];


/****************************************************************************************
*    expect_errors 
*
*****************************************************************************************/
var expect_errors = [
    function shouldNotBeNull() {
        this.should.not.be.null(null);
    },
    
    function shouldBeNull() {
        this.should.be.null({});
    },
    
    function shouldBeATypeof() {
        var obj = [];
        obj.should.be.a.typeof('string');
    },

    function shouldNotBeATypeof() {
        var obj = 'hello';
        obj.should.not.be.a.typeof('string');
    },
    
    function shouldBeAnObject() {
        var obj = "hello";
        obj.should.be.an.object;
    },
    
    function shouldBeAObject() {
        var obj = "world";
        obj.should.be.a.object;
    },
    
    function shouldNotBeAnObject() {
        var obj = {apples: 'oranges'};
        obj.should.not.be.an.object;
    },
    
    function shouldNotBeAObject() {
        var obj = new Object();
        obj.should.not.be.a.object;
    },
    
    function shouldBeAFunction() {
        var func = 'superstring';
        func.should.be.a.function;
    },
    
    function shouldNotBeAFunction() {
        var func = function() {};
        func.should.not.be.a.function;
    },
    
    function shouldBeAString() {
        var num =  123;
        num.should.be.a.string;
    },
    
    function shouldNotBeAString() {
        var string = 'theory';
        string.should.not.be.a.string;
    },
    
    function shouldBeANumber() {
        var str = 'orange';
        str.should.be.a.number;
    },
    
    function shouldNotBeANumber() {
        var num = 567;
        num.should.not.be.a.number;
    },
    
    function shouldNotBeABoolean() {
        var bool = true;
        bool.should.not.be.a.boolean;
    },
    
    function shouldBeABoolean() {
        var obj = {};
        obj.should.be.a.boolean;
    },
    
    function shouldBeDefined() {
        var obj;
        this.should.be.defined(obj);
    },
    
    function shouldNotBeDefined() {
        var obj = {};
        this.should.not.be.defined(obj);
    },
    
    function shouldBeUndefined() {
        var obj = {};
        this.should.be.undefined(obj);
    },
    
    function shouldNotBeUndefined() {
        var obj;
        this.should.not.be.undefined(obj);
    },
    
    function shouldBeAnArray() {
        var obj = 'greets';
        obj.should.be.an.array;
    },
    
    function shouldBeAArray() {
        var obj = 'greets';
        obj.should.be.a.array;
    },
    
    function shouldNotBeAnArray() {
        var obj = [];
        obj.should.not.be.an.array;
    },
    
    function shouldNotBeAArray() {
        var obj = [];
        obj.should.not.be.a.array;
    },
    
    function shouldBeNan() {
        var str = '123';
        str.should.be.nan;
    },
    
    function shouldBeANan() {
        var num = 42;
        num.should.be.a.nan;
    },
    
    function shouldNotBeNan() {
        var num = 'saturn';
        num.should.not.be.nan;
    },
    
    
    function shouldNotBeANan() {
        var num = 'mars';
        num.should.not.be.nan;
    },
    
    function shouldBeAnInstanceof() {
        var Obj = function() { this.foo = "bar"; };
        var obj = new Array();
        
        obj.should.be.an.instanceof(Obj);
    },
    
    function shouldBeAInstanceof() {
        var Obj = function() { this.foo = "bar"; };
        var obj = new Array();
        
        obj.should.be.an.instanceof(Obj);
    },
    
    function shouldNotBeAnInstanceof() {
        var Obj = function() { this.foo = "bar"; };
        var obj = new Obj();
        
        obj.should.not.be.an.instanceof(Obj);
    },
    
    function shouldNotBeAInstanceof() {
        var Obj = function() { this.foo = "bar"; };
        var obj = new Obj();
        
        obj.should.not.be.a.instanceof(Obj);
    },
    
    function shouldHaveProperty() {
        var obj = { foo: "bar" };
        obj.should.have.property('moo');
    },
    
    function shouldNotHaveProperty() {
        var obj = { foo: "bar" };
        obj.should.not.have.property('foo');
    },
    
    function shouldHaveOwnproperty() {
        var Obj1 = function() {
            this.foo = 'bar';
        };
        
        Obj1.prototype.earth = 'planet';
        
        var obj = new Obj1;
        
        obj.should.have.ownProperty('earth');
    },
    
    function shouldNotHaveOwnproperty() {
        var Obj1 = function() {
            this.foo = 'bar';
        };
        
        Obj1.prototype.earth = 'planet';
        
        var obj = new Obj1;
        
        obj.should.not.have.ownProperty('foo');
    },
    
    function shouldBeEmpty() {
        var array = [1,2];
        array.should.be.empty;
    },
    
    function shouldBeEmpty() {
        var array = [];
        array.should.not.be.empty;
    },
    
    function shouldHaveValue() {
        var array = [1,2];
        array.should.have.value(4);
    },
    
    function shouldNotHaveValue() {
        var array = [1,2];
        array.should.not.have.value(2);
    },
    
    function obj_shouldHaveKey() {
        var obj = {aKey: 'unlock'};
        obj.should.have.key('foo');
    },
    
    function array_shouldHaveKey() {
        var array = [];
        array['some_key'] = "some value";
        array.should.have.key('foo');
    },
    
    function obj_shouldNotHaveKey() {
        var obj = {aKey: 'unlock'};
        obj.should.not.have.key('aKey');
    },
    
    function array_shouldNotHaveKey() {
        var array = [];
        array['some_key'] = "some value";
        array.should.not.have.key('some_key');
    },
    
    function shouldHaveExactly() {
        var array = [1,32,23,32];
        array.should.have.exactly(2).elements;
    },
    
    function shouldNotHaveExactly() {
        var array = [1,32,23,32];
        array.should.not.have.exactly(4).elements;
    },
    
    function obj_shouldHaveExactly() {
        var obj = {a: 'abc', b: 123};
        obj.should.have.exactly(9).elements;
    },
    
    function obj_shouldNotHaveExactly() {
        var obj = {hello: 'world'};
        obj.should.not.have.exactly(1).elements;
    },
    
    function shouldHaveLessthan() {
        var array = [1,32,23,32];
        array.should.have.lessthan(2).elements;
    },
    
    function shouldNotHaveLessthan() {
        var array = [1,32,23,32];
        array.should.not.have.lessthan(10).elements;
    },
    
    function obj_shouldHaveLessthan() {
        var obj = {a: 'abc', b: 123};
        obj.should.have.lessthan(2).properties;
    },
    
    function obj_shouldNotHaveLessthan() {
        var obj = {hello: 'world'};
        obj.should.not.have.lessthan(2).properties;
    },
    
    
    function shouldHaveMorethan() {
        var array = [1,32,23,32];
        array.should.have.morethan(10).elements;
    },
    
    function shouldNotHaveMorethan() {
        var array = [1,32,23,32];
        array.should.not.have.morethan(2).elements;
    },
    
    function obj_shouldHaveMorethan() {
        var obj = {a: 'abc', b: 123};
        obj.should.have.morethan(8).properties;
    },
    
    function obj_shouldNotHaveMorethan() {
        var obj = {hello: 'world', 'bye': 'thanks for all the fish'};
        obj.should.not.have.morethan(1).properties;
    },
    
    function shouldBeFalse() {
        this.should.be.false(true);
    },
    
    function shouldNotBeFalse() {
        this.should.not.be.false(false);
    },
    
    function shouldBeTrue() {
        this.should.be.true(false);
    },
    
    function shouldNotBeTrue() {
        this.should.not.be.true(true);
    },
    
    function obj_shouldEqual() {
        var obj1 = {propAlpha: 55, propBeta: 'green'};
        var obj2 = {propBeta: 'pink'};
        
        obj1.should.equal(obj2);
    },
    
    function obj_shouldNotEqual() {
        var obj1 = {propAlpha: 55, propBeta: 'green'};
        var obj2 = {propAlpha: 55, propBeta: 'green'};
        
        obj1.should.not.equal(obj2);
    },
    
    function array_shouldEqual() {
        var array1 = [55,'green'];
        var array2 = [1,];
        
        array1.should.equal(array2);
    },
    
    function array_shouldNotEqual() {
        var array1 = [55, 'green'];
        var array2 = [55, 'green'];
        
        array1.should.not.equal(array2);
    },
    
    function str_shouldEqual() {
        ('FOOO').should.equal('food');
    },
    
    function str_shouldNotEqual() {
        ('FOOO').should.not.equal('FOOO');
    },
    
    function num_shouldEqual() {
        (66).should.equal(0);
    },
    
    function num_shouldNotEqual() {
        (66).should.not.equal(66);
    },
    
    function nan_shouldEqual() {
        Number.NaN.should.equal(0);
    },
    
    function nan_shouldNotEqual() {
        Number.NaN.should.not.equal(NaN);
    },
    
    function regexp_shouldEqual() {
        /[a-z]/.should.equal(/[1-5]/);
    },
    
    function regexp_shouldNotEqual() {
        /[a-z]/.should.not.equal(/[a-z]/);
    }
    
];


function does_not_throw(array) {
    array.forEach(function(elem, pos) {
        assert.doesNotThrow(elem, function error_handler(err) {
            console.log('error at: ' + pos);
            console.log(err.message);
            console.log(elem.toString());
            //process.exit(1);
        },
        'Unexpected Error << The best kind!'
        );
    });
}

function throws_errors(array) {
    array.forEach(function(elem, pos) {
        assert.throws(elem);
    });
}
does_not_throw(no_errors);
throws_errors(expect_errors);
