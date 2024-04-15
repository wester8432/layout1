import "./dropDown.css";
import "../index.css";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
export default function Nav() {
  const [menuShow, setMenuShow] = useState(false);
  const [ulOpen1, setUlOpen1] = useState(false);
  const [ulOpen2, setUlOpen2] = useState(false);
  const [ulOpen3, setUlOpen3] = useState(false);
  const [ulOpen4, setUlOpen4] = useState(false);
  const [ulOpen5, setUlOpen5] = useState(false);
  return (
    <div className=" w-svw md:h-14 xl:h-24">
      <nav className=" grid grid-cols-5 grid-rows-1  h-full ">
        <div className=" col-start-1 col-span-1 ">
          {/**左側LOGO */}
          <img
            className=" w-full h-full"
            src="https://www.aseepsfund.org.tw/images/logo.svg"
          />
        </div>
        {/**XL版右側BOX */}
        <div className="sm:hidden md:hidden xl:block col-end-6 col-span-4">
          {/**右上BOX */}
          <div className=" flex justify-end items-center h-1/3 bg-green-700 pr-8">
            <a className="text-white">回首頁</a>
            <a className=" mx-2 text-white">友站連結</a>
          </div>
          {/**右下BOX */}
          <div className=" md:hidden xl:grid grid-cols-5 items-center  pr-8 h-2/3">
            <div className="col-start-1 col-span-4">
              <ul className="flex justify-around items-center">
                <li className="dropdown list-none ">
                  <a className="hover:text-red-600  focus:ring-4 focus:outline-none  rounded-lg px-5 py-2.5 text-center">
                    <span>認識我們</span>
                  </a>
                  <div className=" dropdown-content fixed   divide-x text-center  items-center   top-20 left-0 h-16  w-svw bg-slate-300 ">
                    <div className="dropdown-content pt-4 divide-x text-center  fixed top-20 left-0 h-16  w-svw bg-slate-300 ">
                      <a className="mx-3">緣由與願景</a>
                      <a className="mx-3">創辦人的話</a>
                      <a className="mx-3">董事會成員</a>
                      <a className="mx-3">組織職掌</a>
                      <a className="mx-3">捐助章程</a>
                      <a className="mx-3">成果年報</a>
                    </div>
                  </div>
                </li>
                <li className="dropdown  ">
                  <a className="hover:text-red-600  focus:ring-4 focus:outline-none  rounded-lg px-5 py-2.5 text-center">
                    <span className="">最新消息</span>
                  </a>
                  <div className="dropdown-content pt-4 divide-x text-center   fixed top-20 left-0 h-16  w-svw bg-slate-300 ">
                    <a className="mx-3">焦點訊息</a>
                    <a className="mx-3">活動與公告</a>
                    <a className="mx-3">媒體報導</a>
                    <a className="mx-3">所有訊息</a>
                  </div>
                </li>
                <li className="dropdown  ">
                  <a className="hover:text-red-600  focus:ring-4 focus:outline-none  rounded-lg px-5 py-2.5 text-center">
                    <span>五大主題</span>
                  </a>
                  <div className="dropdown-content pt-4 divide-x text-center   fixed top-20 left-0 h-16  w-svw bg-slate-300 ">
                    <a className="mx-3">節能減碳</a>
                    <a className="mx-3">生態保育</a>
                    <a className="mx-3">環境保護</a>
                    <a className="mx-3">環境教育</a>
                    <a className="mx-3">循環經濟</a>
                  </div>
                </li>
                <li>
                  <a className="   px-5 my-2.5 hover:text-red-600">
                    <span>聯絡我們</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className=" justify-end flex">
              {/**右下BOX LOGO列 */}
              <ul className="flex">
                <li className=" list-none ">
                  <div className="flex rounded-full h-8 w-8 justify-center items-center bg-green-700 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </div>
                </li>
                <li className=" list-none mx-3">
                  <div className="flex rounded-full h-8 w-8 justify-center items-center bg-blue-800 ">
                    <BsFacebook />
                  </div>
                </li>
                <li className=" list-none mr-3">
                  <div className="flex rounded-full h-8 w-8 justify-center items-center bg-red-600 ">
                    <BsYoutube />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/**手機板右側BOX */}
        <div
          className={`${
            menuShow ? "rightMenuShow" : "rightMenu"
          }  xl:hidden md:grid  col-end-6 justify-self-end w-14 mr-5  bg-green-500`}
        >
          <div
            className={`${menuShow ? `Active` : `controlBox`} w-14 h-14 grid `}
            onClick={() => setMenuShow(!menuShow)}
          >
            <span className="menuBox text-white  justify-self-center"></span>
            <span className=" txt justify-self-center"></span>
          </div>
        </div>
        {/**隱藏MENU */}
        <div className={`${menuShow ? `block` : `hidden`}`}>
          <div className="hideBox  z-50 h-svh w-svw  bg-slate-300">
            {/*第一欄 */}
            <div className="flex h-24 w-svw justify-between items-center">
              {/**搜尋欄 */}
              <div className="flex justify-between rounded-full    ml-8 bg-white">
                <input
                  className=" items-start justify-center  h-12 w-64  outline-none ml-5"
                  placeholder="搜尋"
                  type="text"
                  name="input"
                ></input>
                <a className="search flex justify-center items-center bg-amber-300 rounded-full w-10 h-10 mt-1 mx-2">
                  <AiOutlineSearch className=" w-5 h-5 flex justify-center items-center" />
                </a>
              </div>
              <ul className="flex  mr-8">
                <li className=" list-none ">
                  <div className="flex rounded-full h-8 w-8 justify-center items-center bg-green-700 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </div>
                </li>
                <li className=" list-none mx-3">
                  <div className="flex rounded-full h-8 w-8 justify-center items-center bg-blue-800 ">
                    <BsFacebook />
                  </div>
                </li>
                <li className=" list-none mr-3">
                  <div className="flex rounded-full h-8 w-8 justify-center items-center bg-red-600 ">
                    <BsYoutube />
                  </div>
                </li>
              </ul>
            </div>
            {/**第二欄UL */}
            <ul>
              <li
                className={`${
                  ulOpen1 ? "open" : ""
                } dropDown border-b-2 mx-10 text-lg  block`}
                onClick={() => setUlOpen1(!ulOpen1)}
              >
                <a className=" flex justify-between h-[70px] items-center ">
                  <span>認識我們</span>
                </a>
                <div className=" subMenu mx-2  bg-slate-700">
                  <div className="innerBox">
                    <a>緣由與願景</a>
                    <a>創辦人的話</a>
                    <a>董事會成員</a>
                    <a>組織職掌</a>
                    <a>捐助章程</a>
                    <a>成果年報</a>
                  </div>
                </div>
              </li>
              <li
                className={`${
                  ulOpen2 ? "open" : ""
                } dropDown border-b-2 text-lg mx-10 block`}
                onClick={() => setUlOpen2(!ulOpen2)}
              >
                <a className=" flex justify-between h-[70px] items-center">
                  <span>最新消息</span>
                </a>
                <div className=" subMenu mx-2  bg-slate-700">
                  <div className="innerBox">
                    <a>焦點訊息</a>
                    <a>活動與公告</a>
                    <a>媒體報導</a>
                    <a>所有訊息</a>
                  </div>
                </div>
              </li>
              <li
                className={`${ulOpen3 ? "open" : ""}
               dropDown border-b-2 text-lg mx-10 grid`}
                onClick={() => setUlOpen3(!ulOpen3)}
              >
                <a className=" flex justify-between h-[70px] items-center">
                  <span>五大主題</span>
                </a>
                <div className=" subMenu mx-2  bg-slate-700">
                  <div className="innerBox">
                    <a>節能減碳</a>
                    <a>生態保育</a>
                    <a>環境保護</a>
                    <a>環境教育</a>
                    <a>循環經濟</a>
                  </div>
                </div>
              </li>
              <li
                className={`${
                  ulOpen4 ? "open" : ""
                } dropDown border-b-2 text-lg mx-10  grid `}
                onClick={() => setUlOpen4(!ulOpen4)}
              >
                <a className=" flex justify-between h-[70px] items-center">
                  <span>聯絡我們</span>
                </a>
              </li>
              <li
                className={`${
                  ulOpen5 ? "open" : ""
                } dropDown border-b-2 text-lg mx-10  grid `}
                onClick={() => setUlOpen5(!ulOpen5)}
              >
                <a className=" flex justify-between h-[70px] items-center">
                  <span>友站連結</span>
                </a>
                <div className=" subMenu mx-2  bg-slate-700">
                  <div className="innerBox">
                    <a>日月光投資控股股份有限公司</a>
                    <a>財團法人日月光文教基金會</a>
                    <a>財團法人張姚宏影社會福利慈善事業基金會</a>
                    <a>日月之光慈善基金會</a>
                  </div>
                </div>
              </li>
            </ul>
            {/**footer */}
            <ul className=" ml-10 pt-14 flex-wrap flex">
              <li className="mr-4">
                <span>電話:</span>
                <span>(02)2691-5669</span>
              </li>
              <li>
                <span>傳真:</span>
                <span>(02)2691-5600</span>
              </li>
              <li className=" w-full">
                <span>信箱:</span>
                <span>eps.service@asehome.com</span>
              </li>
              <li className=" w-full">
                <span>110208 台北市信義區基隆路一段333號3樓306室</span>
              </li>
            </ul>
            <div className=" flex justify-center items-center text-xs mt-4">
              <span>
                Copyright © 財團法人日月光環保永續基金會All Rights
                Reserved.Design by iBest.
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </nav>
    </div>
  );
}
