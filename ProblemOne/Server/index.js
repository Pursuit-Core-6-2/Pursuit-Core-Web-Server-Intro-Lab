const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200

    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*');

    const json = {
            "results": [
              {
                "gender": "female",
                "name": {
                  "title": "mademoiselle",
                  "first": "ruth",
                  "last": "nicolas"
                },
                "nat": "CH"
              },
              {
                "gender": "female",
                "name": {
                  "title": "miss",
                  "first": "رها",
                  "last": "سلطانی نژاد"
                },
                "nat": "IR"
              },
              {
                "gender": "female",
                "name": {
                  "title": "mrs",
                  "first": "patricia",
                  "last": "hale"
                },
                "nat": "GB"
              },
              {
                "gender": "male",
                "name": {
                  "title": "mr",
                  "first": "fernando",
                  "last": "cooper"
                },
                "nat": "US"
              },
              {
                "gender": "female",
                "name": {
                  "title": "mrs",
                  "first": "یسنا",
                  "last": "صدر"
                },
                "nat": "IR"
              },
              {
                "gender": "male",
                "name": {
                  "title": "mr",
                  "first": "eino",
                  "last": "tuomala"
                },
                "nat": "FI"
              },
              {
                "gender": "female",
                "name": {
                  "title": "ms",
                  "first": "gonca",
                  "last": "özkara"
                },
                "nat": "TR"
              },
              {
                "gender": "male",
                "name": {
                  "title": "mr",
                  "first": "kyle",
                  "last": "castillo"
                },
                "nat": "US"
              },
              {
                "gender": "female",
                "name": {
                  "title": "miss",
                  "first": "olivia",
                  "last": "kumar"
                },
                "nat": "NZ"
              },
              {
                "gender": "male",
                "name": {
                  "title": "monsieur",
                  "first": "raymond",
                  "last": "durand"
                },
                "nat": "CH"
              }
            ],
            "info": {
              "seed": "2cb086ce097c87ee",
              "results": 10,
              "page": 1,
              "version": "1.2"
          }
     }                    

res.end(JSON.stringify(json))    
})

server.listen(port, () => {
    console.log("I am listening on port 3000")
})