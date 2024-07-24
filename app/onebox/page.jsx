"use client";
import React, { useState } from "react";
import NavBar from "@/components/Navbar";
import '@fontsource/dm-sans';
import { Icon8,Icon9 } from "@/components/Icons";



const Onebox = () => {
    const[themedark,setthemedark]=useState(true);
    const changetheme=()=>(
        setthemedark(!themedark)
    )
    const fetchMessages = async () => {
        const token = 'your-bearer-token'; // Replace with your actual token

        try {
            const response = await fetch("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Add the Bearer Token here
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setMessages(data);
            console.log('Messages fetched:', data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };
    
  return (
    <section className="flex h-screen">
      <NavBar className="" />
      <div className="flex flex-col flex-grow">
        <header className="flex border-t border-r border-b border-secondary-100 bg-secondary-800 border-l-0 p-2 h-[7vh]">
          <h1 className="font-sans font-bold p-2 text-lg justify-items-start">
            Onebox
          </h1>
          <div className="flex flex-grow items-end justify-end">
            <div className="flex items-center justify-center gap-2">
                {themedark && <Icon8 className="ms-4" onClick={changetheme}/> }
                {!themedark && <Icon9 className="ms-4" onClick={changetheme}/> }
            <p className="p-2 gap-4">Tim's Workspace</p>
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5799 0.32669L0.399902 1.51336L6.9999 8.10669L13.5999 1.50669L12.4199 0.32669L6.9999 5.74669L1.5799 0.32669Z" fill="white"/>
            </svg>
            </div>
          </div>
        </header>
        <main className="flex items-center justify-center flex-grow bg-black">
          <div className="flex flex-col items-center justify-center gap-4">
            <img 
              src="/images/Nomail.png" 
              alt="No Mail" 
              className="max-w-full max-h-[60vh] object-contain" 
            />
            <h1 className="font-dm-sans font-bold flex mt-4 text-white text-2xl mb-4 p-2">It’s the beginning of a legendary sales pipeline </h1>
            <p className="font-dm-sans font-light text-[#9E9E9E] ">When you have inbound E-mails</p>
            <p className="font-light font-dm-sans text-[#9E9E9E]">you’ll see them here</p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Onebox;