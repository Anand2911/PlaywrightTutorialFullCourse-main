// Inlcude playwright module
const { expect } = require('@playwright/test')

const path = require('path');
require('dotenv').config({
    path: path.join(__dirname,'../.env')
})

// create class
exports.HomePage = class HomePage {

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        // Init page object
        this.page = page;

        // Elements
        this.searchTextbox = page.locator('#APjFqb');
    }

    async goto(){
        await this.page.setViewportSize({width:1366, height:728})
        await this.page.goto(process.env.WEB_URL);
    }

    async searchKeywords(param1){
        await expect(this.searchTextbox).toBeEnabled();
        await this.searchTextbox.click();
        await this.searchTextbox.fill(param1);
        await this.searchTextbox.press('Enter');
    }

}