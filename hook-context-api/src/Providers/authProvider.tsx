// import de AuthContext para usar en el provider
import { AuthContext } from "../Context/authContext";
// import de React para usar en el provider
import { ReactNode, useContext, useState } from "react";
// interface para usar children como props del tipo ReactNode
// los props se comportan como hijos de un componente
interface ViewReact {
  children: ReactNode;
}

//exportar funcion que recibe los props del tipo de la interface ViewReact
export function AuthProvider(props: ViewReact) {
  // crear un estado para el usuario
  const [user, setUser] = useState("");

  // usamos las funciones declaradas en el contexto para loguin y logout
  // set de user en el estado
  const login = () => {
    setUser("Javier");
  };
  const logout = () => {
    setUser("");
  };

  return (
    // usamos el contexto AuthContext para proveer los valores
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
// exportamos una constante que usamos para importar el provider
export const useAuth = () => useContext(AuthContext);
