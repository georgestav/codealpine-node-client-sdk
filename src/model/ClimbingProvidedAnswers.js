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

import ApiClient from '../ApiClient';
import ClimbingQuestion from './ClimbingQuestion';

/**
 * The ClimbingProvidedAnswers model module.
 * @module model/ClimbingProvidedAnswers
 * @version 1.0
 */
class ClimbingProvidedAnswers {
    /**
     * Constructs a new <code>ClimbingProvidedAnswers</code>.
     * @alias module:model/ClimbingProvidedAnswers
     * @param id {Number} 
     * @param value {Number} 
     * @param answer {String} 
     * @param question {module:model/ClimbingQuestion} 
     */
    constructor(id, value, answer, question) { 
        
        ClimbingProvidedAnswers.initialize(this, id, value, answer, question);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, value, answer, question) { 
        obj['id'] = id;
        obj['value'] = value;
        obj['answer'] = answer;
        obj['question'] = question;
    }

    /**
     * Constructs a <code>ClimbingProvidedAnswers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClimbingProvidedAnswers} obj Optional instance to populate.
     * @return {module:model/ClimbingProvidedAnswers} The populated <code>ClimbingProvidedAnswers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClimbingProvidedAnswers();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('answer')) {
                obj['answer'] = ApiClient.convertToType(data['answer'], 'String');
            }
            if (data.hasOwnProperty('question')) {
                obj['question'] = ClimbingQuestion.constructFromObject(data['question']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ClimbingProvidedAnswers.prototype['id'] = undefined;

/**
 * @member {Number} value
 */
ClimbingProvidedAnswers.prototype['value'] = undefined;

/**
 * @member {String} answer
 */
ClimbingProvidedAnswers.prototype['answer'] = undefined;

/**
 * @member {module:model/ClimbingQuestion} question
 */
ClimbingProvidedAnswers.prototype['question'] = undefined;






export default ClimbingProvidedAnswers;

