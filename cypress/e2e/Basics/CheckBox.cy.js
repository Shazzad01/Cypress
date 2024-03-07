describe('cypress basic',function(){

it('check box check and uncheck',function(){

cy.visit('https://codenboxautomationlab.com/practice/')

let option1xpath="//input[@id='checkBoxOption1']"
let option2xpath="//input[@id='checkBoxOption2']"
let option3xpath="//input[@id='checkBoxOption3']"

let option1value = "option1"
let option2value = "option2"
let option3value = "option3"


//click and verify
// cy.xpath(option1xpath).check().should('be.enabled').and('have.value',option1value)
// cy.xpath(option2xpath).check().should('be.enabled').and('have.value',option2value)
// cy.xpath(option3xpath).check().should('be.enabled').and('have.value',option3value)

//only click
// cy.xpath(option1xpath).check()
// cy.xpath(option2xpath).check()
// cy.xpath(option3xpath).check()


// cy.wait(3000)


// cy.xpath(option1xpath).uncheck
// cy.xpath(option2xpath).uncheck
// cy.xpath(option3xpath).uncheck

// cy.wait(3000)

//Multiple check

cy.get('input[type=checkbox]').check([option1value,option2value,option3value])

cy.wait(3000)

cy.get('input[type=checkbox]').uncheck([option1value,option2value,option3value])




//custom mathod to check and uncheck

// checkBoxSelect(option1xpath,'check',option1value)




})

})

// function checkBoxSelect(xpath,options,value){

// if(options.localeCompare("check")){
//     cy.xpath(xpath).check().should('be.enabled').and('have.value',value)
// }
// }