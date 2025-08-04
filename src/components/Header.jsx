import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className='header'>
      <div className='logo-box'>
        <img src={logo} alt='logo-title' />
      </div>
      <h2 className='form-title'>Software Enhancement Request Form</h2>
    </header>
  );
}
