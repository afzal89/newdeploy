const seo = {
  default: {
    keywords: [
      "Invewer",
      "Instagram Story Viewer",
      "Browse Instagram content without logging in.",
      "Search the profile",
      "Search through the Hashtags",
      "Visit profiles without logging in",
      "Check out Highlight Stories",
    ].join(", "),
    title: "Instagram story viewer and download",
  },
  pages: {
    homepage: {
      title: "Instagram story viewer and download",
      description:
        "Free Instagram story viewer ,Download instagram photos, videos and stories highlights,You can watch Insta stories, profiles, followers, tagged posts anonymously. Best Instagram viewer",
    },
    search: {
      title: (keyword) =>
        `${keyword} instagram search result with profile and hashtags list`,
      description: (keyword) =>
        `Explore Search for ${keyword} with the option of  instagram profile and hashtags list related to ${keyword}.`,
      keywords: (keyword) =>
        [
          `search instagram profile for ${keyword}`,
          `search best instagram hashtags for ${keyword}`,
        ].join(", "),
    },
    profile: {
      title: (user) =>
        `${user.name} (@${user.username}) -Instagram profile account  | invewer.com`,
      description: (user) =>
        `${user.name || user.username} Instagram profile : Followers ${
          user.followers
        }; Following ${user.following}; post ${user.postCount} | Download ${
          user.name || user.username
        } stories ,photos ,reels and videos`,
      keywords: (name) =>
        [
          `${name} instagram`,
          `${name} instagram profile picture`,
          `${name} Instagram followers`,
          `${name} instagram post`,
          `${name} Instagram caption`,
          `${name} story download`,
          `${name} instagram profile viewer`,
        ].join(", "),
        type: "article"
    },
    hashtag: {
      title: (keyword) =>
        `#${keyword} Download instagram post ( photos and videos )`,
      description: (meta) =>
        `Total ${meta.count} Posts - See latest Instagram photos and videos from #${meta.keyword} instagram hashtag and download. Last post added in #${meta.keyword} is ${meta.timeAgo}`,
      keywords: (keyword) =>
        [
          `#${keyword} instagram hashtag`,
          `Best Instagram Hashtags for #${keyword}`,
          `#${keyword} popular instagram hashtags`,
        ].join(", "),
    },
    media: {
      title: (user) =>
        `Download Instagram post added by ${user.name} | invewer.com`,
      description: (user) => `Instagram post added by ${user.name}:`,
      keywords: (name) =>
        [`Download Best Instagram hashtags post from #${name}`].join(", "),
    },
  },
};

export default seo;
