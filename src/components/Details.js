import React from 'react';

const Details = () => {
  return (
    <div className="detail-section bg-gray-900 text-white p-4 rounded-md">
      <div className="detail-container flex flex-wrap justify-between items-start gap-4">
        <img src="img/logo11.png" alt="Logo" className="logo w-36 h-20 mx-2 sm:mx-0" />
        <div className="detail-text">
          <p className="text-gray-400 mb-6 hover:text-[#c0a484]">
            Hari Group successfully ventured into Real Estate by creating a series of residential and commercial spaces
            at strategic areas in (Area) locations in Himatnagar under the aegis of Dream spaces since a decade.
          </p>
          <p className="text-gray-400 hover:text-[#c0a484]">
            Our mission and goal is to take part in issues that are of worry to people, families, and communities
            through an inflexible obligation to make a remarkable living, work, and leisure environments with all
            modern amenities and infrastructure
          </p>
        </div>
        <h2 className="text-[#c0a484] font-bold text-2xl my-4 font-serif uppercase underline">
          Our Group Projects
        </h2>
        <div className="box-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around gap-6">
          <ProjectBox name="ONE WORLD" location="Gayatrimandri road, Himatnagar" />
          <ProjectBox name="VAISHNAVI GARDEN VIEW" location="Vaishnodevi Mandir, S.G. Highway Ahmedabad" />
          <ProjectBox name="AL-HAYAT" location="RTO Circle, Himatnagar" />
          <ProjectBox name="SUNRISE PLAZA" location="Gayatrimandri road, Himatnagar" />
          <ProjectBox name="BAITUL HAMD COMPLEX" location="Panpur Patiya, Himatnagar" />
          <ProjectBox name="AL-HAYAT" location="RTO Circle, Himatnagar" />

        </div>
      </div>

      <div className="benefit-container mt-8">
    <h2 className="text-[#c0a484] text-xl font-bold mt-16 uppercase">Benefits of Being at Suryoday Fortune</h2>
    <div className="h-px bg-gray-300 my-4"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="benefit-1 mb-4 pl-4">
            <h3 className="text-gray-200 text-xl font-bold">Credibility & Power to Your Business & Investment</h3>
            <ul className="list-disc pl-4 text-gray-500 mt-2">
                <li className="hover:text-[#f2dfc8] hover:cursor-pointer">ATTRACTS THE RIGHT CLIENTELE</li>
                <li className="hover:text-[#f2dfc8] hover:cursor-pointer">HIGH RENTALS FOR INVESTORS</li>
                <li className="hover:text-[#f2dfc8] hover:cursor-pointer">INCREASES REAL ESTATE VALUE</li>
                <li className="hover:text-[#f2dfc8] hover:cursor-pointer">INCREASES COMPETITIVE DIFFERENTIATION</li>
            </ul>
        </div>
        <div className="benefit-1 mb-4 pl-4">
            <h3 className="text-gray-200 text-xl font-bold">More Opportunities for Social Interactions</h3>
            <ul className="list-disc pl-4 text-gray-500 mt-2">
                <li className="hover:text-[#f2dfc8] hover:cursor-pointer">ACROSS THE HIGHWAY TOUCH PROMENADE THE CULTURE & ACTIVITY HUB</li>
                <li className="hover:text-[#f2dfc8] hover:cursor-pointer">AN ARRAY OF RESTAURANTS & HOTELS IN THE VICINITY</li>
                <li className="hover:text-[#f2dfc8] hover:cursor-pointer">CLOSE TO THE MOVIES & THEATER</li>
                <li className="hover:text-[#f2dfc8] hover:cursor-pointer">PLENTY OF OPTIONS FOR SHOPPING & ENTERTAINMENT</li>
            </ul>
        </div>
        <div className="h-px bg-gray-300 my-4 -mt-5 col-span-1 md:col-span-2"></div>
        <div className="benefit-1 mb-4 pl-4 -mt-7">
            <h3 className="text-gray-200 text-xl font-bold">TRANSPORTATION IS A VITAL LINK FOR YOUR WORKFORCE</h3>
            <ul className="list-disc pl-4 text-gray-500 mt-2">
                <li className="hover:text-[#f2dfc8] hover:cursor-pointer">RAILWAY STATION (10 MIN)</li>
                <li className="hover:text-[#f2dfc8] hover:cursor-pointer">BUS STATION (10 MIN)</li>
            </ul>
        </div>
        <div className="benefit-1 mb-4 pl-4 -mt-6">
            <h3 className="text-gray-200 text-xl font-bold">HEALTHCARE FACILITIES IN CLOSE PROXIMITY</h3>
            <ul className="list-disc pl-4 text-gray-500 mt-2">
                <li className="hover:text-[#f2dfc8] hover:cursor-pointer">HOSPITALS (10 MIN)</li>
                <li className="hover:text-[#f2dfc8] hover:cursor-pointer">HEALTH CLINICS (10 MIN)</li>
            </ul>
        </div>
    </div>
</div>

    </div>
  );
};

const ProjectBox = ({ name, location }) => {
  const [showLocation, setShowLocation] = React.useState(false);

  return (
    <div
      className="box bg-black/20 border border-white p-4 rounded-md hover:bg-black/0 hover:cursor-grab"
      onMouseEnter={() => setShowLocation(true)}
      onMouseLeave={() => setShowLocation(false)}
    >
      <h3 className="text-white text-xl font-bold hover:text-[#c0a484]">{name}</h3>
      <span
        className={` hover:text-[#c0a484] hover:cursor-pointer text-gray-500 contents absolute top-full left-1/2 transform -translate-x-1/2 p-2 font-medium ${
          showLocation ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {location}
      </span>
    </div>
  );
};

export default Details;
