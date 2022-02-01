import { Switch, ThemeProvider, createTheme } from '@mui/material'

const switchColor = createTheme({
    palette:{
        primary: {
            main:'#E89E43'
        }
    }
})

export function SwitchCustom({onClick}){
    return (
        <ThemeProvider theme={switchColor}>
            <Switch color='primary' className='customSwitch' onClick={onClick}/>
        </ThemeProvider>
    )
}