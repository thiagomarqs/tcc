const puppeteer = require('puppeteer');
const { settingsChrome, settingsBrave } = require('./browserSettings.js');

(async () => {

  const site = 'https://experimento-turnstile.vercel.app';
  const browser = await puppeteer.launch(settingsChrome);
  const page = await browser.newPage();

  await page.goto(site);
  console.log("Site acessado.")

  //const captchaCheckboxSelector = '//*[@id="challenge-stage"]/div/label/input';
  const captchaCheckboxSelector = '#challenge-stage > div > label > input[type=checkbox]';
  const nextButtonSelector = 'button:not(.Mui-disabled)'
  
  const frameHandle = await page.waitForSelector('iframe');
  console.log(frameHandle);
  
  const frame = await frameHandle.contentFrame();
  console.log("Encontrou o iframe!")
  console.log(frame);
  
  const checkbox = await frame.waitForSelector("input[type=checkbox]", {timeout: 1000000});
  console.log("Encontrou o checkbox!")
  console.log(checkbox);
  
  try {
    console.log("Tentando clicar no checkbox...");
    await checkbox.click();
    console.log('Clicou no checkbox!');
  }
  catch(error) {
    console.log(error);
    console.log('Não foi encontrado o checkbox. Proseguindo...');
  }
  
  await page.waitForSelector(nextButtonSelector, {timeout: 1000000});
  console.log('Encontrou o botão de avançar!');

  await page.click(nextButtonSelector);
  console.log('Clicou no botão de avançar!');

  await browser.close();
  console.log('Navegador fechado, encerrando.');

})();
