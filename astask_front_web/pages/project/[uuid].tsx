import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { IProject, IItem } from '../../types';
import styled from 'styled-components';
import axios from 'axios';

const Project = () => {
    const router = useRouter()
    const { uuid: project_uuid } = useRouter().query;
    
    const [items, setItems] = useState<IItem[]>();
    const [newItemName, setNewItemName] = useState<string>()
    const [newItemDescription, setNewItemDescription] = useState<string>()
    const [newItemStatus, setNewItemStatus] = useState<string>('new')

    useEffect(() => {
        if(!localStorage.getItem('token')) {
            router.push('/')
        } else {
            getItems()
        }

    }, [project_uuid])

    const changeStatus = (item: IItem) => {
        let oldItems = {...items} as IItem[]
        let newItems = [...items ?? []];

        newItems = newItems.map<IItem>((i) => {
            if (i.uuid === item.uuid) {
                return {...i, status: item.status === 'done' ? 'new' : 'done'}
            } else {
                return {...i}
            }
        })
        //TODO: Ask bakend to change the status, if error, go back to the old list
        setItems(newItems)

        axios.put('http://localhost:3002/api/item-s/status', {
            item_uuid:  item.uuid
        }, {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then(res => {
            if(res.data.status !== 'success') {
                setItems(oldItems)
            }
        }).catch(err => {
            alert("error updating")
        })


    }

    const createNewItem = () => {
        axios.post('http://localhost:3002/api/item-s', {
            name: newItemName,
            description: newItemDescription,
            status: newItemStatus,
            project_uuid: project_uuid
        }, {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then(res => {
            if(res.data.status === 'success') {
                getItems()
            }
        }).catch(err => {
            alert('error creating new item')
        })
    }

    const getItems = () => {
        // get items from db
        if(project_uuid) {
            axios.get(`http://localhost:3002/api/item-s/${project_uuid}`, {
                headers: {
                    token: localStorage.getItem('token')
                }
            }).then(res => {
                if(res.data.status === 'success' && res.data.data) {
                    setItems(res.data.data)
                }
            }).catch(err => {
                alert('error obteniendo los items del proyecto')
            })
        }
    }

    return (
        <>
            <h1>Your items:</h1>
            <div>
                <h3>Crea un item nuevo: </h3>
                <input type="text" placeholder='Introduce nombre de item' onChange={e => setNewItemName(e.target.value)} />
                <input type="text" placeholder='Introduce descripcion de item' onChange={e => setNewItemDescription(e.target.value)} />
                <button onClick={createNewItem}>Crear</button>
            </div>
            <StyledItemList>
                {items?.map((item, index) => (
                    <StyledItemListItem key={index} done={item?.status === 'done'}>
                        <CustomSpanCheckbox done={item?.status === 'done'} onClick={() => changeStatus(item)}>
                            <span></span>
                        </CustomSpanCheckbox>
                        <NameDescriptionContainer>
                            <h3>{item?.name}</h3>
                            <p>{item?.description ?? ""}</p>
                        </NameDescriptionContainer>
                    </StyledItemListItem>
                ))}
            </StyledItemList>
        </>
    )
}

const StyledItemList = styled.div`
    display: flex;
    flex-direction: column;
`
const NameDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const CustomSpanCheckbox = styled.div<{ done: boolean }>`
    border: 2px solid grey;
    width: 1.3em;
    height: 1.3rem;
    border-radius: .5rem;
    cursor: pointer;
    padding: .15rem;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: .1rem;
        left: .1rem;
        height: .8rem;
        width: .8rem;
        background: ${(props) => props.done ? 'black' : 'transparent' };
        border-radius: .3rem;
        transition: background ease-in-out .2s;
    }

`

const StyledItemListItem = styled.div<{done: boolean}>`
	display: flex;
    gap: 1rem;
    padding: 2rem;
    margin-bottom: 2rem;
    max-width: 35rem;
	box-shadow: ${({done}) => done ? 'lightgreen 0px 3px 14px;' : 'rgba(149, 157, 165, 0.2) 0px 8px 24px;'};
    transition: box-shadow ease-in-out .2s;
	border-radius: 1.5rem;
    * {
        margin: 0;
        padding: 0;
    }
`

export default Project