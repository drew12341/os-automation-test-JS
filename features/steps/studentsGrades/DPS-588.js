const { Then, After, setDefaultTimeout } = require("cucumber");
const { By, until } = require("selenium-webdriver");

const { driver } = require("../commonSteps");

const {
  myGradesLinkXpath,
  myGradesCourseTitleXpath,
} = require("../../../data/elementXpath");

const { errorLog } = require("../../../utilities/function");

setDefaultTimeout(60 * 1000);

const path = require("path");
const { assert } = require("console");
const { strictEqual } = require("assert");

// Get file name
const fileName = path.basename(__filename);

Then(/^click on My Grades link$/, async function () {
  try {
    // Find My Grades link
    var myGradesLink = await driver.wait(
      until.elementLocated(By.xpath(myGradesLinkXpath)),
      30000
    );
  } catch (err) {
    errorLog(fileName, "myGradesLink", myGradesLinkXpath, "3s");
    throw Error(err.message);
  }

  // Click link
  myGradesLink.click();
});

Then(/^check page title$/, async function () {
  // Wait for page load
  await driver.sleep(5000);

  try {
    //  Find page title
    var pageTitle = await driver
      .wait(until.elementLocated(By.css("h1")), 60000)
      .getText();
  } catch (err) {
    errorLog(fileName, "pageTitle", "By.css('h1')", "6s");
    throw Error(err.message);
  }

  // Assert the title is expected
  strictEqual(pageTitle, "My Grades", "Title is not correct");
});

Then(/^check course title$/, async function () {
  try {
    // Find course Title
    var courseTitle = await driver.wait(
      until.elementLocated(By.xpath(myGradesCourseTitleXpath)),
      30000
    );
  } catch (err) {
    errorLog(fileName, "courseTitle", myGradesCourseTitleXpath, "3s");
    throw Error(err.message);
  }

  // Assert course title is displayed
  await courseTitle.isDisplayed();
});

Then(
  /^check all the assignment name and code and grades row$/,
  async function () {
    for (let i = 0; i < 15; i++) {
      // Find assignment name and assert it is displayed
      try {
        const assignmentName = driver.wait(
          until.elementLocated(
            By.xpath(`//*[@id="grades_dt_id${i}"]/div[1]/div[1]`)
          ),
          30000
        );

        await assignmentName.isDisplayed();
      } catch (err) {
        errorLog(
          fileName,
          "assignmentName",
          `*[@id="grades_dt_id${i}"]/div[1]/div[1]`,
          "3s"
        );
        throw Error(err.message);
      }

      // Find assignment code and assert it is displayed
      try {
        const assignmentCode = driver.wait(
          until.elementLocated(
            By.xpath(`//*[@id="grades_dt_id${i}"]/div[1]/div[2]/p`)
          ),
          30000
        );

        await assignmentCode.isDisplayed();
      } catch (err) {
        errorLog(
          fileName,
          "assignmentCode",
          `//*[@id="grades_dt_id${i}"]/div[1]/div[2]/p`,
          "3s"
        );
        throw Error(err.message);
      }

      // Find grade and assert it is displayed
      try {
        const assignmentGrade = await driver.wait(
          until.elementLocated(
            By.xpath(`//*[@id="grades_dt_row_id${i}0"]/div[1]`)
          ),
          30000
        );

        await assignmentGrade.isDisplayed();
      } catch (err) {
        errorLog(fileName, "assignmentGrade", "", "3s");
        throw Error(err.message);
      }
    }
  }
);

Then(
  /^click on each grade and expand collapse to check details of grades$/,
  async function () {
    // Expend collapse for each grade
    for (let i = 0; i < 15; i++) {
      try {
        var collapseButton = await driver.wait(
          until.elementLocated(By.xpath(`//*[@id="grades_dt_detail_id${i}0"]`)),
          30000
        );
      } catch (err) {
        errorLog(
          fileName,
          "collapseButton",
          `//*[@id="grades_dt_detail_id${i}0"]`,
          "3s"
        );
        throw Error(err.message);
      }

      await driver.sleep(5000);

      collapseButton.click();
    }
  }
);

Then(/^check grade name, date graded, date submitted$/, async function () {
  for (let i = 0; i < 15; i++) {
    try {
      var gradeName = driver.wait(
        until.elementLocated(
          By.xpath(`//*[@id="grades_dt_row_id${i}0"]/div[1]`)
        ),
        30000
      );
    } catch (err) {
      errorLog(
        fileName,
        "gradeName",
        `//*[@id="grades_dt_row_id${i}0"]/div[1]`,
        "3s"
      );
      throw Error(err.message);
    }

    await gradeName.isDisplayed();

    try {
      var gradeDate = driver.wait(
        until.elementLocated(
          By.xpath(`//*[@id="grades_dt_row_id${i}0"]/div[2]`)
        ),
        30000
      );
    } catch (err) {
      errorLog(
        fileName,
        "gradeDate",
        `//*[@id="grades_dt_row_id${i}0"]/div[2]`,
        "3s"
      );
      throw Error(err.message);
    }

    await gradeDate.isDisplayed();

    try {
      var gradeSubmitted = driver.wait(
        until.elementLocated(
          By.xpath(`//*[@id="grades_dt_row_id${i}0"]/div[3]`)
        ),
        30000
      );
    } catch (err) {
      errorLog(
        fileName,
        "gradeSubmitted",
        `//*[@id="grades_dt_row_id${i}0"]/div[3]`,
        "3s"
      );
      throw Error(err.message);
    }

    await gradeSubmitted.isDisplayed();
  }
});

// After(async function () {
//   this.driver.close();
// });
