import "./App.css";
import header_bg from "./assets/header videos/header-5.mp4";
import side_img from "./assets/header_img-2.jpg";
import side_img_1 from "./assets/side-img1.jpg";
import Hero from "./components/Hero";
import Slider from "./components/slider/Slider";
import Navbar from "./components/Navbar/Navbar";

const navbarLinks = [
  { url: "#", title: "Home" },
  { url: "#", title: "About" },
  { url: "#", title: "Services" },
  { url: "#", title: "Portfolio" },
  { url: "#", title: "Contact" }
];
function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={header_bg} />
      <Slider
        imageSrc={side_img}
        title={"Be an explorer!"}
        subtitle={"Our platform offers wide variety of development services"}
      />

      <Slider
        imageSrc={side_img_1}
        title={"Satisfy for a lifetime!"}
        subtitle={"Your dream business platform is only a few clicks away"}
        flipped={true}
      />
    </div>
  );
}

export default App;
