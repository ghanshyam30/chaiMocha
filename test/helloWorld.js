/* To be able to use chai assertions we need to import it
Chai has 3 type of assertions - 1] should 2]expect 3]assert
*/
const chai = require('chai')
, should = chai.should()
, expect = chai.expect
, assert = chai.assert
/* Mocha framework works with a "describe" function, its like a test suite
describe function takes 2 parameters
1 - Name of the test suite
2 - function - which will have all the test cases assosiated with single funcionality
*/

/*
it - Stands for Individual Test which again takes 2 parameters
1- Name of the test case 
2- function which performs the tese
*/
describe("Basic understanding of wirting tests in Mocha", function(){
    let name = "Martin Crow"
    it("Check if the name is string", function(){
        // Assertions
        // BDD style assertions
        name.should.be.a('string')
        expect(name).be.a('string')
        // classical assertion
        assert.typeOf(name, 'string')

        // Let's verify negative assertion too
        // name.should.be.a('number')
        
    })
    it("Perform contents check on name", function(){
        // BDD assertions
        name.should.be.equal('Martin Crow')
        expect(name).to.equal('Martin Crow')
        // Reverse assertion
        name.should.not.be.equal('Martina Crow')

        // Classical assertion
        assert.equal(name, 'Martin Crow')

    })
    
    /* HOOKS */
    // before is one hook function which takes 1 parameter which should be a function
    // before is onetime executing hook and it executes before first test case
    before(function(){
        console.log("This is SetUp function");
    });

    // After is same as before hook which executes only after the last test case which can be termed as tear down
    after(function(){
        console.log("This is teardown function");
    });

    // Before each test case
    beforeEach(function(){
        console.log("This is before each function");
    });

    //After each test case

    afterEach(function(){
        console.log("This is after each function.");
    });
})