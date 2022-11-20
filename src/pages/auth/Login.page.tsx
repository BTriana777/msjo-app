import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Auth.style.module.scss';

const Login: React.FC = () => {

  const navigate= useNavigate();

  return (
    <div className={styles['auth-main-container']}>
      <div className={styles['auth-back-img']}>
      </div>
      <form>
        <h1>Inicio de Sesion</h1>
        <div className={styles['auth-inputs-container']}>
          <div className={styles['auth-input']}>
            <label htmlFor="email">Correo</label>
            <input type="email" name="email" placeholder='Ingresa el Correo'/>
          </div>
          <div className={styles['auth-input']}>
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" placeholder='Ingresa la contraseña'/>
          </div> 
        </div>
        <button>Iniciar Sesion</button>
        <p>No tienes cuenta? <span onClick={()=> navigate("/register")}>Registrate</span></p>
      </form>
    </div>
  )
}

export default Login