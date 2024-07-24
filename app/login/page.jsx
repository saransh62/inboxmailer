'use client'
import React from "react";

const Login = () => {

  const redirectToGoogle = () => {
    const clientId = '353256760825-a1evig9h3b4f3mfdd2u0dvlqvtir07ib.apps.googleusercontent.com';
    const redirectUri = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login/callback';
    const scope = 'profile email';
    const state = encodeURIComponent(JSON.stringify({ redirectTo: 'https://frontend.com' }));
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}&state=${state}&client_id=${clientId}`;
  
    window.location.href = authUrl;
  };
  return (
    <section>
      <header className="flex items-center justify-center p-4 h-[8vh] border-2 border-secondary-200">
        <img src="/images/Logo.png" alt="Logo" className="w-48 "></img>
      </header>
      <div className="flex items-center justify-center flex-col h-[89vh]">
        <div className="bg-secondary-200 border-secondary-100 border-solid rounded-xl p-8 pl-12 pr-12 flex items-center justify-center flex-col border-2">
          <h1 className="font-bold text-xl p-2 font-sans">Create a new account</h1>
          <div className="flex items-center justify-center w-96 p-2 gap-4 mt-4  border-secondary-100 border-solid border-2 rounded-xl " onClick={redirectToGoogle}>
            <svg
              width="25"
              height="33"
              viewBox="0 0 25 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_7418)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.5008 16.1808C24.5008 15.6226 24.4488 15.0857 24.3524 14.5703H16.6641V17.616H21.0574C20.8681 18.6002 20.293 19.4341 19.4284 19.9924V21.9678H22.0667C23.6103 20.5971 24.5008 18.5786 24.5008 16.1808Z"
                  fill="#4285F4"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.6621 23.8697C18.8661 23.8697 20.714 23.1647 22.0647 21.9622L19.4264 19.9866C18.6954 20.459 17.7604 20.7382 16.6621 20.7382C14.536 20.7382 12.7363 19.3531 12.0943 17.4922H9.36719V19.5321C10.7103 22.1053 13.471 23.8697 16.6621 23.8697Z"
                  fill="#34A853"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0955 17.4929C11.9322 17.0205 11.8395 16.5158 11.8395 15.9969C11.8395 15.478 11.9323 14.9734 12.0956 14.501V12.4609H9.3683C8.79685 13.5581 8.4995 14.7691 8.5 15.9969C8.5 17.2674 8.81537 18.4699 9.3683 19.5329L12.0955 17.4929Z"
                  fill="#FBBC05"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.6622 11.2565C17.8607 11.2565 18.9367 11.6537 19.7828 12.434L22.1241 10.1757C20.7104 8.90518 18.8625 8.125 16.6622 8.125C13.471 8.125 10.7104 9.88937 9.36719 12.4626L12.0944 14.5026C12.7363 12.6415 14.536 11.2565 16.6622 11.2565Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_7418">
                  <rect
                    width="23.5"
                    height="32"
                    fill="white"
                    transform="translate(0.75 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="font-light" >Sign up with Google</p>
          </div>
          <button className="mt-12 bg-blue-600 p-4 w-72 bg-gradient-to-r from-btmcolor-100 to-btmcolor-200 rounded-lg">Create an Account</button>
          <p className="mt-4 font-sans">Alreay have an Account? <a className="text-inherit font-sans">Sign In</a></p>
        </div>
      </div>
      <footer className="bg-secondary-400 flex items-center justify-center p-1 h-[3vh] border-secondary-400 border-t-2">
        <p className="font-light text-secondary-600 font-sans">© 2023 Reachinbox. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Login;
