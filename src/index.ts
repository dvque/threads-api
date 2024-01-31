
import { fetchUserProfile } from "./fetch";

const midudevId = '8242141302';

const response = await fetchUserProfile({ userId: midudevId });
console.log(response);