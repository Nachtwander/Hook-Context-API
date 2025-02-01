import { useAuth } from '../Providers/authProvider';

export default function UserProfile() {
  const { user, login, logout } = useAuth();

  return (
    <div>
        {/*Si el usuario es distinto de '', loguin, de otro modo, iniciar sesion*/}
      {user ? (
        <div>
          <p>Bienvenido: {user}</p>
          <button onClick={logout}>Cerrar Sesion</button>
        </div>
      ) : (
        <button onClick={login}>Iniciar Sesion</button>
      )}
    </div>
  );
}