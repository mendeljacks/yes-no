import { Button, CircularProgress } from '@mui/material'
import axios from 'axios'
import { observer } from 'mobx-react-lite'
import { store } from '../store'
import { runInAction } from 'mobx'

export const refresh = async () => {
    runInAction(() => {
        store.loading = true
    })

    const response = await axios.get(
        'https://yesno.wtf/api'
    )

    runInAction(() => {
        store.response = response.data
        store.loading = false
    })
}

export const RefreshButton = observer(() => {
    return <Button
        disabled={store.loading}
        variant='outlined'
        onClick={refresh}
    >
        {store.loading ?
            <CircularProgress size={18} />
            : 'Refresh'
        }
    </Button>
})
