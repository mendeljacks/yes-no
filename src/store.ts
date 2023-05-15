import { observable, toJS } from 'mobx'

export const store = observable({
    logged_in: false,
    loading: false,
    response: undefined as Response | undefined
})

type Response = {
    answer: string
    forced: boolean
    image: string
}


//@ts-ignore
window.toJS = toJS
//@ts-ignore
window.store = store