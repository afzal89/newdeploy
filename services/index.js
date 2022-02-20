import API from "./api";
import axios from "axios";
import { getBuissnessDiscovery, getLimitedBuissnessDiscovery } from "./helper";
import { API_TOKEN, API_URL, TOKEN } from "../util/constants";

const User_id = process.env.User_id;

export const GET_USER_PROFILE_DETAIL = (username, after = null) => {
  return API.get(getBuissnessDiscovery(username, after));
};

export const GET_HASHTAG_ID = (keyword) => {
  return API.get(`ig_hashtag_search?user_id=${User_id}&q=${keyword}`);
};

export const GET_RECENT_MEDIA_BY_HASHTAG = (hashtagId, after = null) => {
  let url = `${hashtagId}/recent_media?user_id=${User_id}&fields=id,media_type,comments_count,like_count,media_url,permalink,timestamp,caption,children{media_url,media_type}`;
  if (after) {
    url = `${url}&after=${after}`;
  }
  return API.get(url);
};

export const GET_USER_PROFILE_DETAIL_LIMITED = (username) => {
  return API.get(getLimitedBuissnessDiscovery(username));
};

export const GET_RELATED_SEARCH = (keyword) => {
  return axios.get(
    `https://www.instagram.com/web/search/topsearch/?query=${keyword}`
  );
};

export const GET_TOP_HASHTAG = async () => {
  let tknDt;
  let token = sessionStorage.getItem(TOKEN) || '';
  if (!token) {
       tknDt = await axios.post(`${API_URL}v1/user/generate/tempToken`, {
        key_value: API_TOKEN,
      });
      sessionStorage.setItem(TOKEN, tknDt.data.token.split(" ")[1]);

  }

  if (tknDt?.data?.status === "success" || token) {
    if(!token) token = tknDt.data.token.split(" ").pop();
    return axios.get(`${API_URL}v1/hashtags`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    return () => {
      //empty function
    };
  }
};
