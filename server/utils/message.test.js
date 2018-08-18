var expect = require('expect');
var {generateMessage,generateLocationMessage}=require('./message');

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

describe('generateLocationMessage',()=>{
    it('should generate correct location object',()=>{
        var name="abhi";
        var latitude=1;
        var longitude=2;
        var tst=generateLocationMessage(name,latitude,longitude);
        expect(tst.from).toBe(name);
        expect(tst.url).toBe(`https://www.google.com/maps?q=1,2`);
        expect(tst.createdAt).toBeA("number");
    });
});