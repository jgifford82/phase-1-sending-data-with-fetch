// Add your code here
function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
  method: "POST",  
  headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
  },
  body: JSON.stringify({
        name: `${name}`,
        email: `${email}`,
    }),

  })
  .then(response => response.json())
//   .then(object => console.log(object.id))
  .then(object => document.body.innerHTML = object.id)
  .catch(function (error) {
      alert("Unauthorized Access");
      return (document.body.innerHTML = error.message);
  })
}



// In submitData, write a valid POST request to http://localhost:3000/users using fetch(). This request should include:

// The destination URL
// Headers for 'Content-Type' and 'Accept', both set to 'application/json'
// A body with the name and email passed in as arguments to submitData. These should be assigned to name and email keys within an object. This object should then be stringified.

// .catch(function (error) {
//     alert("Message");
//     console.log(error.message);
// })



// Various attempts at adding the JSON object ID to the DOM:
  //   .then(object => object.id.document.appendChild(body))
//   .then(object => object.id.document.body.appendChild())
//     return (.then(response => response.json()));
//   .then(object => document.body.innerHTML.append(object.id))
//   .then(object => object.id.append(document.body.innerHTML))
//   .then(object.id.append(document.body.innerHTML)) 
//   .then(object => object.id.document.body.innerHTML)

// const id = object.id
// const body = document.querySelector('body')
// body.appendChild(id);
// document.body.innerHTML = `${id}`