import React from 'react';

export default function Footer(){
  return (
    <div className="footer">
      <div className="container">
        © {new Date().getFullYear()} DE Tech Solutions Pvt. Ltd. — All rights reserved.
      </div>
    </div>
  );
}
