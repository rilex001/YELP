import React, {useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import AddReview from '../components/AddReview'
import Reviews from '../components/Reviews'
import StarRating from '../components/StarRating'
import { RestaurantsContext } from '../context/RestaurantsContext'

const RestourantdetailPage = () => {

    const { id } = useParams();
    const { selectedRestaurant, setSelectedRestaurant } = useContext(
      RestaurantsContext
    );
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await RestaurantFinder.get(`/${id}`);
            console.log(response);
    
            setSelectedRestaurant(response.data.data);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchData();
      }, []);

    return (
        <div>
            (
              <>
                <div className="mt-3">
                  {/* <Reviews reviews={selectedRestaurant.reviews} /> */}
                </div>
                <AddReview />
              </>
            )
        </div>
    )
}

export default RestourantdetailPage

