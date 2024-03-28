describe('Table',function(){

    before(function(){
        cy.visit('https://demo.opencart.com/admin/')
        
    })
    it('test',function(){
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('button[type="submit"]').click
    })
    
    
    })