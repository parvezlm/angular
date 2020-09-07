const fs = require('fs');
const express = require('express');
const { parse } = require('path');
const app = express();

app.use(express.json());

const employeesData = JSON.parse(
    fs.readFileSync(`${__dirname}/data/data.json`)
);

// get all employees
app.get('/api/employess', (req,res) => {
    fs.readFile(`${__dirname}/data/data.json`, 'utf-8',(err,data) => {
        res.send(data);
    })
});


// get single employee
app.get('/api/employess/:id', (req,res)=> {
    fs.readFile(`${__dirname}/data/data.json`, 'utf-8', (err,data)=> {
        let dataParse = JSON.parse(data);
        let found = dataParse.data.find((item)=> item.id === parseInt(req.params.id));
        if(!found) {
            res.send(404);
        }else {
            res.send(found);
        }
    });
});

// create employee
app.post('/api/employess',(req,res)=> {
    let newEmployee;

    if(employeesData.data.length == 0) {
        newEmployee = Object.assign({id:employeesData.data.length + 1}, req.body);
    }else {
        let newId = employeesData.data[employeesData.data.length - 1].id * 1 + 1;
        newEmployee = Object.assign({id:newId}, req.body);
    }

    employeesData.data.push(newEmployee);

    fs.writeFile(`${__dirname}/data/data.json`,JSON.stringify(employeesData),err => {
        res.status(201).json({
            status:'success',
            data: {
                employee: newEmployee
            }
        })
    })
});


// update employee
app.put('/api/employess/:id', (req,res)=> {
    const id = req.params.id * 1;

    // get item object match by `id`
    const findemp = employeesData.data.find((item) => item.id === id);
    
    // check if item found
    if(findemp) {
        let updated = {
            id: findemp.id,
            employee_name: req.body.employee_name,
            employee_salary: req.body.employee_salary,
            employee_age: req.body.employee_age,
            profile_image: req.body.profile_image
        }

    // find index of found object
    let targetIndex = employeesData.data.indexOf(findemp);
    // console.log(employeesData.data.splice(targetIndex, 1))

    // replace object from data list with `updated` object
    employeesData.data.splice(targetIndex, 1, updated);

    fs.writeFile(`${__dirname}/data/data.json`, JSON.stringify(employeesData), err=> {
        res.status(201).json({
            status:'success',
            data: {
                employee: updated
            }
        })
    });
    }else {
        res.sendStatus(404);
    }  
});


// DELETE
app.delete('/api/employess/:id', (req, res)=> {
    // find item from array of data
    let found = employeesData.data.find((item)=> item.id === parseInt(req.params.id));

    if (found) {
        // finde index number
        let targetIndex = employeesData.data.indexOf(found);

        // splice means delete item from `data` array using index
        employeesData.data.splice(targetIndex, 1);

        // create file after delete data
        fs.writeFile(`${__dirname}/data/data.json`,JSON.stringify(employeesData), err=> {
            res.status(201).json({
                status:  'success',
                data: {
                    employee:found
                }
            })
        })
    }else {
        res.sendStatus(404);
    }
});



app.listen(3000, () => {
    console.log('app listen on port:3000')
})