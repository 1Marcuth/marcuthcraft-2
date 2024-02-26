type WorldGenerationStageNames = {
    [key: number]: string
    default: string
}

const screenSize = {
    width: 1280,
    height: 720
}

const blockSize = {
    width: 60,
    height: 60
}

const playerVisionScale = .25

const playerSize = {
    width: blockSize.width / 2,
    height: blockSize.height * 2
}

const defaultPlayerMoveSpeed = 120 * playerVisionScale
const playerSkinSize = { width: 12, height: 20 }
const playerJumpHeight = blockSize.height
const playerMaxFallSpeed = 5

const chunksRenderDistance = 4
const chunkWidth = 16
const maxChunksToLeft = 5
const maxChunksToRight = maxChunksToLeft

const worldSize = {
    width: (maxChunksToLeft + maxChunksToRight + 1) * chunkWidth,
    height: 256
}

const gravity = -0.1

const splashMessageIntervalTime = 10000

const splashMessages = [
    "Feito em TypeScript!",
    "Made in TypeScript",
    "TypeScript is awesome!",
    "Try Minecraft",
    "GitHub: @1Marcuth",
    "Insta: @marcuth.dev",
    "By Marcuth"
]

const worldGenerationStageNames: WorldGenerationStageNames = {
    1: "Gerando Chunks...",
    2: "Gerando Minérios...",
    3: "Gerando Cavernas...",
    default: "Gerando Terreno..."
}

const autoplaySoundtrack = false
const soundtrackVolume = .3

const worldFileExtension = ".mccworld"

const gameVersion = "0.2.1"

export {
    screenSize,
    blockSize,
    playerVisionScale,
    playerSize,
    defaultPlayerMoveSpeed,
    playerSkinSize,
    playerJumpHeight,
    playerMaxFallSpeed,
    chunksRenderDistance,
    chunkWidth,
    maxChunksToLeft,
    maxChunksToRight,
    worldSize,
    gravity,
    splashMessageIntervalTime,
    splashMessages,
    worldGenerationStageNames,
    autoplaySoundtrack,
    soundtrackVolume,
    worldFileExtension,
    gameVersion
}