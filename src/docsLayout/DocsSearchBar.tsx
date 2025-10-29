"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { navItems } from "./NavItems";
type SubItem = {
    name: string;
    path: string;
    pro?: boolean;
    new?: boolean;
    featureKey?: string;
    description: string;
};


type NavItem = {
    name: string;
    path?: string;
    description: string; // ✅ made optional so items with only subItems are valid
    subItems?: SubItem[];
};

export default function DocsSearchBar() {
    const [ query, setQuery ] = useState( "" );
    const [ results, setResults ] = useState( navItems );
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>( null );

    const handleSearch = ( value: string ) => {
        setQuery( value );
        const newArray: NavItem[] = [];

        navItems.forEach( ( item ) => {
            const itemMatches =
                item.name.toLowerCase().includes( value.toLowerCase() ) ||
                item.description?.toLowerCase().includes( value.toLowerCase() );

            // If parent matches, push it
            if ( itemMatches && !item.subItems ) {
                newArray.push(item);
            }

            // Check subItems
            if ( item.subItems ) {
                item.subItems.forEach( ( sub ) => {
                    const subMatches =
                        sub.name.toLowerCase().includes( value.toLowerCase() ) ||
                        sub.description?.toLowerCase().includes( value.toLowerCase() );

                    if ( subMatches ) {
                        newArray.push(sub);
                    }
                } );
            }
        } );

        console.log( newArray );
        setResults( newArray );
    };

    const handleNavigate = ( href?: string ) => {
        if ( !href ) return; // ✅ prevent undefined navigation
        router.push( href );
        setQuery( "" );
        setResults( [] );
    };

    return (
        <div className="hidden lg:block relative">
            <form onSubmit={ ( e ) => e.preventDefault() }>
                <div className="relative">
                    {/* 🔍 Icon */ }
                    <span className="absolute -translate-y-1/2 left-4 top-1/2 pointer-events-none">
                        <svg
                            className="fill-gray-500 dark:fill-gray-400"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                            />
                        </svg>
                    </span>

                    {/* 🧠 Input */ }
                    <input
                        ref={ inputRef }
                        type="text"
                        value={ query }
                        onChange={ ( e ) => handleSearch( e.target.value ) }
                        placeholder="Search or type command..."
                        className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
                    />

                    {/* ⌘K shortcut button (optional, doesn’t open modal here) */ }
                    <button
                        type="button"
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-50 px-[7px] py-[4.5px] text-xs text-gray-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400 hidden md:inline-flex"
                    >
                        <span>⌘</span> <span>K</span>
                    </button>
                </div>
            </form>

            {/* 🔎 Dropdown Results */ }
            { query && results.length > 0 && (
                <ul className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg text-sm">
                    { results.map( ( item ) => (
                        <li
                            key={ item.path }
                            onClick={ () => handleNavigate( item?.path ) }
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            { item.name }
                        </li>
                    ) ) }
                </ul>
            ) }

            { query && results.length === 0 && (
                <div className="absolute mt-2 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm px-4 py-2 text-gray-500">
                    No results found
                </div>
            ) }
        </div>
    );
}
