import assert from "assert";
import greet from "../greet.js";

describe("The greet function ", function(){

	it("should greet a user", function(){

		assert.equal('Hello, Andre', greet('Andre'));

	});
})