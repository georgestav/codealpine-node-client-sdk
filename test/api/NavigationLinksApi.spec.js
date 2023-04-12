/**
 * Codealpine
 * The codealpine API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Codealpine);
  }
}(this, function(expect, Codealpine) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Codealpine.NavigationLinksApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('NavigationLinksApi', function() {
    describe('navlinksControllerV1Create', function() {
      it('should call navlinksControllerV1Create successfully', function(done) {
        //uncomment below and update the code to test navlinksControllerV1Create
        //instance.navlinksControllerV1Create(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('navlinksControllerV1FindAll', function() {
      it('should call navlinksControllerV1FindAll successfully', function(done) {
        //uncomment below and update the code to test navlinksControllerV1FindAll
        //instance.navlinksControllerV1FindAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('navlinksControllerV1FindOne', function() {
      it('should call navlinksControllerV1FindOne successfully', function(done) {
        //uncomment below and update the code to test navlinksControllerV1FindOne
        //instance.navlinksControllerV1FindOne(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('navlinksControllerV1Remove', function() {
      it('should call navlinksControllerV1Remove successfully', function(done) {
        //uncomment below and update the code to test navlinksControllerV1Remove
        //instance.navlinksControllerV1Remove(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('navlinksControllerV1Update', function() {
      it('should call navlinksControllerV1Update successfully', function(done) {
        //uncomment below and update the code to test navlinksControllerV1Update
        //instance.navlinksControllerV1Update(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
