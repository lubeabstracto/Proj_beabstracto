import React from "react";

const RestaurantCard = ({ nome, localizacao, numero, email, website }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">{nome}</h2>
      <p className="text-gray-700 mb-2">Localização: {localizacao}</p>
      <p className="text-gray-700 mb-2">Número: {numero}</p>
      <p className="text-gray-700 mb-2">Email: {email}</p>
      <p className="text-gray-700 mb-2">Website: {website}</p>
    </div>
  );
};

export default RestaurantCard;
