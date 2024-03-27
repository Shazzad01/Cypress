describe('File upload in cypress',function(){
    before(function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
    })

    it('File Upload using selectFile',function(){

        cy.wait(2000)
        cy.get('#file-upload').selectFile('cypress/fixtures/im.jpg')
        cy.wait(2000)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('im.jpg')
        cy.screenshot()
    })
})