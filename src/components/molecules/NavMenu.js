import React, { useEffect, useState } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import firebase from "firebase/app";

import { useAuth } from "../../hooks/useAuth";

import iconMenu from '../../assets/icons/menu-bar.svg';
import imgProfile from '../../assets/user.webp';

const NavMenu = () => {
  const match = useRouteMatch();
  let history = useHistory();

  const user = useAuth();

  const [itemsMenu, setItemsMenu ] = useState([
    { title: 'Dashboard', slug: '/', active: false },
    { title: 'Nueva Tarea', slug: '/todo/new', active: false },
    { title: 'Tareas', slug: '/todo/list', active: false },
    { title: 'Calendar', slug: '/calendario', active: false },
  ]);

  const [ showMenuProfile, setShowMenuProfile ] = useState(false);
  const [ openMenuMobile, setOpenMenuMobile ] = useState(false);

  useEffect(()=>{
    var url = match.url;

    setItemsMenu( items => {
      return items.map( item => ({
        ...item,
        active: item.slug === url
      }) )
    } )
  },[ match ])

  const logout = async () => {
    await firebase.auth().signOut();
    history.push('/');
  }

  const OptionProfile = ({ className }) => (
    <>
      <a href="/" className={ className } role="menuitem" >
        Tu Perfil
      </a>
      <button className={ className } role="menuitem" onClick={ () => logout() }>
        Salir
      </button>
    </>
  )

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
              My PeBook
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {
                  itemsMenu.map( (item, i)=>(
                    <Link
                      key={ i }
                      to={ item.slug }
                      className={
                        item.active ?
                        "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" :
                        "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      { item.title }
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {
                user &&
                <div className="ml-3 relative">
                  <div>
                    <button
                      type="button"
                      className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={ ()=> setShowMenuProfile( !showMenuProfile )  }
                    >
                      <span className="sr-only">Open user menu</span>
                      <span className="text-white pr-1">{ user.name }</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={ user.photo ? user.photo : imgProfile }
                        alt={ user.name }
                      />
                    </button>
                  </div>

                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                    style={ { display: showMenuProfile ? 'block' : 'none' } }
                  >
                    <OptionProfile className="text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"/>
                  </div>
                </div>
              }
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={ ()=> { setOpenMenuMobile( !openMenuMobile ) } }
            >
              <span className="sr-only">Open main menu</span>
              <img src={ iconMenu } alt="icon menu"/>
            </button>
          </div>
        </div>
      </div>

      <div 
        className="md:hidden fixed w-full bg-gray-800" 
        id="mobile-menu"
        style={ { display: openMenuMobile ? 'block' : 'none' } }
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {
            itemsMenu.map( (item,i)=>(
              <Link
                key={ i }
                to={ item.slug }
                className={
                  item.active ? 
                  'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium' :
                  'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                }
              >
                { item.title }
              </Link>
            ))
          }

        </div>
        {
          user &&
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex justify-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={ user.photo ? user.photo : imgProfile }
                  alt={ user.name }
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">
                  { user.name }
                </div>
                <div className="text-sm font-medium leading-none text-gray-400">
                  { user.email }
                </div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <OptionProfile className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"/>
            </div>
          </div>
        }
      </div>
    </nav>
  );
};

export default NavMenu;
