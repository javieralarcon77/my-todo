import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import firebase from "firebase/app";

const Register = () => {
    let history = useHistory();

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        repassword: '',
    });

    const { name, email, password, repassword } = formValues;

    const handleSubmitRegister = async (e) => {
        e.preventDefault();

        const data = await firebase.auth().createUserWithEmailAndPassword(email, password);
        if(data.user){
            data.user.updateProfile( { displayName: name } );
            history.push("/");
        }
    }

    return (
        <div className="p-login">
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        {/* <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"> */}
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Registrate
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            O&nbsp;
                            <Link
                                to="/"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Inicia Session
                            </Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" method="POST" onSubmit={ handleSubmitRegister }>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="name" className="sr-only">Nombre Completo</label>
                                <input 
                                    id="name" 
                                    name="name" 
                                    type="text" 
                                    autoComplete="name" 
                                    required 
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                    placeholder="Nombre Completo"
                                    value={ name }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Correo</label>
                                <input 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    autoComplete="email" 
                                    required 
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
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
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                    placeholder="Contraseña"
                                    value={ password }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div>
                                <label htmlFor="repassword" className="sr-only">Repetir Contraseña</label>
                                <input 
                                    id="repassword" 
                                    name="repassword" 
                                    type="password" 
                                    autoComplete="current-password" 
                                    required 
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                    placeholder="Repetir Contraseña"
                                    value={ repassword }
                                    onChange={ handleInputChange }
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input 
                                    id="terms" 
                                    name="terms" 
                                    type="checkbox" 
                                    defaultChecked={true} 
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" 
                                />
                                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                    Acepto los terminos y condiciones
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
                                Registrarme
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
