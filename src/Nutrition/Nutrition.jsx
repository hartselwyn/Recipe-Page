import React from "react";
import "./Nutrition.css";

const Nutrition = () => {
  const nutrients = [
    {
      id: 1,
      nutrient: "Calories",
      measurment: "277Kcal",
    },

    {
      id: 2,
      nutrient: "Carbs",
      measurment: "0g",
    },

    {
      id: 3,
      nutrient: "Protien",
      measurment: "20g",
    },

    {
      id: 4,
      nutrient: "Fat",
      measurment: "22g",
    },
  ];
  return (
    <div className="nutrition_container_components">
      <h1>Nutrition</h1>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className="nutrition_table">
        <tbody>
          {nutrients.map((nutrition) => (
            <tr key={nutrition.id} className="nutrients_container">
              <td>{nutrition.nutrient}</td>
              <td className="nutrition_measurement">{nutrition.measurment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Nutrition;
