function requestApi(searchTerm){
    const url = `https://noy33phhn9.execute-api.us-east-1.amazonaws.com/dev/api/freight=${searchTerm}`
    fetch(url)
    .then((response)=>response.json)
    .then((result)=>displayResults(result))
}