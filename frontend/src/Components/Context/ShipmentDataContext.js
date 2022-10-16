import { createContext, useContext, useState, useEffect } from 'react';

const ShipmentDataContext = createContext();

export const ShipmentDataProvider = ({ children }) => {
  // * STATE
  const [shipmentDatas, setShipmentDatas] = useState({
    shipment: {
      message: '',
      image: '',
    },
    style: {
      bg: '',
    },
  });

  // * EFFECT
  useEffect(() => {
    console.log(shipmentDatas);
  }, [shipmentDatas]);

  // * VALUES
  const values = {
    shipmentDatas,
    setShipmentDatas,
  };

  return (
    <ShipmentDataContext.Provider value={values}>
      {children}
    </ShipmentDataContext.Provider>
  );
};

export const useShipment = () => useContext(ShipmentDataContext);
