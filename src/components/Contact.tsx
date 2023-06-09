import React from 'react'
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid"
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

type Props = {}

export default function Contact({ }: Props) {
    const router = useRouter();
    const {locale}= router;
  
    const {
        register,
        handleSubmit
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:pezavantyann@gmail.com?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };



    return (
        <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center'>

            <h3 className='absolute top-10 uppercase tracking-[20px] text-gray-500'>
                Contact
            </h3>

            <div className='flex flex-col space-y-10'>
                {/* <h4 className='text-lg font-semibold text-center'>
                {locale== 'fr'? 'J\'ai ce qu\'il vous faut.' : 'I\'ve got just what you need.'}
                     {""} <span className='underline decoration-[#F7AB0A]/50'>
                     {locale== 'fr'? 'Laissez moi un message' : 'Leave me a message.'}
                        </span>
                </h4> */}

                <div >

                    <div className='flex items-center space-x-5 justify-center py-2'>
                        <PhoneIcon className='text-[#F7AB0A]/50 h-5 w-5 animate-pulse' />
                        <p className='text-lg '>+33686337184</p>
                    </div>
                    
                    <div className='flex items-center space-x-5 justify-center py-2'>
                        <EnvelopeIcon className='text-[#F7AB0A]/50 h-5 w-5 animate-pulse' />
                        <p className='text-lg'>pezavantyann@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center py-2'>
                        <MapIcon className='text-[#F7AB0A]/50 h-5 w-5 animate-pulse' />
                        <p className='text-lg'>Tassin la Demi-lune</p>
                    </div>

                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='contact-form flex flex-col space-y-2 w-fit mx-auto'>

                    <div className='flex space-x-2'>

                        <input {...register('name')}
                            className='contactInput'
                            type="text"
                            placeholder='Name' />

                        <input {...register('email')}
                            className='contactInput'
                            type="email"
                            placeholder='Email' />

                    </div>

                    <input {...register('subject')}
                        className='contactInput '
                        type="text"
                        placeholder='Subject' />

                    <textarea {...register('message')}
                        className='contactInput'
                        placeholder='Your message' />

                    <button
                        className='bg-[#F7AB0A]/50 hover:bg-[#F7AB0A]/80 py-5 px-10 rounded-md text-black font-bold text-lg'
                        type='submit'>
                            {locale== 'fr'? 'Envoyer' : 'Submit'}
                        
                    </button>
                </form>
            </div>
        </div>
    )
}