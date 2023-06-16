import React from 'react'
import Jobs from './Jobs'

function Latestevents() {
  return (
    <>
    <section className=" bg-cover bg-center  bg-gray-100">
    <div className="text-center bg-opacity-30 bg-black">
        <div className="p-4">
          <span className="font-extrabold text-2xl">
            Events
          </span>
          <br />
        </div>
        </div>
      <div className="flex">
        <div className="w-1/2  bg-gray-100 p-10">
          <div className="text-white bg-gray-800 p-8 transition duration-500 hover:bg-pink-500">
            <h1 className="text-4xl font-bold mb-4">Events and Shows</h1>
            <p className="text-base">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam tenetur dolorem consequatur ea, quia inventore enim corrupti alias voluptate repudiandae a, voluptatum at quo neque animi aperiam dolorum tempore eligendi.
            </p>
          </div>
        </div>
        <div className="w-1/2 relative  bg-gray-100">
          <ul className="absolute top-1/2 transform -translate-y-1/2 p-10">
            <li className="bg-white mb-6">
              <div className="time bg-gray-900 text-white p-4 w-1/3 float-left text-center transition duration-500 hover:bg-pink-500">
                <h2 className="text-5xl font-bold mb-2">15<br /><span>June</span></h2>
              </div>
              <div className="details p-4 w-2/3 float-left border-4  border-black hover:bg-pink-500 hover:text-white">
                <h3 className="text-xl font-bold mb-2">Where is the event happening?</h3>
                <p className="text-base">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe hic optio aut odio? A, non debitis quas iure laborum odio accusamus fugit repellendus aperiam error atque at voluptas sed quia.
                </p>
                <a href="#" className="inline-block mt-4 px-4 py-2 border border-gray-900 text-lg transition duration-500 hover:bg-blue-200 hover:text-black">View Details</a>
              </div>
              <div className="clearfix"></div>
            </li>
            {/* Repeat the above code for other list items */}
          </ul>
          
        </div>
        
      </div>
      <div className="flex">
        <div className="w-1/2 bg-gray-100 p-10">
          <div className="text-white bg-gray-800 p-8 transition duration-500 hover:bg-pink-500">
            <h1 className="text-4xl font-bold mb-4">Events and Shows</h1>
            <p className="text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quaerat hic, corrupti vel reprehenderit nihil voluptatibus soluta voluptatum exercitationem amet dolor magnam velit perferendis totam, eos culpa doloribus, quis tenetur.
            </p>
          </div>
        </div>
        <div className="w-1/2 relative  bg-gray-100">
          <ul className="absolute top-1/2 transform -translate-y-1/2 p-10">
            <li className="bg-white mb-6">
              <div className="time bg-gray-900 text-white p-4 w-1/3 float-left text-center transition duration-500 hover:bg-pink-500">
                <h2 className="text-5xl font-bold mb-2">19<br /><span>June</span></h2>
              </div>
              <div className="details p-4 w-2/3 float-left border-4  border-black hover:bg-pink-500 hover:text-white">
                <h3 className="text-xl font-bold mb-2">Where is the event happening?</h3>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente, voluptate nobis quaerat dicta officiis labore debitis ullam? Provident quos commodi minima molestiae doloribus in assumenda, alias ducimus quis quasi?
                </p>
                <a href="#" className="inline-block mt-4 px-4 py-2 border border-gray-900 text-lg transition duration-500 hover:bg-blue-200 hover:text-black">View Details</a>
              </div>
              <div className="clearfix"></div>
            </li>
            {/* Repeat the above code for other list items */}
          </ul>
        </div>
        
      </div>
    </section>
    <Jobs/>
    </>
  )
}

export default Latestevents