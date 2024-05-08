export default function Brand({ imgStyle, textStyle, Logo }) {
    return (
      <div className="brand">
        <img style={imgStyle} src={Logo} alt="Logo" />
        <p style={textStyle}>MA COOKING</p>
      </div>
    );
  }