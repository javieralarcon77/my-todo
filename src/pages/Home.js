import React from 'react'
import Card from '../components/atoms/Card'
import Layout from '../components/organisms/Layout'
import { useSelector } from 'react-redux';

import iconAdd from '../assets/icons/add.svg';
import { Link } from 'react-router-dom';

const Home = () => {

    const countNotes = useSelector( state => state.notes.notes.length );

    return (
        <Layout title="Home">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-1">
                    <Link to="/todo/list">
                        <Card>
                            <h1 className="text-4xl">{ countNotes }</h1>
                            <h4>Notas</h4>
                        </Card>
                    </Link>
                </div>
                <div className="fixed bottom-2 right-2">
                    <Link 
                        to="/todo/new"
                        className="mb-3 flex justify-center group relative py-2 px-2 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <img src={ iconAdd } alt="icon add" width="30px"/>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default Home
