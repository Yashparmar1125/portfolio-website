import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
  variant: 'light' | 'dark'
}

const Logo: React.FC<LogoProps> = ({ className = '', variant }) => {
  return (
    <div className={`relative ${className}`} style={{ width: '165px', height: '59px', marginLeft: '-1px' }}>
      <Image
        src={variant === 'dark' ? '/img/logo_dark.png' : '/img/logo_grey.png'}
        alt="Logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  )
}

export default Logo


//Version 10.3.7

