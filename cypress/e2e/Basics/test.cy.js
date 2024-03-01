describe("First Cypress", function(){
    it("visit", function(){
        cy.visit('https://www.shohoz.com/')
        cy.wait(5000)
        cy.get('ol > :nth-child(1) > a').click()
        cy.get('#dest_from').type('Dhaka')
           })
})


