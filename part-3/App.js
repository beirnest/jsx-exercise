function App() {
    return (
      <div>
        <Person
          name="Kyle"
          age={32}
          hobbies={["art", "gardening", "drinking beer"]}
        />
        <Person name="Anna" age={34} hobbies={["televsion", "writing"]} />
        <Person
          name="Jeremy"
          age={22}
          hobbies={["surfing", "going to concerts", "politics"]}
        />
        <Person name="Hannah" age={12}hobbies={["school", "TikTok",]}/>
      </div>
    );
}