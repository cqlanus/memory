const initalStorage = {
    EASY: {},
    MEDIUM: {},
    HARD: {}
}
export const getStorage = (key: string) => {
    const data = window.localStorage.getItem(key)
    return data ? JSON.parse(data) : initalStorage
}

export const setStorage = (key: string, data: any) => {
    window.localStorage.setItem(key, JSON.stringify(data))
}