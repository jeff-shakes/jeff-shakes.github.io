import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import SolarImage from  '../public/assets/autocorr.png'
import WildFireImage from '../public/assets/wildfires.png'
import POSImage from '../public/assets/POS.png'


const Projects = () => {

  const projectsData = [
    {
      id: 1,
      title: "Solar Generation Prediction",
      image: SolarImage,
      keywords: "Time Series, Recurrent Neural Networks, Univariate Modeling, Multivariate Modeling",
      description: "Using the solar generation output of a specific solar farm site, along with the corresponding weather data, can a model predict the solar generation output of that specific site within a MAE score of less than 10% of max output? Furthermore, can the same model architecture, optimized for a specific site, be used to predict the generation of another site or even an entire campus (up to 27 sites).",
      githubURL:"https://github.com/jeff-shakes/Solar-Generation-Prediction"
  },
  {
    id: 2,
    title: "Predicting Wildfire Size",
    image: WildFireImage,
    keywords: "Web/API Scraping, Feature Engineering, PCA, Dummied Variable, Ensemble Modeling, Advanced Machine Learning Models",
    description: "Using only the reported initial location of a wildfire, the historical and present meteorological data and land cover zoning data were used to predict the total acres burned within 2 acres.",
    githubURL: "https://github.com/jeff-shakes/Wildfire_Size_Prediction"
  },
  {
    id: 3,
    title: "Subreddit Classification Through Natural Language Processing",
    image: POSImage,
    keywords: "Parts-of-Speech Analysis, NLP, Sentiment Analysis, Verctorizing (Tfidf and Cvec), Lemmatizing (Wordnet), Ensemble Modeling",
    description: "Using data from the subreddits r/MMA and r/UFC through PushShift API collection, can a model correctly classify which subreddit a post belongs to? Techniques include: - Parts-of-Speech Analysis - Sentiment Analysis - Ensemble Modeling",
    githubURL: "https://github.com/jeff-shakes/Subreddit-Classification-Through-NLP"
  },
  ];

  return (
    <div className='flex flex-col items-center z-0'>
      <h3 className="flex font-semibold text-xl md:text-3xl mt-14 align-middle pb-2">
        Projects
      </h3>
      <div className=' grid grid-row-3 sm:grid-cols-3 space-x-[1rem] space-y-[1rem] max-h-fit px-5'>
        {
          projectsData.map(({id, title, image, keywords, description, githubURL,}) => {
            return (
              <article key={ id } className='bg-transparent p-6 rounded-lg border-[1px] border-transparent hover:bg-blue-500/20 hover:border-blue-500 hover:cursor-default'>
          <div className='rounded-md overflow-hidden'>
            <Image src={ image } alt={title} />
          </div>
          <h3 className=' p-2 font-bold text-xs sm:text-base'>{ title }</h3>
          <h5 className="pb-[10px] text-xs md:text-sm xl:text-lg">{description}</h5>
          <div className="flex space-x-[1rem] mb-[1rem]">
            <SocialIcon url={ githubURL }></SocialIcon>
          </div>
        </article>
            )
          })
        }
        
      </div>
    </div>
  )
}
export default Projects