describe("cart", function(){

beforeEach(function(){
    cy.visit('https://demo.nopcommerce.com/')
})

it('Add to cart', function(){

    cy.title().should('eq','nopCommerce demo store')
    cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')
    cy.wait(5000)
    cy.xpath("//button[normalize-space()='Search']").click()
    cy.get('.product-title > a').click()
    cy.wait(5000)
    cy.get('#add-to-cart-button-4').click()
    
    cy.xpath("//a[normalize-space()='shopping cart']").click()
    cy.get('.product-unit-price').contains("$1,800.00")
    cy.get('.product-subtotal').contains("$3,600.00")
})

})