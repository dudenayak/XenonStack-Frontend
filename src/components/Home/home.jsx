import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <h3>
        XenonStack is committed to finding technology solutions and delivering
        marvelous services to solve the challenges faced by our clients, people,
        and communities around the world are at the very heart of the purpose we
        all share. Our continuous experimentations reveal that the
        innovation-driven enterprises are retaining and attracting young
        talents, leading the innovations in industry and business growth.
      </h3>
      <h2> • Growth for People</h2>
      <h3>
        The growth of people who are working with XenonStack is one of the core
        purposes of XenonStack.
      </h3>
      <h2> • Growth of Community</h2>
      <h3>
        We embrace the mindset of customer obsession for the growth of the
        community.
      </h3>
      <h2> • Growth of Region</h2>
      <h3>
        Our exceptional delivery of best-in-class experience helps in the Growth
        of the Region.
      </h3>
      <Footer />
    </div>
  );
};

export default Home;
