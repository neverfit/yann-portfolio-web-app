import React from 'react'


function Footer() {
  return (
    <section className='w-full flex bg-red-500 px-2 py-4 justify-center'>
        <p> 
        Copyright &copy;   {new Date().getFullYear().toString()} Yann 
          {' Tous droits réservés'}
          </p>

      </section>
  )
}

export default Footer