import { Answer, Container, Title } from '../components/Helpers'
import { ImageContainer } from '../components/ImageContainer'
import { LogoutButton } from '../components/Logout'
import { RefreshButton } from '../components/RefreshButton'

export const MainPage = () => <Container>
    <Title />
    <ImageContainer />
    <Answer />
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15}}>
    <RefreshButton />
    <LogoutButton />
    </div>
</Container>