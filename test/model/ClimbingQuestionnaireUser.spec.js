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
    instance = new Codealpine.ClimbingQuestionnaireUser();
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

  describe('ClimbingQuestionnaireUser', function() {
    it('should create an instance of ClimbingQuestionnaireUser', function() {
      // uncomment below and update the code to test ClimbingQuestionnaireUser
      //var instane = new Codealpine.ClimbingQuestionnaireUser();
      //expect(instance).to.be.a(Codealpine.ClimbingQuestionnaireUser);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Codealpine.ClimbingQuestionnaireUser();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new Codealpine.ClimbingQuestionnaireUser();
      //expect(instance).to.be();
    });

    it('should have the property result (base name: "result")', function() {
      // uncomment below and update the code to test the property result
      //var instance = new Codealpine.ClimbingQuestionnaireUser();
      //expect(instance).to.be();
    });

    it('should have the property answers (base name: "answers")', function() {
      // uncomment below and update the code to test the property answers
      //var instance = new Codealpine.ClimbingQuestionnaireUser();
      //expect(instance).to.be();
    });

    it('should have the property questionnaires (base name: "questionnaires")', function() {
      // uncomment below and update the code to test the property questionnaires
      //var instance = new Codealpine.ClimbingQuestionnaireUser();
      //expect(instance).to.be();
    });

    it('should have the property analysis (base name: "analysis")', function() {
      // uncomment below and update the code to test the property analysis
      //var instance = new Codealpine.ClimbingQuestionnaireUser();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new Codealpine.ClimbingQuestionnaireUser();
      //expect(instance).to.be();
    });

  });

}));
