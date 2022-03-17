import writers from "./Writers.js"

function App() {
  return(
    <div>
   <h1>Writer profiles</h1>
   <div className="container">
{
  writers.map((writer)=>(
    <div key={writer.id} className="card">
    <img 
    src={`images/${writer.avatar}.png`}
    height = '300px'
    width = '300px'
    alt={writers.img}
    />
    <div className="textGroup">
    <h3>{writers.Name}</h3>
    <p>{writers.email}</p>
    <p>{writers.phone}</p>
    </div>
    </div>
  ))}
</div>
</div>
  );
}

export default App;
