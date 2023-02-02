import React from 'react'

const About = () => {
  return (
    <div 
        name="about"
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
        <div className='max-width-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, ut exercitationem qui sunt deleniti, voluptatibus adipisci in eveniet vel officiis architecto consequatur rerum possimus incidunt voluptatem laudantium fugiat voluptatum animi! Quis voluptate impedit ab officia ullam nam, quidem dicta itaque commodi illo voluptatum est, sint, quaerat vitae veritatis quia dignissimos.</p>
            <br />
            <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum nemo cum officiis consequuntur ipsam numquam quas, quasi eos fuga eaque fugiat possimus, alias, at optio vel ut illum aut. Quam ipsum architecto quia incidunt labore? Totam dolores quod in repellat inventore officia est quo aperiam, odio iure, enim id!</p>
        </div>
    </div>
  )
}

export default About
