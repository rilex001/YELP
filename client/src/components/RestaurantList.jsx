import React, { useEffect, useContext } from 'react'
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext"
import {useHistory} from "react-router-dom"
const RestaurantList = (props) => {

    const { restaurants, setRestaurants } = useContext(RestaurantsContext);
    let history = useHistory()
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await RestaurantFinder.get("/");
            console.log(response.data.data);
            setRestaurants(response.data.data.restaurant);
          } catch (err) {}
        };
    
        fetchData();
      }, []);

      const handleDelete = async (id) => {
        try {
           const response = await  RestaurantFinder.delete(`/${id}`)
           setRestaurants(restaurants.filter(restaurant => {
               return restaurant.id !== id
            }))
        } catch (err) {
            console.log(err)
        }
      }

      const handleUpdate = (id) => {
          history.push(`/restaurants/${id}/update`)
      }

    return (
        <div className='list-group'>
            <table className='table table-hover table-dark'>
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Restourant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {restaurants && restaurants.map(restaurant => {
                        return (
                            <tr key={restaurant.id}>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{"$".repeat(restaurant.price_range)}</td>
                                <td>reviews</td>
                                <td>
                                    <button onClick={() => handleUpdate(restaurant.id)} className="btn btn-warning">Update</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(restaurant.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            )    
                    })}

                    {/* <tr>
                        <td>McDonalds</td>
                        <td>New York</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td>
                            <button className="btn btn-warning">Update</button>
                        </td>
                        <td>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>

                    <tr>
                        <td>McDonalds</td>
                        <td>New York</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td>
                            <button className="btn btn-warning">Update</button>
                        </td>
                        <td>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>

                    <tr>
                        <td>McDonalds</td>
                        <td>New York</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td>
                            <button className="btn btn-warning">Update</button>
                        </td>
                        <td>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr> */}

                </tbody>
            </table>
        </div>
    )
}

export default RestaurantList
