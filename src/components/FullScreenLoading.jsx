import React from 'react'

const FullScreenLoading = ({loading}) => {
  return loading && (
    <div className='fixed inset-0 z-[999] flex items-center justify-center bg-white bg-opacity-90'>
        <div className='flex items-center justify-center space-x-2 text-gray-900'>
            <i className='fa-solid fa-spinner-third animate-spin text-2xl'></i>
            <span className='text-lg font-semibold'>
                {/* Spin */}
                <div className='w-8 h-8 rounded-full animate-spin border border-solid border-teal-600 border-t-transparent'></div>
            </span>
        </div>
    </div>
  )
}

export default FullScreenLoading