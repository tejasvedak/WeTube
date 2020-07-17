import React from 'react';
import './SideBarFooter.scss'

export function SideBarFooter() {
  return (
    <React.Fragment>
      <div className='footer-block'>
        <div>About Press Copyright</div>
        <div>Creators Advertise</div>
        <div>Developers</div>
        <div>Legal</div>
      </div>
      <div className='footer-block'>
        <div>Terms Privacy</div>
        <div>Policy & Safety</div>
        <div>Test new features</div>
      </div>
      <div className='footer-block'>
        <div>All prices include GST</div>
      </div>
      <div className='footer-block'>
        <div>© 2020 Youtube Clone App for educational purposes only</div>
      </div>
    </React.Fragment>
  );
}