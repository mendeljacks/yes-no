import { Button } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { store } from '../store'
import { runInAction } from 'mobx'

const handleClick = async () => {
    runInAction(() => {
        store.logged_in = false
    })

}

export const LogoutButton = observer(() => {
    return <Button
        variant='outlined'
        onClick={handleClick}
    >
      Logout
    </Button>
})
