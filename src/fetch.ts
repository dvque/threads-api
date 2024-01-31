import { ENDPOINTS_DOCUMENT_ID, GRAPHQL_ENDPOINT, THREADS_APP_ID } from "./consts";

const fetchBase = ({ documentId, variables } : {documentId: string, variables: string} ) => {
    return fetch (GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)',
            'x-ig-app-id': THREADS_APP_ID
        },
        body: `variables=${variables}&doc_id=${documentId}`
        })
    .then(res => res.json())
}

export const fetchUserProfile = ({ userId }: { userId: string }) => {
    const variables = JSON.stringify({ userID: userId });
    return fetchBase({ documentId: ENDPOINTS_DOCUMENT_ID.USER_PROFILE, variables })
}