import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gray-100">
      <div aria-hidden="true" className="floating code1">{"</>"}</div>
      <div aria-hidden="true" className="floating code2">{"{}"}</div>
      <div aria-hidden="true" className="floating star1">⚛️</div>
      <div aria-hidden="true" className="floating js-logo">JS</div>
      <div aria-hidden="true" className="floating ts-logo">TS</div>

      <div className="relative z-10">
        <Header />
        <ProfileCard />
        <Footer />
      </div>
    </div>
  );
}

export default App;