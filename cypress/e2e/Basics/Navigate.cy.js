describe('Table', function() {
    before(function() {
        cy.visit('https://demo.opencart.com/admin/')
    })

    it('Test', function() {
        cy.viewport(1920, 1080)
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('button[type="submit"]').click()
        cy.get('.btn-close').click()
        cy.get('#menu-customer > .parent').click();
        cy.get('#collapse-5 > :nth-child(1) > a').click();
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', 10)
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', 7)
        cy.go('back')
        cy.wait(5000)
        cy.go('forward')
        cy.wait(5000)
        cy.reload()

        
    })
})
