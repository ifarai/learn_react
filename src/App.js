function Greeting({ name }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>{name}, you now welcome into our ranks as fighting monk...</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Greeting name="Olebeng" />
      <Greeting name="Christine" />
      <Greeting name="Leonard" />
      <Greeting name="Farai" />
    </div>
  );
}
