import './style.css'

// import './bases/01-const-let'
// import './bases/02-template-string'
// import './bases/03-object-literal'
// import './bases/04-arrays'
// import './bases/05-functions'
// import './bases/06-obj-destructuring'
// import './bases/07-array-destructuring'
// import './bases/data/heroes.data'
import './bases/08-imp-exp'
import { getHeroesByOwner } from './bases/08-imp-exp';
import { Owner } from './bases/data/heroes.data';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <h1>Hola mundo</h1>
</section>
`

console.log(getHeroesByOwner(Owner.DC));