import React from 'react'
import styled from 'styled-components'

const AppStyle = styled.div`
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #282c34;
`
const SpanStyle = styled.span`
    font-size: 64px;
    color: #ffffff;
`

const App: React.FC = () => {
    return (
        <AppStyle>
            <SpanStyle>spotlight-search</SpanStyle>
        </AppStyle>
    )
}

export default App
