import { getStorage, setStorage } from "./storage"
import { getDifficulty } from "./difficulty"

export const handleVictory = (clicks: number, cardQty: number) => {
    const now = Math.floor(Date.now()/1000)
    const previousClickCount = getStorage('clickCount')
    const difficulty = getDifficulty(cardQty)

    const clickCount = Object.entries(previousClickCount).reduce((acc, entry) => {
        const [ diff, clickCountForDiff ] = entry

        if (diff === difficulty) {
            const updatedClickCountForDiff = {
                ...clickCountForDiff,
                [String(now)]: String(clicks)
            }
            return {
                ...acc,
                [diff]: updatedClickCountForDiff
            }
        } else {
            return acc
        }
        
    }, previousClickCount)

    setStorage('clickCount', clickCount)
}