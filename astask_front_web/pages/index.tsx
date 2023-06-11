import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const login = () => {
        axios.post('http://localhost:3002/api/user/login', {
            email,
            password
        }).then(res => {
            if (res.data.status === 'success') {
                let {token} = res.data
                localStorage.setItem('token', token)
                router.push("/projects")
            }
        }).catch(err => {
            console.error('error login: ', err)
        })
    }

    return (
        <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id='email' placeholder='Introduce email...' onChange={(e) => {
                setEmail(e.target.value)
            }} />

            <label htmlFor="password">Password:</label>
            <input type="text" id='password' placeholder='Introduce password...' onChange={e => {
                setPassword(e.target.value)
            }} />

            <input type="submit" value={"Login"} onClick={login} />
        </div>
    )
}

export default Index