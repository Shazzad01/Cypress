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
        cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('gorankreziccc90@gmail.com')
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
                cy.get("td").each(($col, index, $cols) => {
                    cy.log($col.text());
                })
            })
        })
    })
})
