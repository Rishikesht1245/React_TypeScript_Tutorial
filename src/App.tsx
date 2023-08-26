import "./App.css";
// import Counter from "./components/Hooks/State/Counter";
// import LoggedIn from "./components/Hooks/State/LoggedIn";

//==================== BASIC PROPS SECTION ======================= //
// import Greet from "./components/BasicProps/Greet";
// import Heading from "./components/BasicProps/Heading";
// import Oscar from "./components/BasicProps/Oscar";
// import Person from "./components/BasicProps/Person";
// import Personlist from "./components/BasicProps/Personlist";
// import Status from "./components/BasicProps/Status";

// function App() {
//   const personName = {
//     firstName: "Bruce",
//     lastName: "Lee",
//   };

//   //array of 3 objects
//   const nameList = [
//     {
//       first: "Bruce",
//       last: "wayne",
//     },
//     {
//       first: "Bruce",
//       last: "Kali",
//     },
//     {
//       first: "Bruce",
//       last: "Rock",
//     },
//   ];
//   return (
//     <div className="App">
//       <Greet name="Viswas" isLoggedIn={true} />
//       <Person name={personName} />
//       <Personlist names={nameList} />

//       <Status status="error" />

//       <Oscar>
//         <Heading>Oscar goes to Rishikesh</Heading>
//       </Oscar>
//     </div>
//   );
// }

// ================================================================ //

//======================== EVENT PROPS ============================ //
// import Button from "./components/EventProps/Button";
// import Input from "./components/EventProps/Input";

// const App = () => {
//   return (
//     <div>
//       <Button
//         handleClick={(event, id) => {
//           console.log("Button Clicked", event, id);
//         }}
//       />

//       <Input value="" handleChange={(event) => console.log(event)} />
//     </div>
//   );
// };

// export default App;
// ================================================================ //

//============================ STYLE PROPS ========================= //
// import Container from "./components/StyleProps/Container";
// const App = () => {
//   return (
//     <div>
//       <Container
//         styles={{ border: "1px solid black", padding: "1rem", color: "red" }}
//       />
//     </div>
//   );
// };
// export default App;

// =================================================================== //

// ============================== HOOKS - STATE ====================== //
// import User from "./components/Hooks/State/User";
// import { ThemeContextProvider } from "./components/Context/ThemContext";
// import Box from "./components/Context/Box";
// const App = () => {
//   return (
//     <div>
//       <ThemeContextProvider>
//         <Box />
//       </ThemeContextProvider>
//     </div>
//   );
// };
// export default App;

//=================== USE CONTEXT HOOK FOR FUTURE VALUES =====================//
// import { UserContextProvider } from "./components/Context/UserContext";
// import User from "./components/Context/User";
// const App = () => {
//   return (
//     <div className="App">
//       <UserContextProvider>
//         <User />
//       </UserContextProvider>
//     </div>
//   );
// };
// export default App;

// ================= USE REF HOOK =============================//
// import DomRef from "./components/Refs/DomRef";
// import MutableRef from "./components/Refs/MutableRef";
// const App = () => {
//   return (
//     <div>
//       <DomRef />
//       <MutableRef />
//     </div>
//   );
// };
// export default App;

//====================== CLASS COMPONENTS ======================//
// import { Counter } from "./components/Class/Counter";
// import Private from "./components/Auth/Private";
// import Profile from "./components/Auth/Profile";
// const App = () => {
//   return (
//     <div>
//       <Private isLoggedIn={true} Component={Profile}></Private>
//     </div>
//   );
// };
// export default App;

//====================== GENERICS PROPS ======================//
import Lists from "./components/Generics/Lists";
const App = () => {
  return (
    <div>
      {/* items as string */}
      <Lists
        items={["batman", "superman", "spiderman"]}
        onClick={(item) => console.log(item)}
      />

      {/* items as numbers */}
      <Lists items={[1, 2, 3]} onClick={(item) => console.log(item)} />

      {/* Items as array of objects */}
      <Lists
        items={[
          {
            first: "bru",
            last: "coffee",
          },
          {
            first: "Kannan",
            last: "Devan",
          },
          {
            first: "Instant",
            last: "coffee",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
};
export default App;
