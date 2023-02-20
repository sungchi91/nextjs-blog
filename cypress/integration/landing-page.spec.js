describe('Landing page', () => {

    beforeEach(() => {
        // Runs before each test in the describe block

        // Set up the state of the app or create test data here
        // For example:
        cy.visit('/');
    });

    it('Displays the correct content', () => {
      cy.contains('h2', 'Blog')
      cy.contains('p', 'Hi, I\'m Sung Chi, a software engineer driven to create impactful technology. Excited to share my experiences and insights on this blog.')
      cy.contains('a', 'our Next.js tutorial')
      cy.contains('li')
    })

    it('navigates to blog post page when post title is clicked', () => {
        cy.get('li').first().find('a').click();
        cy.url().should('include', '/posts/');
      });

    it('displays correct blog post title', () => {
        cy.get('li').first().find('a').click();
        cy.get('h1').should('contain', 'When to Use Static Generation v.s. Server-side Rendering');
    });
    
    it('displays correct blog post date', () => {
        cy.get('li').first().find('a').click();
        cy.get('time').should('contain', 'January 2, 2020');
    });
  })
  