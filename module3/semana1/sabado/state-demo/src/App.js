import "./App.css";
import { useState } from "react";
import { EmptyMessage, FormGuest, CardGuest } from "./components";
function App() {
  const [list, setList] = useState([]); //[{...},...]
  //funcion demo para tener la data
  const addData = (newGuest) => {
    //1)
    const newList = [...list];
    newList.push(newGuest);
    setList(newList);
    //2)
    // [1,2,3]   => [ 1,2,3, nuevoelemento]
    //setList(prevList=> [...prevList,newGuest])
  };

  //elimiar un element  pop ushift splice filter
  const deleteGuest = (index) => {
    const newListeDelete = [...list];
    newListeDelete.splice(index, 1);
    setList(newListeDelete);
  };

  //sort alphabetically

  const sortA = () => {

    const newList = [...list];
    console.log("sort1",newList)

    //{..},{..}
    newList.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    
    });

    console.log("sort2",newList)
    setList(newList);
  };
  return (
    <div className="App">
      <div className="section-guest">
        <>
          <FormGuest getGuest={addData} />
          <button onClick={sortA}>Sort</button>
        </>

        <div className="section-list">
          {/* conditional render */}
          {list.length ? (
            list.map((guest, guest_index) => (
              <CardGuest
                /**
                 *  guest = {name,emial}
                 */
                //1)
                {...guest}
                onDelete={() => deleteGuest(guest_index)}
                //2)
                //name={guest.name}
                //email={guest.email}
                key={guest_index}
              />
            ))
          ) : (
            <EmptyMessage />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
