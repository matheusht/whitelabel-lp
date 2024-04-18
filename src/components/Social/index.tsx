// import { RiWhatsappFill, RiWhatsappLine } from '@remixicon/react'

import { WhatsappIcon } from './whatsapp'

export function Social() {
  return (
    <>
      <div className="fixed bottom-3 right-5 cursor-pointer text-green">
        {/* <RiWhatsappFill size={80} className="text-green" /> */}
        <a href="#" target="_blank">
          <WhatsappIcon width={80} height={82} />
        </a>
      </div>
    </>
  )
}
