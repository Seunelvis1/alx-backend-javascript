function handleResponseFromAPI(promise){
 return promise
	.then({status : 200, body : 'Success'})
	.catch(new Error(''))
	.finally('Got a response from the API')


}