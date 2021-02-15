# Shopify Blog Import Script
This script uses the [Shopify Admin API](https://shopify.dev/docs/admin-api) to achieve the following:

1) Get blogs from a store
2) Post the blogs from source to destination store
## Installing
```
$ npm install
```
```
$ npm start
```
## Prerequisites 
This script requires a .env file on the root folder to retreive the API Key and API Secret as shown below:
```
apiKey = 'YOUR API KEY'
apiSecret = 'YOUR API SECRET'
```
See [dotenv](https://www.npmjs.com/package/dotenv) for more info.


```javascript
//Enter Source and Destination Store URLs without .myshopify.com (EDIT ME)
var sourceURL = "z21-store-cloner"
var destinationURL = "getha-thailand"
```
## importBlogs.js
Using [Axios](https://github.com/axios/axios), this script first sends a GET request to the endpoint [https://{storeURL}.myshopify.com/admin/api/2021-01/blogs.json](https://{storeURL}.myshopify.com/admin/api/2021-01/blogs.json) (hardcoded into the URL parameter for now), and console logs the result.

After retreving all the articles, importArticles.js can be used to send a POST request to the endpoint [https://{storeURL}.myshopify.com/admin/api/2021-01/blogs.json](https://{storeURL}.myshopify.com/admin/api/2021-01/blogs.json). A successful POST request will respond with 
>Imported Successfully!
and respond with the blog sent in JSON. 

This is done in a forloop for the length of the blog array.

## Future Improvements
Future developments include intergrating importing the individual articles without changin the endpoint URLs. This script can be extended to import pages, products, collections in the same manner, using the [Shopify Admin API](https://shopify.dev/docs/admin-api).