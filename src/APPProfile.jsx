/** @format */

import "./App.css";
import Profile from "./components/Profile";
import Avartar from "./components/Avartar";

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("버튼이 클릭됨!");
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <form onSubmit={() => {}}>
        <input />
      </form>
      <Avartar
        image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        name="혜빈"
        title="프론트 개발자"
      />
      <Profile
        image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
        name="yala"
        title="backend 개발자
        "
      />
      <Profile
        image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
        name="yala"
        title="backend 개발자"
        isNew={true}
      />
    </>
  );
}
export default AppProfile;
