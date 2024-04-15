import { useState } from "react"
import { EXAMPLES } from "../data";
import TabButton from "./TabButon.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";


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
    <Section title="Exemples" id="examples">
      <Tabs
        //ButtonsContainer="div"
        buttons={
          <>
            <TabButton isSelected={selectedTopic === "Components"} onClick={() => handleSelected(1)}>Components</TabButton>
            <TabButton isSelected={selectedTopic === "JSX"} onClick={() => handleSelected(2)}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "Props"} onClick={() => handleSelected(3)}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "State"} onClick={() => handleSelected(4)}>State</TabButton>
          </>
        }>
        {tabContent}
      </Tabs>
      <menu>


      </menu>


    </Section>
  );
}