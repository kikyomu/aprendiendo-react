import type { CSSProperties } from "react";

const firstName = 'Gisella';
const lastName = 'Franco';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isActive = false;

const address = {
  zipCode: 'ABC-123',
  country: 'Canadá',
};

const myStyles: CSSProperties = {
  backgroundColor: '#9084ff',
  borderRadius: 20,
  padding: 15,
  marginTop: 30,
};

export const MyAwesomeApp = () => {
  return (
    <>
      <h1>{firstName}</h1> 
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(', ')}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? 'Activo' : 'No activo'}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>

    </>
  );
};

// export function MyAwesomeApp() {
//   return (
//     <>
//       <h1>Gisella</h1> 
//       <h3>Franco</h3>
//     </>
//   );
// }