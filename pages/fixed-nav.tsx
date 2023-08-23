import { Navbar } from "flowbite-react";
import { MdOutlineNotifications } from "react-icons/md";
import { MdOutlineCloudDownload } from "react-icons/md";
import { MdOutlineCached } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BsBox } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { MdOutlineBalance } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { CiCalculator1 } from "react-icons/ci";
import { BsDatabaseCheck } from "react-icons/bs";
import { MdOutlineAttachFile } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { LiaWalletSolid } from "react-icons/lia";
import { FaLuggageCart } from "react-icons/fa";
import { LiaShipSolid } from "react-icons/lia";
import { BsBoxes } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineInbox } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";
import { CiSettings } from "react-icons/ci";

const Home = () => {
  return (
    <>
      <div className="antialiased theme-bg">
        <nav className="px-4 py-2.5 fixed left-0 right-0 top-0 z-50">
          <div className="w-full">
            <div className="flex flex-nowrap">
              <div className="w-64 flex flex-col">
                <a href="#" className="flex items-start justify-between mr-4">
                  <img
                    src="https://flowbite.s3.amazonaws.com/logo.svg"
                    className="mr-3 h-8"
                    alt="Logo"
                  />
                </a>
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap justify-between items-center pl-4">
                  {/* Search Start */}
                  <form action="#" method="GET">
                    <div className="relative search-ui">
                      <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                        <MdSearch className="w-6 h-6 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="email"
                        id="topbar-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                  {/* Search End */}

                  <div className="flex items-center order-2">
                    {/* Notification icons start */}
                    <button
                      type="button"
                      data-dropdown-toggle="notification-dropdown"
                      className="p-2.5 mr-4 theme-bg-blue rounded-lg"
                    >
                      <MdOutlineNotifications className="text-2xl theme-blue-color" />
                    </button>
                    <div
                      className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
                      id="notification-dropdown"
                    >
                      <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                        Notifications
                      </div>
                      <div>
                        <a
                          href="#"
                          className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                        >
                          <div className="flex-shrink-0">
                            <img
                              className="w-11 h-11 rounded-full"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                              alt="Bonnie Green avatar"
                            />
                            <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5  border border-white bg-primary-700 dark:border-gray-700">
                              <svg
                                aria-hidden="true"
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="pl-3 w-full">
                            <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                              New message from
                              <span className="font-semibold text-gray-900 dark:text-white">
                                Bonnie Green
                              </span>
                              : "Hey, what's up? All set for the presentation?"
                            </div>
                            <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                              a few moments ago
                            </div>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                        >
                          <div className="flex-shrink-0">
                            <img
                              className="w-11 h-11 rounded-full"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                              alt="Jese Leos avatar"
                            />
                            <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-700">
                              <svg
                                aria-hidden="true"
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="pl-3 w-full">
                            <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                              <span className="font-semibold text-gray-900 dark:text-white">
                                Jese leos
                              </span>
                              and
                              <span className="font-medium text-gray-900 dark:text-white">
                                5 others
                              </span>
                              started following you.
                            </div>
                            <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                              10 minutes ago
                            </div>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                        >
                          <div className="flex-shrink-0">
                            <img
                              className="w-11 h-11 rounded-full"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                              alt="Joseph McFall avatar"
                            />
                            <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-700">
                              <svg
                                aria-hidden="true"
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="pl-3 w-full">
                            <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                              <span className="font-semibold text-gray-900 dark:text-white">
                                Joseph Mcfall
                              </span>
                              and
                              <span className="font-medium text-gray-900 dark:text-white">
                                141 others
                              </span>
                              love your story. See it and view more stories.
                            </div>
                            <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                              44 minutes ago
                            </div>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                        >
                          <div className="flex-shrink-0">
                            <img
                              className="w-11 h-11 rounded-full"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                              alt="Roberta Casas image"
                            />
                            <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-700">
                              <svg
                                aria-hidden="true"
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="pl-3 w-full">
                            <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                              <span className="font-semibold text-gray-900 dark:text-white">
                                Leslie Livingston
                              </span>
                              mentioned you in a comment:
                              <span className="font-medium text-primary-600 dark:text-primary-500">
                                @bonnie.green
                              </span>
                              what do you say?
                            </div>
                            <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                              1 hour ago
                            </div>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <div className="flex-shrink-0">
                            <img
                              className="w-11 h-11 rounded-full"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                              alt="Robert image"
                            />
                            <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-700">
                              <svg
                                aria-hidden="true"
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="pl-3 w-full">
                            <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                              <span className="font-semibold text-gray-900 dark:text-white">
                                Robert Brown
                              </span>
                              posted a new video: Glassmorphism - learn how to
                              implement the new design trend.
                            </div>
                            <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                              3 hours ago
                            </div>
                          </div>
                        </a>
                      </div>
                      <a
                        href="#"
                        className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
                      >
                        <div className="inline-flex items-center">
                          <svg
                            aria-hidden="true"
                            className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                            <path
                              fill-rule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          View all
                        </div>
                      </a>
                    </div>

                    <button
                      type="button"
                      data-dropdown-toggle="notification-dropdown"
                      className="p-2.5 mr-4 theme-bg-green rounded-lg"
                    >
                      <MdOutlineCloudDownload className="text-2xl theme-green-color" />
                    </button>

                    <button
                      type="button"
                      data-dropdown-toggle="notification-dropdown"
                      className="p-2.5 mr-4 theme-bg-gray rounded-lg"
                    >
                      <MdOutlineCached className="text-2xl theme-gray-color" />
                    </button>

                    <button
                      type="button"
                      data-dropdown-toggle="notification-dropdown"
                      className="p-2.5 mr-4 theme-bg-red rounded-lg relative inline-flex items-center text-sm font-medium text-center "
                    >
                      <MdOutlineSettings className="text-2xl theme-red-color" />
                      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs  text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2">
                        19
                      </div>
                    </button>

                    <button
                      type="button"
                      className="flex mx-3 text-sm"
                      id="user-menu-button"
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown"
                    >
                      <div className="flex items-center space-x-4 pl-12">
                        <div className="font-medium dark:text-white">
                          <div>
                            Hello, <span className="font-bold">Ajay K</span>
                          </div>
                        </div>
                        <img
                          className="w-10 h-10 rounded-full ring-4 ring-white"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                          alt=""
                        />
                      </div>
                    </button>
                    <div
                      className="hidden z-50 my-4 w-56 text-base list-none bg-white  divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
                      id="dropdown"
                    >
                      <div className="py-3 px-4">
                        <span className="block text-sm text-gray-900 truncate dark:text-white">
                          ajay.k@shipease.in
                        </span>
                      </div>
                      <ul
                        className="py-1 text-gray-700 dark:text-gray-300"
                        aria-labelledby="dropdown"
                      >
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                          >
                            My profile
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                          >
                            Account settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                          >
                            Collections
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                          >
                            Sign out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Notification icons start */}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* left section start */}
        <aside
          className="fixed top-0 left-0 z-40 w-56 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidenav"
          id="drawer-navigation"
        >
          <div className="overflow-y-auto h-full bg-white dark:bg-gray-800">
            <ul className="space-y-2 left-nav-ui">
              <li>
                <a href="#" className="flex items-center">
                  <MdOutlineDashboardCustomize />
                  <span>Overview</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center ">
                  <BsBox />
                  <span>Orders</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center ">
                  <CgDetailsMore />
                  <span>More on Orders</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center ">
                  <MdOutlineLocalShipping />
                  <span>Shipments</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center ">
                  <MdOutlineAttachFile />
                  <span>Channels</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center ">
                  <BsDatabaseCheck />
                  <span>OMS</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center ">
                  <CiCalculator1 />
                  <span>Billing</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center ">
                  <MdOutlineBalance />
                  <span>Weight Reco.</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center ">
                  <MdPersonOutline />
                  <span>Customer</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center ">
                  <VscSettings />
                  <span>Tools</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center ">
                  <MdMailOutline />
                  <span>MIS</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center ">
                  <MdSupportAgent />
                  <span>Customer Support</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* left section end */}

        <main className="p-8 ml-52 h-auto pt-20">
          {/* about user start */}
          <div className="container mb-5">
            <div className="flex flex-wrap justify-between items-center">
              <div>
                <h2 className="font-bold text-2xl">Dashboard</h2>
                <p className="text-sm text-gray-400">
                  Hi, Ajay K. Welcome back to Shipease Pvt Ltd
                </p>
              </div>
              <div className="bg-white py-1.5 relative flex flex-wrap px-5 rounded-lg shadow-md">
                <div className="p-2.5 mr-4 theme-bg-red rounded-lg inline-flex items-center justify-center">
                  <LiaWalletSolid className="text-2xl theme-red-color" />
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-xl font-bold theme-red-color ">
                    ₹ 6206.45
                  </h2>
                  <p className="text-xs text-gray-600">Last 30 Days </p>
                </div>
              </div>
            </div>
          </div>
          {/* about user end */}

          {/* tab start */}
          <div className="container mb-5">
            <div className="bg-white relative px-5 rounded-lg shadow-md">
              <ul
                className="tab-ui"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li>
                  <button
                    className="inline-block pt-4 mb-4 text-md uppercase border-b-2 border-red-600 text-red-600"
                    id="Overview-tab"
                    data-tabs-target="#Overview"
                  >
                    Overview
                  </button>
                </li>

                <li>
                  <button id="Order-tab" data-tabs-target="#Order">
                    Order
                  </button>
                </li>

                <li>
                  <button id="Shipment-tab" data-tabs-target="#Shipment">
                    Shipment
                  </button>
                </li>

                <li>
                  <button id="NDR-tab" data-tabs-target="#NDR">
                    NDR
                  </button>
                </li>

                <li>
                  <button id="RTO-tab" data-tabs-target="#RTO">
                    RTO
                  </button>
                </li>

                <li>
                  <button id="Delays-tab" data-tabs-target="#Delays">
                    Courier Delays
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/*tab end */}

          <div className="container mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 w-1/4 pr-0">
                {/* order details start */}
                <div className="bg-white relative px-3 py-5 rounded-lg shadow-md">
                  <h2 className="font-semibold">Order Details</h2>
                  <div className="flex flex-wrap justify-between items-center">
                    <div className="text-center mt-4">
                      <BsBox className="inline-block text-gray-500 mb-3 text-3xl" />
                      <p className="text-sm text-gray-500">Total Orders</p>
                      <h2 className="font-bold">35,94</h2>
                    </div>

                    <div className="text-center mt-4">
                      <MdOutlineLocalShipping className="inline-block text-gray-500 mb-3 text-3xl" />
                      <p className="text-sm text-gray-500">Shipped Orders</p>
                      <h2 className="font-bold">12,43</h2>
                    </div>
                  </div>
                </div>

                {/* order details end */}

                {/* Shipment Details start */}

                <div className="bg-white relative px-3 py-5 mt-5 rounded-lg shadow-md  pb-10">
                  <h2 className="font-semibold">Shipment Details</h2>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center mt-4">
                      <FaLuggageCart className="inline-block text-gray-500 mb-3 text-3xl" />
                      <p className="text-sm text-gray-500">Yet to Picup</p>
                      <h2 className="font-bold">05</h2>
                    </div>

                    <div className="text-center mt-4">
                      <MdOutlineLocalShipping className="inline-block text-gray-500 mb-3 text-3xl" />
                      <p className="text-sm text-gray-500">Picked</p>
                      <h2 className="font-bold">12</h2>
                    </div>

                    <div className="text-center mt-4">
                      <LiaShipSolid className="inline-block text-gray-500 mb-3 text-3xl" />
                      <p className="text-sm text-gray-500">In-Transit</p>
                      <h2 className="font-bold">02</h2>
                    </div>
                  </div>
                  <hr className="my-4" />

                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center mt-4">
                      <BsBoxes className="inline-block text-gray-500 mb-3 text-3xl" />
                      <p className="text-sm text-gray-500">Out Delivery</p>
                      <h2 className="font-bold">145</h2>
                    </div>

                    <div className="text-center mt-4">
                      <MdOutlineProductionQuantityLimits className="inline-block text-gray-500 mb-3 text-3xl" />
                      <p className="text-sm text-gray-500">Delivered</p>
                      <h2 className="font-bold">66</h2>
                    </div>

                    <div className="text-center mt-4">
                      <MdOutlineInbox className="inline-block text-gray-500 mb-3 text-3xl" />
                      <p className="text-sm text-gray-500">NDA</p>
                      <h2 className="font-bold">87</h2>
                    </div>
                  </div>
                  <hr className="my-4" />

                  <div className="text-center mt-4">
                    <MdPendingActions className="inline-block text-gray-500 mb-3 text-3xl" />
                    <p className="text-sm text-gray-500">RTO</p>
                    <h2 className="font-bold">14</h2>
                  </div>
                </div>
                {/* Shipment Details end */}
              </div>

              <div className="p-4 pt-0 w-1/2">
                {/* block row start */}
                <div className="grid grid-cols-2 gap-3">
                  {/* block 1 start */}
                  <div className="bg-white relative px-3 py-5 mt-5 rounded-lg shadow-md">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-full flex items-start">
                        <div className="p-1.5 mr-0 theme-bg-red-solid rounded-full inline-flex items-center justify-center">
                          <RiShoppingBasketLine className="text-xl text-white" />
                        </div>
                        <div className="flex-grow pl-2.5">
                          <p className="text-xs text-gray-600">Today’s Order</p>
                          <h2 className="text-xl py-3 font-bold ">2,543</h2>
                          <p className="text-xs theme-red-color font-semibold">
                            Created 159{" "}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <img src="graph-red.png" className="inline-block" />
                        <span className="theme-green-color font-bold pt-5 block text-sm">
                          +40%
                        </span>
                        <p className="text-xs text-gray-600">
                          comparative analysis
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* block 1 end */}
                  {/* block 2 start */}
                  <div className="bg-white relative px-3 py-5 mt-5 rounded-lg shadow-md">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-full flex items-start">
                        <div className="p-1.5 mr-0 theme-bg-blue-solid rounded-full inline-flex items-center justify-center">
                          <LiaWalletSolid className="text-xl text-white" />
                        </div>
                        <div className="flex-grow pl-2.5">
                          <p className="ext-small-text text-gray-600">
                            Today’s Revenue
                          </p>
                          <h2 className="text-xl py-3 font-bold ">56,983</h2>
                          <p className="text-xs theme-blue-color font-semibold">
                            Yes. 86,542
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <img src="graph-blue.png" className="inline-block" />
                        <span className="theme-red-color font-bold pt-5 block text-sm">
                          +20%
                        </span>
                        <p className="text-xs text-gray-600">
                          comparative analysis
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* block 2 end */}
                </div>
                {/* block row end */}

                {/* block row start */}
                <div className="grid grid-cols-2 gap-3">
                  {/* block 1 start */}
                  <div className="bg-white relative px-3 py-5 mt-5 rounded-lg shadow-md">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-full flex items-start">
                        <div className="p-1.5 mr-0 theme-bg-green-solid rounded-full inline-flex items-center justify-center">
                          <VscGraphLine className="text-xl text-white" />
                        </div>
                        <div className="flex-grow pl-2.5">
                          <p className="ext-small-text   text-gray-600">
                            Average Selling
                          </p>
                          <h2 className="text-xl py-3 font-bold ">369.1</h2>
                          <p className="text-xs theme-green-color font-semibold">
                            Seller
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <img src="graph-green.png" className="inline-block" />
                        <span className="theme-green-color font-bold pt-5 block text-sm">
                          +20%
                        </span>
                        <p className="text-xs text-gray-600">
                          comparative analysis
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* block 1 end */}
                  {/* block 2 start */}
                  <div className="bg-white relative px-3 py-5 mt-5 rounded-lg shadow-md">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-full flex items-start">
                        <div className="p-1.5 mr-0 theme-bg-gray-solid rounded-full inline-flex items-center justify-center">
                          <MdPersonOutline className="text-xl text-white" />
                        </div>
                        <div className="flex-grow pl-2.5">
                          <p className="ext-small-text text-gray-600">
                            Total Customer
                          </p>
                          <h2 className="text-xl py-3 font-bold ">34,000</h2>
                          <p className="text-xs theme-gray-color font-semibold">
                            Seller
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <img src="graph-gray.png" className="inline-block" />
                        <span className="theme-red-color font-bold pt-5 block text-sm">
                          -10%
                        </span>
                        <p className="text-xs text-gray-600">
                          comparative analysis
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* block 2 end */}
                </div>
                {/* block row end */}

                {/* Revenue Analytics start */}
                <div className="bg-white relative px-3 py-5 mt-5 rounded-lg shadow-md text-center">
                  <h2 className="font-semibold mb-4 text-left">
                    Revenue Analytics
                  </h2>

                  <img
                    src="revenue-graph.png"
                    alt="revenue graph"
                    className="inline-block"
                  />
                </div>
                {/* Revenue Analytics end */}

                {/* Graph section end */}
              </div>

              <div className="p-4 w-1/4 pl-0">
                {/* NDR details start */}
                <div className="bg-white relative px-3 py-5 rounded-lg shadow-md">
                  {/* three tab start */}

                  <ul className="flex flex-wrap text-center tab-ui1 mb-4">
                    <li>
                      <a href="#" className="active">
                        NDR Details
                      </a>
                    </li>
                    <li>
                      <a href="#">COD Status</a>
                    </li>
                    <li>
                      <a href="#">RTO Details</a>
                    </li>
                  </ul>
                  {/* three tab end */}

                  <div className="flex flex-wrap justify-between items-center">
                    <div className="text-center">
                      <BsBox className="inline-block text-gray-500 mb-3 text-3xl" />
                      <p className="text-sm text-gray-500">RTO Analysis</p>
                      <h2 className="font-bold">12,32</h2>
                    </div>

                    <div className="text-center">
                      <CiSettings className="inline-block text-gray-500 mb-3 text-3xl" />
                      <p className="text-sm text-gray-500">RTO Initiated</p>
                      <h2 className="font-bold">56,00</h2>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="flex flex-wrap justify-between items-center">
                    <div className="text-center">
                      <LiaShipSolid className="inline-block text-gray-500 mb-3 text-3xl" />
                      <p className="text-sm text-gray-500">RTO in Transit</p>
                      <h2 className="font-bold">35,94</h2>
                    </div>

                    <div className="text-center">
                      <BsBoxes className="inline-block text-gray-500 mb-3 text-3xl" />
                      <p className="text-sm text-gray-500">RTO Delivered</p>
                      <h2 className="font-bold">12,43</h2>
                    </div>
                  </div>
                </div>
                {/* NDR details end */}
                {/* State Wise Split start */}
                <div className="bg-white relative px-3 py-5 mt-5 rounded-lg shadow-md text-center">
                  <h2 className="font-semibold mb-4 text-left">
                    Shipment Details
                  </h2>

                  <img
                    src="india-map.png"
                    alt="India map"
                    className="inline-block custom-wdth"
                  />
                </div>
                {/* State Wise Split endt */}
              </div>
            </div>
            {/* Graph section start */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white relative px-3 py-5 mt-5 rounded-lg shadow-md text-center">
                <h2 className="font-semibold mb-4 text-left">Courier Split</h2>
                <img
                  src="courier-graph.png"
                  alt="courier-graph"
                  className="inline-block"
                />
                <ul className="bullet-point-ui mt-5">
                  <li>
                    <span className="bg-yellow-400"></span>Eco Express
                  </li>
                  <li>
                    <span className="bg-blue-800"></span>Ekart Logistics
                  </li>
                  <li>
                    <span className="bg-orange-600"></span>Delivery
                  </li>
                </ul>
                {/* indicators start */}
                <ul className="indicators-ui">
                  <li></li>
                  <li className="active"></li>
                  <li></li>
                </ul>
                {/* indicators end */}
              </div>

              <div className="bg-white relative px-3 py-5 mt-5 rounded-lg shadow-md text-center">
                <h2 className="font-semibold mb-4 text-left">
                  Shipment Details
                </h2>
                <img
                  src="shipment-graph.png"
                  alt="shipment graph"
                  className="inline-block"
                />
                <ul className="bullet-point-ui mt-5">
                  <li>
                    <span className="bg-yellow-400"></span>Delivered
                  </li>
                  <li>
                    <span className="bg-blue-800"></span>EUndelivered
                  </li>
                  <li>
                    <span className="bg-orange-600"></span>Intransit
                  </li>
                  <li>
                    <span className="bg-gray-900"></span>RTO
                  </li>
                </ul>
                {/* indicators start */}
                <ul className="indicators-ui">
                  <li></li>
                  <li className="active"></li>
                  <li></li>
                </ul>
                {/* indicators end */}
              </div>

              <div className="bg-white relative px-3 py-5 mt-5 rounded-lg shadow-md text-center">
                <h2 className="font-semibold mb-4 text-left">
                  Shipment Details
                </h2>
                <img
                  src="performance-graph.png"
                  alt="performance graph"
                  className="inline-block"
                />
                <ul className="bullet-point-ui mt-5">
                  <li>
                    <span className="bg-yellow-400"></span>Latest Deliveries
                  </li>
                  <li>
                    <span className="bg-blue-800"></span>On time Deliveries
                  </li>
                </ul>
                {/* indicators start */}
                <ul className="indicators-ui">
                  <li></li>
                  <li className="active"></li>
                  <li></li>
                </ul>
                {/* indicators end */}
              </div>

              <div className="bg-white relative px-3 py-5 mt-5 rounded-lg shadow-md text-center">
                <h2 className="font-semibold mb-4 text-left">
                  Shipment Details
                </h2>
                <img
                  src="distribution-graph.png"
                  alt="distribution graph"
                  className="inline-block"
                />
                <ul className="bullet-point-ui mt-5">
                  <li>
                    <span className="bg-yellow-400"></span>Zone A
                  </li>
                  <li>
                    <span className="bg-blue-800"></span>Zone B
                  </li>
                  <li>
                    <span className="bg-orange-600"></span>Zone C
                  </li>
                  <li>
                    <span className="bg-gray-900"></span>Zone D
                  </li>
                  <li>
                    <span className="bg-gray-900"></span>Zone E
                  </li>
                </ul>
                {/* indicators start */}
                <ul className="indicators-ui">
                  <li></li>
                  <li className="active"></li>
                  <li></li>
                </ul>
                {/* indicators end */}
              </div>
            </div>
            {/* Graph section end */}

            {/* data table start */}
            {/* Graph section start */}
            <div className="bg-white relative px-3 py-5 mt-5 rounded-lg shadow-md text-center">
              <h2 className="font-semibold mb-4 text-left">
                Shinment - Zone Distribution
              </h2>

              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 ">
                    <tr>
                      <th className="p-3">Courier Name</th>
                      <th className="p-3">Yet to Pick</th>
                      <th className="p-3">Picked</th>
                      <th className="p-3">In-Transit</th>
                      <th className="p-3">Delivered</th>
                      <th className="p-3">NDP Pending</th>
                      <th className="p-3">NDR Delivered</th>
                      <th className="p-3">RTO</th>
                      <th className="p-3">Lost/Damaged</th>
                      <th className="p-3">Total Shipment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="p-3">Amazon SWA Surface</td>
                      <td className="p-3">12</td>
                      <td className="p-3">54</td>
                      <td className="p-3">76</td>
                      <td className="p-3">43</td>
                      <td className="p-3">23</td>
                      <td className="p-3">78</td>
                      <td className="p-3">56</td>
                      <td className="p-3">32</td>
                      <td className="p-3">65</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="p-3">SMC</td>
                      <td className="p-3">12</td>
                      <td className="p-3">54</td>
                      <td className="p-3">76</td>
                      <td className="p-3">43</td>
                      <td className="p-3">23</td>
                      <td className="p-3">78</td>
                      <td className="p-3">56</td>
                      <td className="p-3">32</td>
                      <td className="p-3">65</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="p-3">Delhivery</td>
                      <td className="p-3">12</td>
                      <td className="p-3">54</td>
                      <td className="p-3">76</td>
                      <td className="p-3">43</td>
                      <td className="p-3">23</td>
                      <td className="p-3">78</td>
                      <td className="p-3">56</td>
                      <td className="p-3">32</td>
                      <td className="p-3">65</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="p-3">Ekart Logistics</td>
                      <td className="p-3">12</td>
                      <td className="p-3">54</td>
                      <td className="p-3">76</td>
                      <td className="p-3">43</td>
                      <td className="p-3">23</td>
                      <td className="p-3">78</td>
                      <td className="p-3">56</td>
                      <td className="p-3">32</td>
                      <td className="p-3">65</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="p-3">Other</td>
                      <td className="p-3">12</td>
                      <td className="p-3">54</td>
                      <td className="p-3">76</td>
                      <td className="p-3">43</td>
                      <td className="p-3">23</td>
                      <td className="p-3">78</td>
                      <td className="p-3">56</td>
                      <td className="p-3">32</td>
                      <td className="p-3">65</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
