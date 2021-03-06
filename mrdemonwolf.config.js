module.exports = {
  port: 4000,

  tasks: {
    imagemin: true,
    sass:     true,
    server:   true,
    webpack:  true,
  },

  paths: {
    dest:       "_site",
    posts:      "_posts",
    assets:     "./assets",
    css:        "css",
    js:         "js",
    images:     "images",
    sass:       "_sass",
    jsSrc:      "_js",
    imagesSrc:  "_images",
  },

  jekyll: {
    config: {
      default:      "_config.yaml",
      development:  "_config_development.yaml",
      production:   "_config.yaml",
    }
  },

  sass: {
    outputStyle: "compressed",
  },

  autoprefixer: {
    browsers: [
      "> 1%",
      "last 2 versions",
      "Firefox ESR"
    ]
  },

  js: {
    entry: [
      "main.js",
    ],
  },
}
