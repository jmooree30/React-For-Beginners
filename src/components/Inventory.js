import React from "react";
import AddFishForm from "./AddFishForm"

class Inventory extends React.Component {

  constructor(){
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key];
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    }
    this.props.updateFish(key, updatedFish);
  }

renderInventory(key) {
  const fish = this.props.fishes[key];
  return(
    <div className="fish-edit">
    <input type="text" name="name" placeholder = "fish name" value={fish.name}
    onChange={(e) => this.handleChange(e, key)} />
    <input type="text" name="price" placeholder = "fish price" value={fish.price} 
    onChange={(e) => this.handleChange(e, key)} />
    <select type="text" name="status" placeholder = "fish status" value={fish.status}
    onChange={(e) => this.handleChange(e, key)} >
      <option value="available">Fresh!</option>
      <option value="unavailable">Sold out</option>
    </select>
    <textarea type="text" name="desc" placeholder = "fish desc" value={fish.desc}
    onChange={(e) => this.handleChange(e, key)} >
    </textarea>
    <input type="text" name="image" placeholder = "fish image" value={fish.image}
    onChange={(e) => this.handleChange(e, key)} />
    <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
    </div>
    )
}

  render() {
    return (
    <div> 
    <h2>Inventory</h2>
    {Object.keys(this.props.fishes).map(this.renderInventory)}
    <AddFishForm addFish = {this.props.addFish} />
    <button onClick={this.props.loadSamples}>click me</button>
    </div>
    )
  }
}

Inventory.propTypes = {
  fishes: React.PropTypes.object.isRequired,
  updateFish: React.PropTypes.func.isRequired,
  removeFish: React.PropTypes.func.isRequired,
  addFish: React.PropTypes.func.isRequired,
  loadSamples: React.PropTypes.func.isRequired,
}

export default Inventory;
