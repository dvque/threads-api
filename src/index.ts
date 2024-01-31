
import { fetchUserProfile } from "./fetch";

const midudevId = '8242141302';

(async () => {
    const response = await fetchUserProfile({ userId: midudevId });
    console.log(response);
})();
