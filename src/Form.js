import React from "react";
import { useState } from "react";
import './Form.css';

function Form() {
    const [name, setName] = useState("")
    const [cheese, setCheese] = useState(false)
    const [peperoni, setPeperoni] = useState(false)
    const [sausage, setSausage] = useState(false)
    const [mushroom, setMushroom] = useState(false)
    return (
        <div className="pizza-order-form">
            <div className="pizza-order-form-content">
                <h1> PIZZA ORDER FORM </h1>
                <form className="Form">
                    {/*  */}
                    <label className="pizza-order-form-input">
                        Name:
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </label>
                    {/*  */}
                    <label className="pizza-order-form-checkbox">
                        <input
                            type="checkbox"
                            checked={cheese}
                            onChange={() => setCheese(!cheese)}
                        />
                        Cheese
                    </label>
                    {/*  */}
                    <label className="pizza-order-form-checkbox">
                        <input
                            type="checkbox"
                            checked={peperoni}
                            onChange={() => setPeperoni(!peperoni)}
                        />
                        Peperoni
                    </label>
                    {/*  */}
                    <label className="pizza-order-form-checkbox">
                        <input
                            type="checkbox"
                            checked={sausage}
                            onChange={() => setSausage(!sausage)}
                        />
                        Sausage
                    </label>
                    {/*  */}
                    <label className="pizza-order-form-checkbox">
                        <input
                            type="checkbox"
                            checked={mushroom}
                            onChange={() => setMushroom(!mushroom)}
                        />
                        Mushroom
                    </label>
                    {/*  */}
                    <input className="Submit" type="submit" value="Submit" />

                </form>
            </div>
            <div className="pizza-order-form-content">
                <h2> {name} </h2>
                <h3>
                    {cheese && <div>Cheese</div>}
                    {peperoni && <div>Pepperoni</div>}
                    {sausage && <div>Sausage</div>}
                    {mushroom && <div>Mushroom</div>}
                </h3>
            </div>
        </div>
    );
}

export default Form
