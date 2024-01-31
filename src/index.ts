import { ENDPOINTS_DOCUMENT_ID, GRAPHQL_ENDPOINT, THREADS_APP_ID } from "./consts";

fetch (GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)',
        'x-ig-app-id': THREADS_APP_ID
    },
    body: `variables={ "userID": "8242141302" }&doc_id=${ENDPOINTS_DOCUMENT_ID.USER_PROFILE}`
    })
.then(res => res.json())
.then(res => console.log(res))