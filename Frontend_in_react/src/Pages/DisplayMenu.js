import React from "react";
import Item from "./Item";
import '../Css/box.css'

const DisplayMenu = ({title, menu, addItem}) => {
    return (
        <section className="features-boxed">
            <div className="container margin-top:0px">
                <div className="intro">
                    <h2 className="text-center">{title}</h2>
                    <p></p>
                </div>
                <div className="row justify-content-center features">
                    {menu.map((foodItem) => (
                        <Item key={foodItem.id} item={foodItem} addItem={addItem}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DisplayMenu;
