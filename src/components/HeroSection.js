import React from 'react';
import Image from 'next/image';
import HeadingBar from "@/components/HeadingBar";

function HeroSection() {
    return(
        // Hero section
        <section className="bg-white dark:bg-gray-900 relative">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl dark:text-white">
                        <span className="text-blue-900 block mb-8">Say Goodbye </span>
                        <span className="text-blue-900">To <span className="text-cyan-200">Manual.</span></span>
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 mt-5">
                        At AutomateX we're on a mission to revolutionize the way you work. With AutomateX, you can say goodbye to manual tasks.
                    </p>
                    <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Subscribe
                    </button>

                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="/images/HeroSectionImg.png" alt="mockup" className="w-full h-auto object-cover" />
                </div>
                <div className="mt-4 ml-4 absolute -left-80 top-96">
                    <svg
                        width="490"
                        height="589"
                        viewBox="0 0 490 589"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Include the path and gradient definitions */}
                        <path d="M-211.503 587.924C-259.073 561.958 -355.043 496.229 -358.36 441.039C-362.507 372.051 -345.253 348.941 -375.186 306.521C-405.119 264.1 -443.368 223.361 -318.572 175.616C-193.776 127.871 -187.485 113.326 -136.595 102.457C-85.7042 91.5876 50.6413 -50.2482 50.0224 20.8574C49.4035 91.963 -17.8661 218.658 141.5 153.534C168.097 142.384 388.768 -3.31184 489 127.034" stroke="url(#paint0_linear_293_1273)" stroke-width="2"/>
                        <defs>
                            <linearGradient id="paint0_linear_293_1273" x1="-139.634" y1="618.177" x2="-297.475" y2="-142.058" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#36E6D5"/>
                                <stop offset="1" stop-color="#29E871"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            {/*Feature Section */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 text-3xl font-extrabold text-blue-900 sm:text-4xl md:mx-auto block whitespace-nowrap">
                       Explore The Benefit of The Features
                    </h2>
                    <p className=" text-base text-gray-700 md:text-lg">
                        Unique and Powerful suit of software to run and entire, brought to you by a company with the long term version to transform the way you work.
                    </p>
                </div>
                <div className=" grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <div className=" flex flex-col justify-between p-5 bg-emerald-50 border-b-cyan-50 rounded-md shadow-0">
                        <div>
                            <div className=" flex items-center justify-center w-16 h-16 mb-4 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14 text-emerald-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                            </div>
                        <h6 className="mb-2 font-bold text-lg text-blue-900 ">Integrated Platform </h6>
                        <p className="mb-7 text-sm text-blue-900">
                                A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-5 bg-slate-50 border-b-cyan-50 rounded-md shadow-0">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14 text-emerald-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>

                            </div>
                            <h6 className="mb-2 font-bold text-lg text-blue-900">Personal Dashboard</h6>
                            <p className="mb-7 text-sm text-blue-900">
                                Rough pomfret lemon shark plownose chimaera southern sandfish kokanee northern sea.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-5 bg-emerald-50 border-b-cyan-50 rounded-md shadow-0">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14 text-emerald-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-bold text-lg text-blue-900 ">Organically grow</h6>
                            <p className="mb-7 text-sm text-blue-900">
                                A slice of heaven. O for awesome, this chocka full cuzzie is as rip-off as a cracker.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*Service Section */}
               <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                   <h2 className="max-w-lg mb-6 text-4xl font-extrabold text-blue-900 sm:text-4xl md:mx-auto block whitespace-nowrap">
                       Service
                   </h2>
               </div>
            <main className="relative mb-5">
                {/* First Card */}
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-emerald-50 rounded-r-full mb-8 lg:mb-0">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 text-center lg:text-left">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 text-3xl font-medium text-blue-900 sm:text-4xl sm:leading-none">
                                    Full Service Deployment
                                </h2>
                                <p className="text-base text-blue-900 md:text-lg">
                                    Say goodbye to manual and error-prone deployment processes. Our Service automates the deployment of frontend code, backend service, database, and all other components of your application stack.
                                </p>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start space-x-3">
                                <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    See more
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center lg:w-1/2">
                            <div className="w-2/5">
                                <img className="object-cover" src="/images/Service.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className="px-4 py-16 mt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-emerald-50 rounded-l-full mb-8 lg:mb-0">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div className="flex items-center justify-center lg:w-1/2">
                            <div className="w-2/5">
                                <img className="object-cover" src="/images/cloud.png" alt="" />
                            </div>
                        </div>
                        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pl-5 text-center lg:text-left">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 text-3xl font-medium text-blue-900 sm:text-4xl sm:leading-none">
                                    Full Service Deployment
                                </h2>
                                <p className="text-base text-blue-900 md:text-lg">
                                    Say goodbye to manual and error-prone deployment processes. Our Service automates the deployment of frontend code, backend service, database, and all other components of your application stack.
                                </p>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start space-x-3">
                                <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    See more
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Third Card */}
                <div className="px-4 py-16 mx-auto mt-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-emerald-50 rounded-r-full mb-8 lg:mb-0">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 text-center lg:text-left">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 text-3xl font-medium text-blue-900 sm:text-4xl sm:leading-none">
                                    Full Service Deployment
                                </h2>
                                <p className="text-base text-blue-900 md:text-lg">
                                    Say goodbye to manual and error-prone deployment processes. Our Service automates the deployment of frontend code, backend service, database, and all other components of your application stack.
                                </p>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start space-x-3">
                                <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    See more
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center lg:w-1/2">
                            <div className="w-2/5">
                                <img className="object-cover" src="/images/git%201.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </main>

        {/* Feature Section   */}
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-10">
                <h2 className="max-w-lg mb-6 text-4xl font-extrabold text-blue-900 sm:text-4xl md:mx-auto block whitespace-nowrap">
                    Our Feature
                </h2>
            </div>
            <section className="bg-emerald-50 dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h4 className="text-md font-light text-center text-gray-800 lg:text-3xl dark:text-white">explore our <br/> awesome <span className="text-blue-500">Components</span></h4>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-4">
                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 rounded-full dark:text-white">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14 text-blue-900">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>

                            </span>

                            <h1 className="text-xl font-semibold text-blue-900 dark:text-white">User Monitoring</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 rounded-full dark:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14 text-blue-900">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>

                            </span>

                            <h1 className="text-xl font-semibold text-blue-900 dark:text-white"> Rollback Version</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>

                        </div>


                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 rounded-full dark:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 text-blue-900">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>

                            </span>

                            <h1 className="text-xl font-semibold text-blue-900 dark:text-white">Cloude Storage</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 rounded-full dark:text-white">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14 text-blue-900">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                            </span>

                            <h1 className="text-xl font-semibold text-blue-900 dark:text-white">Simple & clean designs</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>
                    </div>
                </div>
            </section>






        </section>

    )

}
export default HeroSection
