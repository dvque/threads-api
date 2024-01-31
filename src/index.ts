
import { fetchUserIdByName, fetchUserProfile, fetchUserThreads } from "./fetch";

const midudevId = '8242141302';

const response = await fetchUserIdByName({ userName: 'midu.dev' });
console.log(response);