import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import RestourantList from '../components/RestaurantList'

const Home = () => {
    return (
        <div>
            <Header />
            <AddRestaurant />
            <RestourantList />
        </div>
    )
}

export default Home

