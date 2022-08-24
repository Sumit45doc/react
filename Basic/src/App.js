import React from "react";
import "./App.css";
import ContextFile1 from "./component/ContextFile1";
import { UserProvider } from "./component/MainContext";
// import RenderProps from "./component/RenderProps";
// import RenderPropsFile from "./component/RenderPropsFile";
//  import HocClick from "./component/HocClick";
// import HocHover from "./component/HocHover";
// import Errorfile from "./component/Errorfile";
// import Errortest from "./component/Errortest";
// import Portal from './component/Portal'
// import LifeCycle from "./component/LifeCycle";
// import MemoParent from "./component/MemoParent";
// import RegComponent from "./component/RegComponent"
// import PureComp from "./component/PureComp";
// import RefCon from "./component/RefCon";
// import FRParent from "./component/FRParent";
// import ParentRef from "./component/ParentRef";
// import Form from "./component/Form";
// import RefForm from "./component/RefForm";
// import ParentList from "./ReComponent/ParentList";
// import List from "./ReComponent/List";
// import State from "./ReComponent/State";
// import ParentProps from './ReComponent/ParentProps'
// import Parent from './component/Parent'
// import Condition from './component/Condition'
// import NumberList from "./component/NumberList";
// import HelloWorld from "./ReComponent/HelloWorld";

function App() {
  return (
    <React.StrictMode>
      <UserProvider value="Sumit">
        <ContextFile1 />
      </UserProvider>
      {/* <RenderProps>
        {(count, changeHandler) => (
          <RenderPropsFile count={count} changeHandler={changeHandler} />
        )}
      </RenderProps> */}

      {/* <HocClick name="sumit" />
      <HocHover /> */}
      {/* <Errortest>
        <Errorfile name="Rohan" />
      </Errortest>
      <Errortest>
        <Errorfile name="sumit" />
      </Errortest> */}

      {/* <Portal/> */}
      {/* <LifeCycle /> */}
      {/* <MemoParent /> */}
      {/* <RegComponent/>
      <PureComp/> */}
      {/* <RefCon/> */}
      {/* <FRParent/> */}
      {/* <ParentRef/> */}
      {/* <RefForm /> */}
      {/* <Form /> */}
      {/* <ParentList /> */}
      {/* <List /> */}
      {/* <State /> */}
      {/* <ParentProps /> */}
      {/* <Parent />   */}
      {/* <Condition /> */}
      {/* <NumberList /> */}
      {/* <HelloWorld /> */}
    </React.StrictMode>
  );
}

export default App;
