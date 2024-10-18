import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import HomePage from "./screens/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/FooterNew/footerHero"
import ContactPage from './components/ContactUsPage/ContactPage';
import Blogs from "./screens/Blogs";
import AboutPage from "./screens/AboutPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Services from "./screens/Services";
import BlogInnerPage from "./screens/BlogInnerPage";
import LoginScreen from "./AdminScreens/LoginScreen";
import BlogsScreen from "./AdminScreens/BlogsScreens/BlogsScreen";
import AdminScreen from "./AdminScreens/AdminScreen";
import LocationScreen from './screens/LocationScreens/LocationScreen';
import LocationPages from "./components/LocationPages_/LocationPages"
import EventsPage from "./screens/EventsPage";
import EventsInnerPage from "./screens/EventsInnerPage";

const App = () => {

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-events" element={<EventsPage />} />
        <Route path="/events-inner" element={<EventsInnerPage />} />
        <Route path="/bloginner" element={<BlogInnerPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/admin/blogs" element={<BlogsScreen />} />
        <Route path='/location/:slug' element={<LocationPages />} />
        <Route path='/admin/location-pages' element={<LocationScreen />} />
        <Route path="/login" element={<LoginScreen />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App; 