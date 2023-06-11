import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { IProject, IItem } from '../../types';
import styled from 'styled-components';

const mockedProjects: IProject[] = [
    { name: "Arkey",uuid: "1234567899", description: "Nice ass project" },
    { name: "Planitfy", uuid: "9878654321", description: "Planitfy was destined to fail" },
]

const mockedItems: IItem[] = [
    { name: "Hacer MVP", project_uuid: "1234567899", status: "new",uuid: "uuerueriuer", description: "Hablar con Cristian para ver las infraestructuras cloud" },
    { name: "Empezar backend", project_uuid: "1234567899", status: "done", uuid: "aaaudfjdfk", description: "Crear proyecto de rust para el backend" },
    { name: "Cerrar repositorio", project_uuid: "9878654321", status: "new",uuid: "jjasdkjsdsfj", description: "Cerrar el repo para esta meirda de proyecto" },
    { name: "Empezar backend", project_uuid: "9878654321", status: "done", uuid: "sahshdfhhshdhf" },
]

const Project = () => {
    const { uuid } = useRouter().query;
    
    const [project, setProject] = useState<IProject>();
    const [items, setItems] = useState<IItem[]>();

    useEffect(() => {
        //TODO: Get project and items from Database
        let project = mockedProjects.find(p => p.uuid === uuid)
        setProject(project)
        setItems(mockedItems.filter(t => t.project_uuid === project?.uuid))

    }, [uuid])

    const changeStatus = (item: IItem) => {
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
    }

    return (
        <>
            <h1>Your items for: {project?.name}</h1>
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