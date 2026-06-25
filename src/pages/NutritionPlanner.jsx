import CalorieCalculator from "../nutrition/CalorieCalculator";
import MealPlanner from "../nutrition/MealPlanner";
import MacroTracker from "../nutrition/MacroTracker";
import FoodDatabase from "../nutrition/FoodDatabase";
import WeeklyReport from "../nutrition/WeeklyReport";
import "./Nutrition.css";
export default function NutritionPlanner() {
  return (
    <div>
      <h1>Nutrition Planner</h1>

      <CalorieCalculator />
      <MealPlanner />
      <MacroTracker />
      <FoodDatabase />
      <WeeklyReport />
    </div>
  );
}