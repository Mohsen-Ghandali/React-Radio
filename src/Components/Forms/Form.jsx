const Form = ({ selectGender }) => {
    return (
        <div>

            <div>
                <label htmlFor="Female" >Female</label>
                <input type="radio" name="gender" value="female" className="text-white mx-2" onChange={ selectGender} />

                <label htmlFor="male" >Male</label>
                <input type="radio" name="gender" value="male" className="text-white mx-2" onChange={ selectGender} />
            </div >

        </div >
    );
};

export default Form;




