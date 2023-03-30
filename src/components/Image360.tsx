'use client'

import Image from 'next/image'

import sofa from '/public/sofa.png'
import sofagif from '/public/sofa.gif'
import o360 from '/public/360.png'
import close from '/public/close.png'

import { useState } from 'react'

export function Image360() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex justify-end w-full">
      <div className="flex flex-col relative ">
        {open ? (
          <>
            <Image src={sofagif} alt="" />
            <button
              className="absolute top-0 right-12"
              onClick={() => setOpen(false)}
            >
              <Image src={close} alt="" />
            </button>
          </>
        ) : (
          <>
            <Image src={sofa} alt="" width={1920} quality={100} />
            <button
              className="absolute top-0 right-12"
              onClick={() => setOpen(true)}
            >
              <Image src={o360} alt="" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
