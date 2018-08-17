var expect = require('expect');
var {generateMessage}=require('./message');

describe('generateMessage',()=>{
    it('should generate correct message object',()=>{
        var name="abhi";
        var text="is the test succesfull";
        var tst=generateMessage(name,text);
        expect(tst.from).toBe(name);
        expect(tst.text).toBe(text);
        expect(tst.createdAt).toBeA("number");
    })
});