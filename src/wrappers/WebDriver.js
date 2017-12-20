'use strict';

const TargetLocator = require('../TargetLocator');


class WebDriver {

  /**
   *
   * @param {Object} remoteWebDriver
   */
  constructor(remoteWebDriver) {
    this._remoteWebDriver = remoteWebDriver;
  }


  defaultContent() {
    return this._remoteWebDriver.frame();
  }


  switchTo() {
    return new TargetLocator(this);
  }


  frame(id) {
    return this._remoteWebDriver.frame(id);
  }


  sleep(ms) {
    return this._remoteWebDriver.pause(ms);
  }


  quit() {
    return this._remoteWebDriver.end();
  }


  get remoteWebDriver() {
    return this._remoteWebDriver;
  }



}

module.exports = WebDriver;