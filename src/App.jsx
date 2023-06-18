import "./App.css";
import { Button } from "./components/button";
import { Quote } from "./components/quote";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data, isPending, error } = useFetch();

  const copyQuote = () => {
    navigator.clipboard.writeText(
      data.quote + " - " + data.character + " from " + data.anime
    );
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <>
          <Quote
            cite={data.key}
            quote={data.quote}
            character={data.character}
            anime={data.anime}
          />
          <div className="btn">
            <Button onClicks={copyQuote} text="Copy quote" />
          </div>
        </>
      )}
    </>
  );
}

export default App;
