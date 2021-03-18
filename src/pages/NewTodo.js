import React from 'react'

import Card from '../components/atoms/Card'
import Input from '../components/atoms/Input'
import Layout from '../components/organisms/Layout'
import { useForm } from '../hooks/useForm';

const NewTodo = () => {
    
    const [ formValues, handleInputChange ] = useForm({
        title: '',
        description: '',
        datestart:'',
        dateend:''
    });

    const { title, description, datestart, dateend } = formValues;

    const save = async () => {
        // const params = {
        //     ...formValues,
        //     datestart: new Date(formValues.datestart ),
        //     dateend:  new Date( formValues.dateend )
        // };
    }

    return (
        <Layout title="Nueva Tarea / Evento / Recordatorio">
            <Card>
                <div className="">
                    <Input 
                        title="Titulo"
                        type="text"
                        name="title"
                        value={ title }
                        onChange={ handleInputChange }

                    />
                    <Input 
                        title="Descripcion"
                        type="textarea"
                        name="description"
                        value={ description }
                        onChange={ handleInputChange }
                    />
                    <Input 
                        title="Fecha Inicio"
                        type="datetime-local"
                        name="datestart"
                        value={ datestart }
                        onChange={ handleInputChange }

                    />
                    <Input 
                        title="Fecha Fin"
                        type="datetime-local"
                        name="dateend"
                        value={ dateend }
                        onChange={ handleInputChange }

                    />

                    {/* <div className="mt-2 mb-2">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Fecha
                        </label>
                        <RangePicker                            
                            locale="en-us" // default is en-us
                            show={false} // default is false
                            disabled={false} // default is false
                            allowPageClickToClose={true} // default is true
                            onConfirm={res => {
                                handleInputChange({ target:{ name: 'date', value: res.join(' - ') } })
                            }}
                            onClose={() => console.log('onClose')}
                            onClear={() => console.log('onClear')}
                            style={{ width: '100%', margin: '5px auto' }}
                            placeholder={['Start Time', 'End Time']}
                            defaultDates={[
                                start.year + '-' + start.month + '-' + start.day,
                                end.year + '-' + end.month + '-' + end.day
                            ]}
                            defaultTimes={[
                                start.hour + ':' + start.minute,
                                end.hour + ':' + end.minute
                            ]}
                            initialDates={[
                                start.year + '-' + start.month + '-' + start.day,
                                end.year + '-' + end.month + '-' + end.day
                            ]}
                            initialTimes={[
                                start.hour + ':' + start.minute,
                                end.hour + ':' + end.minute
                            ]}                            
                        />
                    </div> */}
                    <div>
                        <button 
                            type="button" 
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={ save }
                        >
                            Agregar Tarea
                        </button>
                    </div>
                </div>
            </Card>
            
        </Layout>
    )
}

export default NewTodo
