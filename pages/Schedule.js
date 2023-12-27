import React from "react";
import Footer from "../Components/Footer";
function Schedules() {
  const scrollToDay = (day) => {
    const element = document.getElementById(day);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <div className="flex w-11/12 mx-auto justify-between">
        <h6 className=" hover:text-blue-400 cursor-pointer"  onClick={() => scrollToDay('monday')}>Monday</h6>
        <h6 className=" hover:text-blue-400 cursor-pointer" onClick={() => scrollToDay('tuesday')}>Tuesday</h6>
        <h6 className=" hover:text-blue-400 cursor-pointer" onClick={() => scrollToDay('wednesday')}>Wednesday</h6>
        <h6 className=" hover:text-blue-400 cursor-pointer" onClick={() => scrollToDay('thursday')}>Thursday</h6>
        <h6 className=" hover:text-blue-400 cursor-pointer" onClick={() => scrollToDay('friday')}>Friday</h6>
        <h6 className=" hover:text-blue-400 cursor-pointer" onClick={() => scrollToDay('saturday')}>Saturday</h6>
        <h6 className=" hover:text-blue-400 cursor-pointer" onClick={() => scrollToDay('sunday')}>Sunday</h6>
      </div>
      <div className="flex border-2 w-1/2 mx-auto mt-5 max-lg:flex-col-reverse  max-lg:w-11/12" id="monday">
        <div className="w-1/2 mx-10 max-lg:w-11/12">
          <div className="w-full">
            <h6 className="text-2xl font-semibold underline uppercase w-full">Monday Programs</h6>
          </div>
          <div className="flex justify-between">
            <h6 className="text-2xl font-semibold">Time</h6>
            <h6 className="text-2xl font-semibold">Program</h6>
          </div>
          <div className="flex justify-between">
            <h6>00:00 - 01:00</h6>
            <h6>Devotee worship</h6>
          </div>
          <div className="flex justify-between">
            <h6>07:00 - 08:30</h6>
            <h6>Morning Live</h6>
          </div>
          <div className="flex justify-between">
            <h6>08:30 - 09:00</h6>
            <h6>EBN Kids</h6>
          </div>
          <div className="flex justify-between">
            <h6>09:00 - 09:30</h6>
            <h6>BHH Repear</h6>
          </div>
          <div className="flex justify-between">
            <h6>09:30 - 10:30</h6>
            <h6>EBN Playlist</h6>
          </div>
          <div className="flex justify-between">
            <h6>10:15 - 11:30</h6>
            <h6>Wildlife</h6>
          </div>
          <div className="flex justify-between">
            <h6>11:30 - 12:30</h6>
            <h6>Gatuzi Langu</h6>
          </div>
          <div className="flex justify-between">
            <h6>12:30 - 13:00</h6>
            <h6>John Hagee</h6>
          </div>
          <div className="flex justify-between">
            <h6>13:00 - 13:30</h6>
            <h6>EBN at one</h6>
          </div>
          <div className="flex justify-between">
            <h6>13:30 - 14:30</h6>
            <h6>Movie Repeat</h6>
          </div>
          <div className="flex justify-between">
            <h6>15:00 - 15:30</h6>
            <h6>Jenteen Franklin</h6>
          </div>
          <div className="flex justify-between">
            <h6>15:30 - 16:00</h6>
            <h6>EBN Playlist</h6>
          </div>
          <div className="flex justify-between">
            <h6>16:00 - 16:15</h6>
            <h6>EBN Alasiri</h6>
          </div>
          <div className="flex justify-between">
            <h6>16:15 - 18:00</h6>
            <h6>EBN Kids</h6>
          </div>
          <div className="flex justify-between">
            <h6>18:00 - 19:00</h6>
            <h6>Kiwetu</h6>
          </div>
          <div className="flex justify-between">
            <h6>19:00 - 19:30</h6>
            <h6>EBN Alasiri</h6>
          </div>
          <div className="flex justify-between">
            <h6>19:30 - 20:00</h6>
            <h6>Sifa za kwaya</h6>
          </div>
          <div className="flex justify-between">
            <h6>20:00 - 20:30</h6>
            <h6>BHH</h6>
          </div>
          <div className="flex justify-between">
            <h6>20:30 - 21:00</h6>
            <h6>Pastor Irene</h6>
          </div>
          <div className="flex justify-between">
            <h6>21:00 - 21:30</h6>
            <h6>EBN News</h6>
          </div>
          <div className="flex justify-between">
            <h6>22:00 - 00:00</h6>
            <h6>Devotee worship</h6>
          </div>
        </div>
        <div className="w-1/2 mx-10 items-center my-auto max-lg:w-11/12">
          <img src="GATUZI LANGU.jpg" alt="gatuzi" />
        </div>
      </div>
      <div className="flex border-2 w-1/2 mx-auto mt-5 max-lg:w-11/12 max-lg:flex-col-reverse " id="tuesday">
        <div className="w-1/2 mx-10 max-lg:w-11/12">
          <div className="w-full">
            <h6 className="text-2xl font-semibold underline uppercase w-full">Tuesday Programs</h6>
          </div>
          <div className="flex justify-between">
            <h6 className="text-2xl font-semibold">Time</h6>
            <h6 className="text-2xl font-semibold">Program</h6>
          </div>
          <div className="flex justify-between">
            <h6>00:00 - 01:00</h6>
            <h6>Devotee worship</h6>
          </div>
          <div className="flex justify-between">
            <h6>07:00 - 08:30</h6>
            <h6>Morning Live</h6>
          </div>
          <div className="flex justify-between">
            <h6>08:30 - 09:00</h6>
            <h6>EBN Kids</h6>
          </div>
          <div className="flex justify-between">
            <h6>09:00 - 11:00</h6>
            <h6>Your Faith</h6>
          </div>
          <div className="flex justify-between">
            <h6>11:00 - 12:00</h6>
            <h6>Wildlife</h6>
          </div>
          <div className="flex justify-between">
            <h6>12:00 - 12:30</h6>
            <h6>EBN Playlist</h6>
          </div>
           <div className="flex justify-between">
            <h6>12:30 - 13:00</h6>
            <h6>John Hagee</h6>
          </div>
           <div className="flex justify-between">
            <h6>13:00 - 13:30</h6>
            <h6>EBN at one</h6>
          </div>
          <div className="flex justify-between">
            <h6>13:30 - 14:00</h6>
            <h6>Motivation</h6>
          </div>
          <div className="flex justify-between">
            <h6>14:00 - 16:00</h6>
            <h6>Manukato</h6>
          </div>
           <div className="flex justify-between">
            <h6>16:00 - 16:15</h6>
            <h6>EBN Alasiri</h6>
          </div>
           <div className="flex justify-between">
            <h6>16:15 - 18:00</h6>
            <h6>EBN Kids</h6>
          </div>
          <div className="flex justify-between">
            <h6>19:00 - 19:00</h6>
            <h6>Kikwetu</h6>
          </div>
          <div className="flex justify-between">
            <h6>19:00 - 19:30</h6>
            <h6>Tajira ya EBN</h6>
          </div>
          <div className="flex justify-between">
            <h6>19:30 - 20:00</h6>
            <h6>Sifa za kwaya</h6>
          </div>
           <div className="flex justify-between">
            <h6>20:00 - 20:30</h6>
            <h6>BHH</h6>
          </div>
          <div className="flex justify-between">
            <h6>20:00 - 22:00</h6>
            <h6>Song of Faith</h6>
          </div>
             <div className="flex justify-between">
            <h6>21:00 - 21:30</h6>
            <h6>EBN News</h6>
          </div>
          <div className="flex justify-between">
            <h6>22:00 - 00:00</h6>
            <h6>Devotee worship</h6>
          </div>
        </div>
        <div className="w-1/2 mx-10 items-center my-auto max-lg:w-11/12">
          <img src="YOUR FAITH TODAY.jpg" alt="gatuzi" />
        </div>
      </div>
      <div className="flex border-2 w-1/2 mx-auto mt-5 max-lg:w-11/12 max-lg:flex-col-reverse " id="wednesday">
        <div className="w-1/2 mx-10 max-lg:w-11/12">
          <div className="w-full">
            <h6 className="text-2xl font-semibold underline uppercase w-full">Wednesday Programs</h6>
          </div>
          <div className="flex justify-between">
            <h6 className="text-2xl font-semibold">Time</h6>
            <h6 className="text-2xl font-semibold">Program</h6>
          </div>
          <div className="flex justify-between">
            <h6>00:00 - 01:00</h6>
            <h6>Devotee worship</h6>
          </div>
          <div className="flex justify-between">
            <h6>07:00 - 08:30</h6>
            <h6>Morning Live</h6>
          </div>
          <div className="flex justify-between">
            <h6>08:30 - 09:00</h6>
            <h6>EBN Kids</h6>
          </div>
          <div className="flex justify-between">
            <h6>09:00 - 09:30</h6>
            <h6>BHH</h6>
          </div>
          <div className="flex justify-between">
            <h6>09:30 - 10:15</h6>
            <h6>Worship Music</h6>
          </div>
          <div className="flex justify-between">
            <h6>10:15 - 11:30</h6>
            <h6>EBN Wild</h6>
          </div>
           <div className="flex justify-between">
            <h6>12:30 - 13:00</h6>
            <h6>John Hagee</h6>
          </div>
           <div className="flex justify-between">
            <h6>13:00 - 13:30</h6>
            <h6>EBN at one</h6>
          </div>
          <div className="flex justify-between">
            <h6>13:30 - 14:30</h6>
            <h6>EBN Documentaries</h6>
          </div>
          <div className="flex justify-between">
            <h6>14:30 - 15:00</h6>
            <h6>EBN Playlist</h6>
          </div>
           <div className="flex justify-between">
            <h6>15:00 - 15:30</h6>
            <h6>JENTENZEN</h6>
          </div>
           <div className="flex justify-between">
            <h6>15:30 - 16:00</h6>
            <h6>EBN Playlist</h6>
          </div>
          <div className="flex justify-between">
            <h6>16:00 - 16:15</h6>
            <h6>EBN Alasiri</h6>
          </div>
          <div className="flex justify-between">
            <h6>16:15 - 17:00</h6>
            <h6>EBN Kids</h6>
          </div>
          <div className="flex justify-between">
            <h6>17:00 - 18:00</h6>
            <h6>Request Hour</h6>
          </div>
           <div className="flex justify-between">
            <h6>18:00 - 19:00</h6>
            <h6>Fountain of Hope</h6>
          </div>
          <div className="flex justify-between">
            <h6>19:00 - 19:30</h6>
            <h6>Majira ya EBN</h6>
          </div>
             <div className="flex justify-between">
            <h6>19:30 - 20:00</h6>
            <h6>Musajawaza</h6>
          </div>
          <div className="flex justify-between">
            <h6>20:30 - 21:00</h6>
            <h6>BHH</h6>
          </div>
          <div className="flex justify-between">
            <h6>21:30 - 21:30</h6>
            <h6>EBN at 9</h6>
          </div>
          <div className="flex justify-between">
            <h6>21:30 - 22:00</h6>
            <h6>Song of faith</h6>
          </div>
          
          <div className="flex justify-between">
            <h6>22:00 - 00:00</h6>
            <h6>Devotee worship</h6>
          </div>
        </div>
        <div className="w-1/2 mx-10 items-center my-auto max-lg:w-11/12">
          <img src="MAJIRA.jpg" alt="gatuzi" />
        </div>
      </div>
      <div className="flex border-2 w-1/2 mx-auto mt-5 max-lg:w-11/12 max-lg:flex-col-reverse" id="thursday">
        <div className="w-1/2 mx-10 max-lg:w-11/12">
          <div className="w-full">
            <h6 className="text-2xl font-semibold underline uppercase w-full">Thursday Programs</h6>
          </div>
          <div className="flex justify-between">
            <h6 className="text-2xl font-semibold">Time</h6>
            <h6 className="text-2xl font-semibold">Program</h6>
          </div>
          <div className="flex justify-between">
            <h6>00:00 - 01:00</h6>
            <h6>Devotee worship</h6>
          </div>
          <div className="flex justify-between">
            <h6>07:00 - 08:30</h6>
            <h6>Morning Live</h6>
          </div>
          <div className="flex justify-between">
            <h6>08:30 - 09:00</h6>
            <h6>EBN Kids</h6>
          </div>
          <div className="flex justify-between">
            <h6>09:00 - 10:30</h6>
            <h6>Your Faith</h6>
          </div>
          <div className="flex justify-between">
            <h6>10:30 - 11:30</h6>
            <h6>EBN Wild</h6>
          </div>
          <div className="flex justify-between">
            <h6>11:30 - 12:30</h6>
            <h6>Throwback Playlist</h6>
          </div>
           <div className="flex justify-between">
            <h6>12:30 - 13:00</h6>
            <h6>John Hagee</h6>
          </div>
           <div className="flex justify-between">
            <h6>13:00 - 13:30</h6>
            <h6>EBN at one</h6>
          </div>
          <div className="flex justify-between">
            <h6>13:30 - 14:00</h6>
            <h6>Motivation</h6>
          </div>
          <div className="flex justify-between">
            <h6>14:00 - 16:00</h6>
            <h6>Manukato</h6>
          </div>
           <div className="flex justify-between">
            <h6>16:00 - 16:15</h6>
            <h6>EBN Alasiri</h6>
          </div>
           <div className="flex justify-between">
            <h6>16:15 - 18:00</h6>
            <h6>EBN Kids</h6>
          </div>
          <div className="flex justify-between">
            <h6>18:00 - 19:00</h6>
            <h6>Kiwetu</h6>
          </div>
          <div className="flex justify-between">
            <h6>19:00 - 19:30</h6>
            <h6>Majira ya EBN</h6>
          </div>
          <div className="flex justify-between">
            <h6>19:30 - 20:00</h6>
            <h6>Healing Streams</h6>
          </div>
           <div className="flex justify-between">
            <h6>20:30 - 21:00</h6>
            <h6>BHH</h6>
          </div>
          <div className="flex justify-between">
            <h6>21:00 - 21:30</h6>
            <h6>EBN at 9</h6>
          </div>
             <div className="flex justify-between">
            <h6>21:30 - 22:00</h6>
            <h6>Song of Faith</h6>
          </div>
          <div className="flex justify-between">
            <h6>22:00 - 00:00</h6>
            <h6>Devotee worship</h6>
          </div>
        </div>
        <div className="w-1/2 mx-10 items-center my-auto max-lg:w-11/12">
          <img src="YOUR FAITH TODAY.jpg" alt="gatuzi" />
        </div>
      </div>
      <div className="flex border-2 w-1/2 mx-auto mt-5 max-lg:w-11/12 max-lg:flex-col-reverse" id="friday">
        <div className="w-1/2 mx-10 max-lg:w-11/12">
          <div className="w-full">
            <h6 className="text-2xl font-semibold underline uppercase w-full">Friday Programs</h6>
          </div>
          <div className="flex justify-between">
            <h6 className="text-2xl font-semibold">Time</h6>
            <h6 className="text-2xl font-semibold">Program</h6>
          </div>
          <div className="flex justify-between">
            <h6>00:00 - 01:00</h6>
            <h6>Devotee worship</h6>
          </div>
          <div className="flex justify-between">
            <h6>07:00 - 08:30</h6>
            <h6>Morning Live</h6>
          </div>
          <div className="flex justify-between">
            <h6>08:30 - 09:00</h6>
            <h6>EBN Kids</h6>
          </div>
          <div className="flex justify-between">
            <h6>09:00 - 10:00</h6>
            <h6>Leadership Challenge SH</h6>
          </div>
          <div className="flex justify-between">
            <h6>10:00 - 11:00</h6>
            <h6>EBN Wild</h6>
          </div>
          <div className="flex justify-between">
            <h6>11:00 - 12:00</h6>
            <h6>Daughter of the king</h6>
          </div>
           <div className="flex justify-between">
            <h6>12:30 - 13:00</h6>
            <h6>John Hagee</h6>
          </div>
           <div className="flex justify-between">
            <h6>13:00 - 13:30</h6>
            <h6>EBN at one</h6>
          </div>
          <div className="flex justify-between">
            <h6>13:30 - 14:30</h6>
            <h6>EBN Documentaries</h6>
          </div>
          <div className="flex justify-between">
            <h6>14:30 - 15:00</h6>
            <h6>EBN Playlist</h6>
          </div>
           <div className="flex justify-between">
            <h6>15:00 - 15:30</h6>
            <h6>JENTENZEN</h6>
          </div>
           <div className="flex justify-between">
            <h6>15:30 - 16:00</h6>
            <h6>EBN Playlist</h6>
          </div>
          <div className="flex justify-between">
            <h6>16:00 - 16:15</h6>
            <h6>Majira ya EBN</h6>
          </div>
          <div className="flex justify-between">
            <h6>16:15 - 17:00</h6>
            <h6>EBN Kids</h6>
          </div>
          <div className="flex justify-between">
            <h6>17:00 - 18:00</h6>
            <h6>Request Hour</h6>
          </div>
           <div className="flex justify-between">
            <h6>18:00 - 19:00</h6>
            <h6>Repeat of Your Faith</h6>
          </div>
          <div className="flex justify-between">
            <h6>19:00 - 19:30</h6>
            <h6>EBN Alasiri</h6>
          </div>
             <div className="flex justify-between">
            <h6>19:30 - 20:00</h6>
            <h6>Sifa za kwaya</h6>
          </div>
          <div className="flex justify-between">
            <h6>20:30 - 21:00</h6>
            <h6>BHH</h6>
          </div>
          <div className="flex justify-between">
            <h6>21:30 - 21:30</h6>
            <h6>EBN at 9</h6>
          </div>
          <div className="flex justify-between">
            <h6>21:30 - 22:00</h6>
            <h6>Song of faith</h6>
          </div>
          
          <div className="flex justify-between">
            <h6>22:00 - 00:00</h6>
            <h6>EBN Movies</h6>
          </div>
        </div>
        <div className="w-1/2 mx-10 items-center my-auto max-lg:w-11/12">
          <img src="MAJIRA.jpg" alt="gatuzi" />
        </div>
      </div>
      <div className="flex border-2 w-1/2 mx-auto mt-5 max-lg:w-11/12 max-lg:flex-col-reverse" id="saturday">
        <div className="w-1/2 mx-10 max-lg:w-11/12">
          <div className="w-full">
            <h6 className="text-2xl font-semibold underline uppercase w-full">Saturday Programs</h6>
          </div>
          <div className="flex justify-between">
            <h6 className="text-2xl font-semibold">Time</h6>
            <h6 className="text-2xl font-semibold">Program</h6>
          </div>
          <div className="flex justify-between">
            <h6>00:00 - 01:00</h6>
            <h6>Devotee worship</h6>
          </div>
          <div className="flex justify-between">
            <h6>07:00 - 08:30</h6>
            <h6>EBN Kids</h6>
          </div>
          <div className="flex justify-between">
            <h6>08:30 - 10:15</h6>
            <h6>Theology Show</h6>
          </div>
          <div className="flex justify-between">
            <h6>10:15 - 11:30</h6>
            <h6>Kids Songs</h6>
          </div>
          <div className="flex justify-between">
            <h6>11:30 - 13:00</h6>
            <h6>The Manifest Show</h6>
          </div>
           <div className="flex justify-between">
            <h6>13:00 - 14:00</h6>
            <h6>EBN Playlist</h6>
          </div>
           <div className="flex justify-between">
            <h6>14:00 - 16:00</h6>
            <h6>Tim Tim Viwanjani</h6>
          </div>
          <div className="flex justify-between">
            <h6>16:00 - 17:00</h6>
            <h6>EBN Kids</h6>
          </div>
          <div className="flex justify-between">
            <h6>17:00 - 18:00</h6>
            <h6>EBN Playlist</h6>
          </div>
           <div className="flex justify-between">
            <h6>18:00 - 19:00</h6>
            <h6>Kikwetu</h6>
          </div>
           <div className="flex justify-between">
            <h6>19:00 - 19:30</h6>
            <h6>EBN Wikendi</h6>
          </div>
          <div className="flex justify-between">
            <h6>19:30 - 21:00</h6>
            <h6>Sifa za Kwaya</h6>
          </div>
          <div className="flex justify-between">
            <h6>21:00 - 21:30</h6>
            <h6>Weekend Prime</h6>
          </div>
      
          <div className="flex justify-between">
            <h6>21:30 - 22:00</h6>
            <h6>Song of faith</h6>
          </div>
          
          <div className="flex justify-between">
            <h6>22:00 - 00:00</h6>
            <h6>Movie Night</h6>
          </div>
        </div>
        <div className="w-1/2 mx-10 items-center my-auto max-lg:w-11/12">
          <img src="MANUKATO.jpg" alt="gatuzi" />
        </div>
      </div>
      <div className="flex border-2 w-1/2 mx-auto mt-5 max-lg:w-11/12 max-lg:flex-col-reverse" id="sunday">
        <div className="w-1/2 mx-10 max-lg:w-11/12">
          <div className="w-full">
            <h6 className="text-2xl font-semibold underline uppercase w-full">Sunday Programs</h6>
          </div>
          <div className="flex justify-between">
            <h6 className="text-2xl font-semibold">Time</h6>
            <h6 className="text-2xl font-semibold">Program</h6>
          </div>
          <div className="flex justify-between">
            <h6>00:00 - 01:00</h6>
            <h6>Devotee worship</h6>
          </div>
          <div className="flex justify-between">
            <h6>07:00 - 09:30</h6>
            <h6>1st Service</h6>
          </div>
          <div className="flex justify-between">
            <h6>09:30 - 13:00</h6>
            <h6>2nd Service</h6>
          </div>
          <div className="flex justify-between">
            <h6>13:00 - 15:00</h6>
            <h6>Movie Repeat</h6>
          </div>
          <div className="flex justify-between">
            <h6>15:00 - 15:30</h6>
            <h6>JENTENZEN</h6>
          </div>
          <div className="flex justify-between">
            <h6>15:30 - 16:00</h6>
            <h6>EBN Playlist</h6>
          </div>
           <div className="flex justify-between">
            <h6>16:00 - 17:00</h6>
            <h6>EBN Kids</h6>
          </div>
           <div className="flex justify-between">
            <h6>17:00 - 18:00</h6>
            <h6>The Manifest Show</h6>
          </div>
          <div className="flex justify-between">
            <h6>18:00 - 19:00</h6>
            <h6>Kikwetu</h6>
          </div>
          <div className="flex justify-between">
            <h6>19:00 - 19:00</h6>
            <h6>EBN Wikendi</h6>
          </div>
           <div className="flex justify-between">
            <h6>19:30 - 21:00</h6>
            <h6>Sifa za Kwaya</h6>
          </div>
           <div className="flex justify-between">
            <h6>21:00 - 22:00</h6>
            <h6>Christian World Newst</h6>
          </div>
          <div className="flex justify-between">
            <h6>22:00 - 00:00</h6>
            <h6>Movie Night</h6>
          </div>
        </div>
        <div className="w-1/2 mx-10 items-center my-auto max-lg:w-11/12">
          <img src="MAJIRA.jpg" alt="gatuzi" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Schedules;
