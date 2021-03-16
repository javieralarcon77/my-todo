import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import firebase from "firebase/app";
import swal from 'sweetalert';

import { useForm } from '../hooks/useForm';

const Login = () => {

    let history = useHistory();

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: '',
    });

    const { email, password } = formValues;

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        //console.log(formValues);
        try{
            await firebase.auth().signInWithEmailAndPassword( email, password );
            history.push('/');
        }catch(e){
            //console.log(e);
            swal('Error', e.message, 'error');
        }

    }

    return (
        <div className="p-login">
            
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        {/* <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"> */}
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Inicia Session
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            O&nbsp;
                            <Link
                                to="/register"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Registrate Gratis
                            </Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" method="POST" onSubmit={ handleSubmitLogin }>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email" className="sr-only">Correo</label>
                                <input 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    autoComplete="email" 
                                    required 
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                    placeholder="Correo"
                                    value={ email }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Contraseña</label>
                                <input 
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    autoComplete="current-password" 
                                    required 
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                    placeholder="Contraseña"
                                    value={ password }
                                    onChange={ handleInputChange }
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input 
                                    id="remember_me" 
                                    name="remember_me" 
                                    type="checkbox" 
                                    defaultChecked={true} 
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" 
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Recordarme
                                </label>
                            </div>
                            {/* <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Olvidaste tu contraseña?
                                </a>
                            </div> */}
                        </div>
                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            
                                </span>
                                Ingresar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
