import React, { useState } from "react";

const NavMenu = () => {

  const [itemsMenu, setItemsMenu ] = useState([
    { title: 'Dashboard', slug: '/', active: true },
    { title: 'Notas', slug: '/', active: false },
    { title: 'Calendar', slug: '/', active: false },
  ]);

  const datosUser = {
    name: 'User',
    mail: 'user@example.com',
    photo: 'https://via.placeholder.com/200x200.png',
  }

  const [ showMenuProfile, setShowMenuProfile ] = useState(false);
  const [ openMenuMobile, setOpenMenuMobile ] = useState(false);
  
  const OptionProfile = ({ className }) => (
    <>
      <a href="/" className={ className } role="menuitem" >
        Tu Perfil
      </a>
      <a href="/" className={ className } role="menuitem" >
        Salir
      </a>
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
                    <a
                      href={ item.slug }
                      className={
                        item.active ?
                        "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" :
                        "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                      key={ i }
                    >
                      { item.title }
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              
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
                    <img
                      className="h-8 w-8 rounded-full"
                      src={ datosUser.photo }
                      alt={ datosUser.name }
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
                  <OptionProfile className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"/>
                </div>
              </div>
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
              M
            </button>
          </div>
        </div>
      </div>

      <div 
        className="md:hidden" id="mobile-menu"
        style={ { display: openMenuMobile ? 'block' : 'none' } }
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {
            itemsMenu.map( (item,i)=>(
              <a 
                href={ item.slug }
                className={ 
                  item.active ? 
                  'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium' :
                  'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                }
                key={ i }
              >
                { item.title }
              </a>    
            ))
          }

        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex justify-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={ datosUser.photo }
                alt={ datosUser.name }
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">
                { datosUser.name }
              </div>
              <div className="text-sm font-medium leading-none text-gray-400">
                { datosUser.mail }
              </div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <OptionProfile className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
