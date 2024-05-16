const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/reports/html/.jsons/*",
  reportPath: "cypress/reports/html/cucumber-html-reports.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "20.04.6",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Diwakar Projects" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
      { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});