import { useState } from "react"
import { EXAMPLES } from "../data";
import TabButton from "../components/TabButon.jsx";

export default function Exemples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelected(selectedButton) {
    let lista = ["Components", "JSX", "Props", "State"]
    setSelectedTopic(lista[selectedButton - 1])
  }

  let tabContent = <div id="tab-content"> <p>Please select a topic.</p></div>

  if (selectedTopic) {
    tabContent = <div id="tab-content"> 
    <h3>{EXAMPLES[selectedTopic].title}.</h3>
    <p>{EXAMPLES[selectedTopic].description}.</p>
    <code>{EXAMPLES[selectedTopic].code}</code></div>
  }

  return (
    <section id="examples">
      <h2>Exemples</h2>
      <menu>
        <TabButton isSelected={selectedTopic === "Components"} onSelect={() => handleSelected(1)}>Components</TabButton>
        <TabButton isSelected={selectedTopic === "JSX"} onSelect={() => handleSelected(2)}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === "Props"} onSelect={() => handleSelected(3)}>Props</TabButton>
        <TabButton isSelected={selectedTopic === "State"} onSelect={() => handleSelected(4)}>State</TabButton>
      </menu>

      {tabContent}
    </section>
  );
}