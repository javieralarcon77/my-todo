import React from 'react'
import Card from '../components/atoms/Card'
import Input from '../components/atoms/Input'
import Layout from '../components/organisms/Layout'

const NewTodo = () => {
    return (
        <Layout title="Nueva Tarea / Evento / Recordatorio">
            <Card>
                <div className="">
                    <Input 
                        title="Titulo"
                        type="text"
                    />
                    <Input 
                        title="Descripcion"
                        type="textarea"
                    />
                </div>
            </Card>
            
        </Layout>
    )
}

export default NewTodo
