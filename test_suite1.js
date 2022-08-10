var passwordtext = 'password';
var logintext = 'admin';
var nametext = 'Joe Shmo';
var emailtext = "joe.shmo@cgi.com";
var subjecttext = "subject text";
var phonetext = 45656567899;
var descriptiontext = "description text";
var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
 driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
describe('Login Page', function() {
  it('Login Page should work', function() {
    
driver.get('https://automationintesting.online/#/admin');
    var username = driver.findElement(webdriver.By.id('username'));
    username.sendKeys(login);
   
    var password = driver.findElement(webdriver.By.id('password'));
    password.sendKeys(passwordtext);
    password.getAttribute('value').then(function(value) {
      assert.equal(value, passwordtext);
    }); 
    username.getAttribute('value').then(function(value) {
      assert.equal(value, logintext);
    });
    var login = driver.findElement(webdriver.By.id('doLogin'));
    login.click();
  });
  driver.quit();
});
describe('Front Page', function() {
  it('Front Page should work ', function() {
    
driver.get('https://automationintesting.online/#/admin');
var username = driver.findElement(webdriver.By.id('username'));
username.sendKeys(logintext);
var password = driver.findElement(webdriver.By.id('password'));
password.sendKeys(passwordtext);
    var frontPageLink = driver.findElement(webdriver.By.id('frontPageLink'));
    frontPageLink.click();
    var name = driver.findElement(webdriver.By.id('name'));
    name.sendKeys(nametext);
    var email  = driver.findElement(webdriver.By.id('email'));
    email.sendKeys(emailtext);
    var phone  = driver.findElement(webdriver.By.id('phone'));
    phone.sendKeys(phonetext);
    var subject  = driver.findElement(webdriver.By.id('subject'));
    subject.sendKeys(subjecttext);
    var description  = driver.findElement(webdriver.By.id('description'));
    description.sendKeys(descriptiontext);
    var submit = driver.findElement(webdriver.By.id('submitContact'));
    submit.click();
    var gettingInTouch = driver.findElement(webdriver.By.xpath('/html/body/div/div/div/div[5]/div[2]/div/h2'));
    gettingInTouch.getAttribute('value').then(function(value) {
      assert.equal(value, nametext);
    });
  });
  driver.quit();
});
describe('Rooms Page Details', function() {
  it('Rooms Page should work', function() {
driver.get('https://automationintesting.online/#/admin');
    var roomName = driver.findElement(webdriver.By.id('roomName'));
    roomName.sendKeys(102);
    var roomPrice = driver.findElement(webdriver.By.id('roomPrice'));
    roomPrice.sendKeys(50);
    var wifiCheckbox = driver.findElement(webdriver.By.id('wifiCheckbox'));
    wifiCheckbox.click();
    var refreshCheckbox = driver.findElement(webdriver.By.id('refreshCheckbox'));
    refreshCheckbox.click();
    var tvCheckbox = driver.findElement(webdriver.By.id('tvCheckbox'));
    tvCheckbox.click();
    var safeCheckbox = driver.findElement(webdriver.By.id('safeCheckbox'));
    safeCheckbox.click();
    var radioCheckbox = driver.findElement(webdriver.By.id('radioCheckbox'));
    radioCheckbox.click();
    var safeCheckbox = driver.findElement(webdriver.By.id('safeCheckbox'));
    safeCheckbox.click();
    var viewsCheckbox = driver.findElement(webdriver.By.id('viewsCheckbox'));
    viewsCheckbox.click();
    var createRoom = driver.findElement(webdriver.By.id('createRoom'));
    createRoom.click();
    var details = driver.findElement(webdriver.By.id('detailsWiFi,TV,Radio,Refreshments,Safe,Views'));
    details.getAttribute('value').then(function(value) {
      assert.equal(value, "WiFi, TV, Radio, Refreshments, Safe, Views");
    });
  });
  driver.quit();
});
describe('Rooms Page Details', function() {
  it('Rooms Page create 2 rooms should work', function() {
driver.get('https://automationintesting.online/#/admin');
    var roomName = driver.findElement(webdriver.By.id('roomName'));
    roomName.sendKeys(102);
    var roomPrice = driver.findElement(webdriver.By.id('roomPrice'));
    roomPrice.sendKeys(50);
    var wifiCheckbox = driver.findElement(webdriver.By.id('wifiCheckbox'));
    wifiCheckbox.click();
    var refreshCheckbox = driver.findElement(webdriver.By.id('refreshCheckbox'));
    refreshCheckbox.click();
    var tvCheckbox = driver.findElement(webdriver.By.id('tvCheckbox'));
    tvCheckbox.click();
    var safeCheckbox = driver.findElement(webdriver.By.id('safeCheckbox'));
    safeCheckbox.click();
    var radioCheckbox = driver.findElement(webdriver.By.id('radioCheckbox'));
    radioCheckbox.click();
    var safeCheckbox = driver.findElement(webdriver.By.id('safeCheckbox'));
    safeCheckbox.click();
    var viewsCheckbox = driver.findElement(webdriver.By.id('viewsCheckbox'));
    viewsCheckbox.click();
    var createRoom = driver.findElement(webdriver.By.id('createRoom'));
    createRoom.click();
    roomName.sendKeys(103);
    var roomPrice = driver.findElement(webdriver.By.id('roomPrice'));
    roomPrice.sendKeys(70);
    var wifiCheckbox = driver.findElement(webdriver.By.id('wifiCheckbox'));
    wifiCheckbox.click();
    var refreshCheckbox = driver.findElement(webdriver.By.id('refreshCheckbox'));
    refreshCheckbox.click();
    var tvCheckbox = driver.findElement(webdriver.By.id('tvCheckbox'));
    tvCheckbox.click();
    var safeCheckbox = driver.findElement(webdriver.By.id('safeCheckbox'));
    safeCheckbox.click();
    var radioCheckbox = driver.findElement(webdriver.By.id('radioCheckbox'));
    radioCheckbox.click();
    var details = driver.findElement(webdriver.By.id('detailsWiFi,TV,Radio'));
    details.getAttribute('value').then(function(value) {
      assert.equal(value, "WiFi, TV, Radio");
    });
  });
  driver.quit();
});
describe('Rooms Page', function() {
  it('Rooms Page Details should work', function() {
driver.get('https://automationintesting.online/#/admin');
    var roomName = driver.findElement(webdriver.By.id('roomName'));
    roomName.sendKeys(102);
    var roomPrice = driver.findElement(webdriver.By.id('roomPrice'));
    roomPrice.sendKeys(50);
    var wifiCheckbox = driver.findElement(webdriver.By.id('wifiCheckbox'));
    wifiCheckbox.click();
    var refreshCheckbox = driver.findElement(webdriver.By.id('refreshCheckbox'));
    refreshCheckbox.click();
    var tvCheckbox = driver.findElement(webdriver.By.id('tvCheckbox'));
    tvCheckbox.click();
    var safeCheckbox = driver.findElement(webdriver.By.id('safeCheckbox'));
    safeCheckbox.click();
    var radioCheckbox = driver.findElement(webdriver.By.id('radioCheckbox'));
    radioCheckbox.click();
    var safeCheckbox = driver.findElement(webdriver.By.id('safeCheckbox'));
    safeCheckbox.click();
    var viewsCheckbox = driver.findElement(webdriver.By.id('viewsCheckbox'));
    viewsCheckbox.click();
    var createRoom = driver.findElement(webdriver.By.id('createRoom'));
    createRoom.click();
    var room2 = driver.findElement(webdriver.By.id('room2'));
    room2.click();
    driver.findElement(webdriver.By.xpath('//*[@id="root"]/div/div/div/div/div/div[1]/div[1]/div[1]/h2')).getAttribute('value').then(function(value) {
      assert.equal(value, "Room: 102");
    });
  });
  driver.quit();
});



describe('Logout Page', function() {
  it('Logout Page should work', function() {
    
driver.get('https://automationintesting.online/#/admin');
    var logout = driver.findElement(webdriver.By.xpath('/html/body/div/div/nav/div[3]/ul/li[3]/a'));
    logout.click();
   
    var logT = driver.findElement(webdriver.By.xpath('/html/body/div/div/div/div/div/div/div[1]/div[2]/h2'));
    logT.getAttribute('value').then(function(value) {
      assert.equal(value, "Log into your account");
    }); 
  });
  driver.quit();
});