import "../index.css";
import { AiOutlineDown } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import MainImg1 from "../img/MainImg1.png";
export default function Content() {
  return (
    <>
      <div className=" block  bg-sky-100 items-center justify-center ">
        <div className="justify-center items-center  ">
          <img width={"100%"} className=" object-fill" src={MainImg1} />
        </div>
        {/**第二攔 */}
        <div className="pt-12 items-center px-10">
          <div className="grid grid-cols-span-5">
            <div className=" rounded-full mt-12 sm:hidden md:hidden xl:grid col-start-1 col-span-1">
              <img src="https://www.aseepsfund.org.tw/upload/ad_five_theme_list_s/twL_ad_five_theme_21J08_TQpdqogily.png" />
            </div>
            <div className="  rounded-full  mt-52 sm:hidden md:hidden xl:grid col-start-2 col-span-1">
              <img src="https://www.aseepsfund.org.tw/upload/ad_five_theme_list_s/twL_ad_five_theme_21J08_beyMqtTgx1.png" />
            </div>
            <div className="  rounded-full justify-self-center w-[726px] h-726px">
              <img
                width={"726px"}
                height={"726px"}
                src="https://www.aseepsfund.org.tw/upload/ad_five_theme_list_s/twL_ad_five_theme_21J08_YTFSFQ3aoJ.png"
              />
            </div>
            <div className="  rounded-full mt-52 sm:hidden md:hidden xl:grid col-start-4 col-span-1">
              <img src="https://www.aseepsfund.org.tw/upload/ad_five_theme_list_s/twL_ad_five_theme_21J08_XCWBR16Rm5.png" />
            </div>
            <div className="  rounded-full  mt-12 sm:hidden md:hidden xl:grid col-start-5 col-span-1">
              <img src="https://www.aseepsfund.org.tw/upload/ad_five_theme_list_s/twL_ad_five_theme_21K12_hZXiOJPrj4.png" />
            </div>
          </div>
        </div>
        {/**第三攔 */}
        <div className="xl:px-10 2xl:px-96  py-40 ">
          <div className="flex flex-wrap justify-center">
            <div className="flex justify-between w-full ">
              <h2 className="xl:text-4xl 2xl:text-6xl">最新消息</h2>
              <ul className="news flex bg-white rounded-full px-4 items-center ">
                <li className="mx-8 text-base hover:text-orange-600">
                  焦點訊息|
                </li>
                <li className="hover:text-orange-600">活動與公告|</li>
                <li className="mx-8 text-base hover:text-orange-600">
                  媒體報導|
                </li>
              </ul>
            </div>
            {/**新聞內容 */}
            <div className="flex flex-wrap justify-center">
              <div className="xl:block 2xl:flex  w-full justify-between   items-center relative z-0 py-20 px-20 gap-10 ">
                <div className=" bg-slate-700 my-4  ">
                  <div className=" h-4/5 ">
                    <img
                      className=" object-fill h-full w-full "
                      src="https://www.aseepsfund.org.tw/upload/news_list_pic/twL_news_23J20_P1tvxL8Yg9.png"
                    />
                  </div>
                  <div className=" h-1/5 bg-red-300 pt-1 px-4">
                    <h2 className=" text-xl overflow-hidden text-ellipsis  h-2/3 pt-4 ">
                      3年清除500公噸海洋垃圾 日月光2年達標
                    </h2>
                    <div className="overflow-hidden break-all h-1/3 pt-4">
                      日月光關心海洋垃圾及海洋生態環境，攜手桃園市環保局，推出3年500公噸海岸...
                    </div>
                  </div>
                </div>
                <div className=" bg-slate-700 my-4  ">
                  <div className=" h-4/5 ">
                    <img
                      className=" object-fill h-full w-full  "
                      src="https://www.aseepsfund.org.tw/upload/news_list_pic/twL_news_23D26_IAmD89Hpay.jpg"
                    />
                  </div>
                  <div className=" h-1/5 bg-red-300 pt-1 px-4">
                    <h2 className=" text-xl overflow-wrap text-ellipsis whitespace-pre-wrap  h-1/2 pt-4 ">
                      日月光環保潛水隊南北出隊 淨灘淨海響應世界地球日
                    </h2>
                    <div className="overflow-hidden break-all h-1/2 pt-4">
                      日月光環保潛水隊在世界地球日這一天南北出隊，一共50位成員在假日抽時間前...
                    </div>
                  </div>
                </div>
                <div className=" bg-slate-700 my-4 ">
                  <div className=" h-4/5 ">
                    <img
                      className=" object-fill h-full w-full  "
                      src="https://www.aseepsfund.org.tw/upload/news_list_pic/twL_news_22J17_2AnIeP7Yyb.jpg"
                    />
                  </div>
                  <div className=" h-1/5 bg-red-300 pt-1 px-4">
                    <h2 className=" text-xl overflow-hidden break-all h-1/2 pt-4 ">
                      日月光捐款1166萬 種樹7萬1885棵
                    </h2>
                    <div className="overflow-hidden break-all h-1/2 pt-4">
                      繼與林務局屏東及羅東林管處合作造林之後，日月光環保永續基金會111年(為期...
                    </div>
                  </div>
                </div>
                <div className=" bg-slate-700 my-4">
                  <div className=" h-4/5 ">
                    <img
                      className=" object-fill h-full w-full "
                      src="https://www.aseepsfund.org.tw/upload/news_list_pic/twL_news_23J26_JC8ErJlC2u.jpg"
                    />
                  </div>
                  <div className=" h-1/5 bg-red-300 pt-1 px-4">
                    <h2 className=" text-xl overflow-hidden break-all h-1/2 pt-4 ">
                      海洋保育嘉年華盛大展開 海委會主委：感謝日月光
                    </h2>
                    <div className="overflow-hidden break-all h-1/2 pt-4">
                      海洋委員會海洋保育署與全台各地59個海洋保育團體在歲末年終之際於基隆國立...
                    </div>
                  </div>
                </div>

                <div className=" absolute inset-x-0  rounded-full w-14 h-14 flex justify-center items-center bg-lime-500">
                  <AiOutlineDown className=" rotate-90" />
                </div>
                <div className="absolute inset right-0 rounded-full w-14 h-14 flex justify-center items-center bg-lime-500">
                  <AiOutlineDown className=" -rotate-90" />
                </div>
              </div>
              <div className=" justify-center flex  pt-10">
                <div className=" w-40 text-white text-center  rounded-full bg-orange-500 hover:bg-lime-500 p-4">
                  <a>了解更多</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**第四欄 */}
        <div className="xl:block 2xl:flex   bg-white ">
          {/**左側圖片 */}
          <div className=" flex-shrink-0   relative  ">
            <div className="bg-white">
              <img
                width={"100%"}
                src="https://www.aseepsfund.org.tw/images/home/about_img.png"
              />
            </div>
            <div className=" absolute  -top-1/4 right-1/3">
              <img
                className="w-full h-full"
                src="https://www.aseepsfund.org.tw/images/home/butterfly.png"
              />
            </div>
          </div>
          <div className=" flex-1 flex flex-wrap  ">
            <div className="w-full mt-40 mx-40">
              緣起與宗旨
              <div>
                <h2 className=" text-xl my-4 text-lime-500">
                  「低碳使命、循環再生、社會共融、價值共創」之四大永續發展指標
                </h2>
                <div>
                  財團法人日月光環保永續基金會(以下稱本會)，是由日月光投資控股股份有限公司之子公司-日月光半導體製造股份有限公司捐贈成立，是一個非營利目的之社會團體，秉持日月光投控「低碳使命、循環再生、社會共融、價值共創」之四大永續發展指標，推動環保公益事業。
                  <br />
                  <br />
                  本會以促進環境保護與經濟發展之平衡，提升環境永續、降低環境衝擊為目標，致力於環境保護、節能減碳、循環經濟及自然生態等環保永續相關公益活動，期許能為台灣這片溫馨土地、河川海洋、偏野山林，孕育出永續發展的環境，落實企業社會責任，並帶動社會正面影響力。
                </div>
              </div>
            </div>
            <div className=" items-end justify-center flex  pt-10 w-full">
              <div className=" w-40 text-white text-center  rounded-full bg-orange-500 hover:bg-lime-500 p-4">
                <a>了解更多</a>
              </div>
            </div>
          </div>
        </div>
        {/**第五欄 */}
        <div className=" pt-24  w-full relative ">
          <h2 className="  text-6xl text-center w-full">
            我們持續發展與執行全方位綠色概念
          </h2>
          <div className="flex pt-60 justify-center  ">
            <div className=" w-full justify-center items-center flex pt-96  pb-96 ">
              <div className=" absolute left-0 bottom-0 z-0">
                <img src="https://www.aseepsfund.org.tw/images/home/plan_bg.png" />
              </div>
              <ul className="flex gap-20  justify-between  max-w-[1440px] z-10">
                <li className="grid justify-center items-center ">
                  <div className="flex  justify-center items-center rounded-full w-52 h-52  bg-white">
                    <div className=" justify-center items-center mb-8">
                      <div className=" flex justify-center items-center">
                        <img
                          className=""
                          src="https://www.aseepsfund.org.tw/upload/ad_list/twL_ad_21J13_Mx8mQJC8Te.png"
                        />
                      </div>
                      <div>
                        <p className=" text-center">智慧微電網</p>
                      </div>
                    </div>
                  </div>
                  <div className=" justify-self-center w-[1px] h-40 bg-white"></div>
                </li>

                <li className="grid justify-center items-center ">
                  <div className="flex  justify-center items-center rounded-full w-52 h-52  bg-white">
                    <div className=" justify-center items-center mb-8">
                      <div className=" flex justify-center items-center">
                        <img
                          className=""
                          src="https://www.aseepsfund.org.tw/upload/ad_list_s/twL_ad_21J13_wcq0ZJah6J.png"
                        />
                      </div>
                      <div>
                        <p className=" text-center">校園LED</p>
                      </div>
                    </div>
                  </div>
                  <div className=" justify-self-center w-[1px] h-40 bg-white"></div>
                </li>

                <li className="grid justify-center items-center  ">
                  <div className="flex  justify-center items-center rounded-full w-52 h-52  bg-white">
                    <div className=" justify-center items-center mb-8">
                      <div className=" flex justify-center items-center">
                        <img
                          className=""
                          src="https://www.aseepsfund.org.tw/upload/ad_list_s/twL_ad_21J26_fCln0sMcpq.png"
                        />
                      </div>
                      <div>
                        <p className=" text-center">環保論文獎助計畫</p>
                      </div>
                    </div>
                  </div>
                  <div className=" justify-self-center w-[1px] h-40 bg-white"></div>
                </li>

                <li className="grid justify-center items-center  ">
                  <div className="flex  justify-center items-center rounded-full w-52 h-52  bg-white">
                    <div className=" justify-center items-center mb-8">
                      <div className=" flex justify-center items-center">
                        <img
                          className=""
                          src="https://www.aseepsfund.org.tw/upload/ad_list_s/twL_ad_21J13_qg8gCYReKs.png"
                        />
                      </div>
                      <div>
                        <p className=" text-center">環願山林造林計畫</p>
                      </div>
                    </div>
                  </div>
                  <div className=" justify-self-center w-[1px] h-40 bg-white"></div>
                </li>

                <li className="grid justify-center items-center ">
                  <div className="flex  justify-center items-center rounded-full w-52 h-52  bg-white">
                    <div className=" justify-center items-center mb-8">
                      <div className=" flex justify-center items-center">
                        <img
                          className=""
                          src="https://www.aseepsfund.org.tw/upload/ad_list_s/twL_ad_21J13_acfOttBwt8.png"
                        />
                      </div>
                      <div>
                        <p className=" text-center">海域守護計畫</p>
                      </div>
                    </div>
                  </div>
                  <div className=" justify-self-center w-[1px] h-40 bg-white"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/**footer */}
        <div className="footer  bg-slate-700 flex flex-wrap  justify-center pb-4">
          {/**left */}
          <div className="flex  pt-10">
            <ul className="flex gap-5">
              <li className="footerText flex-auto">
                <div className="block">
                  <a>
                    <span className="relative">認識我們</span>
                  </a>
                  <div className="space-y-5 mt-4">
                    <a className="block">緣由與願景 </a>
                    <a className="block">創辦人的話 </a>
                    <a className="block">董事會成員 </a>
                    <a className="block">組織職掌 </a>
                    <a className="block">捐助章程 </a>
                    <a className="block">成果年報 </a>
                  </div>
                </div>
              </li>
              <li className=" flex-auto footerText">
                <div className="block">
                  <a>
                    <span className="relative">最新消息</span>
                  </a>
                  <div className="space-y-4 mt-4">
                    <a className="block">焦點訊息 </a>
                    <a className="block">活動與公告 </a>
                    <a className="block">緣媒體報導 </a>
                    <a className="block">所有訊息 </a>
                  </div>
                </div>
              </li>
              <li className=" flex-auto footerText">
                <div className="block">
                  <a>
                    <span className="relative">五大主題</span>
                  </a>
                  <div className="space-y-5 mt-4">
                    <a className="block">節能減碳 </a>
                    <a className="block">生態保育 </a>
                    <a className="block">環境保護 </a>
                    <a className="block">環境教育 </a>
                    <a className="block">循環經濟 </a>
                  </div>
                </div>
              </li>
              <li className=" flex-auto footerText">
                <div className="block">
                  <a>
                    <span className="relative">友站連結</span>
                  </a>
                  <div className="space-y-5 mt-4">
                    <a className="block">日月光投資控股股份有限公司 </a>
                    <a className="block">財團法人日月光文教基金會 </a>
                    <a className="block">日月光社會企業 </a>
                    <a className="block">
                      財團法人張姚宏影社會福利慈善事業基金會
                    </a>
                    <a className="block">日月之光慈善基金會 </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/**right */}
          <div className=" ml-10 pt-10">
            <div>
              <img src="https://www.aseepsfund.org.tw/images/ft_logo.svg" />
            </div>
            <ul>
              <li>
                <span>電話:(02) 2691-5699</span>
                <li>
                  <span>傳真:(02) 2691-5600</span>
                </li>
              </li>
              <li>
                <span>信箱:eps.service@asehome.com</span>
              </li>
              <li>
                <span>110208 台北市信義區基隆路一段333號3樓306室</span>
              </li>
            </ul>
            <br />
            <div className=" flex">
              <div className=" text-white">跟隨我們</div>
              <ul className="flex pl-16">
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
                <li className=" list-none ">
                  <div className="flex rounded-full h-8 w-8 justify-center items-center bg-green-700 ">
                    <AiOutlineMail />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/**註記 */}
        <div className=" bg-lime-700 flex justify-center items-center py-4">
          Copyright © 財團法人日月光環保永續基金會All Rights Reserved.Design by
          iBest.
        </div>
      </div>
    </>
  );
}
