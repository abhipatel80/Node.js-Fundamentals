import express from 'express';
const app = express();
const port = 3000;

import fs from 'fs';
import { sum, multiply } from './module.js';

// Built in module
// ---------------------fs module---------------------
// fs.writeFile("text.txt", "Hello", () => { });
fs.readFile("text.txt", { encoding: 'utf8' }, (err, data) => { console.log(data); });

// Custom module
console.log(sum(10, 8));
console.log(multiply(10, 8));

app.listen(port, () => {
    console.log(`Application Listening on port ${port}`);
});
