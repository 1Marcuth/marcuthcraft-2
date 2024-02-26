const resources = [
    {
        object: new Image(),
        source: require("../assets/img/logo-intro.png"),
        id: "logoIntro"
    },
    {
        object: new Image(),
        source: require("../assets/img/sprites.png"),
        id: "textureSprites"
    },
    {
        loadEventName: "loadeddata",
        object: new Audio(),
        source: require("../assets/aud/soundtrack.mp3"),
        id: "music1"
    },
    {
        object: new Image(),
        source: require("../assets/img/skins/steve.png"),
        id: "playerSkin"
    },
    {
        object: new Image(),
        source: require("../assets/img/logo.png"),
        id: "logo"
    },
    {
        object: new Image(),
        source: require("../assets/img/main-menu-background-layers/2.png"),
        id: "secondBackgroundLayer"
    },
    {
        object: new Image(),
        source: require("../assets/img/widgets.png"),
        id: "widgets"
    },
    {
        object: new Image(),
        source: require("../assets/img/main-menu-background-layers/blur.png"),
        id: "backgroundBlur"
    },
    {
        object: new Image(),
        source: require("../assets/img/options-background.png"),
        id: "optionsBackground"
    }
]

export default resources