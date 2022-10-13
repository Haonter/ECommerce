import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../media/Profile.gif'
import MainLogo from '../../media/mainLogo.png'

const navegacion = [
  { name: 'Inicio', href: 'http://localhost:3000', current: true },
  { name: 'Registrate', href: 'http://localhost:3000/register', current: false },
  { name: 'Login', href: 'http://localhost:3000/login', current: false },
  { name: 'Ubicanos', href: 'http://localhost:3000/about', current: false }
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
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-zinc-800 hover:bg-gr ay-700 hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white">
                
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
                  {/*Anclas de navegacion*/}
                  <div className="flex space-x-4">  
                    {navegacion.map((item) => (
                      <a key={item.name} href={item.href} 
                        className={
                          classNames(
                            item.current ? 'bg-zinc-900 text-white' : 'text-zinc-800 text-md font-bold hover:bg-gray-600 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )
                        } 
                        aria-current={item.current ? 'page' : undefined}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* ------------ Se Elimina Barra de Busqueda ------------ */}

            </div>
          </div>
          
          {/*Menú hamburguesa desplegado*/}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navegacion.map((item) => (
                <Disclosure.Button key={item.name} as="a" href={item.href} 
                className={
                  classNames(
                      item.current 
                      ? 'bg-zinc-900 text-white' 
                      : 'text-zinc-900 hover:bg-zinc-700 hover:text-zinc-100',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )
                  }
                  aria-current={item.current ? 'page' : undefined}>{item.name}
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