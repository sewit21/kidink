import React, { Component } from "react";
import "./pages.css";

class Try extends Component {
  state = {
    loading: true,
    menu: [],
    currentlySelected: null,
    currentSelectLabel: "All",
  };

  async componentDidMount() {
    const key = "0";
    const food = " ";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}&Key=${key}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      menu: data.meals,
      Dish: data.strMeal,
      picture: data.strMealThumb,
      Type: data.strArea,
      Category: data.strCategory,
      Instructions: data.strInstructions,
      loading: false,
    });
    console.log(data.meals[0]);
  }

  render() {
    const { menu } = this.state;
    console.log("Hello", menu);
    return (
      <>
        <label htmlFor="searchs">
          <select
            id="name"
            value={this.state.currentSelectLabel}
            onChange={this.onChange}
            onBlur={(e) => this.setState(e.target.value)}
            disabled={menu.length === 0}
          >
            <option>All</option>
            {menu.map((item) => {
              return (
                <option key={item.strMeal} value={item.strMeal}>
                  {" "}
                  {item.strMeal}
                </option>
              );
            })}
          </select>
        </label>

        {this.state.currentlySelected && (
          <div className="datas">
            <div> Dish: {this.state.currentlySelected.strMeal}</div>
            <img src={this.state.currentlySelected.strMealThumb} alt="" />
            <div>Type: {this.state.currentlySelected.strArea}</div>
            <div> Category: {this.state.currentlySelected.strCategory}</div>
            <div>
              {" "}
              Instructions: {this.state.currentlySelected.strInstructions}
            </div>
          </div>
        )}
      </>
    );
  }

  onChange = (e) => {
    console.log("Data", e.target.value);
    this.setState({ currentSelectLabel: e.target.value });

    if (e.target.value === "All") {
      this.setState({ currentlySelected: null });
    } else {
      const selectedItems = this.findSelectedMenu(e.target.value);
      if (selectedItems) {
        this.setState({ currentlySelected: e.target.value });
      }
      this.setState({ currentlySelected: null });
    }
  };

  findSelectedMenu = (menuItem) => {
    return (
      this.state.menu.find((item) => item.strMeal === menuItem),
      this.state.menu.find((item) => item.strArea === menuItem)
    );
  };
}

export default Try;
