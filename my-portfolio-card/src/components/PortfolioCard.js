import Image from 'next/image';
import '../styles/PortfolioCard.css';

const PortfolioCard = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-card max-w-lg mx-auto">
        <div className="flex flex-col items-center">
          <div className="md:shrink-0 mb-4 flex justify-center">
            <Image
              className="profile-image"
              src="/P.jpg"
              alt="Profile Image"
              width={192}
              height={192}
            />
          </div>
          <h2 className="text-2xl font-bold text-black mb-2">Don Santos</h2>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-4">
            Full Stack Web Developer
          </div>

          {/* Description Section */}
          <div className="info-box">
            <p className="text-gray-500">
              Full Stack Web Developer eager to gain experience and continuously learn. I have the ability to contribute to team goals and consistently meet deadlines. My excellent interpersonal skills and positive attitude make me an asset to any team.
            </p>
          </div>

          {/* Contact Me Section */}
          <div className="info-box mt-4">
            <h3 className="text-lg font-semibold">Contact Me:</h3>
            <ul className="mt-2 text-gray-500">
              <li>Email: <a href="mailto:don16santos@gmail.com" className="text-indigo-600 hover:underline">don16santos@gmail.com</a></li>
              <li>Phone: <span className="text-gray-600">+27 671234876</span></li>
            </ul>
          </div>

          {/* Download CV Section */}
          <div className="info-box mt-4">
            <a
              href="/public/doncv.pdf"
              className="inline-block px-4 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition"
              download
            >
              Download CV
            </a>
          </div>

          {/* Social Media Links */}
<div className="social-media mt-4 flex justify-center">
  <a href="https://www.linkedin.com/in/don-santos-28b963227/" target="_blank" rel="noopener noreferrer" className="social-link">
    LinkedIn
  </a>

  <a href="" target="_blank" rel="noopener noreferrer" className="social-link">
    My Official Website
  </a>

  <a href="https://www.instagram.com/don_santos22/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link">
    Instagram
  </a>

  <a href="https://twitter.com/donsantos22" target="_blank" rel="noopener noreferrer" className="social-link">
    Twitter
  </a>

  <a href="https://github.com/SantanDon" target="_blank" rel="noopener noreferrer" className="social-link">
    GitHub
  </a>
</div>
<div className="social-media mt-4 flex justify-center">
  <a href="https://github.com/SantanDon/gittask" target="_blank" rel="noopener noreferrer" className="social-link">
    Github Instagram site
  </a>

  <a href="https://github.com/SantanDon/task-13" target="_blank" rel="noopener noreferrer" className="social-link">
    Minesweeper game
  </a>

  <a href="https://vercel-portfolio-yntp.vercel.app/" target="_blank" rel="noopener noreferrer" className="social-link">
  vercel portfolio 2
  </a>

  
 
</div>


        {/* Fun Facts Section */}
<div className="info-box mt-4">
  <h3 className="text-lg font-semibold">Fun Facts About Me:</h3>
  <ul className="mt-2 list-disc list-inside text-gray-500 fun-facts-list">
    <li>Good verbal and written communication skills.</li>
    <li>Good presentation skills.</li>
    <li>Team player who works effectively with a wide range of people.</li>
    <li>Adaptable to different cultures and environments.</li>
    <li>Able to work under pressure and manage several tasks simultaneously.</li>
    <li>Willing to learn and adapt to new systems.</li>
    <li>Strong background in HTML, CSS, and web design.</li>
    <li>Proficient in JavaScript, adding interactivity to web projects.</li>
    <li>Experienced in jQuery for simplified HTML document traversal and animation.</li>
    <li>Skilled in working with APIs for seamless data exchange.</li>
  </ul>
</div>

        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
