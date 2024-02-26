import Marcuthcraft from "../../game/marcuthcraft"
import { FC, useEffect } from "react"

import styles from "./style.module.scss"

interface Size {
    width: number
    height: number
}

type OnReady = ($canvas: HTMLCanvasElement) => any

const GameScreen: FC = () => {
    useEffect(() => {
        const game = new Marcuthcraft({
            document: document,
            rootQuery: `.${styles["game-screen"]}`
        })

        game.renderer.play()

        return () => {
            game.destroy()
        }
    }, []) 

    return (
        <div className={styles["game-screen"]}></div>
    )
}

export default GameScreen