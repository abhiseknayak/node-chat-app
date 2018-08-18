const expect=require('expect');
const {isRealString}=require('./validator');

describe('it should check the validator function',()=>{

    it('should reject non-string values',()=>{
        var test=123;
        var res=isRealString(test);
        expect(res).toBe(false);
    });

    it('should reject strings with spaces',()=>{

        var test="    ";
        var res=isRealString(test);
        expect(res).toBe(false);
    });

    it('should allow string with non-space characters',()=>{

        var test="valid-string";
        var res=isRealString(test);
        expect(res).toBe(true);
    });

});