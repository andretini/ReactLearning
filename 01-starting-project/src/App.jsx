import { useState } from "react"

import reactImg from "./assets/react-core-concepts.png"
import componentsImg from "./assets/components.png"

import Header from "./components/Header.jsx";
import TabButton from "./components/TabButon.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";


function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <div id="tab-content"> <p>Please select a topic.</p></div> 

  if (selectedTopic){
      tabContent = <div id="tab-content"> <h3>{EXAMPLES[selectedTopic].title}.</h3> <p>{EXAMPLES[selectedTopic].description}.</p> <code>{EXAMPLES[selectedTopic].code}</code></div>
  
  }

  function handleSelected(selectedButton) {
    let lista = ["Components", "JSX", "Props", "State"]
    setSelectedTopic(lista[selectedButton - 1])
    console.log(selectedTopic)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>

            <CoreConcepts {...CORE_CONCEPTS[0]} />

            <CoreConcepts {...CORE_CONCEPTS[1]} />

            <CoreConcepts {...CORE_CONCEPTS[2]} />

            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Exemples</h2>
          <menu>
            <TabButton onSelect={() => handleSelected(1)}>Components</TabButton>
            <TabButton onSelect={() => handleSelected(2)}>JSX</TabButton>
            <TabButton onSelect={() => handleSelected(3)}>Props</TabButton>
            <TabButton onSelect={() => handleSelected(4)}>State</TabButton>
          </menu>

          {tabContent}
        </section>

      </main>
    </div>
  );
}

export default App;