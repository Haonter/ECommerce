import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../media/Profile.gif'
import BarraDeBusqueda from '../BarraDeBusqueda'
import MainLogo from '../../media/mainLogo.png'

const navegacion = [
  { name: 'Inicio', href: 'http://localhost:3000/adminhome', current: true },
  { name: 'Carrito', href: 'http://localhost:3000/carrito-admin', current: false },
  { name: 'Ubicanos', href: 'http://Localhost:3000/about-admin', current: false }
]
{/*Funcion para trabajar operador ternario en botones*/}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function NavBar() {
  return (
    <Disclosure as="nav" className="bg-gradient-to-b from-zinc-500 to-zinc-100">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">

              {/*Menú Hamburquesa*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-zinc-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white">
                {/*Iconos y acciones*/}
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                {/*Logotipo de Tienda - NavBar*/}
                <div className="flex flex-shrink-0 items-center hidden sm:flex md:flex lg:flex">
                  <img className="block h-10 w-auto lg:hidden" src={MainLogo} alt="TechLabs"/>
                  <img className="hidden h-10 w-auto lg:block" src={MainLogo} alt="TechLabs"/>
                </div>

                <div className="hidden sm:ml-6 sm:block">  
                  {/*Botones de navegacion*/}
                  <div className="flex space-x-4">
                    {navegacion.map((item) => (
                      <a key={item.name} href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-zinc-800 text-md font-bold hover:bg-gray-600/70 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
              
              <BarraDeBusqueda/> {/* ------- Insercion de Barra de busqueda ------- */}
              
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                {/* Desplieque de perfil */}
                <Menu as="div" className="relative ml-3">

                  <div>
                    <Menu.Button className="flex rounded-full h-8 w-8 bg-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800">
                      
                      {/* Logo - Abrir Menú de usuario */}
                      <img src={logo}
                        className="rounded-full"
                        alt="Profile - GIF"
                      />
                    </Menu.Button>
                  </div>

                  <Transition as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95" 
                    >

                    {/*---------- Elementos en menú usuario desplegable ---------- */}
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {
                          ({ active }) => (
                            <a
                              href="http://localhost:3000/adminhome"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                              Productos
                            </a>
                          )
                        }
                      </Menu.Item>

                      <Menu.Item>
                        {
                          ({ active }) => (
                            <a
                              href="http://localhost:3000/carrito-admin"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >Carrito
                            </a>
                          )
                        }
                      </Menu.Item>

                      <Menu.Item>
                        {
                          ({ active }) => (
                            <a
                              href="http://localhost:3000/panel"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >Panel
                            </a>
                          )
                        }
                      </Menu.Item>

                      <Menu.Item>
                        {
                          ({ active }) => (
                            <a
                              href="http://localhost:3000"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            > Cerrar Sesion
                            </a>
                          )
                        }
                      </Menu.Item>

                    </Menu.Items>

                  </Transition>

                </Menu>
              </div>

            </div>
          </div>

          {/*Menú hamburguesa desplegado*/}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navegacion.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={
                    classNames(
                        item.current 
                        ? 'bg-zinc-900 text-white' 
                        : 'text-zinc-900 hover:bg-zinc-700 hover:text-zinc-100',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )
                    }
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar;