import { ModifierKeys } from "gamx/dist/util/keyboard-listener"
import { ResourceItem } from "gamx/dist/util/resource-loader"
import Gamx from "gamx"

import MainMenuSubScreen from "./ui/sub-screens/main-menu"
import IntroSubScreen from "./ui/sub-screens/intro"
import resources from "./resources"

export type MarcuthcraftOptions = {
    document: Document
    rootQuery: string
}

export type MarcuthcraftState = {
    mainResources: ResourceItem[]
    logoIntroResource?: ResourceItem
    secondBackgorundLayerOffsetX: number
    [key: string]: any
}

class Marcuthcraft extends Gamx<MarcuthcraftState> {
    public constructor({ document, rootQuery }: MarcuthcraftOptions) {
        super({
            document: document,
            rootQuery: rootQuery,
            screenSize: {
                width: 1280,
                height: 720
            },
            defaultBackgroundColor: "#ff2e3c",
            state: {
                mainResources: [],
                secondBackgorundLayerOffsetX: 0
            }
        })
    }

    public handleKeyboardListener(keyPressed: string, modifierKeys: ModifierKeys): void {
        console.log(keyPressed, modifierKeys)
    }

    public handleResourceLoader(event: string, ...args: any[]): void {
        const ctx = this.screen.canvas.getContext("2d")!

        switch (event) {
            case "loadedResource": {
                const [ resource, queueId, queueSize, queueLoadedCount ] = args as [ ResourceItem, string, number, number ]

                if (resource.id === "logoIntro") {
                    this.state.logoIntroResource = resource
                }

                const introSubScreen = new IntroSubScreen({
                    ctx: ctx,
                    gameState: this.state,
                    components: [],
                    setupProps: {
                        logoIntroResource: this.state.logoIntroResource!,
                        amountOfResources: queueSize,
                        resourcesLoadedCount: queueLoadedCount,
                        currentResource: resource
                    }
                })
        
                this.renderer.setSubScreen(introSubScreen)

                break
            } case "loadedResourceQueue": {
                const [ queueId, resources ] = args as [ string, ResourceItem[] ]

                if (queueId === "mainResources") {
                    this.updateState({ mainResources: resources })

                    this.renderer.pause()

                    setTimeout(() => {
                        const mainMenuSubScreen = new MainMenuSubScreen({
                            ctx: ctx,
                            components: [],
                            gameState: this.state,
                            setupProps: {
                                widgetManager: this.screen.widgetManager,
                                canvasWidth: this.screen.size.width
                            }
                        })
    
                        this.renderer.setSubScreen(mainMenuSubScreen)

                        this.renderer.play()
                    }, 1000)
                }

                console.timeEnd("Loaded main resources in")

                break
            }
            
            default:
                throw new Error(`An unexpected event was passed to the resource load event handler: [${event}]`)
        }
    }

    public handleRenderer(event: string, ...args: any[]): void {
        switch (event) {
            case "frame":
                // const [ fps ] = args
                // console.log(fps)
                if (this.renderer.subScreen instanceof MainMenuSubScreen) {
                    this.state.secondBackgorundLayerOffsetX -= .5
                }

                break

            default:
                throw new Error(`An unexpected event was passed to the renderer event handler: [${event}]`)
        }
    }

    public handleScreen(event: string, ...args: any[]): void {
        switch (event) {
            case "createdCanvas":
                console.log("The game canvas has been created!")
                break

            default:
                throw new Error(`An unexpected event was passed to the screen event handler: [${event}]`)
        }
    }

    public handleWidgetManager(event: string, ...args: any[]): void {
        switch (event) {
            case "widgetAdded":
                break

            case "widgetRemoved":
                break

            case "allWidgetsRemoved":
                break

            default:
                throw new Error(`An unexpected event was passed to the widget manager handler: [${event}]`)
        }
    }

    public setup(): void {
        this.keyboardListener.subscribe(this.handleKeyboardListener.bind(this))
        this.resourceLoader.subscribe(this.handleResourceLoader.bind(this))
        this.renderer.subscribe(this.handleRenderer.bind(this))
        this.screen.subscribe(this.handleScreen.bind(this))
        this.screen.widgetManager.subscribe(this.handleWidgetManager.bind(this))
        console.time("Loaded main resources in")
        this.resourceLoader.addToQueue("mainResources", resources)
    }
}

export default Marcuthcraft