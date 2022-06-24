import { test, expect } from "@playwright/test";
import { ConfirmEmailPO } from './pageobjects/ConfirmEmailPO';
import {CreateFreeAccountPO} from './pageobjects/CreateFreeAccountPO';
import {CreateFreeAccountData} from './pagedata/PageData';


  test(`Signing up` , async({page})=>{
    //Step1 : Go to home page
    await page.goto(`https://app.utilitygenius.com/`);
    const CreateFreeAccount = new CreateFreeAccountPO(page);

    //Step2 : Verify and Click on the Create Free Account Button
    await expect(CreateFreeAccount.createFreeAccountButtonText).toEqual(CreateFreeAccountData.createFreeAccount);
    await CreateFreeAccount.createFreeAccountBtn.click();

    //Step3 : Verify google sign up option and Sign up 
    await expect(CreateFreeAccount.googleSignUpText).toEqual(CreateFreeAccountData.googleSignUpButtonText);
    await CreateFreeAccount.signUp();
  });

  test.only(`Email confirmation and account creation confirmation` , async({page})=>{
    //Step1 : Go to 'yop mail' home page
    await page.goto("https://yopmail.com/en/");

    //Step2 : Sign in and go to inbox
    const ConfirmEmail = new ConfirmEmailPO(page);
    await ConfirmEmail.goToInbox();

    //Step3 : Click on the 'confirm your account'
    await ConfirmEmail.clickOnConfirmEmail();

    //Step4 : Log in and Verify account creation and upgrade account !!! (Got stuck there)
    const loginBtn = await page.locator('#auth0-lock-container-1'); // Can't find element
    await expect(loginBtn).toBeVisible();
    await page.waitForTimeout(2000);
  });
