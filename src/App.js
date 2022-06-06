import "./styles.css";

export default function App() {
  return (
    <>
      <Child1
        name="raman"
        age={23}
        isMarried={false}
        hobbies={["Eat", "Sleep", "Code"]}
        more={{ address: "Hisar" }}
      />
      <Child2>
        <div> this is child 2 </div>
      </Child2>
    </>
  );
}

const Child1 = ({ name, age, isMarried, hobbies, more }) => {
  console.log(name, age, isMarried, hobbies, more);

  return (
    <>
      <h1> Child 1 </h1>
    </>
  );
};

const Child2 = (props) => {
  console.log(props);

  return (
    <>
      <h1> Child 2 </h1>
    </>
  );
};
