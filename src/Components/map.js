function Map({ location = "Metropolis Tower, Dubai" }) {
  const encodedLocation = encodeURIComponent(location);
  const src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.5103945411933!2d55.27682341429319!3d25.204849183852755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ba30d80804f%3A0x251b5ef5e5e2a108!2sMetropolis%20Tower!5e0!3m2!1sen!2sae!4v1650158248104!5m2!1sen!2sae`;

  return (
    <div style={{ 
      width: '200px', 
      height: '100px', 
      border: '1px solid gray', 
      borderRadius: '5px', 
      marginRight: '120px',
      marginTop: '20px',
      marginBottom: '30px',
    }}>
      <iframe 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        scrolling="no" 
        marginHeight="0" 
        marginWidth="0" 
        src={src}
      ></iframe>
    </div>
  );
}

export default Map;