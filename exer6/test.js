const needle = require('needle');

// Test save-student endpoint for multiple students
needle.post('http://localhost:3000/api/save-student', { stdnum: '123456789', fname: 'John', lname: 'Doe', age: 25 }, (err, response) => {
  if (err) throw err;
  console.log(response.body);
});

needle.post('http://localhost:3000/api/save-student', { stdnum: '987654321', fname: 'Jane', lname: 'Smith', age: 30 }, (err, response) => {
  if (err) throw err;
  console.log(response.body);
});

needle.post('http://localhost:3000/api/save-student', { stdnum: '456789123', fname: 'Alice', lname: 'Johnson', age: 22 }, (err, response) => {
  if (err) throw err;
  console.log(response.body);
});

// Test update endpoint
needle.post('http://localhost:3000/api/update', { fname: 'Mary Jane' }, (err, response) => {
  if (err) throw err;
  console.log(response.body);
});

// Test remove-user endpoint
needle.post('http://localhost:3000/api/remove-user', { stdnum: '123456789' }, (err, response) => {
  if (err) throw err;
  console.log(response.body);
});

// Test remove-all-user endpoint
needle.post('http://localhost:3000/api/remove-all-user', (err, response) => {
  if (err) throw err;
  console.log(response.body);
});

// Test user endpoint
needle.get('http://localhost:3000/api/user?stdnum=123456789', (err, response) => {
  if (err) throw err;
  console.log(response.body);
});

// Test members endpoint
needle.get('http://localhost:3000/api/members', (err, response) => {
  if (err) throw err;
  console.log(response.body);
});
