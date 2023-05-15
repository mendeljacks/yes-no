import { observer } from 'mobx-react-lite'
import { store } from '../store'

export const ImageContainer = observer(() => {
    const placeholder = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
    const image = store.response?.image
    const src = image ? image : placeholder

    return <div style={{ backgroundColor: 'darkgray' }}>
        <img
            width={300}
            src={src} />
    </div>
})