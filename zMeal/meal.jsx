const Spinner = () => {
  return (
    <div className="Loading">
      <i className="bi bi-arrow-clockwise"></i>
    </div>
  );
};

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
    setLoading(true);
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((meal) => {
        setMeal(meal.meals[0]);
        setLoading(false);
      })
      .catch(function (err) {
        console.log("không tải được hoặc đang tải dữ liệu từ sever");
        return <Spinner />;
      });
  };

  React.useEffect(() => {
    const controller = new AbortController();

    if (keyword != "") {
      setLoading(true);
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + keyword, {
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((meal) => {
          setMeal(meal.meals[0]);
          setLoading(false);
        })
        .catch(function (err) {
          console.log("không tải được hoặc đang tải dữ liệu từ sever");
          return <Spinner />;
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
          autoFocus
          type="text"
          placeholder="Find here..."
          value={keyword}
          onChange={(e) => setKeyworld(e.target.value.trim())}
        />
        <button className="search btn-hover">
          <i className="bi bi-search"></i>
        </button>
        <button className="random btn-hover" onClick={getRandomMeal}>
          <i className="bi bi-shuffle"></i>
        </button>
      </div>
      <div className="main">{loading ? <Spinner /> : <Meal meal={meal} />}</div>
    </div>
  );
};
ReactDOM.render(<App />, root);
