function Map() {
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.894468374892!2d-97.74318458511658!3d30.267383281791707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c4b4f25b308c3a9!2sTexas%20State%20Capitol!5e0!3m2!1sen!2sus!4v1618995720199!5m2!1sen!2sus"
      ></iframe>
    </div>
  );
}

export default Map;
