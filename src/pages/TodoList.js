import React from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment';

import Card from '../components/atoms/Card';
import Layout from '../components/organisms/Layout';

const TodoList = () => {

    const notes = useSelector( state => state.notes.notes );

    console.log(notes);

    return (
        <Layout title="Listado de Tareas">
            {
                notes.map( (note, index) => {
                    var dateStart = moment( note.datestart )
                    return (
                        <div key={ index }>
                            <Card>
                                <h4>{ note.title }</h4>
                                <p className="m-0 p-0">{ note.description }</p>
                                <small>{ dateStart.format('DD MM YYYY hh:mm:ss') }</small>
                            </Card>
                        </div>
                    )
                })
            }
        </Layout>
    )
}

export default TodoList
