const version_3_2 = "v3.2";
const User_id = process.env.User_id;

export const getBuissnessDiscovery = (username, after) => {
  let url;
  if (after) {
    url = `${version_3_2}/${User_id}?fields=business_discovery.username(${username}){followers_count,media_count,biography,follows_count,name,username,profile_picture_url,media.after(${after}){comments_count,like_count,media_url,caption,media_product_type,media_type,timestamp,username,children{media_url,media_type}}}`;
  } else {
    url = `${version_3_2}/${User_id}?fields=business_discovery.username(${username}){followers_count,media_count,biography,follows_count,name,username,profile_picture_url,media{comments_count,like_count,media_url,caption,media_product_type,media_type,timestamp,username,children{media_url,media_type}}}`;
  }
  return url;
};

export const getLimitedBuissnessDiscovery = (username) =>
  `${version_3_2}/${User_id}?fields=business_discovery.username(${username}){followers_count,media_count,biography,follows_count,name,username,profile_picture_url}`;
