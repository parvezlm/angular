const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());


const moviesData = JSON.parse(
    fs.readFileSync(`${__dirname}/data/data.json`)
);


// read data
app.get('/api/movies', (req,res)=> {
    fs.readFile(`${__dirname}/data/data.json`, 'utf-8', (err,data)=> {
        if(data) {
            res.send(data);
        }else {
            res.sendStatus(404)
        }
    })
});

app.get('/api/movies/:id', (req,res)=> {
    fs.readFile(`${__dirname}/data/data.json`, 'utf-8', (err,data)=> {
        let movie = JSON.parse(data);
        let found = movie.movies.find((item)=> item.id === parseInt(req.params.id));
        if(!found) {
            res.send(404);
        }else {
            res.send(found);
        }
    })
})


// create data
app.post('/api/movies', (req,res)=> { 
    let new_movie;

    if(moviesData.movies.length == 0) {
        new_movie = Object.assign({id:moviesData.movies.length + 1}, req.body);
    }else {
        let newId = moviesData.movies[moviesData.movies.length - 1].id * 1 + 1;
        new_movie = Object.assign({id:newId}, req.body);
    }

    // check if data already exit in db
    
        let found = moviesData.movies.find((item)=> item.name == new_movie.name);
        if(found) {
            res.send('already exits');
            return false
        }
    
   
        moviesData.movies.push(new_movie);

    
    fs.writeFile(`${__dirname}/data/data.json`, JSON.stringify(moviesData), (err)=> {
        res.status(201).json({
            status:"success",
            data: {
                movie:new_movie
            }
        })
    })
})

// update data
app.put('/api/movies/:id', (req,res)=> {
    let id = parseInt(req.params.id);
    let found = moviesData.movies.find((item)=> item.id == id);

    if(!found) {
        return false
    }

    if(found) {
        let updateMovie = {
            id:found.id,
            name:req.body.name,
            release_date:req.body.release_date,
            rating:req.body.rating,
            review:req.body.review,
            category:req.body.category,
            language:req.body.language,
            industry:req.body.industry,
            banner:req.body.banner,
            producer:req.body.producer,
            director:req.body.director,
            cast:req.body.cast,
            poster:req.body.poster,
            description:req.body.description
        }

        let targetIndex = moviesData.movies.indexOf(found);
        moviesData.movies.splice(targetIndex, 1, updateMovie);

        fs.writeFile(`${__dirname}/data/data.json`, JSON.stringify(moviesData), err=> {
            res.status(201).json({
                status:"success",
                data: {
                    movie: updateMovie
                }
            })
        })

    }else {
        res.sendStatus(404)
    }
});


// delete data
app.delete('/api/movies/:id', (req,res)=> {
    let id = parseInt(req.params.id);
    let found = moviesData.movies.find((item)=> item.id == id);

    if(found) {
        let targetIndex = moviesData.movies.indexOf(found);
        moviesData.movies.splice(targetIndex, 1);

        fs.writeFile(`${__dirname}/data/data.json`, JSON.stringify(moviesData), err=> {
            res.status(201).json({
                status: "success",
                movie: found
            })
        })
    }else {
        res.sendStatus(404);
    }
})

// server
app.listen(3000, ()=> {
    console.log('Server listining on the port:3000');
})

