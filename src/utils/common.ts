const isEven = (num: number) => num % 2 === 0

const shuffleArray = (a: number[]) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const createCardValue = (val: number) => {
    const value = isEven(val) ? val / 2 : Math.floor(val / 2)
    return {
        id: `${val}`,
        value: `${value}`,
        isMatched: false,
    }
}

export const createInitialValues = (length = 24) => {
    const array = Array.from({length }, (val: number, idx: number) => idx)
    const shuffled = shuffleArray(array).map(createCardValue)
    return shuffled
}

type ScoreEntry = [ string, string ]
export const sortEntriesByClicks = (entryA: ScoreEntry, entryB: ScoreEntry) => {
    const [ keyA, clicksA ] = entryA
    const [ keyB, clicksB ] = entryB
    return (+clicksA) - (+clicksB)
}