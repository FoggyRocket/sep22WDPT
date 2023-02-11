import { Link } from 'react-router-dom';

function CountriList({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country, index) => (
          <Link
            key={index}
            className="list-group-item list-group-item-action"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            to={`/dashboard/${country.alpha3Code}`}
          >
            <img
              width={20}
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            />
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriList;
