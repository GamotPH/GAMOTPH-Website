import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Home from './components/Home';
import People from './components/People';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { client, urlFor } from "./client";
import defaultBg from "./assets/gamotPH.jpg";
import ResearchTeam from './components/ResearchTeam';
import PersonOverview from './components/PersonOverview';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Articles from './components/Articles';
import ArticleDetail from './components/ArticleDetail';

function App() {
  const location = useLocation(); 
  const [heroData, setHeroData] = useState({
    bgImage: defaultBg, 
    title: 'GamotPH Project: General Access Multilingual Online Tool for Public Health Drug-Reporting:',
    description: 'Enhancing adverse drug reporting through AI-driven multilingual analysis for better public health monitoring.', 
  });
  const [bgImages, setBgImages] = useState([]);
  const [bgIndex, setBgIndex] = useState(0);


  useEffect(() => {
    const path = location.pathname;
    
  
    // Match for article detail page
    const articleMatch = path.match(/^\/project\/[^/]+\/articles\/([^/]+)$/);
    const projectMatch = path.match(/^\/project\/([^/]+)/);
    const publicationMatch = path.match(/^\/publications\/([^/]+)$/);
    const personMatch = path.match(/^\/people\/([^/]+)$/);
    const gamotphArticleMatch = path.match(/^\/articles\/([^/]+)$/);


if (articleMatch) {
      // Handle article hero
      const articleSlug = decodeURIComponent(articleMatch[1]);
      const query = `*[_type == "article" && slug.current == $slug][0]{
        title,
        "bgImage": image.asset->url,
        "description": excerpt
      }`;
  
      client.fetch(query, { slug: articleSlug })
        .then((data) => {
          if (data) {
            setHeroData({
              bgImage: data.bgImage || defaultBg,
              title: data.title || "Article",
              description: data.description || "",
              theme: "dark" 
            });
          }
        })
        .catch(console.error);
    } 
    else if (gamotphArticleMatch) {
  const articleSlug = decodeURIComponent(gamotphArticleMatch[1]);
  const query = `*[_type == "article" && slug.current == $slug][0]{
    title,
    "bgImage": image.asset->url,
    "description": excerpt
  }`;

  client.fetch(query, { slug: articleSlug })
    .then((data) => {
      if (data) {
        setHeroData({
          bgImage: data.bgImage || defaultBg,
          title: data.title || "Article",
          description: data.description || "",
          theme: "dark"
        });
      }
    })
    .catch(console.error);
}
    else if (personMatch) {
      const personSlug = decodeURIComponent(personMatch[1]);
      const query = `*[_type == "researchTeamLab" && slug.current == $slug][0]{
        name,
        role,
        image,
      }`;
    
      client
        .fetch(query, { slug: personSlug })
        .then((data) => {
          if (data) {
            setHeroData({
              bgImage: defaultBg,
              person: {
                name: data.name,
                role: data.role,
                image: urlFor(data.image).width(300).height(300).fit("crop").url() 
              },
              theme: "dark" 
            });                   
          }
        })
        .catch(console.error);
    }    
    else if (projectMatch) {
      // Handle project hero
      const projectSlug = projectMatch[1];
      const query = `*[_type == "featuredProject" && slug.current == $slug][0]{
        title, 
        description, 
        "bgImage": image.asset->url
      }`;
  
      client.fetch(query, { slug: projectSlug })
        .then((data) => {
          if (data) {
            setHeroData({
              bgImage: data.bgImage || defaultBg,
              title: data.title || "GamotPH Project: General Access Multilingual Online Tool for Public Health Drug-Reporting:",
              description: data.description || "Enhancing adverse drug reporting through AI-driven multilingual analysis for better public health monitoring.",
              theme: "dark" 
            });
          }
        })
        .catch(console.error);
  
    }
    else if (location.pathname === "/") {
      const query = `*[_type == "backgroundImage"]{
        title,
        "url": image.asset->url,
        themeClassification
      }`;
    
      client.fetch(query).then((data) => {
        if (data && data.length > 0) {
          // const images = data.map(img => img.url);
          setBgImages(data); // Store the list
          setHeroData({
            bgImage: data[0].url,
            title: "GamotPH Project: General Access Multilingual Online Tool for Public Health Drug-Reporting:",
            description: "Enhancing adverse drug reporting through AI-driven multilingual analysis for better public health monitoring.",
            theme: data[0].themeClassification || "dark"
          });
        }
      }).catch(console.error);
    }
    
    else if (location.pathname === "/about") {
  setHeroData({
    bgImage: defaultBg,
    title: "GamotPH Project: General Access Multilingual Online Tool for Public Health Drug-Reporting:",
    description: "Enhancing adverse drug reporting through AI-driven multilingual analysis for better public health monitoring.",
    theme: "dark"
  });
}
else if (location.pathname === "/people") {
  setHeroData({
    bgImage: defaultBg,
    title: "Meet the Team Behind the GAMOTPH Project",
    description: "Researchers and Innovators advancing inclusive healthcare.",
    theme: "dark"
  });
}
else if (location.pathname === "/ContactUs") {
  setHeroData({
    bgImage: defaultBg,
    title: "GamotPH Project: General Access Multilingual Online Tool for Public Health Drug-Reporting:",
    description: "Get in touch with us to learn more about the project.",
    theme: "dark"
  });
}
else {
  setHeroData({
    bgImage: defaultBg,
    title: "GamotPH Project: General Access Multilingual Online Tool for Public Health Drug-Reporting:",
    description: "Enhancing adverse drug reporting through AI-driven multilingual analysis for better public health monitoring.",
    theme: "dark"
  });
}

  }, [location]);
  
  useEffect(() => {
    if (location.pathname === "/" && bgImages.length > 1) {
      const interval = setInterval(() => {
        setBgIndex(prev => {
          const next = (prev + 1) % bgImages.length;
          setHeroData(prevData => ({
            ...prevData,
            bgImage: bgImages[next].url,
            theme: bgImages[next].themeClassification || "dark"
          }));
          return next;
        });
      }, 5000); // every 5 seconds
  
      return () => clearInterval(interval);
    }
  }, [bgImages, location.pathname]);
  

  return (
    <>
      <NavBar theme={heroData.theme}/>
      <Hero bgImage={heroData.bgImage} title={heroData.title} description={heroData.description} person={heroData.person}
      fullHeight={location.pathname === '/'}
      theme={heroData.theme}
      isArticle={location.pathname.startsWith("/articles/")}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About fullHeight={false}/>} />
        <Route path='/people' element={<People />} />
        <Route path="/people/:slug" element={<PersonOverview />} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/project/:id/researchTeam" element={<ResearchTeam />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="*" element={<h1 className="text-center p-6">404 - Page Not Found</h1>} />

      </Routes>
      <Footer />
    </>
  );
}
export default App;
