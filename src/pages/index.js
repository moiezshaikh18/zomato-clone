import React, { useState } from "react";
import Footer from "../componets/common/footer";
import Header from "../componets/common/header";
import TabOption from "../componets/common/tabOption";
import Delivery from "../componets/delivery";
import DiningOut from "../componets/diningOut";
import Nightlife from "../componets/nightlife";
const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  const getCorrectScreen = (tab) => {
    switch (tab) {
      case "Delivery": {
        return <Delivery />;
      }

      case "Dining Out": {
        return <DiningOut />;
      }
      case "Nightlife": {
        return <Nightlife />;
      }

      default: {
        return <Delivery />;
      }
    }
  };

  return (
    <div>
      <Header />
      <TabOption activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

export default HomePage;
