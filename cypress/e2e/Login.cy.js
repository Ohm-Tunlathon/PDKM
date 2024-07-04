
describe('test login', () => {

    beforeEach(() =>{
      cy.visit('https://software-tester-exam-mwo7646q6a-an.a.run.app/junior/home')
      })
  
    it('log in with correct email and password', () => {
      cy.get('#input-68').type('admin@pdkm.tech')
      cy.get('#input-71').type('yahooWowZaa')
      cy.get('.v-btn__content').click()
    })
  
    it('log in with wrong email and correct password', () => {
      cy.get('#input-68').type('wrong@pdkm.tech')
      cy.get('#input-71').type('yahooWowZaa')
      cy.get('.v-btn__content').click()
      cy.contains('username or password is incorrect!').should('be.visible')
    })
  
    it('log in with correct email and wrong password', () => {
      cy.get('#input-68').type('admin@pdkm.tech')
      cy.get('#input-71').type('Wrongpassword')
      cy.get('.v-btn__content').click()
      cy.contains('username or password is incorrect!').should('be.visible')
    })
  
    it('log in with only email', () => {
      cy.get('#input-68').type('admin@pdkm.tech')
      cy.get('.v-btn__content').click()
      cy.contains('username or password is incorrect!').should('be.visible')
    })
  
    it('log in with only password', () => {
      cy.get('#input-71').type('yahooWowZaa')
      cy.get('.v-btn__content').click()
      cy.contains('username or password is incorrect!').should('be.visible')
    })

    it('The user not enters email', () => {
      cy.get('#input-68').type('admin@pdkm.tech').clear()
      cy.contains('Required.')
    })

    it('The user not enters password', () => {
      cy.get('#input-71').type('yahooWowZaa').clear()
      cy.contains('Required.')
    })

    it('The user not enters email and password', () => {
      cy.get('#input-68').type('admin@pdkm.tech').clear()
      cy.get('#input-71').type('yahooWowZaa').clear()
      cy.contains('Required.')
    })
    
    it('The user not enters email and password then click submit', () => {
      cy.wait(1000)
      cy.get('.v-btn__content').click()
      cy.contains('username or password is incorrect!').should('be.visible')
    })

    it('Display the correct placeholder text Username', () => {
      cy.contains('Password');
    });

    it('Display the correct placeholder text Password', () => {
      cy.contains('Password');
    });
    
    it('should remove the placeholder text when user starts typing an email', () => {
      cy.get('#input-68').type('admin@pdkm.tech')
        .should('have.value', 'admin@pdkm.tech')
        .should('not.have.attr', 'placeholder', 'Username');
    });

    it('should remove the placeholder text when user starts typing a password', () => {
      cy.get('#input-71').type('yahooWowZaa')
        .should('have.value', 'yahooWowZaa')
        .should('not.have.attr', 'placeholder', 'Password');
    });
  })