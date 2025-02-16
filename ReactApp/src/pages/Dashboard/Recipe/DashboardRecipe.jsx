import React, { useEffect, useState } from "react";
import { AuthOutlet } from "../../../components/outlets";
import RecipeCard from "../../../components/ui/RecipeCard";
import BASE_URI from "../../../app.config";
import axios from "axios";
import { API } from "../../../utils";

const DashboardRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  const getAllRecipes = async () => {
    try {
      const response = await axios.get(`${BASE_URI}/recipes/`);
      setRecipes(response.data);
    } catch (error) {
      API.error(error, "An error occurred while fetching the recipes");
    }
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <AuthOutlet>
      <h1>Recipes</h1>
      <section className="flex flex-wrap gap-3">
        {recipes[0] &&
          recipes.map((ele, ind) => {
            return <RecipeCard key={ind} data={ele} />;
          })}
      </section>
    </AuthOutlet>
  );
};

export default DashboardRecipe;
