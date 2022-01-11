

describe('Get site', () => {
    it('should login with valid credentials', async () => {
        await browser.url("https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php")
        
        browser.pause(2000);
    
    });

    it('Log in', async () => {
        await browser.url("https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php")
        
        let inputName = $('.form-control');
        await inputName.setValue('fggggg@gmail.com');

        await browser.pause(2000);

    });


     it('Log in', async () => {
        
        let inputPass = $('[type="password"]');
        await inputPass.setValue('ffffffffff');

       await browser.pause(2000);

     });
    
    it('Botton', async () => {
        let loginBotton = $('[value="Login"]');
        await loginBotton.click();

        await browser.pause(2000);

       
    });

    it('Botton', async () => {
        let elem = await $('.help-block');
    let isDisplayed = await elem.isDisplayed();
    console.log("IS DISPLAYED? " + isDisplayed); // outputs: TRUE
        
       
});
 });

