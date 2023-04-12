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
    instance = new Codealpine.ClimbingQuestionnaireAnalysis();
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

  describe('ClimbingQuestionnaireAnalysis', function() {
    it('should create an instance of ClimbingQuestionnaireAnalysis', function() {
      // uncomment below and update the code to test ClimbingQuestionnaireAnalysis
      //var instane = new Codealpine.ClimbingQuestionnaireAnalysis();
      //expect(instance).to.be.a(Codealpine.ClimbingQuestionnaireAnalysis);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Codealpine.ClimbingQuestionnaireAnalysis();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new Codealpine.ClimbingQuestionnaireAnalysis();
      //expect(instance).to.be();
    });

    it('should have the property minValue (base name: "minValue")', function() {
      // uncomment below and update the code to test the property minValue
      //var instance = new Codealpine.ClimbingQuestionnaireAnalysis();
      //expect(instance).to.be();
    });

    it('should have the property maxValue (base name: "maxValue")', function() {
      // uncomment below and update the code to test the property maxValue
      //var instance = new Codealpine.ClimbingQuestionnaireAnalysis();
      //expect(instance).to.be();
    });

    it('should have the property questionnaire (base name: "questionnaire")', function() {
      // uncomment below and update the code to test the property questionnaire
      //var instance = new Codealpine.ClimbingQuestionnaireAnalysis();
      //expect(instance).to.be();
    });

    it('should have the property userResponse (base name: "userResponse")', function() {
      // uncomment below and update the code to test the property userResponse
      //var instance = new Codealpine.ClimbingQuestionnaireAnalysis();
      //expect(instance).to.be();
    });

  });

}));