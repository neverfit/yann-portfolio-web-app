import { useRouter } from 'next/router';
import React from 'react'


function Footer() {
  const router = useRouter();
  const {locale}= router;

  return (
    <section className='w-full flex px-2 py-4 justify-center text-gray-500'>
        <p> 
        Copyright &copy;   {new Date().getFullYear().toString()} Yann 
        {locale== 'fr'? ' Tous droits réservés' : ' All rights reserved.'}
          </p>

      </section>
  )
}

export default Footer