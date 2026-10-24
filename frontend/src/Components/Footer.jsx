
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #e5e7eb', padding: '40px 20px', margin: 'auto' }}>
      <div style={{maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        gap:'20px'
        }}
        >
          <div>
            <h3 style={{color: '#f97316', marginBottom: '10px'}}>ShopNest</h3>
            <p style={{color: '#6b7280', fontSize: '0.9rem'}}>Your one-stop shop for all your needs!</p>
          </div>
         
         <div style={{display: 'flex', gap: '20px'}}>
            <link to='/about' style={{color: '#6b7280', fontSize: '0.9rem'}}>About Us</link>
            <link to='/return' style={{color: '#6b7280', fontSize: '0.9rem'}}>Return Policy</link>
            <link to='/disclaimer' style={{color: '#6b7280', fontSize: '0.9rem'}}>Disclaimer</link>  
            </div>

            <div style={{ color:'#a1a1aa', fontSize: '0.8rem', marginTop: '20px', width: '100%', textAlign: 'center'}}>
            &copy; {new Date().getFullYear()} ShopNest. All rights reserved.
            </div>
      </div>
    </footer>
  )
}

export default Footer


