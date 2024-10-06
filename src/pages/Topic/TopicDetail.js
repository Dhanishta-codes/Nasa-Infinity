import React from 'react';
import { useParams } from 'react-router-dom';
import './TopicDetail.css'; // Link to the CSS for styling

const TopicDetail = () => {
  const { topicId } = useParams();

  // Example data for each topic (you can replace this with actual data)
  const topicsData = {
    phytoPulse: {
      title: "PhytoPulse",
      description: "Learn about phytoplankton and their role in the ocean ecosystem.",
      details: "Phytoplankton are microscopic marine algae that form the basis of the ocean food web. They are vital for producing oxygen and absorbing carbon dioxide.",
    },
    aeroTrack: {
      title: "AeroTrack",
      description: "Understand aerosols and their impact on the climate.",
      details: "Aerosols are tiny particles or droplets suspended in the atmosphere. They can influence climate and air quality by reflecting sunlight and serving as cloud condensation nuclei.",
    },
    oceanVitals: {
      title: "OceanVitals",
      description: "Explore the health of the oceans and marine life.",
      details: "Ocean health indicators include temperature, pH, and salinity. Monitoring these factors helps us understand changes in marine ecosystems.",
    },
    ociVision: {
      title: "OCI Vision",
      description: "Discover NASA's OCI Instrument and its applications.",
      details: "The OCI instrument measures ocean color to assess phytoplankton productivity, water quality, and more.",
    },
    harp2Insight: {
      title: "HARP-2 Insight",
      description: "Insights from HARP 2 and its capabilities.",
      details: "HARP 2 is a satellite instrument designed to measure atmospheric aerosols and their effects on climate.",
    },
    polarMetric: {
      title: "PolarMetric",
      description: "Learn about the Polarimeter and its significance.",
      details: "Polarimeters measure the polarization of light reflected by the Earth's surface, providing data on aerosols and surface properties.",
    },
  };

  // Get the topic data based on the topicId from the URL
  const topic = topicsData[topicId] || { title: "Not Found", description: "Topic not found.", details: "" };

  return (
    <div className="topic-detail-container">
      <h1>{topic.title}</h1>
      <h2>{topic.description}</h2>
      <p>{topic.details}</p>

      {topicId === 'phytoPulse' && (
        <div className="photo-gallery">
          <div className="photo-item">
            <img src="/images/DINOPHYSIS_SPECIES.jpg" alt="Dinophysis Species" />
            <div className="photo-description">Phytoplankton in the Atlantic Ocean</div>
          </div>
          <div className="photo-item">
            <img src="/images/CHAETOCEROUS_DEBILIS.jpg" alt="Chaetocerous Debilis" />
            <div className="photo-description">Phytoplankton bloom near Antarctica</div>
          </div>
          <div className="photo-item">
            <img src="/images/ALEXANDRIUM_TAMARANSEE.jpg" alt="Alexandrium Tamaransee" />
            <div className="photo-description">Diverse species of phytoplankton</div>
          </div>
          <div className="photo-item">
            <img src="/images/EMILLIANA_HUEXEI.jpg" alt="Emilliana Huexei" />
            <div className="photo-description">Phytoplankton seen from space</div>
          </div>
          <div className="photo-item">
            <img src="/images/MYRINECTA_RUBA.jpg" alt="Myrinecta Ruba" />
            <div className="photo-description">Phytoplankton and their role in the ecosystem</div>
          </div>
          <div className="photo-item">
            <img src="/images/PHAEOCYSTSIS_SPECIES.jpg" alt="Phaeocysts Species" />
            <div className="photo-description">Microscopic view of phytoplankton</div>
          </div>
        </div>
      )}

      {topicId === 'oceanVitals' && (
        <div className="ocean-vitals-content" style={{ backgroundImage: "url('/ocean vital bg.jpg')" }}>
          {/* Add your background image source here */}
        
          <div className="ocean-vitals-gallery">
            <h4>Images Related to Ocean Vitals</h4>
            <div className="photo-gallery">
              <div className="photo-item">
                <img src="/images/ocean_temp.jpg" alt="Ocean Temperature" />
                <div className="photo-description">Ocean Temperature Measurement</div>
              </div>
              <div className="photo-item">
                <img src="/images/ocean_salinity.jpg" alt="Ocean Salinity" />
                <div className="photo-description">Salinity Levels in Ocean Water</div>
              </div>
              <div className="photo-item">
                <img src="/images/ocean_health.jpg" alt="Ocean Health" />
                <div className="photo-description">Indicators of Ocean Health</div>
              </div>
              <div className="photo-item">
                <img src="/images/ocean_ph.jpg" alt="Ocean pH Levels" />
                <div className="photo-description">Monitoring Ocean pH Levels</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {topicId === 'ociVision' && (
        <div className="oci-content">
          <div className="main-video">
            <h3>OCI Vision Overview</h3>
            <video controls>
              <source src="/OCI Vision .mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="oci-video-section">
            <div className="oci-instrument-video">
              <video controls width="300">
                <source src="/OCI Vision 2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="oci-instrument-image">
              <img src="/OCI IMA1.png" alt="OCI Instrument" width="300" />
            </div>
          </div>

          <div className="oci-details">
            <p>
              The OCI instrument is used to measure ocean color and assess phytoplankton productivity,
              water quality, and various parameters crucial for understanding ocean ecosystems. It helps
              in monitoring the health of the oceans and provides critical data to study the impact of
              environmental changes on marine life.


              the colors of the ocean, from the ultraviolet to near infrared, and obtain more accurate measurements 
              of biological and chemical ocean properties, such as phytoplankton biomass and the composition of 
              phytoplankton communities. These changes in the ocean’s color help identify harmful algal blooms.
            </p>
          </div>
          <div classname="oci details">
            <img src="/OCI ima2.jpg" width="400"/> 
            <img src="/oci ima4.jpg" width="400" />
          </div>
        </div>
      )}

      {topicId === 'harp2Insight' && (
        <div className="harp2-content">
          <h3>HARP-2 Insight Overview</h3>
          <video controls>
            <source src="/harp-23D.mp4" type="video/mp4" /> {/* Replace with your actual video path */}
            Your browser does not support the video tag.
          </video>
          <div className="harp2-details">
            <p>
              HARP-2 is a powerful instrument designed to measure atmospheric aerosols and their effects on climate.
              This 3D model video provides an insight into its design and functionality.
            </p>
          </div>
          <div>
             <img src="/oci ima3.jpg" width="400"/ >
             <img src="/harpmodel.jpg" width="400"/>
            <p>
              HARP2 (Hyper-Angular Rainbow Polarimeter #2) is a wide angle imaging polarimeter designed to measure 
              aerosol particles and clouds, as well as properties of land and water surfaces. The amount and type 
              of particles in suspension in the atmosphere are relevant to applications pertaining to health effects, 
              cloud life cycle and precipitation, climate, etc. HARP2 will combine data from multiple along track 
              viewing angles (up to 60), four spectral bands in the visible and near infrared ranges, and three angles 
              of linear polarization to measure the microphysical properties of the atmospheric particles including their size distribution, 
              amount, refractive indices and particle shape.
              </p>
          
          </div>
        </div>
      )}

      <button className="back-button" onClick={() => window.history.back()}>
        Back to Learning Paths
      </button>
    </div>
  );
};

export default TopicDetail;
