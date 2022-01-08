const randomURL = "https://www.themealdb.com/api/json/v1/1/random.php";
const searchURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const Spinner = () => {
 return<i className="bi bi-arrow-clockwise"></i>
}

const Meal = ({ meal }) => {
  return (
    <div className="meal">
      <h1 className="title">{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="thumbnail" />
      <p className="instructions">{meal.strInstructions}</p>
    </div>
  );
};
const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [meal, setMeal] = React.useState(null);
  const [keyword, setKeyworld] = React.useState("");
  const getRandomMeal = () => {
    {
      setLoading(true);
    }
  };

  React.useEffect(() => {
    const controller = new AbortController();

    if (keyword != "") {
      setLoading(true);
      fetch(searchURL + keyword, { signal: controller.signal });
      fetch("http://example.com/movies.json")
        .then((res) => res.json())
        .then((meal) => {
          setMeal(meal.meals[0]);
          setLoading(false);
        });
    }
    return () => {
      controller.abort();
      setLoading(false);
    };
  }, [keyword]);

  React.useEffect(() => {
    getRandomMeal();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1 className="heading">Meal Finder</h1>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyworld(e.target.value.trim())}
        />
        <button className="search">
          <i className="bi bi-search"></i>
        </button>
        <button className="random" onClick={getRandomMeal}>
          <i className="bi bi-shuffle"></i>
        </button>
      </div>
      <div className="main">{loading ? <Spinner /> : <Meal meal={meal} />}</div>
    </div>
  );
};
ReactDOM.render(<App />, root);