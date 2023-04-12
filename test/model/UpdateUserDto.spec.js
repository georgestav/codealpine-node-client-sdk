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
    describe('UpdateUserDto', function() {
      beforeEach(function() {
        instance = new Codealpine.UpdateUserDto();
      });

      it('should create an instance of UpdateUserDto', function() {
        // TODO: update the code to test UpdateUserDto
        expect(instance).to.be.a(Codealpine.UpdateUserDto);
      });

    });
  });

}));
