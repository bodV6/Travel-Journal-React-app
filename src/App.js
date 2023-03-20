import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import dataArray from "./data";
function App() {
  const cardData = dataArray.map((data) => (
    <Card
      key={data.key}
      // mapImage={data.imageUrl}
      // location={data.location}
      // mapLink={data.googleMapsUrl}
      // title={data.title}
      // startDate={data.startDate}
      // endDate={data.endDate}
      // description={data.description}
      {...data}
    />
  ));

  return (
    <div className="App">
      <Header />
      {cardData}
      <Footer />
    </div>
  );
}

export default App;
