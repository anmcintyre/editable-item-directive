describe("editableItem", function(){
	var html, scope, compiled, element;
	beforeEach(module('editableItem'));
	beforeEach(module("editable.html"));

	beforeEach(inject(function($rootScope, $compile){
		html = "<div make-editable><p>Lorem ipsum dolor sit amet, consectetur</div>";
		scope = $rootScope.$new();
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest();
	}))

	it("should render the element correctly", function(){
		expect(element.find(".isEditable").length).toBe(1);      
        expect(element.find('.isEditable').attr('contenteditable')).not.toBeTruthy();
		expect(element.find("button").length).toBe(1);
		expect(element.find("button").text()).toBe("Edit");		
	});


	it("should be editable after click", function(){
		element.find("button").triggerHandler('click');
		expect(element.find(".isEditable").length).toBe(1);
        expect(element.find('.isEditable').attr('contenteditable')).toBe("");
		expect(element.find("button").length).toBe(1);
		expect(element.find("button").text()).toBe("Save");		

	});

	it ("should be not-editable after next click", function(){
		element.find("button").triggerHandler('click');
		element.find("button").triggerHandler('click');
		expect(element.find(".isEditable").length).toBe(1);
        expect(element.find('.isEditable').attr('contenteditable')).not.toBeTruthy();
		expect(element.find("button").length).toBe(1);
		expect(element.find("button").text()).toBe("Edit");		
	});
})
