import { FiGithub } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const SocialNetworks = () => {
  return (
    <ul className='flex gap-12 z-40'>
      <Link
        rel='noopener noreferrer'
        href={'https://github.com/SebaPerez90'}
        target='_blank'
        aria-label='social-network-link'
        className='cursor-pointer relative before:absolute before:w-9 before:h-9 before:bg-black before:-z-10 before:-left-[0.6em] before:-bottom-[0.6em] before:rounded-full text-white  after:absolute after:left-0 after:bottom-0 after:w-full after:h-full hover:after:bg-[#00000023] after:duration-150 after:rounded-full after:scale-[3.5] active:scale-90 after:z-10 social-network'>
        <FiGithub />
        <span className='absolute -left-3 top-11 text-base-font-300 opacity-0 font-semibold text-xs'>
          Github
        </span>
      </Link>
      <Link
        rel='noopener noreferrer'
        href={'https://x.com/_SebaPerez_'}
        target='_blank'
        aria-label='social-network-link'
        className='cursor-pointer relative before:absolute before:w-9 before:h-9 before:bg-black before:-z-10 before:-left-[0.6em] before:-bottom-[0.6em] before:rounded-full text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-full hover:after:bg-[#00000023] after:duration-150 after:rounded-full after:scale-[3.5] active:scale-90 after:z-10 social-network'>
        <FaXTwitter />
        <span className='absolute -left-3 top-11 text-base-font-300 opacity-0 font-semibold text-xs'>
          Twitter
        </span>
      </Link>
      <Link
        rel='noopener noreferrer'
        href={'https://www.linkedin.com/in/sebaperez90/'}
        target='_blank'
        aria-label='social-network-link'
        className='cursor-pointer relative before:absolute before:w-9 before:h-9 before:bg-light-400 before:-z-10 before:-left-[0.6em] before:-bottom-[0.6em] before:rounded-full text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-full before:bg-blue-700 hover:after:bg-[#00000023] after:duration-150 after:rounded-full after:scale-[3.5] active:scale-90 after:z-10 social-network'>
        <FaLinkedinIn />
        <span className='absolute -left-3 top-11 text-base-font-300 opacity-0 font-semibold text-xs'>
          LinkedIn
        </span>
      </Link>
    </ul>
  );
};

export default SocialNetworks;
