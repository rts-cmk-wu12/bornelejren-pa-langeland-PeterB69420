import { useRoutes } from "react-router";
import routes from "~react-pages"

function App() {
  

  return (
    <>
      <main>
    {useRoutes(routes)}
    </main>
    </>
  )
}

export default App
