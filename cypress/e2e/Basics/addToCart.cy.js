describe("cart", function(){

beforeEach(function(){
    cy.visit('https://demo.nopcommerce.com/')
})

it('Add to cart', function(){

    cy.title().should('eq','nopCommerce demo store1')
})

})