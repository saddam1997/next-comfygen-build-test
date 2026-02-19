import React, { useState } from "react";
import Image from "next/image";


export default function Tech() {
  const [tech, setTech] = useState(0);
  
  const sections = [
    {
      title: "For Students ",
      description:
        "Students need an educational app on their devices and wearables so that they can manage their study schedules better. Students and learners benefit the most from applications that help them learn in a better way. Here are the top features that are seen in educational apps that are mostly used by students.",
      listItems: [
        "Remote classroom environments that are accessible",
        "Report cards and grades in digital form",
        "Customized timetable creation and management",
        "Study alarms and lesson reminders",
        "Access to digital assignments and assessments",
        "Short lesson revision material",
        "Personalized learning paths"
      ],
      imageSrc: "https://www.comfygen.com/img/education-for-students-img.svg",
    },
    {
      title: "For Teachers ",
      description:
        "Teachers use educational apps for better classroom management and tracking the progress of their students. Teachers also use educational applications for keeping all their teaching material and schedules in one place. Here are the features that teachers find the most useful in educational apps.",
      listItems: [
        "Student progress tracking",
        "Interactive and shareable whiteboard",
        "Lesson planner and tracker",
        "Schedule manager and timetables",
        "Portals to connect with parents",
        "Classroom management tools for classes",
        "Digital Attendance"
      ],
      imageSrc: "https://www.comfygen.com/img/education-for-teachers.svg",
    },
    {
      title: "For Administrative Staff ",
      description:
        "The administration department in a school or college plays a huge role in keeping the workflow on track and managing the day-to-day operations of an institution. The repetitive tasks of administration can be easily managed with an educational app specifically designed for administration management. Here are the best features included in educational apps for administrative staff.",
      listItems: [
        "Detailed student profiles",
        "Enrollment management for the admission process",
        "Automated digital attendance for teachers and students ",
        "Class scheduling and school calendar management",
        "Assessment tools and digital gradebook management ",
        "Digital messaging systems for parents and teachers",
        "Internal announcements for parents, teachers, and students."
      ],
      imageSrc: "https://www.comfygen.com/img/education-for-administrative-staff.svg",
    },
  ];

  return (
    <section className="lg:py-16 py-10 bg-[#F5F5F9]">
      <div className="space-y-10 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="flex flex-col justify-center text-center">
          <h2 className="py-4 text-[#212121] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
          The Most Desirable And Important Features Of Educational Apps
          </h2>
          <p className="text-base text-slate-800">
          Comfygen is a reliable and reputed educational app development company that can create advanced educational apps for your school or college. We understand that the features of an educational app need to be updated from time to time. According to the trends in the educational apps sector, the features that are in demand for smart educational apps are listed below. These features are beneficial for schools, colleges, students, teachers, and administrative staff working in institutions.
          </p>
        </div>
        <div className="flex items-center space-x-4 md:justify-center justify-start overflow-x-auto whitespace-nowrap">
          {sections.map((section, index) => (
            <span
              key={index}
              onClick={() => setTech(index)}
              className={
                tech === index
                  ? "bg-[#5556D1] border border-[#5556D1] text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent  text-[#5556D1] border border-[#5556D1] px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >
              {section.title}
            </span>
          ))}
        </div>
        <div className="grid md:grid-cols-1 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative pt-6 capitalize mt-5 bg-white">
          {sections.map((section, index) => (
            tech === index && (
              <div key={index} className="flex flex-col lg:flex-row py-10 px-4 lg:px-10 rounded-[42px] items-center">
                {index % 2 === 0 ? (
                  <div className="w-full space-y-[5px] text-left">
                    <h3 className="text-[24px] lg:text-4xl font-bold text-[#0E1F51]">{section.title}</h3>
                    <p className="py-6 text-base text-black">{section.description}</p>
                    <ul className="list-disc px-6">
                      {section.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div className="flex justify-center w-full md:justify-center">
                  <Image
                    className="rounded-md"
                    title={section.title}
                    alt={section.title}
                    src={section.imageSrc}
                    height={400}
                    width={400}

                    unoptimized={true}
                  />
                </div>
                {index % 2 !== 0 ? (
                  <div className="w-full space-y-[5px] text-left">
                    <h3 className="text-[24px] lg:text-4xl font-bold text-[#0E1F51]">{section.title}</h3>
                    <p className="py-6 text-base text-black">{section.description}</p>
                    <ul className="list-disc px-6">
                      {section.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
