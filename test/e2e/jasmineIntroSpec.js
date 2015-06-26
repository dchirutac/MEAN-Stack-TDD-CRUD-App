// (function(){
//   'use strict';
//
//   #<{(| Protractor specs for end-to-end testing |)}>#
//   describe('A suite', function(){
//     it('contains a spec with an expectation.', function(){
//       expect(true).toBe(true);
//     });
//   });
//
//   describe('A suite is just a function', function(){
//     it('and so are the specs.', function(){
//       var x = true;
//
//       expect(x).toBe(true);
//     });
//   });
//
//   describe('A suite starts with a `describe` global function', function(){
//     it('and the spec is the `it` global function.', function(){
//       expect(true).toBe(true);
//     });
//   });
//
//
//   describe('The `toBe` matcher compares with ===,', function(){
//     it('it has a positive case.', function(){
//       expect(true).toBe(true);
//     });
//
//     it('it can have a negative case.', function(){
//       expect(false).not.toBe(true);
//     });
//   });
//
//   describe('Included matchers:', function(){
//     describe('The `toBe` matcher:', function(){
//       it('compares with the ===.', function(){
//         var a = 12;
//         var b = a;
//
//         expect(a).toBe(b);
//         expect(a).not.toBe(null);
//       });
//     });
//
//     describe('The `toEqual` matcher:', function(){
//       it('works for simple literals & variables.', function(){
//         var a = 12;
//
//         expect(a).toEqual(12);
//       });
//
//       it('should work for objects.', function(){
//         var foo = {a: 10, b: 23};
//         var bar = {a: 10, b: 23};
//
//         expect(foo).toEqual(bar);
//       });
//     });
//
//     describe('The `toMatch` matcher:', function(){
//       it('is for regular expressions.', function(){
//         var message = 'foo bar baz';
//
//         expect(message).toMatch(/bar/);
//         expect(message).toMatch('bar');
//         expect(message).not.toMatch('/quux/');
//       });
//     });
//
//     describe('The `toBeDefined` matcher:', function(){
//       it('compares against `undefined`.', function(){
//         var a = {foo: 'foo'};
//
//         expect(a.foo).toBeDefined();
//         expect(a.bar).not.toBeDefined();
//       });
//     });
//
//     describe('The `toBeUndefined` matcher:', function(){
//       it('compares against `undefined`.', function(){
//         var a = {foo: 'foo'};
//
//         expect(a.foo).not.toBeUndefined();
//         expect(a.bar).toBeUndefined();
//       });
//     });
//
//     describe('The `toBeNull` matcher:', function(){
//       it('compares against null.', function(){
//         var a = null;
//         var foo = 'foo';
//
//         expect(null).toBeNull();
//         expect(a).toBeNull();
//         expect(foo).not.toBeNull();
//       });
//     });
//
//     describe('The `toBeTruthy` matcher:', function(){
//       it('is for boolean casting testing.', function(){
//         var a = null;
//         var foo = 'foo';
//
//         expect(foo).toBeTruthy();
//         expect(a).not.toBeTruthy();
//       });
//     });
//
//     describe('The `toBeFalsy` matcher:', function(){
//       it('is for boolean casting testing.', function(){
//         var a = null;
//         var foo = 'foo';
//
//         expect(a).toBeFalsy();
//         expect(foo).not.toBeFalsy();
//       });
//     });
//
//     describe('The `toContain` matcher:', function(){
//       it('is for finding an item in an array.', function(){
//         var a = ['foo', 'bar', 'baz'];
//
//         expect(a).toContain('baz');
//         expect(a).not.toContain('x');
//       });
//     });
//
//     describe('The `toBeLessThan` matcher:', function(){
//       it('is for mathematical comparisons.', function(){
//         var pi = 3.1415926;
//         var x = 2;
//
//         expect(x).toBeLessThan(pi);
//         expect(pi).not.toBeLessThan(x);
//       });
//     });
//
//     describe('The `toBeGreaterThan` matcher:', function(){
//       it('is for mathematical comparisons.', function(){
//         var pi = 3.1415926;
//         var x = 2;
//
//         expect(pi).toBeGreaterThan(x);
//         expect(x).not.toBeGreaterThan(pi);
//       });
//     });
//
//     describe('The `toBeCloseTo` matcher:', function(){
//       it('is for precision math comparison.', function(){
//         var pi = 3.1415926;
//         var x = 3;
//
//         expect(pi).toBeCloseTo(x, 0);
//         expect(pi).not.toBeCloseTo(x, 2);
//       });
//     });
//
//     describe('The `toThrow` matcher:', function(){
//       it('if for testing if a function throws an exception.', function(){
//         var foo = function(){
//           return 1 + 2;
//         };
//         var bar = function(){
//           return a + 1;
//         };
//
//         expect(foo).not.toThrow();
//         expect(bar).toThrow();
//       });
//     });
//
//     describe('The `toThrowError` matcher:', function(){
//       it('is for testing a specific thrown exception.', function(){
//         var foo = function(){
//           throw new TypeError('foo bar baz');
//         };
//
//         expect(foo).toThrowError('foo bar baz');
//         expect(foo).toThrowError(/bar/);
//         expect(foo).toThrowError(TypeError);
//         expect(foo).toThrowError(TypeError, 'foo bar baz');
//       });
//     });
//   });
//
//   describe('A spec', function(){
//     it('is just a function, so it can contain any code.', function(){
//       var foo = 0;
//       foo += 1;
//
//       expect(foo).toEqual(1);
//     });
//
//     it('can have more than one expectation.', function(){
//       var foo = 0;
//       foo += 1;
//
//       expect(foo).toEqual(1);
//       expect(true).toEqual(true);
//     });
//   });
//
//   describe('A spec using `beforeEach` & `afterEach`:', function(){
//     var foo = 0;
//
//     beforeEach(function(){
//       foo += 1;
//     });
//
//     afterEach(function(){
//       foo = 0;
//     });
//
//     it('is just a function, so it can contain any code.', function(){
//       expect(foo).toEqual(1);
//     });
//
//     it('can have more than one expectation.', function(){
//       expect(foo).toEqual(1);
//       expect(true).toEqual(true);
//     });
//   });
//
//   describe('A spec using `beforeAll` and `afterAll`:', function() {
//     var foo;
//
//     beforeAll(function() {
//       foo = 1;
//     });
//
//     afterAll(function() {
//       foo = 0;
//     });
//
//     it('sets the initial value of foo before specs run.', function() {
//       expect(foo).toEqual(1);
//       foo += 1;
//     });
//
//     it('does not reset foo between specs.', function() {
//       expect(foo).toEqual(2);
//     });
//   });
//
//   describe('A spec', function(){
//     beforeEach(function(){
//       this.foo = 0;
//     });
//
//     it('can use `this` to share state.', function(){
//       expect(this.foo).toEqual(0);
//       this.foo = 23;
//       this.bar = 'test polution?';
//     });
//
//     it('prevents test pollution by having an empty `this` created for the next spec.', function(){
//       expect(this.foo).toEqual(0);
//       expect(this.bar).toBeUndefined();
//       expect(this.bar).toBe(undefined);
//     });
//   });
//
//   describe('A spec', function(){
//     var foo;
//
//     beforeEach(function(){
//       foo = 0;
//       foo += 1;
//     });
//
//     afterEach(function(){
//       foo = 0;
//     });
//
//     it('is just a function, so it can contain any code.', function(){
//       expect(foo).toEqual(1);
//     });
//
//     it('can have more than one expectation.', function(){
//       expect(foo).toEqual(1);
//       expect(true).toEqual(true);
//     });
//
//     describe('Nested inside a second `describe`', function(){
//       var bar;
//
//       beforeEach(function() {
//         bar = 1;
//       });
//
//       it('can reference both scopes as needed.', function(){
//         expect(foo).toEqual(bar);
//       });
//     });
//   });
//
//   // Focusing specs
//   // describe('Focused specs', function(){
//   //   fit('is focused and will run.', function(){
//   //     expect(true).toBeTruthy();
//   //   });
//   //
//   //   it('is not focused & will not run.', function(){
//   //     expect(true).toBeFalsy();
//   //   });
//   //
//   //   fdescribe('Focused describe', function(){
//   //     it('will run.', function(){
//   //       expect(true).toBeTruthy();
//   //     });
//   //
//   //     it('will also be run.', function(){
//   //       expect(true).toBeTruthy();
//   //     });
//   //   });
//   //
//   //   fdescribe('Focused describe', function(){
//   //     fit('is focused and will run.', function(){
//   //       expect(true).toBeTruthy();
//   //     });
//   //
//   //     it('is not focused and will not run.', function(){
//   //       expect(true).toBeTruthy();
//   //     });
//   //   });
//   // });
//
//   // Suites and specs can be disabled with the xdescribe and xit functions, respectively.
//   // These suites and any specs inside them are skipped when run and thus their results
//   // will not appear in the results.
//
//   xdescribe('A spec', function(){
//     var foo;
//
//     beforeEach(function(){
//       foo = 0;
//       foo += 1;
//     });
//
//     it('can be disabled using `xdescribe`.', function(){
//       expect(foo).toEqual(1);
//     });
//
//   });
//
//
//
//   // Pending specs do not run, but their names will show up in the results as `pending`
//   describe('Pending specs', function(){
//     xit('can be declared with `xit`.', function(){
//       expect(true).toBe(false);
//     });
//
//     // it('can be declared with `it` but without a function.');
//
//     // it('can be declared by calling `pending` in the spec body.', function(){
//     //   expect(true).toBe(false);
//     //   pending('this is why it is pending.');
//     // });
//   });
//
//   describe('A spy', function(){
//     var foo;
//     var bar = null;
//
//     beforeEach(function(){
//       foo = {
//         setBar: function(value){
//           bar = value;
//         }
//       };
//       spyOn(foo, 'setBar');
//
//       foo.setBar(1023);
//       foo.setBar(9999, 'another param');
//     });
//
//     it('tracks that the spy was called.', function(){
//       expect(foo.setBar).toHaveBeenCalled();
//     });
//
//     it('tracks all the arguments of its calls.', function(){
//       expect(foo.setBar).toHaveBeenCalledWith(1023);
//       expect(foo.setBar).toHaveBeenCalledWith(9999, 'another param');
//     });
//
//     it('stops all execution on a function.', function(){
//       expect(bar).toBeNull();
//     });
//   });
//
//   describe('A spy, when configured to `callThrough`', function(){
//     var foo;
//     var bar;
//     var fetchedBar;
//
//     beforeEach(function(){
//       foo = {
//         setBar: function(value){
//           bar = value;
//         },
//         getBar: function(){
//           return bar;
//         }
//       };
//
//       spyOn(foo, 'getBar').and.callThrough();
//
//       foo.setBar(1023);
//       fetchedBar = foo.getBar();
//     });
//
//     it('tracks that the spy was called.', function(){
//       expect(foo.getBar).toHaveBeenCalled();
//     });
//
//     it('should not effect other functions.', function(){
//       expect(bar).toEqual(1023);
//     });
//
//     it('when called returns the requested value.', function(){
//       expect(fetchedBar).toEqual(1023);
//     });
//   });
//
//   describe('A spy, when configured to fake a return value', function(){
//     var foo;
//     var bar;
//     var fetchedBar;
//
//     beforeEach(function(){
//       foo = {
//         setBar: function(value){
//           bar = value;
//         },
//         getBar: function(){
//           fetchedBar = bar;
//         }
//       };
//
//       spyOn(foo, 'getBar').and.returnValue(1111);
//
//       foo.setBar(1023);
//       fetchedBar = foo.getBar();
//     });
//
//     it('tracks that the spy was called.', function(){
//       expect(foo.getBar).toHaveBeenCalled();
//     });
//
//     it('should not effect other functions.', function(){
//       expect(bar).toEqual(1023);
//     });
//
//     it('when called returns the requested value.', function(){
//       expect(fetchedBar).toEqual(1111);
//     });
//   });
//
//   describe('A spy, when configured to fake a function', function(){
//     var foo;
//     var bar;
//     var fetchedBar;
//
//     beforeEach(function(){
//       foo = {
//         setBar: function(value){
//           bar = value;
//         },
//         getBar: function(){
//           fetchedBar = bar;
//         }
//       };
//
//       spyOn(foo, 'getBar').and.callFake(function(){
//         return 101;
//       });
//
//       foo.setBar(1023);
//       fetchedBar = foo.getBar();
//     });
//
//     it('tracks that the spy was called.', function(){
//       expect(foo.getBar).toHaveBeenCalled();
//     });
//
//     it('should not effect other functions.', function(){
//       expect(bar).toEqual(1023);
//     });
//
//     it('when called returns the requested value.', function(){
//       expect(fetchedBar).toEqual(101);
//     });
//   });
//
//   describe('A spy, when configured to throw an error', function(){
//     var foo;
//     var bar;
//
//     beforeEach(function(){
//       foo = {
//         setBar: function(value){
//           bar = value;
//         }
//       };
//
//       spyOn(foo, 'setBar').and.throwError('quux');
//     });
//
//     it('throws the value.', function(){
//       expect(function(){
//         foo.setBar(123);
//       }).toThrowError('quux');
//     });
//   });
//
//   describe('A spy', function() {
//     var foo, bar = null;
//
//     beforeEach(function() {
//       foo = {
//         setBar: function(value) {
//           bar = value;
//         }
//       };
//
//       spyOn(foo, 'setBar').and.callThrough();
//     });
//
//     it('can call through and then stub in the same spec.', function() {
//       foo.setBar(123);
//       expect(bar).toEqual(123);
//
//       foo.setBar.and.stub();
//       bar = null;
//
//       foo.setBar(123);
//       expect(bar).toBe(null);
//     });
//   });
//
//   describe('A spy', function(){
//     var foo;
//     var bar = null;
//
//     beforeEach(function(){
//       foo = {
//         setBar: function(value){
//           bar = value;
//         }
//       };
//
//       spyOn(foo, 'setBar');
//     });
//
//     it('tracks if it was called at all.', function(){
//       expect(foo.setBar.calls.any()).toEqual(false);
//
//       foo.setBar(1023);
//
//       expect(foo.setBar.calls.any()).toEqual(true);
//     });
//
//     it('tracks the number of times it was called.', function(){
//       expect(foo.setBar.calls.count()).toEqual(0);
//
//       foo.setBar(1023);
//       foo.setBar(1023);
//
//       expect(foo.setBar.calls.count()).toEqual(2);
//     });
//
//     it('tracks the arguments of each call.', function(){
//       foo.setBar(1023);
//       foo.setBar(9999, 'baz');
//
//       expect(foo.setBar.calls.argsFor(0)).toEqual([1023]);
//       expect(foo.setBar.calls.argsFor(1)).toEqual([9999, 'baz']);
//     });
//
//     it('tracks the arguments of all calls.', function(){
//       foo.setBar(1023);
//       foo.setBar(9999, 'baz');
//
//       expect(foo.setBar.calls.allArgs()).toEqual([[1023], [9999, 'baz']]);
//     });
//
//     it('can provide the context & arguments to all calls.', function(){
//       foo.setBar(1023);
//
//       expect(foo.setBar.calls.all()).toEqual([{object: foo, args: [1023], returnValue: undefined}]);
//     });
//
//     it('has a shortcut to the most recent call.', function(){
//       foo.setBar(1023);
//       foo.setBar(9999, 'baz');
//
//       expect(foo.setBar.calls.mostRecent()).toEqual({object: foo, args: [9999, 'baz'], returnValue: undefined});
//     });
//
//     it('has a shortcut to the first call.', function(){
//       foo.setBar(1023);
//       foo.setBar(9999, 'baz');
//
//       expect(foo.setBar.calls.first()).toEqual({object: foo, args: [1023], returnValue: undefined});
//     });
//
//     it('tracks the context.', function(){
//       var spy = jasmine.createSpy('spy');
//       var baz = {
//         fn: spy
//       };
//       var quux = {
//         fn: spy
//       };
//
//       baz.fn(1023);
//       quux.fn(9999);
//
//       expect(spy.calls.first().object).toBe(baz);
//       expect(spy.calls.mostRecent().object).toBe(quux);
//     });
//
//     it('can be reset.', function(){
//       foo.setBar(1023);
//       foo.setBar(9999, 'baz');
//
//       expect(foo.setBar.calls.any()).toBeTruthy();
//
//       foo.setBar.calls.reset();
//
//       expect(foo.setBar.calls.any()).toBeFalsy();
//     });
//   });
//
//   describe('A spy, when created manually', function(){
//     var whatAmI;
//
//     beforeEach(function(){
//       whatAmI = jasmine.createSpy('whatAmI');
//
//       whatAmI('I', 'am', 'a', 'spy');
//     });
//
//     it('is named, which helps in error reporting.', function(){
//       expect(whatAmI.and.identity()).toEqual('whatAmI');
//     });
//
//     it('tracks that the spy was called.', function(){
//       expect(whatAmI).toHaveBeenCalled();
//     });
//
//     it('tracks the number of calls.', function(){
//       expect(whatAmI.calls.count()).toEqual(1);
//     });
//
//     it('tracks all the arguments of its calls.', function(){
//       expect(whatAmI).toHaveBeenCalledWith('I', 'am', 'a', 'spy');
//     });
//
//     it('allows access to the most recent call.', function(){
//       expect(whatAmI.calls.mostRecent().args[0]).toEqual('I');
//     });
//   });
//
//   describe('Multiple spys, when created manually', function(){
//     var tape;
//
//     beforeEach(function(){
//       tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);
//
//       tape.play();
//       tape.pause();
//       tape.rewind(0);
//     });
//
//     it('creates spies for each requested function.', function(){
//       expect(tape.play).toBeDefined();
//       expect(tape.pause).toBeDefined();
//       expect(tape.stop).toBeDefined();
//       expect(tape.rewind).toBeDefined();
//     });
//
//     it('tracks that the spies were called.', function(){
//       expect(tape.play).toHaveBeenCalled();
//       expect(tape.pause).toHaveBeenCalled();
//       expect(tape.rewind).toHaveBeenCalled();
//       expect(tape.stop).not.toHaveBeenCalled();
//     });
//
//     it('tracks all the arguments of its calls.', function(){
//       expect(tape.rewind).toHaveBeenCalledWith(0);
//     });
//   });
//
//   describe('Using `jasmine.any`', function(){
//     it('matches any value.', function(){
//       expect({}).toEqual(jasmine.any(Object));
//       expect(12).toEqual(jasmine.any(Number));
//     });
//
//     describe('When used with a spy', function(){
//       it('is useful for comparing arguments.', function(){
//         var foo = jasmine.createSpy('foo');
//
//         foo(12, function(){
//           return true;
//         });
//
//         expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
//       });
//     });
//   });
//
//   describe('Using `jasmine.anything`', function(){
//     it('matches anything.', function(){
//       expect(1).toEqual(jasmine.anything());
//     });
//
//     describe('When used with a spy', function(){
//       it('is useful when the argument can be ignored.', function(){
//         var foo = jasmine.createSpy('foo');
//
//         foo(12, function(){
//           return false;
//         });
//
//         expect(foo).toHaveBeenCalledWith(12, jasmine.anything());
//       });
//     });
//   });
//
//   describe('Using `jasmine.objectContaining`', function(){
//     var foo;
//
//     beforeEach(function(){
//       foo = {
//         a: 10,
//         b: 23,
//         bar: 'baz'
//       };
//     });
//
//     it('matches objects with the expect(ed) key/value pairs.', function(){
//       expect(foo).toEqual(jasmine.objectContaining({
//         bar: 'baz'
//       }));
//
//       expect(foo).not.toEqual(jasmine.objectContaining({
//         c: 23
//       }));
//     });
//
//     describe('When used with a spy', function(){
//       it('is useful for comparing arguments.', function(){
//         var callback = jasmine.createSpy('callback');
//
//         callback({
//           bar: 'baz'
//         });
//
//         expect(callback).toHaveBeenCalledWith(jasmine.objectContaining({
//           bar: 'baz'
//         }));
//
//         expect(callback).not.toHaveBeenCalledWith(jasmine.objectContaining({
//           c: 23
//         }));
//       });
//     });
//   });
//
//   describe('Using `jasmine.arrayContaining`', function(){
//     var foo;
//
//     beforeEach(function(){
//       foo = [1, 0, 2, 3];
//     });
//     it('matches arrays with some of the values.', function(){
//       expect(foo).toEqual(jasmine.arrayContaining([1, 3]));
//       expect(foo).not.toEqual(jasmine.arrayContaining([6]));
//     });
//
//     describe('When used with a spy', function(){
//       it('is useful when comparing arguments.', function(){
//         var callback = jasmine.createSpy('callback');
//
//         callback([1, 0, 2, 3]);
//
//         expect(callback).toHaveBeenCalledWith(jasmine.arrayContaining([2, 3]));
//         expect(callback).not.toHaveBeenCalledWith(jasmine.arrayContaining([2, 3, 6]));
//       });
//     });
//   });
//
//   describe('Using `jasmine.stringMatching`', function(){
//     it('matches as a regex.', function(){
//       expect({foo: 'bar'}).toEqual({foo: jasmine.stringMatching(/^bar$/)});
//       expect({foo: 'foobarbaz'}).toEqual({foo: jasmine.stringMatching('bar')});
//     });
//
//     describe('When used with a spy', function(){
//       it('is useful for comparing arguments.', function(){
//         var callback = jasmine.createSpy('callback');
//
//         callback('foobarbaz');
//
//       expect(callback).toHaveBeenCalledWith(jasmine.stringMatching('bar'));
//       expect(callback).not.toHaveBeenCalledWith(jasmine.stringMatching(/^bar$/));
//       });
//     });
//   });
//
//   describe('Custom asymmetry', function(){
//     var tester = {
//       asymmetricMatch: function(actual){
//         var secondValue = actual.split(',')[1];
//         return secondValue === 'bar';
//       }
//     };
//
//     it('dives in deep.', function(){
//       expect('foo,bar,baz,quux').toEqual(tester);
//     });
//
//     describe('When used with a spy', function(){
//       it('is useful when comparing arguments.', function(){
//         var callback = jasmine.createSpy('callback');
//
//         callback('foo,bar,baz');
//
//         expect(callback).toHaveBeenCalledWith(tester);
//       });
//     });
//   });
//
//   describe('Asynchronous specs', function(){
//     var value;
//
//     beforeEach(function(done){
//       setTimeout(function(){
//         value = 0;
//         done();
//       }, 1);
//     });
//
//     it('should support asynchronous execution of test preperations & expectations.', function(done){
//       value++;
//       expect(value).toBeGreaterThan(0);
//       done();
//     });
//
//     describe('Long asynchronous specs', function(){
//       beforeEach(function(done){
//         done();
//       }, 1000);
//
//       it('takes a long time.', function(done){
//         setTimeout(function(){
//           expect(true).toBeTruthy();
//           done();
//         }, 9000);
//       }, 10000);
//
//       afterEach(function(done){
//         done();
//       }, 1000);
//     });
//   });
// })();
