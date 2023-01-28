function ConditionalDemo() {
    const list_guest = [];
    const live_point = -10;
    const isActive = false;
    const status = "PENDING"; //[DONE,FAIL,PENDING]
  
    const LivePoints = () => {
      if (live_point >= 100) {
        return <em>Tienes toda la vida</em>;
      } else if (live_point < 60) {
        return <em>Ya casi te mueres</em>;
      } else {
        return <em>Te moriste posiblemente</em>;
      }
    };
  
    const Status = ({ value }) => {
      switch (value) {
        case "DONE":
          return <p>El paquete se entrego</p>;
        case "FAIL":
          return <p>Se robaron tu paquete</p>;
        default:
          return <p>En camino</p>;
      }
    };

    return (
      <>
        {/* if ternario
  
          condicion ? true ":" false
        
        */}
        {list_guest.length ? (
          <h2>YA tienes invitados</h2>
        ) : (
          <>
            <h2>Agrega un invitado a la lista</h2>
            <button>Send</button>
          </>
        )}
  
        <LivePoints />
        {/* utilizado mas cuando solo quieren mostrar un elemento sin colocar un default */}
        {!isActive && <p>Si aun puedo continuar</p>}
  
        <Status value={status} />
        <Status value={'DONE'} />
        <Status value={'FAIL'} />
  
      </>
    );

  }
  
  export default ConditionalDemo;
  