import React from "react";
import Bottle from "./Catalog/Bottle";
import Cap from "./Catalog/Cap";
import Other from "./Catalog/Other";

const Catalog = () => {
  return (
    <>
      <div className="space-y-6 py-6">
        <Bottle />
        <Cap />
        <Other />
      </div>
    </>
  );
};

export default Catalog;
