var axios = require('axios');

//sourceURL = "z21-store-cloner";
//encoded = "Basic MTkzZmQ5OTdhZGU3ODJhNjA1OWI0OWJhZWFiZGU2Nzg6c2hwcGFfMjU2NGNjNWI1ZDI3YjU4MjcwNTdjN2RmZDk1Y2M3ZjA=";
module.exports = function (sourceURL, encoded) {
    
}
async function postData(myBlogs) {
    return new Promise(resolve => {
        for (i = 0; i < 1; i++) {

            var data = JSON.stringify({
                "article": myBlogs.blogs[i]
            });
            console.log(data);
            //console.log(data);
            var config = {
                method: 'post',
                url: `https://${destinationURL}.myshopify.com/admin/api/2021-01/blogs.json`,
                headers: {
                    'Authorization': encodeKeys(apiKey_dest,apiSecret_dest),
                    'Content-Type': 'application/json',
                },
                data: data
            }
            console.log(data);
            /*
            axios(config)
                .then(function (response) {
                    resolve(JSON.stringify(response.data));
                })
                .catch(function (errors) {
                    resolve(JSON.stringify(errors));
                });
            sleep(1000);
            */
        };
    });
   
}