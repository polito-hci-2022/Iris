function getJson(httpResponsePromise) {
  // server API always return JSON, in case of error the format is the following { error: <message> } 
  return new Promise((resolve, reject) => {
    httpResponsePromise
      .then((response) => {
        if (response.ok) {

         // the server always returns a JSON, even empty {}. Never null or non json, otherwise the method will fail
         response.json()
            .then( json => resolve(json) )
            .catch( err => reject({ error: "Cannot parse server response" }))

        } else {
          // analyzing the cause of error
          response.json()
            .then(obj => 
              reject(obj)
              ) // error msg in the response body
            .catch(err => reject({ error: "Cannot parse server response" })) // something else
        }
      })
      .catch(err => 
        reject({ error: "Cannot communicate"  })
      ) // connection error
  });
}


function getMemory() {
  return getJson(
    fetch("http://localhost:3001/api/memory",{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(),
    })
  )
}

function getPageCastleStory() {
  return getJson(
    fetch("http://localhost:3001/api/page",{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(),
    })
  )
}

function getTest() {
  return getJson(
    fetch("http://localhost:3001/api/test",{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(),
    })
  )
}

function getTestResults() {
  return getJson(
    fetch("http://localhost:3001/api/test/results",{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(),
    })
  );
}

function addMemory() {
  return getJson(
    fetch("http://localhost:3001/api/memory",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({}),
    })
  )
}

function addPageCastleStory() {
  return getJson(
    fetch("http://localhost:3001/api/pageCastleStory",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({}),
    })
  )
}

function addTest() {
  return getJson(
    fetch("http://localhost:3001/api/test",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({}),
    })
  )
}

function saveTestResults(ans1, ans2) {
  return getJson(
    fetch("http://localhost:3001/api/test/results",{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ answer1:ans1, answer2:ans2}),
    })
  )
}

const deleteMemory = async () => {
  return getJson(
    fetch("http://localhost:3001/api/memory",{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(),
    })
  )
}

const deletePageCastleStory = async () => {
  return getJson(
    fetch("http://localhost:3001/api/pageCastleStory",{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(),
    })
  )
}

const deleteTest = async () => {
  return getJson(
    fetch("http://localhost:3001/api/test",{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(),
    })
  )
}


const API = { getMemory, getPageCastleStory, getTest, getTestResults, addMemory, addPageCastleStory, addTest, saveTestResults, deleteMemory, deletePageCastleStory, deleteTest};
export default API;