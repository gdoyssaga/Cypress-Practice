describe('To-do List', () => {

  beforeEach(() => {
    cy.visit('https://abhigyank.github.io/To-Do-List/');
  })

  it('Open website', () => {
   
    cy.get('h1').should('have.text', 'To Do List');
    cy.get('[href="#add-item"]').should('have.text', 'Add Item');
    cy.get('[href="#completed"]').should('have.text', 'Completed');
    cy.get('[href="#todo"]').should('have.text','To-Do Tasks');
  })

  it('Add Item & Check to-do task as a complete ', () => {
    //Add a task to the list
    cy.get('#new-task').type('Task1');
    cy.get('#add-item > button').click()
    //Click to-do task menu tab
    cy.get('[href="#todo"] > .mdl-tabs__ripple-container').should('exist').click();
    cy.get('.mdl-checkbox__ripple-container').should('exist').click();
    //Click completed task menu tab
    cy.get('[href="#completed"] > .mdl-tabs__ripple-container').should('exist').click();
    

  })

  it('Delete a task from the completed list', () => {
    //Add a task to the list
    cy.get('#new-task').type('Completed task will be deleted');
    cy.get('#add-item > button').click()
    //Click to-do task menu tab
    cy.get('[href="#todo"] > .mdl-tabs__ripple-container').should('exist').click();
    cy.get('.mdl-checkbox__ripple-container').should('exist').click();
    //Click completed task menu tab
    cy.get('[href="#completed"] > .mdl-tabs__ripple-container').should('exist').click();
    cy.get('li').should('exist');
    cy.get('button.delete').eq(0).click()
   

  });


  it('Delete a task from the to-do list', () => {
    //Add a task to the to-do list
    cy.get('#new-task').type('To Do task will be deleted');
    cy.get('#add-item > button').click()
    //Click to-do task menu tab
    cy.get('[href="#todo"] > .mdl-tabs__ripple-container').should('exist').click();
    cy.get('.mdl-button__ripple-container').should('exist').click();
    
  });
  
 


  });