fetch ('https://www.threads.net/api/graphql', {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)',
        'x-ig-app-id':'238260118697367'
    },
    body: 'variables={ "userID": "8242141302" }&doc_id=23996318473300828'
    })
.then(res => res.json())
.then(res => console.log(res))