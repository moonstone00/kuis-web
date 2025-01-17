import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: '72px',
    margin: '0',
  },
  subheading: {
    fontSize: '24px',
    margin: '10px 0',
  },
  link: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#007bff',
    textDecoration: 'none',
  },
};

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.subheading}>Page Not Found</p>
      <a href="/" style={styles.link}>Kembali</a>
    </div>
  );
};

export default NotFoundPage;