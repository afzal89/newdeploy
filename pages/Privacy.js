import React from 'react'
import { MetaHead } from "../components/BaseComponents/Meta_Head";
import Privacy from '../components/Privacy/Index'

export default function PrivacyPolicy() {
    return (
        <div>
            <MetaHead title="Privacy Policy | Invewer" url="/Privacy" />
            <Privacy />
        </div>
    )
}


