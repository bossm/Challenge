
describe('RoomVU Test Challenge', () => {
	it('1st Test Case, Check innerText of h1 tag', () => {
		cy.visit('https://example.cypress.io/');
		cy.get('h1').should('have.text', 'Kitchen Sink');
	})

	it('2nd Test Case, Open "type" page and check URL', () => {
		cy.get('a:contains("type")').click();
		cy.url().should('include', '/commands/action');
	})

	it('3rd Test Case, Type email on field and check value', () => {
		cy.get('.action-email').type('mr0bossm@gmail.com').should('have.value', 'mr0bossm@gmail.com');
	})

	it('4th Test Case, Send GET request and check response body', () => {
		cy.request('https://jsonplaceholder.typicode.com/todos')
			.then((response) => {
				expect(response.body[0]).to.have.property('userId')
				expect(response.body[0]).to.have.property('id')
				expect(response.body[0]).to.have.property('title')
				expect(response.body[0]).to.have.property('completed')
			})
	})

	it('5th Test Case, Send POST request and check response status', () => {
		cy.request('POST', 'https://jsonplaceholder.typicode.com/todos', { title: 'foo', body: 'bar', userId: 1 })
			.then((response) => {
				expect(response.status).to.eq(201)
			})
	})

})
