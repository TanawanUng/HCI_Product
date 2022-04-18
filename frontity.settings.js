const settings = {
  "name": "HCI-my-first-frontity-project",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Education Smart Factory Platform",
      "description": "ระบบการเรียนรู้ระยะไกลของโรงงานอัจฉริยะ"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/page/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "History",
              "/history"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://demo24952240.wordpress.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
