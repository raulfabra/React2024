import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
import { TwitterFollowCarduseState } from "./TwitterFollowCarduseState";
export function App() {
  const formatUserName = (userName) => {
    return `@${userName}`;
  };

  return (
    //<article style={{display: "flex", alignItems: 'center', color: '#fff'}}> PARA VER COMO SON LOS ESTILOS EN VIVO

    /*<article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src="https://unavatar.io/midudev" alt="midudev" />
                <div className='tw-followCard-info'>
                    <strong>Miguel Angel Durán</strong>
                    <span className='tw-followCard-infoUserName' >@midudev</span>

                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>

        */ //ESTO ERA ASI AL PRINCIPIO, a partir de ahora MODULARIZAMOS, REFACTORIZAMOS, COMO QUIERAS DECIRLO
    //Lo siguiente es lo mismo <>, que <React.Fragment></React.Fragment>, pero como se puede ver mas facil de leer.

    /*<section className="app">
      <TwitterFollowCard formatUserName={formatUserName} isFollowing={true} userName="midudev" name="Miguel Angel Durán" />
      <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="pheralb" name="Pablo Hérnandez" />
      <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="vxnder" name="VanderHart"/>

    </section> */

    /*Existe una Prop ESPECIAL, RESERVADA, que se llama children, sirve para el ejemplo siguiente (explicado que es children en TwitterFollowCard)*/

    /*<section className="app">
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={true}
        userName="midudev"
      >
        Miguel Angel Durán
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="pheralb"
      >
        Pablo Hérnandez
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="vxnder"
        name="VanderHart"
      />
    </section>*/
    <section className="app">
      <TwitterFollowCarduseState
        formatUserName={formatUserName}
        userName="midudev"
      >
        Miguel Angel Durán
      </TwitterFollowCarduseState>
      <TwitterFollowCarduseState
        formatUserName={formatUserName}
        userName="pheralb"
      >
        Pablo Hérnandez
      </TwitterFollowCarduseState>
      <TwitterFollowCarduseState
        formatUserName={formatUserName}
        userName="vxnder"
      >
        VanderHander
      </TwitterFollowCarduseState>
    </section>
  );
}

//YA TENDRIAMOS NUESTRO COMPONENTE, PERO.... esto se podria reutilizar? NO, la base de la reutilizacion es parametrizar codigo, las propiedades, los parametros. Para reutilizar componentes debemos de pasarle la informacion que nos interese. En el ejemplo, por ejemplo (valga la redundancia), es interesante parametrizar el Username.

//TEMA PROPS. Podemos pasar propeidades primarias como son numeros, string, bolean... pero es muy importante saber que podemos pasar funciones, objetos... por eso lo del formatUserName, es un ejemplo tonto, pero asi se ve porque es tan importante el tema de Componentes y poder pasar de padres a hijos funciones o callbacks

//Otro aspecto muuy importante, nunca modificar las props. SI en la funcion que recibe las props queremos modificarlas por lo que sea, guardar la mod. en una nueva variable pero nunca modificar la prop.
