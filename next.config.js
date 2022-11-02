// спільний експорт для додавання відео (withVideos) і для завантаження фото з сайту m.media-amazon.com

const withVideos = require("next-videos");
// const withImages = require('next-images');

module.exports = withVideos({
    images: {
        domains: ["m.media-amazon.com", "i.annihil.us"],
        formats: ["image/webp"],
    },
});

// ["image/avif", "image/webp"]
