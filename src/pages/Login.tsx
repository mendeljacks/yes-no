import { Container, Title } from "../components/Helpers"
import { TextField, Button } from '@mui/material'
import { store } from "../store"
import {action} from 'mobx'
import { refresh } from "../components/RefreshButton"

export const Login = () => {
    return <Container>
        <Title />
        <TextField placeholder="Username" />
        <TextField placeholder="Password" type="password" />
        <Button variant='outlined' fullWidth onClick={action(() => {
            store.logged_in = true
            refresh()
        })}>Login</Button>
    </Container>
}