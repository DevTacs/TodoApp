import React from 'react'
import Header from '../../components/Header'
import {Outlet} from 'react-router-dom'

export default function NotePage() {
    return (
        <>
            <Header>
                <p>User1</p>
            </Header>
            <Outlet />
        </>
    )
}
