import React from 'react'


function Footer() {
  return (
    <section className='w-full flex px-2 py-4 justify-center text-gray-500'>
        <p> 
        Copyright &copy;   {new Date().getFullYear().toString()} Yann 
          {' Tous droits réservés'}
          </p>

      </section>
  )
}

export default Footer