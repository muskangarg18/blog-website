import React from 'react';
import Latestevents from './Latestevents';
function Newsfeed() {
  return (
    <>
          <div className="font-serif text-base text-gray-700 bg-gray-100">
      <div className="text-center">
        <div className="p-4">
          <span className="italic">
            Weather forecast for the next 24 hours: Plenty of Sunshine
          </span>
          <br />
          <span>
            Wind: 7km/h SSE; Ther: 21°C; Hum: 82%
          </span>
        </div>
        <header className="font-serif font-bold text-5xl uppercase">
          Newpost India
        </header>
      </div>
    

      <div className="text-center uppercase border-b-2 border-t-2 py-2 border-gray-700">
        XYZ, India ,Daily Dose Of News
      </div>

      <div className="flex justify-center m-8 mb-0">
        <div className="w-1/4">
          <div className="text-center">
            <span className="text-4xl">When darkness overspreads my eyes</span>
            <p>
              <span className="text-xl">by JOHANN WOLFGANG VON GOETHE</span>
            </p>
          </div>
          <p className="px-8 py-4">
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray gleams steal into the inner
            sanctuary, I throw myself down among the tall grass by the trickling
            stream; and, as I lie close to the earth, a thousand unknown plants
            are noticed by me: when I hear the buzz of the little world among the
            stalks, 
          </p>
        </div>

        <div className="w-1/4">
          <div className="text-center">
            <span className="text-4xl">Give people courage</span>
            <p>
              <span className="text-xl">The crowd seemed to grow</span>
            </p>
          </div>
          <p className="px-8 py-4">
            The sunset faded to twilight before anything further happened. The
            crowd far away on the left, towards Woking, seemed to grow, and I heard
            now a faint murmur from it. The little knot of people towards Chobham
            dispersed. There was scarcely an intimation of movement from the pit.
          </p>
          <figure className="text-center">
            <img
              className="mx-auto"
              src="http://i.giphy.com/PW7MoTD2d9pJK.gif"
              alt=""
            />
            <figcaption className="text-sm text-gray-500">
              An image caption
            </figcaption>
          </figure>
        </div>

        <div className="w-1/4">
          <div className="text-center">
            <span className="text-4xl">Overcome your fears</span>
            <p>
              <span className="text-xl">We became silent</span>
            </p>
          </div>
          <p className="px-8 py-4">
            The sky was no longer blue. North-eastward it was inky black, and out
            of the blackness shone brightly and steadily the pale white stars. Over
            the rock-cut doorway of the inner chamber was hung an orris-root, and
            over that a laurel-leaf, a small branch of olive, and a little bunch of
            leaves from the white-horned thorn, and besides these, four garlands
            made by his wife, of various flowers, together with a broken knife,
            several pieces of ribbon, and some other small matters.
          </p>
        </div>
      </div>
    </div>
    <Latestevents/>

    </>
  );
}

export default Newsfeed;
