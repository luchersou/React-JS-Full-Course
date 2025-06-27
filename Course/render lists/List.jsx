import PropTypes from 'prop-types';

function List(props){

    const category = props.category
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                                        {item.name}: &nbsp;
                                                        <b>{item.calories}</b></li>);
    return( <>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
            </>);



    /* Keep it without props in List()
    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "coconout", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}];


    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>);
    
    return(<ol>{listItems}</ol>);
    */

    

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); // NUMERIC
    // fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC

    /*
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)

    const listItems = lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id}>
                                                        {lowCalFruits.name}: &nbsp;
                                                        <b>{lowCalFruits.calories}</b></li>);
    */
}
List.propTypes = {
    category: PropTypes.string,
    items: propTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                               name: PropTypes.string,
                                               calories: PropTypesnumber})),
}
List.defaultProps = {
    category: "category",
    items: [],
}
export default List