import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios'

export default function Add() {
    const router = useRouter();

    const [user_uuid, setUser_uuid] = useState<string>()
    const [name, setName] = useState<string>()
    const [description, setDescription] = useState<string>()

    useEffect(() => {
        let token = localStorage.getItem('token')

        if(!token) {
            router.push('/')
        }

        axios.get('http://localhost:3002/api/user', {
            headers: {
                token
            }
        }).then(res => {
            if(res.data.status === 'success' && res.data.uuid) {
                setUser_uuid(res.data.uuid)
            }
        }).catch(err => {
            alert('ha ocurrido un error obteniendo la informacion del usuario')
        })
    }, [router])

    const createProject = () => {
        let token = localStorage.getItem('token')
        console.log('new project')
        console.log('name: ', name)
        console.log('desc: ', description)
        console.log('user_uuid: ', user_uuid)
        axios.post('http://localhost:3002/api/project-s', {
            name,
            description,
            user_uuid
        }, {
            headers: {
                token: token
            }
        }).then(res => {
            if(res.data.status === 'success' && res.data.data){ 
                router.push('/projects')
            }
        }).catch(err => {
            alert('error creando proyecto')
        })
    }

    return (
        <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id='name' placeholder='introduce nombre del proyecto' onChange={(e) => setName(e.target.value)} />
            <label htmlFor="description">Description:</label>
            <input type="text" id='description' placeholder='introduce descripcion del proyecto' onChange={e => setDescription(e.target.value)} />
            <button onClick={createProject}>Crear</button>
        </div>
    )
}

