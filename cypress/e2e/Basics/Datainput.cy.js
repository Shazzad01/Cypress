
describe('File upload in cypress',function(){
    

    it('File Upload using selectFile',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('credentials.json').then(function(credentials){
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(credentials.username)
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(credentials.password)
            cy.get('.oxd-button').click()
        })


        cy.wait(2000)
        
    })
})