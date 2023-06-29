/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first() - pega o primeiro item da lista
            //.last() - pega o ultimo item da lista
            //.eq(3) - pega o terceiro item da lista
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie')
            .click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text')
            .clear()
            .type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });
});