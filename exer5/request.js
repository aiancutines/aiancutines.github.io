import needle from 'needle';

needle.post(    
    'http://localhost:3000/add-book',
    {
    book_name: "21",
    ISBN: "0000",
    author: "Adrian",
    year_published: "2000",

    },
    (err, res) => {
      console.log(res.body)   // prints the server’s response “Received a POST request.”
    }
  );