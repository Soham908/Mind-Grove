import Card from "../components/Card/Card";
import articles from "../data/mentalHealth.json";

export const Home = () => {
  const article = articles.happyArticles;

  return (
    <div className="d-flex flex-row justify-content-center" style={{ flexWrap:"wrap", marginLeft:"10px" }} >
      {
      article.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
};
