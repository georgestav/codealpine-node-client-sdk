/*
 * Codealpine
 * The codealpine API description
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.42
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Codealpine);
  }
}(this, function(expect, Codealpine) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('UpdateNavlinkDto', function() {
      beforeEach(function() {
        instance = new Codealpine.UpdateNavlinkDto();
      });

      it('should create an instance of UpdateNavlinkDto', function() {
        // TODO: update the code to test UpdateNavlinkDto
        expect(instance).to.be.a(Codealpine.UpdateNavlinkDto);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property href (base name: "href")', function() {
        // TODO: update the code to test the property href
        expect(instance).to.have.property('href');
        // expect(instance.href).to.be(expectedValueLiteral);
      });

      it('should have the property isActive (base name: "isActive")', function() {
        // TODO: update the code to test the property isActive
        expect(instance).to.have.property('isActive');
        // expect(instance.isActive).to.be(expectedValueLiteral);
      });

    });
  });

}));
