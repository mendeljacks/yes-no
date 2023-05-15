import { Card, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { store } from '../store'

function toTitleCase(str: string) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

export const Answer = observer(() => {
    const answer = toTitleCase(store?.response?.answer || '') + '!'
    
    return <Typography
        style={{ color: answer === 'Yes!' ? 'green' : 'red' }}
        variant="h2">{answer}</Typography>
})

export const Title = () => {
    return <Typography variant='h4'>Yes or no?</Typography>
}

export const Container = ({ children }: { children: any }) => {
    return <div style={{ 
      display: 'grid', placeItems: 'center', height: '100vh' }}>
        <Card style={{ 
          backgroundColor: '#ededed',
          borderRadius: '30px', padding: '30px', display: 'grid', gap: 10, placeItems: 'center' }}>
            {children}
        </Card>
    </div>
}