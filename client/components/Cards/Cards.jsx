"use client";
import data from "./data";
import Card from "../Card/Card";


const Cards = () => {
    let items = 0



    

    return (
        <div className="relative -top-60 grid grid-rows-6 gap-5">
            
            {
                
                data.map(platillo => {
                    items++
                return (<Card

                    side={items}
                    key={platillo.id}
                    id={platillo.id}
                    name={platillo.name}
                    img={platillo.img}
                    description={platillo.description}
                    cost={platillo.cost}
                    steps={platillo.steps} />)
                 } )
            }
        </div>
    )
};


export default Cards;