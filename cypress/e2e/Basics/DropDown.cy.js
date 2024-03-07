describe('Drop down test',function(){

beforeEach(function(){
    cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
})

it('test', function(){

    cy.get('[width="200"]> input').type('md shazzad mia')
    
    cy.xpath("//*[@id='tblcrtac']/tbody/tr[7]/td[3]/input[1]").type('md@gmail.com')
    cy.xpath("//*[@id='tblcrtac']/tbody/tr[7]/td[3]/input[2]").click()
    cy.xpath("//*[@id='newpasswd']").type('PRpt1999@#')
    cy.xpath("//*[@id='newpasswd1']").type('PRpt1999@#')
    cy.xpath("//*[@id='tblcrtac']/tbody/tr[22]/td[3]/select[1]").select('03')
    cy.xpath("//*[@id='tblcrtac']/tbody/tr[22]/td[3]/select[2]").select('03')
    cy.xpath("//*[@id='tblcrtac']/tbody/tr[22]/td[3]/select[3]").select('2023')
    cy.xpath("//*[@id='tblcrtac']/tbody/tr[24]/td[3]/input[2]").click()
    cy.xpath("//select[@id='country']").select('99')
    cy.xpath("//*[@id='div_city']/table/tbody/tr[1]/td[3]/select").select('Agra')

})

})