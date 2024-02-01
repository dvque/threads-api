
import { fetchUserIdByName, fetchUserProfile, fetchUserThreads } from "./fetch";

const midudevId = '8242141302';

const response = await fetchUserThreads({ userName: 'midu.dev' });
console.log(response);