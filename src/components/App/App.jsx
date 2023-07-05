import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import MyProjects from "../MyProjects/MyProjects";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import TechStack from "../TechStack/TechStack";

function App() {
  return (
    <>
      <Header />

      <Hero />
      <TechStack />
      <MyProjects />
      <Contacts />

      <ScrollToTopButton />

      <Footer />
    </>
  );
}

export default App;
