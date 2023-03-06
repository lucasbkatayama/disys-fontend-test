describe('Github Search User App', () => {
  beforeEach(() => {
    cy.visit('/', { timeout: 2000 })
  })

  it('Search a list of users', () => {
    cy.intercept('GET', 'https://api.github.com/search/*', { fixture: 'mock-users.json' })
    const searchBar = cy.get('.search')
    cy.get(".search").find('input').type('hello')
    searchBar.find('button').click()
    cy.get('.cards-wrap').children().should('have.length', 24)
  })

  it('Search a user and open its information', () => {
    cy.intercept('GET', 'https://api.github.com/search/*', { fixture: 'mock-users.json' })
    cy.intercept('GET', 'https://api.github.com/users/*', { fixture: 'mock-user.json' })
    const searchBar = cy.get('.search')
    cy.get(".search").find('input').type('hello')
    searchBar.find('button').click()
    cy.get('.cards-wrap').first().click()
    cy.get('.user-card').should('exist')
  })
})