/// <reference types="cypress"/>

const ExcelJs = require('exceljs');

// One way: To use async and await

async function writeExcel(searchText, setValue, change, filePath) {


    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = readExcel(worksheet, searchText);

    const cell = worksheet.getCell(output.row,output.col+change.colChange);
    cell.value = setValue;
    console.log(cell.value);
    // to save it in local doc level
    // We can have many awaits under one async function
    await workbook.xlsx.writeFile('/home/diwakar@simform.dom/Downloads/download.xlsx');

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

writeExcel("Mango","350",{rowChange:0, colChange: 2},"/home/diwakar@simform.dom/Downloads/download.xlsx");


// // One way: To use async and await
// async function excelJsTest() {

//     let output = {row:-1, col:-1};

//     const workbook = new ExcelJs.Workbook();
//     await workbook.xlsx.readFile('/home/diwakar@simform.dom/Downloads/download.xlsx');
//     const worksheet = workbook.getWorksheet('Sheet1');
//     worksheet.eachRow((row, rowNumber) => {
//         row.eachCell((cell, colNumber) => {
//             // console.log(cell.value);
//             if (cell.value === "Kivi") {
//                 output.row = rowNumber;
//                 output.col = colNumber;
//                 console.log("rowNumber : "+rowNumber);
//                 console.log("colNumber : "+colNumber);
//             }

//         })
//     })

//     const cell = worksheet.getCell(output.row,output.col);
//     cell.value = "Dangoo";
//     console.log(cell.value);
//     // to save it in local doc level
//     // We can have many awaits under one async function
//     await workbook.xlsx.writeFile('/home/diwakar@simform.dom/Downloads/download.xlsx');

// }

// If you want replace an exisiting cell value

// To use then() functon.
// const workbook = new ExcelJs.Workbook();
//     workbook.xlsx.readFile('/home/diwakar@simform.dom/Downloads/download.xlsx').then(function() {
//         const worksheet = workbook.getWorksheet('Sheet1');
//         worksheet.eachRow((row, rowNumber) => {
//             row.eachCell((cell, cellNumber) => {
//                 console.log(cell.value);
//             })
//         })
//     })
    

// excelJsTest();
