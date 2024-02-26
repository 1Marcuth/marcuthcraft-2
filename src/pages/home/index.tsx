import { FC } from "react"

import GameScreen from "../../components/game-screen"

import styles from "./style.module.scss"

const HomePage: FC = () => {

    return (
        <div className={styles["container"]}>
            <GameScreen/>
        </div>
    )
}

export default HomePage