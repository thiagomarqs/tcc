const chromeUserDataDir = 'C:\\Users\\Samsung\\AppData\\Local\\Google\\Chrome\\User Data';
const chromeExecutablePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const braveUserDataDir = 'C:\\Users\\Samsung\\AppData\\Local\\BraveSoftware\\Brave-Browser\\User Data';
const braveExecutablePath = 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe';

const settingsChrome = {
  executablePath: chromeExecutablePath,
  args: [
    '--disable-web-security',
    '--disable-features=IsolateOrigins,site-per-process'
  ],
  headless: false,
  userDataDir: chromeUserDataDir
};

const settingsBrave = {
  executablePath: braveExecutablePath,
  args: [
    '--disable-web-security',
    '--disable-features=IsolateOrigins,site-per-process'
  ],
  headless: false,
  userDataDir: braveUserDataDir
}

module.exports = {
  settingsChrome,
  settingsBrave
}