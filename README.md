### API Resources

  - [GET /notes]
  - [GET /notes/[id]]
  - [POST /notes]
  - [PUT /notes]
  - [DELETE /notes]

### GET /notes

Example: http://localhost:3000/notes

Response body:

    {
        "results": [
            {
			    "id": 2351,
			    "title": 'title1',
			    "date": '12-30-2018',
			    "author": 'me',
			    "text": 'sample1',
            },
            {
			    
			    "id": 2352,
			    "title": 'title2',
			    "date": '12-31-2018',
			    "author": 'me',
			    "text": 'sample1',
            }
        ]
    }

### GET /notes/[id]

Example: http://localhost:3000/notes

Response body:

    {
        

	    "id": 2351,
	    "title": 'title1',
	    "date": '12-30-2018',
	    "author": 'me',
	    "text": 'sample1',
        
    }



### POST /notes

Example: http://localhost:3000/notes

Response body:

    {
        

	    "id": 2351,
	    "title": 'title1',
	    "date": '12-30-2018',
	    "author": 'me',
	    "text": 'sample1',
        
    }


### PUT /notes

Example: http://localhost:3000/notes/2351

Response body:

    {
        

	    "id": 2351,
	    "title": 'title1',
	    "date": '12-30-2018',
	    "author": 'me',
	    "text": 'sample1',
        
    }

### DELETE /notes

Example: http://localhost:3000/notes/2351
