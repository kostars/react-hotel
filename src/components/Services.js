import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit van number plate but he did not have spoons"
            },

            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit van number plate but he did not have spoons"
            },

            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Lorem ipsum dolor sit van number plate but he did not have spoons"
            },

            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "Lorem ipsum dolor sit van number plate but he did not have spoons"
            },
        ]
    }
    render() {
        return (
            <section className="services">
             <Title title='services'></Title>   
             <div className="services-center">
                 {this.state.services.map((item, index) => {
return <article key={index} className="service">
    <span>{item.icon}</span>
                 <h6>{item.title}</h6>
                 <p>{item.info}</p>
</article>
                 })}
             </div>
            </section>
        )
    }
}

export default Services
