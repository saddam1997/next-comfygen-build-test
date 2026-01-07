import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/taxi.json";
import styles from "./styles.module.css";
import Tech from "./components/tech";
import SocialTab from "./components/SocialTab";
import ConnectWithExpertButton from "../../components/old/components/button/ConnectWithExpertButton";
// import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
// import "react-big-calendar/lib/css/react-big-calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
export default function Ecommerce() {
 

  const [show, setShow] = useState(false);
  const handleCalender = () => {
    setShow(!show);
  };

  

  // const localizer = momentLocalizer(moment);

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

 
  // Function to handle selecting a time slot
  const handleSelectSlot = (slotInfo) => {
    const title = window.prompt('New Event name');
    if (title) {
      const newEvent = {
        start: slotInfo.start,
        end: slotInfo.end,
        title,
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
  };

  // Function to handle selecting an event
  // const handleSelectEvent = (event) => {
  //   setSelectedEvent(event);
  //   // alert(`Event: ${event.title}\nStarts: ${event.start.toLocaleString()}\nEnds: ${event.end.toLocaleString()}`);
  // };
 

  return (
    <>
     <Head>
        <title>
          Thank You | Comfygen
        </title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="thank-you" />
      </Head>
      <div className="container mx-auto p-6">
        <div>
   
        </div>
        <section className="text-center mb-12 bg-center bg-no-repeat bg-cover rounded-md bg-gradient-to-t from-blue-500 to-purple-600 text-white py-4">
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-base text-white">
            Thank you for choosing us. Just like the right company, one of our
            right people will get back to you ASAP!
          </p>
          <p className="mt-2 font-semibold text-xl">Comfygen</p>
        </section>

        {/* <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-12 flex justify-between place-items-center bg-center bg-no-repeat ">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Introduction Call With Comfygen
            </h2>
            <p className="text-lg mb-4">30 min</p>
            <h3 className="text-xl font-semibold mb-4">Agenda:</h3>
            <ul className="list-disc list-inside text-lg">
              <li>Introduction</li>
              <li>Requirement understanding</li>
              <li>Similar work showcase</li>
              <li>Next actions</li>
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-1  gap-6 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Getting Back To You
                </h3>
                <p className="text-lg">
                  One of our representatives will call you or send you an email
                  within 12 hours.
                </p>
              </div>
              {!show && (
                <>
                  <div className="bg-blue-100 p-6 rounded-lg shadow-md bg-cover bg-gradient-to-t from-blue-500 to-purple-600 text-white">
                    <h3 className="text-2xl font-semibold mb-4">
                      Schedule a Call
                    </h3>
                    <div className="border border-gray-300 p-4 rounded-md">
                      <p className="text-lg">
                        Select a date and time for your call
                      </p>
                      <button
                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        onClick={handleCalender}
                      >
                        Schedule Now
                      </button>
                    </div>
                  </div>
                </>
              )}
              {show && (
                <>
                  <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    selectable
                    onSelectSlot={handleSelectSlot} 
                    onSelectEvent={handleSelectEvent} 
                  />
                </>
              )}
            </div>
          </div>
        </section> */}

        {/* <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">02</h4>
              <h3 className="text-2xl font-semibold mb-4">Sign an NDA</h3>
              <p className="text-lg">
                We know the value of privacy & confidentiality of your project
                information that you are going to share with us. To maintain
                utter transparency, we will sign a Non-Disclosure Agreement
                (NDA) with you. Your information is safe with us.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">03</h4>
              <h3 className="text-2xl font-semibold mb-4">
                Requirement Discussion
              </h3>
              <p className="text-lg">
                After signing an NDA, we will share your information with our
                team of Business Analysts who will study and analyze it to make
                further documents.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">04</h4>
              <h3 className="text-2xl font-semibold mb-4">
                Estimation Approval
              </h3>
              <p className="text-lg">
                After getting a brief of the project scope, a rough cost
                estimation will be sent to you. We will need your approval on
                the same to move ahead.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">05</h4>
              <h3 className="text-2xl font-semibold mb-4">Report Analysis</h3>
              <p className="text-lg">
                After getting approval on the rough estimation, we will ask for
                all the project details which will help us to make a
                full-fledged Project Feature List and cost bifurcation.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">06</h4>
              <h3 className="text-2xl font-semibold mb-4">Final Proposal</h3>
              <p className="text-lg">
                Once we get your approval on our Analysis report, we are all set
                to sign the final contract document which will include all the
                details of the Project scope, Cost Bifurcation, Milestones, and
                more.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">07</h4>
              <h3 className="text-2xl font-semibold mb-4">
                Development Kick-off
              </h3>
              <p className="text-lg">
                After getting a signed contract from your side, we will share
                the details of our development team to kick off with the
                development process.
              </p>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}
// This gets called on every request
