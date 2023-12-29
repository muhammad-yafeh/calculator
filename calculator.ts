import inquirer from 'inquirer';
 import {sum} from './operations.js';
 import {sub} from './operations.js';
 import {divide} from './operations.js';
 import { multiply } from './operations.js';
 let ans=await inquirer.prompt([
{type:"number",
name:"num1",
message:"enter your first number"},
{type:"number",
name:"num2",
message:"enter your second number"},
{type:"list",
name:"operator",
choices:["add","sub","multiply","divide"],
message:"enter your operator"}]
)
console.log(ans);
const {num1,num2,operator}=ans;
let result:number=0;
if(operator=="add"){result=num1+num2};
if(operator=="sub"){result=num1-num2};
if(operator=="multiply"){result=num1*num2};
if(operator=="divide"){result=num1/num2};
console.log(result);
 


