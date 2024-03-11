describe('test greet()', function () {
    it('greeting a name', function () {
        expect(greet('Elizabeth')).toEqual('Hello, Elizabeth');
    });
    it('handling null value', function () {
        expect(greet()).toEqual('Hello there!');
    });
    it('handling shouting', function () {
        expect(greet('JOSE')).toEqual('HELLO JOSE!');
    });
    it('handling 2 names', function () {
        expect(greet(['Jose', 'Pep'])).toEqual('Hello, Jose, Pep');
    });
    it('handling multiple names', function () {
        expect(greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toEqual('Hello, Alex, Arsene, Jose, Zidane');
    });
});