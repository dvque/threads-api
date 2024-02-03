import { ThreadsUserProfileResponse } from "../types/threads-api";

export const mapUserProfile = (rawResponse: ThreadsUserProfileResponse) => {
    const userApiResponse = rawResponse?.data?.userData?.user
    if (!userApiResponse) return null

    const { username, is_verified, biography, follower_count, bio_links, pk: id, full_name, profile_pic_url, hd_profile_pic_versions } = userApiResponse

    const profile_pics = [{
        height: 150,
        width: 150,
        url: profile_pic_url
    }, ...hd_profile_pic_versions]

    return {
        id,
        username,
        isVerified: is_verified,
        biography,
        followerCount: follower_count,
        bioLinks: bio_links,
        fullName: full_name,
        profilePics: profile_pics
    }
}