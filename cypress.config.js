const { defineConfig } = require("cypress");

const { addCucumberPreprocessorPlugin,} = require("@badeball/cypress-cucumber-preprocessor");
const { preprocessor, } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const ExcelJs = require('exceljs');

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  on('task',{
    // If only one argument is there then you can write it () parenthesis
    excelToJsonCoverter(filePath) {
      const result = excelToJson({
        source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
      });

      return result;
    }
  })

  on('task', {
    // If you have multiple argument then you have to write it under ({}) curly braces inside parenthesis
      async writeExcel({searchText, setValue, change, filePath}) {

      const workbook = new ExcelJs.Workbook();
      await workbook.xlsx.readFile(filePath);
      const worksheet = workbook.getWorksheet('Sheet1');
      const output = readExcel(worksheet, searchText);
  
      const cell = worksheet.getCell(output.row,output.col+change.colChange);
      cell.value = setValue;
      console.log(cell.value);
      // to save it in local doc level
      // We can have many awaits under one async function
      // Promise : Pending Resolve & Rejected
      return workbook.xlsx.writeFile(filePath).then(()=>{
        return true;
      }).catch((error)=>{
        return false;
      });
  
  }
  })
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

function readExcel(worksheet, searchText) {
  let output = {row:-1, col:-1};
  worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell, colNumber) => {
          // console.log(cell.value);
          if (cell.value === searchText) {
              output.row = rowNumber;
              output.col = colNumber;
              console.log("rowNumber : "+rowNumber);
              console.log("colNumber : "+colNumber);
          }

      })
  })

  return output;
}


module.exports = defineConfig({
  projectId: 'd3bqgj',

  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 6000,
  viewportHeight: 900,
  viewportWidth: 1440,
  retries: {
    runMode: 1,
    // openMode: 0,
  },
  env: {
    url: "https://rahulshettyacademy.com"
  },
  e2e: {
    // This helps load all your plugins before you run your tests
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    //   require('cypress-mochawesome-reporter/plugin')(on);
    // },

    setupNodeEvents,
    // specPattern: "cypress/integration/*/BDD/*.feature"
    specPattern: "cypress/integration/*/*.js"

    
  },

});
