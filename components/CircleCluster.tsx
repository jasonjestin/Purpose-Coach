'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type CircleSize = 'small' | 'medium' | 'large'
type GradientType = 'sunset' | 'sunrise' | 'none'

interface Position {
  top?: string
  left?: string
  right?: string
  bottom?: string
  transform?: string
}

interface CircleImage {
  src: string
  size: CircleSize
  position?: Position
  alt?: string
  gradient?: GradientType
  zIndex?: number
}

interface CircleClusterProps {
  images: CircleImage[]
  compact?: boolean
  className?: string
  height?: string
}

const sizeMap: Record<CircleSize, { desktop: number; mobile: number; border: number }> = {
  small: { desktop: 96, mobile: 80, border: 4 },
  medium: { desktop: 192, mobile: 120, border: 5 },
  large: { desktop: 384, mobile: 180, border: 6 },
}

const gradientMap: Record<GradientType, string> = {
  sunset: 'linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 50%, rgba(240, 147, 251, 0.7) 100%)',
  sunrise: 'linear-gradient(135deg, rgba(250, 112, 154, 0.7) 0%, rgba(254, 225, 64, 0.7) 100%)',
  none: 'none',
}

export default function CircleCluster({
  images,
  compact = false,
  className = '',
  height
}: CircleClusterProps) {
  const clusterHeight = height || (compact ? 'h-[300px] md:h-[400px]' : 'h-[500px] md:h-[700px]')

  return (
    <div className={`relative w-full ${clusterHeight} my-12 ${className}`}>
      {images.map((image, index) => {
        const sizes = sizeMap[image.size]
        const zIndex = image.zIndex || index + 1

        return (
          <motion.div
            key={index}
            className="absolute rounded-full overflow-hidden bg-white shadow-2xl"
            style={{
              width: `${sizes.desktop}px`,
              height: `${sizes.desktop}px`,
              top: image.position?.top,
              left: image.position?.left,
              right: image.position?.right,
              bottom: image.position?.bottom,
              transform: image.position?.transform,
              zIndex,
              padding: `${sizes.border}px`,
            }}
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              scale: 1.05,
              zIndex: 100,
              transition: { duration: 0.3 },
            }}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt || `Image ${index + 1}`}
                fill
                className="object-cover"
                sizes={`${sizes.desktop}px`}
              />
              {image.gradient && image.gradient !== 'none' && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: gradientMap[image.gradient] }}
                />
              )}
            </div>
          </motion.div>
        )
      })}

      {/* Mobile: Show fewer circles with adjusted sizing */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .absolute[style*="width: 384px"] { width: 180px !important; height: 180px !important; }
          .absolute[style*="width: 192px"] { width: 120px !important; height: 120px !important; }
          .absolute[style*="width: 96px"] { width: 80px !important; height: 80px !important; }
        }
      `}</style>
    </div>
  )
}
