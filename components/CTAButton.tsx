'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CTAButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'white'
  size?: 'md' | 'lg'
  onClick?: () => void
  href?: string
  className?: string
}

export default function CTAButton({
  children,
  variant = 'primary',
  size = 'lg',
  onClick,
  href,
  className = '',
}: CTAButtonProps) {
  const baseStyles = 'rounded-full font-semibold transition-all shadow-lg inline-block text-center'

  const sizeStyles = {
    md: 'px-8 py-3 text-base',
    lg: 'px-12 py-4 text-lg',
  }

  const variantStyles = {
    primary: 'bg-coral text-white hover:bg-opacity-90 hover:shadow-xl',
    secondary: 'bg-navy-deep text-white hover:bg-opacity-90',
    white: 'bg-white text-coral hover:bg-opacity-90 hover:shadow-xl',
  }

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

  const Component = motion.button

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <Component
      className={classes}
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </Component>
  )
}
