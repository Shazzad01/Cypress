describe('hover and screenshot test',function(){

it('Hover',function(){
cy.visit('https://www.amazon.com/')
cy.wait(5000)
cy.xpath("//*[@id='nav-link-accountList']").trigger('mouseover')
cy.xpath("//div[@id='nav-flyout-ya-signin']//span[@class='nav-action-inner'][normalize-space()='Sign in']").click()
cy.screenshot()

})

})