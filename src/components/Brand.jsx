import Logo from '../assets/img/logo.png'


export default function Brand({ imgStyle, textStyle }) {
    return (
      <div className="brand">
        <img style={imgStyle} src={Logo} alt="Logo" />
        <p style={textStyle}>MA COOKING</p>
      </div>
    );
  }