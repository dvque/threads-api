import { ENDPOINTS_DOCUMENT_ID, GRAPHQL_ENDPOINT, THREADS_APP_ID } from "./consts";
import { IS_DEBUG } from "./env";

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

export const fetchUserIdByName = ({ userName }: { userName: string }) => {
    if(IS_DEBUG) console.info(`https://www.threads.net/@${userName}`)

    return fetch(`https://www.threads.net/@${userName}`)
    .then(res => res.text())
    .then(html => { 
        // "props":{"user_id":"8242141302"}
        const regex = /"user_id":"(\d+)"/g;
        const [[,userId]] = html.matchAll(regex) ?? [];
        return userId
    })
}

export const fetchUserProfile = ({ userId }: { userId: string }) => {
    const variables = JSON.stringify({ userID: userId });
    return fetchBase({ documentId: ENDPOINTS_DOCUMENT_ID.USER_PROFILE, variables })
}

export const fetchUserThreads = ({ userId }: {userId: string}) => {
    const variables = JSON.stringify({ userID: userId });
    return fetchBase({ documentId: ENDPOINTS_DOCUMENT_ID.USER_THREADS, variables })
}