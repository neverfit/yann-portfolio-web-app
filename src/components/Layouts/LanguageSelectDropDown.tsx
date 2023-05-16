import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";


export default function LanguageSelectDropDown(){
    const router = useRouter();
    const {locale} = router;
    const currentLocale=locale=== 'en'? 'en' : 'fr';
    const otherLocale=locale=== 'en'? 'fr' : 'en';
    const [open, setOpen] = useState(false);

    
    
    return(
        <div className="relative ">
            <div
            onClick={() => setOpen(true)}
            className="flex items-center space-x-2 rounded-xl cursor-pointer hover:underline ml-10"
            >
                <ReactCountryFlag
                countryCode={currentLocale === 'en' ? 'us' : currentLocale}
                svg
                style={{
                    width: "1.25rem",
                    height: "1.25rem"
                }}
                title={currentLocale}
                className="rounded-full "

                />
                <span className="info-label w-5 h-5 items-center justify-center flex">{currentLocale}</span>

                <ChevronDownIcon className="w-3" />
            </div>

            {open &&
            <>
            <div
            onClick={()=>setOpen(false)}
            className="fixed top-0 left-0  w-screen h-screen"
            >

            </div>

            <Link
            href={router.asPath} locale={otherLocale.toLowerCase()} scroll={false}>
                <div
                onClick={()=>{
                    setOpen(false)
                    if (setOpen != null) setOpen(false)
                }}
                className="absolute -bottom-9 z-10 items-center space-x-2  rounded-xl cursor-pointer ml-10"
                >
                    <ReactCountryFlag
                    countryCode={otherLocale === 'en' ? 'us' : otherLocale}
                    svg
                    style={{
                        width: "1.25rem",
                        height: "1.25rem"
                    }}
                    title={otherLocale}
                    className="rounded-full"

                    />
                    <span className="info-label w-5 h-5 ">{otherLocale}</span>

                    <ChevronDownIcon className="w-3 opacity-0" />

                   

                </div>
            </Link>
            </>
            }

        </div>
    )
}