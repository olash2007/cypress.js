describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();

         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio7');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

 })
 
 it('Проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('german@dolnikov.ru');
    cy.get('#restoreEmailButton').click();

    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})

it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

    cy.get('#mail').type('derman@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();

    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();

    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

})



describe('Покупка аватара', function () {                                
    it('e2e тест на покупку нового аватара для тренера', function () {   
         cy.visit('https://pokemonbattle.ru/');                          
         cy.get('input[type="email"]').type('USER_LOGIN');                   
         cy.get('input[type="password"]').type('USER_PASSWORD');               
         cy.get('button[type="submit"]').click();                        
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); 
         cy.get('[href="/shop"]').click();                               
         cy.get('.available > button').first().click({ force: true });   
         cy.get('.credit').type('4620869113632996');                     
         cy.get('.k_input_ccv').type('125');                             
         cy.get('.k_input_date').type('1225');                           
         cy.get('.k_input_name').type('NAME');                           
         cy.get('.pay-btn').click();                                     
         cy.get('#cardnumber').type('56456');                            
         cy.get('.payment__submit-button').click();                      
         cy.contains('Покупка прошла успешно').should('be.visible');
     });
 });