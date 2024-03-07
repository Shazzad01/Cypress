describe('alert test', function(){

beforeEach(function(){

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
})

let js_alert= "//button[normalize-space()='Click for JS Alert']"
let js_confirm= "//button[normalize-space()='Click for JS Confirm']"
let js_prompt="//button[normalize-space()='Click for JS Prompt']"
let result = "//p[@id='result']"

it('test',function(){

    cy.xpath(js_alert).click()
    cy.wait(3000)
    cy.xpath(result).should('have.text','You successfully clicked an alert')
    cy.wait(3000)



    cy.on('window:confirm', function(){
        return true
    })

    cy.xpath(js_confirm).click()
    cy.xpath(result).should('have.text','You clicked: Ok')
    cy.wait(3000)

    

    cy.window().then(function($win){
        cy.stub($win,'prompt').returns('Hello Prompt')
        cy.xpath(js_prompt).click()
        cy.xpath(result).should('have.text','You entered: Hello Prompt')
        cy.wait(3000)
    })

})

})
