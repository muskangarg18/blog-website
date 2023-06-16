import React from 'react';
import news from '../assets/news.jpg'
import food from "../assets/food.jpg"
import fashion from "../assets/fashion.jpg"
import wildlife from "../assets/wildlife.jpg"
import homedecor from "../assets/homedecor.jpg"
import Newsfeed from '../components/Newsfeed';
function Home() {
  return (
    <>
    
    <article className=" text-center">
        <div className=" text-gray-700 bg-gray-100 py-3">
        <h1  className="text-xl font-bold">Blogs</h1>
        </div>
      
      <section id="blogs" className="grid grid-flow-col auto-cols-[minmax(330px,1fr)] overflow-x-auto h-[250px]  text-gray-700 bg-gray-100">
        <article className="hover:cursor-pointer  hover:bg-gray-300">
          <h2 className="text-lg font-bold">News Blogs</h2>
          <img className="ml-[15px] w-[300px] h-[150px]" src={news} alt="news" />
          <p className="font-medium">Read latest news around the globe</p>
        </article>
        <article className="hover:cursor-pointer  hover:bg-gray-300">
          <h2 className="text-lg font-bold">Food Blogs</h2>
          <img className="ml-[15px] w-[300px] h-[150px]" src={food} alt="news" />
          <p className="font-medium">Read all about latest recipies and cusines</p>
        </article>
        <article className="hover:cursor-pointer  hover:bg-gray-300">
          <h2 className="text-lg font-bold">Fashion Blog</h2>
          <img className="ml-[15px] w-[300px] h-[150px]" src={fashion} alt="news" />
          <p className="font-medium">Read about new fashion trends and icons</p>
        </article>
        <article className="hover:cursor-pointer  hover:bg-gray-300">
          <h2 className="text-lg font-bold">Wildlife Blog</h2>
          <img className="ml-[15px] w-[300px] h-[150px]" src={wildlife} alt="news" />
          <p className="font-medium">Read about the adventurous world of wildlife</p>
        </article>
        <article className="hover:cursor-pointer hover:bg-gray-300">
          <h2 className="text-lg font-bold">Home Decor Blog</h2>
          <img className="ml-[15px] w-[300px] h-[150px] justify-center" src={homedecor} alt="news" />
          <p className="font-medium">Read all about how to decorate you home in few steps</p>
        </article>
        {/* Add more articles for other segments */}
      </section>
    </article>
    <Newsfeed/>
    </>
   
  );
}

export default Home;
