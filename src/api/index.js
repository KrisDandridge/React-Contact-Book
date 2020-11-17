export const fetchAPI = async (url, method="GET", sendData=null) => {
    const fetchOptions = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtyaXMiLCJpYXQiOjE2MDU1NzM1ODcsImV4cCI6MTYwNjE3ODM4N30.HTJ_jj16FV4VOxIqOR3-CRDv74UYUApQUGqD3n_fcg8'
      }
    };
  
    if (sendData) {
      fetchOptions.body = JSON.stringify(sendData);
    }
  
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
  
    return data;
}