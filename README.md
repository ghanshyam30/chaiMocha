

##Reference
https://www.youtube.com/watch?v=zHzaUtHncQg

## Purpose
To understand basics of chai and mocha

## Mocha
This is a test framework

## Chai 
This is an assertion library

- Only files having name test.js will be executed by mocha
- If user wishes to have multiple files then have a folder named test and any number of files with any names under it.
- We can have test suite under a test suite, for that we need to create nested describe functions
- To skip individual test or a test suite we need to add skip in the declaration like "it.skip" and "describe.skip"
- To run only 1 test case or 1 test suite out of all we need to add .only like so "it.only" and "describe.only"

## How to execute
- Get to the directory where test file or folder is
- open terminal and run "npx mocha" command