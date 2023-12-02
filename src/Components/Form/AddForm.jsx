import { DateRange } from 'react-date-range'
import { TbFidgetSpinner } from 'react-icons/tb'
// import { categories } from '../Categories/categoriesData'
const AddForm = ({
  handleSubmit,
  dates,
  handleDates,
  loading = false,
  handleImageChange,
  uploadButtonText,
}) => {
  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
            {/* <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Location
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='location'
                id='location'
                type='text'
                placeholder='Location'
                required
              />
            </div> */}

            {/* <div className='space-y-1 text-sm'>
              <label htmlFor='category' className='block text-gray-600'>
                Category
              </label>
              <select
                required
                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                name='category'
              >
                {categories.map(category => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div> */}

            <div className='space-y-1'>
              <label htmlFor='location' className='block text-gray-600'>
                Select Availability Range
              </label>
              <DateRange 
              rangeColors={['#F43F5E']}
              ranges={[dates]}
              onChange={handleDates}
              minDate={new Date()}
               />
            </div>
          </div>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='name' className='block text-gray-600'>
                Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='name'
                id='name'
                type='text'
                placeholder='name'
                required
              />
            </div>

            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                      Upload Image
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                  Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='price'
                  id='price'
                  type='number'
                  placeholder='Price'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='prize' className='block text-gray-600'>
                  Prize Money 
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='prize_money'
                  id='prize'
                  type='number'
                  placeholder='Prize Money'
                  required
                />
              </div>
            </div>

            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='submission' className='block text-gray-600'>
                  submission
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='submission'
                  id='submission'
                  type='text'
                  placeholder='submission'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='contest' className='block text-gray-600'>
                  contest Name
                </label>
                <label className="label">
                <select name="category" className="input input-bordered w-full">
                  <option value="">Select Contest</option>
                  <option value="gaming">Gaming</option>
                  <option value="business">Business Contest</option>
                  <option value="medical">medical Contest</option>
                  <option value="article">article Contest</option>
                </select>
              </label>
              </div>
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-gray-600'>
                Description
              </label>

              <textarea
                id='description'
                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                name='description'
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          {loading ? (
            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
          ) : (
            'Save & Continue'
          )}
        </button>
      </form>
    </div>
  )
}

export default AddForm