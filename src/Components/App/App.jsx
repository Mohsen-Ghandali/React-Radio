import Form from "../Forms/Form";

const App = () => {
const selectGender=(e)=>{
console.log(e.target.value);
}

  return (
    <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2 ">
      <Form  selectGender={selectGender}/>
    </div>
  );
};

export default App;
