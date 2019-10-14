import DIFFICULTY_MAP from '../data/difficulty'

export const getDifficulty = (cardQty: number) => {

    switch (cardQty) {
        case DIFFICULTY_MAP.EASY: {
            return 'EASY'
        }

        case DIFFICULTY_MAP.MEDIUM: {
            return 'MEDIUM'
        }

        case DIFFICULTY_MAP.HARD: {
            return 'HARD'
        }

        default:
            return 'MEDIUM'
    }

}