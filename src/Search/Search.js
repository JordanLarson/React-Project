import React, { useState, useEffect } from "react";

function Search(props) {
    const [search, setSearch] = useState("")
    const [searchUrl, setSearchUrl]
    useEffect(() => {
        const makeApiCall = async () => {
            let searchUrl = "https://api.tronalddump.io/search/quote"
            let userChoice = {userChoice}
            const res =await fetch(search)
            const searchUrl = data.tags[userChoice];
            console.log(data.tags[0]);

        }
        
    })
    return (
        <div className = "searchbar">
            <form>
                
                </form> 

        </div> 
    )
}
export default Search

// function Search(props) {
//   const [input, setInput] = useState("");
//   const handleChange = e => {
//     console.log("handleChange clicked", e.target.value);
//     const userInput = e.target.value;
//     setInput(userInput);
//   };
//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log("handleSubmit clicked");
//     // input === "" ? props.onSubmitFromApp(60076) : props.onSubmitFromApp(input);
//     props.onSubmitFromApp(input);
//     setInput("");
//   };
//   return (
//     <div className="create-new">
//       <form onSubmit={handleSubmit}>
//         <h3>Enter your zipcode</h3>
//         <input
//           type="text"
//           placeholder=""
//           onChange={handleChange}
//           value={input}
//         />
//         <button>SUBMIT</button>
//       </form>
// <hr/>
//     </div>
//   );
// }

// export default Search;
