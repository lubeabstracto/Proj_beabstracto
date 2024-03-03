import React, { useState, useEffect } from "react";
import axios from "axios";

const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Certifique-se de que a variável de ambiente está configurada corretamente.

const NearbyRestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNearbyRestaurants = async () => {
      try {
        const latitude = 38.7223; // Latitude de Lisboa
        const longitude = -9.1393; // Longitude de Lisboa
        const radius = 100000; // Raio de busca em metros

        let allResults = [];
        let nextPageToken = null;

        do {
          const response = await axios.get(`/api/places?latitude=${latitude}&longitude=${longitude}&radius=${radius}${nextPageToken ? `&pagetoken=${nextPageToken}` : ''}`);
          allResults = allResults.concat(response.data);
          nextPageToken = response.data.next_page_token;
          // Aguarda um pouco antes de fazer a próxima chamada para evitar ultrapassar as cotas da API
          if (nextPageToken) {
            await new Promise(resolve => setTimeout(resolve, 2000));
          }
        } while (nextPageToken);

        setRestaurants(allResults);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchNearbyRestaurants();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white sm:py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Restaurantes</h1>
            <p className="mt-2 text-sm text-gray-700">
              Uma lista de todos os restaurantes incluindo o nome, localização, número, e-mail e website.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Adicionar Restaurante
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Nome
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Localização
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Número
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      E-mail
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Website
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Editar</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {restaurants.map((restaurant) => (
                    <tr key={restaurant.place_id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {restaurant.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{restaurant.vicinity}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{restaurant.formatted_phone_number}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{restaurant.email}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{restaurant.website}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Editar<span className="sr-only">, {restaurant.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearbyRestaurantsPage;
